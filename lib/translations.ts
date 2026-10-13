export type Language = "en" | "hi" | "te";

export interface TranslationDictionary {
  // Navigation
  browseEquipment: string;
  howItWorks: string;
  listEquipment: string;
  dashboard: string;
  adminDashboard: string;
  designSystem: string;
  login: string;
  signup: string;
  tollFreeSupport: string;
  farmMachinerySharing: string;
  
  // Mobile / Bottom Nav
  home: string;
  search: string;
  bookings: string;
  list: string;
  account: string;

  // Hero Section
  govtBadge: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  
  // Search Form
  equipmentType: string;
  allEquipment: string;
  tractorsCategory: string;
  harvestersCategory: string;
  waterPumpsCategory: string;
  rotavatorsCategory: string;
  seedersCategory: string;
  sprayersCategory: string;
  locationLabel: string;
  detectGps: string;
  whenNeed: string;
  anytimeNext7Days: string;
  todayUrgent: string;
  thisWeekend: string;
  nextWeek: string;
  searchEquipmentBtn: string;

  // Quick stats
  statMachines: string;
  statMachinesLabel: string;
  statVillages: string;
  statVillagesLabel: string;
  statFarmers: string;
  statFarmersLabel: string;
  statSavings: string;
  statSavingsLabel: string;

  // Categories
  browseCategories: string;
  browseCategoriesSub: string;
  catTractor: string;
  catTractorDesc: string;
  catHarvester: string;
  catHarvesterDesc: string;
  catWaterPump: string;
  catWaterPumpDesc: string;
  catRotavator: string;
  catRotavatorDesc: string;
  catSeeder: string;
  catSeederDesc: string;
  catSprayer: string;
  catSprayerDesc: string;
  catDrone: string;
  catDroneDesc: string;
  catTrailer: string;
  catTrailerDesc: string;
  availableCount: string;

  // Featured Equipment
  featuredTitle: string;
  featuredSubtitle: string;
  viewAllEquipment: string;
  perDay: string;
  perHour: string;
  verifiedOwner: string;
  operatorIncluded: string;
  selfDriven: string;
  deliveryAvailable: string;
  bookNow: string;
  viewDetails: string;
  kmAway: string;

  // How It Works
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;

  // Trust Badges
  trustVerified: string;
  trustVerifiedSub: string;
  trustPricing: string;
  trustPricingSub: string;
  trustDelivery: string;
  trustDeliverySub: string;
  trustHelpline: string;
  trustHelplineSub: string;

  // Host CTA Banner
  hostBannerTitle: string;
  hostBannerSub: string;
  hostBannerBtn: string;
  calculateEarningsBtn: string;

  // FAQs
  faqTitle: string;
  faqSubtitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;

  // Footer
  footerDesc: string;
  quickLinks: string;
  equipmentCategories: string;
  farmerSupport: string;
  copyright: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    // Navigation
    browseEquipment: "Browse Equipment",
    howItWorks: "How It Works",
    listEquipment: "List Equipment",
    dashboard: "Dashboard",
    adminDashboard: "Admin Portal",
    designSystem: "Design System",
    login: "Log in",
    signup: "Sign up",
    tollFreeSupport: "Toll Free Support:",
    farmMachinerySharing: "FARM MACHINERY SHARING",

    // Mobile / Bottom Nav
    home: "Home",
    search: "Search",
    bookings: "Bookings",
    list: "List",
    account: "Account",

    // Hero Section
    govtBadge: "Govt. e-NAM compliant · 10,000+ Verified Village Rentals",
    heroTitle1: "Rent the right equipment, ",
    heroTitleHighlight: "right next door.",
    heroSubtitle: "Directly rent verified tractors, harvesters, rotavators, and pumps from nearby farm owners at honest hourly and daily rates.",

