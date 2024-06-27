/* Function for checking if ready or no to insert the data */
// Function to check if all inputs have values
checkInputsToInsertData = function (clickedButtonId) {



    // Check if the clicked button is the 'clint_inputs_submit_button'
    if (clickedButtonId === 'clint_inputs_submit_button') {


        // Get the input elements for person amount and dates
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
            }


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




            if (clintCompanyNameInput.value === '') {

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

            } else {

                /* If شهر عشل checkbox is checked then iclude the text in the content */
                if (honeymoonCheckbox.checked) {
                    // If the years are the same, display both dates in a single h6 element
                    let h6CheckInSameYears = document.createElement('h6');
                    h6CheckInSameYears.innerText = `بكج شهر عسل 💝 - ${clintCompanyNameInput.value}\n${personAmountText}\n${firstLastCheckInCheckOutDateInput.value}\nمجموع الليالي ${allTotalNightsInput.value}`;
                    insertedClintDataDiv.appendChild(h6CheckInSameYears);

                } else {
                    // If the years are the same, display both dates in a single h6 element
                    let h6CheckInSameYears = document.createElement('h6');
                    h6CheckInSameYears.innerText = `بكج جديد - ${clintCompanyNameInput.value}\n${personAmountText}\n${firstLastCheckInCheckOutDateInput.value}\nمجموع الليالي ${allTotalNightsInput.value}`;
                    insertedClintDataDiv.appendChild(h6CheckInSameYears);
                }
            }


            // Clear previous client data and insert the new data div
            document.getElementById('inserted_clint_data_position_div').innerHTML = '';
            document.getElementById('inserted_clint_data_position_div').appendChild(insertedClintDataDiv);


            document.getElementById('inserted_clint_data_position_div').style.display = 'block';
        }










        /* Check if all hotel data inputs are filled */
    } else if (clickedButtonId === 'hotel_inputs_submit_button') {

        // Get references to all input elements and the ensure text element
        let hotelLocationInput = document.getElementById('hotel_location_input_id'); // Hotel location input element
        let hotelAreaInput = document.getElementById('hotel_area_input_id'); // Hotel area input element
        let hotelNameInput = document.getElementById('hotel_name_input_id'); // Hotel name input element
        let checkInCheckOutDateInput = document.getElementById('check_in_check_out_date_input_id'); // Check-in date input element
        let totalNightsInput = document.getElementById('total_nights_input_id'); // Check-out date input element
        let roomDescriptionTextArea = document.getElementById('room_description_textarea_id'); // Room description input element
        let breakfastCheckbox = document.getElementById('breakfast_checkbox');


        if (hotelLocationInput.value === '' || hotelNameInput.value === '' || checkInCheckOutDateInput.value === '' || roomDescriptionTextArea.value === '') {

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
            let uniqueId = `hotel_data_${new Date().getTime()}`; // Generate unique ID based on timestamp
            insertedHotelDataDiv.id = uniqueId; // Assign the unique ID to the div
            insertedHotelDataDiv.classList.add('inserted_hotel_data_div');

            // Right side content div
            let rightSideDiv = document.createElement('div');
            rightSideDiv.classList.add('right_side_hotel_data_div');

            // Left side content div
            let leftSideDiv = document.createElement('div');
            leftSideDiv.classList.add('left_side_hotel_data_div');

            // Arrange content for the right side
            let rightSideContent = `${hotelLocationInput.value}`;

            if (hotelAreaInput.value !== '') {
                rightSideContent += ` - ${hotelAreaInput.value} - ${hotelNameInput.value}\n`;
            } else {
                rightSideContent += ` - ${hotelNameInput.value}\n`;
            }

            rightSideContent += `${checkInCheckOutDateInput.value}\nمجموع الليالي ${totalNightsInput.value}\n${roomDescriptionTextArea.value}`;
            if (breakfastCheckbox.checked) {
                rightSideContent += ` شامل الإفطار`;
            }

            // Create h6 element for right side content
            let rightSideH6 = document.createElement('h6');
            rightSideH6.innerText = rightSideContent;
            rightSideDiv.appendChild(rightSideH6);

            // Arrange content for the left side
            let hotelImgSrcReadyText = hotelNameInput.value.toLowerCase().replace(/\s+/g, '-');

            // Create img element for left side content
            let hotelImg = document.createElement('img');

            hotelImg.src = `صور-الفنادق/${hotelImgSrcReadyText}.jpg`;
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
            document.getElementById('check_in_check_out_date_input_id').value = '';
            document.getElementById('total_nights_input_id').value = '';
            document.getElementById('room_description_textarea_id').value = '';
            document.getElementById('breakfast_checkbox').checked = false;

            // Disable the hotel_area_input_id and hotel_name_input_id inputs
            document.getElementById('hotel_area_input_id').disabled = true;
            document.getElementById('hotel_name_input_id').disabled = true;







            // Define a global variable to store the reference
            let currentHotelDataDiv;

            // Function to handle delete clicked hotel data
            deleteClickedHotelData = function () {
                let overlayLayer = document.querySelector('.black_overlay');

                // Delete the corresponding inserted hotel data div
                currentHotelDataDiv.remove();

                // Hide edit/delete options div
                let editDeleteDiv = document.getElementById('ensure_delete_hotel_data_div');
                editDeleteDiv.style.transform = 'translate(-50%, -100vh)';

                // Hide overlay layer with opacity transition
                overlayLayer.style.opacity = '0';

                // Remove overlay and edit/delete div from DOM after transition
                setTimeout(() => {
                    document.body.removeChild(overlayLayer);
                }, 300); // Match transition duration in CSS

                // Clear currentHotelDataDiv reference
                currentHotelDataDiv = null;
            }

            // Function to prepare drag and drop 'insertedHotelDataDiv' elements functionality
            function initializeDragAndDrop() {

                // Function to show edit or delete the inserted hotel data
                hotelImg.onclick = (event) => {
                    let editDeleteDiv = document.getElementById('ensure_delete_hotel_data_div');
                    currentHotelDataDiv = event.target.closest('.inserted_hotel_data_div');

                    // Create an overlay layer for better visual effect
                    let overlayLayer = document.createElement('div');
                    overlayLayer.classList.add('black_overlay');
                    document.body.appendChild(overlayLayer);
                    setTimeout(() => {
                        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
                        editDeleteDiv.style.transform = 'translate(-50%, -50%)'; // Slide to the center of the screen
                    }, 50);

                    // Click handler to close overlay and delete box div on click outside
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

                    // Prevent overlayLayer click propagation to avoid immediate closure
                    overlayLayer.addEventListener('click', (event) => {
                        event.stopPropagation(); // Prevent immediate closure of overlay on click
                    });
                };


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
                let insertedHotelDataDivs = document.querySelectorAll('.inserted_hotel_data_div');
                insertedHotelDataDivs.forEach((div) => {
                    div.addEventListener('mousedown', mouseDown);
                    div.addEventListener('touchstart', touchStart);
                });
            }

            // Call the initializeDragAndDrop function to set up delete and drag-and-drop functionality
            initializeDragAndDrop();
        }

















        /* Check if all package data inputs are filled */
    } else {

        // Get references to all input elements and the ensure text element
        let packageDetailsTextArea = document.getElementById('package_details_textarea_id'); // Person amount input element
        let packageTotalPriceInput = document.getElementById('package_totla_price_input_id'); // Person amount input element

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


/* Download the pdf file with the given name */
downloadPdfWithCustomName = function (pdfName) {
    let { jsPDF } = window.jspdf;
    let section1 = document.getElementById('inserted_package_data_section_1');
    let section2 = document.getElementById('inserted_package_data_section_2');
    let hotelDataDiv = document.getElementById('inserted_hotel_data_position_div');
    let packageDataDiv = document.getElementById('inserted_package_data_position_div');

    // Function to check if a div has any child elements
    let hasElements = function (div) {
        return div && div.children.length > 0;
    };

    // Create a new jsPDF instance with A4 dimensions
    let pdf = new jsPDF('p', 'mm', 'a4');

    // Set the background color for the PDF
    let imgWidth = pdf.internal.pageSize.width;
    let pageHeight = pdf.internal.pageSize.height;

    // Function to add content to the PDF
    let addContentToPDF = function (canvas, isFirstPage) {
        if (!isFirstPage) {
            pdf.addPage();
        }

        // Set background color
        pdf.setFillColor(172, 209, 235);
        pdf.rect(0, 0, imgWidth, pageHeight, 'F');

        let imgData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format with highest quality
        let imgHeight = canvas.height * imgWidth / canvas.width;

        // Calculate vertical and horizontal offset to center the image on the PDF for the first page
        let imgXOffset = (imgWidth - imgWidth) / 2;
        let imgYOffset = isFirstPage ? (pageHeight - imgHeight) / 2 : 0; // Center for the first page, start from the top for the second page

        // Add scaled image to PDF with compression and center it
        pdf.addImage(imgData, 'JPEG', imgXOffset, imgYOffset, imgWidth, imgHeight, '', 'FAST');
    };

    // Function to add HTML content as vector-based text
    let addHTMLToPDF = function (pdf, element, yOffset) {
        pdf.html(element, {
            callback: function (pdf) {
                if (yOffset) {
                    pdf.setPage(2);
                    pdf.html(element, {
                        x: 0,
                        y: yOffset,
                    });
                }
            },
            x: 0,
            y: yOffset || 0,
            html2canvas: { scale: 2 }
        });
    };

    // Check if the package data div contains elements
    if (hasElements(hotelDataDiv) && hasElements(packageDataDiv)) {
        // Use html2canvas to create a canvas of the first section (inserted_package_data_section_1)
        html2canvas(section1, { scale: 2 }).then(canvas1 => {
            addContentToPDF(canvas1, true);

            // Use html2canvas to create a canvas of the second section (inserted_package_data_section_2)
            html2canvas(section2, { scale: 2 }).then(canvas2 => {
                addContentToPDF(canvas2, false);

                // Add HTML content for vector-based text
                addHTMLToPDF(pdf, section1, 0);
                addHTMLToPDF(pdf, section2, pageHeight);

                // Save the PDF
                pdf.save(pdfName);
            });
        });
    } else if (hasElements(hotelDataDiv)) {
        // Only generate PDF with the first section
        html2canvas(section1, { scale: 2 }).then(canvas1 => {
            addContentToPDF(canvas1, true);

            // Add HTML content for vector-based text
            addHTMLToPDF(pdf, section1, 0);

            // Save the PDF
            pdf.save(pdfName);
        });
    }
};

