localStorageControllerFunction = function (clickedButton) {


    if (clickedButton === 'تخزين') {

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







        /* Save new website data to the localstorage */
        svaeNewWebsiteLocalStorageDataName = function () {
            let localStorageNewSaveDataNameInput = document.getElementById('localstorage_new_save_data_name_input_id').value;
            let localstorageNewSaveButton = document.getElementById('localstorage_new_save_button_id');
        
            /* If there is no value in the 'localstorage_new_save_data_name_input_id' input, stop the process */
            if (localStorageNewSaveDataNameInput === '') {
                // Change the submit icon background color
                localstorageNewSaveButton.style.backgroundColor = 'red';
        
                // Set the background color of the submit icon back to the default color
                setTimeout(() => {
                    localstorageNewSaveButton.style.backgroundColor = 'darkorange';
                }, 500);
        
                return;
            }
        
            // Initialize an array in local storage if it doesn't exist
            let savedWebsiteDataArray = JSON.parse(localStorage.getItem('savedWebsiteDataArray')) || [];
        
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
        
            // Change the submit icon background color to green
            localstorageNewSaveButton.style.backgroundColor = 'rgb(0, 255, 0)';
        
            // Set the background color of the submit icon back to the default color
            setTimeout(() => {
                localstorageNewSaveButton.style.backgroundColor = 'darkorange';
            }, 500);
        
            // Add the new object to the array
            savedWebsiteDataArray.push(newObject);
        
            // Save the updated array to local storage
            localStorage.setItem('savedWebsiteDataArray', JSON.stringify(savedWebsiteDataArray));
        
            localStorageStoreNewDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
            overlayLayer.style.opacity = '0'; // Hide overlay
        
            // Remove overlay and delete box div from DOM after transition
            setTimeout(() => {
                document.body.removeChild(overlayLayer);
            }, 300); // Match transition duration in CSS
        
            /* Reset the input value after saving a new localStorage website data */
            localstorage_new_save_data_name_input_id.value = '';
        }
        








    } else if (clickedButton === 'إستعادة') {

        /* Get the 'localstorage_save_name_input_div' and show it */
        let localStorageStoreNewDataDiv = document.getElementById('localstorage_import_stored_data_names_div');

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







        // Function to update the displayed local storage data names
        updateLocalStorageDataNames();

        /* Function to update the displayed local storage data names */
        function updateLocalStorageDataNames() {
            // Get the 'allLocalstorageStoredDataNamesForImportingDataDiv' div
            let allLocalstorageStoredDataNamesForImportingDataDiv = document.getElementById('all_localstorage_stored_data_names_for_importing_data_div');

            // Clear existing <p> elements
            allLocalstorageStoredDataNamesForImportingDataDiv.innerHTML = '';

            // Get the saved data array from local storage
            let savedWebsiteDataArray = JSON.parse(localStorage.getItem('savedWebsiteDataArray')) || [];

            // Create new <p> elements based on the saved data array
            savedWebsiteDataArray.forEach(data => {
                let pElement = document.createElement('p');
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
            let allDataNames = document.querySelectorAll('#all_localstorage_stored_data_names_for_importing_data_div p');

            // Loop through each <p> element
            allDataNames.forEach(function (dataName) {
                // Reset the background color of all <p> elements to the default color
                if (dataName !== clickedLocalStorageDataName) {
                    dataName.style.backgroundColor = 'rgb(0, 65, 111)';
                }
            });

            // Change the background color of the clicked <p> element based on its current background color
            if (clickedLocalStorageDataName.style.backgroundColor === 'rgb(0, 155, 0)') {
                clickedLocalStorageDataName.style.backgroundColor = 'rgb(0, 65, 111)';
            } else {
                clickedLocalStorageDataName.style.backgroundColor = 'rgb(0, 155, 0)';
            }
        };





        /* Function to import the clicked localStorage data name */
        importWebsiteLocalStorageDataName = function () {
            // Get all <p> elements inside the 'all_localstorage_stored_data_names_for_importing_data_div' div
            let allLocalStorageDataNamesDiv = document.querySelectorAll('#all_localstorage_stored_data_names_for_importing_data_div p');
            let found = false;

            // Loop through each <p> element
            allLocalStorageDataNamesDiv.forEach(function (clickedLocalStorageDataNameElement) {
                // Check if any <p> element has a background color 'rgb(0, 155, 0)'
                if (clickedLocalStorageDataNameElement.style.backgroundColor === 'rgb(0, 155, 0)') {
                    found = true;

                    // Change the submit button background color
                    localstorage_import_saved_localstorage_data_name_button_id.style.backgroundColor = 'rgb(0, 255, 0)';
                    setTimeout(() => {
                        localstorage_import_saved_localstorage_data_name_button_id.style.backgroundColor = 'darkorange';
                    }, 500);

                    // Hide the div element with the overlay on submit
                    localStorageStoreNewDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
                    overlayLayer.style.opacity = '0'; // Hide overlay
                    setTimeout(() => {
                        document.body.removeChild(overlayLayer);
                    }, 300); // Match transition duration in CSS

                    // Get the saved data array from local storage
                    let savedWebsiteDataArray = JSON.parse(localStorage.getItem('savedWebsiteDataArray')) || [];

                    // Find the object with the name matching the clicked <p> element
                    let clickedDataName = clickedLocalStorageDataNameElement.innerText;
                    let matchingObject = savedWebsiteDataArray.find(data => data.name === clickedDataName);

                    if (matchingObject && matchingObject.elements) {

                        // Get references to all input elements and reset their values
                        document.getElementById('inserted_clint_data_position_div').innerHTML = '';
                        document.getElementById('inserted_flight_data_position_div').innerHTML = '';
                        document.getElementById('inserted_hotel_data_position_div').innerHTML = '';
                        document.getElementById('inserted_clint_movements_data_position_div').innerHTML = '';
                        document.getElementById('inserted_package_data_position_div').innerHTML = '';
                        clint_movements_rules_div.innerHTML = `
                            <p onclick="runDeleteThisClintMovementsRule(this)">وقت الدخول للفنادق الساعة 2 او 3 ظهراً ووقت الخروج 12 ظهرا</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">غرف الفنادق غير متصلة، والفنادق التي توفر غرف متصلة تعتمد على التوافرات لديهم</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">يفضل دفع مبلغ التأمين كاش عند دخول الفندق او الفيلا</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">خط سير البرنامج يتم تطبيقه كما تم اعتماده سابقاً ولا يحق للعميل تغييره، وفي حالة تم التغيير سوف يترتب على ذلك مبالغ اضافية</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">مدة الجولات 8 ساعات يومياً (من بداية صعود العميل مع السائق)</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">تبدا الجولات اليومية من الساعة 8 صباحاً الى 11 مساء</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">الرجاء عدم ترك الاغراض الثمينة داخل السيارة (لا نتحمل اي مسؤولية عن ضياعها)</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">السعر لا يشمل اي دخوليات للحدائق و المنتزهات</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">الرجاء الترتيب مع السائق بموعد خروجك لليوم التالي</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">يتم تغيير السائق في كل مدينة</p>
                            <p onclick="runDeleteThisClintMovementsRule(this)">السعر يشمل شرائح اتصال، وعند انتهاء باقة النت يتم شحنها من قبلكم</p>
                        `;

                        // Hide all sections
                        document.getElementById('inserted_package_data_section_page_1').style.display = 'none';
                        document.getElementById('inserted_package_data_section_page_2').style.display = 'none';
                        document.getElementById('inserted_package_data_section_page_3').style.display = 'none';
                        document.getElementById('inserted_package_data_section_page_4').style.display = 'none';
                        document.getElementById('inserted_package_data_section_page_5').style.display = 'none';

                        // Show only the divs whose IDs exist in the target object and apply their innerHTML content
                        for (let divId in matchingObject.elements) {
                            let htmlSectionPdfPageDiv = document.getElementById(divId);
                            htmlSectionPdfPageDiv.style.display = 'block';
                            htmlSectionPdfPageDiv.innerHTML = matchingObject.elements[divId];



                            /* Run the reActive Drag And Drop Functionlity and pass the found 'inserted_package_data_section_page_' id name */
                            reActiveDragAndDropFunctionality(htmlSectionPdfPageDiv.id);
                        }




                        /* Hide The 'localstorage_import_stored_data_names_div' with the 'overlayLayer' */
                        localStorageStoreNewDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
                        overlayLayer.style.opacity = '0'; // Hide overlay


                    }
                }
            });

            // If no <p> element with the 'rgb(0, 155, 0)' is found
            if (!found) {
                // Change the submit button background color to red
                localstorage_import_saved_localstorage_data_name_button_id.style.backgroundColor = 'red';
                setTimeout(() => {
                    localstorage_import_saved_localstorage_data_name_button_id.style.backgroundColor = 'darkorange';
                }, 500);

            }
        };















    } else if (clickedButton === 'حذف') {
        /* Get the 'localstorage_save_name_input_div' and show it */
        let localStorageDeleteWebsiteLocalStorageDataDiv = document.getElementById('localstorage_delete_stored_data_names_div');

        // Create an overlay layer for better visual effect
        let overlayLayer = document.createElement('div');
        overlayLayer.classList.add('black_overlay');
        document.body.appendChild(overlayLayer);

        // Delayed opacity transition for smooth appearance
        setTimeout(() => {
            overlayLayer.style.opacity = '1';
            localStorageDeleteWebsiteLocalStorageDataDiv.style.transform = 'translate(-50%, -50%)'; // Center div
        }, 50);

        // Click handler to close overlay and delete box div on click outside
        overlayLayer.onclick = () => {
            localStorageDeleteWebsiteLocalStorageDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
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



        // Function to update the displayed local storage data names
        updateLocalStorageDataNames();

        /* Function to update the displayed local storage data names */
        function updateLocalStorageDataNames() {
            // Get the 'allLocalstorageStoredDataNamesForDeletingDataDiv' div
            let allLocalstorageStoredDataNamesForDeletingDataDiv = document.getElementById('all_localstorage_stored_data_names_for_deleting_data_div');

            // Clear existing <p> elements
            allLocalstorageStoredDataNamesForDeletingDataDiv.innerHTML = '';

            // Get the saved data array from local storage
            let savedWebsiteDataArray = JSON.parse(localStorage.getItem('savedWebsiteDataArray')) || [];

            // Create new <p> elements based on the saved data array
            savedWebsiteDataArray.forEach(data => {
                let pElement = document.createElement('p');
                pElement.innerText = data.name;
                pElement.onclick = function () {
                    pickThisWebsiteLocalStorageDataName(pElement);
                };
                allLocalstorageStoredDataNamesForDeletingDataDiv.appendChild(pElement);
            });
        }






        /* Function to pick only one website localStorage data name */
        pickThisWebsiteLocalStorageDataName = function (clickedLocalStorageDataName) {
            // Get all <p> elements inside the 'all_localstorage_stored_data_names_for_deleting_data_div' div
            let allDataNames = document.querySelectorAll('#all_localstorage_stored_data_names_for_deleting_data_div p');

            // Loop through each <p> element
            allDataNames.forEach(function (dataName) {
                // Reset the background color of all <p> elements to the default color
                if (dataName !== clickedLocalStorageDataName) {
                    dataName.style.backgroundColor = 'rgb(0, 65, 111)';
                }
            });

            // Change the background color of the clicked <p> element based on its current background color
            if (clickedLocalStorageDataName.style.backgroundColor === 'rgb(0, 155, 0)') {
                clickedLocalStorageDataName.style.backgroundColor = 'rgb(0, 65, 111)';
            } else {
                clickedLocalStorageDataName.style.backgroundColor = 'rgb(0, 155, 0)';
            }
        };




        /* Function to delete the localstorage data name */
        deleteWebsiteLocalStorageDataName = function () {
            // Get the 'allLocalstorageStoredDataNamesRorDeletingDataDiv' div
            let allLocalstorageStoredDataNamesRorDeletingDataDiv = document.getElementById('all_localstorage_stored_data_names_for_deleting_data_div');

            // Get all p elements inside the 'allLocalstorageStoredDataNamesRorDeletingDataDiv'
            let pElements = allLocalstorageStoredDataNamesRorDeletingDataDiv.getElementsByTagName('p');

            // Loop through all p elements
            for (let p of pElements) {
                // Check the background color
                let bgColor = window.getComputedStyle(p).backgroundColor;
                if (bgColor === 'rgb(0, 155, 0)') {
                    // Print the innerText of the p element
                    console.log(p.innerText);

                    // Change the submit button background color
                    localstorage_delete_saved_localstorage_data_name_button_id.style.backgroundColor = 'rgb(0, 255, 0)';
                    setTimeout(() => {
                        localstorage_delete_saved_localstorage_data_name_button_id.style.backgroundColor = 'darkorange';
                    }, 500);

                    // Search and delete the object in localStorage
                    let savedWebsiteDataArray = JSON.parse(localStorage.getItem('savedWebsiteDataArray')) || [];
                    savedWebsiteDataArray = savedWebsiteDataArray.filter(item => item.name !== p.innerText);
                    localStorage.setItem('savedWebsiteDataArray', JSON.stringify(savedWebsiteDataArray));


                    /* Hide The 'localstorage_delete_stored_data_names_div' with the 'overlayLayer' */
                    localStorageDeleteWebsiteLocalStorageDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
                    overlayLayer.style.opacity = '0'; // Hide overlay

                    // Remove overlay and delete box div from DOM after transition
                    setTimeout(() => {
                        document.body.removeChild(overlayLayer);
                    }, 300); // Match transition duration in CSS

                } else {
                    // Change the submit button background color
                    localstorage_delete_saved_localstorage_data_name_button_id.style.backgroundColor = 'red';
                    setTimeout(() => {
                        localstorage_delete_saved_localstorage_data_name_button_id.style.backgroundColor = 'darkorange';
                    }, 500);
                }
            }


        }

    }

}



























/* Function to re-active the drag and drop functionality (copied code for the main inserted daa js code) */
reActiveDragAndDropFunctionality = function (visiableDivIdName) {

    if (visiableDivIdName === 'inserted_package_data_section_page_2') {

        // Get the dynamically created 'flightRowAirLineController' element
        let flightRowAirLineController = document.querySelector('.flight_row_air_line_controller');


        // Praoer drag-and-drop functionality for the newly added flight row
        createFlightDragAndDropMood();

        // Function to prepare drag and drop 'insertedHotelDataDiv' elements functionality
        function createFlightDragAndDropMood() {

            // Function to show edit or delete the inserted flight data
            flightRowAirLineController.onclick = (event) => {
                let deleteFlightRowDiv = document.getElementById('ensure_delete_flight_data_div');
                let clickedFlightDataDiv = event.target.closest('.flight_row_class');


                runDeleteClickedFlightDataFunction = function () {
                    deleteClickedFlightData(currentFlightDataDivId);
                }


                if (clickedFlightDataDiv) {
                    currentFlightDataDivId = clickedFlightDataDiv.id;

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
            };



            // Common function to handle dragging logic
            function handleDrag(event, touch = false) {
                if (event.target.classList.contains('flight_row_air_line_controller')) {
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










    } else if (visiableDivIdName === 'inserted_package_data_section_page_3') {


        // Get the dynamically created 'hotelRowImageController' element
        let hotelRowImageController = document.querySelector('.hotel_row_image_controller');


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
                // Hide section with id 'inserted_package_data_section_page_3'
                document.getElementById('inserted_package_data_section_page_3').style.display = 'none';

                // Hide the download button if there are no other important data sections visible
                if (document.getElementById('inserted_package_data_section_page_2').style.display === 'none' && document.getElementById('inserted_package_data_section_page_3').style.display === 'none' && document.getElementById('inserted_package_data_section_page_4').style.display === 'none') {
                    document.getElementById('export_package_pdf_div_id').style.display = 'none';
                }
            }
        };

        // Function to prepare drag and drop 'insertedHotelDataDiv' elements functionality
        function createHotelDragAndDropMood() {

            // Function to show edit or delete the inserted hotel data
            hotelRowImageController.onclick = (event) => {
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












    } else if (visiableDivIdName === 'inserted_package_data_section_page_4') {

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
                // Hide section with id 'inserted_package_data_section_page_4'
                document.getElementById('inserted_package_data_section_page_4').style.display = 'none';

                // Hide the download button if there are no other important data sections visible
                if (document.getElementById('inserted_package_data_section_page_2').style.display === 'none' &&
                    document.getElementById('inserted_package_data_section_page_3').style.display === 'none' &&
                    document.getElementById('inserted_package_data_section_page_4').style.display === 'none') {
                    document.getElementById('export_package_pdf_div_id').style.display = 'none';
                }
            }
        };




        // Function to update dates in clint_movements_row_class divs starting from the second element
        function updateClintMovementsDates() {
            // Select all elements with class 'clint_movements_row_class'
            let clintMovementsRows = document.querySelectorAll('.clint_movements_row_class');
            // Get the starting date input value and convert it to a Date object
            let startingDateInput = document.getElementById('clint_movements_first_day_date_input_id').value;
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

        // Function to initialize drag and drop functionality for 'clint_movements_row_class' elements
        function createClintMovementsDragAndDropMood() {
            // Loop through each ID to initialize drag and drop functionality
            for (let i = 0; i < insertedClintMovementsRowDivUniqueId; i++) {
                // Get the clint movements row div by its ID
                let clintMovementsRowTableDiv = document.getElementById(`clint_movements_row_id_${i}`);
                if (clintMovementsRowTableDiv) {
                    // Get the row controller element within the row
                    let clintMovementsRowController = clintMovementsRowTableDiv.querySelector('.clint_movements_row_controller');

                    // Handle click on 'clint_movements_row_class' elements
                    clintMovementsRowController.onclick = (event) => {
                        // Get the delete confirmation div
                        let deleteClintMovementsRowDiv = document.getElementById('ensure_delete_clint_movemnt_data_div');
                        // Find the closest 'clint_movements_row_class' element to the clicked element
                        let clickedClintMovementsDataDiv = event.target.closest('.clint_movements_row_class');

                        if (clickedClintMovementsDataDiv) {
                            // Store the ID of the clicked element in the global variable
                            currentClintMovementsDataDivId = clickedClintMovementsDataDiv.id;

                            // Create an overlay layer for better visual effect
                            let overlayLayer = document.createElement('div');
                            overlayLayer.classList.add('black_overlay');
                            document.body.appendChild(overlayLayer);

                            // Delayed opacity transition for smooth appearance
                            setTimeout(() => {
                                overlayLayer.style.opacity = '1';
                                deleteClintMovementsRowDiv.style.transform = 'translate(-50%, -50%)'; // Center div
                            }, 50);

                            // Define the function to delete the clicked clint movements data
                            runDeleteClickedClintMovementsDataFunction = function () {
                                deleteClickedClintMovementsData(currentClintMovementsDataDivId);
                            }

                            // Click handler to close overlay and delete box div on click outside
                            overlayLayer.onclick = () => {
                                deleteClintMovementsRowDiv.style.transform = 'translate(-50%, -100vh)'; // Slide out
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

                    // Handle drag and drop functionality
                    clintMovementsRowController.addEventListener('mousedown', handleDrag);
                    clintMovementsRowController.addEventListener('touchstart', handleDrag);
                }
            }

            // Common function to handle dragging logic
            function handleDrag(event) {
                if (event.target.classList.contains('clint_movements_row_controller')) {
                    event.preventDefault();
                    // Find the closest 'clint_movements_row_class' element to the dragged element
                    let draggingElement = event.target.closest('.clint_movements_row_class');
                    draggingElement.classList.add('dragging'); // Add 'dragging' class
                    // Store the starting Y position in the data attribute
                    draggingElement.dataset.startY = event.clientY || event.touches[0].clientY;
                    // Add event listeners for move and end events
                    document.addEventListener('mousemove', move);
                    document.addEventListener('touchmove', move);
                    document.addEventListener('mouseup', end);
                    document.addEventListener('touchend', end);

                    // Disable scrolling
                    document.body.style.overflow = 'hidden';
                }
            }

            // Function to handle move event
            function move(event) {
                let draggingElement = document.querySelector('.dragging');
                if (draggingElement) {
                    // Get the starting Y position
                    let startY = parseInt(draggingElement.dataset.startY || 0);
                    // Calculate the change in Y position
                    let deltaY = (event.clientY || event.touches[0].clientY) - startY;
                    // Apply the transformation to the dragged element
                    draggingElement.style.transform = `translateY(${deltaY}px)`;

                    // Get all elements with class 'clint_movements_row_class'
                    let dropElements = Array.from(document.querySelectorAll('.clint_movements_row_class'));
                    let currentIndex = dropElements.indexOf(draggingElement); // Get the index of the dragged element

                    let targetIndex = currentIndex; // Initialize the target index
                    for (let i = 0; i < dropElements.length; i++) {
                        let element = dropElements[i];
                        let rect = element.getBoundingClientRect(); // Get the bounding rectangle of the element
                        // Check if the current position is within the bounds of the element
                        if (i !== currentIndex && (event.clientY || event.touches[0].clientY) > rect.top && (event.clientY || event.touches[0].clientY) < rect.bottom) {
                            // Update the target index based on the direction of the drag
                            if (deltaY > 0 && (event.clientY || event.touches[0].clientY) > rect.bottom - 20) {
                                targetIndex = i + 1;
                            } else if (deltaY < 0 && (event.clientY || event.touches[0].clientY) < rect.top + 20) {
                                targetIndex = i;
                            }
                            break;
                        }
                    }

                    // Move the dragged element to the target position
                    if (targetIndex !== currentIndex) {
                        let dropZone = document.getElementById('inserted_clint_movements_data_position_div');
                        dropZone.insertBefore(draggingElement, dropElements[targetIndex]);
                    }
                }
            }

            // Function to handle end event
            function end(event) {
                let draggingElement = document.querySelector('.dragging');
                if (draggingElement) {
                    draggingElement.classList.remove('dragging'); // Remove 'dragging' class
                    draggingElement.style.transform = ''; // Reset the transformation
                    draggingElement.removeAttribute('data-start-y'); // Remove the data attribute
                    draggingElement.classList.add('drop-transition'); // Add 'drop-transition' class
                    // Remove 'drop-transition' class after 300ms
                    setTimeout(() => {
                        draggingElement.classList.remove('drop-transition');
                        updateClintMovementsDates(); // Update dates after drag-and-drop
                    }, 300);
                }

                // Remove event listeners for move and end events
                document.removeEventListener('mousemove', move);
                document.removeEventListener('touchmove', move);
                document.removeEventListener('mouseup', end);
                document.removeEventListener('touchend', end);
                document.body.style.overflow = ''; // Enable scrolling
            }
        }

        // Initialize drag and drop functionality
        createClintMovementsDragAndDropMood();
    }

}




// Clear all data from localStorage
/* localStorage.clear(); */
