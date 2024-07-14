showPackageTypeSection = function (packageType) {

    if (packageType === 'hotel') {
        create_new_hotel_package_section.style.display = 'flex';
        create_new_flight_package_section.style.display = 'none';
        create_new_clint_movements_paln_section.style.display = 'none';

    } else if (packageType === 'flight') {
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'flex';
        create_new_clint_movements_paln_section.style.display = 'none';

    } else {
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'none';
        create_new_clint_movements_paln_section.style.display = 'flex';

    }
}



/* Header Nav Bar */
function toggleLinks(id) {
    var links = document.getElementById(id);
    if (links.style.maxHeight) {
        links.style.maxHeight = null;
    } else {
        links.style.maxHeight = links.scrollHeight + "px";
    }
}


/* Page Load Header Fade Animation */
setTimeout(function () {
    document.getElementById('body').style.opacity = "1";
}, 100);
















/* Function To Drop Down Elements */
function toggleDropdownContent(toggleButtonId, dropdownContentId) {
    let toggleButton = document.getElementById(toggleButtonId);
    let dropdownContent = document.getElementById(dropdownContentId);
    toggleButton.addEventListener('click', function () {
        dropdownContent.style.maxHeight = dropdownContent.style.maxHeight ? null : dropdownContent.scrollHeight + 'px';
    });
}

// Prepare dropdown toggles for client, hotel, and package details
toggleDropdownContent('toggle_hotel_clint_elements', 'hotel_dropdown_clint_content');
toggleDropdownContent('toggle_hotel_elements', 'dropdown_hotel_content');
toggleDropdownContent('toggle_package_elements', 'dropdown_package_content');



// Prepare dropdown toggles for flight package details
toggleDropdownContent('toggle_clint_flight_elements', 'flight_dropdown_content');



// Prepare dropdown toggles for transportation plane details
toggleDropdownContent('toggle_clint_movements_details_elements', 'clint_movements_details_dropdown_content');
toggleDropdownContent('toggle_clint_movements_period_elements', 'clint_movements_period_dropdown_content');





















/* Dropdown company names functionality */
let companyNamesInput = document.getElementById('clint_company_name_input_id');

// Get the options within the dropdown
let companyNamesInputOptions = document.querySelectorAll('#company_names_dropdown h3');

companyNamesInputOptions.forEach(option => {
    option.addEventListener('click', () => {
        companyNamesInput.value = option.textContent; // Set input value to selected option
        hideOverlay(); // Hide overlay after selection
    });
});


let checkboxes = document.querySelectorAll('#clint_package_type_div input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
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
let smsCardWithInternetAmountInputOptions = document.querySelectorAll('#sms_card_and_ticket_amount_dropdown h3');

// Add click event listener to each h3 element
smsCardWithInternetAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (lastClickedClintMovementsCityInput) { // Check if an input field was clicked before
            if (option.innerText === 'حذف') { // If the clicked h3 element's inner text is "حذف"
                lastClickedClintMovementsCityInput.value = ''; // Clear the value of the last clicked input field
            } else { // If the clicked h3 element's inner text is not "حذف"
                if (lastClickedClintMovementsCityInput.id === 'sms_card_with_internet_amount_input_id') {
                    // Set the value of the sms card input field with the selected option
                    lastClickedClintMovementsCityInput.value = `شرائح إتصال مع نت مفتوح ل${option.textContent}`;


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

































/* Dropdown airport line names functionality */
let hotelRoomAmountInput = document.getElementById('hotel_room_amount_input_id');

// Get the options within the dropdown
let hotelRoomAmountInputOptions = document.querySelectorAll('#hotel_room_amount_dropdown h3');

hotelRoomAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {
        hotelRoomAmountInput.value = option.textContent; // Set input value to selected option
        hideOverlay(); // Hide overlay after selection
    });
});




/* Function to create hotel room type description h3 dropdown elements */
let createRoopTypeDescripyionDropDown = function () {
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

        // Find the hotel object in the hotelRoomTypesDescriptionArray that matches the hotel name input value
        let hotel = hotelRoomTypesDescriptionArray.find(hotel => hotel.hotelName === hotelNameInput);

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
    }
}









// Get the following elements for later use
let hotelLocationInput = document.getElementById('hotel_location_input_id');
let hotelAreaInput = document.getElementById('hotel_area_input_id');
let hotelNameInput = document.getElementById('hotel_name_input_id');

