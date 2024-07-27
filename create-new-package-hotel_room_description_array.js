/* Array to store the hotel room types description for later use */

/* Tips

    Don't use شقة or فرفة in the hotelRoomDescription

    Instead use روم 

*/
let hotelRoomTypesDescriptionArray = [
    /* Keramas */
    {
        hotelName: "Komaneka Keramas",
        hotelRoomTypes: ["فيلا اوشن من غرفة نوم واحدة", "فيلا هيلتوب من غرفتين نوم"],
    },

    /* Ubud */
    {
        hotelName: "Four Seasons Sayan",
        hotelRoomTypes: ["سويت دوبلكس", "سويت من غرفة نوم واحدة", "فاميلي سويت", "فيلا من غرفة نوم واحدة", "فيلا سايان", "فيلا من غرفتين نوم", "رويال فيلا من ثلاث غرف نوم"],
    },
    {
        hotelName: "Komaneka Tanggayuda",
        hotelRoomTypes: ["فيلا فالي", "فيلا بريمير فالي"],
    },
    {
        hotelName: "Samsara Ubud",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة", "فيلا ديلوكس من غرفة نوم واحدة", "فيلا من غرفتين نوم", "فيلا من ثلاث غرف نوم"],
    },
    {
        hotelName: "Tejaprana",
        hotelRoomTypes: ["فيلا تراس", "فيلا فالي", "فيلا من غرفتين نوم"],
    },
    {
        hotelName: "K Club",
        hotelRoomTypes: ["فيلا فاخرة من غرفة نوم واحدة", "فيلا فاخرة من غرفتين نوم", "فيلا فاخرة من ثلاث غرف نوم", "فيلا فاخرة من اربع غرف نوم", "فيلا رويال من اربع غرف نوم", "فيلا رويال من خمس غرف نوم"],
    },
    {
        hotelName: "Ulaman Eco Luxury",
        hotelRoomTypes: ["Cocoon upper deluxe"],
    },
    {
        hotelName: "Aksari Ubud",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة", "فيلا جراند رويال من غرفة نوم واحدة", "فيلا جراند رويال على النهر من غرفة نوم واحدة", "فيلا جراند رويال من غرفتين نوم", "جراند اكساري سويت", "اكساري سويت", "سويت دبل", "سويت توين"],
    },
    {
        hotelName: "Amarea Ubud",
        hotelRoomTypes: ["اوبود روم", "سويت اوبود مع حوض إستحمام", "كوخ اوبود مع حوض إستحمام", "كوخ جراند مع حوض إستحمام", "فيلا ذكية من غرفة نوم واحدة مع حوض إستحمام", "فيلا جراند لوفت من غرفتين نوم"],
    },
    {
        hotelName: "Asvara Villa",
        hotelRoomTypes: ["فيلا رويال من غرفة نوم واحدة مع جاكوزي", "فيلا جراند من غرفة نوم واحدة مع جاكوزي", "فيلا رويال من غرفتين نوم مع جاكوزي"],
    },
    {
        hotelName: "Kaamala Resort",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة", "فيلا جراند رويال من غرفة نوم واحدة", "فيلا جراند رويال من غرفتين نوم", "جراند سويت", "سويت"],
    },
    {
        hotelName: "Natya Resort",
        hotelRoomTypes: ["فيلا رويال", "فيلا فاخرة"],
    },
    {
        hotelName: "Padma Resort",
        hotelRoomTypes: ["بريمير روم", "بريمير ديلوكس روم", "برمير اوفرسايز توين", "بريمير كلوب روم", "سويت من غرفة نوم واحدة", "سويت من غرتين نوم", "فاميلي سويت"],
    },
    {
        hotelName: "Seres Spring",
        hotelRoomTypes: ["ديلوكس روم", "ديلوكس بول اكسس", "بريميوم روم", "بريميوم بول اكسس", "فيلا اناندا من غرفة نوم واحدة العلوية", "فيلا اناندا من غرفة نوم واحدة المنخفضة", "فيلا سوتيرا من غرفة نوم واحدة"],
    },
    {
        hotelName: "The Westin Ubud",
        hotelRoomTypes: ["ديلوكس روم", "ديلوكس بول اكسس", "جونيور سويت", "سويت تنفيذي"],
    },
    {
        hotelName: "Black Penny",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة", "فيلا ديلوكس من غرفة نوم واحدة"],
    },
    {
        hotelName: "Dedary Resort",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة مع حوض سباحة", "فيلا جاردن من غرفة نوم واحدة مع حوض سباحة", "فيلا من غرفتين نوم مع حوض سباحة"],
    },
    {
        hotelName: "Komaneka Rasa Sayang",
        hotelRoomTypes: ["ديلوكس روم", "فيلا روفتوب جاردن", "فيلا روفتوب جاردن من غرفتين نوم"],
    },

    /* Nusa Dua */
    {
        hotelName: "The Apurva Kempinski",
        hotelRoomTypes: ["جراند ديلوكس روم", "جراند ديلوكس اوشن كورت", "جراند ديلوكس لاجون روم", "جونيور سويت على المنحدر", "فيلا سنجاساري من غرفة نوم واحدة", "فيلا سريواجايا من غرفتين نوم"],
    },
    {
        hotelName: "Ulu Segara",
        hotelRoomTypes: ["اوشن سويت روم", "سويت بريس", "فيلا من غرفة نوم واحدة", "فيلا من غرفتين نوم", "فيلا من ثلاث غرف نوم"],
    },
    {
        hotelName: "Merusaka",
        hotelRoomTypes: ["ديلوكس روم", "ديلوكس بول اكسس", "سويت روم", "سويت اوشن روم", "سويت من غرفتين نوم", "فيلا من غرفة نوم واحدة", "فيلا من غرفتين نوم"],
    },
    {
        hotelName: "The Nest",
        hotelRoomTypes: ["ديلوكس روم", "سويت روم", "جناح تنفيذي"],
    },
    {
        hotelName: "Agranusa Villa",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة", "فيلا من غرفتين نوم", "فيلا من ثلاث غرف نوم"],
    },
    {
        hotelName: "Renaissance Nusa Dua",
        hotelRoomTypes: ["ديلوكس روم"],
    },
    {
        hotelName: "Sofitel Nusa Dua",
        hotelRoomTypes: ["لوكسري روم", "لوكسري روم بول اكسس", "سويت بيستينج", "فيلا من غرفة نوم واحدة"],
    },

    /* Seminyak */
    {
        hotelName: "The Trans Bali",
        hotelRoomTypes: ["بريمير روم", "بريمير اولتومنت", "بريمير كلوب روم", "فيلا من غرفة نوم واحدة"],
    },
    {
        hotelName: "Indigo Bali",
        hotelRoomTypes: ["ستاندرد روم", "ستاندرد كورتيارد اكسس", "سويت روم", "فيلا وانجسا من غرفة نوم واحدة"],
    },
    {
        hotelName: "Sini Vie Villa",
        hotelRoomTypes: ["فيلا ذكية من غرفة نوم واحدة مع جاكوزي", "فيلا جراند ذكية مع جاكوزي"],
    },
    {
        hotelName: "Impiana Villa",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة", "فيلا من غرفتين نوم", "فيلا من ثلاث غرف نوم"],
    },
    {
        hotelName: "W Bali",
        hotelRoomTypes: ["وندرفل", "سبكتاكلر مواجهة للمحيط", "فيلا مارفيلوز من غرفة نوم واحدة", "فيلا واو من غرفتين نوم"],
    },
    {
        hotelName: "Aleva Villa",
        hotelRoomTypes: ["فيلا رويال من غرفة نوم واحدة"],
    },
    {
        hotelName: "Monolocale Resort",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة", "فيلا رويال من غرفة نوم واحدة", "فيلا جراند من غرفة نوم واحدة", "سويت سمنياك دبل", "سويت سمنياك توين"],
    },
    {
        hotelName: "Ize Seminyak",
        hotelRoomTypes: ["ديلوكس روم", "ديلوكس جاكوزي", "كلوب روم", "جونيور سويت"],
    },
    {
        hotelName: "Aksari Villa",
        hotelRoomTypes: ["فيلا رويال ذكية من غرفة نوم واحدة مع حوض إستحمام"],
    },
    {
        hotelName: "Astera Villa",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة مع حوض إستحمام"],
    },
    {
        hotelName: "Ayona Villa",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة وحوض إستحمام", "فيلا جراند من غرفة نوم واحدة وحوض إستحمام"],
    },
    {
        hotelName: "Cyrus Villa",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة وحوض إستحمام", "فيلا جراند من غرفة نوم واحدة وحوض إستحمام"],
    },
    {
        hotelName: "Double Six Luxury",
        hotelRoomTypes: ["سويت ليجور", "سويت ديلوكس", "سويت بريمير بول اكسس", "سويت ليجور من غرفتين نوم", "سويت ديلوكس من غرفتين نوم"],
    },
    {
        hotelName: "Potato Head Suites",
        hotelRoomTypes: ["ستوديو شروق الشمس", "بامبو ستوديو", "ديسا ستوديو", "ريسيدينت ستوديو", "ستوديو مواجهة للمحيط", "سويت ذا ايلاند", "سويت روفتوب"],
    },
    {
        hotelName: "Sana Vie Villa",
        hotelRoomTypes: ["فيلا ذكية من غرفة نوم واحدة مع حوض إستحمام", "فيلا رويال ذكية من غرفة نوم واحدة مع حوض إستحمام", "فيلا من غرفتين نوم مع حوض إستحمام"],
    },
    {
        hotelName: "Claremont Villa",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة"],
    },
    {
        hotelName: "Elysian Boutique Villa",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة", "فيلا من غرفتين نوم"],
    },
    {
        hotelName: "Samaya Seminyak",
        hotelRoomTypes: ["فيلا رويال كورتيارد من غرفة نوم واحدة", "فيلا من غرفة نوم واحدة"],
    },
    {
        hotelName: "Aloft Seminyak",
        hotelRoomTypes: ["الوفت روم", "الوفت بلكوني روم"],
    },
    {
        hotelName: "La Mira Villa",
        hotelRoomTypes: ["فيلا رويال من غرفة نوم واحدة مع زحليقة مائية", "فيلا رويال من غرفتين نوم مع زحليقة مائية", "فيلا رويال من ثلاث غرف نوم مع زحليقة مائية وحوض إستحمام"],
    },
    {
        hotelName: "Seminyak Sanctuary",
        hotelRoomTypes: ["فيلا جراند من غرفة نوم واحدة وحوض إستحمام"],
    },
    {
        hotelName: "Kolila Villa",
        hotelRoomTypes: ["فيلا من غرفتين نوم", "فيلا من ثلاث غرف نوم"],
    },

    /* Kuta */
    {
        hotelName: "Sheraton Kuta",
        hotelRoomTypes: ["جيست روم", "جونيور سويت", "لارجر سويت مواجهة للمحيط"],
    },
    {
        hotelName: "Aryaduta Kuta",
        hotelRoomTypes: ["سوبريور روم", "ديلوكس روم", "جراند ديلوكس روم", "ديلوكس بريمير روم", "جراند ديلوكس بريمير", "تنفيذي روم", "فاميلي روم"],
    },
    {
        hotelName: "Tribe",
        hotelRoomTypes: ["ترايب كومفورت بلكوني", "ترايب كومفورت XL بلكوني"],
    },
    {
        hotelName: "Aloft Kuta",
        hotelRoomTypes: ["الوفت"],
    },
    {
        hotelName: "Paasha Atelier",
        hotelRoomTypes: ["سوبريور روم", "دوبلكس روم", "جونيور سويت", "سويت دوبلكس"],
    },
    {
        hotelName: "Mamaka By Ovolo",
        hotelRoomTypes: ["بالي هاي روم", "كوكومو روم", "سمر جاردين تراس", "سواجر سويت"],
    },
    {
        hotelName: "Beachwalk Residence",
        hotelRoomTypes: ["ريسيدينس من غرفتين نوم", "سويت من غرفتين نوم", "ريسيدينس من ثلاث غرف نوم", "سويت من ثلاث غرف نوم"],
    },
    {
        hotelName: "Discovery Kartika Plaza",
        hotelRoomTypes: ["ديلوكس روم", "ديلوكس جاردن اكسس", "جاردن ديلوكس مواجهة للمحيط", "جونيور سويت", "فاميلي سويت", "ديسكوفيري سويت"],
    },
    {
        hotelName: "Ramayana Suites",
        hotelRoomTypes: ["جاردن ديلوكس روم", "بريمير روم", "جونيور سويت روم", "ريسورت روم", "فاميلي روم", "سويت لومبونغ", "سويت من غرفة نوم واحدة", "فاميلي سويت متصل ببعض", "سويت من غرفتين نوم", "سيتا سويت"],
    },
    {
        hotelName: "The Anvaya Beach",
        hotelRoomTypes: ["ديلوكس روم", "بريمير روم"],
    },
    {
        hotelName: "Fairfield Marriott",
        hotelRoomTypes: ["سوبريور روم", "سوبريور بلكوني", "ديلوكس روم", "جونيور سويت"],
    },

    /* Jimbaran */
    {
        hotelName: "Four Seasons Jimbaran",
        hotelRoomTypes: [
            "فيلا جاردن",
            "فيلا جيمبران باي",
            "فيلا ديلوكس",
            "فيلا بريمير اوشن",
            "فيلا فاميلي بريمير",
            "فيلا جاردن من غرفتين نوم",
            "فيلا جيماران باي من غرفتين نوم",
            "فيلا بريمير اوشن بغرفتين نوم",
            "فيلا رويال بغرفتين نوم",
            "فيلا امبراطورية من ثلاث غرف نوم",
            "فيلا جاردن ريسيدنس من غرفتين نوم",
            "فيلا ريسيدنس من ثلاث غرف نوم",
            "فيلا ريسيدنس من اربع غرف نوم",
        ],
    },
    {
        hotelName: "Movenpick Jimbaran",
        hotelRoomTypes: ["كلاسيك روم", "جونيور سويت", "فاميلي دوبلاكس روم", "بريميوم سويت", "جيمباران سويت"],
    },
    {
        hotelName: "Platinum Jimbaran",
        hotelRoomTypes: ["بزنس روم", "ديلوكس روم", "جيمباران روم", "اوشن روم", "ديلوكس فاميلي", "سويت تنفيذي", "بنتهاوس"],
    },
    {
        hotelName: "Le Meridien",
        hotelRoomTypes: ["كلاسيك روم", "ديلوكس لاجون اكسس", "اكوا سويت ستوديو لاجون فيو", "اكوا سويت استوديو لاجون اكسس", "اكوا بول سكاي بنتهاوس", "فيلا سكاي"],
    },
    {
        hotelName: "Intercontinental Bali",
        hotelRoomTypes: ["كلاسيك بلكوني", "Classic Singaraja Space Access", "Premium Mezzanine Singaraja Space Access", "Premium Club Lounge Access Balcony", "Premium Mezzanine Area Club Lounge Access Balcony", "Suite Club Lounge Access"],
    },

    /* Uluwatu */
    {
        hotelName: "Umana Bali",
        hotelRoomTypes: [
            "فيلا تروبيكال جاردن من غرفة نوم واحدة",
            "فيلا من غرفة نوم واحدة",
            "فيلا اوشن من غرفة نوم واحدة",
            "فيلا بانوراميك اوشن من غرفة نوم واحدة",
            "فيلا تروبيكال جاردن من غرفتين نوم",
            "فيلا من غرفتين نوم",
            "فيلا اوشن من غرفتين نوم",
            "فيلا بانوراميك اوشن من غرفتين نوم",
        ],
    },
    {
        hotelName: "Jumeirah Bali",
        hotelRoomTypes: ["فيلا جاردن", "فيلا غروب الشمس", "فيلا بريمير جاردن", "فيلا اوشن", "فيلا جاردن من غرفتين نوم"],
    },
    {
        hotelName: "Renaissance Uluwatu",
        hotelRoomTypes: ["ديلوكس روم", "ديلوكس اوشن بلكوني", "ديلوكس اوشن تراس", "جونيور سويت", "سويت تنفيذي"],
    },

    /* Legian */
    {
        hotelName: "Eight Palms Villa",
        hotelRoomTypes: ["فيلا من غرفتين نوم وحوض إستحمام", "فيلا من ثلاث غرف نوم وحوض إستحمام", "فيلا رويال من ثلاث غرف نوم وجاكوزي", "فيلا رويال من ثلاث غرف نوم مع زحليقة مائية وجاكوزي"],
    },
    {
        hotelName: "La Vie Villa",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة وحوض إستحمام", "فيلا رويال من غرفة نوم واحدة وحوض إستحمام"],
    },
    {
        hotelName: "Padma Resort",
        hotelRoomTypes: ["ديلوكس روم", "ديلوكس شاليه", "جاردن كلوب شاليه", "بريمير دبل دبل"],
    },
    {
        hotelName: "Ini Vie Villa",
        hotelRoomTypes: ["فيلا رويال من غرفة نوم واحدة وجاكوزي", "فيلا من غرفتين نوم وجاكوزي"],
    },

    /* Jakarta */
    {
        hotelName: "Raffles Jakarta",
        hotelRoomTypes: ["رافيلز روم", "سيجنتشور روم", "سويت ارتيست", "سويت جالوري"],
    },
    {
        hotelName: "Ascott Jakarta",
        hotelRoomTypes: ["ستوديو بريمير", "بريمير روم من غرفة نوم واحدة", "تنفيذي روم من غرفتين نوم", "بريمير روم من غرفتين نوم", "بريمير روم من ثلاث غرف نوم"],
    },
    {
        hotelName: "Citadines Sudirman",
        hotelRoomTypes: ["ستوديو تنفيذي", "ديلوكس روم من غرفة نوم واحدة", "تنفيذي روم من غرفة نوم واحدة", "فاميلي سويت", "ديلوكس روم من غرفتين نوم", "تنفيذي روم من غرفتين نوم"],
    },
    {
        hotelName: "Hilton DoubleTree",
        hotelRoomTypes: ["جيست روم", "ديلوكس روم", "جناح كينغ تنفيذي"],
    },
    {
        hotelName: "Parkroyal Serviced Suites",
        hotelRoomTypes: ["سويت ستوديو", "سويت من غرفة نوم واحدة", "سويت ديلوكس من غرفة نوم واحدة", "سويت بريمير من غرفة نوم واحدة", "سويت تنفيذي من غرفة نوم واحدة", "سويت ديلوكس من غرفتين نوم"],
    },
    {
        hotelName: "Somerset Sudirman",
        hotelRoomTypes: ["تنفيذي روم", "ستوديو تنفيذي", "ستوديو بريمير", "سويت تنفيذي", "تنفيذي من غرفة نوم واحدة", "بريمير من غرفة نوم واحدة", "كلوب من غرفتين نوم", "كلاسيك من غرفتين نوم"],
    },
    {
        hotelName: "Aloft Wahied Hasiem",
        hotelRoomTypes: ["الوفت روم"],
    },
    {
        hotelName: "Ascott Sudirman",
        hotelRoomTypes: ["ستوديو بريمير", "بريمير من غرفة نوم واحدة", "بريمير من غرفتين نوم", "بريمير من ثلاث غرف نوم", "ديلوكس روم", "سويت روم"],
    },
    {
        hotelName: "Kempinski Jakarta",
        hotelRoomTypes: ["جراند ديلوكس", "ديلوكس", "جراند ديلوكس تنفيذي", "سويت صالون"],
    },
    {
        hotelName: "Pullman Park",
        hotelRoomTypes: ["ديلوكس روم", "ديلوكس تنفيذي مع امكانية الوصول الى الصالة التنفيذية", "سويت تنفيذي روم", "سويت تنفيذي مع امكانية الوصول الى الصالة التنفيذية"],
    },
    {
        hotelName: "Vertu Harmoni",
        hotelRoomTypes: ["ڤي روم", "فيرتو روم", "فيرتو تنفيذي روم", "فيرتو سويت"],
    },
    {
        hotelName: "Pan Pacific",
        hotelRoomTypes: ["ديلوكس من غرفة نوم واحدة", "بريمير من غرفة نوم واحدة", "سويت من غرفة نوم واحدة"],
    },
    {
        hotelName: "Ascott Kuningan",
        hotelRoomTypes: ["التنفيذي من غرفة نوم واحدة", "بريمير من غرفة نوم واحدة", "بريمير من غرفتين نوم", "بريمير من ثلاث غرف نوم", "ديلوكس روم", "سويت روم"],
    },
    {
        hotelName: "Grand Mercure",
        hotelRoomTypes: ["سوبريور روم", "ديلوكس روم", "ديلوكس كورنر روم", "سويت بزنس روم", "سويت تنفيذي", "بنتهاوس"],
    },
    {
        hotelName: "Sheraton Soekarno",
        hotelRoomTypes: ["ديلوكس جاردن"],
    },
    {
        hotelName: "Grove Suites",
        hotelRoomTypes: ["سويت من غرفة نوم واحدة", "سويت من غرفتين نوم"],
    },
    {
        hotelName: "FM7 Tangerang",
        hotelRoomTypes: ["سوبريور روم", "ديلوكس روم", "ديلوكس بلس", "بريمير روم", "بريمير فاميلي", "جونيور سويت"],
    },

    {
        hotelName: "Merlynn Park",
        hotelRoomTypes: ["تنفيذي روم", "تيفاني سويت", "فاميلي سويت", "برادا سويت", "بولجاري سويت", "ارماني سويت", "مرليان سويت", "ذا ريسيدينس", "امباير مينشن"],
    },

    /* Puncak */
    {
        hotelName: "Grand Aston",
        hotelRoomTypes: ["ديلوكس روم", "جونيور سويت", "سويت تنفيذي"],
    },
    {
        hotelName: "Le Eminence",
        hotelRoomTypes: ["جونيور سويت", "سويت تنفيذي", "رويال سويت", "ايميننس سويت"],
    },
    {
        hotelName: "Botanica Sanctuary",
        hotelRoomTypes: ["سوبريور روم", "ديلوكس روم", "برمير روم", "ذا فالي سويت"],
    },
    {
        hotelName: "Pesona Alam",
        hotelRoomTypes: ["ديلوكس روم", "فيلا من غرفة نوم واحدة", "فيلا سوبريور من غرفتين نوم", "فيلا من ثلاث غرف نوم"],
    },
    {
        hotelName: "Villa Marina",
        hotelRoomTypes: ["فيلا من ثلاث غرف نوم"],
    },

    /* Bandung */
    {
        hotelName: "Courtyard Marriott",
        hotelRoomTypes: ["ديلوكس روم", "بريمير روم", "سويت تنفيذي", "بريمير سويت", "كوربورات سويت", "كورتيارد سويت", "رويال سويت"],
    },
    {
        hotelName: "Sheraton Bandung",
        hotelRoomTypes: ["ديلوكس روم", "تنفيذي روم", "تاور روم", "جونيور سويت", "سويت تنفيذي", "سويت تاور"],
    },
    {
        hotelName: "Trans Luxury",
        hotelRoomTypes: ["بريمير روم"],
    },
    {
        hotelName: "Four Points Sheraton",
        hotelRoomTypes: ["كلاسيك روم", "بريميوم روم", "ديلوكس روم", "سويت تنفيذي", "بريمير سويت"],
    },

    /* Lombok */
    {
        hotelName: "Kalandara",
        hotelRoomTypes: ["فيلا من غرفة نوم واحدة"],
    },
];
