let existingDataStatus = 'newData'; // Example status for updating existing data

const scriptURL = 'https://script.google.com/macros/s/AKfycbwqp6rBvBQOUNttF3vz5Z9mW3x3VOYVv_k7p-lIlsg5p0M_TStsic5jyuxgElqJ2Ye4jA/exec';
const form = document.forms['save-package'];

form.addEventListener('submit', e => {

    e.preventDefault();

    if (document.getElementById('downloaded_pdf_clint_data_page').style.display !== 'none') {

        // Play a sound effect
        new Audio('success.mp3').play();



        document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').value = 'جاري الحفظ..';
        document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.background = 'rgb(85, 127, 137)';
        document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.color = 'white';

        let googleSheetNewSaveDataNameInput = document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText;

        if (document.getElementById('downloaded_pdf_clint_data_page').style === 'none') {
            alert('تأكد من إدخال معلومات العميل');
            return;
        }

        let newObject = {
            name: googleSheetNewSaveDataNameInput,
            content: {},
            status: existingDataStatus
        };


        let divIds = [
            'downloaded_pdf_clint_data_page',
            'downloaded_pdf_package_including_data_page',
            'downloaded_pdf_flight_data_page',
            'downloaded_pdf_hotel_data_page',
            'downloaded_pdf_clint_movements_data_page',
            'downloaded_pdf_total_price_data_page'
        ];

        divIds.forEach(divId => {
            let element = document.getElementById(divId);
            if (element && element.style.display !== 'none' && element.offsetWidth > 0 && element.offsetHeight > 0) {
                newObject.content[divId] = cleanHTML(element.innerHTML);
            }
        });

        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(newObject),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors'
        })
            .then(() => {
                document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.background = 'rgb(0, 46, 57)';
                document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').value = 'تم الحفظ بنجاح';


                setTimeout(() => {
                    document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.background = 'white';
                    document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.color = 'black';
                    document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').value = 'حفظ جديد';
                }, 5000);


                // Only call submitForm if 'existingDataStatus' is equal to "newData"
                if (existingDataStatus === "newData") {
                    submitForm();
                    console.log('New Save');

                } else {
                    console.log('Exiting Save');
                }


                updateDataBaseSavedDataNames();



                /* Change the value of the 'existingDataStatus' for making sure you are in editing old data mood */
                existingDataStatus = 'existingData';
                document.getElementById('website_users_name_input_id').disabled = true;
            });

    } else {

        // Play a sound effect
        new Audio('error.mp3').play();


        document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.background = 'red';
        document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.color = 'white';

        setTimeout(() => {
            document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.background = 'white';
            document.getElementById('sumbit_save_new_data_to_sheet_input_button_id').style.color = 'black';
        }, 500);
    }

});

// Function to clean HTML
function cleanHTML(html) {
    return html.replace(/\s+/g, ' ').trim();
}

// Add click event listener to trigger form submission
document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').addEventListener('click', function () {
    form.dispatchEvent(new Event('submit'));
});


// Add click event listener to trigger form submission
document.getElementById('check_pdf_name_button').addEventListener('click', function () {
    form.dispatchEvent(new Event('submit'));
});














const sheetURL = 'https://script.google.com/macros/s/AKfycbyYKdJJLk39czGy6GPO-DDvmWXuyGOPO9cCNOK1ST_dhi--GJSaXW5qiTSXBACtOhWRRA/exec'; // Replace with your web app URL
let sheetData = [];

// Fetch data from Google Sheets via web app and store it locally
function updateDataBaseSavedDataNames() {
    let allGoogleSheetStoredDataNamesForImportingDataDiv = document.getElementById('all_google_sheet_stored_data_names_for_importing_data_div');

    // Clear existing content
    allGoogleSheetStoredDataNamesForImportingDataDiv.innerHTML = '';

    // Check if there is any data in localStorage
    let lastDownloadData = localStorage.getItem('lastDownloadWebsiteData');
    if (lastDownloadData) {
        // Create an <h3> element with "Last Download" text
        let h3Element = document.createElement('h3');
        h3Element.innerText = 'Last Download';

        h3Element.onclick = function () {
            pickThisGoogleSheetDataName(this);
        };

        allGoogleSheetStoredDataNamesForImportingDataDiv.appendChild(h3Element);
    }

    fetch(sheetURL)
        .then(response => response.json())
        .then(data => {
            // Store the fetched data for later use
            sheetData = data.values;

            // Create new <h3> elements based on the sheet data
            sheetData.forEach(row => {
                let h3Element = document.createElement('h3');
                h3Element.innerText = row[0]; // Assuming the "name" is in the first cell

                // Check if the innerText is "Name" and hide the element if it is
                if (h3Element.innerText === "Name") {
                    h3Element.style.display = 'none';
                } else {
                    h3Element.onclick = function () {
                        pickThisGoogleSheetDataName(this);
                    };
                }

                allGoogleSheetStoredDataNamesForImportingDataDiv.appendChild(h3Element);
            });
        })
        .catch(error => {
            console.error('Error fetching data from Google Sheets:', error);
        });
}


// Function to find the selected name and call importContentForSelectedName
function findSelectedNameAndImportContent() {
    let selectedName = null;
    let allDataNames = document.querySelectorAll('#all_google_sheet_stored_data_names_for_importing_data_div h3');

    allDataNames.forEach(function (dataName) {
        if (dataName.style.backgroundColor === 'rgb(0, 155, 0)') {
            selectedName = dataName.innerText;
        }
    });

    if (selectedName) {
        if (selectedName === 'Last Download') {
            // Load data from localStorage
            importContentFromLocalStorage();
        } else if (selectedName !== 'Name') {
            // Play a sound effect
            new Audio('success.mp3').play();

            // Run a function to import the data based on the name of the clicked h3
            importContentForSelectedName(selectedName);
        }
    } else {
        // Play a sound effect
        new Audio('error.mp3').play();

        // Change the submit icon background color
        import_google_sheet_data_p_id.style.backgroundColor = 'red';

        // Set the background color of the submit icon back to default color
        setTimeout(() => {
            import_google_sheet_data_p_id.style.backgroundColor = 'rgb(255, 174, 0)';
        }, 500);
    }
}



// Function to import content from localStorage
function importContentFromLocalStorage() {
    let lastDownloadData = localStorage.getItem('lastDownloadWebsiteData');

    if (lastDownloadData) {
        let parsedData = JSON.parse(lastDownloadData);
        let contentColumns = parsedData.e;

        try {
            let parser = new DOMParser();

            for (let divId in contentColumns) {
                let compressedHtmlString = contentColumns[divId];

                if (compressedHtmlString) {
                    // Decompress and format the raw HTML
                    let rawHtmlString = LZString.decompressFromUTF16(compressedHtmlString);
                    let formattedHtmlString = formatHtmlForWebsite(rawHtmlString);

                    let doc = parser.parseFromString(formattedHtmlString, 'text/html');
                    let newContent = doc.body.innerHTML;

                    let htmlSectionPdfPageDiv = document.getElementById(divId);
                    if (htmlSectionPdfPageDiv) {
                        htmlSectionPdfPageDiv.style.display = 'block';
                        htmlSectionPdfPageDiv.innerHTML = '';  // Clear current content
                        htmlSectionPdfPageDiv.innerHTML = newContent;  // Set new content
                        reActiveDragAndDropFunctionality(htmlSectionPdfPageDiv.id);
                    }
                }
            }

            hideOverlay();


            /* Change the value of the 'existingDataStatus' for making sure you are in editing old data mood */
            existingDataStatus = 'existingData';
            document.getElementById('website_users_name_input_id').disabled = true;

        } catch (error) {
            console.error('Error importing data from localStorage:', error);
        }
    } else {
        // Play a sound effect if no data is found
        new Audio('error.mp3').play();
    }
}




// Function to import the content for the selected name
function importContentForSelectedName(name) {
    // Assuming the first column is the name and subsequent columns are the contents
    let selectedRow = sheetData.find(row => row[0] === name);

    if (selectedRow) {
        let contentColumns = {
            downloaded_pdf_clint_data_page: selectedRow[1],
            downloaded_pdf_package_including_data_page: selectedRow[2],
            downloaded_pdf_flight_data_page: selectedRow[3],
            downloaded_pdf_hotel_data_page: selectedRow[4],
            downloaded_pdf_clint_movements_data_page: selectedRow[5],
            downloaded_pdf_total_price_data_page: selectedRow[6]
        };

        try {
            let parser = new DOMParser();

            for (let divId in contentColumns) {
                let rawHtmlString = contentColumns[divId];

                if (rawHtmlString) {
                    // Process the raw HTML before placing it in the website
                    let formattedHtmlString = formatHtmlForWebsite(rawHtmlString);

                    let doc = parser.parseFromString(formattedHtmlString, 'text/html');
                    let newContent = doc.body.innerHTML;

                    let htmlSectionPdfPageDiv = document.getElementById(divId);
                    if (htmlSectionPdfPageDiv) {
                        htmlSectionPdfPageDiv.style.display = 'block';
                        htmlSectionPdfPageDiv.innerHTML = '';  // Clear current content
                        htmlSectionPdfPageDiv.innerHTML = newContent;  // Set new content
                        reActiveDragAndDropFunctionality(htmlSectionPdfPageDiv.id);
                    }
                }
            }


            hideOverlay()

            existingDataStatus = 'existingData';
            document.getElementById('website_users_name_input_id').disabled = true;


        } catch (error) {
        }
    }



}