// Get the dropdown elements
let hotelLocationDropdown = document.getElementById('hotel_location_dropdown');
let hotelAreaDropdown = document.getElementById('hotel_bali_area_dropdown');

// Get the options within the dropdowns
let hotelLocationOptions = hotelLocationDropdown.querySelectorAll('h3');
let hotelAreaOptions = hotelAreaDropdown.querySelectorAll('h3');

// Initialize overlay layer variable
let overlayLayer = null;

// Function to show the hotel area input if the location is "بالي"
function checkHotelLocation() {
    // If the selected location is not "بالي"
    if (hotelLocationInput.value.trim() != "بالي") {
        hotelAreaInput.style.display = 'none'; // Hide the hotel area input
    } else {
        hotelAreaInput.style.display = 'block'; // Show the hotel area input
    }

}

// Function to check if inputs should be clickable
function checkInputClickability() {
    if (hotelLocationInput.value.trim() === '') {
        hotelAreaInput.disabled = true; // Disable hotel area input
        hotelNameInput.disabled = true; // Disable hotel name input
    } else {
        hotelAreaInput.disabled = false; // Enable hotel area input
        if (hotelAreaInput.style.display === 'block' && hotelAreaInput.value.trim() === '') {
            hotelNameInput.disabled = true; // Disable hotel name input if hotel area input is visible and empty
        } else {
            hotelNameInput.disabled = false; // Enable hotel name input
        }
    }
}

// Add an event listener to check the hotel location input value on change
hotelLocationInput.addEventListener('input', () => {
    checkHotelLocation();
    checkInputClickability();
});

// Add event listener for each location option in the dropdown
hotelLocationOptions.forEach(option => {
    option.addEventListener('click', () => {
        hotelLocationInput.value = option.textContent; // Set input value to selected option
        checkHotelLocation(); // Check the hotel location after setting the value
        hotelAreaInput.value = ''; // Clear the hotel area input
        hotelNameInput.value = ''; // Clear the hotel name input
        document.getElementById('hotel_room_type_description_input_id').value = ''; // Reset the value of the hotel room type dscription
        hotelLocationDropdown.classList.remove('show'); // Hide dropdown after selection
        hideOverlay(); // Hide overlay after selection
        checkInputClickability(); // Check input clickability after setting the value
    });
});

// Add event listeners for each area option in the dropdown
hotelAreaOptions.forEach(option => {
    option.addEventListener('click', () => {
        hotelAreaInput.value = option.textContent; // Set input value to selected option
        hotelNameInput.value = ''; // Clear the hotel name input
        document.getElementById('hotel_room_type_description_input_id').value = ''; // Reset the value of the hotel room type dscription
        hotelAreaDropdown.classList.remove('show'); // Hide dropdown after selection
        hideOverlay(); // Hide overlay after selection
        checkInputClickability(); // Check input clickability after setting the value
    });
});


// Toggle dropdown visibility on hotel area input click
hotelAreaInput.addEventListener('click', (event) => {
    if (!hotelAreaInput.disabled) { // Check if input is not disabled
        showOverlay('hotel_bali_area_dropdown');
    }
});