    // Search Form
    equipmentType: "Equipment Type",
    allEquipment: "All Equipment (Tractors, Pumps, Harvesters)",
    tractorsCategory: "Tractors (35-75 HP)",
    harvestersCategory: "Combine Harvesters",
    waterPumpsCategory: "Water Pumps & Motors",
    rotavatorsCategory: "Rotavators & Tillers",
    seedersCategory: "Seeders & Drills",
    sprayersCategory: "Sprayers & Agri Drones",
    locationLabel: "Village / District / PIN",
    detectGps: "Detect GPS",
    whenNeed: "When do you need it?",
    anytimeNext7Days: "Anytime / Next 7 Days",
    todayUrgent: "Today (Urgent Booking)",
    thisWeekend: "This Weekend",
    nextWeek: "Next Week",
    searchEquipmentBtn: "Search Equipment",

    // Quick stats
    statMachines: "1,500+",
    statMachinesLabel: "Active Machines",
    statVillages: "340+",
    statVillagesLabel: "Village Hubs",
    statFarmers: "12,800+",
    statFarmersLabel: "Happy Farmers",
    statSavings: "₹2.4 Cr+",
    statSavingsLabel: "Rental Savings",

    // Categories
    browseCategories: "Browse by Category",
    browseCategoriesSub: "Modern machinery suited for every stage of your crop cycle",
    catTractor: "Tractor",
    catTractorDesc: "40-75 HP utility & 4WD tractors",
    catHarvester: "Harvester",
    catHarvesterDesc: "Multi-crop combine & straw reapers",
    catWaterPump: "Water Pump",
    catWaterPumpDesc: "Solar, diesel & 5-10 HP electric pumps",
    catRotavator: "Rotavator",
    catRotavatorDesc: "5 to 8 feet heavy duty rotary tillers",
    catSeeder: "Seeder",
    catSeederDesc: "Pneumatic seed & fertilizer drills",
    catSprayer: "Sprayer",
    catSprayerDesc: "Boom sprayers & tractor mounted",
    catDrone: "Agri Drone",
    catDroneDesc: "DGCA certified pesticide spray drones",
    catTrailer: "Trailer",
    catTrailerDesc: "Hydraulic tipping trolleys 3-5 ton",
    availableCount: "available",

    // Featured Equipment
    featuredTitle: "Popular Machinery Near You",
    featuredSubtitle: "Available for immediate booking with verified owners and trained operators",
    viewAllEquipment: "View All 1,500+ Machines",
    perDay: "/ day",
    perHour: "/ hr",
    verifiedOwner: "Verified Owner",
    operatorIncluded: "Operator Included",
    selfDriven: "Self Driven",
    deliveryAvailable: "Delivery Available",
    bookNow: "Book Now",
    viewDetails: "View Details",
    kmAway: "km away",

    // How It Works
    howItWorksTitle: "How KisanRent Works",
    howItWorksSubtitle: "Four simple steps to mechanize your farm in minutes",
    step1Title: "Find Nearby Machinery",
    step1Desc: "Search by tractor, harvester, or pump. Filter by distance, price, and operator preference in your village circle.",
    step2Title: "Book Confirmed Dates",
    step2Desc: "Select hourly or daily requirements. Connect with verified RC-checked owners with transparent rates.",
    step3Title: "Secure Digital Escrow",
    step3Desc: "Pay securely via UPI or Card. Your deposit is safely held until the machinery arrives and is verified.",
    step4Title: "Farm With Confidence",
    step4Desc: "Equipment delivered directly to your farm gate, complete with optional skilled local operators.",

    // Trust Badges
    trustVerified: "100% Verified Owners",
    trustVerifiedSub: "RC & Aadhaar KYC validated",
    trustPricing: "Fair Transparent Pricing",
    trustPricingSub: "No hidden charges per day/hr",
    trustDelivery: "On-Time Farm Delivery",
    trustDeliverySub: "Trained local operators",
    trustHelpline: "24/7 Farmer Helpline",
    trustHelplineSub: "1800-120-FARM (Toll Free)",

