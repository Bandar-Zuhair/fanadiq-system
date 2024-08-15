/* Function to prevent the page refresh by mistake */
window.addEventListener('beforeunload', function (event) {
    event.preventDefault(); // Prevent the default action
    event.returnValue = ''; // Set the return value to trigger the default browser confirmation dialog
});


(function () {
    if (window.history && window.history.pushState) {
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function (event) {
            window.history.pushState(null, null, window.location.href);
            alert("يالحبيب هدي شوية وانتبه");
        };
    }
})();



/* Header Nav Bar */
function toggleLinks(id) {
    var links = document.getElementById(id);
    var icon = document.getElementById("package_types_dropdown_icon_id");

    if (links.style.maxHeight) {
        links.style.maxHeight = null;
        icon.classList.remove("rotate");
    } else {
        links.style.maxHeight = links.scrollHeight + "px";
        icon.classList.add("rotate");
    }
}




/* Page Load Header Fade Animation */
setTimeout(function () {
    document.getElementById('body').style.opacity = "1";
}, 100);

















/* Function to show and hide different pachage details sections */
showPackageTypeSection = function (packageType, clickedElement) {

    // Play a sound effect
    new Audio('click.mp3').play();


    window.scrollTo(0, 0);


    if (packageType === 'clint') {
        create_new_clint_data_section.style.display = 'block';
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'none';
        create_new_package_including_and_not_including_data_section.style.display = 'none';
        create_new_clint_movements_plan_section.style.display = 'none';

    } else if (packageType === 'hotel') {
        create_new_clint_data_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'flex';
        create_new_flight_package_section.style.display = 'none';
        create_new_package_including_and_not_including_data_section.style.display = 'none';
        create_new_clint_movements_plan_section.style.display = 'none';

    } else if (packageType === 'flight') {
        create_new_clint_data_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'flex';
        create_new_package_including_and_not_including_data_section.style.display = 'none';
        create_new_clint_movements_plan_section.style.display = 'none';

    } else if (packageType === 'package_including') {
        create_new_clint_data_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'none';
        create_new_package_including_and_not_including_data_section.style.display = 'block';
        create_new_clint_movements_plan_section.style.display = 'none';

    } else if (packageType === 'transportation') {
        create_new_clint_data_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'none';
        create_new_package_including_and_not_including_data_section.style.display = 'none';
        create_new_clint_movements_plan_section.style.display = 'block';
    }


    // Change the color of the clicked element to red and reset others to black
    var links = document.querySelectorAll('.header_navbar_links a');
    links.forEach(function (link) {
        link.style.backgroundColor = (link === clickedElement) ? 'rgb(0, 46, 57)' : 'rgb(85, 127, 137)';
    });
}



































/* Dropdown airport line names functionality */
let adultPackagePersonAmountInput = document.getElementById('adult_package_person_amount_input_id');

// Get the options within the dropdown
let adultPackagePersonAmountInputOptions = document.querySelectorAll('#adult_whole_package_people_amount_dropdown h3');

adultPackagePersonAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        /* Save the clicked number in the variable for later use */
        adultPackagePersonAmountInput.value = option.textContent

        /* Store the inserted values in the stored p elements for later use (when importing) */
        document.getElementById('store_google_sheet_package_adult_amount_value').innerText = option.textContent;

        hideOverlay(); // Hide overlay after selection
    });
});










/* Dropdown company names functionality */
let companyNamesInput = document.getElementById('clint_company_name_input_id');

// Get the options within the dropdown
let companyNamesInputOptions = document.querySelectorAll('#company_names_dropdown h3');

companyNamesInputOptions.forEach(option => {
    option.addEventListener('click', () => {


        // Play a sound effect
        new Audio('click.mp3').play();


        /* if the clicked h3 element was delete then reset the 'clint_company_name_input_id' value */
        if (option.textContent === 'حذف') {
            companyNamesInput.value = '';

            /* Delete the innerText (in case if exist) */
            document.getElementById('store_google_sheet_clint_company_name_value').innerText = '';

        } else {
            companyNamesInput.value = option.textContent; // Set input value to selected option

            /* Store the inserted values in the stored p elements for later use (when importing) */
            document.getElementById('store_google_sheet_clint_company_name_value').innerText = option.textContent;
        }


        /* Reset the value of 'company_names_search_bar_input_id' after picking a hotek name */
        document.getElementById('company_names_search_bar_input_id').value = '';

        // Get the dropdown div associated with the input
        let dropdownDivOptions = document.getElementById('company_names_search_bar_input_id').closest('.searchable_names_dropdown_class').querySelectorAll('h3');

        // Reset the display of all <h3> elements
        dropdownDivOptions.forEach(option => {
            option.style.display = 'block'; // Show all options
        });


        hideOverlay(); // Hide overlay after selection
    });
});


let clintPackageTypeDiv = document.querySelectorAll('#clint_package_type_div input[type="checkbox"]');

