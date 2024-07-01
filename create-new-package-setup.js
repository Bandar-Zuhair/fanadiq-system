showPackageTypeSection = function (packageType) {

    if (packageType === 'hotel') {
        create_new_flight_package_section.style.display = 'none';
        create_new_hotel_package_section.style.display = 'flex';

    } else if (packageType === 'flight') {
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'flex';

    } else {

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
















/* Function To Drop Down The Clint Detail Elements */
function toggleDropdownContent(toggleButtonId, dropdownContentId) {
    let toggleButton = document.getElementById(toggleButtonId);
    let dropdownContent = document.getElementById(dropdownContentId);
    toggleButton.addEventListener('click', function () {
        dropdownContent.style.maxHeight = dropdownContent.style.maxHeight ? null : dropdownContent.scrollHeight + 'px';
    });
}

// Initialize dropdown toggles for client, hotel, and package details
toggleDropdownContent('toggle_hotel_clint_elements', 'hotel_dropdown_clint_content');
toggleDropdownContent('toggle_hotel_elements', 'dropdown_hotel_content');
toggleDropdownContent('toggle_package_elements', 'dropdown_package_content');




toggleDropdownContent('toggle_clint_flight_elements', 'flight_dropdown_content');














/* Functions to run the company names search bar and drop down functionality */
// Get elements
let companyNameInput = document.getElementById('clint_company_name_input_id');
let companyNamesDiv = document.getElementById('company_names_dropdown');
let companyNameSearchBar = document.getElementById('company_name_search_bar');

// Function to show the dropdown and overlay
function showDropdown() {
    companyNamesDiv.classList.add('show');
    companyNamesDiv.style.transition = 'transform 0.2s ease-in-out'; // Ensure transform transition is smooth
    showOverlay();
}

// Function to hide the dropdown and overlay
function hideDropdown() {
    companyNamesDiv.classList.remove('show');
    companyNamesDiv.style.transition = 'transform 0.2s ease-in-out'; // Ensure transform transition is smooth
    hideOverlay();
}

// Event listener to toggle dropdown visibility on input click
companyNameInput.addEventListener('click', () => {
    showDropdown();
});

// Event listener to expand dropdown on search bar click
companyNameSearchBar.addEventListener('click', () => {
    companyNamesDiv.style.height = '80vh'; // Set height to 90vh when search bar is clicked
    companyNamesDiv.style.transition = 'height 0.2s ease-in-out'; // Ensure height transition is smooth
});

// Event listener to handle selection of company names
companyNamesDiv.querySelectorAll('h3').forEach(option => {
    option.addEventListener('click', () => {
        companyNameInput.value = option.textContent;
        hideDropdown();
        companyNamesDiv.style.height = 'auto'; // Reset height to auto when hiding dropdown
        companyNamesDiv.style.transition = 'height 0.2s ease-in-out'; // Ensure height transition is smooth
    });
});

// Event listener to filter company names based on search bar input
companyNameSearchBar.addEventListener('input', () => {
    let filter = companyNameSearchBar.value.trim().toLowerCase();
    let options = companyNamesDiv.querySelectorAll('h3');
    let visibleCount = 0;

    options.forEach(option => {
        let companyName = option.textContent.trim().toLowerCase();
        if (filter === '' && visibleCount < 6) {
            option.style.display = 'block';
            visibleCount++;
        } else if (companyName.includes(filter)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
});

// Initial setup to show only the first 6 elements
document.addEventListener('DOMContentLoaded', () => {
    let options = companyNamesDiv.querySelectorAll('h3');
    options.forEach((option, index) => {
        if (index < 6) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
});

















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
        hotelAreaDropdown.classList.remove('show'); // Hide dropdown after selection
        hideOverlay(); // Hide overlay after selection
        checkInputClickability(); // Check input clickability after setting the value
    });
});

// Toggle dropdown visibility on hotel location input click
hotelLocationInput.addEventListener('click', (event) => {
    if (!hotelLocationInput.disabled) { // Check if input is not disabled
        event.stopPropagation(); // Prevent the click event from propagating to the document
        hotelLocationDropdown.classList.toggle('show'); // Toggle visibility of dropdown
        if (hotelLocationDropdown.classList.contains('show')) {
            showOverlay(); // Show overlay if dropdown is visible
        } else {
            hideOverlay(); // Hide overlay if dropdown is not visible
        }
    }
});

// Toggle dropdown visibility on hotel area input click
hotelAreaInput.addEventListener('click', (event) => {
    if (!hotelAreaInput.disabled) { // Check if input is not disabled
        event.stopPropagation(); // Prevent the click event from propagating to the document
        hotelAreaDropdown.classList.toggle('show'); // Toggle visibility of dropdown
        if (hotelAreaDropdown.classList.contains('show')) {
            showOverlay(); // Show overlay if dropdown is visible
        } else {
            hideOverlay(); // Hide overlay if dropdown is not visible
        }
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
            dropdownToShow = document.getElementById('jakarta_hotel_dropdown');
            break;
        case "باندونج":
            dropdownToShow = document.getElementById('bandung_hotel_dropdown');
            break;
        case "لومبوك":
            dropdownToShow = document.getElementById('lombok_hotel_dropdown');
            break;
        case "بونشاك":
            dropdownToShow = document.getElementById('puncak_hotel_dropdown');
            break;
        case "بالي":
            switch (area) {
                case "كيراماس":
                    dropdownToShow = document.getElementById('keramas_hotel_dropdown');
                    break;
                case "اوبود":
                    dropdownToShow = document.getElementById('ubud_hotel_dropdown');
                    break;
                case "نوسا دوا":
                    dropdownToShow = document.getElementById('nusa_dua_hotel_dropdown');
                    break;
                case "سيمنياك":
                    dropdownToShow = document.getElementById('seminyak_hotel_dropdown');
                    break;
                case "كوتا":
                    dropdownToShow = document.getElementById('kuta_hotel_dropdown');
                    break;
                case "جيمباران":
                    dropdownToShow = document.getElementById('jimbaran_hotel_dropdown');
                    break;
                case "اولواتو":
                    dropdownToShow = document.getElementById('uluwatu_hotel_dropdown');
                    break;
            }
            break;
    }

    if (dropdownToShow) {
        dropdownToShow.classList.toggle('show'); // Toggle visibility of the determined dropdown
        if (dropdownToShow.classList.contains('show')) {
            showOverlay(); // Show overlay if dropdown is visible
        } else {
            hideOverlay(); // Hide overlay if dropdown is not visible
        }

        // Add event listeners for each hotel name option in the dropdown
        let hotelNameOptions = dropdownToShow.querySelectorAll('h3');
        hotelNameOptions.forEach(option => {
            option.addEventListener('click', () => {
                hotelNameInput.value = option.textContent; // Set input value to selected option
                dropdownToShow.classList.remove('show'); // Hide dropdown after selection
                hideOverlay(); // Hide overlay after selection
            });
        });
    }
}

// Add an event listener to toggle the correct hotel name dropdown on click
hotelNameInput.addEventListener('click', (event) => {
    if (!hotelNameInput.disabled) { // Check if input is not disabled
        event.stopPropagation(); // Prevent the click event from propagating to the document
        toggleHotelNameDropdown(); // Toggle the correct hotel name dropdown
    }
});

// Prevent clicks inside any hotel dropdown from hiding the overlay
document.querySelectorAll('.hotel_data_options_dropdown_class').forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events inside the dropdown
    });
});

