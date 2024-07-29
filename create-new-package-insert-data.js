/* Inserted company logo data position */
#inserted_company_name_image_position_div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.inserted_company_name_logo {
    margin-bottom: 10px;
    width: 20vw;
    cursor: pointer;
    border-radius: 7px;
}









#clint_full_name_p {
    width: 100%;
    font-size: 2vw;
    padding: 3px 0;
    text-align: center;
    border-right: 0.5px solid black;
    border-left: 0.5px solid black;
    border-bottom: 0.5px solid black;
}















/* Inserted clint data position */
.clint_data_row_class {
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border: 0.5px solid black;
}

.clint_data_row_class div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 0.5px solid black;
}

.clint_data_row_class div * {
    text-align: center;
}

.clint_data_row_class div:first-child {
    flex-grow: 0.9;
}

.clint_data_row_class p {
    font-size: 2.5vw;
}

/* Reduce the width of "المدينة" cells */
.clint_data_row_class div:nth-child(2),
.clint_data_row_class div:nth-child(3) {
    flex-grow: 0.5;
}

/* Reduce the width of "مجموع الليالي" cells */
.clint_data_row_class div:nth-child(4) {
    flex-grow: 0.4;
}

/* Reduce the width of "المدينة" cells */
.clint_data_row_class div:nth-child(4) {
    border-left: none;
}




















/* Inserted package including data position */
.inserted_package_including_and_not_icluding_data_div_class {
    background: white;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.inserted_package_including_and_not_icluding_data_div_class p {
    width: fit-content;
    font-size: 2vw;
    padding: 5px 0;
    text-align: start;
    cursor: pointer;
}

.inserted_package_including_and_not_icluding_data_div_class h6 {
    width: 100%;
    font-size: 2vw;
    padding: 5px 0;
    text-align: center;
    cursor: pointer;
}

.inserted_package_including_and_not_icluding_data_div_class span {
    font-weight: 600;
}











.special_package_including_data_background_color_text {
    background: rgb(85, 127, 137);
    color: white;
    border-radius: 7px;
}










/* Pdf section title */
.pdf_section_title_div_class {
    background: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
    padding: 10px;
    position: relative;
    /* Add this to position the icon absolutely */
}

.pdf_section_title_div_class h6 {
    background: rgb(86, 0, 86);
    width: fit-content;
    color: white;
    font-size: 2.5vw;
    padding: 5px 15px;
    font-weight: 600;
    text-align: center;
    border-radius: 7px;
}

.pdf_section_title_div_class ion-icon {
    font-size: 4.5vw;
    /* Position the icon absolutely */
    /* Position the icon 10px from the right */
    /* Position the icon vertically in the center */
    /* Adjust vertical alignment */
}





/* Usuful notes section title element */
#pdf_section_title_div_usuful_notes_id {
    margin-top: 15px;
}























/* Inserted hotel data position */
.hotel_row_class {
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 0.5px solid black;
}

.hotel_row_class div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 0.5px solid black;
}

.hotel_row_class div * {
    text-align: center;
}

.hotel_row_class div:first-child {
    flex-grow: 0.9;
    border-right: 0.5px solid black;
}

.hotel_row_class div:last-child {
    flex-grow: 0.6;
}

.hotel_row_class div:last-child img {
    width: 100%;
    border-radius: 7px;
    cursor: pointer;
}

.hotel_row_class p {
    font-size: 2.2vw;
    font-weight: 600;
}

.hotel_row_class span {
    font-size: 1.5vw;
    font-weight: 600;
}

/* Reduce the width of "تاريخ الدخول وتاريخ الخروج" and cells */
.hotel_row_class div:nth-child(2),
.hotel_row_class div:nth-child(3) {
    flex-grow: 0.6;
}

/* Reduce the width of "عدد الليالي" and "المدينة" cells */
.hotel_row_class div:nth-child(4) {
    flex-grow: 0.5;
}

/* Reduce the width of "نوع الغرفة" and "المدينة" cells */
.hotel_row_class div:nth-child(5) {
    flex-grow: 1.2;
}

/* Reduce the width of "عدد الليالي" and "المدينة" cells */
.hotel_row_class div:nth-child(6) {
    flex-grow: 0.5;
}

/* Reduce the width of "المدينة" cells */
.hotel_row_class div:nth-child(7) {
    flex-grow: 0.6;
    font-size: 0.5vw;
}





