clintPackageTypeDiv.forEach(checkbox => {
    checkbox.addEventListener('change', () => {

        // Play a sound effect
        new Audio('click.mp3').play();


        if (checkbox.checked) {
            clintPackageTypeDiv.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

















window.addEventListener('load', () => {
    let storedUserName = localStorage.getItem('user_name_code');

    if (storedUserName) {
        document.getElementById('website_users_name_input_id').value = storedUserName;
    }


    if (document.getElementById('website_users_name_input_id').value !== '') {
        fetchData();
    }


    /* Run a function to update the saved packages data for importing */
    updateDataBaseSavedDataNames()

});



// Dropdown website users names functionality
let websiteUsersNameInput = document.getElementById('website_users_name_input_id');
let previousValue = websiteUsersNameInput.value; // Store the initial value

// Get the options within the dropdown
let websiteUsersNameInputOptions = document.querySelectorAll('#website_users_names_dropdown h3');

websiteUsersNameInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        let newValue;

        if (option.textContent === 'سامي' || option.textContent === 'ابو سما') {
            newValue = `بكج مستر ${option.textContent}`; // Set input value to selected option
        } else {
            newValue = `بكج ${option.textContent}`; // Set input value to selected option
        }

        // Check if the new value is different from the current value
        if (websiteUsersNameInput.value !== newValue) {
            websiteUsersNameInput.value = newValue; // Update the input value

            fetchData();


            // Make the icon unclickable and visually disabled
            let submitIcon = document.getElementById('clint_inputs_submit_icon');
            submitIcon.style.opacity = '0';
            submitIcon.style.pointerEvents = 'none';
            submitIcon.disabled = true;


            // Store the selected value in localStorage
            localStorage.setItem('user_name_code', websiteUsersNameInput.value);

            // Update the previous value
            previousValue = newValue;
        }

        hideOverlay(); // Hide overlay after selection

    });
});



















/* Function for selecting and di-selecting checkbox packge including data */
// Define colors in the correct order
let colors = [
    'rgb(255, 255, 255)', // White
    'rgb(255, 0, 0)',     // Red
    'rgb(0, 255, 0)'      // Green
];

// Define initial colors for specific checkboxes
let initialColors = {
    'privet_car_with_driver_to_welcome_and_etc_checkbox': 'rgb(0, 255, 0)', // Green
    'hotel_booking_with_breakfast_for_2_people_checkbox': 'rgb(0, 255, 0)', // Green
    'welcome_goodbye_hotel_delivery_checkbox': 'rgb(0, 255, 0)', // Green
    'customer_service_24_hour_checkbox': 'rgb(0, 255, 0)', // Green
    'sms_card_with_internet_checkbox': 'rgb(0, 255, 0)', // Green
    'inner_flight_tickets_checkbox': 'rgb(0, 255, 0)', // Green
    'outer_flight_tickets_checkbox': 'rgb(255, 0, 0)', // Red
    'placese_visiting_cost_checkbox': 'rgb(255, 0, 0)', // Red
    'bali_taxes_not_covered_checkbox': 'rgb(255, 0, 0)' // Red
};

// Function to cycle through colors
function cycleColor(event) {
    let checkbox = event.target;
    let label = checkbox.nextElementSibling; // Get the label element

    // Get the current background color of the pseudo-element
    let currentColor = window.getComputedStyle(label, '::before').backgroundColor;

    // Find the index of the current color
    let currentIndex = colors.indexOf(currentColor);
    // Determine the next color index
    let nextIndex = (currentIndex + 1) % colors.length;
    // Get the next color
    let nextColor = colors[nextIndex];

    // Apply the next color
    label.style.setProperty('--checkbox-color', nextColor);
}

// Add event listeners to all checkboxes
document.querySelectorAll('#package_including_details_div input[type="checkbox"]').forEach(checkbox => {
    // Set initial color based on the checkbox ID
    let label = checkbox.nextElementSibling; // Get the label element
    let checkboxId = checkbox.id;
    let initialColor = initialColors[checkboxId] || 'rgb(255, 255, 255)'; // Default to white if not specified
    label.style.setProperty('--checkbox-color', initialColor);

    // Add click event listener
    checkbox.addEventListener('click', cycleColor);
});












/* Function to run the dropdown functonality for special room request */
let specialRoomRequestInput = document.getElementById('hotel_special_room_request_input_id');

// Get the options within the dropdown
let specialRoomRequestInputOptions = document.querySelectorAll('#special_room_request_dropdown h3');

specialRoomRequestInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();


        if (option.textContent === 'حذف') {
            specialRoomRequestInput.value = '';

        } else if (option.textContent === 'باقة شهر عسل') {
            specialRoomRequestInput.value = '+ باقة شهر عسل بعشاء رومانسي على ضوء الشموع + عصير + زينة لمرة واحدة + علاج سبا لمدة 60 دقيقة + إفطار عائم لمرة واحدة بالإضافة لسلة فواكه + شاي بعد الظهر'; // Set input value to selected option

        }


        hideOverlay(); // Hide overlay after selection

    });
});









/* Function to store the clicked hotel unit amount */


/* Dropdown airport line names functionality */
let hotelNameInput = document.getElementById('hotel_name_input_id');

// Get the options within the dropdown
let hotelNameInputOptions = document.querySelectorAll('#all_hotel_names_dropdown h3');

hotelNameInputOptions.forEach(option => {
    option.addEventListener('click', () => {


        // Play a sound effect
        new Audio('click.mp3').play();


        /* First store the corrent hotel name for later comparing (to reset the hotel room type or no need) */
        currentHotelName = hotelNameInput.value


        /* Set the input value with the clicked rooms number h3 innerText */
        hotelNameInput.value = option.textContent;
        hideOverlay(); // Hide overlay after selection


        /* Reset the value of 'all_hotel_names_search_bar_input_id' after picking a hotek name */
        document.getElementById('all_hotel_names_search_bar_input_id').value = '';

        // Get the dropdown div associated with the input
        let dropdownDivOptions = document.getElementById('all_hotel_names_search_bar_input_id').closest('.searchable_names_dropdown_class').querySelectorAll('h3');

        // Reset the display of all <h3> elements
        dropdownDivOptions.forEach(option => {
            option.style.display = 'block'; // Show all options
        });



        if (option.textContent !== currentHotelName) {
            document.getElementById('hotel_room_type_description_input_id').value = '';
        }


    });
});











/* Function to insert the hotel room view and including pool text */

/* Dropdown airport line names functionality */
let hotelRoomContainPoolInput = document.getElementById('hotel_room_contain_pool_input_id');

// Get the options within the dropdown
let hotelRoomContainPoolInputOptions = document.querySelectorAll('#hotel_room_contain_pool_dropdown h3');

hotelRoomContainPoolInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        if (option.textContent === 'حذف') {
            hotelRoomContainPoolInput.value = '';

        } else {
            hotelRoomContainPoolInput.value = `مع ${option.textContent}`;

        }

        /* Set the input value with the clicked rooms number h3 innerText */
        hideOverlay(); // Hide overlay after selection
    });
});





/* Dropdown airport line names functionality */
let hotelRoomViewInput = document.getElementById('hotel_room_view_input_id');

// Get the options within the dropdown
let hotelRoomViewInputOptions = document.querySelectorAll('#hotel_room_view_dropdown h3');

hotelRoomViewInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        if (option.textContent === 'حذف') {
            hotelRoomViewInput.value = '';

        } else {
            hotelRoomViewInput.value = `بإطلالة على ${option.textContent}`;

        }

        /* Set the input value with the clicked rooms number h3 innerText */
        hideOverlay(); // Hide overlay after selection
    });
});


























/* Function to store the clicked hotel unit amount */

/* Store the hotel total rooms number for later use (in hotel row data) */
let storeHotelTotalUnitNumber;

/* Dropdown airport line names functionality */
let hotelUnitAmountInput = document.getElementById('hotel_unit_amount_input_id');

// Get the options within the dropdown
let hotelUnitAmountInputOptions = document.querySelectorAll('#hotel_unit_amount_dropdown h3');

hotelUnitAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        /* Save the clicked number in the variable for later use */
        storeHotelTotalUnitNumber = option.textContent;

        /* Set the input value with the clicked rooms number h3 innerText */
        hotelUnitAmountInput.value = `عدد الوحدات ${option.textContent}`;
        hideOverlay(); // Hide overlay after selection
    });
});
















/* Function to create hotel room type description h3 dropdown elements */
let createRoomTypeDescripyionDropDown = function () {
    // Get the value of the hotel name input field
    let hotelNameInput = document.getElementById('hotel_name_input_id').value;

    // Get the input field where the selected room type description will be displayed
    let hotelRoomTypeDescriptionInput = document.getElementById('hotel_room_type_description_input_id');

    // Get the div where the room type description h3 elements will be appended
    let hotelRoomTypeDescriptionH3ElementsDiv = document.getElementById('hotel_room_type_description_h3_elements_div_id');

    // Check if the hotel name input field is not empty
    if (hotelNameInput !== '') {
        // Clear any existing content in the h3 elements div
        hotelRoomTypeDescriptionH3ElementsDiv.innerHTML = '';

        // Find the hotel object in the 'allHotelDataArray' that matches the hotel name input value
        let hotel = allHotelDataArray.find(hotel => hotel.hotelName === hotelNameInput);

        // If a matching hotel object is found
        if (hotel) {
            // Loop through each room type in the hotelRoomTypes array of the matching hotel object
            hotel.hotelRoomTypes.forEach(roomType => {
                // Create a new h3 element for the room type
                let h3 = document.createElement('h3');

                // Set the text content of the h3 element to the current room type
                h3.textContent = roomType;

                // Append the h3 element to the h3 elements div
                hotelRoomTypeDescriptionH3ElementsDiv.appendChild(h3);

                // Add a click event listener to the h3 element
                h3.addEventListener('click', () => {

                    // Play a sound effect
                    new Audio('click.mp3').play();

                    // When the h3 element is clicked, set the value of the room type description input field to the text content of the h3 element
                    hotelRoomTypeDescriptionInput.value = h3.textContent;



                    /* Reset the value of 'all_hotel_names_search_bar_input_id' after picking a hotek name */
                    document.getElementById('hotel_room_type_description_search_bar_input_id').value = '';

                    // Get the dropdown div associated with the input
                    let dropdownDivOptions = document.getElementById('hotel_room_type_description_search_bar_input_id').closest('.searchable_names_dropdown_class').querySelectorAll('h3');

                    // Reset the display of all <h3> elements
                    dropdownDivOptions.forEach(option => {
                        option.style.display = 'block'; // Show all options
                    });



                    // Hide the overlay (assuming hideOverlay function is defined elsewhere)
                    hideOverlay();
                });
            });
        }

        /* But if the hotel name input was empty then hide all the h3 elements */
    } else {
        // Clear any existing content in the h3 elements div
        hotelRoomTypeDescriptionH3ElementsDiv.innerHTML = '';
    }
}














// Praper the overlay layer variable
let overlayLayer = null;






















/* Function to clear searchable dropdown input filter h3 */
clearSearchableDropDownInputValue = function (targetInputToClear) {

    // Re-enable scrolling
    document.documentElement.style.overflow = 'auto';


    // Check if any dropdown with the class name 'searchable_names_dropdown_class' is visible and hide it
    let visibleDropdown_1 = document.querySelector('.searchable_names_dropdown_class.show');
    if (visibleDropdown_1) {
        visibleDropdown_1.classList.remove('show'); // Remove 'show' class to hide dropdown
    }


    // Reset all 'searchable_names_dropdown_class' elements back to their default styling
    let dropdownDivElements = document.querySelectorAll('.searchable_names_dropdown_class');
    dropdownDivElements.forEach(dropdown => {
        dropdown.style.maxHeight = ''; // Reset maxHeight to default
        dropdown.style.minHeight = ''; // Reset minHeight to default
        dropdown.style.transition = ''; // Reset transition to default
    });

    // Hide the overlay if it exists
    if (overlayLayer) {
        overlayLayer.style.opacity = '0'; // Set opacity to 0 for smooth disappearance

        setTimeout(() => {
            if (overlayLayer) {
                document.body.removeChild(overlayLayer); // Remove overlay from DOM
                overlayLayer = null; // Reset overlay variable
            }
        }, 200); // Assuming 200ms is the duration of your opacity transition
    }


    // Clear the input value
    const inputElement = document.getElementById(targetInputToClear);
    inputElement.value = '';


    // Get the dropdown div associated with the input
    let dropdownDiv = inputElement.closest('.searchable_names_dropdown_class');

    // Select all <h3> elements within the same dropdown div
    let options = dropdownDiv.querySelectorAll('h3');

    // Reset the display of all <h3> elements
    options.forEach(option => {
        option.style.display = 'block'; // Show all options
    });
};













// Select all elements with the class 'search_bar_input_class'
let searchBarInputElements = document.querySelectorAll('.search_bar_input_class');

// Add event listeners to each search bar input element
searchBarInputElements.forEach(input => {

    // Add a click event listener to the input element
    input.addEventListener('click', () => {
        // Find the closest parent element with the class 'searchable_names_dropdown_class'
        let dropdownDiv = input.closest('.searchable_names_dropdown_class');

        // Set a smooth transition for the height property
        dropdownDiv.style.transition = 'height 0.1s ease-in-out';

        // Set the height of the dropdown div to 80vh when the search bar is clicked
        dropdownDiv.style.maxHeight = '70vh';
        dropdownDiv.style.minHeight = '70vh';
    });

    // Add an input event listener to the input element
    input.addEventListener('input', () => {
        // Get the trimmed and lowercased value of the input element
        let filter = input.value.trim().toLowerCase();

        // Find the closest parent element with the class 'searchable_names_dropdown_class'
        let dropdownDiv = input.closest('.searchable_names_dropdown_class');

        // Select all <h3> elements within the same dropdown div
        let options = dropdownDiv.querySelectorAll('h3');

        // Initialize a counter for the number of visible options
        let visibleCount = 0;

        // Loop through each option in the dropdown
        options.forEach(option => {
            // Get the trimmed and lowercased text content of the option
            let optionText = option.textContent.trim().toLowerCase();

            // If the filter is empty and less than 6 options are visible, show the option
            if (filter === '' && visibleCount < 6) {
                option.style.display = 'block'; // Display the option
                visibleCount++; // Increment the visible options count
            }
            // If the option text includes the filter, show the option
            else if (optionText.includes(filter)) {
                option.style.display = 'block'; // Display the option
            }
            // Otherwise, hide the option
            else {
                option.style.display = 'none'; // Hide the option
            }
        });
    });
});






































