let scriptURL = 'https://script.google.com/macros/s/AKfycbzfCsf83fAX5TGNob-dHpasi0YF3ZSPTxqwEqAgOMCgRDE0W7uFOxyu2vs_0vM8sFuZsA/exec';
let form = document.forms['save-package'];

function submitFormAndSaveData() {
    event.preventDefault();

    if (document.getElementById('downloaded_pdf_clint_data_page').style.display !== 'none') {

        // Play a sound effect only if the website is not muted
        if (!document.getElementById('mute_website_checkbox').checked) {
            new Audio('success.mp3').play();
        }

        let googleSheetNewSaveDataNameInput = document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText;

        let newObject = {
            name: googleSheetNewSaveDataNameInput,
            content: {}
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


                /* Call a function to add new "Done" text in the google sheet */
                submitForm();


                /* Call a function to get the most top empty cell row number again */
                fetchData();


                /* Run a function to update the saved google sheet package names (for later use when importing) */
                updateDataBaseSavedDataNames();


                document.getElementById('website_users_name_input_id').disabled = true;


                /* Refresh the page */
                window.location.reload();
            });

    } else {

        // Play a sound effect only if the website is not muted
        if (!document.getElementById('mute_website_checkbox').checked) {
            new Audio('error.mp3').play();
        }

    }
}

// Function to clean HTML
function cleanHTML(html) {
    return html.replace(/\s+/g, ' ').trim();
}



// Function to clean HTML
function cleanHTML(html) {
    return html.replace(/\s+/g, ' ').trim();
}




















let sheetURL = 'https://script.google.com/macros/s/AKfycbzfCsf83fAX5TGNob-dHpasi0YF3ZSPTxqwEqAgOMCgRDE0W7uFOxyu2vs_0vM8sFuZsA/exec'; // Replace with your web app URL
let sheetData = [];

// Fetch data from Google Sheets via web app and store it locally
function updateDataBaseSavedDataNames() {
    let allGoogleSheetStoredDataNamesForImportingDataDiv = document.getElementById('all_google_sheet_stored_data_names_for_importing_data_div');

    // Clear existing content
    allGoogleSheetStoredDataNamesForImportingDataDiv.innerHTML = '';

    /* Call a function to get the most top empty cell row number again */
    fetchData();


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

            // Play a sound effect only if the website is not muted
            if (!document.getElementById('mute_website_checkbox').checked) {
                // Play a sound effect
                new Audio('success.mp3').play();
            }

            // Run a function to import the data based on the name of the clicked h3
            importContentForSelectedName(selectedName);
        }
    } else {

        // Play a sound effect only if the website is not muted
        if (!document.getElementById('mute_website_checkbox').checked) {
            // Play a sound effect
            new Audio('error.mp3').play();
        }

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


            /* Set the 'website_users_name_input_id' to make it unclickable */
            document.getElementById('website_users_name_input_id').disabled = true;




            /* Store the package user name code for displaying in the pdf file */
            document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText = `${document.getElementById('store_google_sheet_package_user_with_no_year_for_later_reference_when_importing').innerText}_${mostTopEmptyCellRowNumberValue}`;



            // Make sure to hide all elements with the class name before checking visibility
            let images = document.querySelectorAll('.inserted_package_data_section_page_image_class');
            images.forEach(img => {
                img.style.display = 'none';
            });


            // Make sure to hide all elements with the class name before checking visibility
            let images2 = document.querySelectorAll('.inserted_package_data_section_page_image_class_2');
            images2.forEach(img => {
                img.style.display = 'none';
            });


            /* Show the 'inserted_company_name_image_position_div' element */
            document.getElementById('inserted_company_name_image_position_div').style.display = 'flex';



        } catch (error) {
        }
    } else {

        // Play a sound effect only if the website is not muted
        if (!document.getElementById('mute_website_checkbox').checked) {
            // Play a sound effect if no data is found
            new Audio('error.mp3').play();
        }
    }

    /* Show the 'inserted_company_name_image_position_div' element */
    document.getElementById('inserted_company_name_image_position_div').style.display = 'flex';
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

            /* Set the 'website_users_name_input_id' to make it unclickable */
            document.getElementById('website_users_name_input_id').disabled = true;


            // Make sure to hide all elements with the class name before checking visibility
            let images = document.querySelectorAll('.inserted_package_data_section_page_image_class');
            images.forEach(img => {
                img.style.display = 'none';
            });


            // Make sure to hide all elements with the class name before checking visibility
            let images2 = document.querySelectorAll('.inserted_package_data_section_page_image_class_2');
            images2.forEach(img => {
                img.style.display = 'none';
            });


            /* Show the 'inserted_company_name_image_position_div' element */
            document.getElementById('inserted_company_name_image_position_div').style.display = 'flex';




        } catch (error) {
        }
    }


    /* Call a function to make sure the hotel available dates are propperly set */
    updateAllowedDates();
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
        updateDataBaseSavedDataNames(); // Apply the filter after resetting the value
    }, 500);
};







































// Variable to store the most top empty cell row number
let mostTopEmptyCellRowNumberValue;