// Function to show the overlay
function showOverlay() {
    overlayLayer = document.createElement('div'); // Create a new overlay element
    overlayLayer.className = 'black_overlay'; // Set the class name for styling
    overlayLayer.onclick = hideOverlay; // Set the click event listener to hide the overlay when clicked outside
    document.body.appendChild(overlayLayer); // Append overlay to the document body


    setTimeout(() => {
        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
    }, 100);
}

// Function to hide the overlay and any visible dropdown
function hideOverlay() {

    // Check if any dropdown with the class name 'hotel_data_options_dropdown_class'is visible and hide it
    let visibleDropdown_1 = document.querySelector('.hotel_data_options_dropdown_class.show');
    if (visibleDropdown_1) {
        visibleDropdown_1.classList.remove('show'); // Remove 'show' class to hide dropdown
    }

    // Check if any dropdown with the class name 'company_names_dropdown_class' is visible and hide it
    let visibleDropdown_2 = document.querySelector('.company_names_dropdown_class.show');
    if (visibleDropdown_2) {
        visibleDropdown_2.classList.remove('show'); // Remove 'show' class to hide dropdown
        companyNamesDiv.style.height = '50vh'; // Set height to 90vh when search bar is clicked
    }

    // Check if any dropdown with the class name 'person_amount_dropdown_class' is visible and hide it
    let visibleDropdown_3 = document.querySelector('.person_amount_dropdown_class.show');
    if (visibleDropdown_3) {
        visibleDropdown_3.classList.remove('show'); // Remove 'show' class to hide dropdown
    }

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






































/* Function For Counting Hotel People Amount */
// Variables for person amount input and dropdown
let hotelPersonAmountInput = document.getElementById('hotel_person_amount_input_id');
let hotelPersonAmountDropdown = document.getElementById('hotel_person_amount_dropdown');
let hotelPersonAmountSubmitButton = document.getElementById('hotel_person_amount_submit_button');
let hotelChildAgeInputsContainer = document.getElementById('hotel_child_age_inputs_container');

// Variable to store the last saved counter values and child ages
let lastSavedHotelCounters = {
    adult: 1,
    child: 0
};
let lastSavedHotelChildAges = [];

// Function to add a new child age input
function addHotelChildAgeInput(value = '', index) {
    let inputCount = hotelChildAgeInputsContainer.children.length + 1;
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'child_age_input';
    input.placeholder = `عمر الطفل ${index || inputCount}`;
    input.value = value;
    input.required = true;
    input.addEventListener('input', checkEmptyHotelChildAgeInputs); // Add event listener to check for empty inputs

    /* Append the child age input to the 'hotel_child_age_inputs_container' div */
    hotelChildAgeInputsContainer.appendChild(input);
    checkEmptyHotelChildAgeInputs(); // Check inputs after adding a new one
}

// Function to remove the last child age input
function removeHotelChildAgeInput() {
    let inputs = hotelChildAgeInputsContainer.querySelectorAll('.child_age_input');
    if (inputs.length > 0) {
        hotelChildAgeInputsContainer.removeChild(inputs[inputs.length - 1]);
    }
    checkEmptyHotelChildAgeInputs(); // Check inputs after removing one
}

// Function to update the counter display
function updateHotelCounterDisplay(counterDiv, value) {
    counterDiv.querySelector('.hotel_count').textContent = value; // Update counter display with value
}

// Function to save the current counter values inside the 'hotel_person_amount_input_id' input
function saveHotelCounterValues() {
    let counters = document.querySelectorAll('.hotel_counter_div');
    lastSavedHotelCounters.adult = parseInt(counters[0].querySelector('.hotel_count').textContent, 10); // Save adult count
    lastSavedHotelCounters.child = parseInt(counters[1].querySelector('.hotel_count').textContent, 10); // Save child count

    // Save child ages
    lastSavedHotelChildAges = [];
    document.querySelectorAll('.child_age_input').forEach((input, index) => {
        lastSavedHotelChildAges[index] = input.value;
    });

    // Update the input field with the saved values
    if (lastSavedHotelCounters.child === 0) {
        hotelPersonAmountInput.value = `${lastSavedHotelCounters.adult} بالغ`;
    } else {
        hotelPersonAmountInput.value = `${lastSavedHotelCounters.adult} بالغ + ${lastSavedHotelCounters.child} طفل`;
    }
}

// Function to reset the counter values to the last saved values
function resetHotelCounterValues() {
    let counters = document.querySelectorAll('.hotel_counter_div');
    updateHotelCounterDisplay(counters[0], lastSavedHotelCounters.adult); // Reset adult counter display
    updateHotelCounterDisplay(counters[1], lastSavedHotelCounters.child); // Reset child counter display

    // Reset child age inputs
    hotelChildAgeInputsContainer.innerHTML = ''; // Clear all current inputs
    for (let i = 0; i < lastSavedHotelCounters.child; i++) {
        addHotelChildAgeInput(lastSavedHotelChildAges[i] || '', i + 1);
    }
}

// Function to check if any child age input is empty
function checkEmptyHotelChildAgeInputs() {
    let inputs = document.querySelectorAll('.child_age_input');
    let hasEmpty = Array.from(inputs).some(input => input.value.trim() === '');
    if (hasEmpty) {
        hotelPersonAmountSubmitButton.classList.add('hidden'); // Hide the submit button if there are empty inputs
    } else {
        hotelPersonAmountSubmitButton.classList.remove('hidden'); // Show the submit button if all inputs are filled
    }
}





// Toggle dropdown visibility on person amount input click
hotelPersonAmountInput.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    hotelPersonAmountDropdown.classList.toggle('show'); // Toggle visibility of dropdown
    if (hotelPersonAmountDropdown.classList.contains('show')) {
        showOverlay(); // Show overlay if dropdown is visible
        resetHotelCounterValues(); // Reset values to the last saved state
    } else {
        hideOverlay(); // Hide overlay if dropdown is not visible
    }
});

