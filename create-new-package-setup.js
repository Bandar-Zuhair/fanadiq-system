/* How To Manage This Website? */
/* There Are 3 Places You Must Pay Attention When Addng New Data in Any Array:
    1- The Hotel Location Data (Bali , Jakarta , Puncak and Etc..)
    2- The Hotel Area Data (Keramas , Ubud , Kuta and Etc..)
    3- The Hotel Data (Komaneka Keramas , Samsara Ubud , Tejaprana and Etc..)
    
    Also Pay Attention To The Data That Be Inside Each Object in Any Array (Must Be The Same Spelling)
*/











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
toggleDropdownContent('toggle_clint_elements', 'dropdown_clint_content');
toggleDropdownContent('toggle_hotel_elements', 'dropdown_hotel_content');
toggleDropdownContent('toggle_package_elements', 'dropdown_package_content');















/* Functions to run the company names search bar and drop down functionality */
// Get elements
let companyNameInput = document.getElementById('clint_company_name_input_id');
let companyNamesDiv = document.getElementById('company_names_dropdown');
let companyNameSearchBar = document.getElementById('company_name_search_bar');



// Function to show the dropdown and overlay
function showDropdown() {
    companyNamesDiv.classList.add('show');
    showOverlay();
}

// Function to hide the dropdown and overlay
function hideDropdown() {
    companyNamesDiv.classList.remove('show');
    hideOverlay();
}

// Event listener to toggle dropdown visibility on input click
companyNameInput.addEventListener('click', () => {
    showDropdown();
});

// Event listener to handle selection of company names
companyNamesDiv.querySelectorAll('h3').forEach(option => {
    option.addEventListener('click', () => {
        companyNameInput.value = option.textContent;
        hideDropdown();
    });
});

// Event listener to filter company names based on search bar input
companyNameSearchBar.addEventListener('input', () => {
    let filter = companyNameSearchBar.value.trim().toLowerCase();
    companyNamesDiv.querySelectorAll('h3').forEach(option => {
        let companyName = option.textContent.trim().toLowerCase();
        if (companyName.includes(filter)) {
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
    }

    // Check if any dropdown with the class name 'person_amount_dropdown' is visible and hide it
    let visibleDropdown_3 = document.getElementById('person_amount_dropdown');
    if (visibleDropdown_3) {
        visibleDropdown_3.classList.remove('show'); // Remove 'show' class to hide dropdown
    }

    // Hide the overlay if it exists
    if (overlayLayer) {
        overlayLayer.style.opacity = '0'; // Set opacity to 0 for smooth disappearance


        setTimeout(() => {
            document.body.removeChild(overlayLayer); // Remove overlay from DOM
            overlayLayer = null; // Reset overlay variable
        }, 200); // Assuming 200ms is the duration of your opacity transition
    }
}



// Check which input element should be clickable or unclickable based on the value of the 'hotel_location_input_id'
checkInputClickability();




















// Initialize Flatpickr date pickers for hotel and client inputs
initializeFlatpickr('#check_in_date_input_id', '#check_out_date_input_id');
initializeFlatpickr('#first_clint_check_in_date_input_id', '#last_clint_check_out_date_input_id');

// Function to initialize Flatpickr date pickers
function initializeFlatpickr(checkInId, checkOutId) {
    let checkInDateInput = document.querySelector(checkInId);
    let checkOutDateInput = document.querySelector(checkOutId);

    flatpickr(checkInDateInput, {
        dateFormat: 'Y-m-d',
        minDate: 'today',
        onChange: function (selectedDates) {
            updateMinDate(checkOutDateInput, selectedDates[0]);
        }
    });

    flatpickr(checkOutDateInput, {
        dateFormat: 'Y-m-d',
        minDate: 'today',
        onChange: function (selectedDates) {
            validateCheckOutDate(checkInDateInput, selectedDates[0]);
        }
    });
}

// Function to update minimum date for check-out based on selected check-in date
function updateMinDate(checkOutInput, minDate) {
    let nextDay = new Date(minDate);
    nextDay.setDate(nextDay.getDate() + 1);
    checkOutInput._flatpickr.set('minDate', nextDay);
}

// Function to validate that check-out date is after the check-in date
function validateCheckOutDate(checkInInput, checkOutDate) {
    let checkInDate = new Date(checkInInput.value);
    if (checkOutDate <= checkInDate) {
        alert('Check-out date must be after the check-in date.');
        checkOutInput._flatpickr.clear();
    }
}










// Function to toggle full-screen mode of textarea
function toggleFullscreen(textareaId) {
    let textarea = document.getElementById(textareaId);
    textarea.classList.toggle('fullscreen_mode_class');

    if (textarea.classList.contains('fullscreen_mode_class')) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        textarea.focus();
    } else {
        document.body.style.overflow = ''; // Enable scrolling
        textarea.blur();
    }
}











/* Function For Counting People Amount */
// Variables for person amount input and dropdown
let personAmountInput = document.getElementById('hotel_person_amount_input_id');
let personAmountDropdown = document.getElementById('person_amount_dropdown');
let filterPersonAmountSubmitButton = document.getElementById('filter_person_amount_submit_button');
let childAgeInputsContainer = document.getElementById('child_age_inputs_container');

// Variable to store the last saved counter values and child ages
let lastSavedCounters = {
    adult: 1,
    child: 0
};
let lastSavedChildAges = [];

// Function to add a new child age input
function addChildAgeInput(value = '', index) {
    let inputCount = childAgeInputsContainer.children.length + 1;
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'child_age_input';
    input.placeholder = `عمر الطفل ${index || inputCount}`;
    input.value = value;
    input.required = true;
    input.addEventListener('input', checkEmptyInputs); // Add event listener to check for empty inputs

    /* Append the child age input to the 'child_age_inputs_container' div */
    childAgeInputsContainer.appendChild(input);
    checkEmptyInputs(); // Check inputs after adding a new one
}

// Function to remove the last child age input
function removeChildAgeInput() {
    let inputs = childAgeInputsContainer.querySelectorAll('.child_age_input');
    if (inputs.length > 0) {
        childAgeInputsContainer.removeChild(inputs[inputs.length - 1]);
    }
    checkEmptyInputs(); // Check inputs after removing one
}

// Function to update the counter display
function updateCounterDisplay(counterDiv, value) {
    counterDiv.querySelector('.count').textContent = value; // Update counter display with value
}

// Function to save the current counter values inside the 'hotel_person_amount_input_id' input
function saveCounterValues() {
    let counters = document.querySelectorAll('.counter_div');
    lastSavedCounters.adult = parseInt(counters[0].querySelector('.count').textContent, 10); // Save adult count
    lastSavedCounters.child = parseInt(counters[1].querySelector('.count').textContent, 10); // Save child count

    // Save child ages
    lastSavedChildAges = [];
    document.querySelectorAll('.child_age_input').forEach((input, index) => {
        lastSavedChildAges[index] = input.value;
    });

    // Update the input field with the saved values
    if (lastSavedCounters.child === 0) {
        personAmountInput.value = `${lastSavedCounters.adult} بالغ`;
    } else {
        personAmountInput.value = `${lastSavedCounters.adult} بالغ + ${lastSavedCounters.child} طفل`;
    }
}

// Function to reset the counter values to the last saved values
function resetCounterValues() {
    let counters = document.querySelectorAll('.counter_div');
    updateCounterDisplay(counters[0], lastSavedCounters.adult); // Reset adult counter display
    updateCounterDisplay(counters[1], lastSavedCounters.child); // Reset child counter display

    // Reset child age inputs
    childAgeInputsContainer.innerHTML = ''; // Clear all current inputs
    for (let i = 0; i < lastSavedCounters.child; i++) {
        addChildAgeInput(lastSavedChildAges[i] || '', i + 1);
    }
}

// Function to check if any child age input is empty
function checkEmptyInputs() {
    let inputs = document.querySelectorAll('.child_age_input');
    let hasEmpty = Array.from(inputs).some(input => input.value.trim() === '');
    if (hasEmpty) {
        filterPersonAmountSubmitButton.classList.add('hidden'); // Hide the submit button if there are empty inputs
    } else {
        filterPersonAmountSubmitButton.classList.remove('hidden'); // Show the submit button if all inputs are filled
    }
}





// Toggle dropdown visibility on person amount input click
personAmountInput.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    personAmountDropdown.classList.toggle('show'); // Toggle visibility of dropdown
    if (personAmountDropdown.classList.contains('show')) {
        showOverlay(); // Show overlay if dropdown is visible
        resetCounterValues(); // Reset values to the last saved state
    } else {
        hideOverlay(); // Hide overlay if dropdown is not visible
    }
});

