let existingDataStatus="newData",websiteUserUniqueNumber="newUniqueNumber",allGoogleSheetScriptURL="https://script.google.com/macros/s/AKfycbyRAqaTdo-wbSjUz-Frp16H2hAOowpnWkhweuLPUuMctjdczioftAca3UtcIcDnsNaASQ/exec",form=document.forms["save-package"];function submitFormAndSaveData(){event.preventDefault(),playSoundEffect("success");let e={name:document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText,content:{},status:existingDataStatus};["downloaded_pdf_clint_data_page","downloaded_pdf_package_including_data_page","downloaded_pdf_flight_data_page","downloaded_pdf_hotel_data_page","downloaded_pdf_clint_movements_data_page","downloaded_pdf_total_price_data_page"].forEach(t=>{let a=document.getElementById(t);a&&"none"!==a.style.display&&a.offsetWidth>0&&a.offsetHeight>0&&(e.content[t]=cleanHTML(a.innerHTML))}),fetch(allGoogleSheetScriptURL,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},mode:"no-cors"}).then(()=>{updateDataBaseSavedDataNames(),existingDataStatus="existingData",document.getElementById("website_users_name_input_id").disabled=!0,websiteUserUniqueNumber="existingUniqueNumber",document.getElementById("use_website_user_code_name_as_downloaded_pdf_file_name_p_id").style.pointerEvents="auto",document.getElementById("check_pdf_name_button").style.pointerEvents="auto"})}function cleanHTML(e){return(e=e.replace(/<!--[\s\S]*?-->/g,"")).replace(/\s+/g," ").trim()}let allPackagesGoogleSheetURL="https://script.google.com/macros/s/AKfycbyRAqaTdo-wbSjUz-Frp16H2hAOowpnWkhweuLPUuMctjdczioftAca3UtcIcDnsNaASQ/exec",sheetData=[],totalRivPackageNumberForUpdatingNewRivPackage=null,googleSheet_ss_PackageNames=[],googleSheet_mm_PackageNames=[],googleSheet_oo_PackageNames=[],googleSheet_tt_PackageNames=[],googleSheet_aa_PackageNames=[],googleSheet_ww_PackageNames=[],googleSheet_yy_PackageNames=[],googleSheet_bb_PackageNames=[];function updateDataBaseSavedDataNames(){document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div").innerHTML="",clearPackageNameArrays(),fetch(`${allPackagesGoogleSheetURL}?fetchType=1`).then(e=>e.json()).then(e=>{secondTimefetchSheetData(),sheetData.push(...e.values),filterAndStorePackageNames(sheetData),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality(),document.getElementById("reset_all_google_sheet_packages_and_show_website_user_packages_icon_id").style.opacity="1",document.getElementById("reset_all_google_sheet_packages_and_show_website_user_packages_icon_id").style.pointerEvents="auto"}).catch(e=>console.error(e))}function secondTimefetchSheetData(){fetch(`${allPackagesGoogleSheetURL}?fetchType=2`).then(e=>e.json()).then(e=>{thirdTimefetchSheetData(),sheetData.push(...e.values),filterAndStorePackageNames(sheetData),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality()}).catch(e=>console.error(e))}function thirdTimefetchSheetData(){fetch(`${allPackagesGoogleSheetURL}?fetchType=3`).then(e=>e.json()).then(e=>{fourthTimefetchSheetData(),sheetData.push(...e.values),filterAndStorePackageNames(sheetData),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality()}).catch(e=>console.error(e))}function fourthTimefetchSheetData(){fetch(`${allPackagesGoogleSheetURL}?fetchType=4`).then(e=>e.json()).then(e=>{fifthTimefetchSheetData(),sheetData.push(...e.values),filterAndStorePackageNames(sheetData),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality()}).catch(e=>console.error(e))}function fifthTimefetchSheetData(){fetch(`${allPackagesGoogleSheetURL}?fetchType=5`).then(e=>e.json()).then(e=>{sheetData.push(...e.values),filterAndStorePackageNames(sheetData),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality(),document.getElementById("all_google_sheet_packages_have_been_uploaded_p_id").style.opacity="1",document.getElementById("all_google_sheet_packages_have_been_uploaded_p_id").style.pointerEvents="auto"}).catch(e=>console.error(e))}function clearPackageNameArrays(){[googleSheet_ss_PackageNames,googleSheet_mm_PackageNames,googleSheet_oo_PackageNames,googleSheet_tt_PackageNames,googleSheet_aa_PackageNames,googleSheet_ww_PackageNames,googleSheet_yy_PackageNames,googleSheet_bb_PackageNames].forEach(e=>e.length=0)}function filterAndStorePackageNames(e){let t=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div");t.innerHTML="",e.forEach(e=>{let a=createH3Element(e[0]),o=e[0];o.startsWith("ss")?googleSheet_ss_PackageNames.push(a):o.startsWith("mm")?googleSheet_mm_PackageNames.push(a):o.startsWith("oo")?googleSheet_oo_PackageNames.push(a):o.startsWith("tt")?googleSheet_tt_PackageNames.push(a):o.startsWith("aa")?googleSheet_aa_PackageNames.push(a):o.startsWith("ww")?googleSheet_ww_PackageNames.push(a):o.startsWith("yy")?(googleSheet_,googleSheet_yy_PackageNames.push(a)):o.startsWith("bb")&&googleSheet_bb_PackageNames.push(a),t.prepend(a)})}function hideAllH3Elements(){let e=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div").getElementsByTagName("h3");for(let t=0;t<e.length;t++)e[t].style.display="none"}let packageArrayMap={"بكج مستر سامي":googleSheet_ss_PackageNames,"بكج عبد الله":googleSheet_tt_PackageNames,"بكج معتز":googleSheet_mm_PackageNames,"بكج وائل":googleSheet_ww_PackageNames,"بكج عبد الرحمن":googleSheet_oo_PackageNames,"بكج علي":googleSheet_aa_PackageNames,"بكج مستر ابو سما":googleSheet_yy_PackageNames,"بكج بندر للتجربة":googleSheet_bb_PackageNames};function createH3Element(e){let t=document.createElement("h3");return t.innerText=e,"Name"===t.innerText?(t.style.display="none",t.style.pointerEvents="none"):(t.onclick=function(){pickThisGoogleSheetDataName(this)},t.innerText.startsWith("ss")?googleSheet_ss_PackageNames.push(t):t.innerText.startsWith("mm")?googleSheet_mm_PackageNames.push(t):t.innerText.startsWith("oo")?googleSheet_oo_PackageNames.push(t):t.innerText.startsWith("tt")?googleSheet_tt_PackageNames.push(t):t.innerText.startsWith("aa")?googleSheet_aa_PackageNames.push(t):t.innerText.startsWith("ww")?googleSheet_ww_PackageNames.push(t):t.innerText.startsWith("yy")?googleSheet_yy_PackageNames.push(t):t.innerText.startsWith("bb")&&googleSheet_bb_PackageNames.push(t)),t}function enablePointerEventsForFilters(){let e=document.getElementById("website_users_name_input_id").value,t=document.getElementsByClassName("filter_google_sheet_packages_names_p_class");for(let a=0;a<t.length;a++)t[a].style.pointerEvents="auto",t[a].style.opacity="1",t[a].style.backgroundColor="rgb(255, 174, 0)";let o=document.getElementsByClassName("filter_google_sheet_packages_names_p_class");switch(e){case"بكج مستر سامي":o[0]&&(o[0].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_ss_PackageNames;break;case"بكج عبد الله":o[1]&&(o[1].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_tt_PackageNames;break;case"بكج معتز":o[2]&&(o[2].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_mm_PackageNames;break;case"بكج وائل":o[3]&&(o[3].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_ww_PackageNames;break;case"بكج عبد الرحمن":o[4]&&(o[4].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_oo_PackageNames;break;case"بكج علي":o[5]&&(o[5].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_aa_PackageNames;break;case"بكج مستر ابو سما":o[6]&&(o[6].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_yy_PackageNames;break;case"بكج بندر للتجربة":targetArray=googleSheet_bb_PackageNames;break;default:targetArray=[]}for(let l=0;l<targetArray.length;l++)targetArray[l].style.display="block"}function updateSearchFilterFunctionality(){""!==document.getElementById("import_google_sheet_data_names_search_bar_input_id").value&&document.querySelectorAll(".search_bar_input_class").forEach(e=>{let t=e.closest(".searchable_names_dropdown_class");t.style.transition="height 0.1s ease-in-out",t.style.maxHeight="70vh",t.style.minHeight="70vh";let a=e.value.trim().toLowerCase(),o=a.split(/\s+/),l=t.querySelectorAll("h3"),n=0;l.forEach(e=>{let t=e.textContent.trim().toLowerCase(),l=o.every(e=>t.includes(e));""===a&&n<6?(e.style.display="block",n++):e.style.display=l?"block":"none"})})}function findSelectedNameAndImportContent(){let e=null;document.querySelectorAll("#all_google_sheet_stored_data_names_for_importing_data_div h3").forEach(function(t){"rgb(0, 155, 0)"===t.style.backgroundColor&&(e=t.innerText)}),e?(playSoundEffect("success"),importContentForSelectedName(e)):(playSoundEffect("error"),import_google_sheet_data_p_id.style.backgroundColor="red",setTimeout(()=>{import_google_sheet_data_p_id.style.backgroundColor="rgb(255, 174, 0)"},500))}function importContentForSelectedName(e){let t=sheetData.find(t=>t[0]===e);if(document.getElementById("downloaded_pdf_clint_data_page").style.display="none",document.getElementById("downloaded_pdf_package_including_data_page").style.display="none",document.getElementById("downloaded_pdf_flight_data_page").style.display="none",document.getElementById("downloaded_pdf_hotel_data_page").style.display="none",document.getElementById("downloaded_pdf_clint_movements_data_page").style.display="none",document.getElementById("downloaded_pdf_total_price_data_page").style.display="none",t){let a={downloaded_pdf_clint_data_page:t[1],downloaded_pdf_package_including_data_page:t[2],downloaded_pdf_flight_data_page:t[3],downloaded_pdf_hotel_data_page:t[4],downloaded_pdf_clint_movements_data_page:t[5],downloaded_pdf_total_price_data_page:t[6]};try{let o=new DOMParser;for(let l in a){let n=a[l];if(n){let g=formatHtmlForWebsite(n),c=o.parseFromString(g,"text/html").body.innerHTML,s=document.getElementById(l);s&&(s.style.display="block",s.innerHTML="",s.innerHTML=c,reActiveDragAndDropFunctionality(s.id))}}document.getElementById("website_users_name_input_id").disabled=!0;document.querySelectorAll(".inserted_package_data_section_page_image_class").forEach(e=>{e.style.display="none"});document.querySelectorAll(".inserted_package_data_section_page_image_class_2").forEach(e=>{e.style.display="none"}),document.getElementById("inserted_company_name_image_position_div").style.display="flex"}catch(r){}}if(hideOverlay(),document.getElementById("store_google_sheet_package_raw_user_with_no_riv_for_later_reference_when_importing")){let i=document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText.split("_riv_")[0];totalRivPackageNumberForUpdatingNewRivPackage=sheetData.filter(e=>e[0].split("_riv_")[0]===i).length,document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText=`${document.getElementById("store_google_sheet_package_raw_user_with_no_riv_for_later_reference_when_importing").innerText}_riv_${totalRivPackageNumberForUpdatingNewRivPackage}`,existingDataStatus="newData",websiteUserUniqueNumber="existingUniqueNumber"}else existingDataStatus="existingData",websiteUserUniqueNumber="existingUniqueNumber";updateAllowedDates()}function formatHtmlForWebsite(e){return e.replace(/\s+/g," ").trim()}function pickThisGoogleSheetDataName(e){"rgb(0, 155, 0)"===e.style.backgroundColor?findSelectedNameAndImportContent():(document.querySelectorAll("#all_google_sheet_stored_data_names_for_importing_data_div h3").forEach(function(e){e.style.backgroundColor="white",e.style.color="black"}),e.style.backgroundColor="rgb(0, 155, 0)",e.style.color="white")}resetPackageNamesFilterInputValue=function(){document.getElementById("import_google_sheet_data_names_search_bar_input_id").value="";let e=document.getElementById("website_users_name_input_id").value,t;switch(e){case"بكج مستر سامي":t=googleSheet_ss_PackageNames;break;case"بكج معتز":t=googleSheet_mm_PackageNames;break;case"بكج عبد الرحمن":t=googleSheet_oo_PackageNames;break;case"بكج عبد الله":t=googleSheet_tt_PackageNames;break;case"بكج علي":t=googleSheet_aa_PackageNames;break;case"بكج وائل":t=googleSheet_ww_PackageNames;break;case"بكج مستر سامي":t=googleSheet_yy_PackageNames;break;case"بكج بندر للتجربة":t=googleSheet_bb_PackageNames;break;default:t=[]}for(let a=0;a<t.length;a++)t[a].style.display="block"},fliterGoogleSheetPackagesNames=function(e,t){let a=document.getElementsByClassName("filter_google_sheet_packages_names_p_class");for(let o=0;o<a.length;o++)a[o].style.backgroundColor="rgb(255, 174, 0)";e.style.backgroundColor="rgb(140, 0, 255)";let l=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div").getElementsByTagName("h3");for(let n=0;n<l.length;n++)l[n].style.display="none";let g;switch(t){case"googleSheet_ss_PackageNames":g=googleSheet_ss_PackageNames;break;case"googleSheet_mm_PackageNames":g=googleSheet_mm_PackageNames;break;case"googleSheet_oo_PackageNames":g=googleSheet_oo_PackageNames;break;case"googleSheet_tt_PackageNames":g=googleSheet_tt_PackageNames;break;case"googleSheet_aa_PackageNames":g=googleSheet_aa_PackageNames;break;case"googleSheet_ww_PackageNames":g=googleSheet_ww_PackageNames;break;case"googleSheet_yy_PackageNames":g=googleSheet_yy_PackageNames;break;default:g=[]}for(let c=0;c<g.length;c++)g[c].style.display="block";updateSearchFilterFunctionality()},showWebsiteUsernamePackageNames=function(){let e=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div"),t=document.getElementById("website_users_name_input_id").value,a=document.getElementsByClassName("filter_google_sheet_packages_names_p_class");for(let o=0;o<a.length;o++)a[o].style.backgroundColor="";let l=[];switch(t){case"بكج مستر سامي":a[0]&&(a[0].style.backgroundColor="rgb(140, 0, 255)"),l=googleSheet_ss_PackageNames;break;case"بكج عبد الله":a[3]&&(a[1].style.backgroundColor="rgb(140, 0, 255)"),l=googleSheet_tt_PackageNames;break;case"بكج معتز":a[1]&&(a[2].style.backgroundColor="rgb(140, 0, 255)"),l=googleSheet_mm_PackageNames;break;case"بكج وائل":a[5]&&(a[3].style.backgroundColor="rgb(140, 0, 255)"),l=googleSheet_ww_PackageNames;break;case"بكج عبد الرحمن":a[0]&&(a[4].style.backgroundColor="rgb(140, 0, 255)"),l=googleSheet_oo_PackageNames;break;case"بكج علي":a[2]&&(a[5].style.backgroundColor="rgb(140, 0, 255)"),l=googleSheet_aa_PackageNames;break;case"بكج مستر ابو سما":a[6]&&(a[6].style.backgroundColor="rgb(140, 0, 255)"),l=googleSheet_yy_PackageNames;break;case"بكج بندر للتجربة":l=googleSheet_bb_PackageNames;break;default:l=[]}let n=e.getElementsByTagName("h3");for(let g=0;g<n.length;g++)n[g].style.display="none";for(let c=0;c<l.length;c++)l[c].style.display="block"};let mostTopEmptyCellRowNumberValue;async function submitForm(){let e=document.getElementById("save-package-unique-code"),t=document.getElementById("website_users_name_input_id").value;if(t)try{await fetch(e.action,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,action:"insert"}),mode:"no-cors"})}catch(a){}}async function fetchData(){try{let e=await (await fetch("https://script.google.com/macros/s/AKfycbzzOPqv4b5wrZ3tVrk26fr3OeofPi1Y0CRi4TYu8YQwNm52du6P6xMnBt9azLPqu2vY/exec")).json();processSheetData(e)}catch(t){}}function processSheetData(e){let t=document.getElementById("website_users_name_input_id").value;if(!t)return;let a=getColumnIndex(t);if(-1===a){alert("Invalid package name.");return}let o=e.values,l=-1;for(let n=1;n<o.length;n++)if(""===o[n][a]){l=n;break}-1===l&&(l=o.length),mostTopEmptyCellRowNumberValue=l;let g=document.getElementById("clint_inputs_submit_icon");g.style.opacity="1",g.style.pointerEvents="auto",g.disabled=!1}function getColumnIndex(e){switch(e){case"بكج مستر سامي":return 0;case"بكج عبد الله":return 1;case"بكج معتز":return 2;case"بكج وائل":return 3;case"بكج عبد الرحمن":return 4;case"بكج علي":return 5;case"بكج مستر ابو سما":return 6;case"بكج بندر للتجربة":return 7;default:return -1}}reActiveDragAndDropFunctionality=function(e){if("downloaded_pdf_clint_data_page"===e)document.getElementById("package_clint_name_input_id").value=document.getElementById("store_google_sheet_clint_name_value").innerText,document.getElementById("package_clint_code_number_input_id").value="",document.getElementById("store_google_sheet_package_clint_code_number_value")&&(document.getElementById("package_clint_code_number_input_id").value=document.getElementById("store_google_sheet_package_clint_code_number_value").innerText),document.getElementById("adult_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_adult_amount_value").innerText,document.getElementById("kids_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_kids_amount_value").innerText,document.getElementById("infant_package_person_amount_input_id").value="",document.getElementById("store_google_sheet_package_infant_amount_value")&&(document.getElementById("infant_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_infant_amount_value").innerText),document.getElementById("whole_package_start_date_input_id").value=document.getElementById("store_google_sheet_whole_package_first_date_value").innerText,document.getElementById("whole_package_end_date_input_id").value=document.getElementById("store_google_sheet_whole_package_last_date_value").innerText,document.getElementById("package_total_nights_input_id").value=`${document.getElementById("store_google_sheet_whole_package_total_nights_value").innerText} ليالي`,storePackageTotalNights=document.getElementById("store_google_sheet_whole_package_total_nights_value").innerText,document.getElementById("clint_company_name_input_id").value=document.getElementById("store_google_sheet_clint_company_name_value").innerText,document.getElementById("store_google_sheet_package_user_name_value")?document.getElementById("website_users_name_input_id").value=document.getElementById("store_google_sheet_package_user_name_value").innerText:document.getElementById("website_users_name_input_id").value="عبد الرحمن","بكج شهل عسل"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!0,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!1):"بكج شباب"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!0,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!1):"بكج عائلة"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!0,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!1):"بكج شخصين"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!0,document.getElementById("group_of_people_checkbox").checked=!1):"بكج قروب"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!0):(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!1),document.getElementById("inserted_company_name_logo_id")&&(document.getElementById("inserted_company_name_logo_id").onclick=function(e){e.preventDefault(),e.stopPropagation();let t=document.createElement("div");t.className="black_overlay",t.id="black_overlay_id",document.body.appendChild(t),setTimeout(()=>{t.style.opacity="1"},100);let a=document.getElementById("ensure_delete_company_logo_div");setTimeout(()=>{a.style.transform="translate(-50%, -50%)"},50),t.onclick=()=>{a.style.transform="translate(-50%, -100vh)",t.style.opacity="0",setTimeout(()=>{document.body.removeChild(t)},300)}}),document.getElementById("store_google_sheet_all_package_dates_hidden_or_no")&&("hide all package dates"===document.getElementById("store_google_sheet_all_package_dates_hidden_or_no").innerText?(document.getElementById("hide_all_package_dates_icon").style.backgroundColor="rgb(0, 255, 0)",document.getElementById("hide_all_package_dates_icon").style.color="black"):(document.getElementById("hide_all_package_dates_icon").style.backgroundColor="rgb(0, 87, 116)",document.getElementById("hide_all_package_dates_icon").style.color="white"));else if("downloaded_pdf_flight_data_page"===e)document.querySelectorAll(".flight_row_class").forEach(e=>{e.querySelectorAll(".flight_row_flight_arrival_time_controller").forEach(function(e){e.onclick=function(t){flightRowAirLineControllerFunction(t,e)}})}),document.getElementById("manually_add_flight_row_icon").style.display="none",insertedFlightDataDivUniqueId=document.getElementById("store_google_sheet_flight_uniuqe_id_name_value").innerText;else if("downloaded_pdf_hotel_data_page"===e){let t=document.querySelectorAll(".hotel_row_class");document.getElementById("hotel_check_in_input_id").value=document.getElementById("store_google_sheet_hotel_last_stopped_check_out_date_value").innerText,document.getElementById("hotel_check_in_input_id").disabled=!0,t.forEach(e=>{e.querySelectorAll(".hotel_row_image_controller").forEach(e=>{handleClickEvent(e)})}),createHotelDragAndDropMood(),saveOriginalHotelDates()}else if("downloaded_pdf_clint_movements_data_page"===e){let a=document.querySelectorAll(".clint_movements_row_class_for_editing");filterUsedClintVisitingPlacesNames(),a.forEach(e=>{e.querySelectorAll(".clint_movements_row_controller").forEach(function(e){e.onclick=function(t){clintMovementsRowCityNameControllerFunction(t,e)}})});document.querySelectorAll(".clint_movements_row_class_for_editing").forEach(e=>{e.querySelectorAll("div").forEach(e=>{e.style.backgroundColor="white",e.style.color="black"})}),highlightWeekendClintMovements()}else if("downloaded_pdf_package_including_data_page"===e&&(document.getElementById("sms_card_with_internet_amount_input_id").value=document.getElementById("store_google_sheet_package_including_sms_value").innerText,document.getElementById("inner_flight_tickets_amount_input_id").value=document.getElementById("store_google_sheet_package_including_inner_tickets_value").innerText,document.getElementById("package_details_textarea_id").value=document.getElementById("store_google_sheet_package_details_textarea_value").innerText.replace(/\\n/g,"\n"),document.getElementById("package_totla_price_input_id").value=document.getElementById("store_google_sheet_package_total_price_value").innerText,document.getElementById("store_google_sheet_show_price_in_pdf_checked_or_no")&&("showPrice"==document.getElementById("store_google_sheet_show_price_in_pdf_checked_or_no").innerHTML?document.getElementById("show_package_total_price_checkbox").checked=!0:"hidePrice"==document.getElementById("store_google_sheet_show_price_in_pdf_checked_or_no").innerHTML&&(document.getElementById("show_package_total_price_checkbox").checked=!1)),document.getElementById("store_google_sheet_package_specific_car_type_value")&&(document.getElementById("specific_car_type_input_id").value=document.getElementById("store_google_sheet_package_specific_car_type_value").innerText),document.getElementById("store_google_sheet_white_package_including_and_not_including_input_div"))){function o(e,t){let a=document.getElementById(e);a&&Array.from(a.getElementsByTagName("p")).forEach(e=>{let a=e.innerText,o=document.getElementById(a);o&&o.nextElementSibling.style.setProperty("--checkbox-color",t)})}["privet_car_with_driver_to_welcome_and_etc_checkbox","extra_car_for_carring_bags_checkbox","hotel_booking_with_breakfast_for_2_people_checkbox","welcome_goodbye_hotel_delivery_checkbox","customer_service_24_hour_checkbox","sms_card_with_internet_checkbox","inner_flight_tickets_checkbox","outer_flight_tickets_checkbox","placese_visiting_cost_checkbox","bali_taxes_not_covered_checkbox"].forEach(e=>{let t=document.getElementById(e);if(t){t.checked=!1;t.nextElementSibling.style.setProperty("--checkbox-color","rgb(255, 255, 255)")}}),o("store_google_sheet_green_checked_package_including_and_not_including_input_div","rgb(0, 255, 0)"),o("store_google_sheet_red_checked_package_including_and_not_including_input_div","rgb(255, 0, 0)"),o("store_google_sheet_white_package_including_and_not_including_input_div","rgb(255, 255, 255)")}};
