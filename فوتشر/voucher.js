



/* Header Nav Bar */
function toggleLinks(id) {
    var links = document.getElementById(id);
    if (links.style.maxHeight) {
        links.style.maxHeight = null;
    } else {
        links.style.maxHeight = links.scrollHeight + "px";
    }
}

setTimeout(function () {
    document.getElementById('body').style.opacity = "1";
}, 100);














/* Functions to run the company names search bar and drop down functionality */
// Get elements for company names dropdown
let companyNameInput = document.getElementById('company_logo_input_id');
let companyNamesDiv = document.getElementById('company_names_dropdown');
let companyNameSearchBar = document.getElementById('company_name_search_bar');


// Function to hide the company names dropdown and overlay
function hideCompanyDropdown() {
    companyNamesDiv.classList.remove('show');
    hideOverlay(); // Assuming hideOverlay() is defined elsewhere to hide an overlay
}

// Function to show the company names dropdown and overlay
companyNameInput.addEventListener('click', () => {
    companyNamesDiv.classList.add('show');
    showOverlay(); // Assuming showOverlay() is defined elsewhere to show an overlay
});

// Event listener to expand company names dropdown on search bar click
companyNameSearchBar.addEventListener('click', () => {
    companyNamesDiv.style.height = '80vh'; // Set height to 90vh when search bar is clicked
    companyNamesDiv.style.transition = 'height 0.2s ease-in-out'; // Ensure height transition is smooth
});

// Event listener to handle selection of company names
companyNamesDiv.querySelectorAll('.company_names_options_dropdown_class h3').forEach(option => {
    option.addEventListener('click', () => {
        companyNameInput.value = option.textContent.trim();
        hideCompanyDropdown();
        companyNamesDiv.style.height = 'auto'; // Reset height to auto when hiding dropdown
        companyNamesDiv.style.transition = 'height 0.2s ease-in-out'; // Ensure height transition is smooth
    });
});

