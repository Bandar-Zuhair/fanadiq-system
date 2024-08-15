/* Variable to save a number for counting functionality (Ex: hotel row table unique id..?) */
let insertedFlightDataDivUniqueId;
let insertedHotelDataDivUniqueId;
let insertedClintMovementsRowDivUniqueId = 1;




// Function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
function saveOriginalHotelDates() {
    originalHotelDates = [];
    const allHotelRows = document.querySelectorAll('.hotel_row_class_for_editing');

    allHotelRows.forEach(row => {
        const h2Date = row.querySelector('h2').innerText;
        const h3Date = row.querySelector('h3').innerText;
        originalHotelDates.push({ h2Date, h3Date, element: row });
    });
}



/* Function to update the available client visiting places based on the current existing visiting places */
function processClintMovements() {

    // Select all divs with the class 'clint_movements_row_class_for_editing'
    const allClintMovementsDivs = document.querySelectorAll('.clint_movements_row_class_for_editing');

    // Initialize an array to store all sentences from the h2 elements inside these divs
    let sentencesFromH2 = [];

    // Loop through each 'clint_movements_row_class_for_editing' div
    allClintMovementsDivs.forEach((div) => {
        // Get the innerText of the h2 element inside the current div
        const h2Text = div.querySelector('h2').innerText;

        // Split the h2 text into individual sentences based on the '+' delimiter
        const sentences = h2Text.split('+').map(sentence => sentence.trim());

        // Add each sentence to the 'sentencesFromH2' array
        sentencesFromH2 = sentencesFromH2.concat(sentences);
    });

    // Select the div containing all the p elements
    const allClintMovementsPlacesPageDivsContainer = document.getElementById('all_clint_movements_places_page_divs_container');

    // Select all p elements inside the container
    const allPElements = allClintMovementsPlacesPageDivsContainer.querySelectorAll('p');

    // Function to normalize spaces in a text (replace multiple spaces with a single space)
    function normalizeSpaces(text) {
        return text.replace(/\s+/g, ' ').trim();
    }

    // Loop through each p element
    allPElements.forEach((pElement) => {
        // Get the normalized innerText of the current p element
        const pText = normalizeSpaces(pElement.innerText);

        // Check if the normalized innerText of the p element exists in the 'sentencesFromH2' array
        if (sentencesFromH2.some(sentence => normalizeSpaces(sentence) === pText)) {
            // If the sentence exists, set the display of the p element to 'none' to hide it
            pElement.style.display = 'none';

        } else {
            // If the sentence does not exist, set the display of the p element to 'block' to show it
            pElement.style.display = 'block';
        }
    });
}