// Prevent clicks inside the person amount dropdown from hiding the overlay
hotelPersonAmountDropdown.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent propagation of click events inside the dropdown
});

// Add event listener for buttons inside the person amount dropdown
hotelPersonAmountDropdown.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        // Do not hide dropdown and overlay on button click
    });
});

// Add event listener to the submit button to save counter values and hide dropdown and overlay
hotelPersonAmountSubmitButton.addEventListener('click', () => {
    saveHotelCounterValues(); // Save current counter values
    hotelPersonAmountDropdown.classList.remove('show'); // Hide dropdown
    hideOverlay(); // Hide overlay
});




// Get all counter controls
let hotelCounterControls = document.querySelectorAll('.hotel_counter_controls');

// Function to update the count display and apply minimum constraints
function updateHotelCount(countDisplay, count, minCount) {
    countDisplay.textContent = count < minCount ? minCount : count; // Update count with minimum constraint
}

// Add event listeners to each counter controls
hotelCounterControls.forEach((counter, index) => {
    let minusBtn = counter.querySelector('.minus');
    let plusBtn = counter.querySelector('.plus');
    let countDisplay = counter.querySelector('.hotel_count');

    // Set the first value (number) based on minimum constraint
    let minCount = (index === 0) ? 1 : 0; // "بالغ" should have a minimum of 1

    // Event listener for minus button
    minusBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        let count = parseInt(countDisplay.textContent, 10);
        if (count > minCount) {
            count--; // Decrease count if greater than minimum
            updateHotelCount(countDisplay, count, minCount); // Update count display
            if (index === 1) { // If it's the "طفل" counter
                removeHotelChildAgeInput(); // Remove a child age input
            }
        }
    });

    // Event listener for plus button
    plusBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        let count = parseInt(countDisplay.textContent, 10);
        count++; // Increase count
        updateHotelCount(countDisplay, count, minCount); // Update count display
        if (index === 1) { // If it's the "طفل" counter
            addHotelChildAgeInput('', count); // Add a child age input
        }
    });

    // Prevent propagation of click events inside the counter div
    counter.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
    });
});

