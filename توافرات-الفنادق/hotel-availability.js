/* How To Manage This Website? */
/* There Are 3 Places You Must Pay Attention When Addng New Data in Any Array:
    1- The Hotel Location Data (Bali , Jakarta , Puncak and Etc..)
    2- The Hotel Area Data (Keramas , Ubud , Kuta and Etc..)
    3- The Hotel Data (Komaneka Keramas , Samsara Ubud , Tejaprana and Etc..)
    
    Also Pay Attention To The Data That Be Inside Each Object in Any Array (Must Be The Same Spelling)
*/




/* Array For Hotel Location Data */
let hotelLocationArray = [
    {
        locationImgSrc: 'صور-موقع-الفنادق/bali.jpg',
        hotelLocationName: 'Bali',
        locationArrayName: 'baliHotelArray',
    },
    {
        locationImgSrc: 'صور-موقع-الفنادق/jakarta.jpg',
        hotelLocationName: 'Jakarta',
        locationArrayName: 'jakartaHotelArray',
    },
    {
        locationImgSrc: 'صور-موقع-الفنادق/puncak.jpg',
        hotelLocationName: 'Puncak',
        locationArrayName: 'puncakHotelArray',
    },
    {
        locationImgSrc: 'صور-موقع-الفنادق/bandung.jpg',
        hotelLocationName: 'Bandung',
        locationArrayName: 'bandungHotelArray',
    },
]












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




















/* All The System Code is Here */

// Function to add horizontal scrolling functionality
function addHorizontalScrolling(container) {
    container.addEventListener('mousedown', function (event) {
        if (event.button === 0) { // Check if left mouse button is clicked
            this.classList.add('grabbing'); // Add grabbing cursor style
            this.dataset.scrollX = this.scrollLeft; // Store initial scrollLeft position
            this.dataset.clientX = event.clientX; // Store initial clientX position

            let onMouseMove = function (event) {
                let deltaX = event.clientX - parseInt(this.dataset.clientX); // Calculate delta X
                this.scrollLeft = parseInt(this.dataset.scrollX) - deltaX; // Adjust scrollLeft position
            }.bind(this);

            let onMouseUp = function () {
                this.classList.remove('grabbing'); // Remove grabbing cursor style
                window.removeEventListener('mousemove', onMouseMove); // Remove event listeners
                window.removeEventListener('mouseup', onMouseUp);
            }.bind(this);

            window.addEventListener('mousemove', onMouseMove); // Listen for mouse movement
            window.addEventListener('mouseup', onMouseUp); // Listen for mouse release
        }
    });
}














/* Function To Open Allotment File */
showHotelAllotmentDataFunction = function () {

    /* Hide And Show Different Sections Based on What Card Got Clicked */
    document.getElementById('choose_paid_rooms_hotel_file_section').style.display = 'none';
    document.getElementById('choose_hotel_location_section').style.display = 'none';

    /* Change Other Clicked Cards Background Color */
    paid_rooms_card_id.style.backgroundColor = 'rgb(0, 162, 255)';
    close_sale_card_id.style.backgroundColor = 'rgb(0, 162, 255)';

    /* Open Allotment PDF File */
    window.open('hotel-pdf/allotment/allotment.pdf')
}


















