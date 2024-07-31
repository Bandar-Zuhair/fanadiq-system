/* Function to save new website localstorage data name */
saveNewWebsiteLpcalStorageDataName = function () {
    let storeLastClickedLocalstorageDataName = document.getElementById('store_last_clicked_localstorage_data_name');
    let firstDiv = document.getElementById('first_div_in_localstorage_save_name_input_div');

    if (storeLastClickedLocalstorageDataName.innerText === '') {
        firstDiv.style.display = 'none';
    } else {
        firstDiv.style.display = 'flex';
    }

    /* Get the 'localstorage_save_name_input_div' and show it */
    let localStorageStoreNewDataDiv = document.getElementById('localstorage_save_name_input_div');

    // Create an overlay layer for better visual effect
    let overlayLayer = document.createElement('div');
    overlayLayer.classList.add('black_overlay');
    document.body.appendChild(overlayLayer);

    // Delayed opacity transition for smooth appearance
    setTimeout(() => {
        overlayLayer.style.opacity = '1';
        localStorageStoreNewDataDiv.style.transform = 'translate(-50%, -50%)'; // Center div
    }, 50);

    // Click handler to close overlay and delete box div on click outside
    overlayLayer.onclick = () => {
        localStorageStoreNewDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
        overlayLayer.style.opacity = '0'; // Hide overlay

        // Remove overlay and delete box div from DOM after transition
        setTimeout(() => {
            document.body.removeChild(overlayLayer);
        }, 300); // Match transition duration in CSS
    };

    // Prevent overlayLayer click propagation to avoid immediate closure
    overlayLayer.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent immediate closure of overlay on click
    });









    /* Save (New) website data to the localstorage */
    saveNewWebsiteLocalStorageDataName = function () {
        let localStorageNewSaveDataNameInput = document.getElementById('localstorage_new_save_data_name_input_id').value;
        let localstorageNewSaveButton = document.getElementById('localstorage_new_save_button_id');

        /* If there is no value in the 'localstorage_new_save_data_name_input_id' input, stop the process */
        if (localStorageNewSaveDataNameInput === '' || localStorageNewSaveDataNameInput === 'Last Download') {
            // Change the submit icon background color
            localstorageNewSaveButton.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to the default color
            setTimeout(() => {
                localstorageNewSaveButton.style.backgroundColor = 'darkorange';
            }, 500);

            return;
        }

        // Initialize an array in local storage if it doesn't exist
        let savedWebsiteDataArray = JSON.parse(localStorage.getItem('Saved_Website_Data_Array')) || [];

        // Create an object to store visible div elements
        let newObject = {
            name: localStorageNewSaveDataNameInput,
            elements: {}
        };

        // List of div IDs to check visibility
        let divIds = [
            'downloaded_pdf_clint_data_page',
            'downloaded_pdf_package_including_data_page',
            'downloaded_pdf_flight_data_page',
            'downloaded_pdf_hotel_data_page',
            'downloaded_pdf_clint_movements_data_page',
            'downloaded_pdf_total_price_data_page'
        ];

        // Check visibility of each div and add to the object if visible
        let isAnyDivVisible = false;
        divIds.forEach(divId => {
            let element = document.getElementById(divId);
            if (element && element.style.display !== 'none' && element.offsetWidth > 0 && element.offsetHeight > 0) {
                newObject.elements[divId] = element.outerHTML;
                isAnyDivVisible = true;
            }
        });

        // If no visible divs were found, change the submit icon background color and exit
        if (!isAnyDivVisible) {
            // Change the submit icon background color
            localstorageNewSaveButton.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to the default color
            setTimeout(() => {
                localstorageNewSaveButton.style.backgroundColor = 'darkorange';
            }, 500);

            return;
        }

        // Check if an object with the same name already exists
        let existingObjectIndex = savedWebsiteDataArray.findIndex(item => item.name === localStorageNewSaveDataNameInput);

        if (existingObjectIndex !== -1) {
            // Replace the existing object with the new data
            savedWebsiteDataArray[existingObjectIndex] = newObject;
        } else {
            // Add the new object to the array
            savedWebsiteDataArray.push(newObject);
        }

        // Save the updated array to local storage
        localStorage.setItem('Saved_Website_Data_Array', JSON.stringify(savedWebsiteDataArray));

        // Change the submit icon background color to green
        localstorageNewSaveButton.style.backgroundColor = 'rgb(0, 255, 0)';

        // Set the background color of the submit icon back to the default color
        setTimeout(() => {
            localstorageNewSaveButton.style.backgroundColor = 'darkorange';
        }, 500);

        localStorageStoreNewDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
        overlayLayer.style.opacity = '0'; // Hide overlay

        // Remove overlay and delete box div from DOM after transition
        setTimeout(() => {
            document.body.removeChild(overlayLayer);
        }, 300); // Match transition duration in CSS

        /* Reset the input value after saving a new localStorage website data */
        localstorage_new_save_data_name_input_id.value = '';
    }









    /* Save (Current) website data to the localstorage */
    saveCurrentWebsiteLocalStorageDataName = function () {
        let storeLastClickedLocalstorageDataName = document.getElementById('store_last_clicked_localstorage_data_name').innerText;
        let localstorageNewSaveButton = document.getElementById('localstorage_new_save_button_id');

        // Initialize an array in local storage if it doesn't exist
        let savedWebsiteDataArray = JSON.parse(localStorage.getItem('Saved_Website_Data_Array')) || [];

        // Create an object to store visible div elements
        let newObject = {
            name: storeLastClickedLocalstorageDataName,
            elements: {}
        };

        // List of div IDs to check visibility
        let divIds = [
            'downloaded_pdf_clint_data_page',
            'downloaded_pdf_package_including_data_page',
            'downloaded_pdf_flight_data_page',
            'downloaded_pdf_hotel_data_page',
            'downloaded_pdf_clint_movements_data_page',
            'downloaded_pdf_total_price_data_page'
        ];

        // Check visibility of each div and add to the object if visible
        let isAnyDivVisible = false;
        divIds.forEach(divId => {
            let element = document.getElementById(divId);
            if (element && element.style.display !== 'none' && element.offsetWidth > 0 && element.offsetHeight > 0) {
                newObject.elements[divId] = element.outerHTML;
                isAnyDivVisible = true;
            }
        });

        // If no visible divs were found, change the submit icon background color and exit
        if (!isAnyDivVisible) {
            // Change the submit icon background color
            localstorageNewSaveButton.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to the default color
            setTimeout(() => {
                localstorageNewSaveButton.style.backgroundColor = 'darkorange';
            }, 500);

            return;
        }

        // Check if an object with the same name already exists
        let existingObjectIndex = savedWebsiteDataArray.findIndex(item => item.name === storeLastClickedLocalstorageDataName);

        if (existingObjectIndex !== -1) {
            // Replace the existing object with the new data
            savedWebsiteDataArray[existingObjectIndex] = newObject;
        } else {
            // Add the new object to the array
            savedWebsiteDataArray.push(newObject);
        }

        // Save the updated array to local storage
        localStorage.setItem('Saved_Website_Data_Array', JSON.stringify(savedWebsiteDataArray));

        // Change the submit icon background color to green
        localstorageNewSaveButton.style.backgroundColor = 'rgb(0, 255, 0)';

        // Set the background color of the submit icon back to the default color
        setTimeout(() => {
            localstorageNewSaveButton.style.backgroundColor = 'darkorange';
        }, 500);

        localStorageStoreNewDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
        overlayLayer.style.opacity = '0'; // Hide overlay

        // Remove overlay and delete box div from DOM after transition
        setTimeout(() => {
            document.body.removeChild(overlayLayer);
        }, 300); // Match transition duration in CSS
    }
}
