// Set the first counter values
resetHotelCounterValues(); // Prepare counters with last saved values


















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
    let exitButton = document.createElement('button');
    exitButton.classList.add('exit_full_screen_button');
    exitButton.textContent = 'تصغير';
    exitButton.onclick = function () {
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
        exitButton.remove();
    };

    // Append exit button to body
    document.body.appendChild(exitButton);
}






















































/* Function For Counting Flight People Amount */
// Variables for person amount input and dropdown
let flightPersonAmountInput = document.getElementById('flight_person_amount_input_id');
let flightPersonAmountDropdown = document.getElementById('flight_person_amount_dropdown');
let flightPersonAmountSubmitButton = document.getElementById('flight_person_amount_submit_button');

// Variable to store the last saved counter values
let lastSavedFlightCounters = {
    adult: 1,
    infat: 0
};


// Function to update the counter display
function updateFlightCounterDisplay(counterDiv, value) {
    counterDiv.querySelector('.flight_count').textContent = value; // Update counter display with value
}

// Function to save the current counter values inside the 'hotel_person_amount_input_id' input
function saveFlightCounterValues() {
    let counters = document.querySelectorAll('.flight_counter_div');
    lastSavedFlightCounters.adult = parseInt(counters[0].querySelector('.flight_count').textContent, 10); // Save adult count
    lastSavedFlightCounters.infat = parseInt(counters[1].querySelector('.flight_count').textContent, 10); // Save infat count


    // Update the input field with the saved values
    if (lastSavedFlightCounters.infat === 0) {
        flightPersonAmountInput.value = `${lastSavedFlightCounters.adult} بالغ`;
    } else {
        flightPersonAmountInput.value = `${lastSavedFlightCounters.adult} بالغ + ${lastSavedFlightCounters.infat} رضيع`;
    }
}