/* Function for checking if ready or no to insert the data */
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

            // Play a sound effect
            new Audio('error.mp3').play();



            // Change the submit icon color to green to indicate success
            clint_inputs_submit_icon.style.backgroundColor = 'red';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);


        } else {


            // Play a sound effect
            new Audio('success.mp3').play();


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

            }




            /* if there is any value in the 'packageClintNameInput' then change the border styling and set the innerText of the p element */
            if (packageClintNameInput !== '') {

                /* Set the innerText of the p element */
                clint_full_name_p.innerText = `الأستاذ/ة : ${packageClintNameInput}`;

                /* Change the border styling for better looking */
                pdf_clint_info_section_title_div_id.style.borderBottom = '0.5px solid black';

                /* Show the p element if it was hidden */
                clint_full_name_p.style.display = 'block';


                /* Store the inserted clint name in the stored p elements for later use (when importing) */
                document.getElementById('store_google_sheet_clint_name_value').innerText = packageClintNameInput;


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


                    // Call a function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
                    saveOriginalHotelDates();


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
            }







            // Adjust hotel dates if there are any hotel rows for editing
            if (document.querySelectorAll('.hotel_row_class_for_editing').length === 0) {

                document.getElementById('hotel_check_in_input_id').value = wholePackageStartDateInput;
                document.getElementById('hotel_check_out_input_id').value = '';

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
                <div>
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
            document.getElementById('store_google_sheet_package_user_name_value').innerText = websiteUsersNameInput;






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


        // Play a sound effect
        new Audio('success.mp3').play();


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
            document.getElementById('store_google_sheet_package_total_price_value').innerText = packageTotlaPriceInput;

        } else {
            document.getElementById('downloaded_pdf_total_price_data_page').style.display = 'none';
            document.getElementById('store_google_sheet_package_total_price_value').innerText = '';

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

                    // Update the 'store_google_sheet_package_including_sms_value' element
                    let smsDateValueElement = document.getElementById('store_google_sheet_package_including_sms_value');
                    smsDateValueElement.innerText = smsCardWithInternetAmountInputReayText !== '' ? smsCardWithInternetAmountInputReayText : '';

                } else if (id === 'inner_flight_tickets_checkbox') {
                    let textContent = innerFlightTicketsAmountInputReayText !== ''
                        ? ` ${innerFlightTicketsAmountInputReayText}`
                        : ' تذاكر الطيران الداخلي'; // Default text if input is empty
                    p.appendChild(document.createTextNode(textContent)); // Append the text
                    p.style.padding = '0 5px'; // Add padding to this p element

                    // Update the 'store_google_sheet_package_including_inner_tickets_value' element
                    let innerTicketsDateValueElement = document.getElementById('store_google_sheet_package_including_inner_tickets_value');
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

            // Store the package extra details including for later Re-use (when import data)
            document.getElementById('store_google_sheet_package_details_textarea_value').innerText = packageIncludingDataTextArea.replace(/\n/g, '\\n');

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


        if (document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'none') {

            // Play a sound effect
            new Audio('error.mp3').play();


            /* Change the 'تم' button color */
            clint_flight_inputs_submit_icon.style.backgroundColor = 'red';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_flight_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 2000);


        } else {

            // Play a sound effect
            new Audio('success.mp3').play();



            // First delete all old flights row data'
            document.getElementById('inserted_flight_data_position_div').innerHTML = '';




            /* Change the 'تم' button color */
            clint_flight_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_flight_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 2000);





            /* Set the 'insertedHotelDataDivUniqueId' value based on the following condition */
            if (document.getElementById('store_google_sheet_flight_uniuqe_id_name_value').innerText !== '') {
                insertedFlightDataDivUniqueId = document.getElementById('store_google_sheet_flight_uniuqe_id_name_value').innerText;
            } else {
                insertedFlightDataDivUniqueId = 1;
            }



            // Get all divs with the class name 'hotel_row_class_for_editing'
            const allHotelRows = document.querySelectorAll('.hotel_row_class_for_editing');

            let lastCity = null;  // Variable to store the last valid city encountered
            let lastDate = null;  // Variable to store the date associated with the last valid city
            const validCities = ["بالي", "جاكرتا", "باندونق", "بونشاك"];  // Array of valid cities to check against

            // Iterate through all found hotel rows
            allHotelRows.forEach((hotelRow, index) => {
                const currentCity = hotelRow.querySelector('h5').innerText;  // Get the city name from the current hotel row's h5 element
                const currentDate = hotelRow.querySelector('h2').innerText;  // Get the date from the current hotel row's h2 element

                // Check if transition between Jakarta and Bandung (in either order) and skip
                if ((lastCity === "جاكرتا" && currentCity === "باندونق") || (lastCity === "باندونق" && currentCity === "جاكرتا")) {
                    lastCity = currentCity;
                    lastDate = currentDate;
                    return; // Skip this iteration without creating a flightRowTableDiv
                }

                // Check if the current and last city are valid and different
                if ((validCities.includes(currentCity) && lastCity && lastCity !== currentCity && validCities.includes(lastCity)) ||
                    (lastCity === "بونشاك" && currentCity === "بالي") || (lastCity === "بالي" && currentCity === "بونشاك")) {

                    let fromCity = lastCity;
                    let toCity = currentCity;

                    // Special case: if transition is from "بونشاك" to "بالي" or vice versa, set from/to cities accordingly
                    if (lastCity === "بونشاك" && currentCity === "بالي") {
                        fromCity = "جاكرتا";
                        toCity = "بالي";
                    } else if (lastCity === "بالي" && currentCity === "بونشاك") {
                        fromCity = "بالي";
                        toCity = "جاكرتا";
                    }

                    // Create a new div with flight details
                    let flightRowTableDiv = document.createElement('div');
                    flightRowTableDiv.id = `flight_row_id_${insertedFlightDataDivUniqueId}`;  // Set a unique ID for the new div
                    flightRowTableDiv.className = 'flight_row_class flight_row_class_for_editing';  // Assign class names to the new div

                    // Create the HTML content for the new flight row div
                    let flightRowTableDivContent = `
                        <div class="flight_row_flight_arrival_time_controller inserted_flight_data_row" style="cursor: pointer;"><p id='flight_air_line_${insertedFlightDataDivUniqueId}'></p></div>
                        <div><p id='flight_adult_person_amount_${insertedFlightDataDivUniqueId}'>${document.getElementById('adult_package_person_amount_input_id').value}</p>${document.getElementById('infant_package_person_amount_input_id').value ? `<br><p id="flight_infant_person_amount_${insertedFlightDataDivUniqueId}">${document.getElementById('infant_package_person_amount_input_id').value}</p>` : ''}</div>
                        <div><p>20 كيلو للشخص</p></div>
                        <div><h2 id='flight_from_city_${insertedFlightDataDivUniqueId}'>${fromCity}</h2></div>
                        <div><h3 id='flight_to_city_${insertedFlightDataDivUniqueId}'>${toCity}</h3></div>
                        <div><h1 id='flight_date_${insertedFlightDataDivUniqueId}' class="flight_date_for_matching_whole_package_date">${currentDate}</h1></div>
                        <div><p id='flight_fly_away_time_${insertedFlightDataDivUniqueId}'></p></div>
                        <div><p id='flight_arrival_time_${insertedFlightDataDivUniqueId}'></p></div>
                    `;

                    flightRowTableDiv.innerHTML = flightRowTableDivContent;  // Insert the generated HTML content into the new div

                    // Append the new div to the container with id 'inserted_flight_data_position_div'
                    document.getElementById('inserted_flight_data_position_div').appendChild(flightRowTableDiv);

                    // Increment the unique ID for the next div
                    insertedFlightDataDivUniqueId++;
                }

                // Update the lastCity and lastDate for the next iteration
                lastCity = currentCity;
                lastDate = currentDate;
            });








            document.getElementById('downloaded_pdf_flight_data_page').style.display = 'block';

            // Get references to all input elements and reset their values thier
            document.getElementById('flight_from_city_input_id').value = document.getElementById('flight_to_city_input_id').value;
            document.getElementById('flight_to_city_input_id').value = '';
            document.getElementById('flight_date_input_id').value = '';
            document.getElementById('flight_fly_away_time_input_id').value = '';
            document.getElementById('flight_arrival_time_input_id').value = '';





            // Get all dynamically created elements with the class 'flight_row_flight_arrival_time_controller'
            document.querySelectorAll('.flight_row_flight_arrival_time_controller').forEach(function (element) {
                element.onclick = function (event) {
                    flightRowAirLineControllerFunction(event, element);
                };
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
                }
            }








            /* Function to edit the clicked flight row data */
            editClickedFlightData = function (clickedFlightDataDivIdName) {

                /* Make sure the correct section is the one that is visible */
                create_new_clint_data_section.style.display = 'none';
                create_new_hotel_package_section.style.display = 'none';
                create_new_flight_package_section.style.display = 'flex';
                create_new_package_including_and_not_including_data_section.style.display = 'none';
                create_new_clint_movements_plan_section.style.display = 'none';

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

                /* Show all inputs for editing the flight data */
                document.getElementById('all_editing_flight_row_data_inputs_div').style.display = 'flex';

                // Get the clicked flight data row
                let clickedFlightDataDiv = document.getElementById(clickedFlightDataDivIdName);
                let insertedFlightDataDivUniqueId = clickedFlightDataDivIdName.split('_').pop(); // Extract the unique ID from the clicked row ID

                // Extract data using IDs
                let flightAirLineInput = clickedFlightDataDiv.querySelector(`p[id^='flight_air_line_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightAdultPersonAmountInput = clickedFlightDataDiv.querySelector(`p[id^='flight_adult_person_amount_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightInfantPersonAmountInput = clickedFlightDataDiv.querySelector(`p[id^='flight_infant_person_amount_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightFromCityInput = clickedFlightDataDiv.querySelector(`h2[id^='flight_from_city_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightToCityInput = clickedFlightDataDiv.querySelector(`h3[id^='flight_to_city_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightDateInput = clickedFlightDataDiv.querySelector(`h1[id^='flight_date_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightFlyAwayTimeInput = clickedFlightDataDiv.querySelector(`p[id^='flight_fly_away_time_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightArrivalTimeInput = clickedFlightDataDiv.querySelector(`p[id^='flight_arrival_time_${insertedFlightDataDivUniqueId}']`)?.innerText || '';
                let flightExtraBagsInput = clickedFlightDataDiv.querySelector(`p[id^='flight_extra_bags_${insertedFlightDataDivUniqueId}']`)?.innerText || '';

                // Assign values to inputs
                document.getElementById('flight_air_line_input_id').value = flightAirLineInput;
                document.getElementById('flight_adult_person_amount_input_id').value = flightAdultPersonAmountInput;
                document.getElementById('flight_infant_person_amount_input_id').value = flightInfantPersonAmountInput;
                document.getElementById('flight_from_city_input_id').value = flightFromCityInput;
                document.getElementById('flight_to_city_input_id').value = flightToCityInput;
                document.getElementById('flight_date_input_id').value = flightDateInput;
                document.getElementById('flight_fly_away_time_input_id').value = flightFlyAwayTimeInput;
                document.getElementById('flight_arrival_time_input_id').value = flightArrivalTimeInput;
                document.getElementById('flight_extra_bags_input_id').value = flightExtraBagsInput;

                /* Function to cancel the flight row data editing process */
                cancelNewFlightDataRow = function () {
                    // Get references to all input elements and delete their values
                    document.getElementById('flight_air_line_input_id').value = '';
                    document.getElementById('flight_from_city_input_id').value = '';
                    document.getElementById('flight_to_city_input_id').value = '';
                    document.getElementById('flight_date_input_id').value = '';
                    document.getElementById('flight_fly_away_time_input_id').value = '';
                    document.getElementById('flight_arrival_time_input_id').value = '';
                    document.getElementById('flight_extra_bags_input_id').value = '';

                    /* Hide and show different icons */
                    document.getElementById('clint_flight_inputs_submit_icon').style.display = 'block';
                    document.getElementById('confirm_new_flight_data_row_icon').style.display = 'none';
                    document.getElementById('cancel_new_flight_data_row_icon').style.display = 'none';

                    /* Reset the innerText and styling to default */
                    document.getElementById('flight_content_section_title_text_id').innerText = 'تفاصيل الطيران';
                    document.getElementById('flight_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';

                    /* Hide all inputs for editing the flight data */
                    document.getElementById('all_editing_flight_row_data_inputs_div').style.display = 'none';
                }

                /* Function to confirm the new flight row data */
                confirmNewFlightDataRow = function () {
                    // Play a sound effect
                    new Audio('success.mp3').play();

                    // Get the clicked flight data row
                    let clickedFlightDataDiv = document.getElementById(clickedFlightDataDivIdName);

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
                    let flightExtraBagsInput = document.getElementById('flight_extra_bags_input_id').value;

                    // Create the HTML content for a new flight row, only including non-empty values
                    let flightRowTableDivContent = `
                        <div class="flight_row_flight_arrival_time_controller inserted_flight_data_row" style="cursor: pointer;">
                            ${flightAirLineInput ? `<p id="flight_air_line_${insertedFlightDataDivUniqueId}">${flightAirLineInput}</p>` : ''}
                        </div>
                        <div>
                            <p id="flight_adult_person_amount_${insertedFlightDataDivUniqueId}">${flightAdultPersonAmountInput}</p>
                            ${flightInfantPersonAmountInput ? `<br><p id="flight_infant_person_amount_${insertedFlightDataDivUniqueId}">${flightInfantPersonAmountInput}</p>` : ''}
                        </div>
                        <div>
                            <p>20 كيلو للشخص</p>
                            ${flightExtraBagsInput ? `<p id="flight_extra_bags_${insertedFlightDataDivUniqueId}">${flightExtraBagsInput}</p>` : ''}
                        </div>
                        <div>
                            ${flightFromCityInput ? `<h2 id="flight_from_city_${insertedFlightDataDivUniqueId}">${flightFromCityInput}</h2>` : ''}
                        </div>
                        <div>
                            ${flightToCityInput ? `<h3 id="flight_to_city_${insertedFlightDataDivUniqueId}">${flightToCityInput}</h3>` : ''}
                        </div>
                        <div>
                            ${flightDateInput ? `<h1 id="flight_date_${insertedFlightDataDivUniqueId}" class="flight_date_for_matching_whole_package_date">${flightDateInput}</h1>` : ''}
                        </div>
                        <div>
                            ${flightFlyAwayTimeInput ? `<p id="flight_fly_away_time_${insertedFlightDataDivUniqueId}">${flightFlyAwayTimeInput}</p>` : ''}
                        </div>
                        <div>
                            ${flightArrivalTimeInput ? `<p id="flight_arrival_time_${insertedFlightDataDivUniqueId}">${flightArrivalTimeInput}</p>` : ''}
                        </div>
                    `;


                    // Insert the new data into the clicked flight data div
                    clickedFlightDataDiv.innerHTML = flightRowTableDivContent;


                    /* Run a function to exit the editing flight data mood */
                    cancelNewFlightDataRow();


                    // Get all dynamically created elements with the class 'flight_row_flight_arrival_time_controller'
                    document.querySelectorAll('.flight_row_flight_arrival_time_controller').forEach(function (element) {
                        element.onclick = function (event) {
                            flightRowAirLineControllerFunction(event, element);
                        };
                    });
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
        let hotelSpecialRoomRequestInput = document.getElementById('hotel_special_room_request_input_id').value;
        let hotelRoomExtraInfoReadyText = document.getElementById('hotel_room_extra_info_textarea_id').value;

        if (hotelNameReadyText === '' || hotelCheckInReadyText === '' || hotelCheckOutReadyText === '' || hotelRoomTypeDescriptionInput === '' || hotelUnitAmountInput === '' || document.getElementById('downloaded_pdf_clint_data_page').style.display === 'none') {

            // Play a sound effect
            new Audio('error.mp3').play();

            // Change the submit icon background color
            hotel_inputs_submit_icon.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                hotel_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);

        } else {

            // Play a sound effect
            new Audio('success.mp3').play();


            // Change the submit icon background color
            hotel_inputs_submit_icon.style.backgroundColor = 'rgb(0, 255, 0)';
            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                hotel_inputs_submit_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);

            // Convert the hotel name to lowercase and replace spaces with hyphens to create a suitable image filename
            let hotelImgSrcReadyText = hotelNameReadyText.toLowerCase().replace(/\s+/g, '-');


            /* Set the 'insertedHotelDataDivUniqueId' value based on the following condition */
            if (document.getElementById('store_google_sheet_hotel_uniuqe_id_name_value').innerText !== '') {
                insertedHotelDataDivUniqueId = document.getElementById('store_google_sheet_hotel_uniuqe_id_name_value').innerText;
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
                <div><h5 id='hotel_location_${insertedHotelDataDivUniqueId}'>${hotelLocationReadyText}</h5>${hotelAreaReadyText ? `<br><h6 id='hotel_area_${insertedHotelDataDivUniqueId}'>${hotelAreaReadyText}</h6>` : ''}</p><img src="صور-الفنادق/${hotelImgSrcReadyText}.jpg" class="hotel_row_image_controller inserted_hotel_data_row" style="cursor: pointer"></div>
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
            if (hotelSpecialRoomRequestInput !== '') {
                let hotelExtraInfoSpan = document.createElement('span');
                hotelExtraInfoSpan.id = `hotel_special_room_request_${insertedHotelDataDivUniqueId}`;
                hotelExtraInfoSpan.className = 'hotel_special_room_request_p_class';
                hotelExtraInfoSpan.innerText = hotelSpecialRoomRequestInput;
                hotelExtraInfoSpan.style.background = 'rgb(85, 127, 137)';
                hotelExtraInfoSpan.style.color = 'white';
                hotelExtraInfoSpan.style.padding = '0 5px';
                hotelRowTableDiv.querySelector('.description_cell').appendChild(hotelExtraInfoSpan);
            }
            if (hotelRoomExtraInfoReadyText !== '') {
                let hotelExtraInfoSpan = document.createElement('span');
                hotelExtraInfoSpan.id = `hotel_room_extra_info_${insertedHotelDataDivUniqueId}`;
                hotelExtraInfoSpan.innerText = `+ ${hotelRoomExtraInfoReadyText}`;
                hotelExtraInfoSpan.style.background = 'rgb(85, 127, 137)';
                hotelExtraInfoSpan.style.color = 'white';
                hotelExtraInfoSpan.style.padding = '0 5px';
                hotelRowTableDiv.querySelector('.description_cell').appendChild(hotelExtraInfoSpan);
            }



            insertedHotelDataDivUniqueId++;


            // Append the new hotel row div to the parent div that holds all inserted hotel data
            document.getElementById('inserted_hotel_data_position_div').appendChild(hotelRowTableDiv);


            /* Show up the 'downloaded_pdf_hotel_data_page' section */
            document.getElementById('downloaded_pdf_hotel_data_page').style.display = 'block';



            /* Store the new unique id name 'insertedHotelDataDivUniqueId' for later refrence and use (when importing data) */
            document.getElementById('store_google_sheet_hotel_uniuqe_id_name_value').innerText = insertedHotelDataDivUniqueId;


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









            // Get references to all input elements and reset their values
            document.getElementById('hotel_name_input_id').value = '';


            document.getElementById('hotel_check_in_input_id').value = document.getElementById('hotel_check_out_input_id').value;

            /* Store the last stooped hotel check out date for later use (when importing data) */
            document.getElementById('store_google_sheet_hotel_last_stopped_check_out_date_value').innerText = document.getElementById('hotel_check_in_input_id').value;



            document.getElementById('hotel_check_out_input_id').value = '';
            document.getElementById('hotel_total_nights_input_id').value = '';
            document.getElementById('hotel_room_type_description_input_id').value = '';
            document.getElementById('hotel_room_contain_pool_input_id').value = '';
            document.getElementById('hotel_room_view_input_id').value = '';
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


                    /* Reset the value of the saved hotel dates for later Re-arranging */
                    saveOriginalHotelDates();


                    /* in case if there is no remaaining 'inserted_hotel_data_row' then check if the 'create_new_clint_data_section' is visible */
                    if (document.getElementById('create_new_clint_data_section').style.display !== 'none') {

                        /* Set the date of the 'hotel_check_in_input_id' as the the date in the 'whole_package_start_date_input_id' */
                        document.getElementById('hotel_check_in_input_id').value = document.getElementById('whole_package_start_date_input_id').value;

                    } else {

                        document.getElementById('hotel_check_in_input_id').value = '';
                    }


                } else {

                    // Get all divs with the class name 'hotel_row_class_for_editing'
                    let allFoundHotelRowDivs = document.querySelectorAll('.hotel_row_class_for_editing');

                    // Get the last found div with the class name "hotel_row_class_for_editing"
                    let lastHotelRowDiv = allFoundHotelRowDivs[allFoundHotelRowDivs.length - 1];

                    // Get the date value from the h3 element inside the lastHotelRowDiv
                    let dateElement = lastHotelRowDiv.querySelector('h3');
                    let dateValue = dateElement ? dateElement.innerText.trim() : '';

                    // Set the value of the hotel_check_in_input_id to the extracted date value
                    document.getElementById('hotel_check_in_input_id').value = dateValue;

                    // Store the last stopped hotel check-out date for later use (when importing data)
                    document.getElementById('store_google_sheet_hotel_last_stopped_check_out_date_value').innerText = dateValue;

                }
            };






            /* Function to edit the clicked hotel row data */
            editClickedHotelDataFunction = function (clickedHotelRowIdName) {

                /* Make sure the correct section is the one that is visiable */
                create_new_clint_data_section.style.display = 'none';
                create_new_hotel_package_section.style.display = 'flex';
                create_new_flight_package_section.style.display = 'none';
                create_new_package_including_and_not_including_data_section.style.display = 'none';
                create_new_clint_movements_plan_section.style.display = 'none';


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


                /* Save the last saved hotel check in date for later re-use (after finishing the editing process) */
                let lastSavedHotelCheckInDate = document.getElementById('hotel_check_in_input_id').value;
                document.getElementById('hotel_check_in_input_id').disabled = false;


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

                    // Get all divs with the class name 'hotel_row_class_for_editing' to compare its id name
                    let allFoundHotelRowDivs = document.querySelectorAll('.hotel_row_class_for_editing');

                    // Get the last found div with the class name "hotel_row_class_for_editing"
                    let lastHotelRowDiv = allFoundHotelRowDivs[allFoundHotelRowDivs.length - 1];


                    // Get references to all input elements and reset their values
                    document.getElementById('hotel_name_input_id').value = '';


                    /* if the last found div is the one that got clicked then make sure to set the value of the check in as the value of the check out */
                    if (lastHotelRowDiv.id === clickedHotelRowIdName) {
                        document.getElementById('hotel_check_in_input_id').value = document.getElementById('hotel_check_out_input_id').value;

                        /* Store the last stooped hotel check out date for later use (when importing data) */
                        document.getElementById('store_google_sheet_hotel_last_stopped_check_out_date_value').innerText = document.getElementById('hotel_check_in_input_id').value;


                        /* but if the last found div is not the one that got clicked then set the check in value as it got saved before in the 'lastSavedHotelCheckInDate' */
                    } else {
                        document.getElementById('hotel_check_in_input_id').value = lastSavedHotelCheckInDate;


                        /* Store the last stooped hotel check out date for later use (when importing data) */
                        document.getElementById('store_google_sheet_hotel_last_stopped_check_out_date_value').innerText = document.getElementById('hotel_check_in_input_id').value;

                    }

                    document.getElementById('hotel_check_out_input_id').value = '';
                    document.getElementById('hotel_total_nights_input_id').value = '';
                    document.getElementById('hotel_room_type_description_input_id').value = '';
                    document.getElementById('hotel_room_contain_pool_input_id').value = '';
                    document.getElementById('hotel_room_view_input_id').value = '';
                    document.getElementById('hotel_room_extra_info_textarea_id').value = '';


                    /* Hide and show different icons */
                    document.getElementById('hotel_inputs_submit_icon').style.display = 'block';
                    document.getElementById('confirm_new_hotel_data_row_icon').style.display = 'none';
                    document.getElementById('cancel_new_hotel_data_row_icon').style.display = 'none';


                    /* Reset the innerText and styling to defualt */
                    document.getElementById('hotel_content_section_title_text_id').style.background = 'rgb(131, 0, 148)';
                    document.getElementById('hotel_content_section_title_text_id').innerText = 'تفاصيل الفندق';


                    // Call a function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
                    saveOriginalHotelDates();


                    /* Make sure to Re-set the 'hotel_check_in_input_id' to unclickable */
                    document.getElementById('hotel_check_in_input_id').disabled = true;
                };



                // Initialize a global object to store dates
                let savedHotelDates = {};

                // Function to confirm the new hotel row data
                confirmNewHotelDataRow = function () {

                    // Play a sound effect
                    new Audio('success.mp3').play();

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
                        // Save current dates before updating
                        let h2Date = document.querySelector(`.hotel_row_class_for_editing #hotel_check_in_${clickedHotelRowIdName}`)?.innerText || '';
                        let h3Date = document.querySelector(`.hotel_row_class_for_editing #hotel_check_out_${clickedHotelRowIdName}`)?.innerText || '';
                        savedHotelDates[clickedHotelRowIdName] = { startDate: h2Date, endDate: h3Date };

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
                            <div><h5 id='hotel_location_${insertedHotelDataDivUniqueId}'>${hotelLocationReadyText}</h5>${hotelAreaReadyText ? `<br><h6 id='hotel_area_${insertedHotelDataDivUniqueId}'>${hotelAreaReadyText}</h6>` : ''}</p><img src="صور-الفنادق/${hotelImgSrcReadyText}.jpg" class="hotel_row_image_controller inserted_hotel_data_row" style="cursor: pointer"></div>
                        `;

                        // Insert the new HTML content into the clicked hotel data div
                        clickedHotelDataDiv.innerHTML = hotelRowTableDivContent;

                        // Append <p> elements for each input with text
                        if (hotelRoomContainPoolText !== '') {
                            let poolP = document.createElement('span');
                            poolP.id = `hotel_pool_p_id_${insertedHotelDataDivUniqueId}`;
                            poolP.innerText = hotelRoomContainPoolText;
                            clickedHotelDataDiv.querySelector('.description_cell').appendChild(poolP);
                        }
                        if (hotelRoomViewText !== '') {
                            let viewP = document.createElement('span');
                            viewP.id = `hotel_view_p_id_${insertedHotelDataDivUniqueId}`;
                            viewP.innerText = hotelRoomViewText;
                            clickedHotelDataDiv.querySelector('.description_cell').appendChild(viewP);
                        }
                        if (hotelBreakfastPeopleAmountText !== '') {
                            let breakfastP = document.createElement('span');
                            breakfastP.id = `hotel_breakfast_p_id_${insertedHotelDataDivUniqueId}`;
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








            // Function to update dates inside 'hotel_row_class_for_editing' divs based on their order in the DOM
            function updateHotelRowDates() {
                const allHotelRows = document.querySelectorAll('.hotel_row_class_for_editing');

                allHotelRows.forEach((row, index) => {
                    const h2Element = row.querySelector('h2');
                    const h3Element = row.querySelector('h3');

                    if (h2Element && h3Element && originalHotelDates[index]) {
                        // Update the dates based on the new order of elements
                        h2Element.innerText = originalHotelDates[index].h2Date; // Or any date calculation logic here
                        h3Element.innerText = originalHotelDates[index].h3Date; // Or any date calculation logic here
                    }
                });
            }

            // Function to handle the drop and reapply the dates
            function handleDrop() {
                // After dropping, reapply the dates based on the current DOM order
                updateHotelRowDates(); // Call the update function here
            }

            // Function to prepare drag and drop functionality
            function createHotelDragAndDropMood() {
                let dropZone = document.getElementById('inserted_hotel_data_position_div');

                function mouseDown(event) {
                    if (event.target.tagName.toLowerCase() === 'img') {
                        event.preventDefault();
                        let draggingElement = event.target.closest('.hotel_row_class');
                        draggingElement.classList.add('dragging');
                        draggingElement.dataset.startY = event.clientY;
                        document.addEventListener('mousemove', mouseMove);
                        document.addEventListener('mouseup', mouseUp);

                        document.body.style.touchAction = 'none';
                        document.body.style.userSelect = 'none';
                    }
                }

                function touchStart(event) {
                    let touch = event.touches[0];
                    if (touch.target.tagName.toLowerCase() === 'img') {
                        let draggingElement = touch.target.closest('.hotel_row_class');
                        draggingElement.classList.add('dragging');
                        draggingElement.dataset.startY = touch.clientY;
                        document.addEventListener('touchmove', touchMove, { passive: false });
                        document.addEventListener('touchend', touchEnd);

                        document.body.style.touchAction = 'none';
                        document.body.style.userSelect = 'none';
                    }
                }

                function mouseMove(event) {
                    let draggingElement = document.querySelector('.dragging');
                    let startY = parseInt(draggingElement.dataset.startY || 0);
                    let deltaY = event.clientY - startY;
                    draggingElement.style.transform = `translateY(${deltaY}px)`;

                    let dropElements = Array.from(dropZone.children);
                    let currentIndex = dropElements.indexOf(draggingElement);

                    let targetIndex = currentIndex;
                    for (let i = 0; i < dropElements.length; i++) {
                        let element = dropElements[i];
                        let rect = element.getBoundingClientRect();
                        if (i !== currentIndex && event.clientY > rect.top && event.clientY < rect.bottom) {
                            if (deltaY > 0 && event.clientY > rect.bottom - 20) {
                                targetIndex = i + 1;
                            } else if (deltaY < 0 && event.clientY < rect.top + 20) {
                                targetIndex = i;
                            }
                            break;
                        }
                    }

                    if (targetIndex !== currentIndex) {
                        dropZone.insertBefore(draggingElement, dropElements[targetIndex]);
                    }
                }

                function touchMove(event) {
                    event.preventDefault();
                    let draggingElement = document.querySelector('.dragging');
                    let touch = event.touches[0];
                    let startY = parseInt(draggingElement.dataset.startY || 0);
                    let deltaY = touch.clientY - startY;
                    draggingElement.style.transform = `translateY(${deltaY}px)`;

                    let dropElements = Array.from(dropZone.children);
                    let currentIndex = dropElements.indexOf(draggingElement);

                    let targetIndex = currentIndex;
                    for (let i = 0; i < dropElements.length; i++) {
                        let element = dropElements[i];
                        let rect = element.getBoundingClientRect();
                        if (i !== currentIndex && touch.clientY > rect.top && touch.clientY < rect.bottom) {
                            if (deltaY > 0 && touch.clientY > rect.bottom - 20) {
                                targetIndex = i + 1;
                            } else if (deltaY < 0 && touch.clientY < rect.top + 20) {
                                targetIndex = i;
                            }
                            break;
                        }
                    }

                    if (targetIndex !== currentIndex) {
                        dropZone.insertBefore(draggingElement, dropElements[targetIndex]);
                    }
                }

                function mouseUp(event) {
                    let draggingElement = document.querySelector('.dragging');

                    if (draggingElement) {
                        draggingElement.classList.remove('dragging');
                        draggingElement.style.transform = '';
                        draggingElement.removeAttribute('data-start-y');

                        handleDrop();  // Call the function to update dates after drop ends
                    }

                    document.removeEventListener('mousemove', mouseMove);
                    document.removeEventListener('mouseup', mouseUp);

                    document.body.style.touchAction = '';
                    document.body.style.userSelect = '';
                }

                function touchEnd(event) {
                    let draggingElement = document.querySelector('.dragging');

                    if (draggingElement) {
                        draggingElement.classList.remove('dragging');
                        draggingElement.style.transform = '';
                        draggingElement.removeAttribute('data-start-y');

                        handleDrop();  // Call the function to update dates after drop ends
                    }

                    document.removeEventListener('touchmove', touchMove);
                    document.removeEventListener('touchend', touchEnd);

                    document.body.style.touchAction = '';
                    document.body.style.userSelect = '';
                }

                let insertedHotelDataDivs = document.querySelectorAll('.hotel_row_class');
                insertedHotelDataDivs.forEach((div) => {
                    div.addEventListener('mousedown', mouseDown);
                    div.addEventListener('touchstart', touchStart);
                });
            }

            // Call the function to set up drag-and-drop functionality
            createHotelDragAndDropMood();

            // Call a function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
            saveOriginalHotelDates();
        }


















    } else if (clickedButtonId === 'clint_movements_auto_create_icon') {


        /* if one of the clint data or hotel data sections is hidden then stop the process */
        if (document.getElementById('downloaded_pdf_clint_data_page').style.display === 'none' || document.getElementById('downloaded_pdf_hotel_data_page').style.display === 'none') {

            // Play a sound effect
            new Audio('error.mp3').play();

            // Change the submit icon background color
            clint_movements_auto_create_icon.style.backgroundColor = 'red';

            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_movements_auto_create_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);

        } else {

            // Play a sound effect
            new Audio('success.mp3').play();


            // Change the submit icon background color
            clint_movements_auto_create_icon.style.backgroundColor = 'rgb(0, 255, 0)';

            // Set the background color of the submit icon back to default color
            setTimeout(() => {
                clint_movements_auto_create_icon.style.backgroundColor = 'rgb(255, 174, 0)';
            }, 500);


            /* Show the hide and show clint movement section icon if the 'show_and_hide_clint_movement_section_icon' is visible */
            document.getElementById('show_and_hide_clint_movement_section_icon').style.display = 'inline';


            /* Delete all data inside the 'inserted_clint_movements_data_position_div' in every time the 'clint_movements_auto_create_icon' is clicked */
            document.getElementById('inserted_clint_movements_data_position_div').innerHTML = '';


            // Function to increment a date by a specified number of days
            function incrementDate(dateString, days) {
                let [day, month] = dateString.split(' '); // Split the date string into day and month
                const arabicMonths = {
                    "يناير": 0, "فبراير": 1, "مارس": 2, "أبريل": 3,
                    "مايو": 4, "يونيو": 5, "يوليو": 6, "أغسطس": 7,
                    "سبتمبر": 8, "أكتوبر": 9, "نوفمبر": 10, "ديسمبر": 11
                }; // Arabic month names mapped to their corresponding month index
                const monthNames = Object.keys(arabicMonths); // Array of month names in Arabic

                let date = new Date(); // Create a new date object
                date.setDate(parseInt(day)); // Set the day of the date object
                date.setMonth(arabicMonths[month]); // Set the month of the date object
                date.setDate(date.getDate() + days); // Increment the date by the specified number of days

                let newDay = date.getDate(); // Get the new day after incrementing
                let newMonth = monthNames[date.getMonth()]; // Get the new month name in Arabic

                return `${newDay} ${newMonth}`; // Return the new date in the same format (day month)
            }





            // Function to clean up text and ensure no duplicated '+'
            function cleanUpText(text) {
                return text.replace(/\+\s*\+/g, ' + ').trim();
            }

            // Get the state of the airport welcome checkbox
            let isAirportWelcomeIncluded = document.getElementById('include_airport_welcome__checkbox').checked;
            let allHotelRows = document.querySelectorAll('.hotel_row_class_for_editing');
            let totalHotels = allHotelRows.length;
            let usedVisitingPlaces = {};

            let previousCityName = '';
            let previousHotelName = '';
            let isFirstHotelRowCreated = false; // Flag to check the first created row
            let hasCenterTourTextBeenAdded = false; // Flag to track if "التجول في السنتر" text has been added

            let isFirstJakartaHotelFound = false; // Flag to track the first Jakarta hotel found

            allHotelRows.forEach((hotelRow, index) => {
                let hotelName = hotelRow.querySelector('h1').innerText;
                let checkInDate = hotelRow.querySelector('h2').innerText;
                let nights = parseInt(hotelRow.querySelector('h4').innerText, 10);
                let cityName = hotelRow.querySelector('h5').innerText;
                let areaName = cityName === "بالي" ? hotelRow.querySelector('h6').innerText : null;
                let packageType = document.getElementById('clint_package_type_h6').innerText.trim();

                let packageMapping = {
                    "بكج شهر عسل": "honeymoon",
                    "بكج شباب": "guys",
                    "بكج عائلة": "family",
                    "بكج شخصين": "twopeople",
                    "بكج جديد": "family"
                };
                let packageKey = packageMapping[packageType];

                let targetObject;
                if (cityName === "بالي" && areaName) {
                    if (areaName === "اوبود") {
                        targetObject = allClintVisitingPlacesArray[1][packageKey];
                    } else if (["كوتا", "كيراماس", "نوسا دوا", "سيمنياك", "جيمباران", "اولواتو", "ليجين"].includes(areaName)) {
                        targetObject = allClintVisitingPlacesArray[0][packageKey];
                    }
                } else if (cityName === 'جاكرتا') {
                    targetObject = allClintVisitingPlacesArray[2][packageKey];
                } else if (cityName === 'بونشاك') {
                    targetObject = allClintVisitingPlacesArray[3][packageKey];
                } else if (cityName === 'باندونق') {
                    targetObject = allClintVisitingPlacesArray[4][packageKey];
                } else if (cityName === 'لومبوك') {
                    targetObject = allClintVisitingPlacesArray[5][packageKey];
                }

                if (!usedVisitingPlaces[cityName]) {
                    usedVisitingPlaces[cityName] = {};
                }

                let usedDays = usedVisitingPlaces[cityName];
                let isCheckOutTextAdded = false; // Flag to track if check-out text has been added for this hotel

                for (let i = 0; i < nights; i++) {
                    let clintMovementsRowTableDiv = document.createElement('div');
                    clintMovementsRowTableDiv.classList.add('clint_movements_row_class', 'clint_movements_row_class_for_editing');

                    let newDate = incrementDate(checkInDate, i);

                    let visitingPlacesText = "";
                    if (i === 0 && targetObject) {
                        let dayIndex = 1;
                        while (usedDays[dayIndex] && targetObject[`visitingPlaceNamesDay${dayIndex}`]) {
                            dayIndex++;
                        }
                        if (targetObject[`visitingPlaceNamesDay${dayIndex}`]) {
                            let textArray = targetObject[`visitingPlaceNamesDay${dayIndex}`];
                            usedDays[dayIndex] = true;
                            if (textArray && textArray.length > 0) {
                                visitingPlacesText = `${textArray.join(' + ')} `;
                            }
                        }
                    }

                    let checkInOutText = i === 0 ? `تسجيل الدخول في ${hotelName}` : '';
                    let combinedCityName = cityName;

                    if (i === 0 && index > 0) {
                        previousCityName = allHotelRows[index - 1].querySelector('h5').innerText;
                        previousHotelName = allHotelRows[index - 1].querySelector('h1').innerText;

                        if (cityName !== previousCityName) {
                            combinedCityName = `${previousCityName}-${cityName}`;
                        }

                        // Construct the checkInOutText without `+` after certain texts
                        let additionalText = "";
                        if (isAirportWelcomeIncluded && (cityName === "بالي" || cityName === "جاكرتا") && cityName !== previousCityName) {
                            if (!(previousCityName === "بونشاك" && cityName === "جاكرتا")) {
                                additionalText = `الإستقبال في مطار ${cityName} + `;
                            }
                        }

                        if (!isCheckOutTextAdded) {
                            checkInOutText = `تسجيل الخروج من ${previousHotelName} `;

                            if (previousCityName !== cityName) {
                                checkInOutText += `+ الذهاب الى ${cityName} `;
                            }

                            checkInOutText += `+ ${additionalText}${visitingPlacesText} + تسجيل الدخول في ${hotelName}`;
                            isCheckOutTextAdded = true;
                        }
                    }

                    if ((cityName === "بالي" || cityName === "جاكرتا") && !hasCenterTourTextBeenAdded) {
                        checkInOutText = checkInOutText.replace(`تسجيل الدخول في ${hotelName}`, `تسجيل الدخول في ${hotelName} + التجول في السنتر`);
                        hasCenterTourTextBeenAdded = true;
                    }

                    if (!isFirstHotelRowCreated && (cityName === "بالي" || cityName === "جاكرتا") && isAirportWelcomeIncluded) {
                        checkInOutText = `الإستقبال في مطار ${cityName} + ${checkInOutText}`;
                        isFirstHotelRowCreated = true;
                    }

                    // Clean up text to ensure no duplicated '+'
                    checkInOutText = cleanUpText(checkInOutText);

                    clintMovementsRowTableDiv.innerHTML = `
                        <div><h1>${newDate}</h1></div>
                        <div><h2>${checkInOutText}</h2></div>
                        <div class="clint_movements_row_controller" style="cursor: pointer;"><h3>${i === 0 ? combinedCityName : cityName}</h3></div>
                    `;

                    // Apply the new condition to append text if needed
                    if (!isFirstJakartaHotelFound && cityName === "جاكرتا" && i === 0) {
                        let currentH2 = clintMovementsRowTableDiv.querySelector('h2');
                        currentH2.innerText += " + الذهاب لمطعم السدة للعشاء";
                        currentH2.innerText = cleanUpText(currentH2.innerText); // Clean up text to ensure no duplicated '+'
                        isFirstJakartaHotelFound = true;
                    }

                    if (targetObject && i > 0) {
                        let dayIndex = i + 1;
                        while (usedDays[dayIndex] && targetObject[`visitingPlaceNamesDay${dayIndex}`]) {
                            dayIndex++;
                        }

                        if (targetObject[`visitingPlaceNamesDay${dayIndex}`]) {
                            let textArray = targetObject[`visitingPlaceNamesDay${dayIndex}`];
                            usedDays[dayIndex] = true;

                            if (textArray && textArray.length > 0) {
                                let currentH2 = clintMovementsRowTableDiv.querySelector('h2');
                                currentH2.innerText = cleanUpText(currentH2.innerText.trim());

                                if (currentH2.innerText) {
                                    currentH2.innerText += ` + ${textArray.join(' + ')}`;
                                } else {
                                    currentH2.innerText = `${textArray.join(' + ')}`;
                                }
                            }
                        }
                    }

                    document.getElementById('inserted_clint_movements_data_position_div').appendChild(clintMovementsRowTableDiv);

                    let clintMovementsRowImageController = clintMovementsRowTableDiv.querySelector('.clint_movements_row_controller');
                    clintMovementsRowImageController.onclick = function (event) {
                        clintMovementsRowCityNameControllerFunction(event);
                    };

                    if (index === totalHotels - 1 && i === nights - 1) {
                        let h3Element = clintMovementsRowTableDiv.querySelector('h3');
                        h3Element.innerText = cityName;
                    }
                }

                if (index === totalHotels - 1) {
                    let extraDate = incrementDate(checkInDate, nights);
                    let extraClintMovementsRowTableDiv = document.createElement('div');

                    extraClintMovementsRowTableDiv.classList.add('clint_movements_row_class', 'clint_movements_row_class_for_editing');

                    extraClintMovementsRowTableDiv.innerHTML = `
                        <div><h1>${extraDate}</h1></div>
                        <div><h2>تسجيل الخروج من ${hotelName} والتحرك للمطار للمغادرة</h2></div>
                        <div class="clint_movements_row_controller" style="cursor: pointer;"><h3>${cityName}-مغادرة</h3></div>
                    `;

                    document.getElementById('inserted_clint_movements_data_position_div').appendChild(extraClintMovementsRowTableDiv);

                    let clintMovementsRowImageController = extraClintMovementsRowTableDiv.querySelector('.clint_movements_row_controller');
                    clintMovementsRowImageController.onclick = function (event) {
                        clintMovementsRowCityNameControllerFunction(event);
                    };
                }
            });


            /* Show up the 'downloaded_pdf_clint_movements_data_page' section */
            document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'block';


            /* Update the available clint visiting places based on the current existing visiting places */
            processClintMovements();








            // Define a global variable to store the reference
            let currentClintMovementsDataDiv;




            // Function to handle edit clicked clint movements data
            editClickedClintMovementsData = function (currentClintMovementsDataDiv) {
                // Make sure the correct section is the one that is visible
                create_new_clint_data_section.style.display = 'none';
                create_new_hotel_package_section.style.display = 'none';
                create_new_flight_package_section.style.display = 'none';
                create_new_package_including_and_not_including_data_section.style.display = 'none';
                create_new_clint_movements_plan_section.style.display = 'block';

                // Show and hide different icons
                document.getElementById('clint_movements_auto_create_icon').style.display = 'none';
                document.getElementById('confirm_new_clint_movements_data_row_icon').style.display = 'block';
                document.getElementById('cancel_new_clint_movements_data_row_icon').style.display = 'block';

                // Change the innerText and styling to default
                document.getElementById('clint_movements_content_section_title_text_id').innerText = `تعديل خط سير يوم ${currentClintMovementsDataDiv.querySelector('h1').innerText}`;
                document.getElementById('clint_movements_content_section_title_text_id').style.background = 'rgb(85, 127, 137)';

                // Scroll up to the middle of the 'toggle_clint_movements_details_title_div_id'
                document.getElementById('toggle_clint_movements_details_title_div_id').scrollIntoView({
                    block: 'center',
                    inline: 'center',
                    behavior: 'smooth',
                });

                // Disable the clint movements dates when editing
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




                /* Set the clicked clint movemenet row h2 innerText inside the input to start editing */
                document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value = currentClintMovementsDataDiv.querySelector('h2').innerText;


                /* Update the available clint visiting places based on the current existing visiting places */
                processClintMovements();







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



                    /* Update the available clint visiting places based on the current existing visiting places */
                    processClintMovements();
                }




                /* Function to confirm the new clint movements row data */
                confirmNewClintMovementsDataRow = function () {

                    // Get references to all input elements for later use
                    currentClintMovementsDataDiv.querySelector('h2').innerText = document.getElementById('clint_movements_whole_day_actions_details_textarea_id').value;





                    // Get all dynamically created elements with the class 'clint_movements_row_controller'
                    let ClintMovementsRowImageController = currentClintMovementsDataDiv.querySelectorAll('.clint_movements_row_controller');
                    ClintMovementsRowImageController.onclick = function (event) {
                        clintMovementsRowCityNameControllerFunction(event); // Pass the event object to the function
                    };


                    // Clear the input after confirm the new flight data
                    cancelNewClintMovementsDataRow()
                }
            }

















            // Function to handle clint movements row div click or touch
            clintMovementsRowCityNameControllerFunction = function (event) {
                let deleteclintMovementsRowDiv = document.getElementById('ensure_delete_or_edit_clint_movemnt_data_div');
                let clickedclintMovementsDataDiv = event.target.closest('.clint_movements_row_class');

                // Ensure the target is a clint_movements_row_class div
                if (clickedclintMovementsDataDiv) {
                    currentClintMovementsDataDiv = clickedclintMovementsDataDiv;

                    /* Function to run edit the clicked client movements row data */
                    runEditClickedClintMovementsDataFunction = function () {
                        editClickedClintMovementsData(currentClintMovementsDataDiv);

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
                }
            };

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

    // Play a sound effect
    new Audio('click.mp3').play();

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

        // Play a sound effect
        new Audio('click.mp3').play();

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

        // Play a sound effect
        new Audio('success.mp3').play();

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

        // Play a sound effect
        new Audio('error.mp3').play();


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

// Function to save the last PDF download data in localStorage
function saveLastPdfDownloadData() {
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
            let minifiedHTML = minifyHTML(element.innerHTML);
            newEntry.e[id] = LZString.compressToUTF16(minifiedHTML); // Compress HTML
        }
    });

    localStorage.setItem('lastDownloadWebsiteData', JSON.stringify(newEntry));
}

// Function to minify HTML (dummy implementation, you can replace it with a real minification function if needed)
function minifyHTML(html) {
    return html.replace(/\s+/g, ' ').trim();
}


/* Download the pdf file with the given name */
downloadPdfWithCustomName = async function (pdfName) {
    let { jsPDF } = window.jspdf;

    // Function to capture a canvas of a given section
    let captureCanvas = async function (section, scale) {
        try {
            // Ensure resources are loaded and elements are visible before capturing
            await new Promise(resolve => setTimeout(resolve, 1000)); // Increase the wait to 1000ms

            let canvas = await html2canvas(section, {
                scale: scale,
                backgroundColor: null,
                scrollY: 0,
                useCORS: true, // Ensure cross-origin images are loaded correctly
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

    let scale = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 3.5 : 3.5;

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

// Helper function to check if an element is visible
function isVisible(element) {
    return element.offsetWidth > 0 && element.offsetHeight > 0;
}


