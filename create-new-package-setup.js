function toggleLinks(e){var t=document.getElementById(e),n=document.getElementById("package_types_dropdown_icon_id");t.style.maxHeight?(t.style.maxHeight=null,n.classList.remove("rotate")):(t.style.maxHeight=t.scrollHeight+"px",n.classList.add("rotate"))}window.history&&window.history.pushState&&(window.history.pushState(null,null,window.location.href),window.onpopstate=function(e){window.history.pushState(null,null,window.location.href),alert("يالحبيب هدي شوية وانتبه")}),setTimeout(function(){document.getElementById("body").style.opacity="1"},100),showPackageTypeSection=function(e,t){new Audio("click.mp3").play(),window.scrollTo(0,0),"clint"===e?(create_new_clint_data_section.style.display="block",create_new_hotel_package_section.style.display="none",create_new_flight_package_section.style.display="none",create_new_package_including_and_not_including_data_section.style.display="none",create_new_clint_movements_plan_section.style.display="none"):"hotel"===e?(create_new_clint_data_section.style.display="none",create_new_hotel_package_section.style.display="flex",create_new_flight_package_section.style.display="none",create_new_package_including_and_not_including_data_section.style.display="none",create_new_clint_movements_plan_section.style.display="none"):"flight"===e?(create_new_clint_data_section.style.display="none",create_new_hotel_package_section.style.display="none",create_new_flight_package_section.style.display="flex",create_new_package_including_and_not_including_data_section.style.display="none",create_new_clint_movements_plan_section.style.display="none"):"package_including"===e?(create_new_clint_data_section.style.display="none",create_new_hotel_package_section.style.display="none",create_new_flight_package_section.style.display="none",create_new_package_including_and_not_including_data_section.style.display="block",create_new_clint_movements_plan_section.style.display="none"):"transportation"===e&&(create_new_clint_data_section.style.display="none",create_new_hotel_package_section.style.display="none",create_new_flight_package_section.style.display="none",create_new_package_including_and_not_including_data_section.style.display="none",create_new_clint_movements_plan_section.style.display="block"),document.querySelectorAll(".header_navbar_links a").forEach(function(e){e.style.backgroundColor=e===t?"rgb(0, 46, 57)":"rgb(85, 127, 137)"})};let adultPackagePersonAmountInput=document.getElementById("adult_package_person_amount_input_id"),adultPackagePersonAmountInputOptions=document.querySelectorAll("#adult_whole_package_people_amount_dropdown h3");adultPackagePersonAmountInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),adultPackagePersonAmountInput.value=e.textContent,document.getElementById("store_google_sheet_package_adult_amount_value").innerText=e.textContent,hideOverlay()})});let companyNamesInput=document.getElementById("clint_company_name_input_id"),companyNamesInputOptions=document.querySelectorAll("#company_names_dropdown h3");companyNamesInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),"حذف"===e.textContent?(companyNamesInput.value="",document.getElementById("store_google_sheet_clint_company_name_value").innerText=""):(companyNamesInput.value=e.textContent,document.getElementById("store_google_sheet_clint_company_name_value").innerText=e.textContent),document.getElementById("company_names_search_bar_input_id").value="";document.getElementById("company_names_search_bar_input_id").closest(".searchable_names_dropdown_class").querySelectorAll("h3").forEach(e=>{e.style.display="block"}),hideOverlay()})});let clintPackageTypeDiv=document.querySelectorAll('#clint_package_type_div input[type="checkbox"]');clintPackageTypeDiv.forEach(e=>{e.addEventListener("change",()=>{new Audio("click.mp3").play(),e.checked&&clintPackageTypeDiv.forEach(t=>{t!==e&&(t.checked=!1)})})}),window.addEventListener("load",()=>{let e=localStorage.getItem("user_name_code");e&&(document.getElementById("website_users_name_input_id").value=e),""!==document.getElementById("website_users_name_input_id").value&&fetchData(),updateDataBaseSavedDataNames()});let websiteUsersNameInput=document.getElementById("website_users_name_input_id"),previousValue=websiteUsersNameInput.value,websiteUsersNameInputOptions=document.querySelectorAll("#website_users_names_dropdown h3");websiteUsersNameInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play();let t;if(t="سامي"===e.textContent||"ابو سما"===e.textContent?`بكج مستر ${e.textContent}`:`بكج ${e.textContent}`,websiteUsersNameInput.value!==t){websiteUsersNameInput.value=t,fetchData();let n=document.getElementById("clint_inputs_submit_icon");n.style.opacity="0",n.style.pointerEvents="none",n.disabled=!0,localStorage.setItem("user_name_code",websiteUsersNameInput.value),previousValue=t}hideOverlay()})});let colors=["rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(0, 255, 0)"],initialColors={privet_car_with_driver_to_welcome_and_etc_checkbox:"rgb(0, 255, 0)",hotel_booking_with_breakfast_for_2_people_checkbox:"rgb(0, 255, 0)",welcome_goodbye_hotel_delivery_checkbox:"rgb(0, 255, 0)",customer_service_24_hour_checkbox:"rgb(0, 255, 0)",sms_card_with_internet_checkbox:"rgb(0, 255, 0)",inner_flight_tickets_checkbox:"rgb(0, 255, 0)",outer_flight_tickets_checkbox:"rgb(255, 0, 0)",placese_visiting_cost_checkbox:"rgb(255, 0, 0)",bali_taxes_not_covered_checkbox:"rgb(255, 0, 0)"};function cycleColor(e){let t=e.target.nextElementSibling,n=window.getComputedStyle(t,"::before").backgroundColor,l=colors[(colors.indexOf(n)+1)%colors.length];t.style.setProperty("--checkbox-color",l)}document.querySelectorAll('#package_including_details_div input[type="checkbox"]').forEach(e=>{let t=e.nextElementSibling,n=initialColors[e.id]||"rgb(255, 255, 255)";t.style.setProperty("--checkbox-color",n),e.addEventListener("click",cycleColor)});let lastClickedSpecialRoomRequestInput=null;document.getElementById("hotel_special_room_request_input_id").addEventListener("click",function(){lastClickedSpecialRoomRequestInput=this}),document.getElementById("hotel_special_room_request_input_id_2").addEventListener("click",function(){lastClickedSpecialRoomRequestInput=this});let specialRoomRequestInputOptions=document.querySelectorAll("#special_room_request_dropdown h3");specialRoomRequestInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),lastClickedSpecialRoomRequestInput&&("حذف"===e.textContent?lastClickedSpecialRoomRequestInput.value="":"باقة شهر عسل"===e.textContent?lastClickedSpecialRoomRequestInput.value="+ باقة شهر عسل بعشاء رومانسي على ضوء الشموع + عصير + زينة لمرة واحدة + علاج سبا لمدة 60 دقيقة + إفطار عائم لمرة واحدة بالإضافة لسلة فواكة + شاي بعد الظهر":lastClickedSpecialRoomRequestInput.value=`+ ${e.textContent}`),hideOverlay()})});let hotelNameInput=document.getElementById("hotel_name_input_id"),hotelNameInputOptions=document.querySelectorAll("#all_hotel_names_dropdown h3");hotelNameInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),currentHotelName=hotelNameInput.value,hotelNameInput.value=e.textContent,hideOverlay(),document.getElementById("all_hotel_names_search_bar_input_id").value="";document.getElementById("all_hotel_names_search_bar_input_id").closest(".searchable_names_dropdown_class").querySelectorAll("h3").forEach(e=>{e.style.display="block"}),e.textContent!==currentHotelName&&(document.getElementById("hotel_room_type_description_input_id").value="",document.getElementById("hotel_room_type_description_input_id_2").value="")})});let lastClickedPoolInput=null;document.getElementById("hotel_room_contain_pool_input_id").addEventListener("click",function(){lastClickedPoolInput=this}),document.getElementById("hotel_room_contain_pool_input_id_2").addEventListener("click",function(){lastClickedPoolInput=this});let hotelRoomContainPoolInputOptions=document.querySelectorAll("#hotel_room_contain_pool_dropdown h3");hotelRoomContainPoolInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),lastClickedPoolInput&&("حذف"===e.textContent?lastClickedPoolInput.value="":lastClickedPoolInput.value=`مع ${e.textContent}`),hideOverlay()})});let lastClickedViewInput=null;document.getElementById("hotel_room_view_input_id").addEventListener("click",function(){lastClickedViewInput=this}),document.getElementById("hotel_room_view_input_id_2").addEventListener("click",function(){lastClickedViewInput=this});let hotelRoomViewInputOptions=document.querySelectorAll("#hotel_room_view_dropdown h3");hotelRoomViewInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),lastClickedViewInput&&("حذف"===e.textContent?lastClickedViewInput.value="":lastClickedViewInput.value=`بإطلالة على ${e.textContent}`),hideOverlay()})});let lastClickedBreakFastAmountInput=null;document.getElementById("hotel_breakfast_people_amount_input_id").addEventListener("click",function(){lastClickedBreakFastAmountInput=this}),document.getElementById("hotel_breakfast_people_amount_input_id_2").addEventListener("click",function(){lastClickedBreakFastAmountInput=this});let hotelBreakFastAmountInputOptions=document.querySelectorAll("#breakfast_amount_dropdown h3");hotelBreakFastAmountInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),"حذف"===e.textContent?lastClickedBreakFastAmountInput.value="":"غير شامل"===e.textContent?lastClickedBreakFastAmountInput.value=`غير شامل الإفطار`:lastClickedBreakFastAmountInput.value=`شامل الإفطار ل${e.textContent}`,hideOverlay()})});let lastClickedUnitAmountInput=null;document.getElementById("hotel_unit_amount_input_id").addEventListener("click",function(){lastClickedUnitAmountInput=this}),document.getElementById("hotel_unit_amount_input_id_2").addEventListener("click",function(){lastClickedUnitAmountInput=this});let storeHotelTotalUnitNumber,storeHotelTotalUnitNumber_2,hotelUnitAmountInputOptions=document.querySelectorAll("#hotel_unit_amount_dropdown h3");hotelUnitAmountInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),lastClickedUnitAmountInput===document.getElementById("hotel_unit_amount_input_id")?storeHotelTotalUnitNumber=e.textContent:lastClickedUnitAmountInput===document.getElementById("hotel_unit_amount_input_id_2")&&(storeHotelTotalUnitNumber_2=e.textContent),lastClickedUnitAmountInput&&(lastClickedUnitAmountInput.value=`عدد الوحدات ${e.textContent}`),hideOverlay()})});let lastClickedInput=null;document.getElementById("hotel_room_type_description_input_id").addEventListener("click",function(){lastClickedInput=this}),document.getElementById("hotel_room_type_description_input_id_2").addEventListener("click",function(){lastClickedInput=this});let createRoomTypeDescripyionDropDown=function(){let e=document.getElementById("hotel_name_input_id").value,t=document.getElementById("hotel_room_type_description_h3_elements_div_id");if(""!==e){t.innerHTML="";let n=allHotelDataArray.find(t=>t.hotelName===e);n&&n.hotelRoomTypes.forEach(e=>{let n=document.createElement("h3");n.textContent=e,t.appendChild(n),n.addEventListener("click",()=>{new Audio("click.mp3").play(),lastClickedInput&&(lastClickedInput.value=n.textContent),document.getElementById("hotel_room_type_description_search_bar_input_id").value="";document.getElementById("hotel_room_type_description_search_bar_input_id").closest(".searchable_names_dropdown_class").querySelectorAll("h3").forEach(e=>{e.style.display="block"}),hideOverlay()})})}else t.innerHTML=""};showSecondHotelRoomData=function(){let e=document.querySelectorAll("#hotel_two_room_data_input_divs_container input, #hotel_two_room_data_input_divs_container textarea");"flex"===document.getElementById("hotel_second_room_data_input_div").style.display?(document.getElementById("hotel_second_room_data_input_div").style.display="none",e.forEach(e=>{e.style.width=e.dataset.originalWidth})):(document.getElementById("hotel_second_room_data_input_div").style.display="flex",e.forEach(e=>{e.dataset.originalWidth||(e.dataset.originalWidth=e.style.width),e.style.width="100%"}))};let overlayLayer=null;clearSearchableDropDownInputValue=function(e){document.documentElement.style.overflow="auto";let t=document.querySelector(".searchable_names_dropdown_class.show");t&&t.classList.remove("show");document.querySelectorAll(".searchable_names_dropdown_class").forEach(e=>{e.style.maxHeight="",e.style.minHeight="",e.style.transition=""}),overlayLayer&&(overlayLayer.style.opacity="0",setTimeout(()=>{overlayLayer&&(document.body.removeChild(overlayLayer),overlayLayer=null)},200));let n=document.getElementById(e);n.value="";n.closest(".searchable_names_dropdown_class").querySelectorAll("h3").forEach(e=>{e.style.display="block"})};let searchBarInputElements=document.querySelectorAll(".search_bar_input_class");searchBarInputElements.forEach(e=>{e.addEventListener("click",()=>{let t=e.closest(".searchable_names_dropdown_class");t.style.transition="height 0.1s ease-in-out",t.style.maxHeight="70vh",t.style.minHeight="70vh"}),e.addEventListener("input",()=>{let t=e.value.trim().toLowerCase(),n=e.closest(".searchable_names_dropdown_class").querySelectorAll("h3"),l=0;n.forEach(e=>{let n=e.textContent.trim().toLowerCase();""===t&&l<6?(e.style.display="block",l++):n.includes(t)?e.style.display="block":e.style.display="none"})})}),document.getElementById("hotel_breakfast_people_amount_input_id").addEventListener("click",()=>{lastClickedClintMovementsCityInput=document.getElementById("hotel_breakfast_people_amount_input_id")}),document.getElementById("sms_card_with_internet_amount_input_id").addEventListener("click",()=>{lastClickedClintMovementsCityInput=document.getElementById("sms_card_with_internet_amount_input_id")}),document.getElementById("inner_flight_tickets_amount_input_id").addEventListener("click",()=>{lastClickedClintMovementsCityInput=document.getElementById("inner_flight_tickets_amount_input_id")});let smsCardWithInternetAmountInputOptions=document.querySelectorAll("#breakfast_and_sms_card_and_ticket_amount_dropdown h3");smsCardWithInternetAmountInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),lastClickedClintMovementsCityInput&&("حذف"===e.innerText?lastClickedClintMovementsCityInput.value="":"sms_card_with_internet_amount_input_id"===lastClickedClintMovementsCityInput.id?"غير شامل"===e.textContent?lastClickedClintMovementsCityInput.value="":lastClickedClintMovementsCityInput.value=`شرائح إنترنت ل${e.textContent}`:"inner_flight_tickets_amount_input_id"===lastClickedClintMovementsCityInput.id?"غير شامل"===e.textContent?lastClickedClintMovementsCityInput.value="":lastClickedClintMovementsCityInput.value=`تذاكر الطيران الداخلي ل${e.textContent}`:"hotel_breakfast_people_amount_input_id"===lastClickedClintMovementsCityInput.id&&("غير شامل"===e.textContent?lastClickedClintMovementsCityInput.value="غير شامل الإفطار":lastClickedClintMovementsCityInput.value=`شامل الإفطار ل${e.textContent}`),hideOverlay())})});let flightAirLineInput=document.getElementById("flight_air_line_input_id"),flightAirLineInputOptions=document.querySelectorAll("#airport_line_name_dropdown h3");flightAirLineInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),"حذف"===e.textContent?flightAirLineInput.value="":flightAirLineInput.value=e.textContent,hideOverlay()})}),insertFlightDestinationCityInputValue=function(e){let t="airport_destination_name_dropdown",n=document.getElementById(t);lastClickedFlightDestinationInput=document.getElementById(e),"flight_from_city_input_id"===e?(lastClickedFlightDestinationInput=document.getElementById(event.target.id),showOverlay(t)):"flight_to_city_input_id"===e&&(lastClickedFlightDestinationInput=document.getElementById(event.target.id),showOverlay(t));n.querySelectorAll("h3").forEach(e=>{e.onclick=function(){new Audio("click.mp3").play(),lastClickedFlightDestinationInput.value=this.innerText,hideOverlay()}})};let flightAdultPersonAmountInput=document.getElementById("flight_adult_person_amount_input_id"),flightAdultPersonAmountInputOptions=document.querySelectorAll("#flight_adult_people_amount_dropdown h3");flightAdultPersonAmountInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),flightAdultPersonAmountInput.value=e.textContent,hideOverlay()})});let infantPackagePersonAmountInput=document.getElementById("infant_package_person_amount_input_id"),infantPackagePersonAmountInputOptions=document.querySelectorAll("#infat_whole_package_people_amount_dropdown h3");infantPackagePersonAmountInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),"حذف"===e.textContent?infantPackagePersonAmountInput.value="":infantPackagePersonAmountInput.value=e.textContent,hideOverlay()})});let flightInfantPersonAmountInput=document.getElementById("flight_infant_person_amount_input_id"),flightInfantPersonAmountInputOptions=document.querySelectorAll("#flight_infant_people_amount_dropdown h3");flightInfantPersonAmountInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),"حذف"===e.textContent?flightInfantPersonAmountInput.value="":flightInfantPersonAmountInput.value=e.textContent,hideOverlay()})});let flightExtraBagsInput=document.getElementById("flight_extra_bags_input_id"),flightExtraBagsInputOptions=document.querySelectorAll("#airport_extra_bags_name_dropdown h3");function parseDate(e){let t=e.split(" "),n=parseInt(t[0]),l=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"].indexOf(t[1]),i=new Date().getFullYear();return new Date(i,l,n)}function formatDate(e){let t;return`${e.getDate()} ${["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"][e.getMonth()]}`}function showOverlay(e){document.documentElement.style.overflow="hidden";let t=document.getElementById(e);lastClickedClintMovementsCityInput=document.getElementById(event.target.id),t.classList.add("show"),t.style.transition="transform 0.2s ease-in-out",(overlayLayer=document.createElement("div")).className="black_overlay",overlayLayer.onclick=hideOverlay,document.body.appendChild(overlayLayer),setTimeout(()=>{overlayLayer.style.opacity="1"},50)}function hideOverlay(){document.documentElement.style.overflow="auto";let e=document.querySelector(".searchable_names_dropdown_class.show");e&&e.classList.remove("show");document.querySelectorAll(".searchable_names_dropdown_class").forEach(e=>{e.style.maxHeight="",e.style.minHeight="",e.style.transition=""}),overlayLayer&&(overlayLayer.style.opacity="0",setTimeout(()=>{overlayLayer&&(document.body.removeChild(overlayLayer),overlayLayer=null)},200))}flightExtraBagsInputOptions.forEach(e=>{e.addEventListener("click",()=>{new Audio("click.mp3").play(),"حذف"===e.textContent?flightExtraBagsInput.value="":flightExtraBagsInput.value=e.textContent,hideOverlay()})}),showClintMovemtsPlacesPage=function(e){document.body.style.overflow="hidden","كوتا"===e.innerText?(kuta_clint_movements_places_div.style.display="block",ubud_clint_movements_places_div.style.display="none",jakarta_clint_movements_places_div.style.display="none",puncak_clint_movements_places_div.style.display="none",bandung_clint_movements_places_div.style.display="none",lombok_clint_movements_places_div.style.display="none"):"اوبود"===e.innerText?(kuta_clint_movements_places_div.style.display="none",ubud_clint_movements_places_div.style.display="block",jakarta_clint_movements_places_div.style.display="none",puncak_clint_movements_places_div.style.display="none",bandung_clint_movements_places_div.style.display="none",lombok_clint_movements_places_div.style.display="none"):"جاكرتا"===e.innerText?(kuta_clint_movements_places_div.style.display="none",ubud_clint_movements_places_div.style.display="none",jakarta_clint_movements_places_div.style.display="block",puncak_clint_movements_places_div.style.display="none",bandung_clint_movements_places_div.style.display="none",lombok_clint_movements_places_div.style.display="none"):"بونشاك"===e.innerText?(kuta_clint_movements_places_div.style.display="none",ubud_clint_movements_places_div.style.display="none",jakarta_clint_movements_places_div.style.display="none",puncak_clint_movements_places_div.style.display="block",bandung_clint_movements_places_div.style.display="none",lombok_clint_movements_places_div.style.display="none"):"باندونج"===e.innerText?(kuta_clint_movements_places_div.style.display="none",ubud_clint_movements_places_div.style.display="none",jakarta_clint_movements_places_div.style.display="none",puncak_clint_movements_places_div.style.display="none",bandung_clint_movements_places_div.style.display="block",lombok_clint_movements_places_div.style.display="none"):"لومبوك"===e.innerText&&(kuta_clint_movements_places_div.style.display="none",ubud_clint_movements_places_div.style.display="none",jakarta_clint_movements_places_div.style.display="none",puncak_clint_movements_places_div.style.display="none",bandung_clint_movements_places_div.style.display="none",lombok_clint_movements_places_div.style.display="block");let t=document.getElementById("all_clint_movements_places_page_divs_container");t.style.display="flex",t.style.overflowY="scroll",document.body.style.overflow="hidden";let n=document.createElement("ion-icon");n.name="arrow-undo",n.className="exit_full_screen_icon",document.body.appendChild(n),n.onclick=function(){kuta_clint_movements_places_div.style.display="none",ubud_clint_movements_places_div.style.display="none",jakarta_clint_movements_places_div.style.display="none",puncak_clint_movements_places_div.style.display="none",bandung_clint_movements_places_div.style.display="none",lombok_clint_movements_places_div.style.display="none",t.style.display="none",document.body.style.overflow="",n&&n.remove(),document.body.style.overflow=""},pickThisClintMovementsPlace=function(e){let t=e.innerText,l=document.createElement("textarea");l.value=t,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l);let i=document.getElementById("all_clint_movements_places_page_divs_container");kuta_clint_movements_places_div.style.display="none",ubud_clint_movements_places_div.style.display="none",jakarta_clint_movements_places_div.style.display="none",puncak_clint_movements_places_div.style.display="none",bandung_clint_movements_places_div.style.display="none",lombok_clint_movements_places_div.style.display="none",i.style.display="none",document.body.style.overflow="",n&&n.remove(),document.body.style.overflow=""}},hideAndShowClintMovementSectionFunction=function(){"none"===document.getElementById("downloaded_pdf_clint_movements_data_page").style.display?document.getElementById("downloaded_pdf_clint_movements_data_page").style.display="block":document.getElementById("downloaded_pdf_clint_movements_data_page").style.display="none"};let innerDatePickerArabicMonths=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],arabicDays=["أحد","إثن","ثلو","ربو","خمي","جمع","سبت"];function getArabicMonthName(e){return innerDatePickerArabicMonths[e]}let arabicMonths={January:"يناير",February:"فبراير",March:"مارس",April:"ابريل",May:"ماي",June:"يونيو",July:"يوليو",August:"اغسطس",September:"سبتمبر",October:"اكتوبر",November:"نوفمبر",December:"ديسمبر"},arabicMonthsReverse={يناير:"January",فبراير:"February",مارس:"March",ابريل:"April",ماي:"May",يونيو:"June",يوليو:"July",اغسطس:"August",سبتمبر:"September",اكتوبر:"October",نوفمبر:"November",ديسمبر:"December"};function calculateDaysDifference(e,t){if(!e||!t)return"";let[n,l]=e.split(" "),[i,a]=t.split(" "),o=new Date(`${arabicMonthsReverse[l]} ${n}, ${new Date().getFullYear()}`),s;return Math.ceil((new Date(`${arabicMonthsReverse[a]} ${i}, ${new Date().getFullYear()}`)-o)/864e5)}let storeHotelTotalNights,storePackageTotalNights;var isWholePackageStartDatePickerVisible=!1,isWholePackageEndDatePickerVisible=!1,isHotelStartDatePickerVisible=!1,isHotelEndDatePickerVisible=!1;function parseArabicDate(e){let t=e.split(" "),n=parseInt(t[0]),l={يناير:0,فبراير:1,مارس:2,أبريل:3,مايو:4,يونيو:5,يوليو:6,أغسطس:7,سبتمبر:8,أكتوبر:9,نوفمبر:10,ديسمبر:11}[t[1]],i=new Date().getFullYear();return new Date(i,l,n)}function wholePackageAndHotelCalculateDaysDifference(e,t){return Math.round((t-e)/864e5)}function updateWholePackageTotalNights(){let e=document.getElementById("whole_package_start_date_input_id"),t=document.getElementById("whole_package_end_date_input_id"),n=document.getElementById("package_total_nights_input_id"),l=e.value,i=t.value;if(""!==l&&""!==i){let a=parseArabicDate(l),o=parseArabicDate(i),s=wholePackageAndHotelCalculateDaysDifference(a,o);storePackageTotalNights=s,n.value=`${s} ليالي`,a>=o&&(t.value="",n.value="")}else n.value=""}function updateHotelTotalNights(){let e=document.getElementById("hotel_check_in_input_id"),t=document.getElementById("hotel_check_out_input_id"),n=document.getElementById("hotel_total_nights_input_id"),l=e.value,i=t.value;if(""!==l&&""!==i){let a=parseArabicDate(l),o=parseArabicDate(i),s=wholePackageAndHotelCalculateDaysDifference(a,o);storeHotelTotalNights=s,n.value=`${s} ليالي`,a>=o&&(t.value="",n.value="")}else n.value=""}function disableSpecificDates(e,t){let n=document.getElementById(t).value;if(n){let l=parseArabicDate(n);return e.getTime()<=l.getTime()}return!1}var today=new Date,wholePackageStartDatePicker=new Pikaday({field:document.getElementById("whole_package_start_date_input_id"),format:"DD-M",minDate:today,toString(e,t){let n;return`${e.getDate()} ${getArabicMonthName(e.getMonth())}`},i18n:{previousMonth:"",nextMonth:"",months:innerDatePickerArabicMonths,weekdays:arabicDays,weekdaysShort:arabicDays},onSelect:function(){new Audio("click.mp3").play(),isWholePackageStartDatePickerVisible=!1,updateWholePackageTotalNights();let e=this.getDate(),t=new Date(e);t.setDate(t.getDate()+1),wholePackageEndDatePicker.setMinDate(t)}}),wholePackageEndDatePicker=new Pikaday({field:document.getElementById("whole_package_end_date_input_id"),format:"DD-M",minDate:today,toString(e,t){let n;return`${e.getDate()} ${getArabicMonthName(e.getMonth())}`},i18n:{previousMonth:"",nextMonth:"",months:innerDatePickerArabicMonths,weekdays:arabicDays,weekdaysShort:arabicDays},disableDayFn:function(e){return disableSpecificDates(e,"whole_package_start_date_input_id")},onOpen:function(){let e=document.getElementById("whole_package_start_date_input_id").value;if(e){let t=parseArabicDate(e);this.gotoDate(t)}},onSelect:function(){new Audio("click.mp3").play(),isWholePackageEndDatePickerVisible=!1,updateWholePackageTotalNights()}}),hotelStartDatePicker=new Pikaday({field:document.getElementById("hotel_check_in_input_id"),format:"DD-M",minDate:today,toString(e,t){let n;return`${e.getDate()} ${getArabicMonthName(e.getMonth())}`},i18n:{previousMonth:"",nextMonth:"",months:innerDatePickerArabicMonths,weekdays:arabicDays,weekdaysShort:arabicDays},onSelect:function(){new Audio("click.mp3").play(),isHotelStartDatePickerVisible=!1,updateHotelTotalNights();let e=this.getDate(),t=new Date(e);t.setDate(t.getDate()+1),hotelEndDatePicker.setMinDate(t)}}),hotelEndDatePicker=new Pikaday({field:document.getElementById("hotel_check_out_input_id"),format:"DD-M",minDate:today,toString(e,t){let n;return`${e.getDate()} ${getArabicMonthName(e.getMonth())}`},i18n:{previousMonth:"",nextMonth:"",months:innerDatePickerArabicMonths,weekdays:arabicDays,weekdaysShort:arabicDays},disableDayFn:function(e){return disableSpecificDates(e,"hotel_check_in_input_id")},onOpen:function(){let e=document.getElementById("hotel_check_in_input_id").value;if(e){let t=parseArabicDate(e);this.gotoDate(t)}},onSelect:function(){new Audio("click.mp3").play(),isHotelEndDatePickerVisible=!1,updateHotelTotalNights()}});document.getElementById("whole_package_start_date_input_id").addEventListener("click",function(){isWholePackageStartDatePickerVisible?(wholePackageStartDatePicker.hide(),isWholePackageStartDatePickerVisible=!1):(wholePackageStartDatePicker.show(),isWholePackageStartDatePickerVisible=!0)}),document.getElementById("whole_package_end_date_input_id").addEventListener("click",function(){isWholePackageEndDatePickerVisible?(wholePackageEndDatePicker.hide(),isWholePackageEndDatePickerVisible=!1):(wholePackageEndDatePicker.show(),isWholePackageEndDatePickerVisible=!0)}),document.getElementById("hotel_check_in_input_id").addEventListener("click",function(){isHotelStartDatePickerVisible?(hotelStartDatePicker.hide(),isHotelStartDatePickerVisible=!1):(hotelStartDatePicker.show(),isHotelStartDatePickerVisible=!0)}),document.getElementById("hotel_check_out_input_id").addEventListener("click",function(){isHotelEndDatePickerVisible?(hotelEndDatePicker.hide(),isHotelEndDatePickerVisible=!1):(hotelEndDatePicker.show(),isHotelEndDatePickerVisible=!0)});var startDatePicker=new Pikaday({field:document.getElementById("flight_date_input_id"),format:"DD-M",minDate:new Date,toString(e,t){let n;return`${e.getDate()} ${getArabicMonthName(e.getMonth())}`},onSelect:function(){new Audio("click.mp3").play(),isDatePickerVisible=!1},i18n:{previousMonth:"",nextMonth:"",months:innerDatePickerArabicMonths,weekdays:arabicDays,weekdaysShort:arabicDays}}),isDatePickerVisible=!1;function toggleFullscreen(e){let t=document.getElementById(e),n=document.body;n.style.overflow="hidden";let l={width:t.style.width,height:t.style.height,zIndex:t.style.zIndex,position:t.style.position,top:t.style.top,left:t.style.left,transform:t.style.transform};t.style.width="90vw",t.style.height="90vh",t.style.zIndex="1000",t.style.position="fixed",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)";let i=document.createElement("div");i.classList.add("black_overlay"),document.body.appendChild(i),setTimeout(()=>{i.style.opacity="1"},50);let a=document.createElement("ion-icon");a.name="arrow-undo",a.classList.add("exit_full_screen_icon"),a.onclick=function(){new Audio("click.mp3").play(),t.style.width=l.width,t.style.height=l.height,t.style.zIndex=l.zIndex,t.style.position=l.position,t.style.top=l.top,t.style.left=l.left,t.style.transform=l.transform,i.parentNode.removeChild(i),i=null,n.style.overflow="auto",a.remove()},document.body.appendChild(a)}document.getElementById("flight_date_input_id").addEventListener("click",function(e){e.stopPropagation(),isDatePickerVisible?startDatePicker.hide():startDatePicker.show(),isDatePickerVisible=!isDatePickerVisible}),startDatePicker.el.addEventListener("click",function(e){e.stopPropagation()}),document.addEventListener("click",function(){isDatePickerVisible&&(startDatePicker.hide(),isDatePickerVisible=!1)}),$(document).ready(function(){$("#flight_fly_away_time_input_id").pickatime({format:"HH:i",interval:5,min:[0,0],max:[23,59],onSet:function(){new Audio("click.mp3").play()}}),$("#flight_arrival_time_input_id").pickatime({format:"HH:i",interval:5,min:[0,0],max:[23,59],onSet:function(){new Audio("click.mp3").play()}})});