/* Inserted package important note position */
.inserted_package_important_note_position_div_class {
    background: white;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.inserted_package_important_note_position_div_class p {
    width: fit-content;
    font-size: 2vw;
    margin: 5px 0;
    text-align: start;
}

.inserted_package_including_data_text {
    margin: 2px 0;
}










/* Inserted package total price section */
#package_total_price_div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#package_total_price_div h6 {
    background: rgb(85, 127, 137);
    color: white;
    font-size: 5vw;
    padding: 5px 15px;
    border-radius: 7px;
    text-align: center;
}

#package_total_price_div p {
    font-size: 5vw;
    padding: 5px 15px;
    border-radius: 7px;
    text-align: center;
}













/* Inserted flight data position */
.flight_row_class {
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 0.5px solid black;
}

.flight_row_class div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 0.5px solid black;
}

.flight_row_class div * {
    text-align: center;
}

.flight_row_class div:first-child {
    flex-grow: 0.9;
    border-right: 0.5px solid black;
}

.flight_row_class p {
    font-size: 2.3vw;
    font-weight: 600;
}

/* Reduce the width of "من" and "الى" cells */
.flight_row_class div:nth-child(4),
.flight_row_class div:nth-child(5) {
    flex-grow: 0.9;
}

/* Reduce the width of "عدد الأشخاص" cell */
.flight_row_class div:nth-child(2) {
    flex-grow: 1;
}

/* Reduce the width of "عدد الأشخاص" cell */
.flight_row_class div:nth-child(6) {
    flex-grow: 0.8;
}

/* Reduce the width of "وقت الإقلاع" and "وقت الوصول" cells */
.flight_row_class div:nth-child(7),
.flight_row_class div:nth-child(8) {
    flex-grow: 0.7;
}















/* Inserted transportation_plan data position */
.clint_movements_row_class {
    background: white;
    min-height: 9vw;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 0.5px solid black;
}

.clint_movements_row_class div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 0.5px solid black;
}

.clint_movements_row_class div * {
    text-align: center;
}

.clint_movements_row_class h6 {
    font-size: 2vw;
    font-weight: 600;
}

.clint_movements_row_class p {
    font-size: 2vw;
    font-weight: 600;
}

/* Reduce the width of "من" cell */
.clint_movements_row_class div:nth-child(1) {
    flex-grow: 0.2;
    border-right: 0.5px solid black;
}

/* Reduce the width of "الى" cell */
.clint_movements_row_class div:nth-child(3) {
    flex-grow: 0.3;
}


.clint_movements_all_p_elements_div_class {
    display: flex;
    flex-direction: column;
}

.clint_movements_all_p_elements_div_class p {
    margin: 0;
    padding: 0;
}








































/* Delete box message */
.ensure_your_delete_action {
    z-index: 1000;
    background-color: white;
    width: fit-content;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    text-align: center;
    box-shadow: 0 0 5px black;
    transform: translate(-50%, -100vh);
    transition: transform 0.5s ease;
}

.ensure_your_delete_action button {
    font-size: 3vw;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
    border-radius: 7px;
}

.ensure_your_delete_action button:hover {
    box-shadow: 0 0.5px 3px black;
}


























/* Download pdf file */
#export_package_pdf_div_id {
    width: 100%;
}

#export_package_pdf_div_id button {
    width: 100%;
    font-size: 3vw;
    text-align: center;
    cursor: pointer;
    border: 0.5px solid black;
    border-radius: 0;
    box-shadow: 0 0 0 black;
    transition: all 0.2s ease-in-out;
}










/* Name pdf file box */
#name_pdf_file_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    box-shadow: 0 0 5px black;
    border: 1px solid black;
    transform: translate(-50%, -100vh);
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 95%;
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.5s ease;
}

#name_pdf_file_div span {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 4vw;
    color: #888;
}

#name_pdf_file_div input {
    width: 90%;
    font-size: 3vw;
    text-align: center;
    border: 1px solid black;
    border-radius: 7px;
}

#name_pdf_file_div button {
    font-size: 2.5vw;
    margin-top: 10px;
    padding: 1px 10px;
    cursor: pointer;
    border-radius: 7px;
    border: 1px solid black;
    transition: all 0.1s ease-in-out;
}

































/* Media Queries */
/* 1250px */
@media(max-width:1250px) {}

