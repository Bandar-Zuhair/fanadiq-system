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
            let saveButton = document.getElementById('localstorage_new_save_button_id');

            /* If there is no value in the 'localstorage_new_save_data_name_input_id' input, stop the process */
            if (localStorageNewSaveDataNameInput === '') {
                // Change the submit icon background color
                saveButton.style.backgroundColor = 'red';

                // Set the background color of the submit icon back to the default color
                setTimeout(() => {
                    saveButton.style.backgroundColor = 'darkorange';
                }, 500);

                return;
            }

            // Change the submit icon background color to green
            saveButton.style.backgroundColor = 'rgb(0, 255, 0)';

            // Set the background color of the submit icon back to the default color
            setTimeout(() => {
                saveButton.style.backgroundColor = 'darkorange';
            }, 500);

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
            divIds.forEach(divId => {
                let element = document.getElementById(divId);
                if (element && element.style.display !== 'none' && element.offsetWidth > 0 && element.offsetHeight > 0) {
                    newObject.elements[divId] = element.outerHTML;
                }
            });

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
                        // Print the div IDs that exist in the object
                        for (let divId in matchingObject.elements) {
                            console.log(divId);
                        }

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
                            let element = document.getElementById(divId);
                            if (element) {
                                element.style.display = 'block';
                                element.innerHTML = matchingObject.elements[divId];
                            }
                        }


                        /* Hide The 'localstorage_import_stored_data_names_div' with the 'overlayLayer' */
                        localStorageStoreNewDataDiv.style.transform = 'translate(-50%, -150vh)'; // Slide out
                        overlayLayer.style.opacity = '0'; // Hide overlay

                        // Remove overlay and delete box div from DOM after transition
                        setTimeout(() => {
                            document.body.removeChild(overlayLayer);
                        }, 300); // Match transition duration in CSS

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









// Clear all data from localStorage
/* localStorage.clear(); */