/* Dropdown the package including sms cards and inner flight tickets amount */
// Set lastClickedClintMovementsCityInput when the sms card input field is clicked
document.getElementById('hotel_breakfast_people_amount_input_id').addEventListener('click', () => {
    lastClickedClintMovementsCityInput = document.getElementById('hotel_breakfast_people_amount_input_id');
});

document.getElementById('sms_card_with_internet_amount_input_id').addEventListener('click', () => {
    lastClickedClintMovementsCityInput = document.getElementById('sms_card_with_internet_amount_input_id');
});

document.getElementById('inner_flight_tickets_amount_input_id').addEventListener('click', () => {
    lastClickedClintMovementsCityInput = document.getElementById('inner_flight_tickets_amount_input_id');
});



// Get all the h3 elements within the dropdown
let smsCardWithInternetAmountInputOptions = document.querySelectorAll('#breakfast_and_sms_card_and_ticket_amount_dropdown h3');

// Add click event listener to each h3 element
smsCardWithInternetAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        if (lastClickedClintMovementsCityInput) { // Check if an input field was clicked before
            if (option.innerText === 'حذف') { // If the clicked h3 element's inner text is "حذف"
                lastClickedClintMovementsCityInput.value = ''; // Clear the value of the last clicked input field


            } else { // If the clicked h3 element's inner text is not "حذف"
                if (lastClickedClintMovementsCityInput.id === 'sms_card_with_internet_amount_input_id') {

                    if (option.textContent === 'غير شامل') {
                        lastClickedClintMovementsCityInput.value = '';

                    } else {
                        // Set the value of the sms card input field with the selected option
                        lastClickedClintMovementsCityInput.value = `شرائح إنترنت ل${option.textContent}`;

                    }




                } else if (lastClickedClintMovementsCityInput.id === 'inner_flight_tickets_amount_input_id') {

                    if (option.textContent === 'غير شامل') {
                        lastClickedClintMovementsCityInput.value = '';

                    } else {
                        // Set the value of the inner flight tickets input field with the selected option
                        lastClickedClintMovementsCityInput.value = `تذاكر الطيران الداخلي ل${option.textContent}`;

                    }


                } else if (lastClickedClintMovementsCityInput.id === 'hotel_breakfast_people_amount_input_id') {

                    if (option.textContent === 'غير شامل') {
                        lastClickedClintMovementsCityInput.value = 'غير شامل الإفطار';

                    } else {
                        lastClickedClintMovementsCityInput.value = `شامل الإفطار ل${option.textContent}`;

                    }

                }
            }
            hideOverlay(); // Hide the dropdown overlay after selection
        }
    });
});























/* Clint Flight Details */
/* Dropdown airport line names functionality */
let flightAirLineInput = document.getElementById('flight_air_line_input_id');

// Get the options within the dropdown
let flightAirLineInputOptions = document.querySelectorAll('#airport_line_name_dropdown h3');

flightAirLineInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        if (option.textContent === 'حذف') {
            flightAirLineInput.value = ''; // Set input value as '' if the 'حذف' h3 is clicked

        } else {
            flightAirLineInput.value = option.textContent; // Set input value to selected option
        }

        hideOverlay(); // Hide overlay after selection
    });
});

/* Function to store the clicjed city name inside the clikced unput */
insertFlightDestinationCityInputValue = function (clickedInputIdName) {
    let clickedInputDropdownIdName = 'airport_destination_name_dropdown';
    let clickedInputDropdown = document.getElementById(clickedInputDropdownIdName);

    // Store the reference to the last clicked input field
    lastClickedFlightDestinationInput = document.getElementById(clickedInputIdName);

    // Set the input field's value based on which input was clicked
    if (clickedInputIdName === 'flight_from_city_input_id') {
        lastClickedFlightDestinationInput = document.getElementById(event.target.id);
        showOverlay(clickedInputDropdownIdName); // Show the dropdown overlay for 'from city' input
    } else if (clickedInputIdName === 'flight_to_city_input_id') {
        lastClickedFlightDestinationInput = document.getElementById(event.target.id);
        showOverlay(clickedInputDropdownIdName); // Show the dropdown overlay for 'to city' input
    }

    // Add event listeners to h3 elements inside the dropdown
    let h3Elements = clickedInputDropdown.querySelectorAll('h3');
    h3Elements.forEach(h3 => {
        h3.onclick = function () {

            // Play a sound effect
            new Audio('click.mp3').play();

            lastClickedFlightDestinationInput.value = this.innerText; // Set input value to h3 inner text
            hideOverlay(); // Hide the overlay after selection
        };
    });
}





/* Function to run the dropdown functonality for flight people amount */
let flightAdultPersonAmountInput = document.getElementById('flight_adult_person_amount_input_id');

// Get the options within the dropdown
let flightAdultPersonAmountInputOptions = document.querySelectorAll('#flight_adult_people_amount_dropdown h3');

flightAdultPersonAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        flightAdultPersonAmountInput.value = option.textContent; // Set input value to selected option
        hideOverlay(); // Hide overlay after selection
    });
});



let infantPackagePersonAmountInput = document.getElementById('infant_package_person_amount_input_id');

// Get the options within the dropdown
let infantPackagePersonAmountInputOptions = document.querySelectorAll('#infat_whole_package_people_amount_dropdown h3');

infantPackagePersonAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        if (option.textContent === 'حذف') {
            infantPackagePersonAmountInput.value = ''; // Set input value as '' if the 'حذف' h3 is clicked

        } else {
            infantPackagePersonAmountInput.value = option.textContent; // Set input value to selected option
        }
        hideOverlay(); // Hide overlay after selection
    });
});



let flightInfantPersonAmountInput = document.getElementById('flight_infant_person_amount_input_id');

// Get the options within the dropdown
let flightInfantPersonAmountInputOptions = document.querySelectorAll('#flight_infant_people_amount_dropdown h3');

flightInfantPersonAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        if (option.textContent === 'حذف') {
            flightInfantPersonAmountInput.value = ''; // Set input value as '' if the 'حذف' h3 is clicked

        } else {
            flightInfantPersonAmountInput.value = option.textContent; // Set input value to selected option
        }
        hideOverlay(); // Hide overlay after selection
    });
});