/* Function to update the displayed local storage data names */
function updateLocalStorageDataNames(localStorageControllerDivId) {

    let allLocalstorageStoredDataNamesForImportingDataDiv = document.getElementById(localStorageControllerDivId);


    // Clear existing <p> elements
    allLocalstorageStoredDataNamesForImportingDataDiv.innerHTML = '';

    // Get the saved data array from local storage
    let savedWebsiteDataArray = JSON.parse(localStorage.getItem('Saved_Website_Data_Array')) || [];

    // Create new <p> elements based on the saved data array
    savedWebsiteDataArray.forEach(data => {
        let pElement = document.createElement('h3');
        pElement.innerText = data.name;
        pElement.onclick = function () {
            pickThisWebsiteLocalStorageDataName(pElement);
        };
        allLocalstorageStoredDataNamesForImportingDataDiv.appendChild(pElement);
    });
}



/* Function to pick website localStorage data names */
pickThisWebsiteLocalStorageDataName = function (clickedLocalStorageDataName) {
    // Identify the parent div of the clicked <p> element
    let parentDivId = clickedLocalStorageDataName.parentElement.id;

    // If the clicked element is inside the importing data div (single selection)
    if (parentDivId === 'all_localstorage_stored_data_names_for_importing_data_div') {
        // Get all <p> elements inside the 'all_localstorage_stored_data_names_for_importing_data_div' div
        let allDataNames = document.querySelectorAll('#all_localstorage_stored_data_names_for_importing_data_div h3');

        // Loop through each <p> element to reset their styles
        allDataNames.forEach(function (dataName) {
            dataName.style.backgroundColor = 'white';
            dataName.style.color = 'black';
        });

        // Set the background color and text color of the clicked <p> element
        clickedLocalStorageDataName.style.backgroundColor = 'rgb(0, 155, 0)';
        clickedLocalStorageDataName.style.color = 'white';

    } else if (parentDivId === 'all_localstorage_stored_data_names_for_deleting_data_div') {
        // If the clicked element is inside the deleting data div (multiple selection)
        
        // Toggle the background and text color of the clicked <p> element
        if (clickedLocalStorageDataName.style.backgroundColor === 'rgb(0, 155, 0)') {
            clickedLocalStorageDataName.style.backgroundColor = 'white';
            clickedLocalStorageDataName.style.color = 'black';
        } else {
            clickedLocalStorageDataName.style.backgroundColor = 'rgb(0, 155, 0)';
            clickedLocalStorageDataName.style.color = 'white';
        }
    }
};






function importWebsiteLocalStorageDataName() {

    // Re-enable scrolling
    document.documentElement.style.overflow = 'auto';


    let allLocalStorageDataNamesDiv = document.querySelectorAll('#all_localstorage_stored_data_names_for_importing_data_div h3');
    let found = false;

    allLocalStorageDataNamesDiv.forEach(function (clickedLocalStorageDataNameElement) {
        if (clickedLocalStorageDataNameElement.style.backgroundColor === 'rgb(0, 155, 0)') {
            found = true;


            let dropdownDivElements = document.querySelectorAll('.searchable_names_dropdown_class');
            dropdownDivElements.forEach(dropdown => {
                dropdown.classList.remove('show');
            });

            overlayLayer.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(overlayLayer);
            }, 300);

            let savedWebsiteDataArray = JSON.parse(localStorage.getItem('Saved_Website_Data_Array')) || [];
            let clickedDataName = clickedLocalStorageDataNameElement.innerText;
            let matchingObject = savedWebsiteDataArray.find(data => data.name === clickedDataName);

            if (matchingObject && matchingObject.elements) {
                document.getElementById('inserted_clint_data_position_div').innerHTML = '';
                document.getElementById('inserted_package_icluding_data_position_div').innerHTML = '';
                document.getElementById('inserted_flight_data_position_div').innerHTML = '';
                document.getElementById('inserted_hotel_data_position_div').innerHTML = '';
                document.getElementById('inserted_clint_movements_data_position_div').innerHTML = '';

                document.getElementById('downloaded_pdf_clint_data_page').style.display = 'none';
                document.getElementById('downloaded_pdf_package_including_data_page').style.display = 'none';
                document.getElementById('downloaded_pdf_flight_data_page').style.display = 'none';
                document.getElementById('downloaded_pdf_hotel_data_page').style.display = 'none';
                document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'none';
                document.getElementById('downloaded_pdf_total_price_data_page').style.display = 'none';

                for (let divId in matchingObject.elements) {
                    let htmlSectionPdfPageDiv = document.getElementById(divId);
                    htmlSectionPdfPageDiv.style.display = 'block';
                    htmlSectionPdfPageDiv.innerHTML = matchingObject.elements[divId];
                    reActiveDragAndDropFunctionality(htmlSectionPdfPageDiv.id);
                }


                /* Store the clicked localstorage data name for later saving refrence */
                store_last_clicked_localstorage_data_name.innerText = clickedDataName;



                /* Show the download button */
                document.getElementById('export_package_pdf_div_id').style.display = 'block';


                overlayLayer.style.opacity = '0';
                setTimeout(() => {
                    overlayLayer.style.display = 'none';
                }, 300);
            }
        }
    });

    if (!found) {
        import_localstorage_data_name_submit_button_id.style.backgroundColor = 'red';
        setTimeout(() => {
            import_localstorage_data_name_submit_button_id.style.backgroundColor = 'darkorange';
        }, 500);
    }
}

















/* Function to delete the saved website localstorage data name */
deleteWebsiteLocalStorageDataName = function () {
    // Re-enable scrolling
    document.documentElement.style.overflow = 'auto';

    // Get the 'allLocalstorageStoredDataNamesRorDeletingDataDiv' div
    let allLocalstorageStoredDataNamesRorDeletingDataDiv = document.getElementById('all_localstorage_stored_data_names_for_deleting_data_div');

    // Get all p elements inside the 'allLocalstorageStoredDataNamesRorDeletingDataDiv'
    let pElements = allLocalstorageStoredDataNamesRorDeletingDataDiv.getElementsByTagName('h3');

    // Loop through all p elements
    for (let p of pElements) {
        // Check the background color
        let bgColor = window.getComputedStyle(p).backgroundColor;
        if (bgColor === 'rgb(0, 155, 0)') {

            // Search and delete the object in localStorage
            let savedWebsiteDataArray = JSON.parse(localStorage.getItem('Saved_Website_Data_Array')) || [];
            savedWebsiteDataArray = savedWebsiteDataArray.filter(item => item.name !== p.innerText);
            localStorage.setItem('Saved_Website_Data_Array', JSON.stringify(savedWebsiteDataArray));

            /* Hide The 'localstorage_delete_stored_data_names_div' with the 'overlayLayer' */
            let allLocalstorageStoredDataNamesRorDeletingDataDiv = document.querySelectorAll('.searchable_names_dropdown_class');
            allLocalstorageStoredDataNamesRorDeletingDataDiv.forEach(dropdown => {
                dropdown.classList.remove('show');
            });

            overlayLayer.style.opacity = '0'; // Hide overlay

            // Check if overlayLayer exists in the DOM before trying to remove it
            setTimeout(() => {
                if (document.body.contains(overlayLayer)) {
                    document.body.removeChild(overlayLayer);
                }
            }, 300); // Match transition duration in CSS

        } else {
            // Change the submit button background color
            delete_localstorage_data_name_submit_button_id.style.backgroundColor = 'red';
            setTimeout(() => {
                delete_localstorage_data_name_submit_button_id.style.backgroundColor = 'darkorange';
            }, 500);
        }
    }
}


























