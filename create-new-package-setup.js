/* Function to prevent the page refresh by mistake */
window.addEventListener('beforeunload', function (event) {
    event.preventDefault(); // Prevent the default action
    event.returnValue = ''; // Set the return value to trigger the default browser confirmation dialog
});






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

    window.scrollTo(0, 0);

    
    if (packageType === 'clint') {
        create_new_clint_data_section.style.display = 'block';
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'none';
        create_new_clint_movements_paln_section.style.display = 'none';
        create_new_package_including_and_not_including_data_section.style.display = 'none';

    } else if (packageType === 'hotel') {
        create_new_clint_data_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'flex';
        create_new_flight_package_section.style.display = 'none';
        create_new_clint_movements_paln_section.style.display = 'none';
        create_new_package_including_and_not_including_data_section.style.display = 'none';

    } else if (packageType === 'flight') {
        create_new_clint_data_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'flex';
        create_new_clint_movements_paln_section.style.display = 'none';
        create_new_package_including_and_not_including_data_section.style.display = 'none';

    } else if (packageType === 'transportation') {
        create_new_clint_data_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'none';
        create_new_clint_movements_paln_section.style.display = 'flex';
        create_new_package_including_and_not_including_data_section.style.display = 'none';

    } else if (packageType === 'package_including') {
        create_new_clint_data_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'none';
        create_new_clint_movements_paln_section.style.display = 'none';
        create_new_package_including_and_not_including_data_section.style.display = 'block';
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

        /* Save the clicked number in the variable for later use */
        adultPackagePersonAmountInput.value = option.textContent

        hideOverlay(); // Hide overlay after selection
    });
});










/* Dropdown company names functionality */
let companyNamesInput = document.getElementById('clint_company_name_input_id');

// Get the options within the dropdown
let companyNamesInputOptions = document.querySelectorAll('#company_names_dropdown h3');

companyNamesInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        /* if the clicked h3 element was delete then reset the 'clint_company_name_input_id' value */
        if (option.textContent === 'حذف') {
            companyNamesInput.value = '';

        } else {
            companyNamesInput.value = option.textContent; // Set input value to selected option
        }

        hideOverlay(); // Hide overlay after selection
    });
});


let clintPackageTypeDiv = document.querySelectorAll('#clint_package_type_div input[type="checkbox"]');

clintPackageTypeDiv.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            clintPackageTypeDiv.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
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















/* Function to store the clicked hotel unit amount */


/* Dropdown airport line names functionality */
let hotelNameInput = document.getElementById('hotel_name_input_id');

// Get the options within the dropdown
let hotelNameInputOptions = document.querySelectorAll('#all_hotel_names_dropdown h3');

hotelNameInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        /* Set the input value with the clicked rooms number h3 innerText */
        hotelNameInput.value = option.textContent;
        hideOverlay(); // Hide overlay after selection
    });
});











/* Function to insert the hotel room view and including pool text */

/* Dropdown airport line names functionality */
let hotelRoomContainPoolInput = document.getElementById('hotel_room_contain_pool_input_id');

// Get the options within the dropdown
let hotelRoomContainPoolInputOptions = document.querySelectorAll('#hotel_room_contain_pool_dropdown h3');