let flightExtraBagsInput = document.getElementById('flight_extra_bags_input_id');

// Get the options within the dropdown
let flightExtraBagsInputOptions = document.querySelectorAll('#airport_extra_bags_name_dropdown h3');

flightExtraBagsInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        new Audio('click.mp3').play();

        if (option.textContent === 'حذف') {
            flightExtraBagsInput.value = ''; // Set input value as '' if the 'حذف' h3 is clicked

        } else {
            flightExtraBagsInput.value = option.textContent; // Set input value to selected option
        }

        hideOverlay(); // Hide overlay after selection
    });
});






















































/* Function to show clint movements places page */
showClintMovemtsPlacesPage = function (clickedClintMovementsPlacesLocation) {

    // Disable scrolling
    document.body.style.overflow = 'hidden'; // Disable page scrolling during drag


    /* Show the clint movements visting places based on the value of the 'clint_movements_current_city_input_id' */
    if (clickedClintMovementsPlacesLocation.innerText === 'كوتا') {
        kuta_clint_movements_places_div.style.display = 'block';
        ubud_clint_movements_places_div.style.display = 'none';
        jakarta_clint_movements_places_div.style.display = 'none';
        puncak_clint_movements_places_div.style.display = 'none';
        bandung_clint_movements_places_div.style.display = 'none';
        lombok_clint_movements_places_div.style.display = 'none';


    } else if (clickedClintMovementsPlacesLocation.innerText === 'اوبود') {
        kuta_clint_movements_places_div.style.display = 'none';
        ubud_clint_movements_places_div.style.display = 'block';
        jakarta_clint_movements_places_div.style.display = 'none';
        puncak_clint_movements_places_div.style.display = 'none';
        bandung_clint_movements_places_div.style.display = 'none';
        lombok_clint_movements_places_div.style.display = 'none';

    } else if (clickedClintMovementsPlacesLocation.innerText === 'جاكرتا') {
        kuta_clint_movements_places_div.style.display = 'none';
        ubud_clint_movements_places_div.style.display = 'none';
        jakarta_clint_movements_places_div.style.display = 'block';
        puncak_clint_movements_places_div.style.display = 'none';
        bandung_clint_movements_places_div.style.display = 'none';
        lombok_clint_movements_places_div.style.display = 'none';

    } else if (clickedClintMovementsPlacesLocation.innerText === 'بونشاك') {
        kuta_clint_movements_places_div.style.display = 'none';
        ubud_clint_movements_places_div.style.display = 'none';
        jakarta_clint_movements_places_div.style.display = 'none';
        puncak_clint_movements_places_div.style.display = 'block';
        bandung_clint_movements_places_div.style.display = 'none';
        lombok_clint_movements_places_div.style.display = 'none';

    } else if (clickedClintMovementsPlacesLocation.innerText === 'باندونج') {
        kuta_clint_movements_places_div.style.display = 'none';
        ubud_clint_movements_places_div.style.display = 'none';
        jakarta_clint_movements_places_div.style.display = 'none';
        puncak_clint_movements_places_div.style.display = 'none';
        bandung_clint_movements_places_div.style.display = 'block';
        lombok_clint_movements_places_div.style.display = 'none';

    } else if (clickedClintMovementsPlacesLocation.innerText === 'لومبوك') {
        kuta_clint_movements_places_div.style.display = 'none';
        ubud_clint_movements_places_div.style.display = 'none';
        jakarta_clint_movements_places_div.style.display = 'none';
        puncak_clint_movements_places_div.style.display = 'none';
        bandung_clint_movements_places_div.style.display = 'none';
        lombok_clint_movements_places_div.style.display = 'block';

    }



    /* Get the 'all_clint_movements_places_page_divs_container' element */
    let clintMovementsPlacesPageDiv = document.getElementById('all_clint_movements_places_page_divs_container');

    // Show the clint movements places page div
    clintMovementsPlacesPageDiv.style.display = 'flex';

    // Make the clint movements places page div scrollable
    clintMovementsPlacesPageDiv.style.overflowY = 'scroll';

    // Prevent scrolling of the body
    document.body.style.overflow = 'hidden';


    // Create the exit icon
    let exitClintMovementsPlacesPage = document.createElement('ion-icon');
    exitClintMovementsPlacesPage.name = 'arrow-undo';
    exitClintMovementsPlacesPage.className = 'exit_full_screen_icon';
    document.body.appendChild(exitClintMovementsPlacesPage);


    // Function to hide the clint movements places page and remove the exit button
    exitClintMovementsPlacesPage.onclick = function () {


        /* Hide all clint movements places options */
        kuta_clint_movements_places_div.style.display = 'none';
        ubud_clint_movements_places_div.style.display = 'none';
        jakarta_clint_movements_places_div.style.display = 'none';
        puncak_clint_movements_places_div.style.display = 'none';
        bandung_clint_movements_places_div.style.display = 'none';
        lombok_clint_movements_places_div.style.display = 'none';
        clintMovementsPlacesPageDiv.style.display = 'none';


        document.body.style.overflow = ''; // Restore body scrolling


        if (exitClintMovementsPlacesPage) {
            exitClintMovementsPlacesPage.remove();
        }

        // Enable scrolling
        document.body.style.overflow = ''; // Re-enable page scrolling
    }



    /* Function to pick a clint movements place */
    pickThisClintMovementsPlace = function (clickedPlace) {


        // Copy the text of the clicked <p> element to the clipboard
        const textToCopy = clickedPlace.innerText;

        // Create a temporary textarea element to facilitate copying
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = textToCopy;
        document.body.appendChild(tempTextarea);

        // Select the text and copy it to the clipboard
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea element
        document.body.removeChild(tempTextarea);



        /* Get the 'all_clint_movements_places_page_divs_container' element */
        let clintMovementsPlacesPageDiv = document.getElementById('all_clint_movements_places_page_divs_container');


        /* Hide all clint movements places options */
        kuta_clint_movements_places_div.style.display = 'none';
        ubud_clint_movements_places_div.style.display = 'none';
        jakarta_clint_movements_places_div.style.display = 'none';
        puncak_clint_movements_places_div.style.display = 'none';
        bandung_clint_movements_places_div.style.display = 'none';
        lombok_clint_movements_places_div.style.display = 'none';



        /* Hide the holde clint visiting places divs container */
        clintMovementsPlacesPageDiv.style.display = 'none';


        document.body.style.overflow = ''; // Restore body scrolling

        if (exitClintMovementsPlacesPage) {
            exitClintMovementsPlacesPage.remove();
        }


        // Enable scrolling
        document.body.style.overflow = ''; // Re-enable page scrolling

    }


}


