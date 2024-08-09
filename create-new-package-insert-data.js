/* Variable to save a number for counting functionality (Ex: hotel row table unique id..?) */
let insertedFlightDataDivUniqueId;
let insertedHotelDataDivUniqueId;
let insertedClintMovementsRowDivUniqueId = 1;



/* Function for checking if ready or no to insert the data */
// Function to check if all inputs have values
checkInputsToInsertData = function (clickedButtonId) {



    // Check if the clicked button is the 'clint_inputs_submit_icon'
    if (clickedButtonId === 'clint_inputs_submit_icon') {
        // Get references to all input elements for later use
        let packageClintNameInput = document.getElementById('package_clint_name_input_id').value;
        let adultPackagePersonAmountInput = document.getElementById('adult_package_person_amount_input_id').value;
        let kidsPackagePersonAmountInput = document.getElementById('kids_package_person_amount_input_id').value;
        let wholePackageStartDateInput = document.getElementById('whole_package_start_date_input_id').value;
        let wholePackageEndDateInput = document.getElementById('whole_package_end_date_input_id').value;
        let clintCompanyNameInput = document.getElementById('clint_company_name_input_id').value;
        let honeymoonCheckbox = document.getElementById('honeymoon_checkbox');
        let guysCheckbox = document.getElementById('guys_checkbox');
        let familyCheckbox = document.getElementById('family_checkbox');
        let twoPeopleCheckbox = document.getElementById('two_people_checkbox');
        let websiteUsersNameInput = document.getElementById('website_users_name_input_id').value;


        if (wholePackageStartDateInput === '' || wholePackageEndDateInput === '' || websiteUsersNameInput === '') {
            // Change the submit icon color to green to indicate success
            clint_inputs_submit_icon.style.backgroundColor = 'red';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);

        } else {


            // Change the submit icon color to green to indicate success
            clint_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);

            if (clintCompanyNameInput !== '') {
                // Create a new image element for the company logo
                let insertedCompanyNameLogoImage = document.createElement('img');
                // Replace spaces with dashes in the company name
                let companyNameWithoutSpaces = clintCompanyNameInput.replace(/\s+/g, '-');
                insertedCompanyNameLogoImage.src = `صور-الشركات/${companyNameWithoutSpaces}.jpg`; // Assuming this path is correct
                insertedCompanyNameLogoImage.classList.add('inserted_company_name_logo');
                insertedCompanyNameLogoImage.id = 'inserted_company_name_logo_id';
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

                // Delete any existing company image inside the 'inserted_company_name_image_position_div'
                document.getElementById('inserted_company_name_image_position_div').innerHTML = '';


                // Set the inner 'inserted_company_name_image_position_div' image just for website image
                document.getElementById('inserted_company_name_image_position_div').appendChild(insertedCompanyNameLogoImage);


                // Set the 'welcome_pdf_first_page_image_id' src to the clicked company logo name for pdf image
                document.getElementById('welcome_pdf_first_page_image_id').src = `خلفية-الشركات/${companyNameWithoutSpaces}.jpg`;


            } else {
                // Reset the 'welcome_pdf_first_page_image_id' src to the default image
                document.getElementById('welcome_pdf_first_page_image_id').src = 'first-pdf-image.jpg';

            }

            /* Function to delete company logo */
            deleteClickedCompanyLogo = function () {
                document.getElementById('inserted_company_name_image_position_div').innerHTML = '';

                // Slide in delete box options div
                let deleteHotelCardDiv = document.getElementById('ensure_delete_company_logo_div');


                // Reset the 'welcome_pdf_first_page_image_id' src to the default image
                document.getElementById('welcome_pdf_first_page_image_id').src = 'first-pdf-image.jpg';


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





            /* Get the h6 element to set the package type text */
            let clintPackageTypeH6 = document.getElementById('clint_package_type_h6');

            /* Check which checkbox is checked then include the text in the content */
            if (honeymoonCheckbox.checked) {
                clintPackageTypeH6.innerHTML = 'بكج شهر عسل';
                document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText = 'بكج شهل عسل';

            } else if (guysCheckbox.checked) {
                clintPackageTypeH6.innerHTML = 'بكج شباب';
                document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText = 'بكج شباب';

            } else if (familyCheckbox.checked) {
                clintPackageTypeH6.innerHTML = 'بكج عائلة';
                document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText = 'بكج عائلة';

            } else if (twoPeopleCheckbox.checked) {
                clintPackageTypeH6.innerHTML = 'بكج شخصين';
                document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText = 'بكج شخصين';

            } else {
                clintPackageTypeH6.innerHTML = 'بكج جديد';
                document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText = '';

            }




            /* if there is any value in the 'packageClintNameInput' then change the border styling and set the innerText of the p element */
            if (packageClintNameInput !== '') {

                /* Set the innerText of the p element */
                clint_full_name_p.innerText = `الأستاذ : ${packageClintNameInput}`;

                /* Change the border styling for better looking */
                pdf_clint_info_section_title_div_id.style.borderBottom = '0.5px solid black';

                /* Show the p element if it was hidden */
                clint_full_name_p.style.display = 'block';


                /* Store the inserted clint name in the stored p elements for later use (when importing) */
                document.getElementById('store_google_sheet_clint_name_value').innerText = clint_full_name_p.innerText;



                /* But if there is no any value in the 'packageClintNameInput' then do the following code */
            } else {
                clint_full_name_p.innerText = '';

                pdf_clint_info_section_title_div_id.style.borderBottom = 'none';

                clint_full_name_p.style.display = 'none';

                document.getElementById('store_google_sheet_clint_name_value').innerText = '';
            }











            /* Match the whole website dates based on the changes of the 'whole_package_first_date_p_id' */
            if (document.getElementById('whole_package_first_date_p_id') && document.getElementById('whole_package_first_date_p_id').innerText !== wholePackageStartDateInput) {

                // Get the current date from the 'whole_package_first_date_p_id' element
                let currentStartDate = document.getElementById('whole_package_first_date_p_id').innerText;

                // Parse the current date and the new start date to Date objects
                let parsedCurrentStartDate = parseArabicDate(currentStartDate);
                let parsedNewStartDate = parseArabicDate(wholePackageStartDateInput);

                // Calculate the difference in days
                let timeDifference = parsedNewStartDate - parsedCurrentStartDate;
                let dayDifference = Math.round(timeDifference / (1000 * 3600 * 24));

                // Adjust hotel dates if there are any hotel rows for editing
                if (document.querySelectorAll('.hotel_row_class_for_editing').length > 0) {

                    // Adjust the dates of elements with the specified class names
                    let checkInElements = document.querySelectorAll('.hotel_check_in_date_for_matching_whole_package_date');
                    let checkOutElements = document.querySelectorAll('.hotel_check_out_date_for_matching_whole_package_date');

                    checkInElements.forEach(element => {
                        let checkInDate = element.innerText;
                        let parsedCheckInDate = parseArabicDate(checkInDate);
                        let newCheckInDate = new Date(parsedCheckInDate);
                        newCheckInDate.setDate(newCheckInDate.getDate() + dayDifference);
                        element.innerText = `${newCheckInDate.getDate()} ${getArabicMonthName(newCheckInDate.getMonth())}`;
                    });

                    checkOutElements.forEach(element => {
                        let checkOutDate = element.innerText;
                        let parsedCheckOutDate = parseArabicDate(checkOutDate);
                        let newCheckOutDate = new Date(parsedCheckOutDate);
                        newCheckOutDate.setDate(newCheckOutDate.getDate() + dayDifference);
                        element.innerText = `${newCheckOutDate.getDate()} ${getArabicMonthName(newCheckOutDate.getMonth())}`;
                    });

                }

                // Adjust flight dates if there are any flight rows for editing
                if (document.querySelectorAll('.flight_row_class_for_editing').length > 0) {

                    let flyDates = document.querySelectorAll('.flight_date_for_matching_whole_package_date');

                    flyDates.forEach(element => {
                        let flightDate = element.innerText;
                        let parsedFlightDate = parseArabicDate(flightDate);
                        let newFlightDate = new Date(parsedFlightDate);
                        newFlightDate.setDate(newFlightDate.getDate() + dayDifference);
                        element.innerText = `${newFlightDate.getDate()} ${getArabicMonthName(newFlightDate.getMonth())}`;
                    });

                }

                // Adjust client movement dates if there are any client movement rows for editing
                if (document.querySelectorAll('.clint_movements_row_class_for_editing').length > 0) {

                    // Target all divs with the class 'clint_movements_row_class_for_editing'
                    let movementRows = document.querySelectorAll('.clint_movements_row_class_for_editing');

                    movementRows.forEach(div => {
                        // Get the h1 element within the div
                        let dateElement = div.querySelector('h1');

                        // Check if h1 exists within the div
                        if (dateElement) {
                            // Get the date in Arabic format from the h1 element
                            let arabicDate = dateElement.innerText;

                            // Parse the Arabic date to a Date object
                            let parsedDate = parseArabicDate(arabicDate);

                            // Create a new date object and adjust it by the day difference
                            let newDate = new Date(parsedDate);
                            newDate.setDate(newDate.getDate() + dayDifference);

                            // Update the h1 element with the new date in Arabic format
                            dateElement.innerText = `${newDate.getDate()} ${getArabicMonthName(newDate.getMonth())}`;
                        }
                    });
                }



                // Print the difference in days to the console
                console.log(`The difference in days is: ${dayDifference}`);


            }




            /* Create a new variable to build all the clint info content */
            let insertedClintDataRowDivContent;

            /* Check if there is any data in the 'kidsPackagePersonAmountInput' then combine adult and kids amounts values */
            let combinedPersonAmount = `${adultPackagePersonAmountInput}`;
            if (kidsPackagePersonAmountInput !== '') {
                combinedPersonAmount += ` + ${kidsPackagePersonAmountInput}`;

                /* Store the inserted values in the stored p elements for later use (when importing) */
                document.getElementById('store_google_sheet_package_kids_amount_value').innerText = kidsPackagePersonAmountInput;
            }


            insertedClintDataRowDivContent = `
                <div>
                    <p>${combinedPersonAmount}</p>
                </div>
                <div>
                    <p id="whole_package_first_date_p_id">${wholePackageStartDateInput}</p>
                </div>
                <div>
                    <p>${wholePackageEndDateInput}</p>
                </div>
                <div style="cursor: pointer;">
                    <p>${storePackageTotalNights}</p>
                </div>
            `;






            /* Show the 'clint_data_row_main_div_id' if there is any data is inserted */
            document.getElementById('clint_data_row_main_div_id').style.display = 'flex';

            let insertedClintDataRowDiv = document.createElement('div');
            insertedClintDataRowDiv.classList.add('clint_data_row_class');
            insertedClintDataRowDiv.innerHTML = insertedClintDataRowDivContent;


            // Clear previous client data and insert the new data div
            let insertedClintDataPositionDiv = document.getElementById('inserted_clint_data_position_div');
            insertedClintDataPositionDiv.innerHTML = ''; // Clear the existing content
            insertedClintDataPositionDiv.appendChild(insertedClintDataRowDiv);






            /* Store the inserted values in the stored p elements for later use (when importing) */
            document.getElementById('store_google_sheet_whole_package_first_date_value').innerText = wholePackageStartDateInput;
            document.getElementById('store_google_sheet_whole_package_last_date_value').innerText = wholePackageEndDateInput;
            document.getElementById('store_google_sheet_whole_package_total_nights_value').innerText = storePackageTotalNights;






            /* Create variable for stoing the last clicked website user name */
            let lastCLickedWebsiteUserNameVariable;



            if (document.getElementById('website_users_name_input_id').disabled !== true) {


                if (document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText === '' || document.getElementById('website_users_name_input_id').value !== lastCLickedWebsiteUserNameVariable) {
                    /* Set the package code text based on the website user name & current year & saved packages amount */
                    let websiteUsersNameInput;
                    if (document.getElementById('website_users_name_input_id').value === 'بكج مستر سامي') {
                        websiteUsersNameInput = 'mr_sa';

                    } else if (document.getElementById('website_users_name_input_id').value === 'بكج عبد الله') {
                        websiteUsersNameInput = 'abd_amr';

                    } else if (document.getElementById('website_users_name_input_id').value === 'بكج معتز') {
                        websiteUsersNameInput = 'mo_ta';

                    } else if (document.getElementById('website_users_name_input_id').value === 'بكج وائل') {
                        websiteUsersNameInput = 'wa_el';

                    } else if (document.getElementById('website_users_name_input_id').value === 'بكج عبد الرحمن') {
                        websiteUsersNameInput = 'abd_rah';

                    } else if (document.getElementById('website_users_name_input_id').value === 'بكج علي') {
                        websiteUsersNameInput = 'ali_amr';

                    } else if (document.getElementById('website_users_name_input_id').value === 'بكج مستر ابو سما') {
                        websiteUsersNameInput = 'abo_sma';

                    }


                    // Get the current year as a four-digit number
                    const currentYear = new Date().getFullYear();
                    // Extract the last two digits of the year
                    const lastTwoNumbersOfTheCurrentYear = currentYear % 100;


                    document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText = `${websiteUsersNameInput}_${lastTwoNumbersOfTheCurrentYear}_${mostTopEmptyCellRowNumberValue}`;


                    /* Store the last clicked website user name for later refrence if it got changed */
                    lastCLickedWebsiteUserNameVariable = document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText;
                }
            }




            /* Show up the 'downloaded_pdf_clint_data_page' section */
            document.getElementById('downloaded_pdf_clint_data_page').style.display = 'block';


        }















        /* Check if all package including data inputs are filled */
    } else if (clickedButtonId === 'package_including_data_inputs_submit_icon') {
        // Array of checkbox IDs
        let checkboxIds = [
            'privet_car_with_driver_to_welcome_and_etc_checkbox',
            'hotel_booking_with_breakfast_for_2_people_checkbox',
            'welcome_goodbye_hotel_delivery_checkbox',
            'customer_service_24_hour_checkbox',
            'sms_card_with_internet_checkbox',
            'inner_flight_tickets_checkbox',
            'outer_flight_tickets_checkbox',
            'placese_visiting_cost_checkbox',
            'bali_taxes_not_covered_checkbox'
        ];

        // Get references to the text areas
        let packageIncludingDataTextArea = document.getElementById('package_details_textarea_id').value;
        let smsCardWithInternetAmountInputReayText = document.getElementById('sms_card_with_internet_amount_input_id').value;
        let innerFlightTicketsAmountInputReayText = document.getElementById('inner_flight_tickets_amount_input_id').value;
        let packageTotlaPriceInput = document.getElementById('package_totla_price_input_id').value;

        // Show success message
        package_including_data_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
        setTimeout(() => {
            package_including_data_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
        }, 500);

        // Create new div elements for including and not including data
        let insertedPackageIncludingDataDiv = document.createElement('div');
        insertedPackageIncludingDataDiv.id = 'inserted_package_including_data_div';
        insertedPackageIncludingDataDiv.className = 'inserted_package_including_and_not_icluding_data_div_class';

        let insertedPackageNotIncludingDataDiv = document.createElement('div');
        insertedPackageNotIncludingDataDiv.id = 'inserted_package_not_including_data_div';
        insertedPackageNotIncludingDataDiv.className = 'inserted_package_including_and_not_icluding_data_div_class';


        /* in case there is a package total price in the 'packageTotlaPriceInput' */
        if (packageTotlaPriceInput !== '') {
            document.getElementById('downloaded_pdf_total_price_data_page').style.display = 'block';
            document.getElementById('package_total_price_p_id').innerText = packageTotlaPriceInput;
            document.getElementById('store_localstorage_package_total_price_value').innerText = packageTotlaPriceInput;

        } else {
            document.getElementById('downloaded_pdf_total_price_data_page').style.display = 'none';
            document.getElementById('store_localstorage_package_total_price_value').innerText = '';

        }

        // Function to get the current color of the checkbox label pseudo-element
        function getCheckboxColor(checkbox) {
            let label = checkbox.nextElementSibling;
            return window.getComputedStyle(label, '::before').backgroundColor;
        }

        // Loop over checkboxes
        checkboxIds.forEach(id => {
            let checkbox = document.getElementById(id); // Get the checkbox element by its ID
            let label = document.querySelector(`label[for="${id}"]`); // Get the associated label element
            let labelText = label.innerHTML.split('<br>').map(text => text.trim()); // Split label text by <br> and trim each part
            let p = document.createElement('p'); // Create a new paragraph element
            let icon = document.createElement('ion-icon'); // Create a new ion-icon element

            // Determine the color of the checkbox
            let color = getCheckboxColor(checkbox);

            if (color === 'rgb(0, 255, 0)') { // If the checkbox color is green
                icon.setAttribute('name', 'checkmark-outline'); // Set the icon to a checkmark
                p.appendChild(icon); // Append the icon to the paragraph

                if (id === 'sms_card_with_internet_checkbox') {
                    let textContent = smsCardWithInternetAmountInputReayText !== ''
                        ? ` ${smsCardWithInternetAmountInputReayText}`
                        : ' شرائح إنترنت'; // Default text if input is empty
                    p.appendChild(document.createTextNode(textContent)); // Append the text
                    p.style.padding = '0 5px'; // Add padding to this p element

                    // Update the store_localstorage_package_including_sms_value element
                    let smsDateValueElement = document.getElementById('store_localstorage_package_including_sms_value');
                    smsDateValueElement.innerText = smsCardWithInternetAmountInputReayText !== '' ? smsCardWithInternetAmountInputReayText : '';

                } else if (id === 'inner_flight_tickets_checkbox') {
                    let textContent = innerFlightTicketsAmountInputReayText !== ''
                        ? ` ${innerFlightTicketsAmountInputReayText}`
                        : ' تذاكر الطيران الداخلي'; // Default text if input is empty
                    p.appendChild(document.createTextNode(textContent)); // Append the text
                    p.style.padding = '0 5px'; // Add padding to this p element

                    // Update the store_localstorage_package_including_inner_tickets_value element
                    let innerTicketsDateValueElement = document.getElementById('store_localstorage_package_including_inner_tickets_value');
                    innerTicketsDateValueElement.innerText = innerFlightTicketsAmountInputReayText !== '' ? innerFlightTicketsAmountInputReayText : '';

                } else {
                    labelText.forEach((text, index) => { // Loop through the label text parts
                        p.appendChild(document.createTextNode(` ${text}`)); // Append the text part
                        if (index < labelText.length - 1) {
                            p.appendChild(document.createElement('br')); // Append a line break except for the last part
                        }
                    });
                }

                p.className = 'inserted_package_including_data_text'; // Set the class for the paragraph
                if (id === 'sms_card_with_internet_checkbox' || id === 'inner_flight_tickets_checkbox') {
                    p.classList.add('special_package_including_data_background_color_text'); // Add a special class for certain checkboxes
                }
                insertedPackageIncludingDataDiv.appendChild(p); // Append the paragraph to the including data div

            } else if (color === 'rgb(255, 0, 0)') { // If the checkbox color is red
                icon.setAttribute('name', 'close-outline'); // Set the icon to a close mark
                p.appendChild(icon); // Append the icon to the paragraph
                labelText.forEach((text, index) => { // Loop through the label text parts
                    p.appendChild(document.createTextNode(` ${text}`)); // Append the text part
                    if (index < labelText.length - 1) {
                        p.appendChild(document.createElement('br')); // Append a line break except for the last part
                    }
                });
                p.className = 'inserted_package_not_including_data_text'; // Set the class for the paragraph
                if (id === 'sms_card_with_internet_checkbox' || id === 'inner_flight_tickets_checkbox') {
                    p.classList.add('special_package_including_data_background_color_text'); // Add a special class for certain checkboxes
                    p.style.padding = '0 5px'; // Add padding to this p element
                }
                insertedPackageNotIncludingDataDiv.appendChild(p); // Append the paragraph to the not including data div
            }

            p.setAttribute('onclick', 'runDeleteThisPackageIncludingDataText(this)'); // Set the onclick attribute to delete the text
        });




        // Include package details text area if not empty
        if (packageIncludingDataTextArea !== '') {
            packageIncludingDataTextArea.split('\n').forEach(text => { // Split the textarea content by newlines
                if (text.trim() !== '') { // For each non-empty line
                    let p = document.createElement('p'); // Create a new paragraph element
                    let icon = document.createElement('ion-icon'); // Create a new ion-icon element
                    icon.setAttribute('name', 'checkmark-outline'); // Set the icon to a checkmark
                    p.appendChild(icon); // Append the icon to the paragraph
                    p.appendChild(document.createTextNode(` ${text.trim()}`)); // Append the text line
                    p.className = 'inserted_package_including_data_text'; // Set the class for the paragraph
                    p.setAttribute('onclick', 'runDeleteThisPackageIncludingDataText(this)'); // Set the onclick attribute to delete the text
                    p.classList.add('special_package_including_data_background_color_text'); // Add a special class for background color
                    p.style.padding = '0 5px'; // Add padding to this p element
                    insertedPackageIncludingDataDiv.appendChild(p); // Append the paragraph to the including data div
                }
            });
        }

        // Append the data to the respective divs
        let insertedPackageIncludingDataPositionDiv = document.getElementById('inserted_package_icluding_data_position_div');
        let insertedPackageNotIncludingDataPositionDiv = document.getElementById('inserted_package_not_icluding_data_position_div');

        insertedPackageIncludingDataPositionDiv.innerHTML = ''; // Clear the including data position div
        insertedPackageIncludingDataPositionDiv.appendChild(insertedPackageIncludingDataDiv); // Append the including data div

        insertedPackageNotIncludingDataPositionDiv.innerHTML = ''; // Clear the not including data position div
        insertedPackageNotIncludingDataPositionDiv.appendChild(insertedPackageNotIncludingDataDiv); // Append the not including data div

        // Show or hide titles based on content
        let pdfSectionPackageIncludingDataTitle = document.getElementById('pdf_section_package_icluding_data_title_id');
        let pdfSectionPackageNotIncludingDataTitle = document.getElementById('pdf_section_package_not_icluding_data_title_id');

        pdfSectionPackageIncludingDataTitle.style.display = insertedPackageIncludingDataDiv.children.length > 0 ? 'flex' : 'none'; // Show the including title if there is content
        pdfSectionPackageNotIncludingDataTitle.style.display = insertedPackageNotIncludingDataDiv.children.length > 0 ? 'flex' : 'none'; // Show the not including title if there is content

        // Show the 'downloaded_pdf_package_including_data_page'
        document.getElementById('downloaded_pdf_package_including_data_page').style.display = 'block'; // Show the page for the downloaded PDF
    }




















    /* Check if all hotel data inputs are filled */
    else if (clickedButtonId === 'clint_flight_inputs_submit_icon') {

        // Get references to all input elements for later use
        let flightAirLineInput = document.getElementById('flight_air_line_input_id').value;
        let flightAdultPersonAmountInput = document.getElementById('flight_adult_person_amount_input_id').value;
        let flightInfantPersonAmountInput = document.getElementById('flight_infant_person_amount_input_id').value;
        let flightFromCityInput = document.getElementById('flight_from_city_input_id').value;
        let flightToCityInput = document.getElementById('flight_to_city_input_id').value;
        let flightDateInput = document.getElementById('flight_date_input_id').value;
        let flightFlyAwayTimeInput = document.getElementById('flight_fly_away_time_input_id').value;
        let flightArrivalTimeInput = document.getElementById('flight_arrival_time_input_id').value;





        // If Not All Inputs Are Valid, Show The Error Message
        if (flightAirLineInput === '' || flightAdultPersonAmountInput === '' || flightFromCityInput === '' || flightToCityInput === '' || flightDateInput === '') {

            /* Chnage the sumbit icon background color */
            clint_flight_inputs_submit_icon.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_flight_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);


        } else {

            /* in case if the two city inputs were the same then dont continue the process */
            if (flightFromCityInput === flightToCityInput) {
                /* Chnage the sumbit icon background color */
                clint_flight_inputs_submit_icon.style.backgroundColor = 'red';

                // Set the background color of the submit icon back to default color
                setTimeout(() => {
                    clint_flight_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
                }, 500);

            } else {
                /* Change the 'تم' button color */
                clint_flight_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
                // Set the background color of the submit icon back to default color
                setTimeout(() => {
                    clint_flight_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
                }, 2000);





                /* Set the 'insertedHotelDataDivUniqueId' value based on the following condition */
                if (document.getElementById('store_localstorage_flight_uniuqe_id_name_value').innerText !== '') {
                    insertedFlightDataDivUniqueId = document.getElementById('store_localstorage_flight_uniuqe_id_name_value').innerText;
                } else {
                    insertedFlightDataDivUniqueId = 1;
                }



                // Create the HTML content for a new hotel row
                let flightRowTableDivContent = `
                    <div><p class="flight_row_flight_arrival_time_controller inserted_flight_data_row" style="cursor: pointer;" id='flight_air_line_${insertedFlightDataDivUniqueId}'>${flightAirLineInput}</p></div>
                    <div><p id='flight_adult_person_amount_${insertedFlightDataDivUniqueId}'>${flightAdultPersonAmountInput}</p>\n<p id='flight_infant_person_amount_${insertedFlightDataDivUniqueId}'>${flightInfantPersonAmountInput}</p></div>
                    <div><p>20 كيلو للشخص</p></div>
                    <div><p id='flight_from_city_${insertedFlightDataDivUniqueId}'>${flightFromCityInput}</p></div>
                    <div><p id='flight_to_city_${insertedFlightDataDivUniqueId}'>${flightToCityInput}</p></div>
                    <div><p id='flight_date_${insertedFlightDataDivUniqueId}' class="flight_date_for_matching_whole_package_date">${flightDateInput}</p></div>
                    <div><p id='flight_fly_away_time_${insertedFlightDataDivUniqueId}'>${flightFlyAwayTimeInput}</p></div>
                    <div><p id='flight_arrival_time_${insertedFlightDataDivUniqueId}'>${flightArrivalTimeInput}</p></div>
                `;







                // Create a new div element to hold the flight row
                let flightRowTableDiv = document.createElement('div');
                flightRowTableDiv.id = `flight_row_id_${insertedFlightDataDivUniqueId}`; // Set a unique ID for the hotel row div
                flightRowTableDiv.classList.add('flight_row_class', 'flight_row_class_for_editing'); // Add a class to the div for styling
                insertedFlightDataDivUniqueId++;


                /* Store the new unique id name 'insertedHotelDataDivUniqueId' for later refrence and use (when importing data) */
                document.getElementById('store_localstorage_flight_uniuqe_id_name_value').innerText = insertedFlightDataDivUniqueId;


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



                // Get references to all input elements and reset their values thier
                document.getElementById('flight_air_line_input_id').value = '';
                document.getElementById('flight_adult_person_amount_input_id').value = '';
                document.getElementById('flight_infant_person_amount_input_id').value = '';
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
                    create_new_clint_movements_paln_section.style.display = 'none';
                    create_new_package_including_and_not_including_data_section.style.display = 'none';


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
                    let deleteFlightRowDiv = document.getElementById('ensure_delete_or_edit_flight_data_div');
                    deleteFlightRowDiv.style.transform = 'translate(-50%, -100vh)';

                    // Hide overlay layer with opacity transition
                    overlayLayer.style.opacity = '0';

                    // Remove overlay and edit/delete div from DOM after transition
                    setTimeout(() => {
                        document.body.removeChild(overlayLayer);
                    }, 300); // Match transition duration in CSS


                    // Get the clicked flight data row
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
                        // Get the clicked flight data row
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
                            <div><p id='flight_date_${insertedFlightDataDivUniqueId}' class="flight_date_for_matching_whole_package_date">${flightDateInput}</p></div>
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
                            document.getElementById('header_navbar_links_package_icluding_and_not_including_a').style.backgroundColor = 'rgb(85, 127, 137)';
                            document.getElementById('header_navbar_links_clint_movements_a').style.backgroundColor = 'rgb(85, 127, 137)';
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

                            // Disable scrolling without affecting layout
                            document.body.style.touchAction = 'none';
                            document.body.style.userSelect = 'none';
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

                        // Restore scrolling
                        document.body.style.touchAction = '';
                        document.body.style.userSelect = '';
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
        let hotelNameReadyText = document.getElementById('hotel_name_input_id').value;
        let hotelCheckInReadyText = document.getElementById('hotel_check_in_input_id').value;
        let hotelCheckOutReadyText = document.getElementById('hotel_check_out_input_id').value;
        let hotelRoomTypeDescriptionInput = document.getElementById('hotel_room_type_description_input_id').value;
        let hotelRoomContainPoolInput = document.getElementById('hotel_room_contain_pool_input_id').value;
        let hotelRoomViewInput = document.getElementById('hotel_room_view_input_id').value;
        let hotelUnitAmountInput = document.getElementById('hotel_unit_amount_input_id').value;
        let hotelBreakfastPeopleAmountInput = document.getElementById('hotel_breakfast_people_amount_input_id').value;
        let hotelRoomExtraInfoReadyText = document.getElementById('hotel_room_extra_info_textarea_id').value;

        if (hotelNameReadyText === '' || hotelCheckInReadyText === '' || hotelCheckOutReadyText === '' || hotelRoomTypeDescriptionInput === '' || hotelUnitAmountInput === '') {

            // Change the submit icon background color
            hotel_inputs_submit_icon.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                hotel_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);

        } else {
            // Change the submit icon background color
            hotel_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                hotel_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);

            // Convert the hotel name to lowercase and replace spaces with hyphens to create a suitable image filename
            let hotelImgSrcReadyText = hotelNameReadyText.toLowerCase().replace(/\s+/g, '-');


            /* Set the 'insertedHotelDataDivUniqueId' value based on the following condition */
            if (document.getElementById('store_localstorage_hotel_uniuqe_id_name_value').innerText !== '') {
                insertedHotelDataDivUniqueId = document.getElementById('store_localstorage_hotel_uniuqe_id_name_value').innerText;
            } else {
                insertedHotelDataDivUniqueId = 1;
            }


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
                <div><h3 style="color: red" id='hotel_check_out_${insertedHotelDataDivUniqueId}' class="hotel_check_out_date_for_matching_whole_package_date">${hotelCheckOutReadyText}</h3></div>
                <div><h4 id='hotel_total_nights_${insertedHotelDataDivUniqueId}'>${storeHotelTotalNights}</h4></div>
                <div class="description_cell"><span id='hotel_room_type_description_${insertedHotelDataDivUniqueId}'>${hotelRoomTypeDescriptionInput}</span></div>
                <div><p id='hotel_total_unit_${insertedHotelDataDivUniqueId}'>${storeHotelTotalUnitNumber}</p></div>
                <div><h5 id='hotel_location_${insertedHotelDataDivUniqueId}'>${hotelLocationReadyText}</h5>${hotelAreaReadyText ? `<br><p id='hotel_area_${insertedHotelDataDivUniqueId}'>${hotelAreaReadyText}</p>` : ''}</p><img src="صور-الفنادق/${hotelImgSrcReadyText}.jpg" class="hotel_row_image_controller inserted_hotel_data_row" style="cursor: pointer"></div>
            `;



            // Create a new div element to hold the hotel row
            let hotelRowTableDiv = document.createElement('div');
            hotelRowTableDiv.id = `hotel_row_id_${insertedHotelDataDivUniqueId}`; // Set a unique ID for the hotel row div
            hotelRowTableDiv.classList.add('hotel_row_class', 'hotel_row_class_for_editing'); // Add a class to the div for styling


            // Insert the HTML content into the newly created div
            hotelRowTableDiv.innerHTML = hotelRowTableDivContent;

            // Append <p> elements for each input with text
            if (hotelRoomContainPoolInput !== '') {
                let poolP = document.createElement('span');
                poolP.id = `hotel_pool_p_id_${insertedHotelDataDivUniqueId}`;
                poolP.innerText = hotelRoomContainPoolInput;
                hotelRowTableDiv.querySelector('.description_cell').appendChild(poolP);
            }
            if (hotelRoomViewInput !== '') {
                let viewP = document.createElement('span');
                viewP.id = `hotel_view_p_id_${insertedHotelDataDivUniqueId}`;
                viewP.innerText = hotelRoomViewInput;
                hotelRowTableDiv.querySelector('.description_cell').appendChild(viewP);
            }
            if (hotelBreakfastPeopleAmountInput !== '') {
                let breakfastP = document.createElement('span');
                breakfastP.id = `hotel_breakfast_p_id_${insertedHotelDataDivUniqueId}`;
                breakfastP.innerText = hotelBreakfastPeopleAmountInput;
                hotelRowTableDiv.querySelector('.description_cell').appendChild(breakfastP);
            }
            if (hotelRoomExtraInfoReadyText !== '') {
                let hotelExtraInfoSpan = document.createElement('span');
                hotelExtraInfoSpan.id = `hotel_room_extra_info_${insertedHotelDataDivUniqueId}`;
                hotelExtraInfoSpan.innerText = hotelRoomExtraInfoReadyText;
                hotelExtraInfoSpan.style.background = 'rgb(85, 127, 137)';
                hotelExtraInfoSpan.style.color = 'white';
                hotelExtraInfoSpan.style.padding = '0 5px';
                hotelRowTableDiv.querySelector('.description_cell').appendChild(hotelExtraInfoSpan);
            }

            insertedHotelDataDivUniqueId++;


            /* Store the new unique id name 'insertedHotelDataDivUniqueId' for later refrence and use (when importing data) */
            document.getElementById('store_localstorage_hotel_uniuqe_id_name_value').innerText = insertedHotelDataDivUniqueId;


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





            // Get references to all input elements and reset their values
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










            // Define a global variable to store the reference
            let currentHotelDataDivId;

            // Function to handle delete clicked hotel data
            deleteClickedHotelData = function (clickedHotelRowIdName) {

                let clickedHotelCardElement = document.getElementById(clickedHotelRowIdName);
                if (clickedHotelCardElement) {
                    clickedHotelCardElement.remove();
                }

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
                create_new_clint_movements_paln_section.style.display = 'none';
                create_new_package_including_and_not_including_data_section.style.display = 'none';


                /* Hide and show different icons */
                document.getElementById('hotel_inputs_submit_icon').style.display = 'none';
                document.getElementById('confirm_new_hotel_data_row_icon').style.display = 'block';
                document.getElementById('cancel_new_hotel_data_row_icon').style.display = 'block';


                /* Change the innerText and the background color of the 'hotel_content_section_title_text_id' */
                document.getElementById('hotel_content_section_title_text_id').style.backgroundColor = 'rgb(85, 127, 137)';
                document.getElementById('hotel_content_section_title_text_id').innerText = 'تعديل تفاصيل الفندق';


                /* Scroll up to the middle of the 'hotel_data_dropdown_content' */
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


                document.getElementById('hotel_name_input_id').disabled = false; // Re-enable hotel name input



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



                /* Function to cancel the hotel row data editing process */
                cancelNewHotelDataRow = function () {
                    // Get references to all input elements and reset their values
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


                    /* Hide and show different icons */
                    document.getElementById('hotel_inputs_submit_icon').style.display = 'block';
                    document.getElementById('confirm_new_hotel_data_row_icon').style.display = 'none';
                    document.getElementById('cancel_new_hotel_data_row_icon').style.display = 'none';


                    /* Reset the innerText and styling to defualt */
                    document.getElementById('hotel_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';
                    document.getElementById('hotel_content_section_title_text_id').innerText = 'تفاصيل الفندق';
                };



                /* Function to confirm the new hotel row data */
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
                            <div><h3 style="color: red" id='hotel_check_out_${insertedHotelDataDivUniqueId}' class="hotel_check_out_date_for_matching_whole_package_date">${hotelCheckOutReadyText}</h3></div>
                            <div><h4 id='hotel_total_nights_${insertedHotelDataDivUniqueId}'>${storeHotelTotalNights}</h4></div>
                            <div class="description_cell"><span id='hotel_room_type_description_${insertedHotelDataDivUniqueId}'>${hotelRoomTypeDescriptionInput}</span></div>
                            <div><p id='hotel_total_unit_${insertedHotelDataDivUniqueId}'>${storeHotelTotalUnitNumber}</p></div>
                            <div><h5 id='hotel_location_${insertedHotelDataDivUniqueId}'>${hotelLocationReadyText}</h5>${hotelAreaReadyText ? `<br><p id='hotel_area_${insertedHotelDataDivUniqueId}'>${hotelAreaReadyText}</p>` : ''}</p><img src="صور-الفنادق/${hotelImgSrcReadyText}.jpg" class="hotel_row_image_controller inserted_hotel_data_row" style="cursor: pointer"></div>
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
                    }
                };
            };







            // Function to show delete the inserted hotel data
            function hotelRowImageControllerFunction(event) {
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

                        // Disable scrolling without affecting layout
                        document.body.style.touchAction = 'none';
                        document.body.style.userSelect = 'none';
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

                        // Disable scrolling without affecting layout
                        document.body.style.touchAction = 'none';
                        document.body.style.userSelect = 'none';
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
                    document.body.style.touchAction = '';
                    document.body.style.userSelect = '';
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
                    document.body.style.touchAction = '';
                    document.body.style.userSelect = '';
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


















    } else if (clickedButtonId === 'clint_movements_auto_create_icon') {

        console.log('Great');

        document.getElementById('inserted_clint_movements_data_position_div').innerHTML = '';


        // Function to increment a date by a specified number of days
        function incrementDate(dateString, days) {
            let [day, month] = dateString.split(' ');
            const arabicMonths = {
                "يناير": 0, "فبراير": 1, "مارس": 2, "أبريل": 3,
                "مايو": 4, "يونيو": 5, "يوليو": 6, "أغسطس": 7,
                "سبتمبر": 8, "أكتوبر": 9, "نوفمبر": 10, "ديسمبر": 11
            };
            const monthNames = Object.keys(arabicMonths);

            let date = new Date();
            date.setDate(parseInt(day));
            date.setMonth(arabicMonths[month]);
            date.setDate(date.getDate() + days);

            let newDay = date.getDate();
            let newMonth = monthNames[date.getMonth()];

            return `${newDay} ${newMonth}`;
        }

        // Get all divs with class name "hotel_row_class_for_editing"
        let hotelRows = document.querySelectorAll('.hotel_row_class_for_editing');
        let totalHotels = hotelRows.length;

        hotelRows.forEach((hotelRow, index) => {
            let hotelName = hotelRow.querySelector('h1').innerText;
            let checkInDate = hotelRow.querySelector('h2').innerText;
            let nights = parseInt(hotelRow.querySelector('h4').innerText, 10);
            let cityName = hotelRow.querySelector('h5').innerText;

            for (let i = 0; i < nights; i++) {
                let clintMovementsRowTableDiv = document.createElement('div');
                clintMovementsRowTableDiv.classList.add('clint_movements_row_class', 'clint_movements_row_class_for_editing');

                let newDate = incrementDate(checkInDate, i);

                let checkInOutText = i === 0 ? `تسجيل الدخول في ${hotelName}` : '';
                if (i === 0 && index > 0) {
                    let previousHotelName = hotelRows[index - 1].querySelector('h1').innerText;
                    let previousCityName = hotelRows[index - 1].querySelector('h5').innerText;

                    // Ensure "الذهاب الى ${cityName}" is placed after "تسجيل الخروج من ${previousHotelName}"
                    let additionalText = cityName !== previousCityName ? ` + الذهاب الى ${cityName}` : '';
                    checkInOutText = `تسجيل الخروج من ${previousHotelName}${additionalText} + تسجيل الدخول في ${hotelName}`;
                }

                clintMovementsRowTableDiv.innerHTML = `
                    <div><h1>${newDate}</h1></div>
                    <div><h2>${checkInOutText}</h2></div>
                    <div class="clint_movements_row_controller" style="cursor: pointer;"><h3>${cityName}</h3></div>
                `;

                document.getElementById('inserted_clint_movements_data_position_div').appendChild(clintMovementsRowTableDiv);

                let clintMovementsRowImageController = clintMovementsRowTableDiv.querySelector('.clint_movements_row_controller');
                clintMovementsRowImageController.onclick = function () {
                    clintMovementsRowCityNameControllerFunction(clintMovementsRowImageController);
                };

                if (index === totalHotels - 1 && (i === 0 || i === nights - 1)) {
                    let h3Element = clintMovementsRowTableDiv.querySelector('h3');
                    let finalCityName = index > 0 && i === 0 ? `${hotelRows[index - 1].querySelector('h5').innerText}-${cityName}` : `${cityName}-مغادرة`;
                    h3Element.innerText = finalCityName;
                }
            }
        });











        /* Show up the 'downloaded_pdf_clint_movements_data_page' section */
        document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'block';




        // Get all div elements with ids starting with 'clint_movements_places_names_options_for'
        var allDivs = document.querySelectorAll('[id^="clint_movements_places_names_options_for"]');

        // Iterate through all divs
        allDivs.forEach(function (div) {
            // Get all p elements within the div
            var pElements = div.getElementsByTagName('p');

            // Reset the background color of all p elements to darkred
            for (var i = 0; i < pElements.length; i++) {
                pElements[i].style.backgroundColor = 'rgb(0, 56, 99)';
            }
        });









        // Define a global variable to store the reference
        let currentClintMovementsDataDivId;




        // Function to handle delete clicked clint movements data
        editClickedClintMovementsData = function (currentClintMovementsDataDivId) {

            /* Make sure the correct section is the one that is visiable */
            create_new_clint_data_section.style.display = 'none';
            create_new_hotel_package_section.style.display = 'none';
            create_new_flight_package_section.style.display = 'none';
            create_new_clint_movements_paln_section.style.display = 'none';
            create_new_package_including_and_not_including_data_section.style.display = 'flex';


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



            // Extract data using IDs
            let clintMovementsWholeDayActionsDetailsTextarea = clickedClintMovementsDataDiv.querySelector(`p[id^='clint_movements_whole_day_actions_details_${insertedClintMovementsRowDivUniqueId}']`)?.innerText || '';


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
                document.getElementById('clint_movements_content_section_title_text_id').innerText = 'برنامج تحركات مقترح';
                document.getElementById('clint_movements_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';
            }




            /* Function to confirm the new clint movements row data */
            confirmNewClintMovementsDataRow = function () {
                // Get the clicked clint movements data row
                let clickedClintMovementsDataDiv = document.getElementById(currentClintMovementsDataDivId);

                // Clear the old data (and replace (the  inner data) later and not the whole div)
                clickedClintMovementsDataDiv.innerHTML = '';


                // Get references to all input elements for later use
                let clintMovementsWholeDayActionsDetailsTextarea = document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value;


                /* if the 'clintMovementsNextCityInput' exist then make sure there is no any clint movements visiting places */
                if (clintMovementsNextCityInput === 'الذهاب للمطار للمغادرة') {
                    /* Check is there is value in the 'clintMovementsWholeDayActionsDetailsTextarea' */
                    if (clintMovementsWholeDayActionsDetailsTextarea !== '' || clintMovementsAirportWelcomeInput !== '' || clintMovementsNewCheckInInput !== '') {
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

        if (clickedPackageIncludingDataText === 'package_total_price_p_id') {
            document.getElementById('downloaded_pdf_total_price_data_page').style.display = 'none';


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


            return
        }

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

    if (document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText !== '' && document.getElementById('downloaded_pdf_clint_data_page').style.display !== 'none') {
        let packageUserCodeNameForLaterImportReferenceP = document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText;
        document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').innerText = `استخدم كود البكج ${packageUserCodeNameForLaterImportReferenceP}`;
        document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').style.backgroundColor = 'rgb(85, 127, 137)';

    } else {
        document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').innerText = 'تأكد من إدخال معلومات العميل';
        document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').style.backgroundColor = 'red';

    }

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

/* Function to download the pdf file wit hteh current user code name */
downloadPdfWithCurrentUserCodeName = function () {

    /* If there is no value then change the 'check_pdf_name_button' color */
    if (document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').style.backgroundColor !== 'red') {

        /* If there is any value then pass the value to the 'downloadPdfWithCustomName' function */
        document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').innerText = 'جاري التحميل..';




        /* Reset all images src value */
        inserted_package_flight_data_section_page_image_id.src = '';
        inserted_package_hotel_data_section_page_image_id.src = '';
        inserted_package_clint_movements_data_section_page_image_id.src = '';


        /* in case the 'downloaded_pdf_clint_data_page' div was hidden then set the images src */
        if (document.getElementById('downloaded_pdf_clint_data_page').style.display === 'none') {

            /* set the scr value for the divs based on their availability */
            if (document.getElementById('downloaded_pdf_flight_data_page').style.display === 'block') {
                inserted_package_flight_data_section_page_image_id.src = 'first-pdf-image.jpg';
                inserted_package_hotel_data_section_page_image_id.src = 'middle-pdf-image.jpg';
                inserted_package_clint_movements_data_section_page_image_id.src = '';

            } else if (document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'block') {
                inserted_package_flight_data_section_page_image_id.src = 'middle-pdf-image.jpg';
                inserted_package_hotel_data_section_page_image_id.src = 'first-pdf-image.jpg';
                inserted_package_clint_movements_data_section_page_image_id.src = '';

            } else if (document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'block') {
                inserted_package_flight_data_section_page_image_id.src = 'middle-pdf-image.jpg';
                inserted_package_hotel_data_section_page_image_id.src = 'middle-pdf-image.jpg';
                inserted_package_clint_movements_data_section_page_image_id.src = 'first-pdf-image.jpg';

            }

        } else {
            /* Set all images values to 'middle-pdf-image.jpg' */
            inserted_package_flight_data_section_page_image_id.src = 'middle-pdf-image.jpg';
            inserted_package_hotel_data_section_page_image_id.src = 'middle-pdf-image.jpg';
            inserted_package_clint_movements_data_section_page_image_id.src = 'middle-pdf-image.jpg';
        }




        if (document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'block') {
            document.getElementById('pdf_section_package_icluding_data_title_id_2').style.display = 'none';

        } else {
            document.getElementById('pdf_section_package_icluding_data_title_id_2').style.display = 'inline';

        }

        /* Run the 'downloadPdfWithCustomName' and pass the inserted name */
        let userCodeNameAsPdfDownloadedFIleName = document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText;
        downloadPdfWithCustomName(`${userCodeNameAsPdfDownloadedFIleName}`);
    }
}

/* Function to check if the 'pdf_file_name_input_id' input contain value or no */
checkThePdfNameToDownload = function () {

    /* If there is no value then change the 'check_pdf_name_button' color */
    if (document.getElementById('pdf_file_name_input_id').value === '') {
        document.getElementById('check_pdf_name_button').style.backgroundColor = 'red';
        document.getElementById('check_pdf_name_button').style.color = 'white';
        setTimeout(() => {
            document.getElementById('check_pdf_name_button').style.backgroundColor = 'white';
            document.getElementById('check_pdf_name_button').style.color = 'black';
        }, 300);


        /* If there is any value then pass the value to the 'downloadPdfWithCustomName' function */
    } else {
        document.getElementById('check_pdf_name_button').style.backgroundColor = 'rgb(85, 127, 137)';
        document.getElementById('check_pdf_name_button').style.color = 'white';
        document.getElementById('check_pdf_name_button').innerText = 'جاري التحميل..';




        /* Reset all images src value */
        inserted_package_flight_data_section_page_image_id.src = '';
        inserted_package_hotel_data_section_page_image_id.src = '';
        inserted_package_clint_movements_data_section_page_image_id.src = '';


        /* in case the 'downloaded_pdf_clint_data_page' div was hidden then set the images src */
        if (document.getElementById('downloaded_pdf_clint_data_page').style.display === 'none') {

            /* set the scr value for the divs based on their availability */
            if (document.getElementById('downloaded_pdf_flight_data_page').style.display === 'block') {
                inserted_package_flight_data_section_page_image_id.src = 'first-pdf-image.jpg';
                inserted_package_hotel_data_section_page_image_id.src = 'middle-pdf-image.jpg';
                inserted_package_clint_movements_data_section_page_image_id.src = '';

            } else if (document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'block') {
                inserted_package_flight_data_section_page_image_id.src = 'middle-pdf-image.jpg';
                inserted_package_hotel_data_section_page_image_id.src = 'first-pdf-image.jpg';
                inserted_package_clint_movements_data_section_page_image_id.src = '';

            } else if (document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'block') {
                inserted_package_flight_data_section_page_image_id.src = 'middle-pdf-image.jpg';
                inserted_package_hotel_data_section_page_image_id.src = 'middle-pdf-image.jpg';
                inserted_package_clint_movements_data_section_page_image_id.src = 'first-pdf-image.jpg';

            }

        } else {
            /* Set all images values to 'middle-pdf-image.jpg' */
            inserted_package_flight_data_section_page_image_id.src = 'middle-pdf-image.jpg';
            inserted_package_hotel_data_section_page_image_id.src = 'middle-pdf-image.jpg';
            inserted_package_clint_movements_data_section_page_image_id.src = 'middle-pdf-image.jpg';
        }




        if (document.getElementById('downloaded_pdf_clint_movements_data_page').style.display === 'block') {
            document.getElementById('pdf_section_package_icluding_data_title_id_2').style.display = 'none';

        } else {
            document.getElementById('pdf_section_package_icluding_data_title_id_2').style.display = 'inline';

        }

        /* Run the 'downloadPdfWithCustomName' and pass the inserted name */
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
        'downloaded_pdf_clint_movements_data_page',
        'downloaded_pdf_total_price_data_page'
    ];

    let newEntry = {
        name: "Last Download",
        date: new Date().toISOString(), // Add the current date
        e: {} // Use 'e' for 'elements' to minimize data size
    };

    idsToCheck.forEach(id => {
        let element = document.getElementById(id);
        if (element && isVisible(element)) {
            // Minify and clean the HTML
            let minifiedHTML = minifyHTML(element.outerHTML);
            newEntry.e[id] = LZString.compressToUTF16(minifiedHTML); // Compress HTML
        }
    });

    let transaction = db.transaction([storeName], 'readwrite');
    let store = transaction.objectStore(storeName);

    let getRequest = store.get("Last Download");

    getRequest.onsuccess = function (event) {
        let existingData = event.target.result;

        if (existingData) {
            // Replace the old data with the new data
            store.put(newEntry);
        } else {
            // Add the new data
            store.add(newEntry);
        }

        transaction.oncomplete = function () {
            console.log('Data saved successfully as "Last Download".');
        };

        transaction.onerror = function (event) {
            console.error('Transaction error:', event.target.errorCode);
        };
    };

    getRequest.onerror = function (event) {
        console.error('Get request error:', event.target.errorCode);
    };
};

// Function to minify and clean HTML
function minifyHTML(html) {
    return html
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/>\s+</g, '><') // Remove spaces between tags
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
        .replace(/\s*=\s*/g, '=') // Remove spaces around equals in attributes
        .replace(/\s*(style|class)=""/g, '') // Remove empty style and class attributes
        .trim();
}


/* Function to check if an element is visible */
let isVisible = function (element) {
    return element && element.style.display !== 'none' && element.offsetParent !== null;
};

/* Download the pdf file with the given name */
downloadPdfWithCustomName = async function (pdfName) {
    let { jsPDF } = window.jspdf;

    // Function to capture a canvas of a given section
    let captureCanvas = async function (section, scale) {
        try {
            // Ensure resources are loaded and elements are visible before capturing
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 500ms

            let canvas = await html2canvas(section, {
                scale: scale,
                backgroundColor: null,
                scrollY: 0
            });
            return canvas;
        } catch (error) {
        }
    };

    // Function to combine multiple canvases into one
    let combineCanvases = function (canvases) {
        if (canvases.length === 0) {
            return null;
        }

        let totalHeight = canvases.reduce((sum, canvas) => sum + canvas.height, 0);
        let combinedCanvas = document.createElement('canvas');
        combinedCanvas.width = canvases[0].width;
        combinedCanvas.height = totalHeight;
        let context = combinedCanvas.getContext('2d');

        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);

        let yOffset = 0;
        canvases.forEach(canvas => {
            context.drawImage(canvas, 0, yOffset);
            yOffset += canvas.height;
        });

        return combinedCanvas;
    };

    // Function to process all visible sections and generate the PDF
    let processSections = async function (sections, scale) {
        let canvases = [];

        for (let section of sections) {
            let canvas = await captureCanvas(section, scale);
            if (canvas) {
                canvases.push(canvas);
            }
        }

        if (canvases.length === 0) {
            return null;
        }

        return combineCanvases(canvases);
    };

    // Ensure the downloaded_pdf_clint_movements_data_page section has a consistent aspect ratio
    let adjustClintMovementsCanvas = function (canvas) {
        let pdfWidth = 210; // A4 width in mm
        let pdfHeight = 297; // A4 height in mm
        let scaleFactor = canvas.width / pdfWidth;

        // Calculate the minimum required height in pixels for the A4 page
        let minHeight = pdfHeight * scaleFactor;

        // If the canvas is shorter than the minimum height, pad it with empty space
        if (canvas.height < minHeight) {
            let paddedCanvas = document.createElement('canvas');
            paddedCanvas.width = canvas.width;
            paddedCanvas.height = minHeight;

            let context = paddedCanvas.getContext('2d');
            context.fillStyle = '#ffffff'; // Set background color to white
            context.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);
            context.drawImage(canvas, 0, 0);

            return paddedCanvas;
        }

        return canvas;
    };

    // Show all elements with the class name before checking visibility
    let images = document.querySelectorAll('.inserted_package_data_section_page_image_class');
    images.forEach(img => {
        img.style.display = 'inline';
    });

    document.getElementById('downloaded_pdf_important_notes_data_page').style.display = 'block';
    document.getElementById('inserted_company_name_image_position_div').style.display = 'none';

    let page1Divs = [
        'downloaded_pdf_clint_data_page',
        'downloaded_pdf_flight_data_page',
        'downloaded_pdf_hotel_data_page',
        'downloaded_pdf_package_including_data_page'
    ];

    let page2Divs = [
        'downloaded_pdf_clint_movements_data_page' // Add only to page 2
    ];

    let page3Divs = [
        'downloaded_pdf_important_notes_data_page'
    ];

    let showTotalPriceCheckbox = document.getElementById('show_package_total_price_checkbox');
    if (showTotalPriceCheckbox && showTotalPriceCheckbox.checked) {
        page3Divs.push('downloaded_pdf_total_price_data_page');

        document.getElementById('inserted_package_important_notes_data_section_page_image_id').style.display = 'none';
        document.getElementById('inserted_package_total_price_data_section_page_image_id').style.display = 'inline';
    } else {
        document.getElementById('inserted_package_important_notes_data_section_page_image_id').style.display = 'inline';
        document.getElementById('inserted_package_total_price_data_section_page_image_id').style.display = 'none';
    }

    let sections1 = [];
    let sections2 = [];
    let sections3 = [];

    // Check visibility for page 1 sections
    page1Divs.forEach(divsIdName => {
        let section = document.getElementById(divsIdName);
        if (section && isVisible(section)) {
            sections1.push(section);
        }
    });

    // Check visibility for page 2 sections
    page2Divs.forEach(divsIdName => {
        let section = document.getElementById(divsIdName);
        if (section && isVisible(section)) {
            sections2.push(section);
        }
    });

    // Check visibility for page 3 sections
    page3Divs.forEach(divsIdName => {
        let section = document.getElementById(divsIdName);
        if (section && isVisible(section)) {
            sections3.push(section);
        }
    });

    if (sections1.length === 0 && sections2.length === 0 && sections3.length === 0) {
        return;
    }

    let scale = /Mobi|Android/i.test(navigator.userAgent) ? 5 : 3.5;

    // Process visible sections to generate canvases
    let combinedCanvas1 = await processSections(sections1, scale);
    let combinedCanvas2 = await processSections(sections2, scale);
    if (combinedCanvas2) {
        combinedCanvas2 = adjustClintMovementsCanvas(combinedCanvas2); // Adjust the canvas for page 2
    }
    let combinedCanvas3 = await processSections(sections3, scale);

    if (!combinedCanvas1 && !combinedCanvas2 && !combinedCanvas3) {
        return;
    }

    let pdf = new jsPDF('p', 'mm', 'a4');
    let pdfWidth = 210;

    if (combinedCanvas1) {
        let pdfHeight1 = (combinedCanvas1.height * pdfWidth) / combinedCanvas1.width;
        pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight1]);
        let imgData1 = combinedCanvas1.toDataURL('image/jpeg', 0.7);
        pdf.addImage(imgData1, 'JPEG', 0, 0, pdfWidth, pdfHeight1, '', 'FAST');
    }

    if (combinedCanvas2) {
        let pdfHeight2 = (combinedCanvas2.height * pdfWidth) / combinedCanvas2.width;
        pdf.addPage([pdfWidth, pdfHeight2]);
        let imgData2 = combinedCanvas2.toDataURL('image/jpeg', 0.7);
        pdf.addImage(imgData2, 'JPEG', 0, 0, pdfWidth, pdfHeight2, '', 'FAST');
    }

    if (combinedCanvas3) {
        let pdfHeight3 = (combinedCanvas3.height * pdfWidth) / combinedCanvas3.width;
        pdf.addPage([pdfWidth, pdfHeight3]);
        let imgData3 = combinedCanvas3.toDataURL('image/jpeg', 0.7);
        pdf.addImage(imgData3, 'JPEG', 0, 0, pdfWidth, pdfHeight3, '', 'FAST');
    }

    pdf.save(pdfName);

    // Hide all images with class name of 'inserted_package_data_section_page_image_class'
    images.forEach(img => {
        img.style.display = 'none';
    });

    // Hide the 'pdf_section_package_icluding_data_title_id_2' image
    document.getElementById('pdf_section_package_icluding_data_title_id_2').style.display = 'none';



    document.getElementById('downloaded_pdf_important_notes_data_page').style.display = 'none';
    document.getElementById('inserted_company_name_image_position_div').style.display = 'flex';

    saveLastPdfDownloadData();

    document.getElementById('check_pdf_name_button').style.backgroundColor = 'white';
    document.getElementById('check_pdf_name_button').style.color = 'black';
    document.getElementById('check_pdf_name_button').innerText = 'تحميل';


    let packageUserCodeNameForLaterImportReferenceP = document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText;
    document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').innerText = `استخدم كود البكج ${packageUserCodeNameForLaterImportReferenceP}`;
};