hotelRoomContainPoolInputOptions.forEach(option => {
    option.addEventListener('click', () => {

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

        /* Save the clicked number in the variable for later use */
        storeHotelTotalUnitNumber = option.textContent

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
                    // When the h3 element is clicked, set the value of the room type description input field to the text content of the h3 element
                    hotelRoomTypeDescriptionInput.value = h3.textContent;

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














// Function to filter options based on search bar input
function filterOptions(inputId, dropdownId) {
    let searchBar = document.getElementById(inputId);
    let filter = searchBar.value.trim().toLowerCase();
    let options = document.getElementById(dropdownId).querySelectorAll('h3');

    options.forEach(option => {
        let optionText = option.textContent.trim().toLowerCase();
        if (optionText.includes(filter)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });


}














/* Function to clear searchable dropdown input filter h3 */
clearSearchableDropDownInputValue = function (targetInputToClear) {
    // Clear the input value
    document.getElementById(targetInputToClear).value = '';

    // Get the dropdown div associated with the input
    let dropdownDiv = document.getElementById(targetInputToClear).closest('.searchable_names_dropdown_class');

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
        dropdownDiv.style.transition = 'height 0.2s ease-in-out';

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




// Event listeners for filtering h3 elements based on letteres inserted in the search bar input
/* (Input id name & the same input dropdown div id name ) */
document.getElementById('company_names_search_bar_input_id').addEventListener('input', () => {
    filterOptions('company_names_search_bar_input_id', 'company_names_dropdown');
});
document.getElementById('all_hotel_names_search_bar_input_id').addEventListener('input', () => {
    filterOptions('all_hotel_names_search_bar_input_id', 'all_hotel_names_dropdown');
});













/* clint movements hotel names dropdown */
document.getElementById('hotel_room_type_description_input_id').addEventListener('input', () => {
    filterOptions('hotel_room_type_description_input_id', 'hotel_room_type_description_dropdown');
});











/* clint movements hotel names dropdown */
document.getElementById('clint_movements_hotel_names_search_bar_input_id').addEventListener('input', () => {
    filterOptions('clint_movements_hotel_names_search_bar_input_id', 'clint_movements_hotel_names_dropdown');
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
        if (lastClickedClintMovementsCityInput) { // Check if an input field was clicked before
            if (option.innerText === 'حذف') { // If the clicked h3 element's inner text is "حذف"
                lastClickedClintMovementsCityInput.value = ''; // Clear the value of the last clicked input field
            } else { // If the clicked h3 element's inner text is not "حذف"
                if (lastClickedClintMovementsCityInput.id === 'sms_card_with_internet_amount_input_id') {
                    // Set the value of the sms card input field with the selected option
                    lastClickedClintMovementsCityInput.value = `شرائح إنترنت ل${option.textContent}`;


                } else if (lastClickedClintMovementsCityInput.id === 'inner_flight_tickets_amount_input_id') {
                    // Set the value of the inner flight tickets input field with the selected option
                    lastClickedClintMovementsCityInput.value = `تذاكر الطيران الداخلي ل${option.textContent}`;


                } else if (lastClickedClintMovementsCityInput.id === 'hotel_breakfast_people_amount_input_id') {
                    lastClickedClintMovementsCityInput.value = `شامل الإفطار ل${option.textContent}`;
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
        flightAirLineInput.value = option.textContent; // Set input value to selected option
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
        flightAdultPersonAmountInput.value = option.textContent; // Set input value to selected option
        hideOverlay(); // Hide overlay after selection
    });
});



let flightInfantPersonAmountInput = document.getElementById('flight_infant_person_amount_input_id');

// Get the options within the dropdown
let flightInfantPersonAmountInputOptions = document.querySelectorAll('#flight_infant_people_amount_dropdown h3');

flightInfantPersonAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        if (option.textContent === 'حذف') {
            flightInfantPersonAmountInput.value = ''; // Set input value as '' if the 'حذف' h3 is clicked

        } else {
            flightInfantPersonAmountInput.value = option.textContent; // Set input value to selected option
        }
        hideOverlay(); // Hide overlay after selection
    });
});




























/* Clint movements functions */
let clintMovementsAirportWelcomeInput = document.getElementById('clint_movements_airport_welcome_input_id');

// Get the options within the dropdown
let clintMovementsAirportWelcomeInputOptions = document.querySelectorAll('#clint_movemnt_welcome_airport_location_dropdown h3');

clintMovementsAirportWelcomeInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        if (option.textContent === 'حذف') {
            clintMovementsAirportWelcomeInput.value = ''; // Set input value to selected option

        } else {
            clintMovementsAirportWelcomeInput.value = `الإستقبال في مطار ${option.textContent}`; // Set input value to selected option
        }
        hideOverlay(); // Hide overlay after selection
    });
});





// Praper a variable to store the currently active input field
let currentInput = null;

// Function to set the current input when an input is clicked
function setCurrentInput(event) {
    currentInput = event.target; // Set currentInput to the clicked input element
}

// Attach event listeners to the check-out and check-in inputs to set the current input
document.getElementById('clint_movements_new_check_out_input_id').addEventListener('click', setCurrentInput);
document.getElementById('clint_movements_new_check_in_input_id').addEventListener('click', setCurrentInput);

// Function to insert the clicked h3 text into the current input value
function insertTextIntoInput(event) {
    // Check if the clicked element is an h3 tag and if there is a currentInput set
    if (event.target.tagName === 'H3' && currentInput) {
        let clickedText = event.target.innerText; // Get the inner text of the clicked h3

        // Depending on the current input field, update its value with appropriate text
        if (currentInput.id === 'clint_movements_new_check_out_input_id') {
            if (clickedText === 'حذف') {
                currentInput.value = ''; // Clear the input if 'حذف' is clicked
            } else {
                currentInput.value = `تسجيل الخروج من ${clickedText}`; // Set check-out text
            }
        } else if (currentInput.id === 'clint_movements_new_check_in_input_id') {
            if (clickedText === 'حذف') {
                currentInput.value = ''; // Clear the input if 'حذف' is clicked
            } else {
                currentInput.value = `تسجيل الدخول في ${clickedText}`; // Set check-in text
            }
        }

        // Hide the dropdown menu after selecting an option
        hideOverlay(event.target.closest('.searchable_names_dropdown_class').id);
    }
}

// Attach the event listener to the dropdown container for h3 clicks
document.getElementById('clint_movements_hotel_names_dropdown').addEventListener('click', insertTextIntoInput);


















// Variable to store the last clicked clint movement city input
let lastClickedClintMovementsCityInput = null;

// Variable to store the clicked h3 city for the 'clint_movements_current_city_input_id' input for later use
let storeClintMovementsCurrentCityInput = null;

// Variable to store the clicked h3 city for the 'clint_movements_next_city_input_id' input for later use
let storeClintMovementsNextCityInput = null;

/* Clint movements pick current city functions */
let clintMovementsCurrentCityInput = document.getElementById('clint_movements_current_city_input_id');