// Function to toggle visibility of the correct hotel name dropdown
function toggleHotelNameDropdown() {
    let location = hotelLocationInput.value.trim(); // Get the current location value
    let area = hotelAreaInput.value.trim(); // Get the current area value
    let dropdownToShow = null; // Initialize variable for the dropdown to show

    // Determine which dropdown to show based on location input or area input values
    switch (location) {
        case "جاكرتا":
            dropdownToShow = 'jakarta_hotel_dropdown';
            break;
        case "باندونق":
            dropdownToShow = 'bandung_hotel_dropdown';
            break;
        case "لومبوك":
            dropdownToShow = 'lombok_hotel_dropdown';
            break;
        case "بونشاك":
            dropdownToShow = 'puncak_hotel_dropdown';
            break;
        case "بالي":
            switch (area) {
                case "كيراماس":
                    dropdownToShow = 'keramas_hotel_dropdown';
                    break;
                case "اوبود":
                    dropdownToShow = 'ubud_hotel_dropdown';
                    break;
                case "نوسا دوا":
                    dropdownToShow = 'nusa_dua_hotel_dropdown';
                    break;
                case "سيمنياك":
                    dropdownToShow = 'seminyak_hotel_dropdown';
                    break;
                case "كوتا":
                    dropdownToShow = 'kuta_hotel_dropdown';
                    break;
                case "جيمباران":
                    dropdownToShow = 'jimbaran_hotel_dropdown';
                    break;
                case "اولواتو":
                    dropdownToShow = 'uluwatu_hotel_dropdown';
                    break;
            }
            break;
    }

    /* Pass the 'dropdownToShow' value to the 'showOverlay' function */
    showOverlay(dropdownToShow);


    // Add event listeners for each hotel name option in the dropdown
    let dropdownHotelOptions = document.getElementById(`${dropdownToShow}`).querySelectorAll('h3');
    dropdownHotelOptions.forEach(option => {
        option.addEventListener('click', () => {
            hotelNameInput.value = option.textContent; // Set input value to selected option
            document.getElementById('hotel_room_type_description_input_id').value = ''; // Reset the value of the hotel room type dscription
            hideOverlay(); // Hide overlay after selection
        });
    });
}

// Add an event listener to toggle the correct hotel name dropdown on click
hotelNameInput.addEventListener('click', (event) => {
    if (!hotelNameInput.disabled) { // Check if input is not disabled
        event.stopPropagation(); // Prevent the click event from propagating to the document
        toggleHotelNameDropdown(); // Toggle the correct hotel name dropdown
    }
});



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
        dropdownDiv.style.maxHeight = '80vh';
        dropdownDiv.style.minHeight = '80vh';
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





/* Hotel dropdown info */
document.getElementById('hotel_bali_area_search_bar_input_id').addEventListener('input', () => {
    filterOptions('hotel_bali_area_search_bar_input_id', 'hotel_bali_area_dropdown');
});

document.getElementById('keramas_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('keramas_hotel_search_bar_input_id', 'keramas_hotel_dropdown');
});

document.getElementById('ubud_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('ubud_hotel_search_bar_input_id', 'ubud_hotel_dropdown');
});

document.getElementById('nusa_dua_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('nusa_dua_hotel_search_bar_input_id', 'nusa_dua_hotel_dropdown');
});

document.getElementById('seminyak_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('seminyak_hotel_search_bar_input_id', 'seminyak_hotel_dropdown');
});

document.getElementById('kuta_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('kuta_hotel_search_bar_input_id', 'kuta_hotel_dropdown');
});

document.getElementById('jimbaran_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('jimbaran_hotel_search_bar_input_id', 'jimbaran_hotel_dropdown');
});

document.getElementById('uluwatu_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('uluwatu_hotel_search_bar_input_id', 'uluwatu_hotel_dropdown');
});

document.getElementById('jakarta_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('jakarta_hotel_search_bar_input_id', 'jakarta_hotel_dropdown');
});

document.getElementById('puncak_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('puncak_hotel_search_bar_input_id', 'puncak_hotel_dropdown');
});

document.getElementById('bandung_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('bandung_hotel_search_bar_input_id', 'bandung_hotel_dropdown');
});

document.getElementById('lombok_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('lombok_hotel_search_bar_input_id', 'lombok_hotel_dropdown');
});













/* clint movements hotel names dropdown */
document.getElementById('hotel_room_type_description_input_id').addEventListener('input', () => {
    filterOptions('hotel_room_type_description_input_id', 'hotel_room_type_description_dropdown');
});











/* clint movements hotel names dropdown */
document.getElementById('clint_movements_hotel_names_search_bar_input_id').addEventListener('input', () => {
    filterOptions('clint_movements_hotel_names_search_bar_input_id', 'clint_movements_hotel_names_dropdown');
});













/* LocalStorage import and delete dropdown */
document.getElementById('import_localstorage_data_names_search_bar_input_id').addEventListener('input', () => {
    filterOptions('import_localstorage_data_names_search_bar_input_id', 'import_localstorage_data_names_dropdown');
});
document.getElementById('delete_localstorage_data_names_search_bar_input_id').addEventListener('input', () => {
    filterOptions('delete_localstorage_data_names_search_bar_input_id', 'delete_localstorage_data_names_dropdown');
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
let adultFlightPersonAmountInput = document.getElementById('adult_flight_person_amount_input_id');

// Get the options within the dropdown
let adultFlightPersonAmountInputOptions = document.querySelectorAll('#adult_flight_people_amount_dropdown h3');

adultFlightPersonAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {
        adultFlightPersonAmountInput.value = option.textContent; // Set input value to selected option
        hideOverlay(); // Hide overlay after selection
    });
});