/* Function to hide or show the 'downloaded_pdf_clint_movements_data_page' section */
hideAndShowClintMovementSectionFunction = function () {

    if (document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'none') {
        document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'block';

    } else {
        document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'none';
    }

}






// Function to parse a date string in 'DD month' format
function parseDate(dateString) {
    let arabicMonths = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    let parts = dateString.split(' ');
    let day = parseInt(parts[0]);
    let month = arabicMonths.indexOf(parts[1]);
    let year = new Date().getFullYear(); // Assuming the current year

    return new Date(year, month, day);
}

// Function to format a date in Arabic month format
function formatDate(date) {
    let arabicMonths = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    let day = date.getDate();
    let month = arabicMonths[date.getMonth()];
    return `${day} ${month}`;
}























// Get the options within the dropdown
let clintVisitingPlacesNamesOptions = document.querySelectorAll('#clint_visiting_places_names_dropdown h3');

clintVisitingPlacesNamesOptions.forEach(option => {
    option.addEventListener('click', () => {


        // Copy the text of the clicked <p> element to the clipboard
        const textToCopy = option.textContent;

        // Create a temporary textarea element to facilitate copying
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = textToCopy;
        document.body.appendChild(tempTextarea);

        // Select the text and copy it to the clipboard
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea element
        document.body.removeChild(tempTextarea);


        /* Reset the value of 'company_names_search_bar_input_id' after picking a hotek name */
        document.getElementById('all_hotel_names_search_bar_input_id').value = '';

        // Get the dropdown div associated with the input
        let dropdownDivOptions = document.getElementById('all_hotel_names_search_bar_input_id').closest('.searchable_names_dropdown_class').querySelectorAll('h3');

        // Reset the display of all <h3> elements
        dropdownDivOptions.forEach(option => {
            option.style.display = 'block'; // Show all options
        });


        hideOverlay(); // Hide overlay after selection
    });
});

























// Function to show the overlay
function showOverlay(clickedInputDropdownIdName) {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';


    let clickedInputDropdown = document.getElementById(clickedInputDropdownIdName);

    // Store the reference to the last clicked input field
    lastClickedClintMovementsCityInput = document.getElementById(event.target.id);
    clickedInputDropdown.classList.add('show'); // Show the clicked input dropdown
    clickedInputDropdown.style.transition = 'transform 0.2s ease-in-out'; // Ensure transform transition is smooth

    overlayLayer = document.createElement('div'); // Create a new overlay element
    overlayLayer.className = 'black_overlay'; // Set the class name for styling
    overlayLayer.onclick = hideOverlay; // Set the click event listener to hide the overlay when clicked outside
    document.body.appendChild(overlayLayer); // Append overlay to the document body

    setTimeout(() => {
        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
    }, 50);
}


// Function to hide the overlay and any visible dropdown
function hideOverlay() {

    // Re-enable scrolling
    document.documentElement.style.overflow = 'auto';


    // Check if any dropdown with the class name 'searchable_names_dropdown_class' is visible and hide it
    let visibleDropdown_1 = document.querySelector('.searchable_names_dropdown_class.show');
    if (visibleDropdown_1) {
        visibleDropdown_1.classList.remove('show'); // Remove 'show' class to hide dropdown
    }


    // Reset all 'searchable_names_dropdown_class' elements back to their default styling
    let dropdownDivElements = document.querySelectorAll('.searchable_names_dropdown_class');
    dropdownDivElements.forEach(dropdown => {
        dropdown.style.maxHeight = ''; // Reset maxHeight to default
        dropdown.style.minHeight = ''; // Reset minHeight to default
        dropdown.style.transition = ''; // Reset transition to default
    });

    // Hide the overlay if it exists
    if (overlayLayer) {
        overlayLayer.style.opacity = '0'; // Set opacity to 0 for smooth disappearance

        setTimeout(() => {
            if (overlayLayer) {
                document.body.removeChild(overlayLayer); // Remove overlay from DOM
                overlayLayer = null; // Reset overlay variable
            }
        }, 200); // Assuming 200ms is the duration of your opacity transition
    }
}
































// Arabic month names
let innerDatePickerArabicMonths = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

// Arabic day names
let arabicDays = ['أحد', 'إثن', 'ثلو', 'ربو', 'خمي', 'جمع', 'سبت'];

// Function to get Arabic month name
function getArabicMonthName(monthIndex) {
    return innerDatePickerArabicMonths[monthIndex];
}

// Arabic month names
let arabicMonths = {
    January: 'يناير',
    February: 'فبراير',
    March: 'مارس',
    April: 'ابريل',
    May: 'ماي',
    June: 'يونيو',
    July: 'يوليو',
    August: 'اغسطس',
    September: 'سبتمبر',
    October: 'اكتوبر',
    November: 'نوفمبر',
    December: 'ديسمبر'
};

// Arabic month names reverse lookup
let arabicMonthsReverse = {
    'يناير': 'January',
    'فبراير': 'February',
    'مارس': 'March',
    'ابريل': 'April',
    'ماي': 'May',
    'يونيو': 'June',
    'يوليو': 'July',
    'اغسطس': 'August',
    'سبتمبر': 'September',
    'اكتوبر': 'October',
    'نوفمبر': 'November',
    'ديسمبر': 'December'
};


// Function to calculate the difference in days between two dates
function calculateDaysDifference(startDate, endDate) {
    if (!startDate || !endDate) return '';
    let [startDay, startMonth] = startDate.split(' ');
    let [endDay, endMonth] = endDate.split(' ');

    let start = new Date(`${arabicMonthsReverse[startMonth]} ${startDay}, ${new Date().getFullYear()}`);
    let end = new Date(`${arabicMonthsReverse[endMonth]} ${endDay}, ${new Date().getFullYear()}`);
    let diffTime = end - start; // Difference in time
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Difference in days
    return diffDays;
}












/* Store the hotel total nights for later use (when inserting hotel row data) */
let storeHotelTotalNights;
let storePackageTotalNights;

// Variables to track the visibility of the date pickers
var isWholePackageStartDatePickerVisible = false;
var isWholePackageEndDatePickerVisible = false;
var isHotelStartDatePickerVisible = false;
var isHotelEndDatePickerVisible = false;