// Function to handle form submission and insert data into the Google Sheets
async function submitForm() {
    // Get the form element
    let form = document.getElementById('save-package-unique-code');
    // Get the input field element
    let inputField = document.getElementById('website_users_name_input_id');

    // Get the package name value from the input field
    let packageName = inputField.value;

    // Check if the package name is not empty
    if (packageName) {
        // Prepare the data to be sent in the POST request
        let data = {
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
        let response = await fetch("https://script.google.com/macros/s/AKfycbzzOPqv4b5wrZ3tVrk26fr3OeofPi1Y0CRi4TYu8YQwNm52du6P6xMnBt9azLPqu2vY/exec");
        // Parse the response as JSON
        let data = await response.json();
        // Process the fetched data
        processSheetData(data);
    } catch (error) {
    }
}

// Function to process the fetched data and find the most top empty cell row number
function processSheetData(data) {
    // Get the input field element
    let inputField = document.getElementById('website_users_name_input_id');
    // Get the package name value from the input field
    let packageName = inputField.value;

    // Check if the package name is empty
    if (!packageName) {
        alert('Please enter a package name.');
        return;
    }

    // Get the column index based on the package name
    let columnIndex = getColumnIndex(packageName);
    // Check if the column index is valid
    if (columnIndex === -1) {
        alert('Invalid package name.');
        return;
    }

    // Get the sheet data values
    let sheetData = data.values;
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
        case 'بكج بندر للتجربة':
            return 7;
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


        /* The following code will be replaced with the folloiwng code line
        document.getElementById('website_users_name_input_id').value = document.getElementById('store_google_sheet_package_user_name_value').innerText;

        until 20 Sept 2024 Delete this following code and use the upper code line
        */
        if (document.getElementById('store_google_sheet_package_user_name_value')) {
            document.getElementById('website_users_name_input_id').value = document.getElementById('store_google_sheet_package_user_name_value').innerText;

        } else {
            document.getElementById('website_users_name_input_id').value = 'عبد الرحمن';
        }




        fetchData();

        /* Store the package user name code for displaying in the pdf file as a new package with a new unique package user name code number */
        document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText = `${document.getElementById('store_google_sheet_package_user_with_no_year_for_later_reference_when_importing').innerText}_${mostTopEmptyCellRowNumberValue}`;




        /* Check the package type checkbox based on the innerText of the 'store_google_sheet_clint_package_type_checkbox_value' */
        if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'بكج شهل عسل') {
            document.getElementById('honeymoon_checkbox').checked = true;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = false;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'بكج شباب') {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = true;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = false;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'بكج عائلة') {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = true;
            document.getElementById('two_people_checkbox').checked = false;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'بكج شخصين') {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = true;


            /* in case if there is no any check input then unckeck all inputs */
        } else {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = false;
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









    } else if (visiableDivIdName === 'downloaded_pdf_flight_data_page') {


        // Get all elements with the class name 'flight_row_class'
        let flightRowTableDivs = document.querySelectorAll('.flight_row_class');

        // Loop through each 'flight_row_class' element
        flightRowTableDivs.forEach(flightRowTableDiv => {
            // Get all dynamically created elements with the class 'flight_row_flight_arrival_time_controller'
            flightRowTableDiv.querySelectorAll('.flight_row_flight_arrival_time_controller').forEach(function (element) {
                element.onclick = function (event) {
                    flightRowAirLineControllerFunction(event, element);
                };
            });

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


            // Attach click and touch event listeners to each element
            hotelRowImageControllers.forEach(element => {
                handleClickEvent(element);
            });

        });



        // Call the function to set up drag-and-drop functionality
        createHotelDragAndDropMood();



        // Call a function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
        saveOriginalHotelDates();




    } else if (visiableDivIdName === 'downloaded_pdf_clint_movements_data_page') {


        // Get all elements with the class name 'flight_row_class'
        let clintMovementsRowTableDiv = document.querySelectorAll('.clint_movements_row_class_for_editing');


        /* Show the hide and show clint movement section icon if the 'show_and_hide_clint_movement_section_icon' is visible */
        document.getElementById('show_and_hide_clint_movement_section_icon').style.display = 'inline';


        /* Update the available clint visiting places based on the current existing visiting places */
        filterUsedClintVisitingPlacesNames();


        // Loop through each 'flight_row_class' element
        clintMovementsRowTableDiv.forEach(clintMovementsRowTableDiv => {

            // Get all dynamically created elements with the class 'clint_movements_row_controller'
            clintMovementsRowTableDiv.querySelectorAll('.clint_movements_row_controller').forEach(function (element) {
                element.onclick = function (event) {
                    clintMovementsRowCityNameControllerFunction(event, element);
                };
            });

        });




        // Call the function to set up drag-and-drop functionality
        createHotelDragAndDropMood();

        // Call a function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
        saveOriginalHotelDates();









    } else if (visiableDivIdName === 'downloaded_pdf_package_including_data_page') {

        /* Re-Enter the inputs values if they exist in the stored google sheet p elements */
        document.getElementById('sms_card_with_internet_amount_input_id').value = document.getElementById('store_google_sheet_package_including_sms_value').innerText;
        document.getElementById('inner_flight_tickets_amount_input_id').value = document.getElementById('store_google_sheet_package_including_inner_tickets_value').innerText;
        document.getElementById('package_details_textarea_id').value = document.getElementById('store_google_sheet_package_details_textarea_value').innerText.replace(/\\n/g, '\n');
        document.getElementById('package_totla_price_input_id').value = document.getElementById('store_google_sheet_package_total_price_value').innerText;


        /* in 2026 delete the condition if the 'store_google_sheet_show_price_in_pdf_checked_or_no' is exist or no (I just used it now to avoid error in the website becaues it's still new) */
        if (document.getElementById('store_google_sheet_show_price_in_pdf_checked_or_no')) {

            /* Check or uncheck the show total package price in the pdf file checkbox input */
            if (document.getElementById('store_google_sheet_show_price_in_pdf_checked_or_no').innerHTML == 'showPrice') {
                document.getElementById('show_package_total_price_checkbox').checked = true;

            } else if (document.getElementById('store_google_sheet_show_price_in_pdf_checked_or_no').innerHTML == 'hidePrice') {
                document.getElementById('show_package_total_price_checkbox').checked = false;

            }

        }

    }
}
