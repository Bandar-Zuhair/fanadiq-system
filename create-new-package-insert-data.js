/* Variable to save a number for counting functionality (Ex: hotel row table unique id..?) */
let insertedHotelDataDivUniqueId = 1;
let insertedFlightDataDivUniqueId = 1;
let insertedClintMovementsRowDivUniqueId = 1;


/* Function for checking if ready or no to insert the data */
// Function to check if all inputs have values
checkInputsToInsertData = function (clickedButtonId) {



    // Check if the clicked button is the 'clint_inputs_submit_icon'
    if (clickedButtonId === 'clint_inputs_submit_icon') {
        // Get references to all input elements for later use
        let personAmountInput = document.getElementById('hotel_person_amount_input_id').value;
        let packageStartDateInput = document.getElementById('package_start_date_input_id').value;
        let packageEndDateInput = document.getElementById('package_end_date_input_id').value;
        let packageTotalNightsInput = document.getElementById('package_total_nights_input_id').value;
        let clintCompanyNameInput = document.getElementById('clint_company_name_input_id').value;
        let honeymoonCheckbox = document.getElementById('honeymoon_checkbox');
        let guysCheckbox = document.getElementById('guys_checkbox');
        let familyCheckbox = document.getElementById('family_checkbox');
        let twoPeopleCheckbox = document.getElementById('two_people_checkbox');

        // Check if any of the input values are empty
        if (personAmountInput === '' || packageStartDateInput === '' || packageEndDateInput === '') {
            // Change the submit icon color to red to indicate error
            clint_inputs_submit_icon.style.backgroundColor = 'red';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_inputs_submit_icon.style.backgroundColor = 'darkorange';
            }, 500);
        } else {
            // Change the submit icon color to green to indicate success
            clint_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_inputs_submit_icon.style.backgroundColor = 'darkorange';
            }, 500);

            if (clintCompanyNameInput !== '') {
                // Create a new image element for the company logo
                let insertedCompanyNameLogoImage = document.createElement('img');
                // Replace spaces with dashes in the company name
                let companyNameWithoutSpaces = clintCompanyNameInput.replace(/\s+/g, '-');
                insertedCompanyNameLogoImage.src = `صور-الشركات/${companyNameWithoutSpaces}.jpg`; // Assuming this path is correct
                insertedCompanyNameLogoImage.classList.add('inserted_company_name_logo');
                insertedCompanyNameLogoImage.onclick = function (event) {
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

                // Clear previous company logo and insert the new logo div
                document.getElementById('inserted_company_name_image_position_div').innerHTML = '';
                document.getElementById('inserted_company_name_image_position_div').appendChild(insertedCompanyNameLogoImage);


            }else{
                // Clear previous company logo and insert the new logo div
                document.getElementById('inserted_company_name_image_position_div').innerHTML = '';
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

            let clintPackageTypeH6 = document.getElementById('clint_package_type_h6');

            /* Check which checkbox is checked then include the text in the content */
            if (honeymoonCheckbox.checked) {
                clintPackageTypeH6.innerHTML = 'بكج شهر عسل 💝';
            } else if (guysCheckbox.checked) {
                clintPackageTypeH6.innerHTML = 'بكج شباب ✨';
            } else if (familyCheckbox.checked) {
                clintPackageTypeH6.innerHTML = 'بكج عائلة 👨‍👩‍👧‍👦';
            } else if (twoPeopleCheckbox.checked) {
                clintPackageTypeH6.innerHTML = 'بكج شخصين ✈️';
            } else {
                clintPackageTypeH6.innerHTML = 'بكج جديد ✨';
            }

            let insertedClintDataRowDivContent = `
                <div>
                    <p>${personAmountInput}</p>
                </div>
                <div>
                    <p>${packageStartDateInput}</p>
                </div>
                <div>
                    <p>${packageEndDateInput}</p>
                </div>
                <div>
                    <p>${packageTotalNightsInput}</p>
                </div>
            `;

            let insertedClintDataRowDiv = document.createElement('div');
            insertedClintDataRowDiv.className = 'clint_data_row_class';
            insertedClintDataRowDiv.innerHTML = insertedClintDataRowDivContent;

            // Clear previous client data and insert the new data div
            let insertedClintDataPositionDiv = document.getElementById('inserted_clint_data_position_div');
            insertedClintDataPositionDiv.innerHTML = ''; // Clear the existing content
            insertedClintDataPositionDiv.appendChild(insertedClintDataRowDiv);

            /* Show up the 'downloaded_pdf_clint_data_page' section */
            document.getElementById('downloaded_pdf_clint_data_page').style.display = 'block';
        }



















        /* Check if all package including data inputs are filled */
    } else if (clickedButtonId === 'package_including_data_inputs_submit_icon') {
        // Array of checkbox IDs
        let checkboxIds = [
            'privet_car_with_driver_to_welcome_and_etc_checkbox',
            'hotel_booking_with_breakfast_for_2_people_checkbox',
            'pertol_and_driver_living_cost_checkbox',
            'welcome_goodbye_hotel_delivery_checkbox',
            'customer_service_24_hour_checkbox',
            'sms_card_with_internet_checkbox',
            'all_taxes_covered_but_only_for_bali_no_checkbox',
            'inner_flight_tickets_checkbox',
            'outer_flight_tickets_checkbox',
            'placese_visiting_cost_checkbox'
        ];

        // Get references to the text areas
        let packageIncludingDataTextArea = document.getElementById('package_details_textarea_id').value;
        let packageTotalPriceReayText = document.getElementById('package_totla_price_input_id').value;
        let smsCardWithInternetAmountInputReayText = document.getElementById('sms_card_with_internet_amount_input_id').value;
        let innerFlightTicketsAmountInputReayText = document.getElementById('inner_flight_tickets_amount_input_id').value;


        // Show success message
        package_including_data_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
        setTimeout(() => {
            package_including_data_inputs_submit_icon.style.backgroundColor = 'darkorange';
        }, 500);

        // Create new div elements for including and not including data
        let insertedPackageIncludingDataDiv = document.createElement('div');
        insertedPackageIncludingDataDiv.id = 'inserted_package_including_data_div';
        insertedPackageIncludingDataDiv.className = 'inserted_package_including_and_not_icluding_data_div_class';

        let insertedPackageNotIncludingDataDiv = document.createElement('div');
        insertedPackageNotIncludingDataDiv.id = 'inserted_package_not_including_data_div';
        insertedPackageNotIncludingDataDiv.className = 'inserted_package_including_and_not_icluding_data_div_class';

        // Loop over checkboxes
        checkboxIds.forEach(id => {
            let checkbox = document.getElementById(id);
            let label = document.querySelector(`label[for="${id}"]`);
            let p = document.createElement('p');
            let icon = document.createElement('ion-icon');

            if (checkbox.checked) {
                icon.setAttribute('name', 'checkmark-outline');
                p.appendChild(icon);

                if (id === 'sms_card_with_internet_checkbox' && smsCardWithInternetAmountInputReayText !== '') {
                    p.appendChild(document.createTextNode(` ${smsCardWithInternetAmountInputReayText}`));
                } else if (id === 'inner_flight_tickets_checkbox' && innerFlightTicketsAmountInputReayText !== '') {
                    p.appendChild(document.createTextNode(` ${innerFlightTicketsAmountInputReayText}`));
                } else {
                    p.appendChild(document.createTextNode(` ${label.innerText}`));
                }

                p.className = 'inserted_package_including_data_text';
                if (id === 'sms_card_with_internet_checkbox' || id === 'inner_flight_tickets_checkbox') {
                    p.classList.add('special_package_including_data_background_color_text');
                }
                insertedPackageIncludingDataDiv.appendChild(p);
            } else {
                icon.setAttribute('name', 'close-outline');
                p.appendChild(icon);
                p.appendChild(document.createTextNode(` ${label.innerText}`));
                p.className = 'inserted_package_not_including_data_text';
                if (id === 'sms_card_with_internet_checkbox' || id === 'inner_flight_tickets_checkbox') {
                    p.classList.add('special_package_including_data_background_color_text');
                }
                insertedPackageNotIncludingDataDiv.appendChild(p);
            }

            p.setAttribute('onclick', 'runDeleteThisPackageIncludingDataText(this)');
        });

        // Include package details text area if not empty
        if (packageIncludingDataTextArea !== '') {
            packageIncludingDataTextArea.split('\n').forEach(text => {
                if (text.trim() !== '') {
                    let p = document.createElement('p');
                    let icon = document.createElement('ion-icon');
                    icon.setAttribute('name', 'checkmark-outline');
                    p.appendChild(icon);
                    p.appendChild(document.createTextNode(` ${text.trim()}`));
                    p.className = 'inserted_package_including_data_text';
                    p.setAttribute('onclick', 'runDeleteThisPackageIncludingDataText(this)');
                    p.classList.add('special_package_including_data_background_color_text');
                    insertedPackageIncludingDataDiv.appendChild(p);
                }
            });
        }

        // Include total price if not empty
        if (packageTotalPriceReayText !== '') {
            let h6 = document.createElement('h6');
            let span = document.createElement('span');
            span.textContent = `${packageTotalPriceReayText}`;
            h6.textContent = 'إجمالي السعر ';
            h6.appendChild(span);
            h6.className = 'inserted_package_including_data_text';
            h6.setAttribute('onclick', 'runDeleteThisPackageIncludingDataText(this)');
            insertedPackageIncludingDataDiv.appendChild(h6);
        }

        // Append the data to the respective divs
        let insertedPackageIncludingDataPositionDiv = document.getElementById('inserted_package_icluding_data_position_div');
        let insertedPackageNotIncludingDataPositionDiv = document.getElementById('inserted_package_not_icluding_data_position_div');

        insertedPackageIncludingDataPositionDiv.innerHTML = '';
        insertedPackageIncludingDataPositionDiv.appendChild(insertedPackageIncludingDataDiv);

        insertedPackageNotIncludingDataPositionDiv.innerHTML = '';
        insertedPackageNotIncludingDataPositionDiv.appendChild(insertedPackageNotIncludingDataDiv);

        // Show or hide titles based on content
        let pdfSectionPackageIncludingDataTitle = document.getElementById('pdf_section_package_icluding_data_title_id');
        let pdfSectionPackageNotIncludingDataTitle = document.getElementById('pdf_section_package_not_icluding_data_title_id');

        pdfSectionPackageIncludingDataTitle.style.display = insertedPackageIncludingDataDiv.children.length > 0 ? 'block' : 'none';
        pdfSectionPackageNotIncludingDataTitle.style.display = insertedPackageNotIncludingDataDiv.children.length > 0 ? 'block' : 'none';

        // Show the 'downloaded_pdf_package_including_data_page'
        document.getElementById('downloaded_pdf_package_including_data_page').style.display = 'block';
    }




















    /* Check if all hotel data inputs are filled */
    else if (clickedButtonId === 'clint_flight_inputs_submit_icon') {

        // Get references to all input elements for later use
        let flightAirLineInput = document.getElementById('flight_air_line_input_id').value;
        let adultFlightPersonAmountInput = document.getElementById('adult_flight_person_amount_input_id').value;
        let infantFlightPersonAmountInput = document.getElementById('infant_flight_person_amount_input_id').value;
        let flightFromCityInput = document.getElementById('flight_from_city_input_id').value;
        let flightToCityInput = document.getElementById('flight_to_city_input_id').value;
        let flightDateInput = document.getElementById('flight_date_input_id').value;
        let flightFlyAwayTimeInput = document.getElementById('flight_fly_away_time_input_id').value;
        let flightArrivalTimeInput = document.getElementById('flight_arrival_time_input_id').value;





        // If Not All Inputs Are Valid, Show The Error Message
        if (flightAirLineInput === '' || adultFlightPersonAmountInput === '' || flightFromCityInput === '' || flightToCityInput === '' || flightDateInput === '') {

            /* Chnage the sumbit icon background color */
            clint_flight_inputs_submit_icon.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_flight_inputs_submit_icon.style.backgroundColor = 'darkorange';
            }, 500);


        } else {

            /* in case if the two city inputs were the same then dont continue the process */
            if (flightFromCityInput === flightToCityInput) {
                /* Chnage the sumbit icon background color */
                clint_flight_inputs_submit_icon.style.backgroundColor = 'red';

                // Set the background color of the submit icon back to default color
                setTimeout(() => {
                    clint_flight_inputs_submit_icon.style.backgroundColor = 'darkorange';
                }, 500);

            } else {
                /* Change the 'تم' button color */
                clint_flight_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
                // Set the background color of the submit icon back to default color
                setTimeout(() => {
                    clint_flight_inputs_submit_icon.style.backgroundColor = 'darkorange';
                }, 2000);








                // Create the HTML content for a new hotel row
                let flightRowTableDivContent = `
                    <div><p>${flightAirLineInput}</p></div>
                    <div><p>${adultFlightPersonAmountInput}</p>\n<p>${infantFlightPersonAmountInput}</p></div>
                    <div><p>20 كيلو لكل شخص</p></div>
                    <div><p>${flightFromCityInput}</p></div>
                    <div><p>${flightToCityInput}</p></div>
                    <div><p>${flightDateInput}</p></div>
                    <div><p>${flightFlyAwayTimeInput}</p></div>
                    <div class="flight_row_flight_arrival_time_controller inserted_flight_data_row" style="cursor: pointer;"><p class="flight_row_flight_arrival_time_controller inserted_flight_data_row">${flightArrivalTimeInput}</p></div>
                `;







                // Create a new div element to hold the flight row
                let flightRowTableDiv = document.createElement('div');
                flightRowTableDiv.id = `flight_row_id_${insertedFlightDataDivUniqueId}`; // Set a unique ID for the hotel row div
                flightRowTableDiv.classList.add('flight_row_class'); // Add a class to the div for styling
                insertedFlightDataDivUniqueId++;




                // Insert the HTML content into the newly created div
                flightRowTableDiv.innerHTML = flightRowTableDivContent;




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





                // Show and append the new flight data div
                document.getElementById('downloaded_pdf_flight_data_page').style.display = 'block';
                document.getElementById('inserted_flight_data_position_div').appendChild(flightRowTableDiv);


                /* Show the download button */
                document.getElementById('export_package_pdf_div_id').style.display = 'block';


                // Get references to all input elements and reset their values thier
                document.getElementById('flight_air_line_input_id').value = '';
                document.getElementById('adult_flight_person_amount_input_id').value = '';
                document.getElementById('infant_flight_person_amount_input_id').value = '';
                document.getElementById('flight_from_city_input_id').value = '';
                document.getElementById('flight_to_city_input_id').value = '';
                document.getElementById('flight_date_input_id').value = '';
                document.getElementById('flight_fly_away_time_input_id').value = '';
                document.getElementById('flight_arrival_time_input_id').value = '';





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
                        // Hide section with id 'downloaded_pdf_flight_data_page'
                        document.getElementById('downloaded_pdf_flight_data_page').style.display = 'none';

                        // Hide the download button if there are no other important data sections visible
                        if (document.getElementById('downloaded_pdf_flight_data_page').style.display === 'none' && document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'none' && document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'none') {
                            document.getElementById('export_package_pdf_div_id').style.display = 'none';
                        }
                    }
                }






                // Function to handle flight row div click or touch
                function flightRowAirLineControllerFunction(event) {
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

                            // Handle both click and touch events on overlay for consistency
                            let handleOverlayClick = () => {
                                deleteFlightRowDiv.style.transform = 'translate(-50%, -100vh)';
                                overlayLayer.style.opacity = '0';
                                setTimeout(() => {
                                    document.body.removeChild(overlayLayer);
                                }, 300);
                            };

                            overlayLayer.addEventListener('click', handleOverlayClick);
                            overlayLayer.addEventListener('touchstart', handleOverlayClick); // Add touch event handling

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
            }

        }

















        /* Check if all package data inputs are filled */
    } else if (clickedButtonId === 'hotel_inputs_submit_icon') {
        // Get references to all input elements for later use
        let hotelLocationReadyText = document.getElementById('hotel_location_input_id').value;
        let hotelAreaReadyText = document.getElementById('hotel_area_input_id').value;
        let hotelNameReadyText = document.getElementById('hotel_name_input_id').value;
        let hotelCheckInReadyText = document.getElementById('hotel_check_in_input_id').value;
        let hotelCheckOutReadyText = document.getElementById('hotel_check_out_input_id').value;
        let totalNightsReadyText = document.getElementById('hotel_total_nights_input_id').value;
        let hotelRoomTypeDescriptionInput = document.getElementById('hotel_room_type_description_input_id').value;
        let hotelRoomAmountInput = document.getElementById('hotel_room_amount_input_id').value;
        let hotelBreakfastPeopleAmountInput = document.getElementById('hotel_breakfast_people_amount_input_id').value;
        let roomExtraInfoReadyText = document.getElementById('room_extra_info_textarea_id').value;





        if (hotelLocationReadyText === '' || hotelNameReadyText === '' || hotelCheckInReadyText === '' || hotelCheckOutReadyText === '' || totalNightsReadyText === '' || hotelRoomTypeDescriptionInput === '') {

            // Change the sumbit icon background color
            hotel_inputs_submit_icon.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                hotel_inputs_submit_icon.style.backgroundColor = 'darkorange';
            }, 500);

        } else {
            // Change the sumbit icon background color
            hotel_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                hotel_inputs_submit_icon.style.backgroundColor = 'darkorange';
            }, 500);









            // Convert the hotel name to lowercase and replace spaces with hyphens to create a suitable image filename
            let hotelImgSrcReadyText = hotelNameReadyText.toLowerCase().replace(/\s+/g, '-');


            // Concatenate the room description with a breakfast note if the checkbox is checked
            let roomDescription = hotelRoomTypeDescriptionInput + (hotelBreakfastPeopleAmountInput !== '' ? ` ${hotelBreakfastPeopleAmountInput}` : '');

            // Create the HTML content for a new hotel row
            let hotelRowTableDivContent = `
                <div><p>${hotelNameReadyText}</p></div>
                <div><p>من ${hotelCheckInReadyText}</p><p style="color: red">الى ${hotelCheckOutReadyText}</p></div>
                <div><p>${totalNightsReadyText}</p></div>
                <div class="description_cell"><span>${roomDescription}</span>${roomExtraInfoReadyText ? `<span style="color: rgb(0, 132, 255)">${roomExtraInfoReadyText}</span>` : ''}</div>
                <div><p>${hotelRoomAmountInput}</p></div>
                <div><p>${hotelLocationReadyText}${hotelAreaReadyText ? `<br>${hotelAreaReadyText}` : ''}</p></div>
                <div><img src="صور-الفنادق/${hotelImgSrcReadyText}.jpg" class="hotel_row_image_controller inserted_hotel_data_row" style"cursor: pointer"></div>
            `;


            // Create a new div element to hold the hotel row
            let hotelRowTableDiv = document.createElement('div');
            hotelRowTableDiv.id = `hotel_row_id_${insertedHotelDataDivUniqueId}`; // Set a unique ID for the hotel row div
            hotelRowTableDiv.classList.add('hotel_row_class'); // Add a class to the div for styling
            insertedHotelDataDivUniqueId++;


            // Insert the HTML content into the newly created div
            hotelRowTableDiv.innerHTML = hotelRowTableDivContent;


            // Get all dynamically created elements with the class 'hotelRowImageController'
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



            // Append the new hotel row div to the parent div that holds all inserted hotel data
            document.getElementById('inserted_hotel_data_position_div').appendChild(hotelRowTableDiv);


            /* Show up the 'downloaded_pdf_hotel_data_page' section */
            document.getElementById('downloaded_pdf_hotel_data_page').style.display = 'block';

            /* Show the download button */
            document.getElementById('export_package_pdf_div_id').style.display = 'block';




            // Get references to all input elements and reset their values
            document.getElementById('hotel_location_input_id').value = '';
            document.getElementById('hotel_area_input_id').value = '';
            document.getElementById('hotel_name_input_id').value = '';
            document.getElementById('hotel_check_in_input_id').value = '';
            document.getElementById('hotel_check_out_input_id').value = '';
            document.getElementById('hotel_total_nights_input_id').value = '';
            document.getElementById('hotel_room_type_description_input_id').value = '';
            document.getElementById('hotel_room_amount_input_id').value = '';
            document.getElementById('hotel_breakfast_people_amount_input_id').value = '';
            document.getElementById('room_extra_info_textarea_id').value = '';

            // Disable the hotel_area_input_id and hotel_name_input_id inputs
            document.getElementById('hotel_area_input_id').disabled = true;
            document.getElementById('hotel_name_input_id').disabled = true;








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
                    // Hide section with id 'downloaded_pdf_hotel_data_page'
                    document.getElementById('downloaded_pdf_hotel_data_page').style.display = 'none';

                    // Hide the download button if there are no other important data sections visible
                    if (document.getElementById('downloaded_pdf_flight_data_page').style.display === 'none' && document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'none' && document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'none') {
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

        }


















    } else if (clickedButtonId === 'clint_movements_details_inputs_submit_icon') {
        // Get references to all input elements for later use
        let clintMovementsCurrentDayDateInput = document.getElementById('clint_movements_current_day_date_input_id').value;
        let clintMovementsAirportWelcomeInput = document.getElementById('clint_movements_airport_welcome_input_id').value;
        let clintMovementsCurrentCityInput = document.getElementById('clint_movements_current_city_input_id').value;
        let clintMovementsNewCheckOutInput = document.getElementById('clint_movements_new_check_out_input_id').value;
        let clintMovementsNewCheckInInput = document.getElementById('clint_movements_new_check_in_input_id').value;
        let clintMovementsNextCityInput = document.getElementById('clint_movements_next_city_input_id').value;
        let clintMovementsWholeDayActionsDetailsTextarea = document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value;










        // If Not All Inputs Are Valid, Show The Error Message
        if (clintMovementsCurrentDayDateInput === '' || clintMovementsCurrentCityInput === '') {

            // Change the sumbit icon background color
            clint_movements_details_inputs_submit_icon.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_movements_details_inputs_submit_icon.style.backgroundColor = 'darkorange';
            }, 500);








        } else {

            // In case all 'استقبال في المطار', 'تسجيل خروج', 'تسجيل دخول', 'الذهاب لمدينة جديدة' inputs are empty then stop the process
            if (clintMovementsNewCheckOutInput === '' && clintMovementsNewCheckInInput === '' && clintMovementsWholeDayActionsDetailsTextarea === '') {
                // Change the submit icon background color
                clint_movements_details_inputs_submit_icon.style.backgroundColor = 'red';

                // Set the background color of the submit icon back to default color
                setTimeout(() => {
                    clint_movements_details_inputs_submit_icon.style.backgroundColor = 'darkorange';
                }, 500);

            } else {

                // Check if there are no div elements with class 'inserted_clint_movements_data_row'
                let clintMovementsRows = document.querySelectorAll('.inserted_clint_movements_data_row');
                if (clintMovementsRows.length === 0) {
                    // Get the input value to store it in the 'store_first_clint_movments_date'
                    let clintMovementsCurrentDayDateInput = document.getElementById('clint_movements_current_day_date_input_id').value;

                    // Set the innerText of the element with id 'store_first_clint_movments_date'
                    let storeFirstClintMovmentsDate = document.getElementById('store_first_clint_movments_date');
                    storeFirstClintMovmentsDate.innerText = clintMovementsCurrentDayDateInput;
                }




                // Get the current day date from the input field
                let currentDayDate = new Date(clintMovementsCurrentDayDateInput.split('-').reverse().join('-'));

                // Get the last day date from the input field
                let clintMovementsLastDayDateInput = document.getElementById('clint_movements_last_day_date_input_id').value;
                let lastDayDate = new Date(clintMovementsLastDayDateInput.split('-').reverse().join('-'));

                if (currentDayDate > lastDayDate) {
                    // Change the submit icon background color
                    clint_movements_details_inputs_submit_icon.style.backgroundColor = 'red';

                    // Set the background color of the submit icon back to default color
                    setTimeout(() => {
                        clint_movements_details_inputs_submit_icon.style.backgroundColor = 'darkorange';
                    }, 500);

                } else {

                    /* if the 'clintMovementsNextCityInput' exist then make sure there is no any clint movements visiting places */
                    if (clintMovementsNextCityInput === 'الذهاب للمطار للمغادرة') {

                        /* Check is there is value in the 'clintMovementsWholeDayActionsDetailsTextarea' */
                        if (clintMovementsWholeDayActionsDetailsTextarea !== '') {

                            // Change the submit icon background color
                            clint_movements_details_inputs_submit_icon.style.backgroundColor = 'red';

                            // Set the background color of the submit icon back to default color
                            setTimeout(() => {
                                clint_movements_details_inputs_submit_icon.style.backgroundColor = 'darkorange';
                            }, 500);


                            /* Exit the function and stop processing */
                            return;

                        }
                    }


                    // Change the submit icon background color
                    clint_movements_details_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
                    // Set the background color of the submit icon back to default color
                    setTimeout(() => {
                        clint_movements_details_inputs_submit_icon.style.backgroundColor = 'darkorange';
                    }, 500);

                    // Add a new day to the value of the 'clint_movements_current_day_date_input_id'
                    currentDayDate.setDate(currentDayDate.getDate() + 1);
                    let newDayDate = currentDayDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).replace(' ', '-');
                    document.getElementById('clint_movements_current_day_date_input_id').value = newDayDate;






                    // Create an array of non-empty inputs
                    let nonEmptyInputs = [
                        clintMovementsNewCheckOutInput,
                        clintMovementsNextCityInput,
                        clintMovementsAirportWelcomeInput,
                        clintMovementsWholeDayActionsDetailsTextarea,
                        clintMovementsNewCheckInInput
                    ].filter(input => input !== '');

                    // Join the non-empty inputs with ' + ' separator
                    let mixedInputsWithValue = nonEmptyInputs.join(' + ');








                    /* Create the intial variable for storing the clint movements row content */
                    let clintMovementsRowTableDivContent;

                    if (storeClintMovementsNextCityInput !== null) {
                        // Create the HTML content for a new hotel row
                        clintMovementsRowTableDivContent = `
                            <div><p>${clintMovementsCurrentDayDateInput}</p></div>
                            <div><p>${mixedInputsWithValue}</p></div>
                            <div class="clint_movements_row_controller inserted_clint_movements_data_row" style=" cursor: pointer;"><p class="clint_movements_row_controller inserted_clint_movements_data_row">${clintMovementsCurrentCityInput}-${storeClintMovementsNextCityInput}</p></div>
                        `;

                        /* Reset the intial value of the 'storeClintMovementsNextCityInput' variable */
                        storeClintMovementsNextCityInput = null;

                    } else {
                        // Create the HTML content for a new hotel row
                        clintMovementsRowTableDivContent = `
                            <div><p>${clintMovementsCurrentDayDateInput}</p></div>
                            <div><p>${mixedInputsWithValue}</p></div>
                            <div class="clint_movements_row_controller inserted_clint_movements_data_row" style=" cursor: pointer;"><p class="clint_movements_row_controller inserted_clint_movements_data_row">${clintMovementsCurrentCityInput}</p></div>
                        `;
                    }




                    // Create a new div element to hold the hotel row
                    let clintMovementsRowTableDiv = document.createElement('div');
                    clintMovementsRowTableDiv.id = `clint_movements_row_id_${insertedClintMovementsRowDivUniqueId}`; // Set a unique ID for the hotel row div
                    clintMovementsRowTableDiv.classList.add('clint_movements_row_class'); // Add a class to the div for styling
                    insertedClintMovementsRowDivUniqueId++;


                    // Insert the HTML content into the newly created div
                    clintMovementsRowTableDiv.innerHTML = clintMovementsRowTableDivContent;








                    // Get all dynamically created elements with the class 'clint_movements_row_controller'
                    let clintMovementsRowImageControllers = clintMovementsRowTableDiv.querySelectorAll('.clint_movements_row_controller');

                    // Function to handle touch events and distinguish between tap and scroll
                    function handleTouchEvent(element) {
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
                                clintMovementsRowFlightArrivalTimeFunction(event);
                            }
                        });
                    }

                    // Function to handle mouse events and distinguish between click and drag
                    function handleMouseEvent(element) {
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
                                clintMovementsRowFlightArrivalTimeFunction(event);
                            }
                        });
                    }

                    // Attach click and touch event listeners to each element
                    clintMovementsRowImageControllers.forEach(element => {
                        handleMouseEvent(element); // Handle mouse events with click detection
                        handleTouchEvent(element); // Handle touch events with tap detection
                    });








                    // Append the new hotel row div to the parent div that holds all inserted hotel data
                    document.getElementById('inserted_clint_movements_data_position_div').appendChild(clintMovementsRowTableDiv);


                    /* Show up the 'downloaded_pdf_clint_movements_data_page' section */
                    document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'block';

                    /* Show the download button */
                    document.getElementById('export_package_pdf_div_id').style.display = 'block';




                    // Get references to all input elements and reset their values
                    document.getElementById('clint_movements_current_city_input_id').value = '';
                    document.getElementById('clint_movements_new_check_out_input_id').value = '';
                    document.getElementById('clint_movements_airport_welcome_input_id').value = '';
                    document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value = '';
                    document.getElementById('clint_movements_next_city_input_id').value = '';
                    document.getElementById('clint_movements_new_check_in_input_id').value = '';


                    /* Hide all the clint movements places names */
                    bali_clint_movements_places_div.style.display = 'none';
                    jakarta_clint_movements_places_div.style.display = 'none';
                    puncak_clint_movements_places_div.style.display = 'none';
                    bandung_clint_movements_places_div.style.display = 'none';

                }









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



                // Function to handle clint movements row div click or touch
                function clintMovementsRowFlightArrivalTimeFunction(event) {
                    let deleteclintMovementsRowDiv = document.getElementById('ensure_delete_clint_movemnt_data_div');
                    let clickedclintMovementsDataDiv = event.target.closest('.clint_movements_row_class');

                    if (clickedclintMovementsDataDiv) {
                        currentClintMovementsDataDivId = clickedclintMovementsDataDiv.id;

                        runDeleteClickedClintMovementsDataFunction = function () {
                            deleteClickedClintMovementsData(currentClintMovementsDataDivId);
                        }

                        // Check if the overlay already exists
                        let overlayLayer = document.querySelector('.black_overlay');
                        if (!overlayLayer) {
                            let overlayLayer = document.createElement('div');
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
                                    document.body.removeChild(overlayLayer);
                                }, 300);
                            };

                            overlayLayer.addEventListener('click', handleOverlayClick);
                            overlayLayer.addEventListener('touchstart', handleOverlayClick); // Add touch event handling

                            overlayLayer.addEventListener('click', (event) => {
                                event.stopPropagation();
                            });
                        }
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
    }
}
