// Get the options within the dropdown
let clintMovementsCurrentCityInputOptions = document.querySelectorAll('#clint_movemnts_current_city_dropdown h3');

clintMovementsCurrentCityInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        /* Store the clicked current clint movements city for later use */
        storeClintMovementsCurrentCityInput = option.textContent;

        clintMovementsCurrentCityInput.value = `المدينة الحالية ${option.textContent}`; // Set input value to selected option

        // Set the value of the last clicked input to the current city input
        lastClickedClintMovementsCityInput = clintMovementsCurrentCityInput;

        hideOverlay(); // Hide overlay after selection
    });
});

/* Clint movements pick new city functions */
let clintMovementsNextCityInput = document.getElementById('clint_movements_next_city_input_id');

// Get the options within the dropdown
let clintMovementsNextCityInputOptions = document.querySelectorAll('#clint_movemnts_next_city_dropdown h3');

clintMovementsNextCityInputOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (option.textContent === 'حذف') {
            clintMovementsNextCityInput.value = ''; // Clear input value

            // Reset stored next city input
            storeClintMovementsNextCityInput = null;


        } else if (option.textContent === 'مغادرة') {
            clintMovementsNextCityInput.value = 'الذهاب للمطار للمغادرة'; // Set input value

            // Reset stored next city input
            storeClintMovementsNextCityInput = option.textContent;

            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';


        } else {
            clintMovementsNextCityInput.value = `الذهاب الى ${option.textContent}`; // Set input value

            // Set storeClintMovementsNextCityInput for regular city selection
            storeClintMovementsNextCityInput = option.textContent;
        }

        // Set the value of the last clicked input to the next city input
        lastClickedClintMovementsCityInput = clintMovementsNextCityInput;

        hideOverlay(); // Hide overlay after selection
    });
});






/* Function to show clint movements places page */
showClintMovemtsPlacesPage = function () {

    // Disable scrolling
    document.body.style.overflow = 'hidden'; // Disable page scrolling during drag

    /* in case if the 'clint_movements_next_city_input_id' was empty then use the value of the 'clint_movements_current_city_input_id' */
    if (storeClintMovementsNextCityInput === null) {


        /* Show the clint movements visting places based on the value of the 'clint_movements_current_city_input_id' */
        if (clint_movements_current_city_input_id.value === 'المدينة الحالية بالي') {
            bali_clint_movements_places_div.style.display = 'block';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';


        } else if (clint_movements_current_city_input_id.value === 'المدينة الحالية جاكرتا') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'block';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';

        } else if (clint_movements_current_city_input_id.value === 'المدينة الحالية بونشاك') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'block';
            bandung_clint_movements_places_div.style.display = 'none';

        } else if (clint_movements_current_city_input_id.value === 'المدينة الحالية باندونق') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'block';

        }



        /* if the 'storeClintMovementsNextCityInput' which is the value of 'clint_movements_next_city_input_id' is not null then use it to show clint movements visting places */
    } else if (storeClintMovementsNextCityInput !== null) {


        /* Show the clint movements visting places based on the value of the 'storeClintMovementsNextCityInput' */
        if (storeClintMovementsNextCityInput === 'المدينة الحالية بالي') {
            bali_clint_movements_places_div.style.display = 'block';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';


        } else if (storeClintMovementsNextCityInput === 'المدينة الحالية جاكرتا') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'block';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';

        } else if (storeClintMovementsNextCityInput === 'المدينة الحالية بونشاك') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'block';
            bandung_clint_movements_places_div.style.display = 'none';

        } else if (storeClintMovementsNextCityInput === 'المدينة الحالية باندونق') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'block';

        }

    }



    /* Get the 'clint_movements_places_page_div' element */
    let clintMovementsPlacesPageDiv = document.getElementById('clint_movements_places_page_div');

    // Show the clint movements places page div
    clintMovementsPlacesPageDiv.style.display = 'flex';

    // Make the clint movements places page div scrollable
    clintMovementsPlacesPageDiv.style.overflowY = 'scroll';

    // Prevent scrolling of the body
    document.body.style.overflow = 'hidden';

    // Create the exit button
    let insertClintMovementsPlacesIcon = document.createElement('ion-icon');
    insertClintMovementsPlacesIcon.name = 'add-circle';
    insertClintMovementsPlacesIcon.className = 'insert_clint_movements_places_icon';
    document.body.appendChild(insertClintMovementsPlacesIcon);


    // Create the exit icon
    let exitClintMovementsPlacesPage = document.createElement('ion-icon');
    exitClintMovementsPlacesPage.name = 'arrow-undo';
    exitClintMovementsPlacesPage.className = 'exit_full_screen_icon';
    document.body.appendChild(exitClintMovementsPlacesPage);




    // Function to hide the clint movements places page and remove the exit button
    insertClintMovementsPlacesIcon.onclick = function () {

        /* Run the function for placing the clicked clint movemenets places */
        setTheClickedClintMovementsPlace();

        clintMovementsPlacesPageDiv.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scrolling

        insertClintMovementsPlacesIcon.remove();
        exitClintMovementsPlacesPage.remove();


        // Enable scrolling
        document.body.style.overflow = ''; // Re-enable page scrolling
    }


    // Function to hide the clint movements places page and remove the exit button
    exitClintMovementsPlacesPage.onclick = function () {
        clintMovementsPlacesPageDiv.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scrolling

        insertClintMovementsPlacesIcon.remove();
        exitClintMovementsPlacesPage.remove();


        // Enable scrolling
        document.body.style.overflow = ''; // Re-enable page scrolling
    }
}


