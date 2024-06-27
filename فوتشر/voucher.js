/* How To Manage This Website? */
/* There Are 3 Places You Must Pay Attention When Addng New Data in Any Array:
    1- The Hotel Location Data (Bali , Jakarta , Puncak and Etc..)
    2- The Hotel Area Data (Keramas , Ubud , Kuta and Etc..)
    3- The Hotel Data (Komaneka Keramas , Samsara Ubud , Tejaprana and Etc..)
    
    Also Pay Attention To The Data That Be Inside Each Object in Any Array (Must Be The Same Spelling)
*/













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
// Get elements
let companyNameInput = document.getElementById('clint_company_name_input_id');
let companyNamesDiv = document.getElementById('company_names_dropdown');
let companyNameSearchBar = document.getElementById('company_name_search_bar');



// Function to show the dropdown and overlay
function showDropdown() {
    companyNamesDiv.classList.add('show');
    showOverlay();
}

// Function to hide the dropdown and overlay
function hideDropdown() {
    companyNamesDiv.classList.remove('show');
    hideOverlay();
}

// Event listener to toggle dropdown visibility on input click
companyNameInput.addEventListener('click', () => {
    showDropdown();
});

// Event listener to handle selection of company names
companyNamesDiv.querySelectorAll('h3').forEach(option => {
    option.addEventListener('click', () => {
        companyNameInput.value = option.textContent;
        hideDropdown();
    });
});

// Event listener to filter company names based on search bar input
companyNameSearchBar.addEventListener('input', () => {
    let filter = companyNameSearchBar.value.trim().toLowerCase();
    companyNamesDiv.querySelectorAll('h3').forEach(option => {
        let companyName = option.textContent.trim().toLowerCase();
        if (companyName.includes(filter)) {
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
    }, 100);
}

// Function to hide the overlay and any visible dropdown
function hideOverlay() {

    // Check if any dropdown with the class name 'company_names_dropdown_class' is visible and hide it
    let visibleDropdown_2 = document.querySelector('.company_names_dropdown_class.show');
    if (visibleDropdown_2) {
        visibleDropdown_2.classList.remove('show'); // Remove 'show' class to hide dropdown
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