/* Function to handel clicked clint movements rule element */
runDeleteThisPackageIncludingDataText = function (clickedPackageIncludingDataText) {

    // Create an overlay layer for better visual effect
    let overlayLayer = document.createElement('div');
    overlayLayer.classList.add('black_overlay');
    document.body.appendChild(overlayLayer);


    /* Function to delete the clint movements rule */
    deleteClickedPackageIncludingDataText = function (clickedPackageIncludingDataText) {
        clickedPackageIncludingDataText.remove();

        ensure_delete_package_including_data_text_div.style.transform = 'translate(-50%, -100vh)'; // Slide out
        overlayLayer.style.opacity = '0'; // Hide overlay

        // Remove overlay and delete box div from DOM after transition
        setTimeout(() => {
            document.body.removeChild(overlayLayer);
        }, 300); // Match transition duration in CSS


        // Check if there are any remaining inserted package including data (Searching by the second class name)
        let remainingPackageIncludingDataText = document.querySelectorAll('.inserted_package_including_data_text');
        if (remainingPackageIncludingDataText.length === 0) {
            // Hide section with id 'downloaded_pdf_package_including_data_page'
            document.getElementById('downloaded_pdf_package_including_data_page').style.display = 'none';
        }
    }


    // Delayed opacity transition for smooth appearance
    setTimeout(() => {
        overlayLayer.style.opacity = '1';
        ensure_delete_package_including_data_text_div.style.transform = 'translate(-50%, -50%)'; // Center div
    }, 50);

    /* Function to pass the clicked clint movements rule element */
    passClickedPackageIncludingDataText = function () {
        deleteClickedPackageIncludingDataText(clickedPackageIncludingDataText);
    }

    // Click handler to close overlay and delete box div on click outside
    overlayLayer.onclick = () => {
        ensure_delete_package_including_data_text_div.style.transform = 'translate(-50%, -100vh)'; // Slide out
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

























/* Function to open choosing pdf file name box */
openPdfDownloadBox = function () {
    // Create overlay layer
    let overlayLayer = document.createElement('div');
    overlayLayer.className = 'black_overlay';
    document.body.appendChild(overlayLayer);


    // Show overlay layer with smooth opacity transition
    setTimeout(() => {
        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance

        // Slide to the center of the screen
        namePdfBoxDiv.style.transform = 'translate(-50%, -50%)';
    }, 100);




    // get the name pdf file box
    let namePdfBoxDiv = document.getElementById('name_pdf_file_div');


    /* Function to hide the name pdf file box */
    closeDownloadPdfBox = function () {
        // Hide edit/delete options div
        namePdfBoxDiv.style.transform = 'translate(-50%, -100vh)';

        // Hide overlay layer with opacity transition
        overlayLayer.style.opacity = '0';

        // Remove overlay and edit/delete div from DOM after transition
        setTimeout(() => {
            document.body.removeChild(overlayLayer);
        }, 300); // Match transition duration in CSS
    }

};

/* Function to check if the 'pdf_file_name_input_id' input contain value or no */
checkThePdfNameToDownload = function () {

    /* If there is no value then change the 'check_pdf_name_button' color */
    if (document.getElementById('pdf_file_name_input_id').value === '') {
        document.getElementById('check_pdf_name_button').style.backgroundColor = 'red';
        setTimeout(() => {
            document.getElementById('check_pdf_name_button').style.backgroundColor = 'white';
        }, 200);


        /* If there is any value then pass the value to the 'downloadPdfWithCustomName' function */
    } else {
        document.getElementById('check_pdf_name_button').style.backgroundColor = 'rgb(0, 255, 0)';
        setTimeout(() => {
            document.getElementById('check_pdf_name_button').style.backgroundColor = 'white';
        }, 200);


        let pdfNameReadyText = document.getElementById('pdf_file_name_input_id').value;
        downloadPdfWithCustomName(`${pdfNameReadyText}`);
    }

}

/* Save the last PDF download data in localStorage */
saveLastPdfDownloadData = function () {
    let idsToCheck = [
        'downloaded_pdf_clint_data_page',
        'downloaded_pdf_package_including_data_page',
        'downloaded_pdf_flight_data_page',
        'downloaded_pdf_hotel_data_page',
        'downloaded_pdf_clint_movements_data_page'
    ];

    let visibleContent = [];

    idsToCheck.forEach(id => {
        let element = document.getElementById(id);
        if (isVisible(element)) {
            visibleContent.push(element.outerHTML);
        }
    });

    let savedData = JSON.parse(localStorage.getItem('Saved_Website_Data_Array')) || [];
    let newEntry = {
        name: "Last Download",
        elements: {}
    };

    // Populate elements object with visible content
    idsToCheck.forEach((id, index) => {
        let element = document.getElementById(id);
        if (isVisible(element)) {
            newEntry.elements[id] = element.outerHTML;
        }
    });

    // Remove any old object with the same name
    savedData = savedData.filter(entry => entry.name !== "Last Download");

    // Add the new object at the top
    savedData.unshift(newEntry);

    localStorage.setItem('Saved_Website_Data_Array', JSON.stringify(savedData));
};

/* Function to check if an element is visible */
let isVisible = function (element) {
    return element && element.style.display !== 'none' && element.offsetParent !== null;
};

/* Download the pdf file with the given name */
downloadPdfWithCustomName = async function (pdfName) {
    let { jsPDF } = window.jspdf;

    /* Function to capture a canvas of a given section */
    let captureCanvas = async function (section) {
        try {
            let canvas = await html2canvas(section, {
                scale: 3, // Moderate scale for balanced quality and size
                backgroundColor: null,
                scrollY: 0 // Ensure capturing starts from the top of the element
            });
            return canvas;
        } catch (error) {
            console.error('Error capturing canvas:', error);
        }
    };

    /* Function to combine multiple canvases into one */
    let combineCanvases = function (canvases) {
        if (canvases.length === 0) {
            console.error('No canvases to combine');
            return null;
        }

        let totalHeight = canvases.reduce((sum, canvas) => sum + canvas.height, 0);
        let combinedCanvas = document.createElement('canvas');
        combinedCanvas.width = canvases[0].width;
        combinedCanvas.height = totalHeight;
        let context = combinedCanvas.getContext('2d');

        // Fill with default background color (e.g., white)
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);

        let yOffset = 0;
        canvases.forEach(canvas => {
            context.drawImage(canvas, 0, yOffset);
            yOffset += canvas.height;
        });

        return combinedCanvas;
    };

    /* Function to process all visible sections and generate the PDF */
    let processSections = async function (sections) {
        let canvases = [];

        for (let section of sections) {
            let canvas = await captureCanvas(section);
            if (canvas) {
                canvases.push(canvas);
            }
        }

        if (canvases.length === 0) {
            console.error('No canvases captured');
            return;
        }

        let combinedCanvas = combineCanvases(canvases);
        if (!combinedCanvas) {
            console.error('Failed to combine canvases');
            return;
        }

        let pdfWidth = 210; // A4 width in mm
        let pdfHeight = (combinedCanvas.height * pdfWidth) / combinedCanvas.width;
        let pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);

        let imgData = combinedCanvas.toDataURL('image/jpeg', 0.7); // Compress image to reduce size

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
        pdf.save(pdfName);

        // Hide all elements with the class name after saving the PDF
        let images = document.querySelectorAll('.inserted_package_data_section_page_image_class');
        images.forEach(img => {
            img.style.display = 'none';
        });

        document.getElementById('downloaded_pdf_important_notes_data_page').style.display = 'none'; // Hide the section after saving the PDF
        saveLastPdfDownloadData(); // Save the last PDF download data in localStorage
    };

    // Show all elements with the class name before checking visibility
    let images = document.querySelectorAll('.inserted_package_data_section_page_image_class');
    images.forEach(img => {
        img.style.display = 'inline';
    });

    document.getElementById('downloaded_pdf_important_notes_data_page').style.display = 'block'; // Show the section before checking visibility

    // Define the class names to check
    let divsIdNames = [
        'downloaded_pdf_clint_data_page',
        'downloaded_pdf_flight_data_page',
        'downloaded_pdf_hotel_data_page',
        'downloaded_pdf_package_including_data_page',
        'downloaded_pdf_clint_movements_data_page',
        'downloaded_pdf_important_notes_data_page'
    ];

    let sections = [];

    // Iterate through each class name and check visibility
    divsIdNames.forEach(divsIdName => {
        let section = document.getElementById(divsIdName);
        if (section && isVisible(section)) { // Check if section exists and is visible
            sections.push(section); // Add visible section to the array
        }
    });

    if (sections.length === 0) {
        console.error('No visible sections found');
        return;
    }

    await processSections(sections); // Process visible sections to generate the PDF
};