/* Function to show the clint movements tutorial page */
showClintMovemtsTutorialPage = function () {

    // Disable scrolling
    document.body.style.overflow = 'hidden'; // Disable page scrolling during drag

    /* Show the 'clint_movements_tutorial_page_div' div */
    let clintMovementsTutorialPageDiv = document.getElementById('clint_movements_tutorial_page_div');
    clintMovementsTutorialPageDiv.style.display = 'flex';



    let exitClintMovementsTutorialPage = document.createElement('ion-icon');
    exitClintMovementsTutorialPage.name = 'arrow-undo';
    exitClintMovementsTutorialPage.className = 'exit_full_screen_icon';
    document.body.appendChild(exitClintMovementsTutorialPage);


    /* Funnction to handle exit clint movements tutorial page */
    exitClintMovementsTutorialPage.onclick = function () {
        clintMovementsTutorialPageDiv.style.display = 'none';
        exitClintMovementsTutorialPage.remove();

        // Enable scrolling
        document.body.style.overflow = ''; // Re-enable page scrolling
    }
}

/* Function to pick a clint movements place */
pickThisClintMovementsPlace = function (clickedPlace) {
    // Get the parent div of the clicked p element
    var parentDiv = clickedPlace.parentElement;

    // Get all div elements with ids starting with 'clint_movements_places_names_options_for'
    var allDivs = document.querySelectorAll('[id^="clint_movements_places_names_options_for"]');

    // Iterate through all divs
    allDivs.forEach(function (div) {
        // Check if the div is not the parent of the clicked p element
        if (div !== parentDiv) {
            // Get all p elements within the div
            var pElements = div.getElementsByTagName('p');

            // Reset the background color of all p elements with class 'bandung_places_p_color_1_class' to rgb(0, 56, 99)
            var color1Elements = div.getElementsByClassName('bandung_places_p_color_1_class');
            for (var i = 0; i < color1Elements.length; i++) {
                color1Elements[i].style.backgroundColor = 'rgb(0, 56, 99)';
            }

            // Reset the background color of all p elements with class 'bandung_places_p_color_2_class' to rgb(0, 89, 157)
            var color2Elements = div.getElementsByClassName('bandung_places_p_color_2_class');
            for (var i = 0; i < color2Elements.length; i++) {
                color2Elements[i].style.backgroundColor = 'rgb(0, 89, 157)';
            }
        }
    });

    // Toggle the background color of the clicked p element based on its class
    if (clickedPlace.style.backgroundColor === 'rgb(0, 155, 0)') {
        if (clickedPlace.classList.contains('bandung_places_p_color_1_class')) {
            clickedPlace.style.backgroundColor = 'rgb(0, 56, 99)';
        } else if (clickedPlace.classList.contains('bandung_places_p_color_2_class')) {
            clickedPlace.style.backgroundColor = 'rgb(0, 89, 157)';
        }
    } else {
        clickedPlace.style.backgroundColor = 'rgb(0, 155, 0)';
        clickedPlace.style.color = 'white';
    }

    // Additional functionality for clint_movements_places_names_options_for_random_days_class
    if (parentDiv.classList.contains('clint_movements_places_names_options_for_random_days_class')) {
        var allRandomDaysClassDivs = document.querySelectorAll('.clint_movements_places_names_options_for_random_days_class');

        // Iterate through all random days class divs
        allRandomDaysClassDivs.forEach(function (randomDaysClassDiv) {
            // Get all p elements with class 'bandung_places_p_color_1_class' within the random days class div and reset their background color
            var color1Elements = randomDaysClassDiv.getElementsByClassName('bandung_places_p_color_1_class');
            for (var i = 0; i < color1Elements.length; i++) {
                color1Elements[i].style.backgroundColor = 'rgb(0, 56, 99)';
            }

            // Get all p elements with class 'bandung_places_p_color_2_class' within the random days class div and reset their background color
            var color2Elements = randomDaysClassDiv.getElementsByClassName('bandung_places_p_color_2_class');
            for (var i = 0; i < color2Elements.length; i++) {
                color2Elements[i].style.backgroundColor = 'rgb(0, 89, 157)';
            }
        });

        // Set the background color of the clicked p element to green
        clickedPlace.style.backgroundColor = 'rgb(0, 155, 0)';
    }
}






