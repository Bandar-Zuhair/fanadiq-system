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
    svaeNewWebsiteLocalStorageDataName = function () {
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
            'inserted_package_data_section_page_1',
            'inserted_package_data_section_page_2',
            'inserted_package_data_section_page_3',
            'inserted_package_data_section_page_4',
            'inserted_package_data_section_page_5'
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
    svaeCurrentWebsiteLocalStorageDataName = function () {
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
            'inserted_package_data_section_page_1',
            'inserted_package_data_section_page_2',
            'inserted_package_data_section_page_3',
            'inserted_package_data_section_page_4',
            'inserted_package_data_section_page_5'
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



/* Function to pick only one website localStorage data name */
pickThisWebsiteLocalStorageDataName = function (clickedLocalStorageDataName) {
    // Get all <p> elements inside the 'all_localstorage_stored_data_names_for_importing_data_div' div
    let allDataNames1 = document.querySelectorAll('#all_localstorage_stored_data_names_for_importing_data_div h3');
    let allDataNames2 = document.querySelectorAll('#all_localstorage_stored_data_names_for_deleting_data_div h3');

    // Loop through each <p> element
    allDataNames1.forEach(function (dataName) {
        // Reset the background color of all <p> elements to the default color
        if (dataName !== clickedLocalStorageDataName) {
            dataName.style.backgroundColor = 'white';
            dataName.style.color = 'black';
        }
    });

    // Loop through each <p> element
    allDataNames2.forEach(function (dataName) {
        // Reset the background color of all <p> elements to the default color
        if (dataName !== clickedLocalStorageDataName) {
            dataName.style.backgroundColor = 'white';
            dataName.style.color = 'black';
        }
    });

    // Change the background color of the clicked <p> element based on its current background color
    if (clickedLocalStorageDataName.style.backgroundColor === 'rgb(0, 155, 0)') {
        clickedLocalStorageDataName.style.backgroundColor = 'white';
        clickedLocalStorageDataName.style.color = 'black';
    } else {
        clickedLocalStorageDataName.style.backgroundColor = 'rgb(0, 155, 0)';
        clickedLocalStorageDataName.style.color = 'white';
    }
};





function importWebsiteLocalStorageDataName() {
    let allLocalStorageDataNamesDiv = document.querySelectorAll('#all_localstorage_stored_data_names_for_importing_data_div h3');
    let found = false;

    allLocalStorageDataNamesDiv.forEach(function (clickedLocalStorageDataNameElement) {
        if (clickedLocalStorageDataNameElement.style.backgroundColor === 'rgb(0, 155, 0)') {
            found = true;


            let dropdownDivElements = document.querySelectorAll('.dropdown_div_class');
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

                document.getElementById('inserted_package_data_section_page_1').style.display = 'none';
                document.getElementById('inserted_package_data_section_page_2').style.display = 'none';
                document.getElementById('inserted_package_data_section_page_3').style.display = 'none';
                document.getElementById('inserted_package_data_section_page_4').style.display = 'none';
                document.getElementById('inserted_package_data_section_page_5').style.display = 'none';

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
            let allLocalstorageStoredDataNamesRorDeletingDataDiv = document.querySelectorAll('.dropdown_div_class');
            allLocalstorageStoredDataNamesRorDeletingDataDiv.forEach(dropdown => {
                dropdown.classList.remove('show');
            });

            overlayLayer.style.opacity = '0'; // Hide overlay

            // Remove overlay and delete box div from DOM after transition
            setTimeout(() => {
                document.body.removeChild(overlayLayer);
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

    if (visiableDivIdName === 'inserted_package_data_section_page_3') {


        // Get all elements with the class name 'flight_row_class'
        let hotelRowTableDivs = document.querySelectorAll('.flight_row_class');

        // Loop through each 'flight_row_class' element
        hotelRowTableDivs.forEach(hotelRowTableDiv => {
            // Get the 'flight_row_air_line_controller' elements inside each 'flight_row_class' element
            let hotelRowImageControllers = hotelRowTableDiv.querySelectorAll('.flight_row_flight_arrival_time_controller');

            // Loop through each 'flight_row_air_line_controller' element
            hotelRowImageControllers.forEach(hotelRowImageController => {
                /* Pass the div of the clicked 'flight_row_flight_arrival_time_controller' */
                hotelRowImageController.onclick = function (event) {
                    flightRowAirLineControllerFunction(event);
                };
            });
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
            let deleteFlightRowDiv = document.getElementById('ensure_delete_flight_data_div');
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
                // Hide section with id 'inserted_package_data_section_page_3'
                document.getElementById('inserted_package_data_section_page_3').style.display = 'none';

                // Hide the download button if there are no other important data sections visible
                if (document.getElementById('inserted_package_data_section_page_3').style.display === 'none' && document.getElementById('inserted_package_data_section_page_4').style.display === 'none' && document.getElementById('inserted_package_data_section_page_5').style.display === 'none') {
                    document.getElementById('export_package_pdf_div_id').style.display = 'none';
                }
            }
        }






        // Function to show delete the inserted flight data
        flightRowAirLineControllerFunction = function (event) {
            let deleteFlightRowDiv = document.getElementById('ensure_delete_flight_data_div');
            let clickedFlightDataDiv = event.target.closest('.flight_row_class');

            if (clickedFlightDataDiv) {
                currentFlightDataDivId = clickedFlightDataDiv.id;

                runDeleteClickedFlightDataFunction = function () {
                    deleteClickedFlightData(currentFlightDataDivId);
                }


                // Check if the overlay already exists
                let overlayLayer = document.querySelector('.black_overlay');
                if (!overlayLayer) {

                    let overlayLayer = document.createElement('div');
                    overlayLayer.classList.add('black_overlay');
                    document.body.appendChild(overlayLayer);

                    setTimeout(() => {
                        overlayLayer.style.opacity = '1';
                        deleteFlightRowDiv.style.transform = 'translate(-50%, -50%)';
                    }, 50);

                    overlayLayer.onclick = () => {
                        deleteFlightRowDiv.style.transform = 'translate(-50%, -100vh)';
                        overlayLayer.style.opacity = '0';
                        setTimeout(() => {
                            document.body.removeChild(overlayLayer);
                        }, 300);
                    };

                    overlayLayer.addEventListener('click', (event) => {
                        event.stopPropagation();
                    });
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









    } else if (visiableDivIdName === 'inserted_package_data_section_page_4') {


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
        });













        // Define a global variable to store the reference
        let currentHotelDataDivId;

        // Function to handle delete clicked hotel data
        deleteClickedHotelData = function (clickedHotelCardIdName) {
            let overlayLayer = document.querySelector('.black_overlay');

            let clickedHotelCardElement = document.getElementById(clickedHotelCardIdName);
            if (clickedHotelCardElement) {
                clickedHotelCardElement.remove();
            }

            // Hide delete button div
            let deleteHotelRowDiv = document.getElementById('ensure_delete_hotel_data_div');
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
                // Hide section with id 'inserted_package_data_section_page_4'
                document.getElementById('inserted_package_data_section_page_4').style.display = 'none';

                // Hide the download button if there are no other important data sections visible
                if (document.getElementById('inserted_package_data_section_page_3').style.display === 'none' && document.getElementById('inserted_package_data_section_page_4').style.display === 'none' && document.getElementById('inserted_package_data_section_page_5').style.display === 'none') {
                    document.getElementById('export_package_pdf_div_id').style.display = 'none';
                }
            }
        };





        // Function to show delete the inserted hotel data
        hotelRowImageControllerFunction = function (event) {
            let deleteHotelRowDiv = document.getElementById('ensure_delete_hotel_data_div');
            let clickedHotelDataDiv = event.target.closest('.hotel_row_class');

            if (clickedHotelDataDiv) {
                currentHotelDataDivId = clickedHotelDataDiv.id;

                // Create an overlay layer for better visual effect
                let overlayLayer = document.createElement('div');
                overlayLayer.classList.add('black_overlay');
                document.body.appendChild(overlayLayer);

                // Delayed opacity transition for smooth appearance
                setTimeout(() => {
                    overlayLayer.style.opacity = '1';
                    deleteHotelRowDiv.style.transform = 'translate(-50%, -50%)'; // Center div
                }, 50);

                runDeleteClickedHotelDataFunction = function () {
                    deleteClickedHotelData(currentHotelDataDivId);
                }

                // Click handler to close overlay and delete box div on click outside
                overlayLayer.onclick = () => {
                    deleteHotelRowDiv.style.transform = 'translate(-50%, -100vh)'; // Slide out
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
                    document.addEventListener('touchmove', touchMove); // Listen for touch move events
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














    } else if (visiableDivIdName === 'inserted_package_data_section_page_5') {


        // Get all elements with the class name 'flight_row_class'
        let clintMovementsRowTableDiv = document.querySelectorAll('.clint_movements_row_class');

        // Loop through each 'flight_row_class' element
        clintMovementsRowTableDiv.forEach(clintMovementsRowTableDiv => {
            // Get the 'flight_row_air_line_controller' elements inside each 'flight_row_class' element
            let clintMovementsRowImageControllers = clintMovementsRowTableDiv.querySelectorAll('.clint_movements_row_controller');

            // Loop through each 'flight_row_air_line_controller' element
            clintMovementsRowImageControllers.forEach(clintMovementsRowImageController => {
                /* Pass the div of the clicked 'clint_movements_row_controller' */
                clintMovementsRowImageController.onclick = function (event) {
                    clintMovementsRowFlightArrivalTimeFunction(event);
                };
            });
        });









        // Define a global variable to store the reference
        let currentClintMovementsDataDivId;

        // Function to handle delete clicked clint movements data
        deleteClickedClintMovementsData = function (clickedHotelCardIdName) {
            // Select the overlay layer element
            let overlayLayer = document.querySelector('.black_overlay');

            // Get the clicked element by its ID
            let clickedHotelCardElement = document.getElementById(clickedHotelCardIdName);
            if (clickedHotelCardElement) {
                // Remove the clicked element from the DOM
                clickedHotelCardElement.remove();
            }

            // Hide the delete confirmation div by translating it out of view
            let deleteClintMovementsRowDiv = document.getElementById('ensure_delete_clint_movemnt_data_div');
            deleteClintMovementsRowDiv.style.transform = 'translate(-50%, -100vh)';

            // Reduce the opacity of the overlay layer to 0 (for fade-out effect)
            overlayLayer.style.opacity = '0';

            // Remove overlay and edit/delete div from DOM after transition (300ms delay)
            setTimeout(() => {
                document.body.removeChild(overlayLayer);
            }, 300); // Match transition duration in CSS

            // Update dates after deleting a row
            updateClintMovementsDates();

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
                // Hide section with id 'inserted_package_data_section_page_5'
                document.getElementById('inserted_package_data_section_page_5').style.display = 'none';

                // Hide the download button if there are no other important data sections visible
                if (document.getElementById('inserted_package_data_section_page_3').style.display === 'none' &&
                    document.getElementById('inserted_package_data_section_page_4').style.display === 'none' &&
                    document.getElementById('inserted_package_data_section_page_5').style.display === 'none') {
                    document.getElementById('export_package_pdf_div_id').style.display = 'none';
                }
            }
        };




        // Function to update dates in clint_movements_row_class divs starting from the second element
        function updateClintMovementsDates() {
            // Select all elements with class 'clint_movements_row_class'
            let clintMovementsRows = document.querySelectorAll('.clint_movements_row_class');
            // Get the starting date input value and convert it to a Date object
            let startingDateInput = document.getElementById('store_first_clint_movments_date').innerText;
            let currentDayDate = new Date(startingDateInput.split('-').reverse().join('-'));

            // Skip the first element and start from the second one
            for (let index = 1; index < clintMovementsRows.length; index++) {
                let row = clintMovementsRows[index]; // Get the current row
                // Find the first 'div' element containing a 'p' tag within the row
                let dateDiv = row.querySelector('div:first-child p');
                if (dateDiv) {
                    let newDayDate = new Date(currentDayDate); // Create a new Date object
                    // Adjust the date by adding (index - 1) days
                    newDayDate.setDate(currentDayDate.getDate() + index - 1);
                    // Format the new date in 'DD-MMM' format
                    let formattedDate = newDayDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).replace(' ', '-');
                    // Set the formatted date as the inner text of the 'p' tag
                    dateDiv.innerText = formattedDate;
                }
            }
        }



        /* Function to handel clint movements row div click */
        clintMovementsRowFlightArrivalTimeFunction = function (event) {
            let deleteclintMovementsRowDiv = document.getElementById('ensure_delete_clint_movemnt_data_div');
            let clickedclintMovementsDataDiv = event.target.closest('.clint_movements_row_class');


            if (clickedclintMovementsDataDiv) {
                currentClintMovementsDataDivId = clickedclintMovementsDataDiv.id;


                // Create an overlay layer for better visual effect
                let overlayLayer = document.createElement('div');
                overlayLayer.classList.add('black_overlay');
                document.body.appendChild(overlayLayer);

                // Delayed opacity transition for smooth appearance
                setTimeout(() => {
                    overlayLayer.style.opacity = '1';
                    deleteclintMovementsRowDiv.style.transform = 'translate(-50%, -50%)'; // Center div
                }, 50);

                runDeleteClickedClintMovementsDataFunction = function () {
                    deleteClickedClintMovementsData(currentClintMovementsDataDivId);
                }

                // Click handler to close overlay and delete box div on click outside
                overlayLayer.onclick = () => {
                    deleteclintMovementsRowDiv.style.transform = 'translate(-50%, -100vh)'; // Slide out
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
            }
        }




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
                    updateClintMovementsDates();
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




// Clear all data from localStorage
/* localStorage.clear(); */