// Event listener to filter company names based on search bar input
companyNameSearchBar.addEventListener('input', () => {
    let filter = companyNameSearchBar.value.trim().toLowerCase();
    let options = companyNamesDiv.querySelectorAll('.company_names_options_dropdown_class h3');

    options.forEach(option => {
        let companyName = option.textContent.trim().toLowerCase();
        if (companyName.includes(filter)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
});


















/* Functions to run the all hotel names search bar and drop down functionality */
// Get elements for hotel names dropdown
let propertyNameInput = document.getElementById('property_name_input_id');
let propertyNamesDiv = document.getElementById('property_names_dropdown');
let propertyNameSearchBar = document.getElementById('property_name_search_bar');

// Function to hide the hotel names dropdown and overlay
function hideHotelDropdown() {
    propertyNamesDiv.classList.remove('show');
    hideOverlay(); // Assuming hideOverlay() is defined elsewhere to hide an overlay
}

// Function to show the hotel names dropdown and overlay
propertyNameInput.addEventListener('click', () => {
    propertyNamesDiv.classList.add('show');
    showOverlay(); // Assuming showOverlay() is defined elsewhere to show an overlay
});

// Event listener to expand company names dropdown on search bar click
propertyNameSearchBar.addEventListener('click', () => {
    propertyNamesDiv.style.height = '80vh'; // Set height to 90vh when search bar is clicked
    propertyNamesDiv.style.transition = 'height 0.2s ease-in-out'; // Ensure height transition is smooth
});

// Event listener to handle selection of hotel names
propertyNamesDiv.querySelectorAll('.company_names_options_dropdown_class h3').forEach(option => {
    option.addEventListener('click', () => {
        propertyNameInput.value = option.textContent.trim();
        hideHotelDropdown();
    });
});

// Event listener to filter hotel names based on search bar input
propertyNameSearchBar.addEventListener('input', () => {
    let filter = propertyNameSearchBar.value.trim().toLowerCase();
    let options = propertyNamesDiv.querySelectorAll('.company_names_options_dropdown_class h3');

    options.forEach(option => {
        let hotelName = option.textContent.trim().toLowerCase();
        if (hotelName.includes(filter)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
});

// Prepare setup to show only the first 6 elements initially
document.addEventListener('DOMContentLoaded', () => {
    let options = propertyNamesDiv.querySelectorAll('.company_names_options_dropdown_class h3');
    options.forEach((option, index) => {
        if (index < 6) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
});


















// Function to show the overlay
function showOverlay() {
    overlayLayer = document.createElement('div'); // Create a new overlay element
    overlayLayer.className = 'black_overlay'; // Set the class name for styling
    overlayLayer.onclick = hideOverlay; // Set the click event listener to hide the overlay when clicked outside
    document.body.appendChild(overlayLayer); // Append overlay to the document body


    setTimeout(() => {
        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
    }, 50);
}

// Function to hide the overlay and any visible dropdown
function hideOverlay() {

    // Check if any dropdown with the class name 'searchable_names_dropdown_class' is visible and hide it
    let visibleDropdown_1 = document.querySelector('.searchable_names_dropdown_class.show');
    if (visibleDropdown_1) {
        visibleDropdown_1.classList.remove('show'); // Remove 'show' class to hide dropdown
        companyNamesDiv.style.height = '50vh'; // Set height back to 50vh when dropdown element is disappear
        propertyNamesDiv.style.height = '50vh'; // Set height back to 50vh when dropdown element is disappear
    }

    // Hide the overlay if it exists
    if (overlayLayer) {
        overlayLayer.style.opacity = '0'; // Set opacity to 0 for smooth disappearance

        setTimeout(() => {
            if (overlayLayer) {
                document.body.removeChild(overlayLayer); // Remove overlay from DOM
                overlayLayer = null; // Reset overlay variable
            }
        }, 200); // Assuming 200ms is the duration of your opacity transition
    }
}




















/* Function to set the clicked input text */
setVoucherClintDataInputValue = function (clickedInputName) {
    const inputElement = document.getElementById(clickedInputName);

    if (clickedInputName === 'customer_name_input_id') {
        if (inputElement.value === '') {
            inputElement.value = 'Mr. ';
        }
    } else if (clickedInputName === 'meal_plan_input_id') {
        if (inputElement.value === '') {
            inputElement.value = 'Bed & Breakfast for person';
        }
    }
}
















/* Create voucher pdf data elements */
enterVoucherData = function () {

    let companyLogoInput = document.getElementById('company_logo_input_id');
    let confirmationNumberInput = document.getElementById('confirmation_number_input_id');
    let propertyNameInput = document.getElementById('property_name_input_id');
    let totalRoomInput = document.getElementById('total_room_input_id');
    let roomTypeInput = document.getElementById('room_type_input_id');
    let bedTypeInput = document.getElementById('bed_type_input_id');
    let checkInInput = document.getElementById('check_in_input_id');
    let checkOutInput = document.getElementById('check_out_input_id');
    let mealPlanInput = document.getElementById('meal_plan_input_id');
    let customerNameInput = document.getElementById('customer_name_input_id');


    if (companyLogoInput.value !== '' && confirmationNumberInput.value !== '' && propertyNameInput.value !== '' && totalRoomInput.value !== '' && roomTypeInput.value !== '' && bedTypeInput.value !== '' && checkInInput.value !== '' && checkOutInput.value !== '' && mealPlanInput.value !== '' && customerNameInput.value !== '') {

        /* Make the 'Done' button in green color animation */
        document.getElementById('enter_voucher_data_button_id').style.backgroundColor = 'rgb(0, 255, 0)';
        setTimeout(() => {
            document.getElementById('enter_voucher_data_button_id').style.backgroundColor = 'white';
        }, 500);



        // Arrange content for the left side
        /* First convert all spaces with - and make all letters toLowerCase */
        let companyLogoSrcReadyText = companyLogoInput.value.toLowerCase().replace(/\s+/g, '-');
        let propertyNameSrcReadyText = propertyNameInput.value.toLowerCase().replace(/\s+/g, '-');

        /* Make all letters capital for property name under the image */
        let propertyNameCapitalTextReadyText = propertyNameInput.value.toUpperCase();


        let allPdfContent = `
    
        <div id="voucher_company_logo_div">
            <img src="../صور-الشركات/${companyLogoSrcReadyText}.jpg" />
        </div>


        <div class="voucher_details_title_div">
            <h5>Booking Details:</h5>
        </div>


        <div id="voucher_booking_details_div">
        
            <div class="booking_detail_div">
                <h5>Confirmation Number:</h5>
                <h6>${confirmationNumberInput.value}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Property Name:</h5>
                <h6>${propertyNameInput.value}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Total Room:</h5>
                <h6>${totalRoomInput.value}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Room Type:</h5>
                <h6>${roomTypeInput.value}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Bed Type:</h5>
                <h6>${bedTypeInput.value}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Check In:</h5>
                <h6>${checkInInput.value}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Check Out:</h5>
                <h6>${checkOutInput.value}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Meal Plan:</h5>
                <h6>${mealPlanInput.value}</h6>
            </div>

        </div>

        

        <div class="voucher_details_title_div">
            <h5>Customer Details:</h5>
        </div>


        <div id="voucher_customer_details_div">
            <div class="booking_detail_div" style=" border: none">
                <h5>Name:</h5>
                <h6>${customerNameInput.value}</h6>
            </div>
        </div>


        <div id="voucher_property_image_div">
            <img src="../صور-الفنادق/${propertyNameSrcReadyText}.jpg" />
            <h6>${propertyNameCapitalTextReadyText}</h6>
        </div>
    
    
    
    `;



        /* Show the following elements */
        document.getElementById('export_package_pdf_div_id').style.display = 'block';

        /* Reset the inner content of the 'voucher_pdf_file_structure_section' and then set the new one */
        document.getElementById('voucher_pdf_file_structure_section').innerHTML = '';
        document.getElementById('voucher_pdf_file_structure_section').innerHTML = allPdfContent;


        /* Start setting up the file name for downloading */
        openPdfDownloadBox();

    }else{
        /* Make the 'Done' button in green color animation */
        document.getElementById('enter_voucher_data_button_id').style.backgroundColor = 'red';
        setTimeout(() => {
            document.getElementById('enter_voucher_data_button_id').style.backgroundColor = 'white';
        }, 500);

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
    let section1 = document.getElementById('voucher_pdf_file_structure_section');

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


        let imgData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format with highest quality
        let imgHeight = canvas.height * imgWidth / canvas.width;

        // Calculate vertical and horizontal offset to center the image on the PDF
        let imgXOffset = (imgWidth - imgWidth) / 2;
        let imgYOffset = (pageHeight - imgHeight) / 2;

        // Add scaled image to PDF with compression and center it
        pdf.addImage(imgData, 'JPEG', imgXOffset, imgYOffset, imgWidth, imgHeight, '', 'FAST');
    };

    // Function to add HTML content as vector-based text
    let addHTMLToPDF = function (pdf, element, pageNumber) {
        pdf.setPage(pageNumber);
        pdf.html(element, {
            callback: function (pdf) {
                if (pageNumber > 1) {
                    pdf.setPage(pageNumber);
                }
            },
            x: (imgWidth - element.offsetWidth) / 2, // Center the HTML content horizontally
            y: (pageHeight - element.offsetHeight) / 2, // Center the HTML content vertically
            html2canvas: { scale: 5 }
        });
    };

    // Only generate PDF with the first section
    html2canvas(section1, { scale: 5 }).then(canvas1 => {
        addContentToPDF(canvas1, true);

        // Add HTML content for vector-based text
        addHTMLToPDF(pdf, section1, 1);

        // Save the PDF
        pdf.save(pdfName);
    });
};




















// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsModuleScript = document.createElement('script');
ioniconsModuleScript.type = 'module';
ioniconsModuleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.body.appendChild(ioniconsModuleScript);

// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsNomoduleScript = document.createElement('script');
ioniconsNomoduleScript.setAttribute('nomodule', '');
ioniconsNomoduleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.body.appendChild(ioniconsNomoduleScript);