    // Host CTA Banner
    hostBannerTitle: "Own a Tractor or Harvester? Earn ₹45,000+ Every Month",
    hostBannerSub: "Turn your idle agricultural machinery into steady passive income by renting it to trusted farmers in your village circle.",
    hostBannerBtn: "List Your Machinery for Free",
    calculateEarningsBtn: "Calculate Earnings",

    // FAQs
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about renting farm machinery with KisanRent",
    faq1Q: "How does KisanRent verify equipment and owners?",
    faq1A: "Every owner uploads registration certificates (RC), tractor insurance, and Aadhaar-based KYC. Our local field coordinators physically inspect machinery condition and verify serial numbers before activating any listing.",
    faq2Q: "What if the tractor breaks down during my rental?",
    faq2A: "All KisanRent bookings are covered under our Breakdown Guarantee. If machinery suffers a mechanical fault, the owner will either provide a quick repair or a replacement unit, and you are not charged for any downtime.",
    faq3Q: "Can I request a trained driver/operator?",
    faq3A: "Yes! Many listings include an experienced local tractor driver who knows local soil conditions and implement operations. You can toggle 'Operator Included' directly in search filters.",
    faq4Q: "How does equipment delivery to my farm work?",
    faq4A: "Owners within 15–30 km can drive or tow the equipment right to your farmland coordinates for a standard flat delivery fee, or you may choose self-pickup from their depot.",
    faq5Q: "How and when do equipment owners get paid?",
    faq5A: "Owners receive rental payouts straight into their linked bank accounts via UPI / NEFT within 24 hours of successful job completion and farmer handover confirmation.",

