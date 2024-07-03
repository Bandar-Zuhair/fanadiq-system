showPackageTypeSection = function (packageType) {

    if (packageType === 'hotel') {
        create_new_hotel_package_section.style.display = 'flex';
        create_new_flight_package_section.style.display = 'none';
        create_new_transportation_paln_section.style.display = 'none';

    } else if (packageType === 'flight') {
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'flex';
        create_new_transportation_paln_section.style.display = 'none';

    } else {
        create_new_hotel_package_section.style.display = 'none';
        create_new_flight_package_section.style.display = 'none';
        create_new_transportation_paln_section.style.display = 'flex';

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

// Prepare dropdown toggles for client, hotel, and package details
toggleDropdownContent('toggle_hotel_clint_elements', 'hotel_dropdown_clint_content');
toggleDropdownContent('toggle_hotel_elements', 'dropdown_hotel_content');
toggleDropdownContent('toggle_package_elements', 'dropdown_package_content');



// Prepare dropdown toggles for flight package details
toggleDropdownContent('toggle_clint_flight_elements', 'flight_dropdown_content');



// Prepare dropdown toggles for transportation plane details
toggleDropdownContent('toggle_clint_transportation_plan_details_elements', 'transportation_plan_details_dropdown_content');














/* Functions to run the company names search bar and drop down functionality */
// Get elements
let companyNameInput = document.getElementById('clint_company_name_input_id');
let companyNamesDiv = document.getElementById('company_names_dropdown');

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


// Event listener to expand dropdown on search bar click
/* companyNameSearchBar.addEventListener('click', () => {
    companyNamesDiv.style.height = '80vh'; // Set height to 90vh when search bar is clicked
    companyNamesDiv.style.transition = 'height 0.2s ease-in-out'; // Ensure height transition is smooth
}); */

// Event listener to handle selection of company names
companyNamesDiv.querySelectorAll('h3').forEach(option => {
    option.addEventListener('click', () => {
        companyNameInput.value = option.textContent;
        hideDropdown();
    });
});



// Function to handle package type checkbox click (only one checkbox is allowed)
function handleCheckboxClick(event) {
    let checkboxes = document.querySelectorAll('input[name="package_type"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox !== event.target) {
            checkbox.checked = false;
        }
    });
}

// Add event listeners to each checkbox
let checkboxes = document.querySelectorAll('input[name="package_type"]');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxClick);
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
        case "باندونج":
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
        console.log('Good'); // Log 'Good' to the console when input is clicked

        // Find the closest parent element with the class 'dropdown_div_class'
        let dropdownDiv = input.closest('.dropdown_div_class'); 

        // Set a smooth transition for the height property
        dropdownDiv.style.transition = 'height 0.2s ease-in-out'; 

        // Set the height of the dropdown div to 80vh when the search bar is clicked
        dropdownDiv.style.height = '80vh'; 
    });

    // Add an input event listener to the input element
    input.addEventListener('input', () => {
        // Get the trimmed and lowercased value of the input element
        let filter = input.value.trim().toLowerCase(); 

        // Find the closest parent element with the class 'dropdown_div_class'
        let dropdownDiv = input.closest('.dropdown_div_class'); 

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
    console.log('Correct')
});

document.getElementById('hotel_location_search_bar_input_id').addEventListener('input', () => {
    filterOptions('hotel_location_search_bar_input_id', 'hotel_location_dropdown');
    console.log('Correct')
});

document.getElementById('hotel_bali_area_search_bar_input_id').addEventListener('input', () => {
    filterOptions('hotel_bali_area_search_bar_input_id', 'hotel_bali_area_dropdown');
});

document.getElementById('keramas_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('keramas_hotel_search_bar_input_id', 'keramas_hotel_dropdown');
});

document.getElementById('ubud_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('ubud_hotel_search_bar_input_id', 'ubud_hotel_dropdown');
});

// Event listeners for search bar inputs
document.getElementById('nusa_dua_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('nusa_dua_hotel_search_bar_input_id', 'nusa_dua_hotel_dropdown');
});

document.getElementById('seminyak_hotel_search_bar_input_id').addEventListener('input', () => {
    filterOptions('seminyak_hotel_search_bar_input_id', 'seminyak_hotel_dropdown');
});

// Event listeners for search bar inputs
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














// Function to show the overlay
function showOverlay(clickedInputDropdownIdName) {

    let clickedInputDropdown = document.getElementById(clickedInputDropdownIdName);


    clickedInputDropdown.classList.add('show');
    clickedInputDropdown.style.transition = 'transform 0.2s ease-in-out'; // Ensure transform transition is smooth


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

    // Check if any dropdown with the class name 'company_names_dropdown_class' is visible and hide it
    let visibleDropdown_1 = document.querySelector('.dropdown_div_class.show');
    if (visibleDropdown_1) {
        visibleDropdown_1.classList.remove('show'); // Remove 'show' class to hide dropdown
        companyNamesDiv.style.height = '50vh'; // Set height to 90vh when search bar is clicked
    }


    // Reset all dropdown_div_class elements back to their default styling
    let dropdownDivElements = document.querySelectorAll('.dropdown_div_class');
    dropdownDivElements.forEach(dropdown => {
        dropdown.style.height = ''; // Reset height to default
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










































/* Function to pick the dates */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Pikaday for the first day input
    var firstDayPicker = new Pikaday({
        field: document.getElementById('transportation_plan_first_day_date_input_id'),
        format: 'YYYY-MM-DD', // Adjust the format as needed
        onSelect: function(date) {
            // Do something when the date is selected
            console.log('Selected date: ' + date.toISOString().substring(0, 10));
        }
    });

    // Initialize Pikaday for the last day input
    var lastDayPicker = new Pikaday({
        field: document.getElementById('transportation_plan_last_day_date_input_id'),
        format: 'YYYY-MM-DD', // Adjust the format as needed
        onSelect: function(date) {
            // Do something when the date is selected
            console.log('Selected date: ' + date.toISOString().substring(0, 10));
        }
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
























