/* Function To Show Hotel Location Section For Showing Close Sale Data */
showHotelCloseSaleDataFunction = function (clickedElement) {

    // Reset background color for all hotel info divs
    let hotelInfoDivs = document.getElementsByClassName('hotel_info_card_div');
    for (let div of hotelInfoDivs) {
        div.style.backgroundColor = 'rgb(0, 162, 255)';
    }
    /* Also Hide The Hotel Area Cards Section */
    document.getElementById('choose_hotel_area_section').style.display = 'none';


    /* Chnage Clicked Card Background Color */
    clickedElement.style.backgroundColor = 'rgb(0, 255, 0)';
    paid_rooms_card_id.style.backgroundColor = 'rgb(0, 162, 255)';

    /* Hide And Show Different Sections Based on What Card Got Clicked */
    document.getElementById('choose_paid_rooms_hotel_file_section').style.display = 'none';
    document.getElementById('choose_hotel_location_section').style.display = 'flex';

    /* Scroll Down To The 'choose_hotel_location_card_div_id' Element */
    setTimeout(() => {
        document.getElementById('choose_hotel_location_card_div_id').scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 100);
}





















/* Function To Show Hotel Paid Rooms Section For Showing Close Sale Data */
showHotelPaidRoomsDataFunction = function (clickedElement) {

    /* Chnage Clicked Card Background Color */
    clickedElement.style.backgroundColor = 'rgb(0, 255, 0)';
    close_sale_card_id.style.backgroundColor = 'rgb(0, 162, 255)';

    /* Hide And Show Different Sections Based on What Card Got Clicked */
    document.getElementById('choose_hotel_location_section').style.display = 'none';
    document.getElementById('choose_hotel_area_section').style.display = 'none';
    document.getElementById('choose_paid_rooms_hotel_file_section').style.display = 'flex';

    /* Scroll Down To The 'choose_paid_rooms_hotel_file_section' Element */
    setTimeout(() => {
        document.getElementById('choose_paid_rooms_hotel_file_section').scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 100);
}




















// Loop through the array to create location cards
hotelLocationArray.forEach((item) => {
    let { locationImgSrc, hotelLocationName, locationArrayName } = item;

    /* Create The Container Div With The Content */
    let hotelLocationInfoDiv = document.createElement("div");
    hotelLocationInfoDiv.classList.add("hotel_info_card_div");
    hotelLocationInfoDiv.onclick = function () {
        createHotelAreaCardsFunction(hotelLocationInfoDiv, locationArrayName, hotelLocationName);
    };

    hotelLocationInfoDiv.innerHTML = `
        <div class="hotel_location_img_div">
            <img src='${locationImgSrc}' alt="فنادق اندونيسيا">
        </div>
        <div class="hotel_location_card_text_div">
            <h2>${hotelLocationName}</h2>
        </div>
    `;

    // Append the 'hotelLocationInfoDiv' to the 'choose_hotel_location_card_div_id'
    document.getElementById('choose_hotel_location_card_div_id').appendChild(hotelLocationInfoDiv);
});

// Add horizontal scrolling functionality to location div
addHorizontalScrolling(document.getElementById('choose_hotel_location_card_div_id'));




























/* Function For Creating The Hotel Area Cards */
createHotelAreaCardsFunction = function (clickedHotelAreaCard, hotelLocationArrayName, hotelAreaName) {
    // Reset background color for all hotel info divs
    let hotelInfoDivs = document.getElementsByClassName('hotel_info_card_div');
    for (let div of hotelInfoDivs) {
        // Set the background color of each div to a default blue color
        div.style.backgroundColor = 'rgb(0, 162, 255)';
    }

    // Set the background color of the clicked element to green
    clickedHotelAreaCard.style.backgroundColor = 'rgb(0, 255, 0)';

    // Define an object that maps location array names to the corresponding arrays
    let hotelLocationArrays = {
        'baliHotelArray': baliHotelArray,
        'jakartaHotelArray': jakartaHotelArray,
        'puncakHotelArray': puncakHotelArray,
        'bandungHotelArray': bandungHotelArray
    };

    // Clear the inner HTML of the hotel area card container
    document.getElementById('choose_hotel_area_card_div_id').innerHTML = '';

    // Set the title for the hotel area section with the selected area name
    document.getElementById('choose_hotel_area_title_id').innerText = `اختار المنطقة في ${hotelAreaName}`;

    // Loop through each item in the selected hotel location array
    hotelLocationArrays[hotelLocationArrayName].forEach((item) => {
        let { hotelAreaImgSrc, hotelAreaName, hotelPdfNameArray } = item;

        /* Create The Container Div With The Content */
        let hotelAreaInfoDiv = document.createElement("div");
        // Add a class to the newly created div for styling
        hotelAreaInfoDiv.classList.add("hotel_info_card_div");
        // Set an onclick event to open the PDF file for the selected hotel area
        hotelAreaInfoDiv.onclick = () => { createHotelCardsFunction(hotelPdfNameArray) };

        // Set the inner HTML of the div with the image and area name
        hotelAreaInfoDiv.innerHTML = `
            <div class="hotel_location_img_div">
                <img src='${hotelAreaImgSrc}' alt="فنادق اندونيسيا">
            </div>
            <div class="hotel_location_card_text_div">
                <h2>${hotelAreaName}</h2>
            </div>
        `;

        // Append the 'hotelAreaInfoDiv' to the 'choose_hotel_area_card_div_id'
        document.getElementById('choose_hotel_area_card_div_id').appendChild(hotelAreaInfoDiv);
    });

    // Add horizontal scrolling functionality to the area div
    addHorizontalScrolling(document.getElementById('choose_hotel_area_card_div_id'));

    // If the hotel area section is not displayed, display it
    if (document.getElementById('choose_hotel_area_section').style.display === 'none') {
        document.getElementById('choose_hotel_area_section').style.display = 'flex';
    }

    /* Scroll Down To The 'choose_hotel_area_card_div_id' Element */
    setTimeout(() => {
        // Smoothly scroll to the hotel area card container
        document.getElementById('choose_hotel_area_card_div_id').scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 100);
};

/* Function To Show Each Hotel Area Card PDF File For The Close Sale Data */
createHotelCardsFunction = function (pdfName) {
    // Open a new window with the URL to the PDF file
    window.open(`hotel-pdf/hotel-stope-sale/${pdfName}`)
}


























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