    // Footer
    footerDesc: "India's trusted farm machinery rental platform. Empowering farmers with affordable mechanization.",
    quickLinks: "Quick Links",
    equipmentCategories: "Equipment Categories",
    farmerSupport: "Farmer Support",
    copyright: "© 2026 KisanRent. All rights reserved. Made for Indian Farmers.",
  },

  hi: {
    // Navigation
    browseEquipment: "उपकरण देखें",
    howItWorks: "यह कैसे काम करता है",
    listEquipment: "मशीन लिस्ट करें",
    dashboard: "डैशबोर्ड",
    adminDashboard: "एडमिन पोर्टल",
    designSystem: "डिज़ाइन सिस्टम",
    login: "लॉग इन",
    signup: "साइन अप",
    tollFreeSupport: "टोल-फ्री हेल्पलाइन:",
    farmMachinerySharing: "कृषि यंत्र साझाकरण मंच",

    // Mobile / Bottom Nav
    home: "होम",
    search: "खोजें",
    bookings: "बुकिंग",
    list: "लिस्ट करें",
    account: "खाता",

    // Hero Section
    govtBadge: "ई-नाम (e-NAM) अनुरूप · 10,000+ सत्यापित ग्रामीण किराए",
    heroTitle1: "सही कृषि उपकरण किराए पर लें, ",
    heroTitleHighlight: "अपने ही गांव में।",
    heroSubtitle: "सत्यापित ट्रैक्टर, हार्वेस्टर, रोटावेटर और पंप सीधे नजदीकी किसानों से किफायती प्रति घंटे या दैनिक दरों पर किराए पर लें।",

    // Search Form
    equipmentType: "उपकरण का प्रकार",
    allEquipment: "सभी उपकरण (ट्रैक्टर, पंप, हार्वेस्टर)",
    tractorsCategory: "ट्रैक्टर (35-75 HP)",
    harvestersCategory: "कंबाइन हार्वेस्टर",
    waterPumpsCategory: "पानी के पंप और मोटर",
    rotavatorsCategory: "रोटावेटर और टिलर",
    seedersCategory: "सीडर और बुवाई मशीन",
    sprayersCategory: "स्प्रेयर और कृषि ड्रोन",
    locationLabel: "गांव / जिला / पिन कोड",
    detectGps: "जीपीएस से खोजें",
    whenNeed: "आपको कब आवश्यकता है?",
    anytimeNext7Days: "कभी भी / अगले 7 दिन",
    todayUrgent: "आज ही (तत्काल बुकिंग)",
    thisWeekend: "इस सप्ताहांत",
    nextWeek: "अगले सप्ताह",
    searchEquipmentBtn: "उपकरण खोजें",

    // Quick stats
    statMachines: "1,500+",
    statMachinesLabel: "सक्रिय मशीनें",
    statVillages: "340+",
    statVillagesLabel: "गांव केंद्र",
    statFarmers: "12,800+",
    statFarmersLabel: "संतुष्ट किसान",
    statSavings: "₹2.4 करोड़+",
    statSavingsLabel: "किसानों की बचत",

    // Categories
    browseCategories: "श्रेणी के अनुसार उपकरण",
    browseCategoriesSub: "खेती के हर चरण के लिए आधुनिक और सक्षम कृषि मशीनरी",
    catTractor: "ट्रैक्टर",
    catTractorDesc: "40-75 HP यूटिलिटी और 4WD ट्रैक्टर",
    catHarvester: "हार्वेस्टर",
    catHarvesterDesc: "मल्टी-क्रॉप कंबाइन और रीपर",
    catWaterPump: "पानी का पंप",
    catWaterPumpDesc: "सोलर, डीजल और 5-10 HP इलेक्ट्रिक पंप",
    catRotavator: "रोटावेटर",
    catRotavatorDesc: "5 से 8 फीट भारी रोटरी टिलर",
    catSeeder: "सीडर",
    catSeederDesc: "बीज और खाद बुवाई मशीन",
    catSprayer: "स्प्रेयर",
    catSprayerDesc: "बूम और ट्रैक्टर माउंटेड स्प्रेयर",
    catDrone: "कृषि ड्रोन",
    catDroneDesc: "कीटनाशक छिड़काव हेतु प्रमाणित ड्रोन",
    catTrailer: "ट्रेलर / ट्रॉली",
    catTrailerDesc: "हाइड्रोलिक टिपिंग ट्रॉली 3-5 टन",
    availableCount: "उपलब्ध",

    // Featured Equipment
    featuredTitle: "आपके निकटतम लोकप्रिय उपकरण",
    featuredSubtitle: "सत्यापित मालिकों और अनुभवी चालकों के साथ तत्काल बुकिंग हेतु उपलब्ध",
    viewAllEquipment: "सभी 1,500+ मशीनें देखें",
    perDay: "/ दिन",
    perHour: "/ घंटा",
    verifiedOwner: "सत्यापित मालिक",
    operatorIncluded: "चालक सहित",
    selfDriven: "स्वयं चालित",
    deliveryAvailable: "खेत तक डिलीवरी",
    bookNow: "अभी बुक करें",
    viewDetails: "विवरण देखें",
    kmAway: "किमी दूर",

    // How It Works
    howItWorksTitle: "किसानरेंट कैसे काम करता है",
    howItWorksSubtitle: "अपनी खेती को आधुनिक बनाने के चार आसान चरण",
    step1Title: "निकटतम मशीनरी खोजें",
    step1Desc: "ट्रैक्टर, हार्वेस्टर या पंप खोजें। अपने गांव के दायरे में दूरी, कीमत और चालक के अनुसार फिल्टर करें।",
    step2Title: "बुकिंग तिथियां चुनें",
    step2Desc: "घंटे या दिन के अनुसार चयन करें। पारदर्शी दरों पर आरसी-सत्यापित मालिकों से सीधा संपर्क करें।",
    step3Title: "सुरक्षित डिजिटल भुगतान",
    step3Desc: "यूपीआई या कार्ड द्वारा सुरक्षित भुगतान। मशीन आपके खेत पर पहुंचने तक आपकी राशि सुरक्षित रहती है।",
    step4Title: "निश्चिंत होकर खेती करें",
    step4Desc: "मशीनरी सीधे आपके खेत तक पहुंचाई जाती है, साथ ही कुशल स्थानीय चालक भी उपलब्ध हैं।",

    // Trust Badges
    trustVerified: "100% सत्यापित मालिक",
    trustVerifiedSub: "आरसी और आधार केवाईसी सत्यापित",
    trustPricing: "पारदर्शी और उचित दरें",
    trustPricingSub: "प्रति दिन या घंटे कोई छिपा शुल्क नहीं",
    trustDelivery: "समय पर खेत तक डिलीवरी",
    trustDeliverySub: "प्रशिक्षित स्थानीय ऑपरेटर",
    trustHelpline: "24/7 किसान हेल्पलाइन",
    trustHelplineSub: "1800-120-FARM (निःशुल्क)",

    // Host CTA Banner
    hostBannerTitle: "ट्रैक्टर या हार्वेस्टर है? हर महीने ₹45,000+ कमाएं",
    hostBannerSub: "अपने गांव के साथी किसानों को खाली समय में मशीन किराए पर देकर अतिरिक्त स्थिर आमदनी शुरू करें।",
    hostBannerBtn: "अपनी मशीन मुफ्त में लिस्ट करें",
    calculateEarningsBtn: "कमाई का अनुमान लगाएं",

    // FAQs
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSubtitle: "किसानरेंट से कृषि उपकरण किराए पर लेने से जुड़ी सभी महत्वपूर्ण जानकारियां",
    faq1Q: "किसानरेंट उपकरण और मालिकों का सत्यापन कैसे करता है?",
    faq1A: "प्रत्येक मालिक आरसी, बीमा और आधार केवाईसी जमा करता है। हमारे स्थानीय फील्ड समन्वयक मशीनरी का भौतिक निरीक्षण करते हैं।",
    faq2Q: "यदि किराए के दौरान ट्रैक्टर खराब हो जाए तो क्या होगा?",
    faq2A: "सभी बुकिंग ब्रेकडाउन गारंटी के तहत कवर हैं। खराबी होने पर मालिक त्वरित मरम्मत या वैकल्पिक मशीन उपलब्ध कराता है।",
    faq3Q: "क्या मुझे अनुभवी ट्रैक्टर चालक/ऑपरेटर मिल सकता है?",
    faq3A: "हाँ! कई लिस्टिंग में स्थानीय मिट्टी और औजारों के जानकार चालक शामिल होते हैं। आप 'चालक सहित' फिल्टर चुन सकते हैं।",
    faq4Q: "खेत तक उपकरण की डिलीवरी कैसे होती है?",
    faq4A: "15-30 किमी के दायरे में मालिक न्यूनतम शुल्क पर मशीन सीधे आपके खेत तक पहुंचाते हैं, या आप स्वयं ले सकते हैं।",
    faq5Q: "मालिकों को किराया कब और कैसे मिलता है?",
    faq5A: "काम सफलतापूर्वक पूरा होने और किसान द्वारा पुष्टि के 24 घंटे के भीतर यूपीआई या बैंक खाते में भुगतान हो जाता है।",

    // Footer
    footerDesc: "भारत का विश्वसनीय कृषि उपकरण साझाकरण मंच। किसानों को आधुनिक मशीनीकरण से सशक्त बनाना।",
    quickLinks: "त्वरित लिंक",
    equipmentCategories: "उपकरण श्रेणियां",
    farmerSupport: "किसान सहायता",
    copyright: "© 2026 किसानरेंट। सर्वाधिकार सुरक्षित। भारतीय किसानों के लिए समर्पित।",
  },

  te: {
    // Navigation
    browseEquipment: "పరికరాలు చూడండి",
    howItWorks: "ఇది ఎలా పనిచేస్తుంది",
    listEquipment: "యంత్రాన్ని చేర్చండి",
    dashboard: "డ్యాష్‌బోర్డ్",
    adminDashboard: "అడ్మిన్ పోర్టల్",
    designSystem: "డిజైన్ సిస్టమ్",
    login: "లాగిన్",
    signup: "సైన్ అప్",
    tollFreeSupport: "టోల్ ఫ్రీ సపోర్ట్:",
    farmMachinerySharing: "వ్యవసాయ యంత్రాల భాగస్వామ్యం",

    // Mobile / Bottom Nav
    home: "హోమ్",
    search: "శోధించండి",
    bookings: "బుకింగ్స్",
    list: "జాబితా",
    account: "ఖాతా",

    // Hero Section
    govtBadge: "ప్రభుత్వ e-NAM నిబంధనల ప్రకారం · 10,000+ ధృవీకరించబడిన గ్రామీణ అద్దెలు",
    heroTitle1: "సరైన వ్యవసాయ యంత్రాలు అద్దెకు తీసుకోండి, ",
    heroTitleHighlight: "మీ ఊరిలోనే.",
    heroSubtitle: "ధృవీకరించబడిన ట్రాక్టర్లు, హార్వెస్టర్లు, రోటవేటర్లు మరియు పంపులను నేరుగా సమీప రైతు యజమానుల నుండి సరసమైన గంట మరియు రోజువారీ ధరలకు అద్దెకు తీసుకోండి.",

    // Search Form
    equipmentType: "పరికరాల రకం",
    allEquipment: "అన్ని పరికరాలు (ట్రాక్టర్లు, పంపులు, హార్వెస్టర్లు)",
    tractorsCategory: "ట్రాక్టర్లు (35-75 HP)",
    harvestersCategory: "కంబైన్ హార్వెస్టర్లు",
    waterPumpsCategory: "నీటి పంపులు & మోటార్లు",
    rotavatorsCategory: "రోటవేటర్లు & టిల్లర్లు",
    seedersCategory: "సీడర్లు & విత్తన యంత్రాలు",
    sprayersCategory: "స్ప్రేయర్లు & అగ్రి డ్రోన్లు",
    locationLabel: "గ్రామం / జిల్లా / పిన్ కోడ్",
    detectGps: "GPS తో గుర్తించండి",
    whenNeed: "మీకు ఎప్పుడు అవసరం?",
    anytimeNext7Days: "ఎప్పుడైనా / రాబోయే 7 రోజుల్లో",
    todayUrgent: "ఈరోజే (తక్షణ బుకింగ్)",
    thisWeekend: "ఈ వారాంతంలో",
    nextWeek: "వచ్చే వారం",
    searchEquipmentBtn: "పరికరాలను శోధించండి",

    // Quick stats
    statMachines: "1,500+",
    statMachinesLabel: "అందుబాటులో ఉన్న యంత్రాలు",
    statVillages: "340+",
    statVillagesLabel: "గ్రామ కేంద్రాలు",
    statFarmers: "12,800+",
    statFarmersLabel: "సంతోషకరమైన రైతులు",
    statSavings: "₹2.4 కోట్లు+",
    statSavingsLabel: "రైతుల పొదుపు",

    // Categories
    browseCategories: "విభాగాల వారీగా పరికరాలు",
    browseCategoriesSub: "మీ పంట ప్రతి దశకు సరిపోయే ఆధునిక వ్యవసాయ పరికరాలు",
    catTractor: "ట్రాక్టర్",
    catTractorDesc: "40-75 HP యుటిలిటీ & 4WD ట్రాక్టర్లు",
    catHarvester: "హార్వెస్టర్",
    catHarvesterDesc: "మల్టీ-క్రాప్ కంబైన్ & స్ట్రా రీపర్లు",
    catWaterPump: "నీటి పంపు",
    catWaterPumpDesc: "సోలార్, డీజిల్ & 5-10 HP ఎలక్ట్రిక్ పంపులు",
    catRotavator: "రోటవేటర్",
    catRotavatorDesc: "5 నుండి 8 అడుగుల హెవీ డ్యూటీ రోటరీ టిల్లర్లు",
    catSeeder: "సీడర్",
    catSeederDesc: "విత్తనాలు & ఎరువుల డ్రిల్స్",
    catSprayer: "స్ప్రేయర్",
    catSprayerDesc: "బూమ్ స్ప్రేయర్లు & ట్రాక్టర్ మౌంటెడ్",
    catDrone: "అగ్రి డ్రోన్",
    catDroneDesc: "పురుగుమందుల పిచికారీ కోసం డీజీసీఏ డ్రోన్లు",
    catTrailer: "ట్రైలర్ / ట్రాలీ",
    catTrailerDesc: "హైడ్రాలిక్ టిప్పింగ్ ట్రాలీలు 3-5 టన్నులు",
    availableCount: "అందుబాటులో ఉన్నాయి",

    // Featured Equipment
    featuredTitle: "మీ సమీపంలోని ప్రముఖ యంత్రాలు",
    featuredSubtitle: "ధృవీకరించబడిన యజమానులు మరియు డ్రైవర్లతో తక్షణ బుకింగ్ కోసం సిద్ధం",
    viewAllEquipment: "అన్ని 1,500+ యంత్రాలను చూడండి",
    perDay: "/ రోజుకు",
    perHour: "/ గంటకు",
    verifiedOwner: "ధృవీకరించబడిన యజమాని",
    operatorIncluded: "ఆపరేటర్‌తో సహా",
    selfDriven: "స్వీయ డ్రైవింగ్",
    deliveryAvailable: "పొలం వద్దకు డెలివరీ",
    bookNow: "ఇప్పుడే బుక్ చేయండి",
    viewDetails: "వివరాలు చూడండి",
    kmAway: "కిమీ దూరంలో",

    // How It Works
    howItWorksTitle: "కిసాన్‌రెంట్ ఎలా పనిచేస్తుంది",
    howItWorksSubtitle: "మీ పొలంలో ఆధునిక యంత్రాలు ఉపయోగించడానికి 4 సులభమైన దశలు",
    step1Title: "సమీప యంత్రాలను శోధించండి",
    step1Desc: "ట్రాక్టర్, హార్వెస్టర్ లేదా పంపును శోధించండి. మీ గ్రామ పరిధిలో దూరం, ధర మరియు ఆపరేటర్ ప్రాధాన్యత ఆధారంగా ఫిల్టర్ చేయండి.",
    step2Title: "తేదీలను ఖరారు చేసుకోండి",
    step2Desc: "గంటలు లేదా రోజుల ప్రకారం ఎంచుకోండి. పారదర్శక ధరలతో RC ధృవీకరించబడిన యజమానులతో నేరుగా మాట్లాడండి.",
    step3Title: "సురక్షిత డిజిటల్ చెల్లింపు",
    step3Desc: "UPI లేదా కార్డు ద్వారా సురక్షితంగా చెల్లించండి. యంత్రం మీ పొలానికి చేరే వరకు మీ మొత్తం సురక్షితంగా ఉంటుంది.",
    step4Title: "ధైర్యంగా వ్యవసాయం చేయండి",
    step4Desc: "నైపుణ్యం కలిగిన స్థానిక డ్రైవర్లతో నేరుగా మీ పొలం వద్దకే యంత్రాలు డెలివరీ చేయబడతాయి.",

    // Trust Badges
    trustVerified: "100% ధృవీకరించబడిన యజమానులు",
    trustVerifiedSub: "RC & ఆధార్ KYC ధృవీకరించబడింది",
    trustPricing: "పారదర్శక ధరలు",
    trustPricingSub: "రోజు లేదా గంటకు ఎలాంటి దాగి ఉన్న ఛార్జీలు లేవు",
    trustDelivery: "సమయానికి పొలం వద్దకు డెలివరీ",
    trustDeliverySub: "శిక్షణ పొందిన స్థానిక ఆపరేటర్లు",
    trustHelpline: "24/7 రైతు హెల్ప్‌లైన్",
    trustHelplineSub: "1800-120-FARM (ఉచిత కాల్)",

    // Host CTA Banner
    hostBannerTitle: "ట్రాక్టర్ లేదా హార్వెస్టర్ ఉందా? ప్రతి నెలా ₹45,000+ సంపాదించండి",
    hostBannerSub: "మీ ఖాళీ వ్యవసాయ యంత్రాలను గ్రామ రైతులకు అద్దెకు ఇచ్చి అదనపు స్థిర ఆదాయాన్ని పొందండి.",
    hostBannerBtn: "మీ యంత్రాన్ని ఉచితంగా జాబితా చేయండి",
    calculateEarningsBtn: "ఆదాయాన్ని లెక్కించండి",

    // FAQs
    faqTitle: "తరచుగా అడిగే ప్రశ్నలు",
    faqSubtitle: "కిసాన్‌రెంట్‌లో వ్యవసాయ యంత్రాల అద్దెకు సంబంధించి అన్ని ముఖ్యమైన వివరాలు",
    faq1Q: "కిసాన్‌రెంట్ పరికరాలు మరియు యజమానులను ఎలా ధృవీకరిస్తుంది?",
    faq1A: "ప్రతి యజమాని RC, ట్రాక్టర్ బీమా మరియు ఆధార్ KYC సమర్పిస్తారు. మా స్థానిక బృందం పరికరాల పరిస్థితిని స్వయంగా తనిఖీ చేస్తుంది.",
    faq2Q: "అద్దె సమయంలో ట్రాక్టర్ పాడైపోతే ఏమి జరుగుతుంది?",
    faq2A: "అన్ని బుకింగ్‌లు బ్రేక్‌డౌన్ గ్యారెంటీ పరిధిలో ఉంటాయి. సమస్య ఉంటే యజమాని తక్షణ మరమ్మతు లేదా ప్రత్యామ్నాయ యంత్రాన్ని అందిస్తారు.",
    faq3Q: "నేను శిక్షణ పొందిన డ్రైవర్‌ను కోరవచ్చా?",
    faq3A: "అవును! చాలా యంత్రాలతో పాటు అనుభవజ్ఞుడైన స్థానిక డ్రైవర్ కూడా ఉంటారు. మీరు 'ఆపరేటర్‌తో సహా' ఫిల్టర్ ఎంచుకోవచ్చు.",
    faq4Q: "మా పొలానికి యంత్రాల డెలివరీ ఎలా జరుగుతుంది?",
    faq4A: "15-30 కిమీ పరిధిలోని యజమానులు సాధారణ రుసుముతో మీ పొలం వద్దకు డెలివరీ చేస్తారు, లేదా మీరు స్వయంగా తెచ్చుకోవచ్చు.",
    faq5Q: "యజమానులకు అద్దె డబ్బులు ఎప్పుడు మరియు ఎలా అందుతాయి?",
    faq5A: "పని విజయవంతంగా పూర్తయిన 24 గంటల్లోగా యజమానుల బ్యాంక్ ఖాతాకు UPI/NEFT ద్వారా నేరుగా డబ్బు జమ చేయబడుతుంది.",

    // Footer
    footerDesc: "భారతదేశ విశ్వసనీయ వ్యవసాయ యంత్రాల అద్దె వేదిక. రైతులకు ఆధునిక యాంత్రీకరణతో సాధికారత.",
    quickLinks: "త్వరిత లింకులు",
    equipmentCategories: "పరికరాల రకాలు",
    farmerSupport: "రైతు సహాయం",
    copyright: "© 2026 కిసాన్‌రెంట్. సర్వహక్కులు ప్రత్యేకించబడ్డాయి. భారతీయ రైతుల కోసం రూపొందించబడింది.",
  },
};