// Function to parse date strings in the format "DD-MMM"
function parseArabicDate(dateStr) {
    let parts = dateStr.split(' ');
    let day = parseInt(parts[0]);
    let monthShortNames = {
        "يناير": 0, "فبراير": 1, "مارس": 2, "أبريل": 3, "مايو": 4, "يونيو": 5,
        "يوليو": 6, "أغسطس": 7, "سبتمبر": 8, "أكتوبر": 9, "نوفمبر": 10, "ديسمبر": 11
    };
    let month = monthShortNames[parts[1]];
    let year = new Date().getFullYear(); // Assuming the current year
    return new Date(year, month, day);
}

// Function to calculate the difference in days between two dates
function wholePackageAndHotelCalculateDaysDifference(startDate, endDate) {
    let diff = endDate - startDate;
    return Math.round(diff / (1000 * 60 * 60 * 24));
}

// Function to update the total nights input for whole package
function updateWholePackageTotalNights() {
    let startDateInput = document.getElementById('whole_package_start_date_input_id');
    let endDateInput = document.getElementById('whole_package_end_date_input_id');
    let totalNightsInput = document.getElementById('package_total_nights_input_id');

    let startDate = startDateInput.value;
    let endDate = endDateInput.value;

    if (startDate !== '' && endDate !== '') {
        let parsedStartDate = parseArabicDate(startDate);
        let parsedEndDate = parseArabicDate(endDate);
        let totalNights = wholePackageAndHotelCalculateDaysDifference(parsedStartDate, parsedEndDate);

        // Store the package total nights for later use
        storePackageTotalNights = totalNights;
        totalNightsInput.value = `${totalNights} ليالي`;

        // Ensure the end date is not earlier than or equal to the start date
        if (parsedStartDate >= parsedEndDate) {
            endDateInput.value = '';
            totalNightsInput.value = '';
        }
    } else {
        totalNightsInput.value = '';
    }
}

// Function to update the total nights input for hotel
function updateHotelTotalNights() {
    let startDateInput = document.getElementById('hotel_check_in_input_id');
    let endDateInput = document.getElementById('hotel_check_out_input_id');
    let totalNightsInput = document.getElementById('hotel_total_nights_input_id');

    let startDate = startDateInput.value;
    let endDate = endDateInput.value;

    if (startDate !== '' && endDate !== '') {
        let parsedStartDate = parseArabicDate(startDate);
        let parsedEndDate = parseArabicDate(endDate);
        let totalNights = wholePackageAndHotelCalculateDaysDifference(parsedStartDate, parsedEndDate);

        // Store the hotel total nights for later use
        storeHotelTotalNights = totalNights;
        totalNightsInput.value = `${totalNights} ليالي`;

        // Ensure the end date is not earlier than or equal to the start date
        if (parsedStartDate >= parsedEndDate) {
            endDateInput.value = '';
            totalNightsInput.value = '';
        }
    } else {
        totalNightsInput.value = '';
    }
}

// Function to disable specific dates
function disableSpecificDates(date, startDateInputId) {
    let startDateInput = document.getElementById(startDateInputId).value;
    if (startDateInput) {
        let startDate = parseArabicDate(startDateInput);
        return date.getTime() <= startDate.getTime(); // Disable the exact start date and any date before it
    }
    return false;
}

// Get today's date
var today = new Date();