// Function to format the raw HTML content for placing in the website
function formatHtmlForWebsite(rawHtml) {
    // Example: Remove unnecessary spaces, add required attributes, etc.
    let formattedHtml = rawHtml.replace(/\s+/g, ' ').trim();

    // Add more formatting rules as needed
    // For example, you could use a library like DOMPurify to sanitize the HTML

    return formattedHtml;
}




// Function to pick google sheet data names
function pickThisGoogleSheetDataName(clickedGoogleSheetDataName) {
    // Get all <h3> elements inside the 'all_google_sheet_stored_data_names_for_importing_data_div' div
    let allGoogleSheetStoredDataNamesForImportingDataDiv = document.querySelectorAll('#all_google_sheet_stored_data_names_for_importing_data_div h3');

    // Loop through each <h3> element to reset their styles
    allGoogleSheetStoredDataNamesForImportingDataDiv.forEach(function (dataName) {
        dataName.style.backgroundColor = 'white';
        dataName.style.color = 'black';
    });

    // Set the background color and text color of the clicked <h3> element
    clickedGoogleSheetDataName.style.backgroundColor = 'rgb(0, 155, 0)';
    clickedGoogleSheetDataName.style.color = 'white';
}


/* Refresh saved packages data names */
document.getElementById('refresh_import_saved_packages_data_input_value_icon').onclick = function () {
    let input = document.getElementById('import_google_sheet_data_names_search_bar_input_id');
    let importGoogleSheetDataNamesSearchBarValue = input.value;

    // Clear the input value
    input.value = '';


    // Delay setting the value back to simulate a reset and apply the filter
    setTimeout(() => {
        input.value = importGoogleSheetDataNamesSearchBarValue;
        filterDropdown(input); // Apply the filter after resetting the value
    }, 500);
};







































// Variable to store the most top empty cell row number
let mostTopEmptyCellRowNumberValue;

// Function to handle form submission and insert data into the Google Sheets
async function submitForm() {
    // Get the form element
    const form = document.getElementById('save-package-unique-code');
    // Get the input field element
    const inputField = document.getElementById('website_users_name_input_id');

    // Get the package name value from the input field
    const packageName = inputField.value;

    // Check if the package name is not empty
    if (packageName) {
        // Prepare the data to be sent in the POST request
        const data = {
            name: packageName,
            action: 'insert'
        };

        try {
            // Send the POST request to the Google Apps Script URL
            await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'no-cors'
            });
        } catch (error) {
        }
    }
}

// Function to fetch data from the Google Sheets
async function fetchData() {
    try {
        // Send a GET request to the Google Apps Script URL
        const response = await fetch("https://script.google.com/macros/s/AKfycby1RWmnezTeabEZ1VkczgLeIDilocuU4ezEe7iFbura4eE7wK2gWaOyS-MLiUtoVRgi/exec");
        // Parse the response as JSON
        const data = await response.json();
        // Process the fetched data
        processSheetData(data);
    } catch (error) {
    }
}

// Function to process the fetched data and find the most top empty cell row number
function processSheetData(data) {
    // Get the input field element
    const inputField = document.getElementById('website_users_name_input_id');
    // Get the package name value from the input field
    const packageName = inputField.value;

    // Check if the package name is empty
    if (!packageName) {
        alert('Please enter a package name.');
        return;
    }

    // Get the column index based on the package name
    const columnIndex = getColumnIndex(packageName);
    // Check if the column index is valid
    if (columnIndex === -1) {
        alert('Invalid package name.');
        return;
    }

    // Get the sheet data values
    const sheetData = data.values;
    // Initialize the row index to -1 indicating no empty row found
    let rowIndex = -1;

    // Loop through the sheet data starting from row 2 (index 1)
    for (let i = 1; i < sheetData.length; i++) {
        // Check if the cell in the current column is empty
        if (sheetData[i][columnIndex] === "") {
            // Set the row index to the current row index (1-based)
            rowIndex = i;
            break;
        }
    }

    // If no empty cell was found, set the row index to the last row
    if (rowIndex === -1) {
        rowIndex = sheetData.length;
    }

    // Set the most top empty cell row number value
    mostTopEmptyCellRowNumberValue = rowIndex;


    // Make the submit client data div visible
    // Make the icon unclickable and visually disabled
    let submitIcon = document.getElementById('clint_inputs_submit_icon');
    submitIcon.style.opacity = '1';
    submitIcon.style.pointerEvents = 'auto';
    submitIcon.disabled = false;
}

// Function to get the column index based on the package name
function getColumnIndex(packageName) {
    // Return the column index based on the package name
    switch (packageName) {
        case 'بكج مستر سامي':
            return 0;
        case 'بكج عبد الله':
            return 1;
        case 'بكج معتز':
            return 2;
        case 'بكج وائل':
            return 3;
        case 'بكج عبد الرحمن':
            return 4;
        case 'بكج علي':
            return 5;
        case 'بكج مستر ابو سما':
            return 6;
        default:
            // Return -1 for invalid package names
            return -1;
    }
}
































































