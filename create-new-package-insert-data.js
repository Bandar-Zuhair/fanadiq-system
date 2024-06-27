/* Function for checking if ready or no to insert the data */
// Function to check if all inputs have values
checkInputsToInsertData = function (clickedButtonId) {



    // Function To Format the date etxt in the package final text
    function formatDateString(date, isStartDate, compareDate = null, addDash = false) {
        // Array of month names
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // Get the day of the month from the date
        let day = date.getDate();
        // Get the month name from the date
        let month = months[date.getMonth()];
        // Get the full year from the date
        let year = date.getFullYear();

        // Check if there is a comparison date provided
        if (compareDate) {
            // Get the month and year of the comparison date
            let compareMonth = compareDate.getMonth();
            let compareYear = compareDate.getFullYear();

            // Check if the years are the same
            if (year === compareYear) {
                // Check if the months are the same
                if (date.getMonth() === compareMonth) {
                    // If it's the start date, return only the day
                    if (isStartDate) {
                        return `${day}`;
                    } else {
                        // If it's not the start date, return the day and month
                        return `${day} ${month}`;
                    }
                } else {
                    // If the months are different, return the day and month
                    return `${day} ${month}`;
                }
            } else {
                // If the years are different, format with year based on addDash flag
                if (addDash) {
                    return `${day} new year ${year} ${month}`;
                } else {
                    return `${day} this year ${year} ${month}`;
                }
            }
        } else {
            // If there is no comparison date, return the full date
            return `${day} ${month} ${year}`;
        }
    }


    // Check if the clicked button is the 'clint_inputs_submit_button'
    if (clickedButtonId === 'clint_inputs_submit_button') {


        // Get the input elements for person amount and dates
        let personAmountInput = document.getElementById('hotel_person_amount_input_id');
        let firstCheckInDateInput = document.getElementById('first_clint_check_in_date_input_id');
        let lastCheckOutDateInput = document.getElementById('last_clint_check_out_date_input_id');
        let clintCompanyNameInput = document.getElementById('clint_company_name_input_id');
        let childAgeInputs = document.querySelectorAll('.child_age_input');

        // Check if any of the input values are empty
        if (personAmountInput.value === '' || firstCheckInDateInput.value === '' || lastCheckOutDateInput.value === '') {
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


            /* Show the download button */
            document.getElementById('export_package_pdf_div_id').style.display = 'block';


            // Create a new div element to insert client data
            let insertedClintDataDiv = document.createElement('div');
            insertedClintDataDiv.classList.add('inserted_clint_data_div');


            // Create a new image element for the company logo
            let insertedCompanyNameLogo = document.createElement('img');
            // Replace spaces with dashes in the company name
            let companyNameWithoutSpaces = clintCompanyNameInput.value.replace(/\s+/g, '-');
            insertedCompanyNameLogo.src = `صور-الشركات/${companyNameWithoutSpaces}.jpg`; // Assuming this path is correct
            insertedCompanyNameLogo.classList.add('inserted_company_name_logo');
            insertedCompanyNameLogo.onclick = function(){
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
                let editDeleteDiv = document.getElementById('ensure_delete_company_logo_div');

                // Smoothly slide to the middle of the screen
                setTimeout(() => {
                    editDeleteDiv.style.transform = 'translate(-50%, -50%)'; // Slide to the center of the screen
                }, 50); // Adjust timing as needed

                // Event listener to close overlay and delete box div on click outside
                overlayLayer.onclick = () => {
                    // Hide delete box options div
                    editDeleteDiv.style.transform = 'translate(-50%, -100vh)';

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



            /* Function to delete company logo */
            deleteClickedCompanyLogo = function () {

                document.getElementById('inserted_company_name_image_position_div').innerHTML = '';

                // Slide in delete box options div
                let editDeleteDiv = document.getElementById('ensure_delete_company_logo_div');

                // Event listener to close overlay and delete box div on click outside
                // Hide delete box div
                editDeleteDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                let overlayLayer = document.getElementById('black_overlay_id')
                
                overlayLayer.style.opacity = '0';

                // Remove overlay and delete box div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS
            }



            // Praper the person amount text
            let personAmountText = `عدد الأشخاص: ${personAmountInput.value}`;

            // Check if there are any child age inputs
            if (childAgeInputs.length > 0) {
                // Append each child's age in brackets inside the 'personAmountText' value
                childAgeInputs.forEach((input) => {
                    personAmountText += ` (${input.value})`;
                });
            }


            // Get the input values as text
            let firstCheckInDateReadyText = firstCheckInDateInput.value;
            let lastCheckOutDateReadyText = lastCheckOutDateInput.value;

            // Convert the input text to Date objects
            let startDate = new Date(firstCheckInDateReadyText);
            let endDate = new Date(lastCheckOutDateReadyText);
            // Calculate the difference in time between the dates
            let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            // Calculate the number of nights between the dates
            let nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Calculate nights

            // Format the check-in and check-out dates
            let formattedCheckInDate = formatDateString(startDate, true, endDate, false);
            let formattedCheckOutDate = formatDateString(endDate, false, startDate, startDate.getFullYear() !== endDate.getFullYear());

            // Check if the check-in and check-out dates are in different years
            if (startDate.getFullYear() !== endDate.getFullYear()) {

                if (clintCompanyNameInput.value === '') {

                    // Create an h6 element for the check-in date
                    let h6CheckInDifferentYears = document.createElement('h6');
                    h6CheckInDifferentYears.innerText = `بكج جديد\n${personAmountText}\nمن\n${formattedCheckInDate}\nالى\n${formattedCheckOutDate}\nمجموع الليالي ${nightCount}`;
                    insertedClintDataDiv.appendChild(h6CheckInDifferentYears);
                } else {

                    // Create an h6 element for the check-in date
                    let h6CheckInDifferentYears = document.createElement('h6');
                    h6CheckInDifferentYears.innerText = `بكج جديد - ${clintCompanyNameInput.value}\n${personAmountText}\nمن\n${formattedCheckInDate}\nالى\n${formattedCheckOutDate}\nمجموع الليالي ${nightCount}`;
                    insertedClintDataDiv.appendChild(h6CheckInDifferentYears);
                }


            } else {

                if (clintCompanyNameInput.value === '') {

                    // If the years are the same, display both dates in a single h6 element
                    let h6CheckInSameYears = document.createElement('h6');
                    h6CheckInSameYears.innerText = `بكج جديد\n${personAmountText}\nمن ${formattedCheckInDate} الى ${formattedCheckOutDate}\nمجموع الليالي ${nightCount}`;
                    insertedClintDataDiv.appendChild(h6CheckInSameYears);
                } else {

                    // If the years are the same, display both dates in a single h6 element
                    let h6CheckInSameYears = document.createElement('h6');
                    h6CheckInSameYears.innerText = `بكج جديد - ${clintCompanyNameInput.value}\n${personAmountText}\nمن ${formattedCheckInDate} الى ${formattedCheckOutDate}\nمجموع الليالي ${nightCount}`;
                    insertedClintDataDiv.appendChild(h6CheckInSameYears);
                }

            }

            // Clear previous client data and insert the new data div
            document.getElementById('inserted_clint_data_position_div').innerHTML = '';
            document.getElementById('inserted_clint_data_position_div').appendChild(insertedClintDataDiv);
        }










        /* Check if all hotel data inputs are filled */
    } else if (clickedButtonId === 'hotel_inputs_submit_button') {

        // Get references to all input elements and the ensure text element
        let hotelLocationInput = document.getElementById('hotel_location_input_id'); // Hotel location input element
        let hotelAreaInput = document.getElementById('hotel_area_input_id'); // Hotel area input element
        let hotelNameInput = document.getElementById('hotel_name_input_id'); // Hotel name input element
        let checkInDateInput = document.getElementById('check_in_date_input_id'); // Check-in date input element
        let checkOutDateInput = document.getElementById('check_out_date_input_id'); // Check-out date input element
        let roomDescriptionInput = document.getElementById('hotel_details_input_id'); // Room description input element
        let breakfastCheckbox = document.getElementById('breakfast_checkbox');


        if (hotelLocationInput.value === '' || hotelNameInput.value === '' || checkInDateInput.value === '' || checkOutDateInput.value === '' || roomDescriptionInput.value === '') {

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


            /* Show the download button */
            document.getElementById('export_package_pdf_div_id').style.display = 'block';


            // Create a new div element to insert hotel data
            let insertedHotelDataDiv = document.createElement('div');
            insertedHotelDataDiv.classList.add('inserted_hotel_data_div');

            // Right side content div
            let rightSideDiv = document.createElement('div');
            rightSideDiv.classList.add('right_side_hotel_data_div');

            // Left side content div
            let leftSideDiv = document.createElement('div');
            leftSideDiv.classList.add('left_side_hotel_data_div');





            // Get the input values as text
            let checkInDateReadyText = checkInDateInput.value;
            let checkOutDateReadyText = checkOutDateInput.value;

            // Convert the input text to Date objects
            let startDate = new Date(checkInDateReadyText);
            let endDate = new Date(checkOutDateReadyText);
            // Calculate the difference in time between the dates
            let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            // Calculate the number of nights between the dates
            let nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Calculate nights

            // Format the check-in and check-out dates
            let formattedCheckInDate = formatDateString(startDate, true, endDate, false);
            let formattedCheckOutDate = formatDateString(endDate, false, startDate, startDate.getFullYear() !== endDate.getFullYear());

            // Arrange content for the right side
            let rightSideContent = `${hotelLocationInput.value}`;

            // Check if the check-in and check-out dates are in different years
            if (startDate.getFullYear() !== endDate.getFullYear()) {
                /* Also check if the 'hotelAreaInput' contain text or no */
                if (hotelAreaInput.value !== '') {
                    rightSideContent += ` - ${hotelAreaInput.value} - ${hotelNameInput.value}`;

                } else {
                    rightSideContent += ` - ${hotelNameInput.value}`;

                }

                /* in case both dates are in different years */
                rightSideContent += `\nمن\n${formattedCheckInDate}\nالى\n${formattedCheckOutDate}\nمجموع الليالي ${nightCount}\n${roomDescriptionInput.value}`;
                if (breakfastCheckbox.checked) {
                    rightSideContent += ` شامل الإفطار`;
                }

            } else {
                if (hotelAreaInput.value !== '') {
                    /* Also check if the 'hotelAreaInput' contain text or no */
                    rightSideContent += ` - ${hotelAreaInput.value} - ${hotelNameInput.value}`;
                } else {
                    rightSideContent += ` - ${hotelNameInput.value}`;
                }

                /* in case both dates are in the same years */
                rightSideContent += `\nمن ${formattedCheckInDate} الى ${formattedCheckOutDate}\nمجموع الليالي ${nightCount}\n${roomDescriptionInput.value}`;
                if (breakfastCheckbox.checked) {
                    rightSideContent += ` شامل الإفطار`;
                }

            }




            // Create h6 element for right side content
            let rightSideH6 = document.createElement('h6');
            rightSideH6.innerText = rightSideContent;
            rightSideDiv.appendChild(rightSideH6);

            // Arrange content for the left side
            let hotelImgSrcReadyText = hotelNameInput.value.toLowerCase().replace(/\s+/g, '-');

            // Create img element for left side content
            let hotelImg = document.createElement('img');

            // Function to show edit or delete the inserted hotel data
            hotelImg.onclick = (event) => {
                event.preventDefault(); // Prevent the default behavior of the click event
                event.stopPropagation(); // Stop the event from propagating further

                // Store the current hotel data div
                currentHotelDataDiv = event.target.closest('.inserted_hotel_data_div');

                // Create overlay layer
                let overlayLayer = document.createElement('div');
                overlayLayer.className = 'black_overlay';
                document.body.appendChild(overlayLayer);

                // Show overlay layer with smooth opacity transition
                setTimeout(() => {
                    overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
                }, 100);

                // Slide in delete box options div
                let editDeleteDiv = document.getElementById('ensure_delete_hotel_data_div');

                // Smoothly slide to the middle of the screen
                setTimeout(() => {
                    editDeleteDiv.style.transform = 'translate(-50%, -50%)'; // Slide to the center of the screen
                }, 50); // Adjust timing as needed

                // Event listener to close overlay and delete box div on click outside
                overlayLayer.onclick = () => {
                    // Hide delete box options div
                    editDeleteDiv.style.transform = 'translate(-50%, -100vh)';

                    // Hide overlay layer with opacity transition
                    overlayLayer.style.opacity = '0';

                    // Remove overlay and delete box div from DOM after transition
                    setTimeout(() => {
                        document.body.removeChild(overlayLayer);
                    }, 300); // Match transition duration in CSS
                };
            };


            /* Enter the hotel image src value and then append it */
            hotelImg.src = `صور-الفنادق/${hotelImgSrcReadyText}.jpg`; // Replace with your image path
            leftSideDiv.appendChild(hotelImg);

            // Append left and right side content to insertedHotelDataDiv
            insertedHotelDataDiv.appendChild(rightSideDiv);
            insertedHotelDataDiv.appendChild(leftSideDiv);

            // Append the new hotel data div
            document.getElementById('inserted_hotel_data_position_div').appendChild(insertedHotelDataDiv);




            // Get references to all input elements and the ensure text element
            document.getElementById('hotel_location_input_id').value = '';
            document.getElementById('hotel_area_input_id').value = '';
            document.getElementById('hotel_name_input_id').value = '';
            document.getElementById('check_in_date_input_id').value = '';
            document.getElementById('check_out_date_input_id').value = '';
            document.getElementById('hotel_details_input_id').value = '';
            document.getElementById('breakfast_checkbox').checked = false;

            // Disable the hotel_area_input_id and hotel_name_input_id inputs
            document.getElementById('hotel_area_input_id').disabled = true;
            document.getElementById('hotel_name_input_id').disabled = true;



            // Define a global variable to store the reference
            let currentHotelDataDiv;


            // Function to handle delete or edit button click
            deleteClickedHotelData = function () {
                let editDeleteDiv = document.getElementById('ensure_delete_hotel_data_div');
                let overlayLayer = document.querySelector('.black_overlay');

                // Delete the corresponding inserted hotel data div
                currentHotelDataDiv.remove();

                // Hide edit/delete options div
                editDeleteDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS
            }





            // Function to praper drag and drop 'insertedHotelDataDiv' elements functionality
            function initializeDragAndDrop() {
                let hotelImgs = document.querySelectorAll('.left_side_hotel_data_div img'); // Select all hotel images for drag handles

                // Add event listeners for each hotelImg element
                hotelImgs.forEach((img) => {
                    // Event listener for mouse down (dragging starts)
                    img.addEventListener('mousedown', mouseDown);

                    // Event listener for touch start (dragging starts)
                    img.addEventListener('touchstart', touchStart);
                });

                // Event listener for the drop zone (inserted_hotel_data_position_div)
                let dropZone = document.getElementById('inserted_hotel_data_position_div'); // Drop zone for hotel data elements

                // Function to handle mouse down event
                function mouseDown(event) {
                    event.preventDefault(); // Prevent default behavior
                    let draggingElement = event.target.closest('.inserted_hotel_data_div'); // Get the parent div being dragged
                    draggingElement.classList.add('dragging'); // Add dragging class for styling
                    draggingElement.dataset.startY = event.clientY; // Store initial mouse position
                    document.addEventListener('mousemove', mouseMove); // Listen for mouse move events
                    document.addEventListener('mouseup', mouseUp); // Listen for mouse up events

                    // Disable scrolling
                    document.body.style.overflow = 'hidden'; // Disable page scrolling during drag
                }

                // Function to handle touch start event
                function touchStart(event) {
                    let touch = event.touches[0]; // Get the first touch
                    let draggingElement = event.target.closest('.inserted_hotel_data_div'); // Get the parent div being dragged
                    draggingElement.classList.add('dragging'); // Add dragging class for styling
                    draggingElement.dataset.startY = touch.clientY; // Store initial touch position
                    document.addEventListener('touchmove', touchMove); // Listen for touch move events
                    document.addEventListener('touchend', touchEnd); // Listen for touch end events

                    // Disable scrolling
                    document.body.style.overflow = 'hidden'; // Disable page scrolling during drag
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
                    draggingElement.classList.remove('dragging'); // Remove dragging class
                    draggingElement.style.transform = ''; // Reset transform after dragging ends
                    draggingElement.removeAttribute('data-start-y'); // Remove stored startY data

                    // Add a class to trigger the smooth transition effect
                    draggingElement.classList.add('drop-transition');
                    setTimeout(() => {
                        draggingElement.classList.remove('drop-transition');
                    }, 300); // Duration of the transition

                    document.removeEventListener('mousemove', mouseMove); // Stop listening for mouse move events
                    document.removeEventListener('mouseup', mouseUp); // Stop listening for mouse up events

                    // Enable scrolling
                    document.body.style.overflow = ''; // Re-enable page scrolling
                }

                // Function to handle touch end event
                function touchEnd(event) {
                    let draggingElement = document.querySelector('.dragging'); // Select the currently dragging element
                    draggingElement.classList.remove('dragging'); // Remove dragging class
                    draggingElement.style.transform = ''; // Reset transform after dragging ends
                    draggingElement.removeAttribute('data-start-y'); // Remove stored startY data

                    // Add a class to trigger the smooth transition effect
                    draggingElement.classList.add('drop-transition');
                    setTimeout(() => {
                        draggingElement.classList.remove('drop-transition');
                    }, 300); // Duration of the transition

                    document.removeEventListener('touchmove', touchMove); // Stop listening for touch move events
                    document.removeEventListener('touchend', touchEnd); // Stop listening for touch end events

                    // Enable scrolling
                    document.body.style.overflow = ''; // Re-enable page scrolling
                }
            }
            // Call the initializeDragAndDrop function to set up drag-and-drop functionality
            initializeDragAndDrop();
        }

















        /* Check if all package data inputs are filled */
    } else {

        // Get references to all input elements and the ensure text element
        let packageDetailsInput = document.getElementById('package_details_input_id'); // Person amount input element
        let packageTotalPriceInput = document.getElementById('package_totla_price_input_id'); // Person amount input element

        // If Not All Inputs Are Valid, Show The Error Message
        if (packageDetailsInput.value === '' || packageTotalPriceInput.value === '') {
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


            /* Show the download button */
            document.getElementById('export_package_pdf_div_id').style.display = 'block';


            // Create a new div element to insert client data
            let insertedPackageDataDiv = document.createElement('div');
            insertedPackageDataDiv.classList.add('inserted_package_data_div');

            let packageDetailsReayText = packageDetailsInput.value;
            let packageTotalPriceReayText = packageTotalPriceInput.value;

            // Replace multiple consecutive new line characters with a single new line character
            packageDetailsReayText = packageDetailsReayText.replace(/\n\s*\n/g, '\n');

            // Replace new line characters with <br> tags
            let packageDetailsWithBreaks = packageDetailsReayText.replace(/\n/g, '<br>');

            let packageDetailsH6_1 = document.createElement('h6');
            packageDetailsH6_1.innerHTML = `${packageDetailsWithBreaks}`;

            let packageDetailsH6_2 = document.createElement('h6');
            packageDetailsH6_2.innerHTML = `إجمالي السعر ${packageTotalPriceReayText}`;
            packageDetailsH6_2.id = 'package_total_price_h6_id';

            insertedPackageDataDiv.appendChild(packageDetailsH6_1);
            insertedPackageDataDiv.appendChild(packageDetailsH6_2);

            // Show the div and clear previous package data and append the new data div
            if (document.getElementById('inserted_package_data_position_div').style.display === 'none') {
                document.getElementById('inserted_package_data_position_div').style.display = 'block';
            }
            document.getElementById('inserted_package_data_position_div').innerHTML = '';
            document.getElementById('inserted_package_data_position_div').appendChild(insertedPackageDataDiv);
        }


    }



}












/* Function to open choosing pdf file name box */
openPdfDownloadBox = function () {
    // Create overlay layer
    let overlayLayer = document.createElement('div');
    overlayLayer.className = 'black_overlay';
    document.body.appendChild(overlayLayer);

    // get the name pdf file box
    let namePdfBoxDiv = document.getElementById('name_pdf_file_div');

    // Slide to the center of the screen
    namePdfBoxDiv.style.transform = 'translate(-50%, -50%)';

    // Show overlay layer with smooth opacity transition
    setTimeout(() => {
        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
    }, 100);



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


/* Function to download the pdf file with the name of the 'pdfName' value */
downloadPdfWithCustomName = function (pdfName) {
    let { jsPDF } = window.jspdf;
    let section = document.getElementById('inserted_package_data_section');

    // Create a new jsPDF instance
    let pdf = new jsPDF('p', 'mm', 'a4');

    // Set the background color for the PDF
    let imgWidth = 210; // A4 width in mm
    let pageHeight = pdf.internal.pageSize.height;

    pdf.setFillColor(172, 209, 235);
    pdf.rect(0, 0, imgWidth, pageHeight, 'F');

    // Get the text content of the section
    let textContent = section.innerText || section.textContent;

    // Set the font size and calculate line height
    pdf.setFontSize(12);
    let lineHeight = pdf.getLineHeight() / pdf.internal.scaleFactor;
    let margins = {
        top: 20,
        bottom: 20,
        left: 20,
        width: 170
    };

    // Split the text content into pages if necessary
    let lines = pdf.splitTextToSize(textContent, margins.width);
    let y = margins.top;
    let totalHeight = lines.length * lineHeight;

    // Centering the content vertically
    let verticalOffset = (pageHeight - totalHeight) / 2;

    if (verticalOffset < margins.top) {
        verticalOffset = margins.top;
    }

    y = verticalOffset;

    // Add each line of text to the PDF
    lines.forEach(line => {
        if (y + lineHeight > pageHeight - margins.bottom) {
            pdf.addPage();
            pdf.setFillColor(172, 209, 235);
            pdf.rect(0, 0, imgWidth, pageHeight, 'F');
            y = margins.top;
        }
        pdf.text(line, margins.left, y);
        y += lineHeight;
    });

    // Use html2canvas to create a canvas of the section for the images
    html2canvas(section, { scale: 2 }).then(canvas => {
        let imgData = canvas.toDataURL('image/jpeg', 0.7); // Use JPEG format with 70% quality for smaller file size
        let imgHeight = canvas.height * imgWidth / canvas.width;

        // Calculate vertical and horizontal offset to center the image on the PDF
        let imgXOffset = (imgWidth - imgWidth) / 2;
        let imgYOffset = (pageHeight - imgHeight) / 2;

        // Add scaled image to PDF with compression and center it
        pdf.addImage(imgData, 'JPEG', imgXOffset, imgYOffset, imgWidth, imgHeight, '', 'FAST');

        // Save the PDF
        pdf.save(pdfName);
    });
};





