/* Inputs date for whole package start period */
var wholePackageStartDatePicker = new Pikaday({
    field: document.getElementById('whole_package_start_date_input_id'),
    format: 'DD-M',
    minDate: today,
    toString(date, format) {
        let day = date.getDate();
        let month = getArabicMonthName(date.getMonth());
        return `${day} ${month}`;
    },
    i18n: {
        previousMonth: '',
        nextMonth: '',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    onSelect: function () {

        // Play a sound effect
        new Audio('click.mp3').play();

        isWholePackageStartDatePickerVisible = false; // Reset visibility state on date selection
        updateWholePackageTotalNights();
        let selectedDate = this.getDate();
        let minEndDate = new Date(selectedDate);
        minEndDate.setDate(minEndDate.getDate() + 1); // Ensure end date is at least one day after the start date
        wholePackageEndDatePicker.setMinDate(minEndDate); // Update min date for the second picker
    }
});

/* Inputs date for whole package end period */
var wholePackageEndDatePicker = new Pikaday({
    field: document.getElementById('whole_package_end_date_input_id'),
    format: 'DD-M',
    minDate: today,
    toString(date, format) {
        let day = date.getDate();
        let month = getArabicMonthName(date.getMonth());
        return `${day} ${month}`;
    },
    i18n: {
        previousMonth: '',
        nextMonth: '',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    disableDayFn: function (date) { return disableSpecificDates(date, 'whole_package_start_date_input_id'); }, // Disable the exact start date and any date before it in the end date picker
    onOpen: function () {
        // Sync with the start date picker's month view
        let startDateInput = document.getElementById('whole_package_start_date_input_id').value;
        if (startDateInput) {
            let parsedStartDate = parseArabicDate(startDateInput);
            this.gotoDate(parsedStartDate);
        }
    },
    onSelect: function () {

        // Play a sound effect
        new Audio('click.mp3').play();

        isWholePackageEndDatePickerVisible = false; // Reset visibility state on date selection
        updateWholePackageTotalNights(); // Call 'updateWholePackageTotalNights' when a date is selected
    }
});

/* Inputs date for hotel start period */
var hotelStartDatePicker = new Pikaday({
    field: document.getElementById('hotel_check_in_input_id'),
    format: 'DD-M',
    minDate: today,
    toString(date, format) {
        let day = date.getDate();
        let month = getArabicMonthName(date.getMonth());
        return `${day} ${month}`;
    },
    i18n: {
        previousMonth: '',
        nextMonth: '',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    onSelect: function () {

        // Play a sound effect
        new Audio('click.mp3').play();

        isHotelStartDatePickerVisible = false; // Reset visibility state on date selection
        updateHotelTotalNights();
        let selectedDate = this.getDate();
        let minEndDate = new Date(selectedDate);
        minEndDate.setDate(minEndDate.getDate() + 1); // Ensure end date is at least one day after the start date
        hotelEndDatePicker.setMinDate(minEndDate); // Update min date for the second picker
    }
});

/* Inputs date for hotel end period */
var hotelEndDatePicker = new Pikaday({
    field: document.getElementById('hotel_check_out_input_id'),
    format: 'DD-M',
    minDate: today,
    toString(date, format) {
        let day = date.getDate();
        let month = getArabicMonthName(date.getMonth());
        return `${day} ${month}`;
    },
    i18n: {
        previousMonth: '',
        nextMonth: '',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    disableDayFn: function (date) { return disableSpecificDates(date, 'hotel_check_in_input_id'); }, // Disable the exact start date and any date before it in the end date picker
    onOpen: function () {
        // Sync with the start date picker's month view
        let startDateInput = document.getElementById('hotel_check_in_input_id').value;
        if (startDateInput) {
            let parsedStartDate = parseArabicDate(startDateInput);
            this.gotoDate(parsedStartDate);
        }
    },
    onSelect: function () {

        // Play a sound effect
        new Audio('click.mp3').play();

        isHotelEndDatePickerVisible = false; // Reset visibility state on date selection
        updateHotelTotalNights(); // Call 'updateHotelTotalNights' when a date is selected
    }
});

// Function to toggle the visibility of the Whole Package Start Date Picker
document.getElementById('whole_package_start_date_input_id').addEventListener('click', function () {
    if (!isWholePackageStartDatePickerVisible) {
        wholePackageStartDatePicker.show();
        isWholePackageStartDatePickerVisible = true;
    } else {
        wholePackageStartDatePicker.hide();
        isWholePackageStartDatePickerVisible = false;
    }
});

// Function to toggle the visibility of the Whole Package End Date Picker
document.getElementById('whole_package_end_date_input_id').addEventListener('click', function () {
    if (!isWholePackageEndDatePickerVisible) {
        wholePackageEndDatePicker.show();
        isWholePackageEndDatePickerVisible = true;
    } else {
        wholePackageEndDatePicker.hide();
        isWholePackageEndDatePickerVisible = false;
    }
});

// Function to toggle the visibility of the Hotel Start Date Picker
document.getElementById('hotel_check_in_input_id').addEventListener('click', function () {
    if (!isHotelStartDatePickerVisible) {
        hotelStartDatePicker.show();
        isHotelStartDatePickerVisible = true;
    } else {
        hotelStartDatePicker.hide();
        isHotelStartDatePickerVisible = false;
    }
});

// Function to toggle the visibility of the Hotel End Date Picker
document.getElementById('hotel_check_out_input_id').addEventListener('click', function () {
    if (!isHotelEndDatePickerVisible) {
        hotelEndDatePicker.show();
        isHotelEndDatePickerVisible = true;
    } else {
        hotelEndDatePicker.hide();
        isHotelEndDatePickerVisible = false;
    }
});



























// Function to initialize Pikaday with Arabic support
var startDatePicker = new Pikaday({
    field: document.getElementById('flight_date_input_id'),
    format: 'DD-M',
    minDate: new Date(),
    toString(date, format) {
        let day = date.getDate();
        let month = getArabicMonthName(date.getMonth());
        return `${day} ${month}`;
    },
    onSelect: function () {

        // Play a sound effect
        new Audio('click.mp3').play();


        isDatePickerVisible = false; // Reset the visibility state when a date is selected
    },
    i18n: {
        previousMonth: '',
        nextMonth: '',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    }
});

var isDatePickerVisible = false;

document.getElementById('flight_date_input_id').addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click event from propagating

    if (isDatePickerVisible) {
        startDatePicker.hide();
    } else {
        startDatePicker.show();
    }

    isDatePickerVisible = !isDatePickerVisible;
});

// Prevent the date picker from hiding when clicking inside it
startDatePicker.el.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Hide the date picker when clicking outside
document.addEventListener('click', function () {
    if (isDatePickerVisible) {
        startDatePicker.hide();
        isDatePickerVisible = false;
    }
});




/* Function for the time picking */
$(document).ready(function () {
    $('#flight_fly_away_time_input_id').pickatime({
        format: 'HH:i',
        interval: 5,
        min: [0, 0],
        max: [23, 59],
        onSet: function () {
            // Play a sound effect
            new Audio('click.mp3').play();
        }
    });

    $('#flight_arrival_time_input_id').pickatime({
        format: 'HH:i',
        interval: 5,
        min: [0, 0],
        max: [23, 59],
        onSet: function () {
            // Play a sound effect
            new Audio('click.mp3').play();
        }
    });
});










































































/* Function to open full screen textarea */
function toggleFullscreen(textAreaId) {
    let textarea = document.getElementById(textAreaId);
    let body = document.body;

    // Disable scrolling
    body.style.overflow = 'hidden';

    // Save the original styles to restore when exiting full-screen
    let originalStyles = {
        width: textarea.style.width,
        height: textarea.style.height,
        zIndex: textarea.style.zIndex,
        position: textarea.style.position,
        top: textarea.style.top,
        left: textarea.style.left,
        transform: textarea.style.transform // Save the transform style
    };

    // Set textarea to full-screen size and center it
    textarea.style.width = '90vw';
    textarea.style.height = '90vh';
    textarea.style.zIndex = '1000';
    textarea.style.position = 'fixed';
    textarea.style.top = '50%'; // Center vertically
    textarea.style.left = '50%'; // Center horizontally
    textarea.style.transform = 'translate(-50%, -50%)'; // Adjust position to center

    // Create an overlay layer for better visual effect
    let overlayLayer = document.createElement('div');
    overlayLayer.classList.add('black_overlay');
    document.body.appendChild(overlayLayer);
    setTimeout(() => {
        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
    }, 50);

    // Create an exit button
    let exitTextAreaFullScreenButton = document.createElement('ion-icon');
    exitTextAreaFullScreenButton.name = 'arrow-undo';
    exitTextAreaFullScreenButton.classList.add('exit_full_screen_icon');
    exitTextAreaFullScreenButton.onclick = function () {

        // Play a sound effect
        new Audio('click.mp3').play();


        // Restore original styles
        textarea.style.width = originalStyles.width;
        textarea.style.height = originalStyles.height;
        textarea.style.zIndex = originalStyles.zIndex;
        textarea.style.position = originalStyles.position;
        textarea.style.top = originalStyles.top;
        textarea.style.left = originalStyles.left;
        textarea.style.transform = originalStyles.transform; // Restore the transform style

        // Remove overlay from DOM
        overlayLayer.parentNode.removeChild(overlayLayer);
        overlayLayer = null; // Reset overlay variable

        // Re-enable scrolling
        body.style.overflow = 'auto';

        // Remove exit button
        exitTextAreaFullScreenButton.remove();
    };

    // Append exit button to body
    document.body.appendChild(exitTextAreaFullScreenButton);
}






















































