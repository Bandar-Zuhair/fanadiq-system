/* Variable to save a number for counting functionality (Ex: Flight Number..?) */
let flightNumberCounter = 1;
let insertedHotelDataDivUniqueId = 1;



/* Function for checking if ready or no to insert the data */
// Function to check if all inputs have values
checkInputsToInsertData = function (clickedButtonId) {



    // Check if the clicked button is the 'clint_inputs_submit_button'
    if (clickedButtonId === 'clint_inputs_submit_button') {


        // Get references to all input elements for later use
        let personAmountInput = document.getElementById('hotel_person_amount_input_id');
        let firstLastCheckInCheckOutDateInput = document.getElementById('first_last_clint_check_in_check_out_date_input_id');
        let allTotalNightsInput = document.getElementById('all_total_nights_input_id');
        let clintCompanyNameInput = document.getElementById('clint_company_name_input_id');
        let childAgeInputs = document.querySelectorAll('.child_age_input');
        let honeymoonCheckbox = document.getElementById('honeymoon_checkbox');

        // Check if any of the input values are empty
        if (personAmountInput.value === '' || firstLastCheckInCheckOutDateInput.value === '') {
            // Change the button color to red to indicate error
            clint_inputs_submit_button.style.backgroundColor = 'red';
            // Reset the button color after 1 second
            setTimeout(() => {
                clint_inputs_submit_button.style.backgroundColor = 'white';
            }, 500);
        } else {
            // Change the button color to green to indicate success
            clint_inputs_submit_button.style.backgroundColor = 'rgb(0, 255, 0)';
            // Reset the button color after 1 second
            setTimeout(() => {
                clint_inputs_submit_button.style.backgroundColor = 'white';
            }, 500);




            if (clintCompanyNameInput.value !== '') {
                // Create a new image element for the company logo
                let insertedCompanyNameLogo = document.createElement('img');
                // Replace spaces with dashes in the company name
                let companyNameWithoutSpaces = clintCompanyNameInput.value.replace(/\s+/g, '-');
                insertedCompanyNameLogo.src = `صور-الشركات/${companyNameWithoutSpaces}.jpg`; // Assuming this path is correct
                insertedCompanyNameLogo.classList.add('inserted_company_name_logo');
                insertedCompanyNameLogo.onclick = function () {
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
                document.getElementById('inserted_company_name_image_position_div').appendChild(insertedCompanyNameLogo);
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





            // Create a new div element to insert client data
            let insertedClintDataDiv = document.createElement('div');
            insertedClintDataDiv.classList.add('inserted_clint_data_div');


            // Praper the person amount text
            let personAmountText = `عدد الأشخاص: ${personAmountInput.value}`;

            // Check if there are any child age inputs
            if (childAgeInputs.length > 0) {
                // Append each child's age in brackets inside the 'personAmountText' value
                childAgeInputs.forEach((input) => {
                    personAmountText += ` (${input.value})`;
                });
            }




            /* If شهر عشل checkbox is checked then iclude the text in the content */
            if (honeymoonCheckbox.checked) {
                // If the years are the same, display both dates in a single h6 element
                let h6CheckInSameYears = document.createElement('h6');
                h6CheckInSameYears.innerText = `بكج شهر عسل 💝\n${personAmountText}\n${firstLastCheckInCheckOutDateInput.value}\nمجموع الليالي ${allTotalNightsInput.value}`;
                insertedClintDataDiv.appendChild(h6CheckInSameYears);

            } else {
                // If the years are the same, display both dates in a single h6 element
                let h6CheckInSameYears = document.createElement('h6');
                h6CheckInSameYears.innerText = `بكج جديد\n${personAmountText}\n${firstLastCheckInCheckOutDateInput.value}\nمجموع الليالي ${allTotalNightsInput.value}`;
                insertedClintDataDiv.appendChild(h6CheckInSameYears);

            }



            // Clear previous client data and insert the new data div
            document.getElementById('inserted_clint_data_position_div').innerHTML = '';
            document.getElementById('inserted_clint_data_position_div').appendChild(insertedClintDataDiv);

            /* Show up the 'inserted_package_data_section_page_1' section */
            document.getElementById('inserted_package_data_section_page_1').style.display = 'block';
        }










        /* Check if all hotel data inputs are filled */
    } else if (clickedButtonId === 'hotel_inputs_submit_button') {

        // Get references to all input elements for later use
        let hotelLocationInput = document.getElementById('hotel_location_input_id');
        let hotelAreaInput = document.getElementById('hotel_area_input_id');
        let hotelNameInput = document.getElementById('hotel_name_input_id');
        let checkInCheckOutDateTextArea = document.getElementById('check_in_check_out_date_textarea_id');
        let totalNightsInput = document.getElementById('total_nights_input_id');
        let roomDescriptionInput = document.getElementById('room_description_input_id');
        let breakfastCheckbox = document.getElementById('breakfast_checkbox');
        let roomExtraInfoTextArea = document.getElementById('room_extra_info_textarea_id');


        // Get references to all input (Values) for later use
        let hotelLocationReadyText = hotelLocationInput.value;
        let hotelAreaReadyText = hotelAreaInput.value;
        let hotelNameReadyText = hotelNameInput.value;
        let checkInCheckOutDateReadyText = checkInCheckOutDateTextArea.value;
        let totalNightsReadyText = totalNightsInput.value;
        let roomExtraInfoReadyText = roomExtraInfoTextArea.value;



        if (hotelLocationReadyText === '' || hotelNameReadyText === '' || checkInCheckOutDateReadyText === '' || totalNightsReadyText === '' || roomDescriptionInput.value === '') {

            hotel_inputs_submit_button.style.backgroundColor = 'red';

            // Hide ensure text after 2 seconds
            setTimeout(() => {
                hotel_inputs_submit_button.style.backgroundColor = 'white';
            }, 500);

        } else {
            // Change the button color to green to indicate success
            hotel_inputs_submit_button.style.backgroundColor = 'rgb(0, 255, 0)';
            // Reset the button color after 1 second
            setTimeout(() => {
                hotel_inputs_submit_button.style.backgroundColor = 'white';
            }, 500);






            // Replace line breaks with <br> tags followed by a span for the red text
            let checkInCheckOutDateReadyTextHTML = checkInCheckOutDateTextArea.value.replace(/\r?\n/g, '<br><p class="red-text">');


            // Convert the hotel name to lowercase and replace spaces with hyphens to create a suitable image filename
            let hotelImgSrcReadyText = hotelNameReadyText.toLowerCase().replace(/\s+/g, '-');


            // Concatenate the room description with a breakfast note if the checkbox is checked
            let roomDescription = roomDescriptionInput.value + (breakfastCheckbox.checked ? ' شامل الإفطار' : '');

            // Create the HTML content for a new hotel row, including the hotel name, dates, total nights, room description, location, and image
            let hotelRowTableDivContent = `
                <div><p>${hotelNameReadyText}</p></div>
                <div><p>${checkInCheckOutDateReadyTextHTML}</p></div>
                <div><p>${totalNightsReadyText}</p></div>
                <div class="description-cell"><span>${roomDescription}</span>${roomExtraInfoReadyText ? `<span style="color: rgb(0, 132, 255)">${roomExtraInfoReadyText}</span>` : ''}</div>
                <div><p>${hotelLocationReadyText}${hotelAreaReadyText ? `<br>${hotelAreaReadyText}` : ''}</p></div>
                <div><img src="صور-الفنادق/${hotelImgSrcReadyText}.jpg" class="hotel_card_image"></div>
            `;


            // Create a new div element to hold the hotel row
            let hotelRowTableDiv = document.createElement('div');
            hotelRowTableDiv.id = `hotel_row_id_${insertedHotelDataDivUniqueId}`; // Set a unique ID for the hotel row div
            hotelRowTableDiv.classList.add('hotel_row_class'); // Add a class to the div for styling
            insertedHotelDataDivUniqueId++;


            // Insert the HTML content into the newly created div
            hotelRowTableDiv.innerHTML = hotelRowTableDivContent;


            // Get the dynamically created hotelImg element
            let hotelImg = hotelRowTableDiv.querySelector('.hotel_card_image');


            // Append the new hotel row div to the parent div that holds all inserted hotel data
            document.getElementById('inserted_hotel_data_position_div').appendChild(hotelRowTableDiv);


            /* Show up the 'inserted_package_data_section_page_1' section */
            document.getElementById('inserted_package_data_section_page_2').style.display = 'block';

            /* Show the download button */
            document.getElementById('export_package_pdf_div_id').style.display = 'block';




            // Get references to all input elements and the ensure text element
            document.getElementById('hotel_location_input_id').value = '';
            document.getElementById('hotel_area_input_id').value = '';
            document.getElementById('hotel_name_input_id').value = '';
            document.getElementById('check_in_check_out_date_textarea_id').value = '';
            document.getElementById('total_nights_input_id').value = '';
            document.getElementById('room_description_input_id').value = '';
            document.getElementById('breakfast_checkbox').checked = false;
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

                // Hide edit/delete options div
                let deleteHotelCardDiv = document.getElementById('ensure_delete_hotel_data_div');
                deleteHotelCardDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS

                // Check if there are any remaining inserted hotel data divs
                let remainingHotelDataDivs = document.querySelectorAll('.hotel_row_class');
                if (remainingHotelDataDivs.length === 0) {
                    // Hide section with id 'inserted_package_data_section_page_2'
                    document.getElementById('inserted_package_data_section_page_2').style.display = 'none';
                    // Hide the download button
                    document.getElementById('export_package_pdf_div_id').style.display = 'none';
                }
            };

            // Function to prepare drag and drop 'insertedHotelDataDiv' elements functionality
            function initializeDragAndDrop() {

                // Function to show edit or delete the inserted hotel data
                hotelImg.onclick = (event) => {
                    let deleteHotelCardDiv = document.getElementById('ensure_delete_hotel_data_div');
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
                            deleteHotelCardDiv.style.transform = 'translate(-50%, -50%)'; // Center div
                        }, 50);

                        runDeleteClickedHotelDataFunction = function () {
                            deleteClickedHotelData(currentHotelDataDivId);
                        }

                        // Click handler to close overlay and delete box div on click outside
                        overlayLayer.onclick = () => {
                            deleteHotelCardDiv.style.transform = 'translate(-50%, -100vh)'; // Slide out
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

            // Call the initializeDragAndDrop function to set up delete and drag-and-drop functionality
            initializeDragAndDrop();

        }

















        /* Check if all package data inputs are filled */
    } else if (clickedButtonId === 'package_inputs_submit_button') {

        // Get references to all input elements for later use
        let packageDetailsTextArea = document.getElementById('package_details_textarea_id');
        let packageTotalPriceInput = document.getElementById('package_totla_price_input_id');

        // If Not All Inputs Are Valid, Show The Error Message
        if (packageDetailsTextArea.value === '' || packageTotalPriceInput.value === '') {
            package_inputs_submit_button.style.backgroundColor = 'red';

            // Hide ensure text after 2 seconds
            setTimeout(() => {
                package_inputs_submit_button.style.backgroundColor = 'white';
            }, 500);



            /* if all inputs are filled then insert the data in the table */
        } else {
            /* Change the 'تم' button color */
            package_inputs_submit_button.style.backgroundColor = 'rgb(0, 255, 0)';
            // Hide ensure text after 2 seconds
            setTimeout(() => {
                package_inputs_submit_button.style.backgroundColor = 'white';
            }, 500);


            // Create a new div element to insert client data
            let insertedPackageDataDiv = document.createElement('div');
            insertedPackageDataDiv.classList.add('inserted_package_data_div');

            let packageDetailsReayText = packageDetailsTextArea.value;
            let packageTotalPriceReayText = packageTotalPriceInput.value;

            // Replace multiple consecutive new line characters with a single new line character
            packageDetailsReayText = packageDetailsReayText.replace(/\n\s*\n/g, '\n');

            // Replace new line characters with <br> tags
            let packageDetailsWithBreaks = packageDetailsReayText.replace(/\n/g, '<br>');

            let packageDetailsH6 = document.createElement('h6');
            packageDetailsH6.innerHTML = `${packageDetailsWithBreaks}`;

            let packageTotalPriceH6 = document.createElement('h6');
            packageTotalPriceH6.innerHTML = `إجمالي السعر ${packageTotalPriceReayText}`;
            packageTotalPriceH6.id = 'package_total_price_h6_id';

            insertedPackageDataDiv.appendChild(packageDetailsH6);
            insertedPackageDataDiv.appendChild(packageTotalPriceH6);

            // Show the div and clear previous package data and append the new data div
            if (document.getElementById('inserted_package_data_position_div').style.display === 'none') {
                document.getElementById('inserted_package_data_position_div').style.display = 'block';
            }
            document.getElementById('inserted_package_data_position_div').innerHTML = '';
            document.getElementById('inserted_package_data_position_div').appendChild(insertedPackageDataDiv);

            /* Show up the 'inserted_package_data_section_page_2' section */
            document.getElementById('inserted_package_data_section_page_4').style.display = 'block';
        }















    } else if (clickedButtonId === 'clint_flight_inputs_submit_button') {
        // Get references to all input elements for later use
        let flightDateInput = document.getElementById('flight_date_input_id');
        let fromAirportToAirportTextArea = document.getElementById('from_airport_to_airport_textarea_id');
        let flightPersonAmountInput = document.getElementById('flight_person_amount_input_id');
        let flightExtraDetailsTextArea = document.getElementById('flight_extra_details_textarea_id');



        // If Not All Inputs Are Valid, Show The Error Message
        if (flightDateInput.value === '' || fromAirportToAirportTextArea.value === '' || flightPersonAmountInput.value === '') {
            clint_flight_inputs_submit_button.style.backgroundColor = 'red';

            // Hide ensure text after 2 seconds
            setTimeout(() => {
                clint_flight_inputs_submit_button.style.backgroundColor = 'white';
            }, 500);


        } else {
            /* Change the 'تم' button color */
            clint_flight_inputs_submit_button.style.backgroundColor = 'rgb(0, 255, 0)';
            // Hide ensure text after 2 seconds
            setTimeout(() => {
                clint_flight_inputs_submit_button.style.backgroundColor = 'white';
            }, 2000);



            /* Retrieve the values from the input elements */
            let flightDateValue = flightDateInput.value;
            let flightPersonAmountValue = flightPersonAmountInput.value;
            let flightExtraDetailsValue = flightExtraDetailsTextArea.value;
            let fromAirportToAirportValue = fromAirportToAirportTextArea.value;



            // Create a new div element to insert client data
            let insertedPackageDataDiv = document.createElement('div');
            let flightUniqueId = `hotel_data_${new Date().getTime()}`; // Generate unique ID based on timestamp
            insertedPackageDataDiv.id = flightUniqueId; // Assign the unique ID to the div
            insertedPackageDataDiv.classList.add('inserted_clint_flight_data_div');




            // Flight number side content div
            let flightNumberSideDiv = document.createElement('div');
            flightNumberSideDiv.classList.add('flight_right_side_hotel_data_div');

            let flightNumberSideH6 = document.createElement('h6');
            flightNumberSideH6.innerText = `رحلة رقم ${flightNumberCounter}`;
            flightNumberSideDiv.appendChild(flightNumberSideH6);
            flightNumberCounter++;



            // Right side content div
            let flightRightSideDiv = document.createElement('div');
            flightRightSideDiv.classList.add('flight_middle_side_hotel_data_div');

            // Left side content div
            let flightLeftSideDiv = document.createElement('div');
            flightLeftSideDiv.classList.add('flight_left_side_hotel_data_div');



            /* Flight right side h6 element */
            let flightRightSideContent = `تاريخ الرحلة:\n${flightDateValue}\nالمسافرين: ${flightPersonAmountValue}`;

            if (flightExtraDetailsValue !== '') {
                flightRightSideContent += `\n${flightExtraDetailsValue}`;
            }

            flightRightSideContent += `\nالأمتعة: 20 كيلو للشخص`

            let flightRightSideH6 = document.createElement('h6');
            flightRightSideH6.innerText = flightRightSideContent;

            flightRightSideDiv.appendChild(flightRightSideH6); // Append the h6 element to the right side div

            /* Flight left side h6 element */
            let flightLeftSideH6 = document.createElement('h6');
            flightLeftSideH6.innerText = `${fromAirportToAirportValue}`;

            flightLeftSideDiv.appendChild(flightLeftSideH6); // Append the h6 element to the left side div

            /* Append all created h6 elements (right side and left side) in one div */
            insertedPackageDataDiv.appendChild(flightNumberSideDiv);
            insertedPackageDataDiv.appendChild(flightRightSideDiv);
            insertedPackageDataDiv.appendChild(flightLeftSideDiv);

            // Show and append the new flight data div
            document.getElementById('inserted_package_data_section_page_3').style.display = 'block';
            document.getElementById('inserted_flight_data_position_div').appendChild(insertedPackageDataDiv);
        }



    } else if (clickedButtonId === 'clint_movements_inputs_submit_button') {

    }
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

/* Download the pdf file with the given name */
downloadPdfWithCustomName = function (pdfName) {
    let { jsPDF } = window.jspdf;
    let pdf = new jsPDF('p', 'mm', 'a4');

    let backgroundImage = new Image();
    backgroundImage.src = 'test.jpg'; // Background image for all PDF pages

    let addContentToPDF = function (canvas, isFirstPage) {
        if (!isFirstPage) {
            pdf.addPage();
        }

        pdf.addImage(backgroundImage, 'JPEG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height, '', 'FAST');

        let imgData = canvas.toDataURL('image/png', 1.0); // Highest quality

        let imgWidth = pdf.internal.pageSize.width;
        let imgHeight = canvas.height * pdf.internal.pageSize.width / canvas.width;

        let xPos = (pdf.internal.pageSize.width - imgWidth) / 2;  // Center horizontally
        let yPos = (pdf.internal.pageSize.height - imgHeight) / 2; // Center vertically

        pdf.addImage(imgData, 'JPEG', xPos, yPos, imgWidth, imgHeight, '', 'FAST');
    };

    let captureCanvas = async function (section, isFirstPage) {
        try {
            let canvas = await html2canvas(section, {
                scale: 5, // Higher scale for better quality
                backgroundColor: null,
                scrollY: 0 // Ensure capturing starts from the top of the element
            });
            addContentToPDF(canvas, isFirstPage);
        } catch (error) {
            console.error('Error capturing canvas:', error);
        }
    };

    let isVisible = function (element) {
        return element && element.style.display !== 'none' && element.offsetParent !== null;
    };

    let processSections = function (sections) {
        let index = 0;

        let processNextSection = function () {
            if (index < sections.length) {
                let isFirstPage = (index === 0);
                captureCanvas(sections[index], isFirstPage).then(() => {
                    index++;
                    processNextSection();
                });
            } else {
                pdf.save(pdfName);
            }
        };

        processNextSection();
    };

    let sections = [];
    let i = 1;
    while (true) {
        let section = document.getElementById(`inserted_package_data_section_page_${i}`);
        if (section) {
            if (isVisible(section)) {
                sections.push(section);
            }
        } else {
            break;
        }
        i++;
    }

    console.log(`Total visible sections found: ${sections.length}`);

    processSections(sections);
};





















