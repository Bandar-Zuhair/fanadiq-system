let existingDataStatus="newData",websiteUserUniqueNumber="newUniqueNumber";const scriptURL="https://script.google.com/macros/s/AKfycbwqp6rBvBQOUNttF3vz5Z9mW3x3VOYVv_k7p-lIlsg5p0M_TStsic5jyuxgElqJ2Ye4jA/exec",form=document.forms["save-package"];function submitFormAndSaveData(){event.preventDefault(),playSoundEffect("success");let e={name:document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText,content:{},status:existingDataStatus};["downloaded_pdf_clint_data_page","downloaded_pdf_package_including_data_page","downloaded_pdf_flight_data_page","downloaded_pdf_hotel_data_page","downloaded_pdf_clint_movements_data_page","downloaded_pdf_total_price_data_page"].forEach(t=>{let a=document.getElementById(t);a&&"none"!==a.style.display&&a.offsetWidth>0&&a.offsetHeight>0&&(e.content[t]=cleanHTML(a.innerHTML))}),fetch("https://script.google.com/macros/s/AKfycbwqp6rBvBQOUNttF3vz5Z9mW3x3VOYVv_k7p-lIlsg5p0M_TStsic5jyuxgElqJ2Ye4jA/exec",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},mode:"no-cors"}).then(()=>{updateDataBaseSavedDataNames(),existingDataStatus="existingData",document.getElementById("website_users_name_input_id").disabled=!0,websiteUserUniqueNumber="existingUniqueNumber",document.getElementById("use_website_user_code_name_as_downloaded_pdf_file_name_p_id").style.pointerEvents="auto",document.getElementById("check_pdf_name_button").style.pointerEvents="auto"})}function cleanHTML(e){return e.replace(/\s+/g," ").trim()}let sheetURL="https://script.google.com/macros/s/AKfycbzfCsf83fAX5TGNob-dHpasi0YF3ZSPTxqwEqAgOMCgRDE0W7uFOxyu2vs_0vM8sFuZsA/exec",sheetData=[],totalRivPackageNumberForUpdatingNewRivPackage=null;function updateDataBaseSavedDataNames(){let e=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div");e.innerHTML="",fetchData();if(localStorage.getItem("lastDownloadWebsiteData")){let t=document.createElement("h3");t.innerText="Last Download",t.onclick=function(){pickThisGoogleSheetDataName(this)},e.appendChild(t)}fetch(sheetURL).then(e=>e.json()).then(t=>{(sheetData=t.values).forEach(t=>{let a=document.createElement("h3");a.innerText=t[0],"Name"===a.innerText?a.style.display="none":a.onclick=function(){pickThisGoogleSheetDataName(this)},e.appendChild(a)})}).catch(e=>{})}function findSelectedNameAndImportContent(){let e=null;document.querySelectorAll("#all_google_sheet_stored_data_names_for_importing_data_div h3").forEach(function(t){"rgb(0, 155, 0)"===t.style.backgroundColor&&(e=t.innerText)}),e?"Last Download"===e?importContentFromLocalStorage():"Name"!==e&&(playSoundEffect("success"),importContentForSelectedName(e)):(playSoundEffect("error"),import_google_sheet_data_p_id.style.backgroundColor="red",setTimeout(()=>{import_google_sheet_data_p_id.style.backgroundColor="rgb(255, 174, 0)"},500))}function importContentFromLocalStorage(){let e=localStorage.getItem("lastDownloadWebsiteData");if(document.getElementById("downloaded_pdf_clint_data_page").style.display="none",document.getElementById("downloaded_pdf_package_including_data_page").style.display="none",document.getElementById("downloaded_pdf_flight_data_page").style.display="none",document.getElementById("downloaded_pdf_hotel_data_page").style.display="none",document.getElementById("downloaded_pdf_clint_movements_data_page").style.display="none",document.getElementById("downloaded_pdf_total_price_data_page").style.display="none",e){let t=JSON.parse(e).e;try{let a=new DOMParser;for(let n in t){let l=t[n];if(l){let o=LZString.decompressFromUTF16(l),i=formatHtmlForWebsite(o),d=a.parseFromString(i,"text/html").body.innerHTML,c=document.getElementById(n);c&&(c.style.display="block",c.innerHTML="",c.innerHTML=d,reActiveDragAndDropFunctionality(c.id))}}hideOverlay(),document.getElementById("website_users_name_input_id").disabled=!0;document.querySelectorAll(".inserted_package_data_section_page_image_class").forEach(e=>{e.style.display="none"});if(document.querySelectorAll(".inserted_package_data_section_page_image_class_2").forEach(e=>{e.style.display="none"}),document.getElementById("inserted_company_name_image_position_div").style.display="flex",document.getElementById("store_google_sheet_package_raw_user_with_no_riv_for_later_reference_when_importing")){let r=document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText.split("_riv_")[0];totalRivPackageNumberForUpdatingNewRivPackage=sheetData.filter(e=>e[0].split("_riv_")[0]===r).length,document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText=`${document.getElementById("store_google_sheet_package_raw_user_with_no_riv_for_later_reference_when_importing").innerText}_riv_${totalRivPackageNumberForUpdatingNewRivPackage}`,existingDataStatus="newData",websiteUserUniqueNumber="existingUniqueNumber"}else existingDataStatus="existingData",websiteUserUniqueNumber="existingUniqueNumber";updateAllowedDates()}catch(s){}}else playSoundEffect("error")}function importContentForSelectedName(e){let t=sheetData.find(t=>t[0]===e);if(document.getElementById("downloaded_pdf_clint_data_page").style.display="none",document.getElementById("downloaded_pdf_package_including_data_page").style.display="none",document.getElementById("downloaded_pdf_flight_data_page").style.display="none",document.getElementById("downloaded_pdf_hotel_data_page").style.display="none",document.getElementById("downloaded_pdf_clint_movements_data_page").style.display="none",document.getElementById("downloaded_pdf_total_price_data_page").style.display="none",t){let a={downloaded_pdf_clint_data_page:t[1],downloaded_pdf_package_including_data_page:t[2],downloaded_pdf_flight_data_page:t[3],downloaded_pdf_hotel_data_page:t[4],downloaded_pdf_clint_movements_data_page:t[5],downloaded_pdf_total_price_data_page:t[6]};try{let n=new DOMParser;for(let l in a){let o=a[l];if(o){let i=formatHtmlForWebsite(o),d=n.parseFromString(i,"text/html").body.innerHTML,c=document.getElementById(l);c&&(c.style.display="block",c.innerHTML="",c.innerHTML=d,reActiveDragAndDropFunctionality(c.id))}}hideOverlay(),document.getElementById("website_users_name_input_id").disabled=!0;document.querySelectorAll(".inserted_package_data_section_page_image_class").forEach(e=>{e.style.display="none"});document.querySelectorAll(".inserted_package_data_section_page_image_class_2").forEach(e=>{e.style.display="none"}),document.getElementById("inserted_company_name_image_position_div").style.display="flex"}catch(r){}}if(document.getElementById("store_google_sheet_package_raw_user_with_no_riv_for_later_reference_when_importing")){let s=document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText.split("_riv_")[0];totalRivPackageNumberForUpdatingNewRivPackage=sheetData.filter(e=>e[0].split("_riv_")[0]===s).length,document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText=`${document.getElementById("store_google_sheet_package_raw_user_with_no_riv_for_later_reference_when_importing").innerText}_riv_${totalRivPackageNumberForUpdatingNewRivPackage}`,existingDataStatus="newData",websiteUserUniqueNumber="existingUniqueNumber"}else existingDataStatus="existingData",websiteUserUniqueNumber="existingUniqueNumber";updateAllowedDates()}function formatHtmlForWebsite(e){return e.replace(/\s+/g," ").trim()}function pickThisGoogleSheetDataName(e){"rgb(0, 155, 0)"===e.style.backgroundColor?findSelectedNameAndImportContent():(document.querySelectorAll("#all_google_sheet_stored_data_names_for_importing_data_div h3").forEach(function(e){e.style.backgroundColor="white",e.style.color="black"}),e.style.backgroundColor="rgb(0, 155, 0)",e.style.color="white")}document.getElementById("refresh_import_saved_packages_data_input_value_icon").onclick=function(){playSoundEffect("click");let e=document.getElementById("import_google_sheet_data_names_search_bar_input_id"),t=e.value;e.value="",setTimeout(()=>{e.value=t,updateDataBaseSavedDataNames()},500),refresh_import_saved_packages_data_input_value_icon.style.backgroundColor="rgb(0, 255, 0)",setTimeout(()=>{refresh_import_saved_packages_data_input_value_icon.style.backgroundColor="rgb(255, 174, 0)"},500)};let mostTopEmptyCellRowNumberValue;async function submitForm(){let e=document.getElementById("save-package-unique-code"),t=document.getElementById("website_users_name_input_id").value;if(t)try{await fetch(e.action,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,action:"insert"}),mode:"no-cors"})}catch(a){}}async function fetchData(){try{let e=await (await fetch("https://script.google.com/macros/s/AKfycbzzOPqv4b5wrZ3tVrk26fr3OeofPi1Y0CRi4TYu8YQwNm52du6P6xMnBt9azLPqu2vY/exec")).json();processSheetData(e)}catch(t){}}function processSheetData(e){let t=document.getElementById("website_users_name_input_id").value;if(!t)return;let a=getColumnIndex(t);if(-1===a){alert("Invalid package name.");return}let n=e.values,l=-1;for(let o=1;o<n.length;o++)if(""===n[o][a]){l=o;break}-1===l&&(l=n.length),mostTopEmptyCellRowNumberValue=l;let i=document.getElementById("clint_inputs_submit_icon");i.style.opacity="1",i.style.pointerEvents="auto",i.disabled=!1}function getColumnIndex(e){switch(e){case"بكج مستر سامي":return 0;case"بكج عبد الله":return 1;case"بكج معتز":return 2;case"بكج وائل":return 3;case"بكج عبد الرحمن":return 4;case"بكج علي":return 5;case"بكج مستر ابو سما":return 6;case"بكج بندر للتجربة":return 7;default:return -1}}reActiveDragAndDropFunctionality=function(e){if("downloaded_pdf_clint_data_page"===e)document.getElementById("package_clint_name_input_id").value=document.getElementById("store_google_sheet_clint_name_value").innerText,document.getElementById("package_clint_code_number_input_id").value="",document.getElementById("store_google_sheet_package_clint_code_number_value")&&(document.getElementById("package_clint_code_number_input_id").value=document.getElementById("store_google_sheet_package_clint_code_number_value").innerText),document.getElementById("adult_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_adult_amount_value").innerText,document.getElementById("kids_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_kids_amount_value").innerText,document.getElementById("store_google_sheet_package_infant_amount_value")&&(document.getElementById("infant_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_infant_amount_value").innerText),document.getElementById("infant_package_person_amount_input_id").value="",document.getElementById("whole_package_start_date_input_id").value=document.getElementById("store_google_sheet_whole_package_first_date_value").innerText,document.getElementById("whole_package_end_date_input_id").value=document.getElementById("store_google_sheet_whole_package_last_date_value").innerText,document.getElementById("package_total_nights_input_id").value=document.getElementById("store_google_sheet_whole_package_total_nights_value").innerText,storePackageTotalNights=document.getElementById("store_google_sheet_whole_package_total_nights_value").innerText,document.getElementById("clint_company_name_input_id").value=document.getElementById("store_google_sheet_clint_company_name_value").innerText,document.getElementById("store_google_sheet_package_user_name_value")?document.getElementById("website_users_name_input_id").value=document.getElementById("store_google_sheet_package_user_name_value").innerText:document.getElementById("website_users_name_input_id").value="عبد الرحمن","بكج شهل عسل"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!0,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1):"بكج شباب"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!0,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1):"بكج عائلة"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!0,document.getElementById("two_people_checkbox").checked=!1):"بكج شخصين"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!0):(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1),document.getElementById("inserted_company_name_logo_id")&&(document.getElementById("inserted_company_name_logo_id").onclick=function(e){e.preventDefault(),e.stopPropagation();let t=document.createElement("div");t.className="black_overlay",t.id="black_overlay_id",document.body.appendChild(t),setTimeout(()=>{t.style.opacity="1"},100);let a=document.getElementById("ensure_delete_company_logo_div");setTimeout(()=>{a.style.transform="translate(-50%, -50%)"},50),t.onclick=()=>{a.style.transform="translate(-50%, -100vh)",t.style.opacity="0",setTimeout(()=>{document.body.removeChild(t)},300)}});else if("downloaded_pdf_flight_data_page"===e)document.querySelectorAll(".flight_row_class").forEach(e=>{e.querySelectorAll(".flight_row_flight_arrival_time_controller").forEach(function(e){e.onclick=function(t){flightRowAirLineControllerFunction(t,e)}})}),document.getElementById("manually_add_flight_row_icon").style.display="none",insertedFlightDataDivUniqueId=document.getElementById("store_google_sheet_flight_uniuqe_id_name_value").innerText;else if("downloaded_pdf_hotel_data_page"===e){let t=document.querySelectorAll(".hotel_row_class");document.getElementById("hotel_check_in_input_id").value=document.getElementById("store_google_sheet_hotel_last_stopped_check_out_date_value").innerText,document.getElementById("hotel_check_in_input_id").disabled=!0,t.forEach(e=>{e.querySelectorAll(".hotel_row_image_controller").forEach(e=>{handleClickEvent(e)})}),createHotelDragAndDropMood(),saveOriginalHotelDates()}else if("downloaded_pdf_clint_movements_data_page"===e){let a=document.querySelectorAll(".clint_movements_row_class_for_editing");document.getElementById("show_and_hide_clint_movement_section_icon").style.display="inline",filterUsedClintVisitingPlacesNames(),a.forEach(e=>{e.querySelectorAll(".clint_movements_row_controller").forEach(function(e){e.onclick=function(t){clintMovementsRowCityNameControllerFunction(t,e)}})}),createHotelDragAndDropMood(),saveOriginalHotelDates()}else"downloaded_pdf_package_including_data_page"===e&&(document.getElementById("sms_card_with_internet_amount_input_id").value=document.getElementById("store_google_sheet_package_including_sms_value").innerText,document.getElementById("inner_flight_tickets_amount_input_id").value=document.getElementById("store_google_sheet_package_including_inner_tickets_value").innerText,document.getElementById("package_details_textarea_id").value=document.getElementById("store_google_sheet_package_details_textarea_value").innerText.replace(/\\n/g,"\n"),document.getElementById("package_totla_price_input_id").value=document.getElementById("store_google_sheet_package_total_price_value").innerText,document.getElementById("store_google_sheet_show_price_in_pdf_checked_or_no")&&("showPrice"==document.getElementById("store_google_sheet_show_price_in_pdf_checked_or_no").innerHTML?document.getElementById("show_package_total_price_checkbox").checked=!0:"hidePrice"==document.getElementById("store_google_sheet_show_price_in_pdf_checked_or_no").innerHTML&&(document.getElementById("show_package_total_price_checkbox").checked=!1)),document.getElementById("store_google_sheet_package_specific_car_type_value")&&(document.getElementById("specific_car_type_input_id").value=document.getElementById("store_google_sheet_package_specific_car_type_value").innerText))};