let infantFlightPersonAmountInput = document.getElementById('infant_flight_person_amount_input_id');

// Get the options within the dropdown
let infantFlightPersonAmountInputOptions = document.querySelectorAll('#infant_flight_people_amount_dropdown h3');

infantFlightPersonAmountInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        if (option.textContent === 'حذف') {
            infantFlightPersonAmountInput.value = ''; // Set input value as '' if the 'حذف' h3 is clicked

        } else {
            infantFlightPersonAmountInput.value = option.textContent; // Set input value to selected option
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

// Variable to store the clicked h3 city for the 'clint_movements_next_city_input_id' input for later use
let storeClintMovementsNextCityInput = null;

/* Clint movements pick current city functions */
let clintMovementsCurrentCityInput = document.getElementById('clint_movements_current_city_input_id');

// Get the options within the dropdown
let clintMovementsCurrentCityInputOptions = document.querySelectorAll('#clint_movemnts_current_city_dropdown h3');

clintMovementsCurrentCityInputOptions.forEach(option => {
    option.addEventListener('click', () => {
        clintMovementsCurrentCityInput.value = option.textContent; // Set input value to selected option

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
            storeClintMovementsNextCityInput = null;

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


    /* in case if the 'clint_movements_next_city_input_id' was empty then use the value of the 'clint_movements_current_city_input_id' */
    if (storeClintMovementsNextCityInput === null) {


        /* Show the clint movements visting places based on the value of the 'clint_movements_current_city_input_id' */
        if (clint_movements_current_city_input_id.value === 'بالي') {
            bali_clint_movements_places_div.style.display = 'block';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';


        } else if (clint_movements_current_city_input_id.value === 'جاكرتا') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'block';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';

        } else if (clint_movements_current_city_input_id.value === 'بونشاك') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'block';
            bandung_clint_movements_places_div.style.display = 'none';

        } else if (clint_movements_current_city_input_id.value === 'باندونق') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'block';

        }



        /* if the 'storeClintMovementsNextCityInput' which is the value of 'clint_movements_next_city_input_id' is not null then use it to show clint movements visting places */
    } else if (storeClintMovementsNextCityInput !== null) {


        /* Show the clint movements visting places based on the value of the 'storeClintMovementsNextCityInput' */
        if (storeClintMovementsNextCityInput === 'بالي') {
            bali_clint_movements_places_div.style.display = 'block';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';


        } else if (storeClintMovementsNextCityInput === 'جاكرتا') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'block';
            puncak_clint_movements_places_div.style.display = 'none';
            bandung_clint_movements_places_div.style.display = 'none';

        } else if (storeClintMovementsNextCityInput === 'بونشاك') {
            bali_clint_movements_places_div.style.display = 'none';
            jakarta_clint_movements_places_div.style.display = 'none';
            puncak_clint_movements_places_div.style.display = 'block';
            bandung_clint_movements_places_div.style.display = 'none';

        } else if (storeClintMovementsNextCityInput === 'باندونق') {
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
    }


    // Function to hide the clint movements places page and remove the exit button
    exitClintMovementsPlacesPage.onclick = function () {
        clintMovementsPlacesPageDiv.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scrolling

        insertClintMovementsPlacesIcon.remove();
        exitClintMovementsPlacesPage.remove();
    }
}


/* Function to show the clint movements tutorial page */
showClintMovemtsTutorialPage = function () {
    let clintMovementsTutorialPageDiv = document.getElementById('clint_movements_tutorial_page_div');


    clintMovementsTutorialPageDiv.style.display = 'flex';

    // Disable scrolling
    body.style.overflow = 'hidden';


    let exitClintMovementsTutorialPage = document.createElement('ion-icon');
    exitClintMovementsTutorialPage.name = 'arrow-undo';
    exitClintMovementsTutorialPage.className = 'exit_full_screen_icon';
    document.body.appendChild(exitClintMovementsTutorialPage);


    exitClintMovementsTutorialPage.onclick = function () {
        clintMovementsTutorialPageDiv.style.display = 'none';
        exitClintMovementsTutorialPage.remove();

        // Re-enable scrolling
        body.style.overflow = 'auto';
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

            // Reset the background color of all p elements to darkred
            for (var i = 0; i < pElements.length; i++) {
                pElements[i].style.backgroundColor = 'rgb(207, 233, 242)';
                pElements[i].style.color = 'black';
            }
        }
    });

    // Toggle the background color of the clicked p element
    if (clickedPlace.style.backgroundColor === 'rgb(0, 155, 0)') {
        clickedPlace.style.backgroundColor = 'rgb(207, 233, 242)';
        clickedPlace.style.color = 'black';
    } else {
        clickedPlace.style.backgroundColor = 'rgb(0, 155, 0)';
        clickedPlace.style.color = 'white';
    }

    // Additional functionality for clint_movements_places_names_options_for_random_days_class
    if (parentDiv.classList.contains('clint_movements_places_names_options_for_random_days_class')) {
        var allRandomDaysClassDivs = document.querySelectorAll('.clint_movements_places_names_options_for_random_days_class');

        // Iterate through all random days class divs
        allRandomDaysClassDivs.forEach(function (randomDaysClassDiv) {
            // Get all p elements within the random days class div
            var pElements = randomDaysClassDiv.getElementsByTagName('p');

            // Reset the background color of all p elements in random days class
            for (var i = 0; i < pElements.length; i++) {
                pElements[i].style.backgroundColor = 'rgb(207, 233, 242)';
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


/* Function to set the first and last date of the clint movements period */
let initialClintFirstDayDateValue = document.getElementById('clint_movements_first_day_date_input_id').value;

function setTheFirstClintMovemnetsDate() {
    let clintMovementsFirstDayDateInput = document.getElementById('clint_movements_first_day_date_input_id').value;
    let clintMovementsLastDayDateInput = document.getElementById('clint_movements_last_day_date_input_id').value;
    let clintMovementsCurrentDayDateInput = document.getElementById('clint_movements_current_day_date_input_id');
    let clintMovementsPeriodInputsSubmitIcon = document.getElementById('clint_movements_period_inputs_submit_icon');
    let insertedClintMovementsDataPositionDiv = document.getElementById('inserted_clint_movements_data_position_div');

    if (clintMovementsFirstDayDateInput !== '' && clintMovementsLastDayDateInput !== '') {
        // Change the submit icon background color
        clintMovementsPeriodInputsSubmitIcon.style.backgroundColor = 'rgb(0, 255, 0)';

        // Set the background color of the submit icon back to default color
        setTimeout(() => {
            clintMovementsPeriodInputsSubmitIcon.style.backgroundColor = 'darkorange';
        }, 500);

        // Check if the first day date input value has changed
        if (initialClintFirstDayDateValue !== clintMovementsFirstDayDateInput) {
            // Set the new value of the 'clint_movements_first_day_date_input_id' inside 'clint_movements_current_day_date_input_id'
            clintMovementsCurrentDayDateInput.value = clintMovementsFirstDayDateInput;


            // Reset the content of the inserted_clint_movements_data_position_div and hide the elements
            insertedClintMovementsDataPositionDiv.innerHTML = '';
            document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'none';
            document.getElementById('export_package_pdf_div_id').style.display = 'none';


            // Update the initial value to the current value
            initialClintFirstDayDateValue = clintMovementsFirstDayDateInput;
        }

    } else {
        // Change the submit icon background color
        clintMovementsPeriodInputsSubmitIcon.style.backgroundColor = 'red';

        // Set the background color of the submit icon back to default color
        setTimeout(() => {
            clintMovementsPeriodInputsSubmitIcon.style.backgroundColor = 'darkorange';
        }, 500);
    }
}









































// Function to show the overlay
function showOverlay(clickedInputDropdownIdName) {
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
    // Check if any dropdown with the class name 'company_names_dropdown_class' is visible and hide it
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




// Check which input element should be clickable or unclickable based on the value of the 'hotel_location_input_id'
checkInputClickability();










































/* Function to pick the first and last clint movemennts dates */
// Get today's date
var today = new Date();

// Praper Pikaday for the first day input
var firstDayPicker = new Pikaday({
    field: document.getElementById('clint_movements_first_day_date_input_id'), // Field to attach the date picker
    format: 'DD-M', // Format to display only day and month
    minDate: today, // Set minimum date to today
    toString(date, format) { // Function to format the date
        let day = date.getDate(); // Get the day
        let month = date.toLocaleString('default', { month: 'short' }); // Get the month in short format
        return `${day}-${month}`; // Return formatted date
    },

    /* Function to limit the data picker for the 'clint_movements_last_day_date_input_id' */
    onSelect: function (date) { // Function to run when a date is selected
        // Set the minDate for the last day picker to be one day after the selected first date
        let minDate = new Date(date);
        minDate.setDate(minDate.getDate() + 1);
        lastDayPicker.setMinDate(minDate);
    }
});

// Praper the second date picker (clint_movements_last_day_date_input_id)
var lastDayPicker = new Pikaday({
    field: document.getElementById('clint_movements_last_day_date_input_id'), // Field to attach the date picker
    format: 'DD-M', // Format to display only day and month
    minDate: today, // Set minimum date to today
    toString(date, format) { // Function to format the date
        let day = date.getDate(); // Get the day
        let month = date.toLocaleString('default', { month: 'short' }); // Get the month in short format
        return `${day}-${month}`; // Return formatted date
    },
});



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











// Function to update the total nights input
function updateWholePackageTotalNights() {
    let startDate = document.getElementById('package_start_date_input_id').value;
    let endDate = document.getElementById('package_end_date_input_id').value;
    let totalNights = calculateDaysDifference(startDate, endDate);
    document.getElementById('package_total_nights_input_id').value = totalNights;
}


/* Inputs date for whole package start and end period */
var wholePackageStartDatePicker = new Pikaday({
    field: document.getElementById('package_start_date_input_id'),
    format: 'DD-M',
    minDate: new Date(),
    toString(date, format) {
        let day = date.getDate();
        let month = arabicMonths[date.toLocaleString('default', { month: 'long' })];
        return `${day} ${month}`;
    },
    onSelect: updateWholePackageTotalNights // Call 'updateWholePackageTotalNights' when a date is selected
});

var wholePackageEndDatePicker = new Pikaday({
    field: document.getElementById('package_end_date_input_id'),
    format: 'DD-M',
    minDate: new Date(),
    toString(date, format) {
        let day = date.getDate();
        let month = arabicMonths[date.toLocaleString('default', { month: 'long' })];
        return `${day} ${month}`;
    },
    onSelect: updateWholePackageTotalNights // Call 'updateWholePackageTotalNights' when a date is selected
});













// Function to update the total nights input
function updateHotelTotalNights() {
    let startDate = document.getElementById('hotel_check_in_input_id').value;
    let endDate = document.getElementById('hotel_check_out_input_id').value;
    let totalNights = calculateDaysDifference(startDate, endDate);
    document.getElementById('hotel_total_nights_input_id').value = totalNights;
}


/* Inputs date for hotel start and end period */
var hotelStartDatePicker = new Pikaday({
    field: document.getElementById('hotel_check_in_input_id'),
    format: 'DD-M',
    minDate: new Date(),
    toString(date, format) {
        let day = date.getDate();
        let month = arabicMonths[date.toLocaleString('default', { month: 'long' })];
        return `${day} ${month}`;
    },

    /* Run the 'updateHotelTotalNights' to find the total night amount */
    onSelect: updateHotelTotalNights // Call 'updateHotelTotalNights' when a date is selected
});

var hotelEndDatePicker = new Pikaday({
    field: document.getElementById('hotel_check_out_input_id'),
    format: 'DD-M',
    minDate: new Date(),
    toString(date, format) {
        let day = date.getDate();
        let month = arabicMonths[date.toLocaleString('default', { month: 'long' })];
        return `${day} ${month}`;
    },

    /* Run the 'updateHotelTotalNights' to find the total night amount */
    onSelect: updateHotelTotalNights // Call 'updateHotelTotalNights' when a date is selected
});












/* Inputs date for flight date */
var startDatePicker = new Pikaday({
    field: document.getElementById('flight_date_input_id'),
    format: 'DD-M',
    minDate: new Date(),
    toString(date, format) {
        let day = date.getDate();
        let month = arabicMonths[date.toLocaleString('default', { month: 'long' })];
        return `${day} ${month}`;
    },
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






















