// Prevent clicks inside the person amount dropdown from hiding the overlay
personAmountDropdown.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent propagation of click events inside the dropdown
});

// Add event listener for buttons inside the person amount dropdown
personAmountDropdown.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        // Do not hide dropdown and overlay on button click
    });
});

// Add event listener to the submit button to save counter values and hide dropdown and overlay
filterPersonAmountSubmitButton.addEventListener('click', () => {
    saveCounterValues(); // Save current counter values
    personAmountDropdown.classList.remove('show'); // Hide dropdown
    hideOverlay(); // Hide overlay
});




// Get all counter controls
let counterControls = document.querySelectorAll('.counter_controls');

// Function to update the count display and apply minimum constraints
function updateCount(countDisplay, count, minCount) {
    countDisplay.textContent = count < minCount ? minCount : count; // Update count with minimum constraint
}

// Add event listeners to each counter controls
counterControls.forEach((counter, index) => {
    let minusBtn = counter.querySelector('.minus');
    let plusBtn = counter.querySelector('.plus');
    let countDisplay = counter.querySelector('.count');

    // Set the first value (number) based on minimum constraint
    let minCount = (index === 0) ? 1 : 0; // "بالغ" should have a minimum of 1

    // Event listener for minus button
    minusBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        let count = parseInt(countDisplay.textContent, 10);
        if (count > minCount) {
            count--; // Decrease count if greater than minimum
            updateCount(countDisplay, count, minCount); // Update count display
            if (index === 1) { // If it's the "طفل" counter
                removeChildAgeInput(); // Remove a child age input
            }
        }
    });

    // Event listener for plus button
    plusBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
        let count = parseInt(countDisplay.textContent, 10);
        count++; // Increase count
        updateCount(countDisplay, count, minCount); // Update count display
        if (index === 1) { // If it's the "طفل" counter
            addChildAgeInput('', count); // Add a child age input
        }
    });

    // Prevent propagation of click events inside the counter div
    counter.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent propagation of click events
    });
});

// Set the first counter values
resetCounterValues(); // Prepare counters with last saved values


















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
    textarea.style.width = '95vw';
    textarea.style.height = '95vh';
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





















// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsModuleScript = document.createElement('script');
ioniconsModuleScript.type = 'module';
ioniconsModuleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.body.appendChild(ioniconsModuleScript);

// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsNomoduleScript = document.createElement('script');
ioniconsNomoduleScript.setAttribute('nomodule', '');
ioniconsNomoduleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.body.appendChild(ioniconsNomoduleScript);
