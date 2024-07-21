/* Array to store the hotel room types description for later use */




/* Tips

    Don't use شقة or فرفة in the hotelRoomDescription

    Instead use روم 

*/
let hotelRoomTypesDescriptionArray = [
    /* Keramas */
    {
        hotelName: 'Komaneka Keramas',
        hotelRoomTypes: ['فيلا اوشن مع مسبح خاص وإطلالة على المحيط', 'فيلا هيلتوب مع مسبح خاص وإطلالة على المحيط'],
    },





    /* Ubud */
    {
        hotelName: 'Four Seasons Sayan',
        hotelRoomTypes: ['فيلا'],
    },
    {
        hotelName: 'Komaneka Tanggayuda',
        hotelRoomTypes: ['فيلا فالي مع مسبح خاص بإطلالة على الطبيعة', 'فيلا بريمير فالي مع مسبح خاص بإطلالة على الطبيعة'],
    },
    {
        hotelName: 'Samsara Ubud',
        hotelRoomTypes: ['فيلا ديلوكس مع مسبح خاص وإطلالة على الطبيعة', 'فيلا مع مسبح خاص بإطلالة على الطبيعة'],
    },
    {
        hotelName: 'Tejaprana',
        hotelRoomTypes: ['فيلا فالي مع مسبح خاص بإطلالة على الطبيعة', 'فيلا تراس مع مسبح خاص بإطلالة على الطبيعة'],
    },
    {
        hotelName: 'K Club',
        hotelRoomTypes: ['فيلا بادي فاخرة مع مسبح خاص بإطلالة علئ الطبيعة', 'فيلا فاخرة مع مسبح خاص بإطلالة على حقول الارز'],
    },
    {
        hotelName: 'Ulaman Eco Luxury',
        hotelRoomTypes: ['Cocoon upper deluxe'],
    },
    {
        hotelName: 'Aksari Ubud',
        hotelRoomTypes: ['فيلا مع مسبح خاص بإطلاله علئ النهر', 'فيلا جراند رويال مع مسبح خاص', 'فيلا جراند رويال مع مسبح خاص بإطلاله علئ النهر', 'فيلا جراند رويال على النهر مع مسبح خاص', 'اكساري سويت', 'جراند اكساري سويت', 'سويت توين بإطلالة على الغابة', 'سويت دبل بإطلالة على الغابة'],
    },
    {
        hotelName: 'Amarea Ubud',
        hotelRoomTypes: ['اوبود روم', 'اوبود سويت مع حوض إستحمام', 'كوخ اوبود مع حوض إستحمام', 'كوخ جراند مع حوض إستحمام', 'فيلا ذكية مع مسبح خاص وحوض إستحمام', 'فيلا جراند لوفت مع مسحب خاص بإطلالة على الغابة'],
    },
    {
        hotelName: 'Asvara Villa',
        hotelRoomTypes: ['فيلا رويال مع مسبح خاص وجاكوزي', 'فيلا جراند مع مسبح خاص وجاكوزي بإطلالة على مزرعة الأرز'],
    },
    {
        hotelName: 'Kaamala Resort',
        hotelRoomTypes: ['فيلا مع مسبح خاص', 'فيلا جراند رويال مع مسبح خاص بإطلالة على مزرعة الأرز', 'سويت روم بإطلالة على الغابة', 'جراند سويت بإطلالة على الغابة'],
    },
    {
        hotelName: 'Natya Resort',
        hotelRoomTypes: ['فيلا رويال مع مسبح خاص', 'فيلا لوكسري مع مسبح خاص'],
    },
    {
        hotelName: 'Padma Resort',
        hotelRoomTypes: ['بريمير روم', 'بريمير ديلوكس روم', 'برمير اوفرسايز توين', 'بريمير كلوب روم', 'سويت روم', 'فاميلي سويت'],
    },
    {
        hotelName: 'Seres Spring',
        hotelRoomTypes: ['ديلوكس روم', 'ديلوكس روم بول اكسس', 'بريميوم روم', 'بريميوم بول اكسس', 'فيلا اناندا العلوية مع مسبح خاص', 'فيلا اناندا المنخفضة مع مسبح خاص'],
    },
    {
        hotelName: 'The Westin Ubud',
        hotelRoomTypes: ['ديلوكس روم بإطلالة على الحديقة', 'ديلوكس روم بإطلالة على المسبح', 'جونيور سويت', 'سويت تنفيذي'],
    },
    {
        hotelName: 'Black Penny',
        hotelRoomTypes: ['فيلا مع مسبح خاص', 'فيلا ديلوكس مع مسبح خاص بإطلالة على الوادي', 'فيلا ديلوكس مع مسبح خاص بإطلالة على النهر'],
    },
    {
        hotelName: 'Dedary Resort',
        hotelRoomTypes: ['فيلا مع مسبح خاص وحوض سباحة', 'فيلا جاردن مع مسبح خاص وحوض سباحة', 'فيلا مع مسبح خاص وحوض سباحة مع إطلالة على الغابة'],
    },
    {
        hotelName: 'Komaneka Rasa Sayang',
        hotelRoomTypes: ['ديلوكس روم', 'فيلا روفتوب جاردن'],
    },
    {
        hotelName: 'Komaneka Rasa Sayang',
        hotelRoomTypes: ['ديلوكس روم', 'فيلا روفتوب جاردن'],
    },





    /* Nusa Dua */
    {
        hotelName: 'The Apurva Kempinski',
        hotelRoomTypes: ['جراند ديلوكس روم', 'جراند ديلوكس اوشن كورت', 'جراند ديلوكس لاجون روم', 'جونيور سويت مع مسبح خاص على المنحدر', 'جونيور سويت مع مسبح اوشن خاص على المنحدر', 'فيلا سنجاساري', 'فيلا سريواجايا مع مسبح خاص'],
    },
    {
        hotelName: 'Ulu Segara',
        hotelRoomTypes: ['جناح مطل على المحيط', 'سويت اوشن روم بإطلالة على المحيط', 'فيلا اوشن مع مسبح خاص بإطلالة على المحيط', 'فيلا مع مسبح خاص باطلالة على المحيط', 'جناح اوشن بإطلالة على المحيط', 'فيلا مع مسبح خاص'],
    },
    {
        hotelName: 'Merusaka',
        hotelRoomTypes: ['ديلوكس روم', 'ديلوكس روم مع مسبح', 'سويت روم', 'سويت اوشن روم', 'فيلا مع مسبح'],
    },
    {
        hotelName: 'The Nest',
        hotelRoomTypes: ['ديلوكس روم', 'سويت روم', 'تنفيذي روم'],
    },
    {
        hotelName: 'Agranusa Villa',
        hotelRoomTypes: ['فيلا', 'فيلا مع مسبح خاص'],
    },
    {
        hotelName: 'Renaissance Nusa Dua',
        hotelRoomTypes: ['ديلوكس روم', 'ديلوكس روم بإطلالة على البحر'],
    },
    {
        hotelName: 'Sofitel Nusa Dua',
        hotelRoomTypes: ['لوكسري روم', 'لوكسري روم بإطلالة على المنتجع', 'لوكسري روم مع مسبح خاص', 'فيلا مع مسبح خاص', 'باستينج سويت'],
    },





    /* Seminyak */
    {
        hotelName: 'The Trans Bali',
        hotelRoomTypes: ['بريمير روم بإطلالة على المسبح', 'بريمير التومنت', 'بريمير كلوب روم', 'فيلا مسبح'],
    },
    {
        hotelName: 'Indigo Bali',
        hotelRoomTypes: ['ستاندر رووم', 'ستاندر رووم بإطلالة على الحديقة', 'ستاندر رووم كورتيارد اكسس', 'ستاندر رووم بإطلالة جزئية على المحيط', 'سويت روم بإطلالة على الحديقة', 'فيلا وانجسا مع مسبح خاص'],
    },
    {
        hotelName: 'Sini Vie Villa',
        hotelRoomTypes: ['فيلا ذكية مع مسبح خاص وجاكوزي', 'فيلا ذكية جراند مع مسبح خاص وجاكوزي'],
    },
    {
        hotelName: 'Impiana Villa',
        hotelRoomTypes: ['فيلا مع مسبح خاص'],
    },
    {
        hotelName: 'W Bali',
        hotelRoomTypes: ['وندرفل جاردن فيو', 'مواجهة للمحيط', 'فيلا مارفيلوز مع مسبح خاص', 'فيلا مع مسبح خاص'],
    },
    {
        hotelName: 'Aleva Villa',
        hotelRoomTypes: ['فيلا رويال مع مسبح خاص'],
    },
    {
        hotelName: 'Monolocale Resort',
        hotelRoomTypes: ['فيلا مع مسبح خاص', 'فيلا جراند مع مسبح خاص', 'فيلا رويال مع مسبح خاص', 'جناح سمنياك دبل', 'جناح سمنياك توين'],
    },
    {
        hotelName: 'Ize Seminyak',
        hotelRoomTypes: ['ديلوكس روم', 'ديلوكس جاكوزي', 'كلوب روم', 'ديلوكس روم مع مسبح', 'جونيور سويت'],
    },
    {
        hotelName: 'Aksari Villa',
        hotelRoomTypes: ['فيلا رويال ذكية مع مسبح خاص وحوض إستحمام'],
    },
    {
        hotelName: 'Astera Villa',
        hotelRoomTypes: ['فيلا رويال مع مسبح خاص'],
    },
    {
        hotelName: 'Ayona Villa',
        hotelRoomTypes: ['فيلا مع مسبح خاص وحوض إستحمام', 'فيلا جراند مع مسبح خاص وحوض إستحمام'],
    },
    {
        hotelName: 'Cyrus Villa',
        hotelRoomTypes: ['فيلا مع مسبح خاص وحوض إستحمام', 'فيلا جراند مع مسبح خاص وحوض سباحة'],
    },
    {
        hotelName: 'Double Six Luxury',
        hotelRoomTypes: ['سويت ديلوكس بإطلالة على المحيط', 'سويت ديلوكس مع مسبح خاص', 'سويت بريمير بول اكسس'],
    },
    {
        hotelName: 'Potato Head Suites',
        hotelRoomTypes: ['ستوديو شروق الشمس', 'بامبو ستوديو', 'ديسا ستوديو', 'ستوديو الإقامة', 'ستوديو مواجهة للمحيط', 'ستوديو الجزيرة', 'سويت روفتوب'],
    },
    {
        hotelName: 'Sana Vie Villa',
        hotelRoomTypes: ['فيلا ذكية مع مسبح خاص وحوض إستحمام', 'فيلا رويال ذكية مع مسبح خاص وحوض إستحمام', 'فيلا مع مسبح خاص وحوض إستحمام'],
    },
    {
        hotelName: 'Claremont Villa',
        hotelRoomTypes: ['فيلا مع مسبح خاص'],
    },
    {
        hotelName: 'Elysian Boutique Villa',
        hotelRoomTypes: ['فيلا مع مسبح خاص'],
    },
    {
        hotelName: 'Samaya Seminyak',
        hotelRoomTypes: ['فيلا رويال كورتيارد', 'فيلا مع مسبح خاص'],
    },
    {
        hotelName: 'Aloft Seminyak',
        hotelRoomTypes: ['الوفت روم', 'الوفت بلكوني روم'],
    },
    {
        hotelName: 'La Mira Villa',
        hotelRoomTypes: ['فيلا رويال مع مسبح خاص وزحليقة مائية'],
    },
    {
        hotelName: 'Seminyak Sanctuary',
        hotelRoomTypes: ['فيلا جراند مع مسبح خاص وحوض إستحمام'],
    },
    {
        hotelName: 'Kolila Villa',
        hotelRoomTypes: ['فيلا مع مسبح خاص'],
    },
    {
        hotelName: 'La Vie Villa',
        hotelRoomTypes: ['فيلا مع مسبح خاص وحوض إستحمام', 'فيلا رويال مع مسبح خاص وحوض إستحمام'],
    },








    /* Kuta */
    {
        hotelName: 'Sheraton Kuta',
        hotelRoomTypes: ['جيست روم', 'جيست روم بإطلالة على المحيط', 'جونيور سويت بإطلالة على المحيط', 'جيست روم بإطلالة جزئية على المحيط', 'لارجر سويت مواجهة للمحيط'],
    },
    {
        hotelName: 'Aryaduta Kuta',
        hotelRoomTypes: ['ديلوكس روم', 'ديلوكس بريمير روم', 'سوبريور روم', 'جراند ديلوكس روم', 'جراند ديلوكس بريمير', 'تنفيذي روم', 'فاميلي روم'],
    },
    {
        hotelName: 'Tribe',
        hotelRoomTypes: ['كومفورت بلكوني', 'كومفورت XL بلكوني'],
    },
    {
        hotelName: 'Aloft Kuta',
        hotelRoomTypes: ['الوفت', 'الوفت بإطلالة على المسبح'],
    },
    {
        hotelName: 'Paasha Atelier',
        hotelRoomTypes: ['سوبريور بلكوني', 'سوبريور بلوكوني بإطلالة على المسبح', 'ديلوكس روم', 'ديلوكس روم مع مسبح', 'سويت ديلوكس مع مسبح', 'جونيور سويت'],
    },
    {
        hotelName: 'Mamaka By Ovolo',
        hotelRoomTypes: ['بالي هاي روم', 'كوكومو روم', 'سمر جاردين تراس', 'سواجر سويت'],
    },
    {
        hotelName: 'Beachwalk Residence',
        hotelRoomTypes: ['ريسيدينس روم', 'ريسيدينس روم بإطلالة على الحديقة', 'سويت روم'],
    },
    {
        hotelName: 'Discovery Kartika Plaza',
        hotelRoomTypes: ['ديلوكس روم بإطلالة على الحديقة', 'ديلوكس روم جاردن اكسس', 'ديلوكس روم بإطلالة على المسبح', 'ديلوكس روم بإطلالة على المحيط', 'ديلوكس روم بإطلالة على المحيط', 'جرادن ديلوكس مواجهة للمحيط', 'جونيور سويت', 'فاميلي سويت', 'ديسكوفيري سويت'],
    },
    {
        hotelName: 'Ramayana Suites',
        hotelRoomTypes: ['جاردن ديلوكس روم', 'بريمير روم', 'سويت روم', 'جونيور سويت روم', 'ريسورت روم', 'فاميلي روم', 'لومبونغ روم', 'فاميلي سويت متصل ببعض', 'سيتا سويت'],
    },
    {
        hotelName: 'The Anvaya Beach',
        hotelRoomTypes: ['ديلوكس روم', 'بريمير روم'],
    },
    {
        hotelName: 'Fairfield Marriott',
        hotelRoomTypes: ['سوبريور روم', 'سوبريور بلكوني', 'ديلوكس روم', 'جونيور سويت'],
    },








    /* Jimbaran */
    {
        hotelName: 'Four Seasons Jimbaran',
        hotelRoomTypes: ['جاردن فيلا', 'بريمير اوشن فيلا'],
    },
    {
        hotelName: 'Movenpick Jimbaran',
        hotelRoomTypes: ['كلاسيك روم', 'كلاسيك روم بإطلالة على المسبح', 'جونيور سويت', 'فاميلي دوبلاكس روم', 'فاميلي دوبلاكس روم بإطلالة على المسبح', 'بريميوم سويت روم', 'جيمباران سويت مع مسبح'],
    },
    {
        hotelName: 'Platinum Jimbaran',
        hotelRoomTypes: ['اوشن روم بإطلالة على المحيط', 'ديلوكس روم بإطلالة على المحيط', 'ديلوكس فاميلي بإطلالة على المحيط', 'فاميلي سويت بإطلالة على المحيط', 'سويت تنفيذي بإطلالة على المحيط', 'بزنس روم بإطلالة على المحيط', 'جيمباران روم بإطلالة على المحيط', 'بنتهاوس بإطلالة على المحيط'],
    },
    {
        hotelName: 'Le Meridien',
        hotelRoomTypes: ['كلاسيك روم', 'ديلوكس لاجون فيو', 'ديلوكس لاجون اكسس', 'اكوا سويت ستوديو لاجون فيو', 'اكوا سويت استوديو لاجون اكسس', 'اكوا بول سكاي بنتهاوس', 'فيلا سكاي بإطلالة على المحيط'],
    },
    {
        hotelName: 'Intercontinental Bali',
        hotelRoomTypes: ['كلاسيك بلكوني بإطلالة على الحديقة', 'Classic Singaraja Space Access Garden View', 'Premium Mezzanine Singaraja Space Access', 'Premium Club Lounge Access Garden View Balcony', 'Premium Mezzanine Area Club Lounge Access Balcony', 'Suite Club Lounge Access'],
    },







    /* Uluwatu */
    {
        hotelName: 'Umana Bali',
        hotelRoomTypes: ['فيلا تروبيكال جاردن مع مسبح', 'فيلا اوشن مع مسبح', 'فيلا اوشن جزئية مع مسبح', 'فيلا بانورميك اوشن مع مسبح'],
    },
    {
        hotelName: 'Jumeirah Bali',
        hotelRoomTypes: ['فيلا جاردن مع مسبح خاص', 'فيلا غروب الشمس مع مسبح خاص', 'فيلا بريمير جاردن مع مسبح خاص', 'فيلا اوشن مع مسبح خاص (منظر جزئي على الشاطئ)'],
    },
    {
        hotelName: 'Renaissance Uluwatu',
        hotelRoomTypes: ['ديلوكس روم', 'ديلوكس اوشن بلكوني', 'ديلوكس اوشن تراس', 'جونيور سويت', 'سويت تنفيذي'],
    },












    /* Jakarta */
    {
        hotelName: 'Ascott Jakarta',
        hotelRoomTypes: ['ستوديو بريمير روم مع مسبح خاص بإطلالة على المدينة', 'تنفيذي روم مع مسبح خاص بإطلالة على المدينة'],
    },
    {
        hotelName: 'Citadines Sudirman',
        hotelRoomTypes: ['ديلوكس روم بإطلالة على المدينة', 'ستوديو تنفيذي', 'فاميلي سويت'],
    },
    {
        hotelName: 'Hilton DoubleTree',
        hotelRoomTypes: ['جيست روم بإطلالة على المدينة', 'ديلوكس روم بإطلالة على المدينة', 'جناح كينغ تنفيذي بإطلالة على المدينة'],
    },
    {
        hotelName: 'Parkroyal Serviced Suites',
        hotelRoomTypes: ['سويت روم', 'سويت ديلوكس روم', 'بريمير سويت روم', 'سويت استوديو', 'سويت تنفيذي'],
    },
    {
        hotelName: 'Somerset Sudirman',
        hotelRoomTypes: ['تنفيذي روم بإطلالة على المدينة', 'ستوديو تنفيذي بإطلالة على المدينة', 'ستوديو بريمير بإطلالة على المدينة', 'سويت تنفيذي بإطلالة على المدينة', 'كلوب روم بإطلالة على المدينة', 'كلاسيك روم بإطلالة على المدينة'],
    },
    {
        hotelName: 'Aloft Wahied Hasiem',
        hotelRoomTypes: ['الوفت روم بإطلالة على المدينة'],
    },
    {
        hotelName: 'Ascott Sudirman',
        hotelRoomTypes: ['بريمير روم بإطلالة على المدينة', 'ديلوكس روم بإطلالة على المدينة', 'سويت روم بإطلالة على المدينة', 'ستوديو بريمير'],
    },
    {
        hotelName: 'Kempinski Jakarta',
        hotelRoomTypes: ['ديلوكس روم', 'جراند ديلوكس روم', 'جراند ديلوكس تنفيذي', 'صالون سويت'],
    },
    {
        hotelName: 'Pullman Park',
        hotelRoomTypes: ['ديلوكس روم', 'ديلوكس روم بإطلالة على الحديقة', 'سويت تنفيذي روم', 'ديلوكس تنفيذي مع امكانية الوصول إالى الصالة التنفيذية', 'سويت تنفيذي مع امكانية الوصول إالى الصالة التنفيذية'],
    },
    {
        hotelName: 'Vertu Harmoni',
        hotelRoomTypes: ['سوبريور روم بإطلالة على المدينة', 'ڤي روم بإطلالة على المدينة', 'فيرتو روم بإطلالة على المدينة', 'فيرتو تنفيذي روم بإطلالة على المدينة', 'فيرتو سويت بإطلالة على المدينة'],
    },
    {
        hotelName: 'Pan Pacific',
        hotelRoomTypes: ['بريمير روم بإطلالة على المدينة', 'ديلوكس روم بإطلالة على المدينة', 'جناح بإطلالة على المدينة'],
    },
    {
        hotelName: 'Ascott Kuningan',
        hotelRoomTypes: ['بريمير روم بإطلالة على المدينة', 'التنفيذي روم بإطلالة على المدينة'],
    },
    {
        hotelName: 'Grand Mercure',
        hotelRoomTypes: ['بريمير روم بإطلالة على المدينة', 'التنفيذي روم بإطلالة على المدينة'],
    },
    {
        hotelName: 'Parkroyal Suites',
        hotelRoomTypes: ['سويت استوديو', 'سويت روم', 'سويت ديلوكس روم', 'بريمير سويت روم', 'سويت تنفيذي روم'],
    },
    {
        hotelName: 'Sheraton Soekarno',
        hotelRoomTypes: ['جاردن ديلوكس روم'],
    },
    {
        hotelName: 'Grove Suites',
        hotelRoomTypes: ['سويت روم بإطلالة على المدينة', 'سويت روم بإطلالة على المسبح'],
    },
    {
        hotelName: 'FM7 Tangerang',
        hotelRoomTypes: ['سوبريور روم', 'ديلوكس روم', 'ديلوكس روم بلس', 'بريمير روم', 'بريمير فاميلي', 'جونيور سويت'],
    },





    {
        hotelName: 'Merlynn Park',
        hotelRoomTypes: ['التنفيذي روم', 'تيفاني سويت', 'فاميلي سويت', 'برادا سويت', 'بولجاري سويت', 'ارماني سويت', 'مرليان سويت', 'ذا ريسيدينس', 'امباير مينشن'],
    },









    /* Puncak */
    {
        hotelName: 'Grand Aston',
        hotelRoomTypes: ['ديلوكس روم بإطلالة على الجبل', 'جونيور سويت بإطلالة على الجبل', 'جونيور سويت بإطلالة على الجبل والمسبح', 'جونيور سويت مع مسبح بإطلالة على الجبل', 'ستوديو ديلوكس بإطلالة على الجبل', 'جاردن روم بإطلالة على الجبل ', 'جاردن روم مع مسبح بإطلالة على الجبل', 'ديلوكس روم بإطلالة على الجبل', 'بانوراميك روم بإطلالة على الجبل', 'سويت تنفيذي بإطلالة على الجبل', 'سويت تنفيذي بإطلالة على المسبح'],
    },
    {
        hotelName: 'Le Eminence',
        hotelRoomTypes: ['جونيور سويت بإطلالة على الجبل', 'جونيور سويت بإطلالة على الجبل والنهر', 'جونيور سويت مع شرفة بإطلالة على الجبل', 'رويال سويت', 'رويال سويت مع مسبح', 'ايميننس سويت'],
    },
    {
        hotelName: 'Botanica Sanctuary',
        hotelRoomTypes: ['سوبريور روم', 'ديلوكس روم', 'برمير روم', 'ذا فالي سويت'],
    },
    {
        hotelName: 'Pesona Alam',
        hotelRoomTypes: ['ديلوكس روم', 'ديلوكس روم بإطلالة على الجبل', 'فيلا', 'فيلا سوبريور'],
    },










    /* Bandung */
    {
        hotelName: 'Courtyard Marriott',
        hotelRoomTypes: ['ديلوكس روم بإطلالة على المسبح', 'ديلوكس روم بإطلالة على المدينة', 'بريمير روم', 'بريمير سويت', 'سويت تنفيذي', 'كوربورات سويت', 'كورتيارد سويت', 'رويال سويت'],
    },
    {
        hotelName: 'Sheraton Bandung',
        hotelRoomTypes: ['ذا كلاسيك', 'ذا بريمير', 'ذا امباسادور'],
    },
    {
        hotelName: 'Trans Luxury',
        hotelRoomTypes: ['بريمير روم بإطلالة على المدينة'],
    },
    {
        hotelName: 'Four Points Sheraton',
        hotelRoomTypes: ['كلاسيك روم', 'بريميوم روم', 'ديلوكس روم', 'سويت تنفيذي', 'بريمير سويت'],
    },









    /* Lombok */
    {
        hotelName: 'Kalandara',
        hotelRoomTypes: ['فيلا مع مسبح خاص بإطلالة على المحيط'],
    },


];