/* Function to re-active the drag and drop functionality (copied code for the main inserted daa js code) */
reActiveDragAndDropFunctionality = function (visiableDivIdName) {

    if (visiableDivIdName === 'downloaded_pdf_clint_data_page') {


        /* First Re-Enter the inputs values if they exist in the stored google sheet p elements */
        document.getElementById('package_clint_name_input_id').value = document.getElementById('store_google_sheet_clint_name_value').innerText;
        document.getElementById('adult_package_person_amount_input_id').value = document.getElementById('store_google_sheet_package_adult_amount_value').innerText;
        document.getElementById('kids_package_person_amount_input_id').value = document.getElementById('store_google_sheet_package_kids_amount_value').innerText;
        document.getElementById('whole_package_start_date_input_id').value = document.getElementById('store_google_sheet_whole_package_first_date_value').innerText;
        document.getElementById('whole_package_end_date_input_id').value = document.getElementById('store_google_sheet_whole_package_last_date_value').innerText;
        document.getElementById('package_total_nights_input_id').value = document.getElementById('store_google_sheet_whole_package_total_nights_value').innerText;
        storePackageTotalNights = document.getElementById('store_google_sheet_whole_package_total_nights_value').innerText;
        document.getElementById('clint_company_name_input_id').value = document.getElementById('store_google_sheet_clint_company_name_value').innerText;




        /* Check the package type checkbox based on the innerText of the 'store_google_sheet_clint_package_type_checkbox_value' */
        if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'بكج شهل عسل') {
            document.getElementById('honeymoon_checkbox').checked = true;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'بكج شباب') {
            document.getElementById('guys_checkbox').checked = true;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'بكج عائلة') {
            document.getElementById('family_checkbox').checked = true;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'بكج شخصين') {
            document.getElementById('two_people_checkbox').checked = true;

        }



        /* Function to reActive the company logo delete functionality */
        if (document.getElementById('inserted_company_name_logo_id')) {

            document.getElementById('inserted_company_name_logo_id').onclick = function (event) {
                event.preventDefault(); // Prevent the default behavior of the click event
                event.stopPropagation(); // Stop the event from propagating further

                // Create overlay layer
                let overlayLayer = document.createElement('div');
                overlayLayer.className = 'black_overlay';
                overlayLayer.id = 'black_overlay_id';
                document.body.appendChild(overlayLayer);

                // Show overlay layer with smooth opacity transition
                setTimeout(() => {
                    overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
                }, 100);

                // Slide in delete box options div
                let deleteHotelCardDiv = document.getElementById('ensure_delete_company_logo_div');

                // Smoothly slide to the middle of the screen
                setTimeout(() => {
                    deleteHotelCardDiv.style.transform = 'translate(-50%, -50%)'; // Slide to the center of the screen
                }, 50); // Adjust timing as needed

                // Event listener to close overlay and delete box div on click outside
                overlayLayer.onclick = () => {
                    // Hide delete box options div
                    deleteHotelCardDiv.style.transform = 'translate(-50%, -100vh)';

                    // Hide overlay layer with opacity transition
                    overlayLayer.style.opacity = '0';

                    // Remove overlay and delete box div from DOM after transition
                    setTimeout(() => {
                        document.body.removeChild(overlayLayer);
                    }, 300); // Match transition duration in CSS
                };
            };
        }


        /* Function to delete company logo */
        deleteClickedCompanyLogo = function () {
            document.getElementById('inserted_company_name_image_position_div').innerHTML = '';

            // Slide in delete box options div
            let deleteHotelCardDiv = document.getElementById('ensure_delete_company_logo_div');

            // Event listener to close overlay and delete box div on click outside
            // Hide delete box div
            deleteHotelCardDiv.style.transform = 'translate(-50%, -100vh)';

            // Hide overlay layer with opacity transition
            let overlayLayer = document.getElementById('black_overlay_id')

            overlayLayer.style.opacity = '0';

            // Remove overlay and delete box div from DOM after transition
            setTimeout(() => {
                document.body.removeChild(overlayLayer);
            }, 300); // Match transition duration in CSS
        }



        /* Function to delete the clint package data row */
        deleteClintPackageDataRow = function () {

            let deleteclintPackageDataDiv = document.getElementById('ensure_delete_clint_package__including_and_not_icluding_data_div');

            /* Function to run delete the clicked clint row data */
            runDeleteClintPackageDataRow = function () {

                /* Hide the 'clint_data_row_main_div_id' if there is any data is inserted */
                document.getElementById('downloaded_pdf_clint_data_page').style.display = 'none';

                deleteclintPackageDataDiv.style.transform = 'translate(-50%, -100vh)';
                overlayLayer.style.opacity = '0';
                setTimeout(() => {
                    // Only remove the overlay if it is still a child of the body
                    if (document.body.contains(overlayLayer)) {
                        document.body.removeChild(overlayLayer);
                    }
                }, 300);
            }

            // Check if the overlay already exists
            let overlayLayer = document.querySelector('.black_overlay');
            if (!overlayLayer) {
                overlayLayer = document.createElement('div');
                overlayLayer.classList.add('black_overlay');
                document.body.appendChild(overlayLayer);

                setTimeout(() => {
                    overlayLayer.style.opacity = '1';
                    deleteclintPackageDataDiv.style.transform = 'translate(-50%, -50%)';
                }, 50);

                // Handle both click and touch events on overlay for consistency
                let handleOverlayClick = () => {
                    deleteclintPackageDataDiv.style.transform = 'translate(-50%, -100vh)';
                    overlayLayer.style.opacity = '0';
                    setTimeout(() => {
                        // Only remove the overlay if it is still a child of the body
                        if (document.body.contains(overlayLayer)) {
                            document.body.removeChild(overlayLayer);
                        }
                    }, 300);
                };

                overlayLayer.addEventListener('click', handleOverlayClick);
                overlayLayer.addEventListener('touchstart', handleOverlayClick); // Add touch event handling

                overlayLayer.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
        }


    } else if (visiableDivIdName === 'downloaded_pdf_flight_data_page') {


        // Get all elements with the class name 'flight_row_class'
        let flightRowTableDivs = document.querySelectorAll('.flight_row_class');

        // Loop through each 'flight_row_class' element
        flightRowTableDivs.forEach(flightRowTableDiv => {
            // Get the dynamically created 'flightRowAirLineController' element
            let flightRowFlightArrivalTimeControllers = flightRowTableDiv.querySelectorAll('.flight_row_flight_arrival_time_controller');


            // Function to handle touch events and distinguish between tap and scroll for flight row
            function handleFlightTouchEvent(element) {
                let touchStartX, touchStartY, touchStartTime;

                // Record the starting touch position and time
                element.addEventListener('touchstart', (event) => {
                    let touch = event.touches[0];
                    touchStartX = touch.clientX;
                    touchStartY = touch.clientY;
                    touchStartTime = new Date().getTime();
                });

                // Compare the ending touch position and time to determine if it was a tap
                element.addEventListener('touchend', (event) => {
                    let touch = event.changedTouches[0];
                    let touchEndX = touch.clientX;
                    let touchEndY = touch.clientY;
                    let touchEndTime = new Date().getTime();

                    let deltaX = touchEndX - touchStartX;
                    let deltaY = touchEndY - touchStartY;
                    let deltaTime = touchEndTime - touchStartTime;

                    // Check if the touch event qualifies as a tap
                    let isTap = Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 500;

                    // If it's a tap, run the click function
                    if (isTap) {
                        flightRowAirLineControllerFunction(event);
                    }
                });
            }

            // Function to handle mouse events and distinguish between click and drag for flight row
            function handleFlightMouseEvent(element) {
                let mouseStartX, mouseStartY, mouseStartTime, isDragging = false;

                // Record the starting mouse position and time
                element.addEventListener('mousedown', (event) => {
                    mouseStartX = event.clientX;
                    mouseStartY = event.clientY;
                    mouseStartTime = new Date().getTime();
                    isDragging = false;
                });

                // Mark as dragging if mouse moves significantly
                element.addEventListener('mousemove', (event) => {
                    let deltaX = event.clientX - mouseStartX;
                    let deltaY = event.clientY - mouseStartY;
                    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
                        isDragging = true;
                    }
                });

                // Compare the ending mouse position and time to determine if it was a click
                element.addEventListener('mouseup', (event) => {
                    let mouseEndX = event.clientX;
                    let mouseEndY = event.clientY;
                    let mouseEndTime = new Date().getTime();

                    let deltaX = mouseEndX - mouseStartX;
                    let deltaY = mouseEndY - mouseStartY;
                    let deltaTime = mouseEndTime - mouseStartTime;

                    // Check if the mouse event qualifies as a click
                    let isClick = !isDragging && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 500;

                    // If it's a click, run the click function
                    if (isClick) {
                        flightRowAirLineControllerFunction(event);
                    }
                });
            }

            // Attach click and touch event listeners to each element
            flightRowFlightArrivalTimeControllers.forEach(element => {
                handleFlightMouseEvent(element); // Handle mouse events with click detection
                handleFlightTouchEvent(element); // Handle touch events with tap detection
            });












            // Define a global variable to store the reference
            let currentFlightDataDivId;

            // Function to handle delete clicked hotel data
            deleteClickedFlightData = function (clickedFlightDataDivId) {

                let overlayLayer = document.querySelector('.black_overlay');
                let clickedFlightDataElement = document.getElementById(clickedFlightDataDivId);

                if (clickedFlightDataElement) {
                    clickedFlightDataElement.remove();
                }

                // Hide edit/delete options div
                let deleteFlightRowDiv = document.getElementById('ensure_delete_or_edit_flight_data_div');
                deleteFlightRowDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS

                // Check if there are any remaining inserted flight data div (Searching by the second image class name)
                let remainingFlightDataDivs = document.querySelectorAll('.inserted_flight_data_row');
                if (remainingFlightDataDivs.length === 0) {
                    // Hide section with id 'downloaded_pdf_flight_data_page'
                    document.getElementById('downloaded_pdf_flight_data_page').style.display = 'none';

                }
            }







            /* Function to edit the clicked flight row data */
            editClickedFlightData = function (clickedFlightDataDivIdName) {

                /* Make sure the correct section is the one that is visiable */
                create_new_clint_data_section.style.display = 'none';
                create_new_hotel_package_section.style.display = 'none';
                create_new_flight_package_section.style.display = 'flex';
                create_new_package_including_and_not_including_data_section.style.display = 'none';
                create_new_clint_movements_plan_section.style.display = 'none';


                document.getElementById('clint_flight_inputs_submit_icon').style.display = 'none';
                document.getElementById('confirm_new_flight_data_row_icon').style.display = 'block';
                document.getElementById('cancel_new_flight_data_row_icon').style.display = 'block';


                document.getElementById('flight_content_section_title_text_id').innerText = 'تعديل تفاصيل الطيران';
                document.getElementById('flight_content_section_title_text_id').style.background = 'rgb(85, 127, 137)';


                document.getElementById('flight_data_dropdown_content').scrollIntoView({
                    block: 'center',
                    inline: 'center',
                    behavior: 'smooth',
                });



                // Hide delete button div
                let overlayLayer = document.querySelector('.black_overlay');
                let deleteHotelRowDiv = document.getElementById('ensure_delete_or_edit_flight_data_div');
                deleteHotelRowDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS



                /* Show all inputs for editing the flight data */
                document.getElementById('all_editing_flight_row_data_inputs_div').style.display = 'flex';



                // Get the clicked hotel data row
                let clickedFlightDataDiv = document.getElementById(clickedFlightDataDivIdName);
                let insertedFlightDataDivUniqueId = clickedFlightDataDivIdName.split('_').pop(); // Extract the unique ID from the clicked row ID




                // Extract data using IDs
                let flightAirLineInput = clickedFlightDataDiv.querySelector(`p[id^='flight_air_line_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightAdultPersonAmountInput = clickedFlightDataDiv.querySelector(`p[id^='flight_adult_person_amount_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightInfantPersonAmountInput = clickedFlightDataDiv.querySelector(`p[id^='flight_infant_person_amount_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightFromCityInput = clickedFlightDataDiv.querySelector(`h2[id^='flight_from_city_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightToCityInput = clickedFlightDataDiv.querySelector(`h3[id^='flight_to_city_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightDateInput = clickedFlightDataDiv.querySelector(`h1[id^='flight_date_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightFlyAwayTimeInput = clickedFlightDataDiv.querySelector(`p[id^='flight_fly_away_time_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightArrivalTimeInput = clickedFlightDataDiv.querySelector(`p[id^='flight_arrival_time_${insertedFlightDataDivUniqueId}']`)?.innerText || '';

                // Assign values to inputs
                document.getElementById('flight_air_line_input_id').value = flightAirLineInput;
                document.getElementById('flight_adult_person_amount_input_id').value = flightAdultPersonAmountInput;
                document.getElementById('flight_infant_person_amount_input_id').value = flightInfantPersonAmountInput;
                document.getElementById('flight_from_city_input_id').value = flightFromCityInput;
                document.getElementById('flight_to_city_input_id').value = flightToCityInput;
                document.getElementById('flight_date_input_id').value = flightDateInput;
                document.getElementById('flight_fly_away_time_input_id').value = flightFlyAwayTimeInput;
                document.getElementById('flight_arrival_time_input_id').value = flightArrivalTimeInput;




                /* Function to cancel the flight row data editing process */
                cancelNewFlightDataRow = function () {
                    // Get references to all input elements and reset their values
                    document.getElementById('flight_air_line_input_id').value = '';
                    document.getElementById('flight_from_city_input_id').value = '';
                    document.getElementById('flight_to_city_input_id').value = '';
                    document.getElementById('flight_date_input_id').value = '';
                    document.getElementById('flight_fly_away_time_input_id').value = '';
                    document.getElementById('flight_arrival_time_input_id').value = '';


                    /* Hide and show different icons */
                    document.getElementById('clint_flight_inputs_submit_icon').style.display = 'block';
                    document.getElementById('confirm_new_flight_data_row_icon').style.display = 'none';
                    document.getElementById('cancel_new_flight_data_row_icon').style.display = 'none';


                    /* Reset the innerText and styling to defualt */
                    document.getElementById('flight_content_section_title_text_id').innerText = 'تفاصيل الطيران';
                    document.getElementById('flight_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';


                    /* Hide all inputs for editing the flight data */
                    document.getElementById('all_editing_flight_row_data_inputs_div').style.display = 'none';
                }




                /* Function to confirm the new flight row data */
                confirmNewFlightDataRow = function () {
                    // Get the clicked hotel data row
                    let clickedFlightDataDiv = document.getElementById(currentFlightDataDivId);

                    // Clear the old data
                    clickedFlightDataDiv.innerHTML = '';


                    // Extract the new data from the input fields
                    let flightAirLineInput = document.getElementById('flight_air_line_input_id').value;
                    let flightAdultPersonAmountInput = document.getElementById('flight_adult_person_amount_input_id').value;
                    let flightInfantPersonAmountInput = document.getElementById('flight_infant_person_amount_input_id').value;
                    let flightFromCityInput = document.getElementById('flight_from_city_input_id').value;
                    let flightToCityInput = document.getElementById('flight_to_city_input_id').value;
                    let flightDateInput = document.getElementById('flight_date_input_id').value;
                    let flightFlyAwayTimeInput = document.getElementById('flight_fly_away_time_input_id').value;
                    let flightArrivalTimeInput = document.getElementById('flight_arrival_time_input_id').value;


                    // Create the HTML content for a new hotel row
                    let flightRowTableDivContent = `
                        <div><p class="flight_row_flight_arrival_time_controller inserted_flight_data_row" style="cursor: pointer;" id='flight_air_line_${insertedFlightDataDivUniqueId}'>${flightAirLineInput}</p></div>
                        <div><p id='flight_adult_person_amount_${insertedFlightDataDivUniqueId}'>${flightAdultPersonAmountInput}</p>\n<p id='flight_infant_person_amount_${insertedFlightDataDivUniqueId}'>${flightInfantPersonAmountInput}</p></div>
                        <div><p>20 كيلو للشخص</p></div>
                        <div><p id='flight_from_city_${insertedFlightDataDivUniqueId}'>${flightFromCityInput}</p></div>
                        <div><p id='flight_to_city_${insertedFlightDataDivUniqueId}'>${flightToCityInput}</p></div>
                        <div><h1 id='flight_date_${insertedFlightDataDivUniqueId}'>${flightDateInput}</h1></div>
                        <div><p id='flight_fly_away_time_${insertedFlightDataDivUniqueId}'>${flightFlyAwayTimeInput}</p></div>
                        <div><p id='flight_arrival_time_${insertedFlightDataDivUniqueId}'>${flightArrivalTimeInput}</p></div>
                    `;


                    // Insert the HTML content into the newly created div
                    clickedFlightDataDiv.innerHTML = flightRowTableDivContent;


                    // Reattach event listeners to the image controllers
                    let hotelRowImageControllers = clickedFlightDataDiv.querySelectorAll('.flight_row_flight_arrival_time_controller');
                    hotelRowImageControllers.forEach(element => {
                        handleFlightMouseEvent(element); // Handle mouse events with click detection
                        handleFlightTouchEvent(element); // Handle touch events with tap detection
                    });


                    // Clear the input after confirm the new flight data
                    cancelNewFlightDataRow();
                }
            }







            // Function to handle flight row div click or touch
            flightRowAirLineControllerFunction = function (event) {
                let deleteFlightRowDiv = document.getElementById('ensure_delete_or_edit_flight_data_div');
                let clickedFlightDataDiv = event.target.closest('.flight_row_class');

                if (clickedFlightDataDiv) {
                    currentFlightDataDivId = clickedFlightDataDiv.id;


                    // Check if the overlay already exists
                    let overlayLayer = document.querySelector('.black_overlay');
                    if (!overlayLayer) {
                        overlayLayer = document.createElement('div');
                        overlayLayer.classList.add('black_overlay');
                        document.body.appendChild(overlayLayer);

                        setTimeout(() => {
                            overlayLayer.style.opacity = '1';
                            deleteFlightRowDiv.style.transform = 'translate(-50%, -50%)';
                        }, 50);

                        // Handle both click and touch events on overlay for consistency
                        let handleOverlayClick = () => {
                            deleteFlightRowDiv.style.transform = 'translate(-50%, -100vh)';
                            overlayLayer.style.opacity = '0';
                            setTimeout(() => {
                                // Only remove the overlay if it is still a child of the body
                                if (document.body.contains(overlayLayer)) {
                                    document.body.removeChild(overlayLayer);
                                }
                            }, 300);
                        };

                        overlayLayer.addEventListener('click', handleOverlayClick);
                        overlayLayer.addEventListener('touchstart', handleOverlayClick); // Add touch event handling

                        overlayLayer.addEventListener('click', (event) => {
                            event.stopPropagation();
                        });
                    }


                    /* Function to run delete clicked flight row data */
                    runDeleteClickedFlightDataFunction = function () {
                        deleteClickedFlightData(currentFlightDataDivId);
                    }

                    /* Function to run delete clicked flight row data */
                    runEditClickedFlightDataFunction = function () {
                        editClickedFlightData(currentFlightDataDivId);

                        /* Make sure hotel package type text is colored in rgb(0, 46, 57) */
                        document.getElementById('header_navbar_links_clint_a').style.backgroundColor = 'rgb(85, 127, 137)';
                        document.getElementById('header_navbar_links_hotel_a').style.backgroundColor = 'rgb(85, 127, 137)';
                        document.getElementById('header_navbar_links_flight_a').style.backgroundColor = 'rgb(0, 46, 57)';
                        document.getElementById('header_navbar_links_package_icluding_and_not_including_a').style.color = 'rgb(85, 127, 137)';
                        document.getElementById('header_navbar_links_clint_movements_a').style.backgroundColor = 'rgb(85, 127, 137)';
                    }
                }
            };
        });









    } else if (visiableDivIdName === 'downloaded_pdf_hotel_data_page') {


        // Get all elements with the class name 'hotel_row_class'
        let hotelRowTableDivs = document.querySelectorAll('.hotel_row_class');


        /* Re-store the last stopped hotel check out date */
        document.getElementById('hotel_check_in_input_id').value = document.getElementById('store_google_sheet_hotel_last_stopped_check_out_date_value').innerText;
        document.getElementById('hotel_check_in_input_id').disabled = true;



        // Loop through each 'hotel_row_class' element
        hotelRowTableDivs.forEach(hotelRowTableDiv => {
            // Get the 'hotel_row_image_controller' elements inside each 'hotel_row_class' element
            let hotelRowImageControllers = hotelRowTableDiv.querySelectorAll('.hotel_row_image_controller');












            // Function to handle touch and mouse events to distinguish between click and drag
            function handleClickEvent(element) {
                let touchStartX, touchStartY, touchStartTime;
                let isDragging = false;
                let isTouchEvent = false; // Flag to distinguish between touch and mouse events

                element.addEventListener('touchstart', (event) => {
                    let touch = event.touches[0];
                    touchStartX = touch.clientX;
                    touchStartY = touch.clientY;
                    touchStartTime = new Date().getTime();
                    isDragging = false;
                    isTouchEvent = true; // Set the flag to indicate a touch event
                });

                element.addEventListener('touchmove', () => {
                    isDragging = true;
                });

                element.addEventListener('touchend', (event) => {
                    isTouchEvent = false; // Reset the flag after the touch event ends
                });

                element.addEventListener('mousedown', (event) => {
                    if (!isTouchEvent) { // Only execute if it is not a touch event
                        touchStartX = event.clientX;
                        touchStartY = event.clientY;
                        touchStartTime = new Date().getTime();
                        isDragging = false;
                    }
                });

                element.addEventListener('mousemove', () => {
                    isDragging = true;
                });

                element.addEventListener('mouseup', (event) => {
                    if (!isDragging && !isTouchEvent) { // Only execute if it is not a touch event

                        hotelRowImageControllerFunction(event);
                    }
                });
            }

            // Attach click and touch event listeners to each element
            hotelRowImageControllers.forEach(element => {
                handleClickEvent(element);
            });







            // Define a global variable to store the reference
            let currentHotelDataDivId;

            // Function to handle delete clicked hotel data
            deleteClickedHotelData = function (clickedHotelRowIdName) {
                let overlayLayer = document.querySelector('.black_overlay');

                let clickedHotelCardElement = document.getElementById(clickedHotelRowIdName);
                if (clickedHotelCardElement) {
                    clickedHotelCardElement.remove();
                }

                // Hide delete button div
                let deleteHotelRowDiv = document.getElementById('ensure_delete_or_edit_hotel_data_div');
                deleteHotelRowDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS



                document.getElementById('hotel_check_in_input_id').value = '';
                document.getElementById('hotel_check_in_input_id').disabled = false;



                // Check if there are any remaining inserted hotel data divs (Searching by the second image class name)
                let remainingHotelDataDivs = document.querySelectorAll('.inserted_hotel_data_row');
                if (remainingHotelDataDivs.length === 0) {
                    // Hide section with id 'downloaded_pdf_hotel_data_page'
                    document.getElementById('downloaded_pdf_hotel_data_page').style.display = 'none';

                }
            };





            /* Function to edit the clicked hotel row data */
            editClickedHotelDataFunction = function (clickedHotelRowIdName) {

                /* Make sure the correct section is the one that is visiable */
                create_new_clint_data_section.style.display = 'none';
                create_new_hotel_package_section.style.display = 'flex';
                create_new_flight_package_section.style.display = 'none';
                create_new_package_including_and_not_including_data_section.style.display = 'none';
                create_new_clint_movements_plan_section.style.display = 'none';


                document.getElementById('hotel_inputs_submit_icon').style.display = 'none';
                document.getElementById('confirm_new_hotel_data_row_icon').style.display = 'block';
                document.getElementById('cancel_new_hotel_data_row_icon').style.display = 'block';

                document.getElementById('hotel_content_section_title_text_id').innerText = 'تعديل تفاصيل الفندق';
                document.getElementById('hotel_content_section_title_text_id').style.backgroundColor = 'rgb(85, 127, 137)';

                document.getElementById('hotel_data_dropdown_content').scrollIntoView({
                    block: 'center',
                    inline: 'center',
                    behavior: 'smooth',
                });


                // Hide delete button div
                let overlayLayer = document.querySelector('.black_overlay');
                let deleteHotelRowDiv = document.getElementById('ensure_delete_or_edit_hotel_data_div');
                deleteHotelRowDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS

                // Get the clicked hotel data row
                let clickedHotelDataDiv = document.getElementById(clickedHotelRowIdName);
                let insertedHotelDataDivUniqueId = clickedHotelRowIdName.split('_').pop(); // Extract the unique ID from the clicked row ID


                /* Save the last saved hotel check in date for later re-use (after finishing the editing process) */
                let lastSavedHotelCheckInDate = document.getElementById('hotel_check_in_input_id').value;
                document.getElementById('hotel_check_in_input_id').disabled = false;



                let hotelNameText = clickedHotelDataDiv.querySelector(`h1[id^='hotel_name_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelCheckInText = clickedHotelDataDiv.querySelector(`h2[id^='hotel_check_in_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelCheckOutText = clickedHotelDataDiv.querySelector(`h3[id^='hotel_check_out_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelTotalNightsText = clickedHotelDataDiv.querySelector(`h4[id^='hotel_total_nights_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelRoomTypeDescriptionText = clickedHotelDataDiv.querySelector(`span[id^='hotel_room_type_description_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelRoomContainPoolText = clickedHotelDataDiv.querySelector(`span[id^='hotel_pool_p_id_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelRoomViewText = clickedHotelDataDiv.querySelector(`span[id^='hotel_view_p_id_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelUnitAmountText = clickedHotelDataDiv.querySelector(`p[id^='hotel_total_unit_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelBreakfastPeopleAmountText = clickedHotelDataDiv.querySelector(`span[id^='hotel_breakfast_p_id_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelRoomExtraInfoText = clickedHotelDataDiv.querySelector(`span[id^='hotel_room_extra_info_${insertedHotelDataDivUniqueId}']`)?.innerText || '';

                // Assign values to inputs
                document.getElementById('hotel_name_input_id').value = hotelNameText;
                document.getElementById('hotel_check_in_input_id').value = hotelCheckInText;
                document.getElementById('hotel_check_out_input_id').value = hotelCheckOutText;
                document.getElementById('hotel_total_nights_input_id').value = `${hotelTotalNightsText} ليالي`;
                document.getElementById('hotel_room_type_description_input_id').value = hotelRoomTypeDescriptionText;
                document.getElementById('hotel_room_contain_pool_input_id').value = hotelRoomContainPoolText;
                document.getElementById('hotel_room_view_input_id').value = hotelRoomViewText;
                document.getElementById('hotel_unit_amount_input_id').value = `عدد الوحدات ${hotelUnitAmountText}`;
                document.getElementById('hotel_breakfast_people_amount_input_id').value = hotelBreakfastPeopleAmountText;
                document.getElementById('hotel_room_extra_info_textarea_id').value = hotelRoomExtraInfoText;



                /* Restore the value in the viriables for later use (inside the hotel row data as raw number with no text) */
                storeHotelTotalUnitNumber = hotelUnitAmountText;
                storeHotelTotalNights = hotelTotalNightsText;




                /* Function to cancel the hotel row data editing process */
                cancelNewHotelDataRow = function () {

                    // Get all divs with the class name 'hotel_row_class_for_editing' to compare its id name
                    let allFoundHotelRowDivs = document.querySelectorAll('.hotel_row_class_for_editing');

                    // Get the last found div with the class name "hotel_row_class_for_editing"
                    let lastHotelRowDiv = allFoundHotelRowDivs[allFoundHotelRowDivs.length - 1];


                    // Get references to all input elements and reset their values
                    document.getElementById('hotel_name_input_id').value = '';


                    /* if the last found div is the one that got clicked then make sure to set the value of the check in as the value of the check out */
                    if (lastHotelRowDiv.id === clickedHotelRowIdName) {
                        document.getElementById('hotel_check_in_input_id').value = document.getElementById('hotel_check_out_input_id').value;

                        /* Store the last stooped hotel check out date for later use (when importing data) */
                        document.getElementById('store_google_sheet_hotel_last_stopped_check_out_date_value').innerText = document.getElementById('hotel_check_in_input_id').value;


                        /* but if the last found div is not the one that got clicked then set the check in value as it got saved before in the 'lastSavedHotelCheckInDate' */
                    } else {
                        document.getElementById('hotel_check_in_input_id').value = lastSavedHotelCheckInDate;


                        /* Store the last stooped hotel check out date for later use (when importing data) */
                        document.getElementById('store_google_sheet_hotel_last_stopped_check_out_date_value').innerText = document.getElementById('hotel_check_in_input_id').value;

                    }


                    document.getElementById('hotel_check_out_input_id').value = '';
                    document.getElementById('hotel_total_nights_input_id').value = '';
                    document.getElementById('hotel_room_type_description_input_id').value = '';
                    document.getElementById('hotel_room_contain_pool_input_id').value = '';
                    document.getElementById('hotel_room_view_input_id').value = '';
                    document.getElementById('hotel_unit_amount_input_id').value = '';
                    document.getElementById('hotel_breakfast_people_amount_input_id').value = '';
                    document.getElementById('hotel_room_extra_info_textarea_id').value = '';


                    document.getElementById('hotel_inputs_submit_icon').style.display = 'block';
                    document.getElementById('confirm_new_hotel_data_row_icon').style.display = 'none';
                    document.getElementById('cancel_new_hotel_data_row_icon').style.display = 'none';

                    document.getElementById('hotel_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';
                    document.getElementById('hotel_content_section_title_text_id').innerText = 'تفاصيل الفندق';


                    // Call a function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
                    saveOriginalHotelDates();


                    /* Make sure to Re-set the 'hotel_check_in_input_id' to unclickable */
                    document.getElementById('hotel_check_in_input_id').disabled = true;
                };

                confirmNewHotelDataRow = function () {
                    // Get the clicked hotel data row
                    let clickedHotelDataDiv = document.getElementById(clickedHotelRowIdName);

                    // Clear the old data
                    clickedHotelDataDiv.innerHTML = '';

                    // Extract the new data from the input fields
                    let hotelNameReadyText = document.getElementById('hotel_name_input_id').value;
                    let hotelCheckInReadyText = document.getElementById('hotel_check_in_input_id').value;
                    let hotelCheckOutReadyText = document.getElementById('hotel_check_out_input_id').value;
                    let hotelRoomTypeDescriptionInput = document.getElementById('hotel_room_type_description_input_id').value;
                    let hotelRoomContainPoolText = document.getElementById('hotel_room_contain_pool_input_id').value;
                    let hotelRoomViewText = document.getElementById('hotel_room_view_input_id').value;
                    let hotelBreakfastPeopleAmountText = document.getElementById('hotel_breakfast_people_amount_input_id').value;
                    let hotelRoomExtraInfoReadyText = document.getElementById('hotel_room_extra_info_textarea_id').value;


                    /* if one of the inputs is empty then stop the process */
                    if (hotelNameReadyText === '' || hotelCheckInReadyText === '' || hotelCheckOutReadyText === '' || hotelRoomTypeDescriptionInput === '' || hotelUnitAmountInput === '') {

                        // Change the submit icon background color
                        confirm_new_hotel_data_row_icon.style.backgroundColor = 'red';

                        // Set the background color of the submit icon back to default color
                        setTimeout(() => {
                            confirm_new_hotel_data_row_icon.style.backgroundColor = 'rgb(255, 174, 0)';
                        }, 500);

                    } else {

                        // Convert the hotel name to lowercase and replace spaces with hyphens to create a suitable image filename
                        let hotelImgSrcReadyText = hotelNameReadyText.toLowerCase().replace(/\s+/g, '-');


                        let hotelLocationReadyText = '';
                        let hotelAreaReadyText = '';

                        for (let hotelData of allHotelDataArray) {
                            if (hotelData.hotelName === hotelNameReadyText) {
                                hotelLocationReadyText = hotelData.hotelLocation;
                                if (hotelData.hasOwnProperty('hotelArea')) {
                                    hotelAreaReadyText = hotelData.hotelArea;
                                }
                                break;
                            }
                        }


                        // Create the HTML content for a new hotel row
                        let hotelRowTableDivContent = `
                            <div><h1 id='hotel_name_${insertedHotelDataDivUniqueId}'>${hotelNameReadyText}</h1></div>
                            <div><h2 id='hotel_check_in_${insertedHotelDataDivUniqueId}' class="hotel_check_in_date_for_matching_whole_package_date">${hotelCheckInReadyText}</h2></div>
                            <div><h3 style="color: red" id='hotel_check_out_${insertedHotelDataDivUniqueId}'>${hotelCheckOutReadyText}</h3></div>
                            <div><h4 id='hotel_total_nights_${insertedHotelDataDivUniqueId}'>${storeHotelTotalNights}</h4></div>
                            <div class="description_cell"><span id='hotel_room_type_description_${insertedHotelDataDivUniqueId}'>${hotelRoomTypeDescriptionInput}</span></div>
                            <div><p id='hotel_total_unit_${insertedHotelDataDivUniqueId}'>${storeHotelTotalUnitNumber}</p></div>
                            <div><h5 id='hotel_location_${insertedHotelDataDivUniqueId}'>${hotelLocationReadyText}</h5>${hotelAreaReadyText ? `<br><h6 id='hotel_area_${insertedHotelDataDivUniqueId}'>${hotelAreaReadyText}</h6>` : ''}</p><img src="صور-الفنادق/${hotelImgSrcReadyText}.jpg" class="hotel_row_image_controller inserted_hotel_data_row" style="cursor: pointer"></div>
                        `;

                        // Insert the new HTML content into the clicked hotel data div
                        clickedHotelDataDiv.innerHTML = hotelRowTableDivContent;

                        // Append <p> elements for each input with text
                        if (hotelRoomContainPoolText !== '') {
                            let poolP = document.createElement('span');
                            poolP.id = `hotel_pool_p_id_${currentHotelDataDivId}`;
                            poolP.innerText = hotelRoomContainPoolText;
                            clickedHotelDataDiv.querySelector('.description_cell').appendChild(poolP);
                        }
                        if (hotelRoomViewText !== '') {
                            let viewP = document.createElement('span');
                            viewP.id = `hotel_view_p_id_${currentHotelDataDivId}`;
                            viewP.innerText = hotelRoomViewText;
                            clickedHotelDataDiv.querySelector('.description_cell').appendChild(viewP);
                        }
                        if (hotelBreakfastPeopleAmountText !== '') {
                            let breakfastP = document.createElement('span');
                            breakfastP.id = `hotel_breakfast_p_id_${currentHotelDataDivId}`;
                            breakfastP.innerText = hotelBreakfastPeopleAmountText;
                            clickedHotelDataDiv.querySelector('.description_cell').appendChild(breakfastP);
                        }
                        if (hotelRoomExtraInfoReadyText !== '') {
                            let hotelExtraInfoSpan = document.createElement('span');
                            hotelExtraInfoSpan.id = `hotel_room_extra_info_${insertedHotelDataDivUniqueId}`;
                            hotelExtraInfoSpan.innerText = hotelRoomExtraInfoReadyText;
                            hotelExtraInfoSpan.style.background = 'rgb(85, 127, 137)';
                            hotelExtraInfoSpan.style.color = 'white';
                            hotelExtraInfoSpan.style.padding = '0 5px';
                            clickedHotelDataDiv.querySelector('.description_cell').appendChild(hotelExtraInfoSpan);
                        }


                        // Reattach event listeners to the image controllers
                        let hotelRowImageControllers = clickedHotelDataDiv.querySelectorAll('.hotel_row_image_controller');
                        hotelRowImageControllers.forEach(element => {
                            handleClickEvent(element);
                        });

                        // Clear the input after confirm the new hotel data
                        cancelNewHotelDataRow();
                    };
                }
            };






            // Function to show delete the inserted hotel data
            hotelRowImageControllerFunction = function (event) {
                let deleteHotelRowDiv = document.getElementById('ensure_delete_or_edit_hotel_data_div');
                let clickedHotelDataDiv = event.target.closest('.hotel_row_class');

                if (clickedHotelDataDiv) {
                    currentHotelDataDivId = clickedHotelDataDiv.id;

                    // Check if the overlay already exists
                    let overlayLayer = document.querySelector('.black_overlay');
                    if (!overlayLayer) {
                        overlayLayer = document.createElement('div');
                        overlayLayer.classList.add('black_overlay');
                        document.body.appendChild(overlayLayer);

                        setTimeout(() => {
                            overlayLayer.style.opacity = '1';
                            deleteHotelRowDiv.style.transform = 'translate(-50%, -50%)';
                        }, 50);

                        // Handle both click and touch events on overlay for consistency
                        let handleOverlayClick = () => {
                            deleteHotelRowDiv.style.transform = 'translate(-50%, -100vh)';
                            overlayLayer.style.opacity = '0';
                            setTimeout(() => {
                                // Only remove the overlay if it is still a child of the body
                                if (document.body.contains(overlayLayer)) {
                                    document.body.removeChild(overlayLayer);
                                }
                            }, 300);
                        };

                        overlayLayer.addEventListener('click', handleOverlayClick);
                        overlayLayer.addEventListener('touchstart', handleOverlayClick); // Add touch event handling

                        overlayLayer.addEventListener('click', (event) => {
                            event.stopPropagation();
                        });
                    }



                    /* Function to run delete clikced hotel row data */
                    runDeleteClickedHotelDataFunction = function () {
                        deleteClickedHotelData(currentHotelDataDivId);
                    }

                    /* Function to run edit clikced hotel row data */
                    runEditClickedHotelDataFunction = function () {
                        editClickedHotelDataFunction(currentHotelDataDivId);

                        /* Make sure hotel package type text is colored in rgb(0, 46, 57) */
                        document.getElementById('header_navbar_links_clint_a').style.backgroundColor = 'rgb(85, 127, 137)';
                        document.getElementById('header_navbar_links_hotel_a').style.backgroundColor = 'rgb(0, 46, 57)';
                        document.getElementById('header_navbar_links_flight_a').style.backgroundColor = 'rgb(85, 127, 137)';
                        document.getElementById('header_navbar_links_package_icluding_and_not_including_a').style.backgroundColor = 'rgb(85, 127, 137)';
                        document.getElementById('header_navbar_links_clint_movements_a').style.backgroundColor = 'rgb(85, 127, 137)';
                    }
                }
            };






            // Function to update dates inside 'hotel_row_class_for_editing' divs based on their order in the DOM
            function updateHotelRowDates() {
                const hotelRows = document.querySelectorAll('.hotel_row_class_for_editing');

                hotelRows.forEach((row, index) => {
                    const h2Element = row.querySelector('h2');
                    const h3Element = row.querySelector('h3');

                    if (h2Element && h3Element && originalHotelDates[index]) {
                        // Update the dates based on the new order of elements
                        h2Element.innerText = originalHotelDates[index].h2Date; // Or any date calculation logic here
                        h3Element.innerText = originalHotelDates[index].h3Date; // Or any date calculation logic here
                    }
                });
            }

            // Function to handle the drop and reapply the dates
            function handleDropHotelRow() {
                // After dropping, reapply the dates based on the current DOM order
                updateHotelRowDates(); // Call the update function here
            }

            // Function to prepare drag and drop functionality
            function createHotelDragAndDropMood() {
                let dropZone = document.getElementById('inserted_hotel_data_position_div');

                function mouseDown(event) {
                    if (event.target.tagName.toLowerCase() === 'img') {
                        event.preventDefault();
                        let draggingElement = event.target.closest('.hotel_row_class');
                        draggingElement.classList.add('dragging');
                        draggingElement.dataset.startY = event.clientY;
                        document.addEventListener('mousemove', mouseMove);
                        document.addEventListener('mouseup', mouseUp);

                        document.body.style.touchAction = 'none';
                        document.body.style.userSelect = 'none';
                    }
                }

                function touchStart(event) {
                    let touch = event.touches[0];
                    if (touch.target.tagName.toLowerCase() === 'img') {
                        let draggingElement = touch.target.closest('.hotel_row_class');
                        draggingElement.classList.add('dragging');
                        draggingElement.dataset.startY = touch.clientY;
                        document.addEventListener('touchmove', touchMove, { passive: false });
                        document.addEventListener('touchend', touchEnd);

                        document.body.style.touchAction = 'none';
                        document.body.style.userSelect = 'none';
                    }
                }

                function mouseMove(event) {
                    let draggingElement = document.querySelector('.dragging');
                    let startY = parseInt(draggingElement.dataset.startY || 0);
                    let deltaY = event.clientY - startY;
                    draggingElement.style.transform = `translateY(${deltaY}px)`;

                    let dropElements = Array.from(dropZone.children);
                    let currentIndex = dropElements.indexOf(draggingElement);

                    let targetIndex = currentIndex;
                    for (let i = 0; i < dropElements.length; i++) {
                        let element = dropElements[i];
                        let rect = element.getBoundingClientRect();
                        if (i !== currentIndex && event.clientY > rect.top && event.clientY < rect.bottom) {
                            if (deltaY > 0 && event.clientY > rect.bottom - 20) {
                                targetIndex = i + 1;
                            } else if (deltaY < 0 && event.clientY < rect.top + 20) {
                                targetIndex = i;
                            }
                            break;
                        }
                    }

                    if (targetIndex !== currentIndex) {
                        dropZone.insertBefore(draggingElement, dropElements[targetIndex]);
                    }
                }

                function touchMove(event) {
                    event.preventDefault();
                    let draggingElement = document.querySelector('.dragging');
                    let touch = event.touches[0];
                    let startY = parseInt(draggingElement.dataset.startY || 0);
                    let deltaY = touch.clientY - startY;
                    draggingElement.style.transform = `translateY(${deltaY}px)`;

                    let dropElements = Array.from(dropZone.children);
                    let currentIndex = dropElements.indexOf(draggingElement);

                    let targetIndex = currentIndex;
                    for (let i = 0; i < dropElements.length; i++) {
                        let element = dropElements[i];
                        let rect = element.getBoundingClientRect();
                        if (i !== currentIndex && touch.clientY > rect.top && touch.clientY < rect.bottom) {
                            if (deltaY > 0 && touch.clientY > rect.bottom - 20) {
                                targetIndex = i + 1;
                            } else if (deltaY < 0 && touch.clientY < rect.top + 20) {
                                targetIndex = i;
                            }
                            break;
                        }
                    }

                    if (targetIndex !== currentIndex) {
                        dropZone.insertBefore(draggingElement, dropElements[targetIndex]);
                    }
                }

                function mouseUp(event) {
                    let draggingElement = document.querySelector('.dragging');

                    if (draggingElement) {
                        draggingElement.classList.remove('dragging');
                        draggingElement.style.transform = '';
                        draggingElement.removeAttribute('data-start-y');

                        handleDropHotelRow(); // Call the function to update dates after drop ends
                    }

                    document.removeEventListener('mousemove', mouseMove);
                    document.removeEventListener('mouseup', mouseUp);

                    document.body.style.touchAction = '';
                    document.body.style.userSelect = '';
                }

                function touchEnd(event) {
                    let draggingElement = document.querySelector('.dragging');

                    if (draggingElement) {
                        draggingElement.classList.remove('dragging');
                        draggingElement.style.transform = '';
                        draggingElement.removeAttribute('data-start-y');

                        handleDropHotelRow(); // Call the function to update dates after drop ends
                    }

                    document.removeEventListener('touchmove', touchMove);
                    document.removeEventListener('touchend', touchEnd);

                    document.body.style.touchAction = '';
                    document.body.style.userSelect = '';
                }

                let insertedHotelDataDivs = document.querySelectorAll('.hotel_row_class');
                insertedHotelDataDivs.forEach((div) => {
                    div.addEventListener('mousedown', mouseDown);
                    div.addEventListener('touchstart', touchStart);
                });
            }

            // Call the function to set up drag-and-drop functionality
            createHotelDragAndDropMood();

            // Call a function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
            saveOriginalHotelDates();
        });





    } else if (visiableDivIdName === 'downloaded_pdf_clint_movements_data_page') {


        // Get all elements with the class name 'flight_row_class'
        let clintMovementsRowTableDiv = document.querySelectorAll('.clint_movements_row_class');


        /* Show the hide and show clint movement section icon if the 'show_and_hide_clint_movement_section_icon' is visible */
        document.getElementById('show_and_hide_clint_movement_section_icon').style.display = 'inline';


        // Define a global variable to store the reference
        let currentClintMovementsDataDivId;


        // Loop through each 'flight_row_class' element
        clintMovementsRowTableDiv.forEach(clintMovementsRowTableDiv => {
            // Get all dynamically created elements with the class 'clint_movements_row_controller'
            let clintMovementsRowImageControllers = clintMovementsRowTableDiv.querySelectorAll('.clint_movements_row_controller');


            // Function to handle touch events and distinguish between tap and scroll for flight row
            function handleClintMovementsTouchEvent(element) {
                let touchStartX, touchStartY, touchStartTime;

                // Record the starting touch position and time
                element.addEventListener('touchstart', (event) => {
                    let touch = event.touches[0];
                    touchStartX = touch.clientX;
                    touchStartY = touch.clientY;
                    touchStartTime = new Date().getTime();
                });

                // Compare the ending touch position and time to determine if it was a tap
                element.addEventListener('touchend', (event) => {
                    let touch = event.changedTouches[0];
                    let touchEndX = touch.clientX;
                    let touchEndY = touch.clientY;
                    let touchEndTime = new Date().getTime();

                    let deltaX = touchEndX - touchStartX;
                    let deltaY = touchEndY - touchStartY;
                    let deltaTime = touchEndTime - touchStartTime;

                    // Check if the touch event qualifies as a tap
                    let isTap = Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 500;

                    // If it's a tap, run the click function
                    if (isTap) {
                        clintMovementsRowCityNameControllerFunction(event);
                    }
                });
            }

            // Function to handle mouse events and distinguish between click and drag for flight row
            function handleClintMovementsMouseEvent(element) {
                let mouseStartX, mouseStartY, mouseStartTime, isDragging = false;

                // Record the starting mouse position and time
                element.addEventListener('mousedown', (event) => {
                    mouseStartX = event.clientX;
                    mouseStartY = event.clientY;
                    mouseStartTime = new Date().getTime();
                    isDragging = false;
                });

                // Mark as dragging if mouse moves significantly
                element.addEventListener('mousemove', (event) => {
                    let deltaX = event.clientX - mouseStartX;
                    let deltaY = event.clientY - mouseStartY;
                    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
                        isDragging = true;
                    }
                });

                // Compare the ending mouse position and time to determine if it was a click
                element.addEventListener('mouseup', (event) => {
                    let mouseEndX = event.clientX;
                    let mouseEndY = event.clientY;
                    let mouseEndTime = new Date().getTime();

                    let deltaX = mouseEndX - mouseStartX;
                    let deltaY = mouseEndY - mouseStartY;
                    let deltaTime = mouseEndTime - mouseStartTime;

                    // Check if the mouse event qualifies as a click
                    let isClick = !isDragging && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 500;

                    // If it's a click, run the click function
                    if (isClick) {
                        clintMovementsRowCityNameControllerFunction(event);
                    }
                });
            }

            // Attach click and touch event listeners to each element
            clintMovementsRowImageControllers.forEach(element => {
                handleClintMovementsMouseEvent(element); // Handle mouse events with click detection
                handleClintMovementsTouchEvent(element); // Handle touch events with tap detection
            });


























            // Function to handle delete clicked clint movements data
            editClickedClintMovementsData = function (currentClintMovementsDataDivId) {

                /* Make sure the correct section is the one that is visiable */
                create_new_clint_data_section.style.display = 'none';
                create_new_hotel_package_section.style.display = 'none';
                create_new_flight_package_section.style.display = 'none';
                create_new_package_including_and_not_including_data_section.style.display = 'none';
                create_new_clint_movements_plan_section.style.display = 'block';


                /* Show and hide different icons */
                document.getElementById('clint_movements_auto_create_icon').style.display = 'none';
                document.getElementById('confirm_new_clint_movements_data_row_icon').style.display = 'block';
                document.getElementById('cancel_new_clint_movements_data_row_icon').style.display = 'block';


                /* Change the innerText and styling to defualt */
                document.getElementById('clint_movements_content_section_title_text_id').innerText = 'تعديل تفاصيل خط السير';
                document.getElementById('clint_movements_content_section_title_text_id').style.background = 'rgb(85, 127, 137)';


                /* Scroll up to the middle of the 'clint_movements_details_dropdown_content' */
                document.getElementById('clint_movements_details_dropdown_content').scrollIntoView({
                    block: 'center',
                    inline: 'center',
                    behavior: 'smooth',
                });


                /* Disable the clint movements dates when editing */
                document.getElementById('whole_package_start_date_input_id').disabled = true;
                document.getElementById('whole_package_end_date_input_id').disabled = true;


                // Hide delete button div
                let overlayLayer = document.querySelector('.black_overlay');
                let deleteHotelRowDiv = document.getElementById('ensure_delete_or_edit_clint_movemnt_data_div');
                deleteHotelRowDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS


                // Get the clicked clint movements data row
                let clickedClintMovementsDataDiv = document.getElementById(currentClintMovementsDataDivId);
                let insertedClintMovementsRowDivUniqueId = currentClintMovementsDataDivId.split('_').pop(); // Extract the unique ID from the clicked row ID



                /* Store the (before editing day value) */
                let clintMovementsBeforeEditingDayDateInput = document.getElementById('clint_movements_current_day_date_input_id').value;



                // Extract data using IDs
                let clintMovementsWholeDayActionsDetailsTextarea = clickedClintMovementsDataDiv.querySelector(`p[id^='clint_movements_whole_day_actions_details_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';


                if (clintMovementsNextCityInput !== '') {
                    document.getElementById('clint_movements_next_city_input_id').value = `الذهاب الى ${clintMovementsNextCityInput}`;
                }


                document.getElementById('clint_movements_airport_welcome_input_id').value = clintMovementsAirportWelcomeInput;
                document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value = clintMovementsWholeDayActionsDetailsTextarea;
                document.getElementById('clint_movements_new_check_in_input_id').value = clintMovementsNewCheckInInput;
                document.getElementById('clint_movements_current_city_input_id').value = `المدينة الحالية ${clintMovementsStoredCurrentCityValue}`;







                /* Function to cancel the clint movements row data editing process */
                cancelNewClintMovementsDataRow = function () {
                    // Get references to all input elements and reset their values
                    document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value = '';



                    /* Hide and show different icons */
                    document.getElementById('clint_movements_auto_create_icon').style.display = 'block';
                    document.getElementById('confirm_new_clint_movements_data_row_icon').style.display = 'none';
                    document.getElementById('cancel_new_clint_movements_data_row_icon').style.display = 'none';


                    /* Reset the innerText and styling to defualt */
                    document.getElementById('clint_movements_content_section_title_text_id').innerText = 'تفاصيل الطيران';
                    document.getElementById('clint_movements_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';



                    /* Restore the (before editing) current day date */
                    document.getElementById('clint_movements_current_day_date_input_id').value = clintMovementsBeforeEditingDayDateInput;


                    /* Re-enable the clint movements dates when editing */
                    document.getElementById('whole_package_start_date_input_id').disabled = false;
                    document.getElementById('whole_package_end_date_input_id').disabled = false;
                }




                /* Function to confirm the new clint movements row data */
                confirmNewClintMovementsDataRow = function () {
                    // Get the clicked clint movements data row
                    let clickedClintMovementsDataDiv = document.getElementById(currentClintMovementsDataDivId);

                    // Clear the old data (and replace (the  inner data) later and not the whole div)
                    clickedClintMovementsDataDiv.innerHTML = '';


                    // Get references to all input elements for later use
                    let clintMovementsWholeDayActionsDetailsTextarea = document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value;


                    // In case all 'استقبال في المطار', 'تسجيل خروج', 'تسجيل دخول', 'الذهاب لمدينة جديدة' inputs are empty then stop the process
                    if (clintMovementsNewCheckOutInput === '' && clintMovementsNewCheckInInput === '' && clintMovementsWholeDayActionsDetailsTextarea === '') {
                        // Change the submit icon background color
                        clint_movements_auto_create_icon.style.backgroundColor = 'red';

                        // Set the background color of the submit icon back to default color
                        setTimeout(() => {
                            clint_movements_auto_create_icon.style.backgroundColor = 'rgb(255, 174, 0)';
                        }, 500);

                    } else {
                        /* if the 'clintMovementsNextCityInput' exist then make sure there is no any clint movements visiting places */
                        if (clintMovementsNextCityInput === 'الذهاب للمطار للمغادرة' || clintMovementsAirportWelcomeInput !== '' || clintMovementsNewCheckInInput !== '') {
                            /* Check is there is value in the 'clintMovementsWholeDayActionsDetailsTextarea' */
                            if (clintMovementsWholeDayActionsDetailsTextarea !== '') {
                                // Change the submit icon background color
                                clint_movements_auto_create_icon.style.backgroundColor = 'red';

                                // Set the background color of the submit icon back to default color
                                setTimeout(() => {
                                    clint_movements_auto_create_icon.style.backgroundColor = 'rgb(255, 174, 0)';
                                }, 500);

                                /* Exit the function and stop processing */
                                return;
                            }
                        }

                        // Create the HTML content for a new hotel row
                        let clintMovementsRowTableDivContent = `
                            <div><h6 id='clint_movements_current_day_date_${insertedClintMovementsRowDivUniqueId}'></h6></div>
                            <div id='clint_movements_whole_day_actions_details_container_${insertedClintMovementsRowDivUniqueId}'></div>
                            <div id='clint_movements_current_and_next_city_container_${insertedClintMovementsRowDivUniqueId}' class="clint_movements_row_controller" style="cursor: pointer;"></div>
                        `;

                        // Insert the updated HTML content into the current edithing div
                        clickedClintMovementsDataDiv.innerHTML = clintMovementsRowTableDivContent;

                        // Create and append each <p> element with unique ID
                        let pElements = [
                            { text: clintMovementsNewCheckOutInput, id: `clint_movements_new_check_out_${insertedClintMovementsRowDivUniqueId}` },
                            { text: clintMovementsNextCityInput, id: `clint_movements_next_city_${insertedClintMovementsRowDivUniqueId}` },
                            { text: clintMovementsAirportWelcomeInput, id: `clint_movements_airport_welcome_${insertedClintMovementsRowDivUniqueId}` },
                            { text: clintMovementsWholeDayActionsDetailsTextarea, id: `clint_movements_whole_day_actions_details_${insertedClintMovementsRowDivUniqueId}` },
                            { text: clintMovementsNewCheckInInput, id: `clint_movements_new_check_in_${insertedClintMovementsRowDivUniqueId}` }
                        ];

                        // Append each <p> element to the container
                        pElements.forEach(pElement => {
                            if (pElement.text !== '') {
                                let p = document.createElement('p');
                                p.id = pElement.id;
                                p.innerText = pElement.text;
                                p.style.display = 'none';
                                document.getElementById(`clint_movements_whole_day_actions_details_container_${insertedClintMovementsRowDivUniqueId}`).appendChild(p);
                            }
                        });

                        // Concatenate all texts with a + sign
                        let concatenatedText = pElements.map(p => p.text).filter(text => text !== '').join('+');

                        // Create and append a <p> element for the concatenated text
                        let pElementConcatenated = document.createElement('p');
                        pElementConcatenated.id = `clint_movements_concatenated_${insertedClintMovementsRowDivUniqueId}`;
                        pElementConcatenated.innerText = concatenatedText;
                        document.getElementById(`clint_movements_whole_day_actions_details_container_${insertedClintMovementsRowDivUniqueId}`).appendChild(pElementConcatenated);





                        // Get all dynamically created elements with the class 'clint_movements_row_controller'
                        let clintMovementsRowImageControllers = clickedClintMovementsDataDiv.querySelectorAll('.clint_movements_row_controller');


                        // Attach click and touch event listeners to each element
                        clintMovementsRowImageControllers.forEach(element => {
                            handleClintMovementsMouseEvent(element); // Handle mouse events with click detection
                            handleClintMovementsTouchEvent(element); // Handle touch events with tap detection
                        });


                        // Clear the input after confirm the new flight data
                        cancelNewClintMovementsDataRow()
                    }
                }
            }
        });









        // Function to handle clint movements row div click or touch
        clintMovementsRowCityNameControllerFunction = function (event) {
            let deleteclintMovementsRowDiv = document.getElementById('ensure_delete_or_edit_clint_movemnt_data_div');
            let clickedclintMovementsDataDiv = event.target.closest('.clint_movements_row_class');

            currentClintMovementsDataDivId = clickedclintMovementsDataDiv.id;


            /* Function to run edit the clicked clint movements row data */
            runEditClickedClintMovementsDataFunction = function () {
                editClickedClintMovementsData(currentClintMovementsDataDivId);

                /* Make sure hotel package type text is colored in rgb(0, 46, 57) */
                document.getElementById('header_navbar_links_clint_a').style.backgroundColor = 'rgb(85, 127, 137)';
                document.getElementById('header_navbar_links_hotel_a').style.backgroundColor = 'rgb(85, 127, 137)';
                document.getElementById('header_navbar_links_flight_a').style.backgroundColor = 'rgb(85, 127, 137)';
                document.getElementById('header_navbar_links_package_icluding_and_not_including_a').style.backgroundColor = 'rgb(85, 127, 137)';
                document.getElementById('header_navbar_links_clint_movements_a').style.backgroundColor = 'rgb(0, 46, 57)';
            }

            // Check if the overlay already exists
            let overlayLayer = document.querySelector('.black_overlay');
            if (!overlayLayer) {
                overlayLayer = document.createElement('div');
                overlayLayer.classList.add('black_overlay');
                document.body.appendChild(overlayLayer);

                setTimeout(() => {
                    overlayLayer.style.opacity = '1';
                    deleteclintMovementsRowDiv.style.transform = 'translate(-50%, -50%)';
                }, 50);

                // Handle both click and touch events on overlay for consistency
                let handleOverlayClick = () => {
                    deleteclintMovementsRowDiv.style.transform = 'translate(-50%, -100vh)';
                    overlayLayer.style.opacity = '0';
                    setTimeout(() => {
                        // Only remove the overlay if it is still a child of the body
                        if (document.body.contains(overlayLayer)) {
                            document.body.removeChild(overlayLayer);
                        }
                    }, 300);
                };

                overlayLayer.addEventListener('click', handleOverlayClick);
                overlayLayer.addEventListener('touchstart', handleOverlayClick); // Add touch event handling

                overlayLayer.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
        };





    } else if (visiableDivIdName === 'downloaded_pdf_package_including_data_page') {

        /* Re-Enter the inputs values if they exist in the stored google sheet p elements */
        document.getElementById('sms_card_with_internet_amount_input_id').value = document.getElementById('store_google_sheet_package_including_sms_value').innerText;
        document.getElementById('inner_flight_tickets_amount_input_id').value = document.getElementById('store_google_sheet_package_including_inner_tickets_value').innerText;
        document.getElementById('package_details_textarea_id').value = document.getElementById('store_google_sheet_package_details_textarea_value').innerText.replace(/\\n/g, '\n');
        document.getElementById('package_totla_price_input_id').value = document.getElementById('store_google_sheet_package_total_price_value').innerText;

    }
}