// Function to reset the counter values to the last saved values
function resetFlightCounterValues() {
    let counters = document.querySelectorAll('.flight_counter_div');
    updateFlightCounterDisplay(counters[0], lastSavedFlightCounters.adult); // Reset adult counter display
    updateFlightCounterDisplay(counters[1], lastSavedFlightCounters.infat); // Reset infat counter display
}




// Toggle dropdown visibility on person amount input click
flightPersonAmountInput.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    flightPersonAmountDropdown.classList.toggle('show'); // Toggle visibility of dropdown
    if (flightPersonAmountDropdown.classList.contains('show')) {
        showOverlay(); // Show overlay if dropdown is visible
        resetFlightCounterValues(); // Reset values to the last saved state
    } else {
        hideOverlay(); // Hide overlay if dropdown is not visible
    }
});

// Prevent clicks inside the person amount dropdown from hiding the overlay
flightPersonAmountDropdown.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent propagation of click events inside the dropdown
});

// Add event listener for buttons inside the person amount dropdown
flightPersonAmountDropdown.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        // Do not hide dropdown and overlay on button click
    });
});

// Add event listener to the submit button to save counter values and hide dropdown and overlay
flightPersonAmountSubmitButton.addEventListener('click', () => {
    saveFlightCounterValues(); // Save current counter values
    flightPersonAmountDropdown.classList.remove('show'); // Hide dropdown
    hideOverlay(); // Hide overlay
});




// Get all counter controls
let flightCounterControls = document.querySelectorAll('.flight_counter_controls');

// Function to update the count display and apply minimum constraints
function updateFlightCount(countDisplay, count, minCount) {
    countDisplay.textContent = count < minCount ? minCount : count; // Update count with minimum constraint
}

// Add event listeners to each counter controls
flightCounterControls.forEach((counter, index) => {
    let minusBtn = counter.querySelector('.minus');
    let plusBtn = counter.querySelector('.plus');
    let countDisplay = counter.querySelector('.flight_count');

    // Set the first value (number) based on minimum constraint
    let minCount = (index === 0) ? 1 : 0; // "بالغ" should have a minimum of 1

    // Event listener for minus button
    minusBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        let count = parseInt(countDisplay.textContent, 10);
        if (count > minCount) {
            count--; // Decrease count if greater than minimum
            updateFlightCount(countDisplay, count, minCount); // Update count display
        }
    });

    // Event listener for plus button
    plusBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        let count = parseInt(countDisplay.textContent, 10);
        count++; // Increase count
        updateFlightCount(countDisplay, count, minCount); // Update count display
    });

    // Prevent propagation of click events inside the counter div
    counter.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
    });
});

// Set the first counter values
resetFlightCounterValues(); // Prepare counters with last saved values