/* 1040px */
@media(max-width:1040px) {}

/* 950px */
@media(max-width:950px) {
    .inserted_company_name_logo {
        width: 25vw;
    }










    #clint_full_name_p {
        font-size: 2.5vw;
    }










    .pdf_section_title_div_class {
        padding: 6px;
    }

    .pdf_section_title_div_class h6 {
        font-size: 2.7vw;
        padding: 3px 10px;
    }

    .pdf_section_title_div_class ion-icon {
        font-size: 5.5vw;
    }























    .inserted_package_including_and_not_icluding_data_div_class p {
        font-size: 2.5vw;
    }

    .inserted_package_including_and_not_icluding_data_div_class h6 {
        font-size: 2.5vw;
    }












    .inserted_package_important_note_position_div_class p {
        font-size: 2.5vw;
        padding: 3px 0;
    }











    .ensure_your_delete_action button {
        font-size: 4vw;
        padding: 4px;
    }

    #export_package_pdf_div_id button {
        font-size: 4vw;
    }

    #name_pdf_file_div span {
        font-size: 6vw;
    }

    #name_pdf_file_div input {
        font-size: 4vw;
    }

    #name_pdf_file_div button {
        font-size: 3.5vw;
    }
}

/* 850px */
@media(max-width:850px) {}

/* 760px */
@media(max-width:760px) {}

/* 650px */
@media(max-width:650px) {

    .ensure_your_delete_action {
        padding: 10px;
    }

    .ensure_your_delete_action button {
        font-size: 5vw;
        padding: 3px;
    }

    #export_package_pdf_div_id button {
        font-size: 5vw;
    }
}


/* 580px */
@media(max-width:580px) {
    .inserted_company_name_logo {
        width: 30vw;
        margin-bottom: 5px;
    }









    #clint_full_name_p {
        font-size: 3.5vw;
    }







    .clint_data_row_class p {
        font-size: 3.5vw;
    }







    .pdf_section_title_div_class {
        padding: 4px;
    }

    .pdf_section_title_div_class h6 {
        font-size: 3.5vw;
        padding: 2px 5px;
    }

    .pdf_section_title_div_class ion-icon {
        font-size: 6.5vw;
    }












    .hotel_row_class p {
        font-size: 2.6vw;
    }

    .hotel_row_class span {
        font-size: 2vw;
    }












    .flight_row_class p {
        font-size: 2.5vw;
    }












    .clint_movements_row_class p {
        font-size: 2.5vw;
    }


















    .inserted_package_important_note_position_div_class p {
        font-size: 3vw;
        padding: 2px 0;
    }














    #name_pdf_file_div span {
        font-size: 7vw;
    }

    #name_pdf_file_div input {
        font-size: 5vw;
    }

    #name_pdf_file_div button {
        font-size: 4.5vw;
        padding: 1px 5px;
    }
}

/* 500px */
@media(max-width:500px) {}

/* 400px */
@media(max-width:400px) {
    .inserted_company_name_logo {
        width: 35vw;
        margin-bottom: 0px;
    }








    #clint_full_name_p {
        font-size: 4.5vw;
    }








    .inserted_package_including_and_not_icluding_data_div_class p {
        font-size: 3.2vw;
        padding: 3px 0;
    }

    .inserted_package_including_and_not_icluding_data_div_class h6 {
        font-size: 4.2vw;
        padding: 3px 0;
    }





    .hotel_row_class span {
        font-size: 2.4vw;
    }












    #pdf_section_title_div_usuful_notes_id {
        margin-top: 10px;
    }










    .inserted_package_important_note_position_div_class p {
        font-size: 3.2vw;
    }











    #package_total_price_div h6 {
        font-size: 7vw;
        padding: 3px 10px;
    }

    #package_total_price_div p {
        font-size: 7vw;
        padding: 3px 10px;
    }












    .ensure_your_delete_action {
        padding: 5px;
    }

    .ensure_your_delete_action button {
        font-size: 6vw;
        padding: 2px;
    }

    #export_package_pdf_div_id button {
        font-size: 6vw;
    }

    #name_pdf_file_div span {
        font-size: 8vw;
    }

    #name_pdf_file_div input {
        font-size: 6vw;
    }

    #name_pdf_file_div button {
        font-size: 5.5vw;
        padding: 1px 3px;
    }
}

/* 320px */
@media(max-width:320px) {}