// Function to collect the clicked clint movements places and set them in the textarea
setTheClickedClintMovementsPlace = function () {
    let clintMovementsPlacesPageDiv = document.getElementById('clint_movements_places_page_div'); // Get the div for clint movements places page
    let clickedPlacesText = []; // Initialize an array to store the innerText of clicked p elements

    // Collect the innerText of all p elements with the background color rgb(0, 155, 0)
    clintMovementsPlacesPageDiv.querySelectorAll('p').forEach(p => {
        if (window.getComputedStyle(p).backgroundColor === 'rgb(0, 155, 0)') { // Check if the background color is rgb(0, 155, 0)
            clickedPlacesText.push(p.innerText); // Add the innerText of the p element to the array
        }
    });

    // Set the collected text inside the textarea
    let clintMovementsDetailsInput = document.getElementById('clint_movements_whole_day_actions_details_textarea_id'); // Get the textarea by its id
    clintMovementsDetailsInput.value = clickedPlacesText.join(' + '); // Join the text with ' + ' and set it as the value of the textarea
}





// Function to parse date strings in the format "DD-MMM"
function parseDate(dateStr) {
    let parts = dateStr.split('-');
    let day = parseInt(parts[0]);
    let monthShortNames = { "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5, "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11 };
    let month = monthShortNames[parts[1]];
    let year = new Date().getFullYear(); // Assuming the current year
    return new Date(year, month, day);
}

// Function to format a Date object to "DD-MMM"
function formatDate(date) {
    let day = date.getDate();
    let month = date.toLocaleString('en', { month: 'short' }); // English month name
    return `${day}-${month}`;
}

// Ensure to use parseDate and formatDate consistently
// Example: let dateObj = parseDate(dateStr); let formattedDate = formatDate(dateObj);