/* Function to re-active the drag and drop functionality (copied code for the main inserted daa js code) */
reActiveDragAndDropFunctionality = function (visiableDivIdName) {

    if (visiableDivIdName === 'downloaded_pdf_clint_data_page') {

        /* Function to reActive the company logo delete functionality */
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

                    // Hide the download button if there are no other important data sections visible
                    if (document.getElementById('downloaded_pdf_flight_data_page').style.display === 'none' && document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'none' && document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'none') {
                        document.getElementById('export_package_pdf_div_id').style.display = 'none';
                    }
                }
            }







            /* Function to edit the clicked flight row data */
            editClickedFlightData = function (clickedFlightDataDivIdName) {

                /* Make sure the correct section is the one that is visiable */
                create_new_hotel_package_section.style.display = 'none';
                create_new_flight_package_section.style.display = 'flex';
                create_new_clint_movements_paln_section.style.display = 'none';


                document.getElementById('clint_flight_inputs_submit_icon').style.display = 'none';
                document.getElementById('confirm_new_flight_data_row_icon').style.display = 'block';
                document.getElementById('cancel_new_flight_data_row_icon').style.display = 'block';


                document.getElementById('flight_content_section_title_text_id').innerText = 'تعديل تفاصيل الطيران';
                document.getElementById('flight_content_section_title_text_id').style.background = 'rgb(85, 127, 137)';


                document.getElementById('flight_dropdown_content').scrollIntoView({
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


                // Get the clicked hotel data row
                let clickedFlightDataDiv = document.getElementById(clickedFlightDataDivIdName);
                let insertedFlightDataDivUniqueId = clickedFlightDataDivIdName.split('_').pop(); // Extract the unique ID from the clicked row ID




                // Extract data using IDs
                let flightAirLineInput = clickedFlightDataDiv.querySelector(`p[id^='flight_air_line_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightAdultPersonAmountInput = clickedFlightDataDiv.querySelector(`p[id^='flight_adult_person_amount_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightInfantPersonAmountInput = clickedFlightDataDiv.querySelector(`p[id^='flight_infant_person_amount_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightFromCityInput = clickedFlightDataDiv.querySelector(`p[id^='flight_from_city_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightToCityInput = clickedFlightDataDiv.querySelector(`p[id^='flight_to_city_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightDateInput = clickedFlightDataDiv.querySelector(`p[id^='flight_date_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
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
                    document.getElementById('flight_adult_person_amount_input_id').value = '';
                    document.getElementById('flight_infant_person_amount_input_id').value = '';
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
                        <div><p id='flight_date_${insertedFlightDataDivUniqueId}'>${flightDateInput}</p></div>
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
                    }
                }
            };







            // Praper drag-and-drop functionality for the newly added flight row
            createFlightDragAndDropMood();

            // Function to prepare drag and drop 'insertedHotelDataDiv' elements functionality
            function createFlightDragAndDropMood() {


                // Common function to handle dragging logic
                function handleDrag(event, touch = false) {
                    if (event.target.classList.contains('flight_row_flight_arrival_time_controller')) {
                        event.preventDefault();
                        let draggingElement = event.target.closest('.flight_row_class');
                        draggingElement.classList.add('dragging');
                        draggingElement.dataset.startY = touch ? event.touches[0].clientY : event.clientY;
                        document.addEventListener(touch ? 'touchmove' : 'mousemove', touch ? touchMove : mouseMove);
                        document.addEventListener(touch ? 'touchend' : 'mouseup', touch ? touchEnd : mouseUp);

                        // Disable scrolling
                        document.body.style.overflow = 'hidden';
                    }
                }

                // Event listener for the drop zone
                let flightDropZone = document.getElementById('inserted_flight_data_position_div');

                // Function to handle mouse down event
                function mouseDown(event) {
                    handleDrag(event, false);
                }

                // Function to handle touch start event
                function touchStart(event) {
                    handleDrag(event, true);
                }

                // Function to handle move event
                function move(event, touch = false) {
                    let draggingElement = document.querySelector('.dragging');
                    let startY = parseInt(draggingElement.dataset.startY || 0);
                    let deltaY = (touch ? event.touches[0].clientY : event.clientY) - startY;
                    draggingElement.style.transform = `translateY(${deltaY}px)`;

                    let dropElements = Array.from(flightDropZone.children);
                    let currentIndex = dropElements.indexOf(draggingElement);

                    let targetIndex = currentIndex;
                    for (let i = 0; i < dropElements.length; i++) {
                        let element = dropElements[i];
                        let rect = element.getBoundingClientRect();
                        if (i !== currentIndex && (touch ? event.touches[0].clientY : event.clientY) > rect.top && (touch ? event.touches[0].clientY : event.clientY) < rect.bottom) {
                            if (deltaY > 0 && (touch ? event.touches[0].clientY : event.clientY) > rect.bottom - 20) {
                                targetIndex = i + 1;
                            } else if (deltaY < 0 && (touch ? event.touches[0].clientY : event.clientY) < rect.top + 20) {
                                targetIndex = i;
                            }
                            break;
                        }
                    }

                    if (targetIndex !== currentIndex) {
                        flightDropZone.insertBefore(draggingElement, dropElements[targetIndex]);
                    }
                }

                // Function to handle mouse move event
                function mouseMove(event) {
                    move(event, false);
                }

                // Function to handle touch move event
                function touchMove(event) {
                    move(event, true);
                }

                // Function to handle end event
                function end(event, touch = false) {
                    let draggingElement = document.querySelector('.dragging');

                    if (draggingElement) {
                        draggingElement.classList.remove('dragging');
                        draggingElement.style.transform = '';
                        draggingElement.removeAttribute('data-start-y');

                        draggingElement.classList.add('drop-transition');
                        setTimeout(() => {
                            draggingElement.classList.remove('drop-transition');
                        }, 300);
                    }

                    document.removeEventListener(touch ? 'touchmove' : 'mousemove', touch ? touchMove : mouseMove);
                    document.removeEventListener(touch ? 'touchend' : 'mouseup', touch ? touchEnd : mouseUp);

                    document.body.style.overflow = '';
                }

                // Function to handle mouse up event
                function mouseUp(event) {
                    end(event, false);
                }

                // Function to handle touch end event
                function touchEnd(event) {
                    end(event, true);
                }

                // Add event listeners for each insertedFlightDataDiv element
                let insertedFlightDataDivs = document.querySelectorAll('.flight_row_class');

                insertedFlightDataDivs.forEach((div) => {
                    div.addEventListener('mousedown', mouseDown);
                    div.addEventListener('touchstart', touchStart);
                });
            }
        });









    } else if (visiableDivIdName === 'downloaded_pdf_hotel_data_page') {


        // Get all elements with the class name 'hotel_row_class'
        let hotelRowTableDivs = document.querySelectorAll('.hotel_row_class');

        // Loop through each 'hotel_row_class' element
        hotelRowTableDivs.forEach(hotelRowTableDiv => {
            // Get the 'hotel_row_image_controller' elements inside each 'hotel_row_class' element
            let hotelRowImageControllers = hotelRowTableDiv.querySelectorAll('.hotel_row_image_controller');

            // Loop through each 'hotel_row_image_controller' element
            hotelRowImageControllers.forEach(hotelRowImageController => {
                /* Pass the div of the clicked 'hotel_row_image_controller' */
                hotelRowImageController.onclick = function (event) {
                    hotelRowImageControllerFunction(event);
                };
            });










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
                let deleteHotelRowDiv = document.getElementById('ensure_delet_or_edit_hotel_data_div');
                deleteHotelRowDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS

                // Check if there are any remaining inserted hotel data divs (Searching by the second image class name)
                let remainingHotelDataDivs = document.querySelectorAll('.inserted_hotel_data_row');
                if (remainingHotelDataDivs.length === 0) {
                    // Hide section with id 'downloaded_pdf_hotel_data_page'
                    document.getElementById('downloaded_pdf_hotel_data_page').style.display = 'none';

                    // Hide the download button if there are no other important data sections visible
                    if (document.getElementById('downloaded_pdf_flight_data_page').style.display === 'none' && document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'none' && document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'none') {
                        document.getElementById('export_package_pdf_div_id').style.display = 'none';
                    }
                }
            };





            /* Function to edit the clicked hotel row data */
            editClickedHotelDataFunction = function (clickedHotelRowIdName) {

                /* Make sure the correct section is the one that is visiable */
                create_new_hotel_package_section.style.display = 'flex';
                create_new_flight_package_section.style.display = 'none';
                create_new_clint_movements_paln_section.style.display = 'none';


                document.getElementById('hotel_inputs_submit_icon').style.display = 'none';
                document.getElementById('confirm_new_hotel_data_row_icon').style.display = 'block';
                document.getElementById('cancel_new_hotel_data_row_icon').style.display = 'block';

                document.getElementById('hotel_content_section_title_text_id').innerText = 'تعديل تفاصيل الفندق';
                document.getElementById('hotel_content_section_title_text_id').style.backgroundColor = 'rgb(85, 127, 137)';

                document.getElementById('toggle_hotel_elements').scrollIntoView({
                    block: 'center',
                    inline: 'center',
                    behavior: 'smooth',
                });

                // Hide delete button div
                let overlayLayer = document.querySelector('.black_overlay');
                let deleteHotelRowDiv = document.getElementById('ensure_delet_or_edit_hotel_data_div');
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

                // If the selected location is not "بالي"
                if (document.getElementById('hotel_location_input_id').value.trim() != "بالي") {
                    document.getElementById('hotel_area_input_id').style.display = 'none'; // Hide the hotel area input
                } else {

                    document.getElementById('hotel_area_input_id').style.display = 'block'; // Show the hotel area input
                }

                /* ALways Re-enable the hotel name input */
                document.getElementById('hotel_name_input_id').disabled = false; // Re-enable hotel area input


                // Extract data using IDs
                let hotelLocationText = clickedHotelDataDiv.querySelector(`p[id^='hotel_location_${insertedHotelDataDivUniqueId}']`)?.innerText || '';

                /* Praper a variable for hotel area value (if exist) */
                let hotelAreaText = null;

                /* Check if there is any value in the hotel area input then store in the 'hotelAreaText' variable */
                if (clickedHotelDataDiv.querySelector(`p[id^='hotel_area_${insertedHotelDataDivUniqueId}']`)) {
                    hotelAreaText = clickedHotelDataDiv.querySelector(`p[id^='hotel_area_${insertedHotelDataDivUniqueId}']`).innerText;

                    document.getElementById('hotel_area_input_id').style.display = 'block'; // Show the hotel area input
                    document.getElementById('hotel_area_input_id').disabled = false; // Re-Enable hotel name input
                }

                let hotelNameText = clickedHotelDataDiv.querySelector(`p[id^='hotel_name_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelCheckInText = clickedHotelDataDiv.querySelector(`p[id^='hotel_check_in_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelCheckOutText = clickedHotelDataDiv.querySelector(`p[id^='hotel_check_out_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelTotalNightsText = clickedHotelDataDiv.querySelector(`p[id^='hotel_total_nights_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelRoomTypeDescriptionText = clickedHotelDataDiv.querySelector(`span[id^='hotel_room_type_description_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelRoomContainPoolText = clickedHotelDataDiv.querySelector(`span[id^='hotel_pool_p_id_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelRoomViewText = clickedHotelDataDiv.querySelector(`span[id^='hotel_view_p_id_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelUnitAmountText = clickedHotelDataDiv.querySelector(`p[id^='hotel_total_unit_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelBreakfastPeopleAmountText = clickedHotelDataDiv.querySelector(`span[id^='hotel_breakfast_p_id_${insertedHotelDataDivUniqueId}']`)?.innerText || '';
                let hotelRoomExtraInfoText = clickedHotelDataDiv.querySelector(`span[id^='hotel_room_extra_info_${insertedHotelDataDivUniqueId}']`)?.innerText || '';

                // Assign values to inputs
                document.getElementById('hotel_location_input_id').value = hotelLocationText;
                document.getElementById('hotel_area_input_id').value = hotelAreaText;
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



                /* Restore the value in the viriables */
                storeHotelTotalUnitNumber = hotelUnitAmountText;
                storeHotelTotalNights = hotelTotalNightsText;




                /* Function to cancel the hotel row data editing process */
                cancelNewHotelDataRow = function () {
                    // Get references to all input elements and reset their values
                    document.getElementById('hotel_location_input_id').value = '';
                    document.getElementById('hotel_area_input_id').value = '';
                    document.getElementById('hotel_name_input_id').value = '';
                    document.getElementById('hotel_check_in_input_id').value = '';
                    document.getElementById('hotel_check_out_input_id').value = '';
                    document.getElementById('hotel_total_nights_input_id').value = '';
                    document.getElementById('hotel_room_type_description_input_id').value = '';
                    document.getElementById('hotel_room_contain_pool_input_id').value = '';
                    document.getElementById('hotel_room_view_input_id').value = '';
                    document.getElementById('hotel_unit_amount_input_id').value = '';
                    document.getElementById('hotel_breakfast_people_amount_input_id').value = '';
                    document.getElementById('hotel_room_extra_info_textarea_id').value = '';

                    // Disable the hotel_area_input_id and hotel_name_input_id inputs
                    document.getElementById('hotel_area_input_id').disabled = true;
                    document.getElementById('hotel_name_input_id').disabled = true;

                    document.getElementById('hotel_inputs_submit_icon').style.display = 'block';
                    document.getElementById('confirm_new_hotel_data_row_icon').style.display = 'none';
                    document.getElementById('cancel_new_hotel_data_row_icon').style.display = 'none';

                    document.getElementById('hotel_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';
                    document.getElementById('hotel_content_section_title_text_id').innerText = 'تفاصيل الفندق';
                };

                confirmNewHotelDataRow = function () {
                    // Get the clicked hotel data row
                    let clickedHotelDataDiv = document.getElementById(clickedHotelRowIdName);

                    // Clear the old data
                    clickedHotelDataDiv.innerHTML = '';

                    // Extract the new data from the input fields
                    let hotelLocationReadyText = document.getElementById('hotel_location_input_id').value;
                    let hotelAreaReadyText = document.getElementById('hotel_area_input_id').value;
                    let hotelNameReadyText = document.getElementById('hotel_name_input_id').value;
                    let hotelCheckInReadyText = document.getElementById('hotel_check_in_input_id').value;
                    let hotelCheckOutReadyText = document.getElementById('hotel_check_out_input_id').value;
                    let hotelRoomTypeDescriptionInput = document.getElementById('hotel_room_type_description_input_id').value;
                    let hotelRoomContainPoolText = document.getElementById('hotel_room_contain_pool_input_id').value;
                    let hotelRoomViewText = document.getElementById('hotel_room_view_input_id').value;
                    let hotelBreakfastPeopleAmountText = document.getElementById('hotel_breakfast_people_amount_input_id').value;
                    let hotelRoomExtraInfoReadyText = document.getElementById('hotel_room_extra_info_textarea_id').value;


                    /* if one of the inputs is empty then stop the process */
                    if (hotelLocationReadyText === '' || hotelNameReadyText === '' || hotelCheckInReadyText === '' || hotelCheckOutReadyText === '' || hotelRoomTypeDescriptionInput === '' || hotelUnitAmountInput === '') {

                        // Change the submit icon background color
                        confirm_new_hotel_data_row_icon.style.backgroundColor = 'red';

                        // Set the background color of the submit icon back to default color
                        setTimeout(() => {
                            confirm_new_hotel_data_row_icon.style.backgroundColor = 'rgb(255, 174, 0)';
                        }, 500);

                    } else {

                        // Convert the hotel name to lowercase and replace spaces with hyphens to create a suitable image filename
                        let hotelImgSrcReadyText = hotelNameReadyText.toLowerCase().replace(/\s+/g, '-');

                        // Create the HTML content for a new hotel row
                        let hotelRowTableDivContent = `
                            <div><p id='hotel_name_${insertedHotelDataDivUniqueId}'>${hotelNameReadyText}</p></div>
                            <div><p id='hotel_check_in_${insertedHotelDataDivUniqueId}'>${hotelCheckInReadyText}</p></div>
                            <div><p style="color: red" id='hotel_check_out_${insertedHotelDataDivUniqueId}'>${hotelCheckOutReadyText}</p></div>
                            <div><p id='hotel_total_nights_${insertedHotelDataDivUniqueId}'>${storeHotelTotalNights}</p></div>
                            <div class="description_cell"><span id='hotel_room_type_description_${insertedHotelDataDivUniqueId}'>${hotelRoomTypeDescriptionInput}</span></div>
                            <div><p id='hotel_total_unit_${insertedHotelDataDivUniqueId}'>${storeHotelTotalUnitNumber}</p></div>
                            <div><p id='hotel_location_${insertedHotelDataDivUniqueId}'>${hotelLocationReadyText}</p>${hotelAreaReadyText ? `<br><p id='hotel_area_${insertedHotelDataDivUniqueId}'>${hotelAreaReadyText}</p>` : ''}</p><img src="صور-الفنادق/${hotelImgSrcReadyText}.jpg" class="hotel_row_image_controller inserted_hotel_data_row" style="cursor: pointer"></div>
                        `;

                        // Insert the new HTML content into the clicked hotel data div
                        clickedHotelDataDiv.innerHTML = hotelRowTableDivContent;

                        // Append <p> elements for each input with text
                        if (hotelRoomContainPoolText !== '') {
                            let poolP = document.createElement('span');
                            poolP.id = `hotel_pool_p_id_${currentHotelDataDivId.split('_').pop()}`;
                            poolP.innerText = hotelRoomContainPoolText;
                            clickedHotelDataDiv.querySelector('.description_cell').appendChild(poolP);
                        }
                        if (hotelRoomViewText !== '') {
                            let viewP = document.createElement('span');
                            viewP.id = `hotel_view_p_id_${currentHotelDataDivId.split('_').pop()}`;
                            viewP.innerText = hotelRoomViewText;
                            clickedHotelDataDiv.querySelector('.description_cell').appendChild(viewP);
                        }
                        if (hotelBreakfastPeopleAmountText !== '') {
                            let breakfastP = document.createElement('span');
                            breakfastP.id = `hotel_breakfast_p_id_${currentHotelDataDivId.split('_').pop()}`;
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
                let deleteHotelRowDiv = document.getElementById('ensure_delet_or_edit_hotel_data_div');
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
                    }
                }
            };






            // Function to prepare drag and drop 'insertedHotelDataDiv' elements functionality
            function createHotelDragAndDropMood() {
                // Event listener for the drop zone (inserted_hotel_data_position_div)
                let dropZone = document.getElementById('inserted_hotel_data_position_div'); // Drop zone for hotel data elements

                // Function to handle mouse down event
                function mouseDown(event) {
                    if (event.target.tagName.toLowerCase() === 'img') { // Check if the event target is an img element
                        event.preventDefault(); // Prevent default behavior
                        let draggingElement = event.target.closest('.hotel_row_class'); // Get the parent div being dragged
                        draggingElement.classList.add('dragging'); // Add dragging class for styling
                        draggingElement.dataset.startY = event.clientY; // Store initial mouse position
                        document.addEventListener('mousemove', mouseMove); // Listen for mouse move events
                        document.addEventListener('mouseup', mouseUp); // Listen for mouse up events

                        // Disable scrolling
                        document.body.style.overflow = 'hidden'; // Disable page scrolling during drag
                    }
                }

                // Function to handle touch start event
                function touchStart(event) {
                    let touch = event.touches[0]; // Get the first touch
                    if (touch.target.tagName.toLowerCase() === 'img') { // Check if the event target is an img element
                        let draggingElement = touch.target.closest('.hotel_row_class'); // Get the parent div being dragged
                        draggingElement.classList.add('dragging'); // Add dragging class for styling
                        draggingElement.dataset.startY = touch.clientY; // Store initial touch position
                        document.addEventListener('touchmove', touchMove, { passive: false }); // Listen for touch move events
                        document.addEventListener('touchend', touchEnd); // Listen for touch end events

                        // Disable scrolling
                        document.body.style.overflow = 'hidden'; // Disable page scrolling during drag
                    }
                }

                // Function to handle mouse move event
                function mouseMove(event) {
                    let draggingElement = document.querySelector('.dragging'); // Select the currently dragging element
                    let startY = parseInt(draggingElement.dataset.startY || 0); // Get initial mouse position
                    let deltaY = event.clientY - startY; // Calculate vertical distance moved
                    draggingElement.style.transform = `translateY(${deltaY}px)`; // Move element vertically

                    // Find the current position relative to other elements
                    let dropElements = Array.from(dropZone.children); // Get all drop zone children
                    let currentIndex = dropElements.indexOf(draggingElement); // Get index of dragging element

                    // Determine the target index based on the position
                    let targetIndex = currentIndex;
                    for (let i = 0; i < dropElements.length; i++) {
                        let element = dropElements[i];
                        let rect = element.getBoundingClientRect(); // Get bounding box of each element
                        if (i !== currentIndex && event.clientY > rect.top && event.clientY < rect.bottom) {
                            if (deltaY > 0 && event.clientY > rect.bottom - 20) {
                                targetIndex = i + 1; // Move down
                            } else if (deltaY < 0 && event.clientY < rect.top + 20) {
                                targetIndex = i; // Move up
                            }
                            break;
                        }
                    }

                    // Adjust the elements when dragged between others
                    if (targetIndex !== currentIndex) {
                        dropZone.insertBefore(draggingElement, dropElements[targetIndex]); // Insert element at new position
                    }
                }

                // Function to handle touch move event
                function touchMove(event) {
                    event.preventDefault(); // Prevent default behavior to stop scrolling
                    let draggingElement = document.querySelector('.dragging'); // Select the currently dragging element
                    let touch = event.touches[0]; // Get the first touch
                    let startY = parseInt(draggingElement.dataset.startY || 0); // Get initial touch position
                    let deltaY = touch.clientY - startY; // Calculate vertical distance moved
                    draggingElement.style.transform = `translateY(${deltaY}px)`; // Move element vertically

                    // Find the current position relative to other elements
                    let dropElements = Array.from(dropZone.children); // Get all drop zone children
                    let currentIndex = dropElements.indexOf(draggingElement); // Get index of dragging element

                    // Determine the target index based on the position
                    let targetIndex = currentIndex;
                    for (let i = 0; i < dropElements.length; i++) {
                        let element = dropElements[i];
                        let rect = element.getBoundingClientRect(); // Get bounding box of each element
                        if (i !== currentIndex && touch.clientY > rect.top && touch.clientY < rect.bottom) {
                            if (deltaY > 0 && touch.clientY > rect.bottom - 20) {
                                targetIndex = i + 1; // Move down
                            } else if (deltaY < 0 && touch.clientY < rect.top + 20) {
                                targetIndex = i; // Move up
                            }
                            break;
                        }
                    }

                    // Adjust the elements when dragged between others
                    if (targetIndex !== currentIndex) {
                        dropZone.insertBefore(draggingElement, dropElements[targetIndex]); // Insert element at new position
                    }
                }

                // Function to handle mouse up event
                function mouseUp(event) {
                    let draggingElement = document.querySelector('.dragging'); // Select the currently dragging element

                    // Check if draggingElement exists before proceeding
                    if (draggingElement) {
                        draggingElement.classList.remove('dragging'); // Remove dragging class
                        draggingElement.style.transform = ''; // Reset transform after dragging ends
                        draggingElement.removeAttribute('data-start-y'); // Remove stored startY data

                        // Add a class to trigger the smooth transition effect
                        draggingElement.classList.add('drop-transition');
                        setTimeout(() => {
                            draggingElement.classList.remove('drop-transition');
                        }, 300); // Duration of the transition
                    }

                    document.removeEventListener('mousemove', mouseMove); // Stop listening for mouse move events
                    document.removeEventListener('mouseup', mouseUp); // Stop listening for mouse up events

                    // Enable scrolling
                    document.body.style.overflow = ''; // Re-enable page scrolling
                }

                // Function to handle touch end event
                function touchEnd(event) {
                    let draggingElement = document.querySelector('.dragging'); // Select the currently dragging element

                    // Check if draggingElement exists before proceeding
                    if (draggingElement) {
                        draggingElement.classList.remove('dragging'); // Remove dragging class
                        draggingElement.style.transform = ''; // Reset transform after dragging ends
                        draggingElement.removeAttribute('data-start-y'); // Remove stored startY data

                        // Add a class to trigger the smooth transition effect
                        draggingElement.classList.add('drop-transition');
                        setTimeout(() => {
                            draggingElement.classList.remove('drop-transition');
                        }, 300); // Duration of the transition
                    }

                    document.removeEventListener('touchmove', touchMove); // Stop listening for touch move events
                    document.removeEventListener('touchend', touchEnd); // Stop listening for touch end events

                    // Enable scrolling
                    document.body.style.overflow = ''; // Re-enable page scrolling
                }

                // Add event listeners for each insertedHotelDataDiv element (to enable drag-and-drop)
                let insertedHotelDataDivs = document.querySelectorAll('.hotel_row_class');
                insertedHotelDataDivs.forEach((div) => {
                    div.addEventListener('mousedown', mouseDown);
                    div.addEventListener('touchstart', touchStart);
                });
            }

            // Call the createHotelDragAndDropMood function to set up delete and drag-and-drop functionality
            createHotelDragAndDropMood();
        });





    } else if (visiableDivIdName === 'downloaded_pdf_clint_movements_data_page') {


        // Get all elements with the class name 'flight_row_class'
        let clintMovementsRowTableDiv = document.querySelectorAll('.clint_movements_row_class');


        /* Set the values for the following inputs to be able to continue the process of the clint movements action */
        document.getElementById('clint_movements_first_day_date_input_id').value = document.getElementById('store_localstorage_clint_movements_first_day_date_value').innerText;
        document.getElementById('clint_movements_last_day_date_input_id').value = document.getElementById('store_localstorage_clint_movements_last_day_date_value').innerText;
        document.getElementById('clint_movements_total_nights_input_id').value = document.getElementById('store_localstorage_clint_movements_total_nights_day_date_value').innerText;
        document.getElementById('clint_movements_current_day_date_input_id').value = document.getElementById('store_localstorage_clint_movements_current_day_date_value').innerText;


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
            deleteClickedClintMovementsData = function (clickedClintMovementsRowdName) {
                // Select the overlay layer element
                let overlayLayer = document.querySelector('.black_overlay');

                // Get the clicked element by its ID
                let clickedHotelCardElement = document.getElementById(clickedClintMovementsRowdName);
                if (clickedHotelCardElement) {
                    // Remove the clicked element from the DOM
                    clickedHotelCardElement.remove();
                }

                // Hide the delete confirmation div by translating it out of view
                let deleteClintMovementsRowDiv = document.getElementById('ensure_delete_or_edit_clint_movemnt_data_div');
                deleteClintMovementsRowDiv.style.transform = 'translate(-50%, -100vh)';

                // Reduce the opacity of the overlay layer to 0 (for fade-out effect)
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition (300ms delay)
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS

                // Update dates after deleting a row
                arrangeClintMovementsDates();

                // Reduce the date of clint_movements_current_day_date_input_id by one day
                // Get the current day input element by its ID
                let currentDayInput = document.getElementById('clint_movements_current_day_date_input_id');
                // Convert the date string to a Date object
                let currentDayDate = new Date(currentDayInput.value.split('-').reverse().join('-'));
                // Reduce the date by one day
                currentDayDate.setDate(currentDayDate.getDate() - 1);
                // Format the new date in 'DD-MMM' format
                let formattedDate = currentDayDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).replace(' ', '-');
                // Set the new date value to the input element
                currentDayInput.value = formattedDate;

                // Check if there are any remaining clint movements data divs
                let remainingClintMovementsDataDivs = document.querySelectorAll('.clint_movements_row_class');
                if (remainingClintMovementsDataDivs.length === 1) { // Only the first element left
                    // Hide section with id 'downloaded_pdf_clint_movements_data_page'
                    document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'none';

                    // Hide the download button if there are no other important data sections visible
                    if (document.getElementById('downloaded_pdf_flight_data_page').style.display === 'none' &&
                        document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'none' &&
                        document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'none') {
                        document.getElementById('export_package_pdf_div_id').style.display = 'none';
                    }
                }
            };














            // Function to handle delete clicked clint movements data
            editClickedClintMovementsData = function (currentClintMovementsDataDivId) {

                /* Make sure the correct section is the one that is visiable */
                create_new_hotel_package_section.style.display = 'none';
                create_new_flight_package_section.style.display = 'none';
                create_new_clint_movements_paln_section.style.display = 'flex';


                /* Show and hide different icons */
                document.getElementById('clint_movements_details_inputs_submit_icon').style.display = 'none';
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
                document.getElementById('clint_movements_first_day_date_input_id').disabled = true;
                document.getElementById('clint_movements_last_day_date_input_id').disabled = true;


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
                let clintMovementsCurrentDayDateInput = clickedClintMovementsDataDiv.querySelector(`h6[id^='clint_movements_current_day_date_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';
                let clintMovementsNewCheckOutInput = clickedClintMovementsDataDiv.querySelector(`p[id^='clint_movements_new_check_out_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';
                let clintMovementsNextCityInput = clickedClintMovementsDataDiv.querySelector(`p[id^='hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';
                let clintMovementsAirportWelcomeInput = clickedClintMovementsDataDiv.querySelector(`p[id^='clint_movements_airport_welcome_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';
                let clintMovementsWholeDayActionsDetailsTextarea = clickedClintMovementsDataDiv.querySelector(`p[id^='clint_movements_whole_day_actions_details_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';
                let clintMovementsNewCheckInInput = clickedClintMovementsDataDiv.querySelector(`p[id^='clint_movements_new_check_in_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';
                let clintMovementsStoredCurrentCityValue = clickedClintMovementsDataDiv.querySelector(`p[id^='hidden_clint_movements_stored_current_city_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';
                let clintMovementsStoredNextCityValue = clickedClintMovementsDataDiv.querySelector(`p[id^='hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';

                // Assign values to inputs
                document.getElementById('clint_movements_current_day_date_input_id').value = clintMovementsCurrentDayDateInput;
                document.getElementById('clint_movements_new_check_out_input_id').value = clintMovementsNewCheckOutInput;

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
                    document.getElementById('clint_movements_current_day_date_input_id').value = '';
                    document.getElementById('clint_movements_new_check_out_input_id').value = '';
                    document.getElementById('clint_movements_next_city_input_id').value = '';
                    document.getElementById('clint_movements_airport_welcome_input_id').value = '';
                    document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value = '';
                    document.getElementById('clint_movements_new_check_in_input_id').value = '';
                    document.getElementById('clint_movements_current_city_input_id').value = '';
                    document.getElementById('clint_movements_next_city_input_id').value = '';



                    /* Hide and show different icons */
                    document.getElementById('clint_movements_details_inputs_submit_icon').style.display = 'block';
                    document.getElementById('confirm_new_clint_movements_data_row_icon').style.display = 'none';
                    document.getElementById('cancel_new_clint_movements_data_row_icon').style.display = 'none';


                    /* Reset the innerText and styling to defualt */
                    document.getElementById('clint_movements_content_section_title_text_id').innerText = 'تفاصيل الطيران';
                    document.getElementById('clint_movements_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';



                    /* Restore the (before editing) current day date */
                    document.getElementById('clint_movements_current_day_date_input_id').value = clintMovementsBeforeEditingDayDateInput;


                    /* Re-enable the clint movements dates when editing */
                    document.getElementById('clint_movements_first_day_date_input_id').disabled = false;
                    document.getElementById('clint_movements_last_day_date_input_id').disabled = false;
                }




                /* Function to confirm the new clint movements row data */
                confirmNewClintMovementsDataRow = function () {
                    // Get the clicked clint movements data row
                    let clickedClintMovementsDataDiv = document.getElementById(currentClintMovementsDataDivId);

                    // Clear the old data (and replace (the  inner data) later and not the whole div)
                    clickedClintMovementsDataDiv.innerHTML = '';


                    // Get references to all input elements for later use
                    let clintMovementsCurrentDayDateInput = document.getElementById('clint_movements_current_day_date_input_id').value;
                    let clintMovementsNewCheckOutInput = document.getElementById('clint_movements_new_check_out_input_id').value;
                    let clintMovementsNextCityInput = document.getElementById('clint_movements_next_city_input_id').value;
                    let clintMovementsAirportWelcomeInput = document.getElementById('clint_movements_airport_welcome_input_id').value;
                    let clintMovementsWholeDayActionsDetailsTextarea = document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value;
                    let clintMovementsNewCheckInInput = document.getElementById('clint_movements_new_check_in_input_id').value;


                    // In case all 'استقبال في المطار', 'تسجيل خروج', 'تسجيل دخول', 'الذهاب لمدينة جديدة' inputs are empty then stop the process
                    if (clintMovementsNewCheckOutInput === '' && clintMovementsNewCheckInInput === '' && clintMovementsWholeDayActionsDetailsTextarea === '') {
                        // Change the submit icon background color
                        clint_movements_details_inputs_submit_icon.style.backgroundColor = 'red';

                        // Set the background color of the submit icon back to default color
                        setTimeout(() => {
                            clint_movements_details_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
                        }, 500);

                    } else {
                        /* if the 'clintMovementsNextCityInput' exist then make sure there is no any clint movements visiting places */
                        if (clintMovementsNextCityInput === 'الذهاب للمطار للمغادرة' || clintMovementsAirportWelcomeInput !== '' || clintMovementsNewCheckInInput !== '') {
                            /* Check is there is value in the 'clintMovementsWholeDayActionsDetailsTextarea' */
                            if (clintMovementsWholeDayActionsDetailsTextarea !== '') {
                                // Change the submit icon background color
                                clint_movements_details_inputs_submit_icon.style.backgroundColor = 'red';

                                // Set the background color of the submit icon back to default color
                                setTimeout(() => {
                                    clint_movements_details_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
                                }, 500);

                                /* Exit the function and stop processing */
                                return;
                            }
                        }

                        // Create the HTML content for a new hotel row
                        let clintMovementsRowTableDivContent = `
                        <div><h6 id='clint_movements_current_day_date_${insertedClintMovementsRowDivUniqueId}'>${clintMovementsCurrentDayDateInput}</h6></div>
                        <div id='clint_movements_whole_day_actions_details_container_${insertedClintMovementsRowDivUniqueId}' class="clint_movements_all_p_elements_div_class"></div>
                        <div id='clint_movements_current_and_next_city_container_${insertedClintMovementsRowDivUniqueId}' class="clint_movements_row_controller" style="cursor: pointer;"></div>
                        <p id='hidden_clint_movements_stored_current_city_${insertedClintMovementsRowDivUniqueId}' style="display: none"></p>
                        <p id='hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}' style="display: none"></p>
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

                        let clintMovementsCurrentCityInputP = null;

                        if (storeClintMovementsCurrentCityInput === null) {
                            // Create a new <p> element for the current and next city
                            clintMovementsCurrentCityInputP = document.createElement('p');
                            clintMovementsCurrentCityInputP.id = `clint_movements_current_city_${insertedClintMovementsRowDivUniqueId}`;
                            clintMovementsCurrentCityInputP.innerText = clintMovementsStoredCurrentCityValue;
                        } else {
                            // Create a new <p> element for the current and next city
                            clintMovementsCurrentCityInputP = document.createElement('p');
                            clintMovementsCurrentCityInputP.id = `clint_movements_current_city_${insertedClintMovementsRowDivUniqueId}`;
                            clintMovementsCurrentCityInputP.innerText = storeClintMovementsCurrentCityInput;
                        }

                        /* Store the clint movements current city value inside the 'hidden_clint_movements_stored_current_city_' */
                        document.getElementById(`hidden_clint_movements_stored_current_city_${insertedClintMovementsRowDivUniqueId}`).innerText = clintMovementsStoredCurrentCityValue;

                        // Check if storeClintMovementsNextCityInput has a value
                        if (clintMovementsNextCityInput !== '' && clintMovementsNextCityInput !== 'الذهاب للمطار للمغادرة') {


                            if (storeClintMovementsNextCityInput === null) {
                                if (storeClintMovementsCurrentCityInput === null) {
                                    // Create and append a new <p> element with the concatenated text
                                    let pElementCombinedCity = document.createElement('p');
                                    pElementCombinedCity.id = `clint_movements_next_city_${insertedClintMovementsRowDivUniqueId}`;
                                    pElementCombinedCity.innerText = `${clintMovementsStoredCurrentCityValue}-${clintMovementsStoredNextCityValue}`;
                                    document.getElementById(`clint_movements_current_and_next_city_container_${insertedClintMovementsRowDivUniqueId}`).appendChild(pElementCombinedCity);

                                    document.getElementById(`hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}`).innerText = clintMovementsStoredNextCityValue;
                                } else {
                                    // Create and append a new <p> element with the concatenated text
                                    let pElementCombinedCity = document.createElement('p');
                                    pElementCombinedCity.id = `clint_movements_next_city_${insertedClintMovementsRowDivUniqueId}`;
                                    pElementCombinedCity.innerText = `${storeClintMovementsCurrentCityInput}-${clintMovementsStoredNextCityValue}`;
                                    document.getElementById(`clint_movements_current_and_next_city_container_${insertedClintMovementsRowDivUniqueId}`).appendChild(pElementCombinedCity);

                                    document.getElementById(`hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}`).innerText = clintMovementsStoredNextCityValue;
                                }
                            } else {
                                if (storeClintMovementsCurrentCityInput === null) {
                                    // Create and append a new <p> element with the concatenated text
                                    let pElementCombinedCity = document.createElement('p');
                                    pElementCombinedCity.id = `clint_movements_next_city_${insertedClintMovementsRowDivUniqueId}`;
                                    pElementCombinedCity.innerText = `${clintMovementsStoredCurrentCityValue}-${storeClintMovementsNextCityInput}`;
                                    document.getElementById(`clint_movements_current_and_next_city_container_${insertedClintMovementsRowDivUniqueId}`).appendChild(pElementCombinedCity);

                                    document.getElementById(`hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}`).innerText = storeClintMovementsNextCityInput;
                                } else {
                                    // Create and append a new <p> element with the concatenated text
                                    let pElementCombinedCity = document.createElement('p');
                                    pElementCombinedCity.id = `clint_movements_next_city_${insertedClintMovementsRowDivUniqueId}`;
                                    pElementCombinedCity.innerText = `${storeClintMovementsCurrentCityInput}-${storeClintMovementsNextCityInput}`;
                                    document.getElementById(`clint_movements_current_and_next_city_container_${insertedClintMovementsRowDivUniqueId}`).appendChild(pElementCombinedCity);

                                    document.getElementById(`hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}`).innerText = storeClintMovementsNextCityInput;
                                }
                            }
                        } else {

                            /* if there is no inserted clint movements next city then dont include it */
                            if (storeClintMovementsCurrentCityInput === null) {
                                // Create and append a new <p> element with the concatenated text
                                let pElementCombinedCity = document.createElement('p');
                                pElementCombinedCity.id = `clint_movements_next_city_${insertedClintMovementsRowDivUniqueId}`;
                                pElementCombinedCity.innerText = `${clintMovementsStoredCurrentCityValue}`;
                                document.getElementById(`clint_movements_current_and_next_city_container_${insertedClintMovementsRowDivUniqueId}`).appendChild(pElementCombinedCity);

                                document.getElementById(`hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}`).innerText = storeClintMovementsNextCityInput;
                            } else {
                                // Create and append a new <p> element with the concatenated text
                                let pElementCombinedCity = document.createElement('p');
                                pElementCombinedCity.id = `clint_movements_next_city_${insertedClintMovementsRowDivUniqueId}`;
                                pElementCombinedCity.innerText = `${storeClintMovementsCurrentCityInput}`;
                                document.getElementById(`clint_movements_current_and_next_city_container_${insertedClintMovementsRowDivUniqueId}`).appendChild(pElementCombinedCity);

                                document.getElementById(`hidden_clint_movements_stored_next_city_${insertedClintMovementsRowDivUniqueId}`).innerText = storeClintMovementsNextCityInput;
                            }
                        }





                        // Get all dynamically created elements with the class 'clint_movements_row_controller'
                        let clintMovementsRowImageControllers = clickedClintMovementsDataDiv.querySelectorAll('.clint_movements_row_controller');


                        // Attach click and touch event listeners to each element
                        clintMovementsRowImageControllers.forEach(element => {
                            handleClintMovementsMouseEvent(element); // Handle mouse events with click detection
                            handleClintMovementsTouchEvent(element); // Handle touch events with tap detection
                        });




                        /* Reset all variables for later refrence (when editing) */
                        storeClintMovementsCurrentCityInput = null;
                        storeClintMovementsNextCityInput = null;


                        /* Recall the functionality of the 'clint_movements_row_controller' controller */
                        arrangeClintMovementsDates()
                        createClintMovementsDragAndDropMood()

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

            /* Function to run delete the clicked clint movements row data */
            runDeleteClickedClintMovementsDataFunction = function () {
                deleteClickedClintMovementsData(currentClintMovementsDataDivId);
            }

            /* Function to run edit the clicked clint movements row data */
            runEditClickedClintMovementsDataFunction = function () {
                editClickedClintMovementsData(currentClintMovementsDataDivId);
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




        // Function to initialize drag and drop functionality for 'clint_movements_row_class' elements
        function createClintMovementsDragAndDropMood() {

            // Common function to handle dragging logic
            function handleDrag(event, touch = false) {
                if (event.target.classList.contains('clint_movements_row_controller')) {
                    event.preventDefault();
                    let draggingElement = event.target.closest('.clint_movements_row_class');
                    draggingElement.classList.add('dragging');
                    draggingElement.dataset.startY = touch ? event.touches[0].clientY : event.clientY;
                    document.addEventListener(touch ? 'touchmove' : 'mousemove', touch ? touchMove : mouseMove);
                    document.addEventListener(touch ? 'touchend' : 'mouseup', touch ? touchEnd : mouseUp);

                    // Disable scrolling
                    document.body.style.overflow = 'hidden';
                }
            }

            // Event listener for the drop zone
            let flightDropZone = document.getElementById('inserted_clint_movements_data_position_div');

            // Function to handle mouse down event
            function mouseDown(event) {
                handleDrag(event, false);
            }

            // Function to handle touch start event
            function touchStart(event) {
                handleDrag(event, true);
            }

            // Function to handle move event
            function move(event, touch = false) {
                let draggingElement = document.querySelector('.dragging');
                let startY = parseInt(draggingElement.dataset.startY || 0);
                let deltaY = (touch ? event.touches[0].clientY : event.clientY) - startY;
                draggingElement.style.transform = `translateY(${deltaY}px)`;

                let dropElements = Array.from(flightDropZone.children);
                let currentIndex = dropElements.indexOf(draggingElement);

                let targetIndex = currentIndex;
                for (let i = 0; i < dropElements.length; i++) {
                    let element = dropElements[i];
                    let rect = element.getBoundingClientRect();
                    if (i !== currentIndex && (touch ? event.touches[0].clientY : event.clientY) > rect.top && (touch ? event.touches[0].clientY : event.clientY) < rect.bottom) {
                        if (deltaY > 0 && (touch ? event.touches[0].clientY : event.clientY) > rect.bottom - 20) {
                            targetIndex = i + 1;
                        } else if (deltaY < 0 && (touch ? event.touches[0].clientY : event.clientY) < rect.top + 20) {
                            targetIndex = i;
                        }
                        break;
                    }
                }

                if (targetIndex !== currentIndex) {
                    flightDropZone.insertBefore(draggingElement, dropElements[targetIndex]);

                    /* Update the date arrangment in every drag and drop action */
                    arrangeClintMovementsDates();
                }
            }

            // Function to handle mouse move event
            function mouseMove(event) {
                move(event, false);
            }

            // Function to handle touch move event
            function touchMove(event) {
                move(event, true);
            }

            // Function to handle end event
            function end(event, touch = false) {
                let draggingElement = document.querySelector('.dragging');

                if (draggingElement) {
                    draggingElement.classList.remove('dragging');
                    draggingElement.style.transform = '';
                    draggingElement.removeAttribute('data-start-y');

                    draggingElement.classList.add('drop-transition');
                    setTimeout(() => {
                        draggingElement.classList.remove('drop-transition');
                    }, 300);
                }

                document.removeEventListener(touch ? 'touchmove' : 'mousemove', touch ? touchMove : mouseMove);
                document.removeEventListener(touch ? 'touchend' : 'mouseup', touch ? touchEnd : mouseUp);

                document.body.style.overflow = '';
            }

            // Function to handle mouse up event
            function mouseUp(event) {
                end(event, false);
            }

            // Function to handle touch end event
            function touchEnd(event) {
                end(event, true);
            }

            // Add event listeners for each insertedFlightDataDiv element
            let insertedFlightDataDivs = document.querySelectorAll('.clint_movements_row_class');

            insertedFlightDataDivs.forEach((div) => {
                div.addEventListener('mousedown', mouseDown);
                div.addEventListener('touchstart', touchStart);
            });

        }

        // Initialize drag and drop functionality
        createClintMovementsDragAndDropMood();
    }
}