// Function to arrange dates in the client movements
function arrangeClintMovementsDates() {
    let clintMovementsFirstDayDateInput = document.getElementById('clint_movements_first_day_date_input_id').value;
    let currentDate = parseDate(clintMovementsFirstDayDateInput);
    let clintMovementsRowDivs = document.getElementsByClassName('clint_movements_row_class');

    for (let i = 0; i < clintMovementsRowDivs.length; i++) {
        let h6Element = clintMovementsRowDivs[i].querySelector('h6');
        if (h6Element) {
            h6Element.innerText = formatDate(currentDate);
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }

    let lastClintMovementsRowDiv = clintMovementsRowDivs[clintMovementsRowDivs.length - 1];
    let lastH6Element = lastClintMovementsRowDiv.querySelector('h6');
    if (lastH6Element) {
        let lastH6Date = parseDate(lastH6Element.innerText);
        lastH6Date.setDate(lastH6Date.getDate() + 1);
        document.getElementById('clint_movements_current_day_date_input_id').value = formatDate(lastH6Date);
    }
}

// Example usage of date functions in other parts of your code
function setTheFirstClintMovemnetsDate() {
    let clintMovementsFirstDayDateInput = document.getElementById('clint_movements_first_day_date_input_id').value;
    let clintMovementsLastDayDateInput = document.getElementById('clint_movements_last_day_date_input_id').value;
    let clintMovementsCurrentDayDateInput = document.getElementById('clint_movements_current_day_date_input_id');
    let clintMovementsPeriodInputsSubmitIcon = document.getElementById('clint_movements_period_inputs_submit_icon');

    if (clintMovementsFirstDayDateInput !== '' && clintMovementsLastDayDateInput !== '') {
        clintMovementsPeriodInputsSubmitIcon.style.backgroundColor = 'rgb(0, 255, 0)';
        setTimeout(() => {
            clintMovementsPeriodInputsSubmitIcon.style.backgroundColor = 'rgb(255, 174, 0)';
        }, 500);

        let clintMovementsRowDivs = document.getElementsByClassName('clint_movements_row_class_for_editing');
        let topClintMovementsRowH6Element = null; // Ensure initialization

        function deleteAheadDivs() {
            clintMovementsRowDivs = document.getElementsByClassName('clint_movements_row_class_for_editing');
            if (clintMovementsRowDivs.length > 0) {
                let lastClintMovementsRowDiv = clintMovementsRowDivs[clintMovementsRowDivs.length - 1];
                let lastClintMovementsRowH6Element = lastClintMovementsRowDiv.querySelector('h6');
                if (lastClintMovementsRowH6Element && parseDate(lastClintMovementsRowH6Element.innerText) > parseDate(clintMovementsLastDayDateInput)) {
                    document.getElementById('clint_movements_current_day_date_input_id').value = lastClintMovementsRowH6Element.innerText;
                    lastClintMovementsRowDiv.remove();
                    deleteAheadDivs();
                }
            }
        }

        if (clintMovementsRowDivs.length > 0) {
            let topClintMovementsRowDiv = clintMovementsRowDivs[0];
            topClintMovementsRowH6Element = topClintMovementsRowDiv.querySelector('h6');
            if (topClintMovementsRowH6Element && topClintMovementsRowH6Element.innerText !== clintMovementsFirstDayDateInput) {
                topClintMovementsRowH6Element.innerText = clintMovementsFirstDayDateInput;
                clintMovementsCurrentDayDateInput.value = clintMovementsFirstDayDateInput;
                arrangeClintMovementsDates();

                /* Make sure to delet all 'clint_movements_row_class_for_editing' that have a date ahead the date exist in the 'clint_movements_last_day_date_input_id' */
                deleteAheadDivs();
                return;
            }
        }

        // Set the new value of the 'clint_movements_first_day_date_input_id' inside 'clint_movements_current_day_date_input_id'
        if (!topClintMovementsRowH6Element || topClintMovementsRowH6Element.innerText !== clintMovementsFirstDayDateInput) {
            clintMovementsCurrentDayDateInput.value = clintMovementsFirstDayDateInput;
        }

        deleteAheadDivs();

        document.getElementById('store_localstorage_clint_movements_first_day_date_value').innerText = clintMovementsFirstDayDateInput;
        document.getElementById('store_localstorage_clint_movements_last_day_date_value').innerText = clintMovementsLastDayDateInput;
        document.getElementById('store_localstorage_clint_movements_total_nights_day_date_value').innerText = document.getElementById('clint_movements_total_nights_input_id').value;

    } else {
        clintMovementsPeriodInputsSubmitIcon.style.backgroundColor = 'red';
        setTimeout(() => {
            clintMovementsPeriodInputsSubmitIcon.style.backgroundColor = 'rgb(255, 174, 0)';
        }, 500);
    }
}














































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
const innerDatePickerArabicMonths = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

// Arabic day names
const arabicDays = ['أحد', 'إثن', 'ثلو', 'ربو', 'خمي', 'جمع', 'سبت'];

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













/* Store the package total nights for later use */
let storePackageTotalNights;


// Variables to track the visibility of the date pickers
var isWholePackageStartDatePickerVisible = false;
var isWholePackageEndDatePickerVisible = false;

// Function to calculate the difference in days
function wholePackageAndHotelCalculateDaysDifference(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let timeDifference = end.getTime() - start.getTime();
    let dayDifference = timeDifference / (1000 * 3600 * 24);
    return Math.round(dayDifference);
}

// Function to parse the Arabic date input
function parseArabicDate(dateStr) {
    let [day, monthName] = dateStr.split(' ');
    let month = arabicMonthsReverse[monthName];
    return new Date(`${month} ${day}, ${new Date().getFullYear()}`);
}

// Function to update the total nights input
function updateWholePackageTotalNights() {
    let startDateInput = document.getElementById('package_start_date_input_id');
    let endDateInput = document.getElementById('package_end_date_input_id');
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

// Function to disable specific dates
function disableSpecificDates(date) {
    let startDateInput = document.getElementById('package_start_date_input_id').value;
    if (startDateInput) {
        let startDate = parseArabicDate(startDateInput);
        return date.getTime() <= startDate.getTime(); // Disable the exact start date and any date before it
    }
    return false;
}

// Get today's date
var today = new Date();

// Initialize Pikaday for the start date
var wholePackageStartDatePicker = new Pikaday({
    field: document.getElementById('package_start_date_input_id'),
    format: 'DD-M',
    minDate: today,
    toString(date, format) {
        let day = date.getDate();
        let month = getArabicMonthName(date.getMonth());
        return `${day} ${month}`;
    },
    i18n: {
        previousMonth: 'الشهر السابق',
        nextMonth: 'الشهر التالي',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    onSelect: function () {
        isWholePackageStartDatePickerVisible = false; // Reset visibility state on date selection
        updateWholePackageTotalNights();
        let selectedDate = this.getDate();
        let minEndDate = new Date(selectedDate);
        minEndDate.setDate(minEndDate.getDate() + 1); // Ensure end date is at least one day after the start date
        wholePackageEndDatePicker.setMinDate(minEndDate); // Update min date for the second picker
    }
});

// Initialize Pikaday for the end date
var wholePackageEndDatePicker = new Pikaday({
    field: document.getElementById('package_end_date_input_id'),
    format: 'DD-M',
    minDate: today,
    toString(date, format) {
        let day = date.getDate();
        let month = getArabicMonthName(date.getMonth());
        return `${day} ${month}`;
    },
    i18n: {
        previousMonth: 'الشهر السابق',
        nextMonth: 'الشهر التالي',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    disableDayFn: disableSpecificDates, // Disable the exact start date and any date before it in the end date picker
    onSelect: function () {
        isWholePackageEndDatePickerVisible = false; // Reset visibility state on date selection
        updateWholePackageTotalNights(); // Call 'updateWholePackageTotalNights' when a date is selected
    }
});

// Toggle the whole package start date picker on input field click
document.getElementById('package_start_date_input_id').addEventListener('click', function (e) {
    e.stopPropagation();

    if (isWholePackageStartDatePickerVisible) {
        wholePackageStartDatePicker.hide();
        isWholePackageStartDatePickerVisible = false;
    } else {
        if (isWholePackageEndDatePickerVisible) {
            wholePackageEndDatePicker.hide();
            isWholePackageEndDatePickerVisible = false;
        }
        wholePackageStartDatePicker.show();
        isWholePackageStartDatePickerVisible = true;
    }
});

// Toggle the whole package end date picker on input field click
document.getElementById('package_end_date_input_id').addEventListener('click', function (e) {
    e.stopPropagation();

    if (isWholePackageEndDatePickerVisible) {
        wholePackageEndDatePicker.hide();
        isWholePackageEndDatePickerVisible = false;
    } else {
        if (isWholePackageStartDatePickerVisible) {
            wholePackageStartDatePicker.hide();
            isWholePackageStartDatePickerVisible = false;
        }
        wholePackageEndDatePicker.show();
        isWholePackageEndDatePickerVisible = true;
    }
});

// Function to check if click is inside the date picker
function isClickInsideDatePicker(event, picker) {
    return picker.el.contains(event.target);
}

// Hide the date pickers when clicking outside, but don't toggle state
document.addEventListener('click', function (e) {
    if (isWholePackageStartDatePickerVisible && !isClickInsideDatePicker(e, wholePackageStartDatePicker)) {
        wholePackageStartDatePicker.hide();
        isWholePackageStartDatePickerVisible = false;
    }
    if (isWholePackageEndDatePickerVisible && !isClickInsideDatePicker(e, wholePackageEndDatePicker)) {
        wholePackageEndDatePicker.hide();
        isWholePackageEndDatePickerVisible = false;
    }
});

















/* Store the hotel total nights for later use */
let storeHotelTotalNights;


// Variables to track the visibility of the date pickers
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

// Function to update the total nights input
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
function disableSpecificDates(date) {
    let startDateInput = document.getElementById('hotel_check_in_input_id').value;
    if (startDateInput) {
        let startDate = parseArabicDate(startDateInput);
        return date.getTime() <= startDate.getTime(); // Disable the exact start date and any date before it
    }
    return false;
}

// Get today's date
var today = new Date();

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
        previousMonth: 'الشهر السابق',
        nextMonth: 'الشهر التالي',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    onSelect: function () {
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
        previousMonth: 'الشهر السابق',
        nextMonth: 'الشهر التالي',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    disableDayFn: disableSpecificDates, // Disable the exact start date and any date before it in the end date picker
    onSelect: function () {
        isHotelEndDatePickerVisible = false; // Reset visibility state on date selection
        updateHotelTotalNights(); // Call 'updateHotelTotalNights' when a date is selected
    }
});

// Toggle the hotel check-in date picker on input field click
document.getElementById('hotel_check_in_input_id').addEventListener('click', function (e) {
    e.stopPropagation();

    if (isHotelStartDatePickerVisible) {
        hotelStartDatePicker.hide();
        isHotelStartDatePickerVisible = false;
    } else {
        if (isHotelEndDatePickerVisible) {
            hotelEndDatePicker.hide();
            isHotelEndDatePickerVisible = false;
        }
        hotelStartDatePicker.show();
        isHotelStartDatePickerVisible = true;
    }
});

// Toggle the hotel check-out date picker on input field click
document.getElementById('hotel_check_out_input_id').addEventListener('click', function (e) {
    e.stopPropagation();

    if (isHotelEndDatePickerVisible) {
        hotelEndDatePicker.hide();
        isHotelEndDatePickerVisible = false;
    } else {
        if (isHotelStartDatePickerVisible) {
            hotelStartDatePicker.hide();
            isHotelStartDatePickerVisible = false;
        }
        hotelEndDatePicker.show();
        isHotelEndDatePickerVisible = true;
    }
});

// Prevent the date pickers from hiding when clicking inside them
hotelStartDatePicker.el.addEventListener('click', function (e) {
    e.stopPropagation();
});
hotelEndDatePicker.el.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Hide the date pickers when clicking outside
document.addEventListener('click', function () {
    if (isHotelStartDatePickerVisible) {
        hotelStartDatePicker.hide();
        isHotelStartDatePickerVisible = false;
    }
    if (isHotelEndDatePickerVisible) {
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
        isDatePickerVisible = false; // Reset the visibility state when a date is selected
    },
    i18n: {
        previousMonth: 'الشهر السابق',
        nextMonth: 'الشهر التالي',
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





/* Time picker for flight fly and arravial time */
$(document).ready(function () {
    $('#flight_fly_away_time_input_id').pickatime({
        format: 'HH:i',
        interval: 5,
        min: [0, 0],
        max: [23, 59]
    });

    $('#flight_arrival_time_input_id').pickatime({
        format: 'HH:i',
        interval: 5,
        min: [0, 0],
        max: [23, 59]
    });
});




















/* Function to pick the first and last clint movemennts dates */




// Variables to track the visibility of the date pickers
var isClintMovementsFirstDayPickerVisible = false;
var isClintMovementsLastDayPickerVisible = false;

// Function to parse date strings in the format "DD-MMM"
function parseDate(dateStr) {
    let parts = dateStr.split('-');
    let day = parseInt(parts[0]);
    let monthShortNames = { "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5, "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11 };
    let month = monthShortNames[parts[1]];
    let year = new Date().getFullYear(); // Assuming the current year
    return new Date(year, month, day);
}

// Function to calculate the difference in days between two dates
function calculateDaysDifference(startDate, endDate) {
    let start = parseDate(startDate);
    let end = parseDate(endDate);
    let diff = end - start;
    return Math.round(diff / (1000 * 60 * 60 * 24));
}

// Function to update the total nights input
function updateWholeClintMovementsTotalNights() {
    let startDateInput = document.getElementById('clint_movements_first_day_date_input_id');
    let endDateInput = document.getElementById('clint_movements_last_day_date_input_id');
    let totalNightsInput = document.getElementById('clint_movements_total_nights_input_id');

    let startDate = startDateInput.value;
    let endDate = endDateInput.value;

    if (startDate !== '' && endDate !== '') {
        let totalNights = calculateDaysDifference(startDate, endDate);

        // Set the total clint movements night (just to show the user the difference)
        totalNightsInput.value = `${totalNights} ليالي`;

        // Ensure the end date is not earlier than or equal to the start date
        if (parseDate(startDate) >= parseDate(endDate)) {
            endDateInput.value = '';
            totalNightsInput.value = '';
        }
    } else {
        totalNightsInput.value = '';
    }
}

// Function to disable specific dates
function disableSpecificDates(date) {
    let startDateInput = document.getElementById('clint_movements_first_day_date_input_id').value;
    if (startDateInput) {
        let startDate = parseDate(startDateInput);
        return date.getTime() <= startDate.getTime(); // Disable the exact start date and any date before it
    }
    return false;
}

// Get today's date
var today = new Date();

// Prepare Pikaday for the first day input
var clintMovementsFirstDayPicker = new Pikaday({
    field: document.getElementById('clint_movements_first_day_date_input_id'), // Field to attach the date picker
    format: 'DD-MMM', // Format to display only day and month
    minDate: today, // Set minimum date to today
    toString(date, format) { // Function to format the date
        let day = date.getDate(); // Get the day
        let month = date.toLocaleString('en', { month: 'short' }); // Get the month in short format (English)
        return `${day}-${month}`; // Return formatted date
    },
    i18n: {
        previousMonth: 'الشهر السابق',
        nextMonth: 'الشهر التالي',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    onSelect: function () {
        isClintMovementsFirstDayPickerVisible = false; // Reset visibility state on date selection
        updateWholeClintMovementsTotalNights();
        let selectedDate = this.getDate();
        let minEndDate = new Date(selectedDate);
        minEndDate.setDate(minEndDate.getDate() + 1); // Ensure end date is at least one day after the start date
        clintMovementsLastDayPicker.setMinDate(minEndDate); // Update min date for the second picker
    }
});

// Prepare the second date picker (clint_movements_last_day_date_input_id)
var clintMovementsLastDayPicker = new Pikaday({
    field: document.getElementById('clint_movements_last_day_date_input_id'), // Field to attach the date picker
    format: 'DD-MMM', // Format to display only day and month
    minDate: today, // Set minimum date to today (will be updated dynamically)
    toString(date, format) { // Function to format the date
        let day = date.getDate(); // Get the day
        let month = date.toLocaleString('en', { month: 'short' }); // Get the month in short format (English)
        return `${day}-${month}`; // Return formatted date
    },
    i18n: {
        previousMonth: 'الشهر السابق',
        nextMonth: 'الشهر التالي',
        months: innerDatePickerArabicMonths,
        weekdays: arabicDays,
        weekdaysShort: arabicDays
    },
    disableDayFn: disableSpecificDates, // Disable the exact start date and any date before it in the end date picker
    onSelect: function () {
        isClintMovementsLastDayPickerVisible = false; // Reset visibility state on date selection
        updateWholeClintMovementsTotalNights(); // Call 'updateWholeClintMovementsTotalNights' when a date is selected
    }
});

// Toggle the Clint Movements First Day date picker on input field click
document.getElementById('clint_movements_first_day_date_input_id').addEventListener('click', function (e) {
    e.stopPropagation();

    if (isClintMovementsFirstDayPickerVisible) {
        clintMovementsFirstDayPicker.hide();
        isClintMovementsFirstDayPickerVisible = false;
    } else {
        if (isClintMovementsLastDayPickerVisible) {
            clintMovementsLastDayPicker.hide();
            isClintMovementsLastDayPickerVisible = false;
        }
        clintMovementsFirstDayPicker.show();
        isClintMovementsFirstDayPickerVisible = true;
    }
});

// Toggle the Clint Movements Last Day date picker on input field click
document.getElementById('clint_movements_last_day_date_input_id').addEventListener('click', function (e) {
    e.stopPropagation();

    if (isClintMovementsLastDayPickerVisible) {
        clintMovementsLastDayPicker.hide();
        isClintMovementsLastDayPickerVisible = false;
    } else {
        if (isClintMovementsFirstDayPickerVisible) {
            clintMovementsFirstDayPicker.hide();
            isClintMovementsFirstDayPickerVisible = false;
        }
        clintMovementsLastDayPicker.show();
        isClintMovementsLastDayPickerVisible = true;
    }
});

// Prevent the date pickers from hiding when clicking inside them
clintMovementsFirstDayPicker.el.addEventListener('click', function (e) {
    e.stopPropagation();
});
clintMovementsLastDayPicker.el.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Hide the date pickers when clicking outside
document.addEventListener('click', function () {
    if (isClintMovementsFirstDayPickerVisible) {
        clintMovementsFirstDayPicker.hide();
        isClintMovementsFirstDayPickerVisible = false;
    }
    if (isClintMovementsLastDayPickerVisible) {
        clintMovementsLastDayPicker.hide();
        isClintMovementsLastDayPickerVisible = false;
    }
});







































































/* Function for textarea auto resize */
// Function to toggle full-screen mode for a textarea by ID
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






















































