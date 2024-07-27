const countries = [
    {
        name: "Brazil",
        clues: [
            "Capital is Brasília",
            "Major cities include São Paulo and Rio de Janeiro",
            "Famous landmark is Christ the Redeemer",
            "Located in South America",
            "Official language is Portuguese",
            "Currency is Brazilian Real"
        ]
    },
    {
        name: "Japan",
        clues: [
            "Capital is Tokyo",
            "Major cities include Osaka and Kyoto",
            "Famous landmark is Mount Fuji",
            "Located in Asia",
            "Official language is Japanese",
            "Currency is Japanese Yen"
        ]
    },
    {
        name: "Canada",
        clues: [
            "Capital is Ottawa",
            "Major cities include Toronto and Vancouver",
            "Famous landmark is CN Tower",
            "Located in North America",
            "Official languages are English and French",
            "Currency is Canadian Dollar"
        ]
    },
    {
        name: "Australia",
        clues: [
            "Capital is Canberra",
            "Major cities include Sydney and Melbourne",
            "Famous landmark is Sydney Opera House",
            "Located in Oceania",
            "Official language is English",
            "Currency is Australian Dollar"
        ]
    },
    {
        name: "India",
        clues: [
            "Capital is New Delhi",
            "Major cities include Mumbai and Bangalore",
            "Famous landmark is the Taj Mahal",
            "Located in Asia",
            "Official languages are Hindi and English",
            "Currency is Indian Rupee"
        ]
    },
    {
        name: "Germany",
        clues: [
            "Capital is Berlin",
            "Major cities include Munich and Hamburg",
            "Famous landmark is Brandenburg Gate",
            "Located in Europe",
            "Official language is German",
            "Currency is Euro"
        ]
    },
    {
        name: "France",
        clues: [
            "Capital is Paris",
            "Major cities include Marseille and Lyon",
            "Famous landmark is Eiffel Tower",
            "Located in Europe",
            "Official language is French",
            "Currency is Euro"
        ]
    },
    {
        name: "United Kingdom",
        clues: [
            "Capital is London",
            "Major cities include Manchester and Birmingham",
            "Famous landmark is Big Ben",
            "Located in Europe",
            "Official language is English",
            "Currency is Pound Sterling"
        ]
    },
    {
        name: "United States",
        clues: [
            "Capital is Washington, D.C.",
            "Major cities include New York City and Los Angeles",
            "Famous landmark is Statue of Liberty",
            "Located in North America",
            "Official language is English",
            "Currency is US Dollar"
        ]
    },
    {
        name: "China",
        clues: [
            "Capital is Beijing",
            "Major cities include Shanghai and Guangzhou",
            "Famous landmark is Great Wall of China",
            "Located in Asia",
            "Official language is Mandarin",
            "Currency is Renminbi"
        ]
    },
    {
        name: "Russia",
        clues: [
            "Capital is Moscow",
            "Major cities include Saint Petersburg and Novosibirsk",
            "Famous landmark is Red Square",
            "Located in Europe/Asia",
            "Official language is Russian",
            "Currency is Russian Ruble"
        ]
    },
    {
        name: "Italy",
        clues: [
            "Capital is Rome",
            "Major cities include Milan and Naples",
            "Famous landmark is Colosseum",
            "Located in Europe",
            "Official language is Italian",
            "Currency is Euro"
        ]
    },
    {
        name: "Spain",
        clues: [
            "Capital is Madrid",
            "Major cities include Barcelona and Valencia",
            "Famous landmark is Sagrada Família",
            "Located in Europe",
            "Official language is Spanish",
            "Currency is Euro"
        ]
    },
    {
        name: "Mexico",
        clues: [
            "Capital is Mexico City",
            "Major cities include Guadalajara and Monterrey",
            "Famous landmark is Chichen Itza",
            "Located in North America",
            "Official language is Spanish",
            "Currency is Mexican Peso"
        ]
    },
    {
        name: "South Africa",
        clues: [
            "Capitals are Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)",
            "Major cities include Johannesburg and Durban",
            "Famous landmark is Table Mountain",
            "Located in Africa",
            "Official languages include English, Zulu, Xhosa",
            "Currency is South African Rand"
        ]
    },
    {
        name: "South Korea",
        clues: [
            "Capital is Seoul",
            "Major cities include Busan and Incheon",
            "Famous landmark is Gyeongbokgung Palace",
            "Located in Asia",
            "Official language is Korean",
            "Currency is South Korean Won"
        ]
    },
    {
        name: "Argentina",
        clues: [
            "Capital is Buenos Aires",
            "Major cities include Córdoba and Rosario",
            "Famous landmark is Iguazu Falls",
            "Located in South America",
            "Official language is Spanish",
            "Currency is Argentine Peso"
        ]
    },
    {
        name: "Saudi Arabia",
        clues: [
            "Capital is Riyadh",
            "Major cities include Jeddah and Mecca",
            "Famous landmark is Kaaba",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Saudi Riyal"
        ]
    },
    {
        name: "Turkey",
        clues: [
            "Capital is Ankara",
            "Major cities include Istanbul and Izmir",
            "Famous landmark is Hagia Sophia",
            "Located in Europe/Asia",
            "Official language is Turkish",
            "Currency is Turkish Lira"
        ]
    },
    {
        name: "Egypt",
        clues: [
            "Capital is Cairo",
            "Major cities include Alexandria and Giza",
            "Famous landmark is Pyramids of Giza",
            "Located in Africa",
            "Official language is Arabic",
            "Currency is Egyptian Pound"
        ]
    },
    {
        name: "Thailand",
        clues: [
            "Capital is Bangkok",
            "Major cities include Chiang Mai and Phuket",
            "Famous landmark is Wat Arun",
            "Located in Asia",
            "Official language is Thai",
            "Currency is Thai Baht"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Located in Africa",
            "Official language is English",
            "Currency is Nigerian Naira"
        ]
    },
    {
        name: "Indonesia",
        clues: [
            "Capital is Jakarta",
            "Major cities include Surabaya and Bandung",
            "Famous landmark is Borobudur",
            "Located in Asia",
            "Official language is Indonesian",
            "Currency is Indonesian Rupiah"
        ]
    },
    {
        name: "Netherlands",
        clues: [
            "Capital is Amsterdam",
            "Major cities include Rotterdam and The Hague",
            "Famous landmark is Anne Frank House",
            "Located in Europe",
            "Official language is Dutch",
            "Currency is Euro"
        ]
    },
    {
        name: "Pakistan",
        clues: [
            "Capital is Islamabad",
            "Major cities include Karachi and Lahore",
            "Famous landmark is Badshahi Mosque",
            "Located in Asia",
            "Official languages are Urdu and English",
            "Currency is Pakistani Rupee"
        ]
    },
    {
        name: "Vietnam",
        clues: [
            "Capital is Hanoi",
            "Major cities include Ho Chi Minh City and Da Nang",
            "Famous landmark is Ha Long Bay",
            "Located in Asia",
            "Official language is Vietnamese",
            "Currency is Vietnamese Dong"
        ]
    },
    {
        name: "Philippines",
        clues: [
            "Capital is Manila",
            "Major cities include Quezon City and Cebu City",
            "Famous landmark is Banaue Rice Terraces",
            "Located in Asia",
            "Official languages are Filipino and English",
            "Currency is Philippine Peso"
        ]
    },
    {
        name: "Malaysia",
        clues: [
            "Capital is Kuala Lumpur",
            "Major cities include George Town and Johor Bahru",
            "Famous landmark is Petronas Towers",
            "Located in Asia",
            "Official language is Malay",
            "Currency is Malaysian Ringgit"
        ]
    },
    {
        name: "Colombia",
        clues: [
            "Capital is Bogotá",
            "Major cities include Medellín and Cali",
            "Famous landmark is Mount Monserrate",
            "Located in South America",
            "Official language is Spanish",
            "Currency is Colombian Peso"
        ]
    },
    {
        name: "Bangladesh",
        clues: [
            "Capital is Dhaka",
            "Major cities include Chittagong and Khulna",
            "Famous landmark is Sundarbans Mangrove Forest",
            "Located in Asia",
            "Official language is Bengali",
            "Currency is Bangladeshi Taka"
        ]
    },
    {
        name: "Ukraine",
        clues: [
            "Capital is Kyiv",
            "Major cities include Lviv and Kharkiv",
            "Famous landmark is Saint Sophia's Cathedral",
            "Located in Europe",
            "Official language is Ukrainian",
            "Currency is Ukrainian Hryvnia"
        ]
    },
    {
        name: "Chile",
        clues: [
            "Capital is Santiago",
            "Major cities include Valparaíso and Concepción",
            "Famous landmark is Easter Island",
            "Located in South America",
            "Official language is Spanish",
            "Currency is Chilean Peso"
        ]
    },
    {
        name: "Belgium",
        clues: [
            "Capital is Brussels",
            "Major cities include Antwerp and Ghent",
            "Famous landmark is Atomium",
            "Located in Europe",
            "Official languages are Dutch, French, German",
            "Currency is Euro"
        ]
    },
    {
        name: "Sweden",
        clues: [
            "Capital is Stockholm",
            "Major cities include Gothenburg and Malmö",
            "Famous landmark is Vasa Museum",
            "Located in Europe",
            "Official language is Swedish",
            "Currency is Swedish Krona"
        ]
    },
    {
        name: "Switzerland",
        clues: [
            "Capital is Bern",
            "Major cities include Zurich and Geneva",
            "Famous landmark is Matterhorn",
            "Located in Europe",
            "Official languages are German, French, Italian, Romansh",
            "Currency is Swiss Franc"
        ]
    },
    {
        name: "Poland",
        clues: [
            "Capital is Warsaw",
            "Major cities include Kraków and Wrocław",
            "Famous landmark is Wawel Castle",
            "Located in Europe",
            "Official language is Polish",
            "Currency is Polish Złoty"
        ]
    },
    {
        name: "Austria",
        clues: [
            "Capital is Vienna",
            "Major cities include Salzburg and Innsbruck",
            "Famous landmark is Schönbrunn Palace",
            "Located in Europe",
            "Official language is German",
            "Currency is Euro"
        ]
    },
    {
        name: "Norway",
        clues: [
            "Capital is Oslo",
            "Major cities include Bergen and Stavanger",
            "Famous landmark is Geiranger Fjord",
            "Located in Europe",
            "Official languages are Norwegian Bokmål and Nynorsk",
            "Currency is Norwegian Krone"
        ]
    },
    {
        name: "Ireland",
        clues: [
            "Capital is Dublin",
            "Major cities include Cork and Galway",
            "Famous landmark is Cliffs of Moher",
            "Located in Europe",
            "Official languages are Irish and English",
            "Currency is Euro"
        ]
    },
    {
        name: "Portugal",
        clues: [
            "Capital is Lisbon",
            "Major cities include Porto and Faro",
            "Famous landmark is Belém Tower",
            "Located in Europe",
            "Official language is Portuguese",
            "Currency is Euro"
        ]
    },
    {
        name: "Denmark",
        clues: [
            "Capital is Copenhagen",
            "Major cities include Aarhus and Odense",
            "Famous landmark is Little Mermaid Statue",
            "Located in Europe",
            "Official language is Danish",
            "Currency is Danish Krone"
        ]
    },
    {
        name: "Hungary",
        clues: [
            "Capital is Budapest",
            "Major cities include Debrecen and Szeged",
            "Famous landmark is Buda Castle",
            "Located in Europe",
            "Official language is Hungarian",
            "Currency is Hungarian Forint"
        ]
    },
    {
        name: "Greece",
        clues: [
            "Capital is Athens",
            "Major cities include Thessaloniki and Patras",
            "Famous landmark is Parthenon",
            "Located in Europe",
            "Official language is Greek",
            "Currency is Euro"
        ]
    },
    {
        name: "Finland",
        clues: [
            "Capital is Helsinki",
            "Major cities include Espoo and Tampere",
            "Famous landmark is Suomenlinna Fortress",
            "Located in Europe",
            "Official languages are Finnish and Swedish",
            "Currency is Euro"
        ]
    },
    {
        name: "Czech Republic",
        clues: [
            "Capital is Prague",
            "Major cities include Brno and Ostrava",
            "Famous landmark is Charles Bridge",
            "Located in Europe",
            "Official language is Czech",
            "Currency is Czech Koruna"
        ]
    },
    {
        name: "New Zealand",
        clues: [
            "Capital is Wellington",
            "Major cities include Auckland and Christchurch",
            "Famous landmark is Milford Sound",
            "Located in Oceania",
            "Official languages are English, Māori, NZ Sign Language",
            "Currency is New Zealand Dollar"
        ]
    },
    {
        name: "Romania",
        clues: [
            "Capital is Bucharest",
            "Major cities include Cluj-Napoca and Timișoara",
            "Famous landmark is Bran Castle",
            "Located in Europe",
            "Official language is Romanian",
            "Currency is Romanian Leu"
        ]
    },
    {
        name: "Singapore",
        clues: [
            "City-state with the same name",
            "Famous landmark is Marina Bay Sands",
            "Located in Asia",
            "Official languages are English, Malay, Mandarin, Tamil",
            "Currency is Singapore Dollar"
        ]
    },
    {
        name: "Israel",
        clues: [
            "Capital is Jerusalem",
            "Major cities include Tel Aviv and Haifa",
            "Famous landmark is Western Wall",
            "Located in Asia",
            "Official languages are Hebrew and Arabic",
            "Currency is Israeli Shekel"
        ]
    },
    {
        name: "Ukraine",
        clues: [
            "Capital is Kyiv",
            "Major cities include Lviv and Kharkiv",
            "Famous landmark is Saint Sophia's Cathedral",
            "Located in Europe",
            "Official language is Ukrainian",
            "Currency is Ukrainian Hryvnia"
        ]
    },
    {
        name: "Vietnam",
        clues: [
            "Capital is Hanoi",
            "Major cities include Ho Chi Minh City and Da Nang",
            "Famous landmark is Ha Long Bay",
            "Located in Asia",
            "Official language is Vietnamese",
            "Currency is Vietnamese Dong"
        ]
    },
    {
        name: "Pakistan",
        clues: [
            "Capital is Islamabad",
            "Major cities include Karachi and Lahore",
            "Famous landmark is Badshahi Mosque",
            "Located in Asia",
            "Official languages are Urdu and English",
            "Currency is Pakistani Rupee"
        ]
    },
    {
        name: "Indonesia",
        clues: [
            "Capital is Jakarta",
            "Major cities include Surabaya and Bandung",
            "Famous landmark is Borobudur",
            "Located in Asia",
            "Official language is Indonesian",
            "Currency is Indonesian Rupiah"
        ]
    },
    {
        name: "Thailand",
        clues: [
            "Capital is Bangkok",
            "Major cities include Chiang Mai and Phuket",
            "Famous landmark is Wat Arun",
            "Located in Asia",
            "Official language is Thai",
            "Currency is Thai Baht"
        ]
    },
    {
        name: "South Korea",
        clues: [
            "Capital is Seoul",
            "Major cities include Busan and Incheon",
            "Famous landmark is Gyeongbokgung Palace",
            "Located in Asia",
            "Official language is Korean",
            "Currency is South Korean Won"
        ]
    },
    {
        name: "Malaysia",
        clues: [
            "Capital is Kuala Lumpur",
            "Major cities include George Town and Johor Bahru",
            "Famous landmark is Petronas Towers",
            "Located in Asia",
            "Official language is Malay",
            "Currency is Malaysian Ringgit"
        ]
    },
    {
        name: "Singapore",
        clues: [
            "City-state with the same name",
            "Famous landmark is Marina Bay Sands",
            "Located in Asia",
            "Official languages are English, Malay, Mandarin, Tamil",
            "Currency is Singapore Dollar"
        ]
    },
    {
        name: "Bangladesh",
        clues: [
            "Capital is Dhaka",
            "Major cities include Chittagong and Khulna",
            "Famous landmark is Sundarbans Mangrove Forest",
            "Located in Asia",
            "Official language is Bengali",
            "Currency is Bangladeshi Taka"
        ]
    },
    {
        name: "Pakistan",
        clues: [
            "Capital is Islamabad",
            "Major cities include Karachi and Lahore",
            "Famous landmark is Badshahi Mosque",
            "Located in Asia",
            "Official languages are Urdu and English",
            "Currency is Pakistani Rupee"
        ]
    },
    {
        name: "Vietnam",
        clues: [
            "Capital is Hanoi",
            "Major cities include Ho Chi Minh City and Da Nang",
            "Famous landmark is Ha Long Bay",
            "Located in Asia",
            "Official language is Vietnamese",
            "Currency is Vietnamese Dong"
        ]
    },
    {
        name: "Philippines",
        clues: [
            "Capital is Manila",
            "Major cities include Quezon City and Cebu City",
            "Famous landmark is Banaue Rice Terraces",
            "Located in Asia",
            "Official languages are Filipino and English",
            "Currency is Philippine Peso"
        ]
    },
    {
        name: "Colombia",
        clues: [
            "Capital is Bogotá",
            "Major cities include Medellín and Cali",
            "Famous landmark is Mount Monserrate",
            "Located in South America",
            "Official language is Spanish",
            "Currency is Colombian Peso"
        ]
    },
    {
        name: "Thailand",
        clues: [
            "Capital is Bangkok",
            "Major cities include Chiang Mai and Phuket",
            "Famous landmark is Wat Arun",
            "Located in Asia",
            "Official language is Thai",
            "Currency is Thai Baht"
        ]
    },
    {
        name: "Egypt",
        clues: [
            "Capital is Cairo",
            "Major cities include Alexandria and Giza",
            "Famous landmark is Pyramids of Giza",
            "Located in Africa",
            "Official language is Arabic",
            "Currency is Egyptian Pound"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Located in Africa",
            "Official language is English",
            "Currency is Nigerian Naira"
        ]
    },
    {
        name: "Ethiopia",
        clues: [
            "Capital is Addis Ababa",
            "Major cities include Dire Dawa and Gondar",
            "Famous landmark is Lalibela Churches",
            "Located in Africa",
            "Official language is Amharic",
            "Currency is Ethiopian Birr"
        ]
    },
    {
        name: "Kenya",
        clues: [
            "Capital is Nairobi",
            "Major cities include Mombasa and Kisumu",
            "Famous landmark is Mount Kenya",
            "Located in Africa",
            "Official languages are English and Swahili",
            "Currency is Kenyan Shilling"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Located in Africa",
            "Official language is English",
            "Currency is Ghanaian Cedi"
        ]
    },
    {
        name: "Morocco",
        clues: [
            "Capital is Rabat",
            "Major cities include Casablanca and Marrakech",
            "Famous landmark is Hassan II Mosque",
            "Located in Africa",
            "Official languages are Arabic and Berber",
            "Currency is Moroccan Dirham"
        ]
    },
    {
        name: "Tanzania",
        clues: [
            "Capital is Dodoma",
            "Major cities include Dar es Salaam and Arusha",
            "Famous landmark is Mount Kilimanjaro",
            "Located in Africa",
            "Official languages are Swahili and English",
            "Currency is Tanzanian Shilling"
        ]
    },
    {
        name: "Uganda",
        clues: [
            "Capital is Kampala",
            "Major cities include Entebbe and Gulu",
            "Famous landmark is Bwindi Impenetrable National Park",
            "Located in Africa",
            "Official language is English",
            "Currency is Ugandan Shilling"
        ]
    },
    {
        name: "Algeria",
        clues: [
            "Capital is Algiers",
            "Major cities include Oran and Constantine",
            "Famous landmark is Tassili n'Ajjer",
            "Located in Africa",
            "Official language is Arabic",
            "Currency is Algerian Dinar"
        ]
    },
    {
        name: "Tunisia",
        clues: [
            "Capital is Tunis",
            "Major cities include Sfax and Sousse",
            "Famous landmark is Amphitheatre of El Jem",
            "Located in Africa",
            "Official language is Arabic",
            "Currency is Tunisian Dinar"
        ]
    },
    {
        name: "Libya",
        clues: [
            "Capital is Tripoli",
            "Major cities include Benghazi and Misrata",
            "Famous landmark is Leptis Magna",
            "Located in Africa",
            "Official language is Arabic",
            "Currency is Libyan Dinar"
        ]
    },
    {
        name: "Sudan",
        clues: [
            "Capital is Khartoum",
            "Major cities include Omdurman and Port Sudan",
            "Famous landmark is Meroe Pyramids",
            "Located in Africa",
            "Official language is Arabic",
            "Currency is Sudanese Pound"
        ]
    },
    {
        name: "Senegal",
        clues: [
            "Capital is Dakar",
            "Major cities include Touba and Thies",
            "Famous landmark is Gorée Island",
            "Located in Africa",
            "Official language is French",
            "Currency is West African CFA franc"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Located in Africa",
            "Official language is French",
            "Currency is West African CFA franc"
        ]
    },
    {
        name: "Madagascar",
        clues: [
            "Capital is Antananarivo",
            "Major cities include Toamasina and Antsirabe",
            "Famous landmark is Avenue of the Baobabs",
            "Located in Africa",
            "Official languages are Malagasy and French",
            "Currency is Malagasy Ariary"
        ]
    },
    {
        name: "Angola",
        clues: [
            "Capital is Luanda",
            "Major cities include Huambo and Lobito",
            "Famous landmark is Kalandula Falls",
            "Located in Africa",
            "Official language is Portuguese",
            "Currency is Angolan Kwanza"
        ]
    },
    {
        name: "Mozambique",
        clues: [
            "Capital is Maputo",
            "Major cities include Beira and Nampula",
            "Famous landmark is Bazaruto Archipelago",
            "Located in Africa",
            "Official language is Portuguese",
            "Currency is Mozambican Metical"
        ]
    },
    {
        name: "Zimbabwe",
        clues: [
            "Capital is Harare",
            "Major cities include Bulawayo and Mutare",
            "Famous landmark is Victoria Falls",
            "Located in Africa",
            "Official languages include English, Shona, Ndebele",
            "Currency is Zimbabwean Dollar"
        ]
    },
    {
        name: "Botswana",
        clues: [
            "Capital is Gaborone",
            "Major cities include Francistown and Maun",
            "Famous landmark is Okavango Delta",
            "Located in Africa",
            "Official language is English",
            "Currency is Botswana Pula"
        ]
    },
    {
        name: "Namibia",
        clues: [
            "Capital is Windhoek",
            "Major cities include Walvis Bay and Swakopmund",
            "Famous landmark is Sossusvlei",
            "Located in Africa",
            "Official language is English",
            "Currency is Namibian Dollar"
        ]
    },
    {
        name: "Zambia",
        clues: [
            "Capital is Lusaka",
            "Major cities include Kitwe and Ndola",
            "Famous landmark is Victoria Falls",
            "Located in Africa",
            "Official language is English",
            "Currency is Zambian Kwacha"
        ]
    },
    {
        name: "Malawi",
        clues: [
            "Capital is Lilongwe",
            "Major cities include Blantyre and Mzuzu",
            "Famous landmark is Lake Malawi",
            "Located in Africa",
            "Official languages are English and Chichewa",
            "Currency is Malawian Kwacha"
        ]
    },
    {
        name: "Rwanda",
        clues: [
            "Capital is Kigali",
            "Major cities include Butare and Gisenyi",
            "Famous landmark is Volcanoes National Park",
            "Located in Africa",
            "Official languages are Kinyarwanda, French, English",
            "Currency is Rwandan Franc"
        ]
    },
    {
        name: "Burundi",
        clues: [
            "Capital is Gitega",
            "Major cities include Bujumbura and Ngozi",
            "Famous landmark is Rusizi National Park",
            "Located in Africa",
            "Official languages are Kirundi, French, English",
            "Currency is Burundian Franc"
        ]
    },
    {
        name: "South Sudan",
        clues: [
            "Capital is Juba",
            "Major cities include Malakal and Wau",
            "Famous landmark is Bandingilo National Park",
            "Located in Africa",
            "Official language is English",
            "Currency is South Sudanese Pound"
        ]
    },
    {
        name: "Somalia",
        clues: [
            "Capital is Mogadishu",
            "Major cities include Hargeisa and Bosaso",
            "Famous landmark is Laas Geel",
            "Located in Africa",
            "Official languages are Somali and Arabic",
            "Currency is Somali Shilling"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Located in Africa",
            "Official language is French",
            "Currency is West African CFA franc"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Air Mountains",
            "Located in Africa",
            "Official language is French",
            "Currency is West African CFA franc"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Lake Chad",
            "Located in Africa",
            "Official languages are French and Arabic",
            "Currency is Central African CFA franc"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Located in Africa",
            "Official languages are French and Sango",
            "Currency is Central African CFA franc"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Located in Africa",
            "Official languages are French and English",
            "Currency is Central African CFA franc"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Lopé National Park",
            "Located in Africa",
            "Official language is French",
            "Currency is Central African CFA franc"
        ]
    },
    {
        name: "Republic of the Congo",
        clues: [
            "Capital is Brazzaville",
            "Major cities include Pointe-Noire and Dolisie",
            "Famous landmark is Odzala-Kokoua National Park",
            "Located in Africa",
            "Official language is French",
            "Currency is Central African CFA franc"
        ]
    },
    {
        name: "Democratic Republic of the Congo",
        clues: [
            "Capital is Kinshasa",
            "Major cities include Lubumbashi and Mbuji-Mayi",
            "Famous landmark is Virunga National Park",
            "Located in Africa",
            "Official language is French",
            "Currency is Congolese Franc"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Located in Africa",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA franc"
        ]
    },
    {
        name: "São Tomé and Príncipe",
        clues: [
            "Capital is São Tomé",
            "Major cities include Santo Amaro and Neves",
            "Famous landmark is Pico Cão Grande",
            "Located in Africa",
            "Official language is Portuguese",
            "Currency is São Tomé and Príncipe Dobra"
        ]
    },
    {
        name: "Gambia",
        clues: [
            "Capital is Banjul",
            "Major cities include Serekunda and Brikama",
            "Famous landmark is Kunta Kinteh Island",
            "Located in Africa",
            "Official language is English",
            "Currency is Gambian Dalasi"
        ]
    },
    {
        name: "Guinea",
        clues: [
            "Capital is Conakry",
            "Major cities include Kankan and Nzérékoré",
            "Famous landmark is Mount Nimba",
            "Located in Africa",
            "Official language is French",
            "Currency is Guinean Franc"
        ]
    },
    {
        name: "Guinea-Bissau",
        clues: [
            "Capital is Bissau",
            "Major cities include Bafatá and Gabú",
            "Famous landmark is Bijagós Archipelago",
            "Located in Africa",
            "Official language is Portuguese",
            "Currency is West African CFA franc"
        ]
    },
    {
        name: "Sierra Leone",
        clues: [
            "Capital is Freetown",
            "Major cities include Bo and Kenema",
            "Famous landmark is Bunce Island",
            "Located in Africa",
            "Official language is English",
            "Currency is Sierra Leonean Leone"
        ]
    },
    {
        name: "Liberia",
        clues: [
            "Capital is Monrovia",
            "Major cities include Gbarnga and Kakata",
            "Famous landmark is Providence Island",
            "Located in Africa",
            "Official language is English",
            "Currency is Liberian Dollar"
        ]
    },
    {
        name: "Mauritania",
        clues: [
            "Capital is Nouakchott",
            "Major cities include Nouadhibou and Rosso",
            "Famous landmark is Banc d'Arguin National Park",
            "Located in Africa",
            "Official language is Arabic",
            "Currency is Mauritanian Ouguiya"
        ]
    },
    {
        name: "Djibouti",
        clues: [
            "Capital is Djibouti",
            "Major cities include Ali Sabieh and Tadjoura",
            "Famous landmark is Lake Assal",
            "Located in Africa",
            "Official languages are French and Arabic",
            "Currency is Djiboutian Franc"
        ]
    },
    {
        name: "Eritrea",
        clues: [
            "Capital is Asmara",
            "Major cities include Keren and Massawa",
            "Famous landmark is Dahlak Archipelago",
            "Located in Africa",
            "Official languages are Tigrinya, Arabic, English",
            "Currency is Eritrean Nakfa"
        ]
    },
    {
        name: "Comoros",
        clues: [
            "Capital is Moroni",
            "Major cities include Mutsamudu and Fomboni",
            "Famous landmark is Mount Karthala",
            "Located in Africa",
            "Official languages are Comorian, Arabic, French",
            "Currency is Comorian Franc"
        ]
    },
    {
        name: "Seychelles",
        clues: [
            "Capital is Victoria",
            "Major cities include Beau Vallon and Anse Boileau",
            "Famous landmark is Anse Source d'Argent",
            "Located in Africa",
            "Official languages are Seychellois Creole, French, English",
            "Currency is Seychellois Rupee"
        ]
    },
    {
        name: "Cape Verde",
        clues: [
            "Capital is Praia",
            "Major cities include Mindelo and Santa Maria",
            "Famous landmark is Fogo Volcano",
            "Located in Africa",
            "Official language is Portuguese",
            "Currency is Cape Verdean Escudo"
        ]
    },
    {
        name: "Mauritius",
        clues: [
            "Capital is Port Louis",
            "Major cities include Curepipe and Quatre Bornes",
            "Famous landmark is Le Morne Brabant",
            "Located in Africa",
            "Official languages are English and French",
            "Currency is Mauritian Rupee"
        ]
    },
    {
        name: "Sao Tome and Principe",
        clues: [
            "Capital is São Tomé",
            "Major cities include Santo Amaro and Neves",
            "Famous landmark is Pico Cão Grande",
            "Located in Africa",
            "Official language is Portuguese",
            "Currency is São Tomé and Príncipe Dobra"
        ]
    },
    {
        name: "Bahrain",
        clues: [
            "Capital is Manama",
            "Major cities include Riffa and Muharraq",
            "Famous landmark is Bahrain World Trade Center",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Bahraini Dinar"
        ]
    },
    {
        name: "Kuwait",
        clues: [
            "Capital is Kuwait City",
            "Major cities include Al Ahmadi and Hawalli",
            "Famous landmark is Kuwait Towers",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Kuwaiti Dinar"
        ]
    },
    {
        name: "Oman",
        clues: [
            "Capital is Muscat",
            "Major cities include Salalah and Sohar",
            "Famous landmark is Sultan Qaboos Grand Mosque",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Omani Rial"
        ]
    },
    {
        name: "Qatar",
        clues: [
            "Capital is Doha",
            "Major cities include Al Rayyan and Al Wakrah",
            "Famous landmark is The Pearl-Qatar",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Qatari Riyal"
        ]
    },
    {
        name: "United Arab Emirates",
        clues: [
            "Capital is Abu Dhabi",
            "Major cities include Dubai and Sharjah",
            "Famous landmark is Burj Khalifa",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is UAE Dirham"
        ]
    },
    {
        name: "Jordan",
        clues: [
            "Capital is Amman",
            "Major cities include Zarqa and Irbid",
            "Famous landmark is Petra",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Jordanian Dinar"
        ]
    },
    {
        name: "Lebanon",
        clues: [
            "Capital is Beirut",
            "Major cities include Tripoli and Sidon",
            "Famous landmark is Jeita Grotto",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Lebanese Pound"
        ]
    },
    {
        name: "Israel",
        clues: [
            "Capital is Jerusalem",
            "Major cities include Tel Aviv and Haifa",
            "Famous landmark is Western Wall",
            "Located in Asia",
            "Official languages are Hebrew and Arabic",
            "Currency is Israeli Shekel"
        ]
    },
    {
        name: "Palestine",
        clues: [
            "Capital is Ramallah",
            "Major cities include Gaza and Hebron",
            "Famous landmark is Dome of the Rock",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Israeli Shekel"
        ]
    },
    {
        name: "Iraq",
        clues: [
            "Capital is Baghdad",
            "Major cities include Basra and Mosul",
            "Famous landmark is Ziggurat of Ur",
            "Located in Asia",
            "Official languages are Arabic and Kurdish",
            "Currency is Iraqi Dinar"
        ]
    },
    {
        name: "Syria",
        clues: [
            "Capital is Damascus",
            "Major cities include Aleppo and Homs",
            "Famous landmark is Crac des Chevaliers",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Syrian Pound"
        ]
    },
    {
        name: "Yemen",
        clues: [
            "Capital is Sana'a",
            "Major cities include Aden and Taiz",
            "Famous landmark is Socotra Island",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Yemeni Rial"
        ]
    },
    {
        name: "Saudi Arabia",
        clues: [
            "Capital is Riyadh",
            "Major cities include Jeddah and Mecca",
            "Famous landmark is Kaaba",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Saudi Riyal"
        ]
    },
    {
        name: "Oman",
        clues: [
            "Capital is Muscat",
            "Major cities include Salalah and Sohar",
            "Famous landmark is Sultan Qaboos Grand Mosque",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Omani Rial"
        ]
    },
    {
        name: "United Arab Emirates",
        clues: [
            "Capital is Abu Dhabi",
            "Major cities include Dubai and Sharjah",
            "Famous landmark is Burj Khalifa",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is UAE Dirham"
        ]
    },
    {
        name: "Kuwait",
        clues: [
            "Capital is Kuwait City",
            "Major cities include Al Ahmadi and Hawalli",
            "Famous landmark is Kuwait Towers",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Kuwaiti Dinar"
        ]
    },
    {
        name: "Bahrain",
        clues: [
            "Capital is Manama",
            "Major cities include Riffa and Muharraq",
            "Famous landmark is Bahrain World Trade Center",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Bahraini Dinar"
        ]
    },
    {
        name: "Qatar",
        clues: [
            "Capital is Doha",
            "Major cities include Al Rayyan and Al Wakrah",
            "Famous landmark is The Pearl-Qatar",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Qatari Riyal"
        ]
    },
    {
        name: "Jordan",
        clues: [
            "Capital is Amman",
            "Major cities include Zarqa and Irbid",
            "Famous landmark is Petra",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Jordanian Dinar"
        ]
    },
    {
        name: "Lebanon",
        clues: [
            "Capital is Beirut",
            "Major cities include Tripoli and Sidon",
            "Famous landmark is Jeita Grotto",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Lebanese Pound"
        ]
    },
    {
        name: "Palestine",
        clues: [
            "Capital is Ramallah",
            "Major cities include Gaza and Hebron",
            "Famous landmark is Dome of the Rock",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Israeli Shekel"
        ]
    },
    {
        name: "Israel",
        clues: [
            "Capital is Jerusalem",
            "Major cities include Tel Aviv and Haifa",
            "Famous landmark is Western Wall",
            "Located in Asia",
            "Official languages are Hebrew and Arabic",
            "Currency is Israeli Shekel"
        ]
    },
    {
        name: "Iraq",
        clues: [
            "Capital is Baghdad",
            "Major cities include Basra and Mosul",
            "Famous landmark is Ziggurat of Ur",
            "Located in Asia",
            "Official languages are Arabic and Kurdish",
            "Currency is Iraqi Dinar"
        ]
    },
    {
        name: "Syria",
        clues: [
            "Capital is Damascus",
            "Major cities include Aleppo and Homs",
            "Famous landmark is Crac des Chevaliers",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Syrian Pound"
        ]
    },
    {
        name: "Yemen",
        clues: [
            "Capital is Sana'a",
            "Major cities include Aden and Taiz",
            "Famous landmark is Socotra Island",
            "Located in Asia",
            "Official language is Arabic",
            "Currency is Yemeni Rial"
        ]
    },
    {
        name: "Armenia",
        clues: [
            "Capital is Yerevan",
            "Major cities include Gyumri and Vanadzor",
            "Famous landmark is Mount Ararat",
            "Located in Asia",
            "Official language is Armenian",
            "Currency is Armenian Dram"
        ]
    },
    {
        name: "Azerbaijan",
        clues: [
            "Capital is Baku",
            "Major cities include Ganja and Sumqayit",
            "Famous landmark is Flame Towers",
            "Located in Asia",
            "Official language is Azerbaijani",
            "Currency is Azerbaijani Manat"
        ]
    },
    {
        name: "Georgia",
        clues: [
            "Capital is Tbilisi",
            "Major cities include Kutaisi and Batumi",
            "Famous landmark is Narikala Fortress",
            "Located in Europe/Asia",
            "Official language is Georgian",
            "Currency is Georgian Lari"
        ]
    },
    {
        name: "Kazakhstan",
        clues: [
            "Capital is Nur-Sultan",
            "Major cities include Almaty and Shymkent",
            "Famous landmark is Bayterek Tower",
            "Located in Asia",
            "Official languages are Kazakh and Russian",
            "Currency is Kazakhstani Tenge"
        ]
    },
    {
        name: "Uzbekistan",
        clues: [
            "Capital is Tashkent",
            "Major cities include Samarkand and Bukhara",
            "Famous landmark is Registan",
            "Located in Asia",
            "Official language is Uzbek",
            "Currency is Uzbekistani Som"
        ]
    },
    {
        name: "Turkmenistan",
        clues: [
            "Capital is Ashgabat",
            "Major cities include Turkmenabat and Mary",
            "Famous landmark is Darvaza Gas Crater",
            "Located in Asia",
            "Official language is Turkmen",
            "Currency is Turkmenistani Manat"
        ]
    },
    {
        name: "Kyrgyzstan",
        clues: [
            "Capital is Bishkek",
            "Major cities include Osh and Jalal-Abad",
            "Famous landmark is Issyk-Kul Lake",
            "Located in Asia",
            "Official languages are Kyrgyz and Russian",
            "Currency is Kyrgyzstani Som"
        ]
    },
    {
        name: "Tajikistan",
        clues: [
            "Capital is Dushanbe",
            "Major cities include Khujand and Kulob",
            "Famous landmark is Iskanderkul Lake",
            "Located in Asia",
            "Official language is Tajik",
            "Currency is Tajikistani Somoni"
        ]
    },
    {
        name: "Afghanistan",
        clues: [
            "Capital is Kabul",
            "Major cities include Kandahar and Herat",
            "Famous landmark is Bamiyan Buddhas",
            "Located in Asia",
            "Official languages are Dari and Pashto",
            "Currency is Afghan Afghani"
        ]
    },
    {
        name: "Mongolia",
        clues: [
            "Capital is Ulaanbaatar",
            "Major cities include Erdenet and Darkhan",
            "Famous landmark is Genghis Khan Statue",
            "Located in Asia",
            "Official language is Mongolian",
            "Currency is Mongolian Tögrög"
        ]
    },
    {
        name: "Nepal",
        clues: [
            "Capital is Kathmandu",
            "Major cities include Pokhara and Lalitpur",
            "Famous landmark is Mount Everest",
            "Located in Asia",
            "Official language is Nepali",
            "Currency is Nepalese Rupee"
        ]
    },
    {
        name: "Bhutan",
        clues: [
            "Capital is Thimphu",
            "Major cities include Phuntsholing and Paro",
            "Famous landmark is Tiger's Nest Monastery",
            "Located in Asia",
            "Official language is Dzongkha",
            "Currency is Bhutanese Ngultrum"
        ]
    },
    {
        name: "Maldives",
        clues: [
            "Capital is Malé",
            "Major cities include Addu City and Fuvahmulah",
            "Famous landmark is Hulhumale",
            "Located in Asia",
            "Official language is Dhivehi",
            "Currency is Maldivian Rufiyaa"
        ]
    },
    {
        name: "Sri Lanka",
        clues: [
            "Capital is Sri Jayawardenepura Kotte",
            "Major cities include Colombo and Kandy",
            "Famous landmark is Sigiriya",
            "Located in Asia",
            "Official languages are Sinhala and Tamil",
            "Currency is Sri Lankan Rupee"
        ]
    },
    {
        name: "India",
        clues: [
            "Capital is New Delhi",
            "Major cities include Mumbai and Bangalore",
            "Famous landmark is the Taj Mahal",
            "Located in Asia",
            "Official languages are Hindi and English",
            "Currency is Indian Rupee"
        ]
    },
    {
        name: "Pakistan",
        clues: [
            "Capital is Islamabad",
            "Major cities include Karachi and Lahore",
            "Famous landmark is Badshahi Mosque",
            "Located in Asia",
            "Official languages are Urdu and English",
            "Currency is Pakistani Rupee"
        ]
    },
    {
        name: "Bangladesh",
        clues: [
            "Capital is Dhaka",
            "Major cities include Chittagong and Khulna",
            "Famous landmark is Sundarbans Mangrove Forest",
            "Located in Asia",
            "Official language is Bengali",
            "Currency is Bangladeshi Taka"
        ]
    },
    {
        name: "Myanmar",
        clues: [
            "Capital is Naypyidaw",
            "Major cities include Yangon and Mandalay",
            "Famous landmark is Shwedagon Pagoda",
            "Located in Asia",
            "Official language is Burmese",
            "Currency is Burmese Kyat"
        ]
    },
    {
        name: "Thailand",
        clues: [
            "Capital is Bangkok",
            "Major cities include Chiang Mai and Phuket",
            "Famous landmark is Wat Arun",
            "Located in Asia",
            "Official language is Thai",
            "Currency is Thai Baht"
        ]
    },
    {
        name: "Laos",
        clues: [
            "Capital is Vientiane",
            "Major cities include Luang Prabang and Pakse",
            "Famous landmark is Pha That Luang",
            "Located in Asia",
            "Official language is Lao",
            "Currency is Lao Kip"
        ]
    },
    {
        name: "Cambodia",
        clues: [
            "Capital is Phnom Penh",
            "Major cities include Siem Reap and Battambang",
            "Famous landmark is Angkor Wat",
            "Located in Asia",
            "Official language is Khmer",
            "Currency is Cambodian Riel"
        ]
    },
    {
        name: "Vietnam",
        clues: [
            "Capital is Hanoi",
            "Major cities include Ho Chi Minh City and Da Nang",
            "Famous landmark is Ha Long Bay",
            "Located in Asia",
            "Official language is Vietnamese",
            "Currency is Vietnamese Dong"
        ]
    },
    {
        name: "Malaysia",
        clues: [
            "Capital is Kuala Lumpur",
            "Major cities include George Town and Johor Bahru",
            "Famous landmark is Petronas Towers",
            "Located in Asia",
            "Official language is Malay",
            "Currency is Malaysian Ringgit"
        ]
    },
    {
        name: "Singapore",
        clues: [
            "City-state with the same name",
            "Famous landmark is Marina Bay Sands",
            "Located in Asia",
            "Official languages are English, Malay, Mandarin, Tamil",
            "Currency is Singapore Dollar"
        ]
    },
    {
        name: "Indonesia",
        clues: [
            "Capital is Jakarta",
            "Major cities include Surabaya and Bandung",
            "Famous landmark is Borobudur",
            "Located in Asia",
            "Official language is Indonesian",
            "Currency is Indonesian Rupiah"
        ]
    },
    {
        name: "Philippines",
        clues: [
            "Capital is Manila",
            "Major cities include Quezon City and Cebu City",
            "Famous landmark is Banaue Rice Terraces",
            "Located in Asia",
            "Official languages are Filipino and English",
            "Currency is Philippine Peso"
        ]
    },
    {
        name: "East Timor",
        clues: [
            "Capital is Dili",
            "Major cities include Baucau and Maliana",
            "Famous landmark is Cristo Rei of Dili",
            "Located in Asia",
            "Official languages are Portuguese and Tetum",
            "Currency is United States Dollar"
        ]
    },
    {
        name: "Brunei",
        clues: [
            "Capital is Bandar Seri Begawan",
            "Major cities include Kuala Belait and Seria",
            "Famous landmark is Sultan Omar Ali Saifuddin Mosque",
            "Located in Asia",
            "Official language is Malay",
            "Currency is Brunei Dollar"
        ]
    },
    {
        name: "Thailand",
        clues: [
            "Capital is Bangkok",
            "Major cities include Chiang Mai and Phuket",
            "Famous landmark is Wat Arun",
            "Located in Asia",
            "Official language is Thai",
            "Currency is Thai Baht"
        ]
    },
    {
        name: "Laos",
        clues: [
            "Capital is Vientiane",
            "Major cities include Luang Prabang and Pakse",
            "Famous landmark is Pha That Luang",
            "Located in Asia",
            "Official language is Lao",
            "Currency is Lao Kip"
        ]
    },
    {
        name: "Cambodia",
        clues: [
            "Capital is Phnom Penh",
            "Major cities include Siem Reap and Battambang",
            "Famous landmark is Angkor Wat",
            "Located in Asia",
            "Official language is Khmer",
            "Currency is Cambodian Riel"
        ]
    },
    {
        name: "Vietnam",
        clues: [
            "Capital is Hanoi",
            "Major cities include Ho Chi Minh City and Da Nang",
            "Famous landmark is Ha Long Bay",
            "Located in Asia",
            "Official language is Vietnamese",
            "Currency is Vietnamese Dong"
        ]
    },
    {
        name: "Malaysia",
        clues: [
            "Capital is Kuala Lumpur",
            "Major cities include George Town and Johor Bahru",
            "Famous landmark is Petronas Towers",
            "Located in Asia",
            "Official language is Malay",
            "Currency is Malaysian Ringgit"
        ]
    },
    {
        name: "Singapore",
        clues: [
            "City-state with the same name",
            "Famous landmark is Marina Bay Sands",
            "Located in Asia",
            "Official languages are English, Malay, Mandarin, Tamil",
            "Currency is Singapore Dollar"
        ]
    },
    {
        name: "Indonesia",
        clues: [
            "Capital is Jakarta",
            "Major cities include Surabaya and Bandung",
            "Famous landmark is Borobudur",
            "Located in Asia",
            "Official language is Indonesian",
            "Currency is Indonesian Rupiah"
        ]
    },
    {
        name: "Philippines",
        clues: [
            "Capital is Manila",
            "Major cities include Quezon City and Cebu City",
            "Famous landmark is Banaue Rice Terraces",
            "Located in Asia",
            "Official languages are Filipino and English",
            "Currency is Philippine Peso"
        ]
    },
    {
        name: "East Timor",
        clues: [
            "Capital is Dili",
            "Major cities include Baucau and Maliana",
            "Famous landmark is Cristo Rei of Dili",
            "Located in Asia",
            "Official languages are Portuguese and Tetum",
            "Currency is United States Dollar"
        ]
    },
    {
        name: "Brunei",
        clues: [
            "Capital is Bandar Seri Begawan",
            "Major cities include Kuala Belait and Seria",
            "Famous landmark is Sultan Omar Ali Saifuddin Mosque",
            "Located in Asia",
            "Official language is Malay",
            "Currency is Brunei Dollar"
        ]
    },
    {
        name: "Papua New Guinea",
        clues: [
            "Capital is Port Moresby",
            "Major cities include Lae and Mount Hagen",
            "Famous landmark is Kokoda Track",
            "Located in Oceania",
            "Official languages are Hiri Motu, Tok Pisin, English",
            "Currency is Papua New Guinean Kina"
        ]
    },
    {
        name: "Solomon Islands",
        clues: [
            "Capital is Honiara",
            "Major cities include Auki and Gizo",
            "Famous landmark is Marovo Lagoon",
            "Located in Oceania",
            "Official language is English",
            "Currency is Solomon Islands Dollar"
        ]
    },
    {
        name: "Vanuatu",
        clues: [
            "Capital is Port Vila",
            "Major cities include Luganville and Norsup",
            "Famous landmark is Mount Yasur",
            "Located in Oceania",
            "Official languages are Bislama, French, English",
            "Currency is Vanuatu Vatu"
        ]
    },
    {
        name: "Fiji",
        clues: [
            "Capital is Suva",
            "Major cities include Nadi and Lautoka",
            "Famous landmark is Bouma National Heritage Park",
            "Located in Oceania",
            "Official languages are Fijian, Hindi, English",
            "Currency is Fijian Dollar"
        ]
    },
    {
        name: "Samoa",
        clues: [
            "Capital is Apia",
            "Major cities include Faleasiu and Vaitele",
            "Famous landmark is To-Sua Ocean Trench",
            "Located in Oceania",
            "Official languages are Samoan and English",
            "Currency is Samoan Tala"
        ]
    },
    {
        name: "Tonga",
        clues: [
            "Capital is Nuku'alofa",
            "Major cities include Neiafu and Haveluloto",
            "Famous landmark is Ha'amonga 'a Maui",
            "Located in Oceania",
            "Official languages are Tongan and English",
            "Currency is Tongan Pa'anga"
        ]
    },
    {
        name: "Tuvalu",
        clues: [
            "Capital is Funafuti",
            "Major cities include Alapi and Fakaifou",
            "Famous landmark is Funafuti Conservation Area",
            "Located in Oceania",
            "Official languages are Tuvaluan and English",
            "Currency is Tuvaluan Dollar"
        ]
    },
    {
        name: "Nauru",
        clues: [
            "Capital is Yaren",
            "Major cities include Arijejen and Anibare",
            "Famous landmark is Command Ridge",
            "Located in Oceania",
            "Official languages are Nauruan and English",
            "Currency is Australian Dollar"
        ]
    },
    {
        name: "Marshall Islands",
        clues: [
            "Capital is Majuro",
            "Major cities include Ebeye and Arno",
            "Famous landmark is Bikini Atoll",
            "Located in Oceania",
            "Official languages are Marshallese and English",
            "Currency is United States Dollar"
        ]
    },
    {
        name: "Palau",
        clues: [
            "Capital is Ngerulmud",
            "Major cities include Koror and Airai",
            "Famous landmark is Rock Islands",
            "Located in Oceania",
            "Official languages are Palauan and English",
            "Currency is United States Dollar"
        ]
    },
    {
        name: "Micronesia",
        clues: [
            "Capital is Palikir",
            "Major cities include Weno and Kolonia",
            "Famous landmark is Nan Madol",
            "Located in Oceania",
            "Official languages are English and local languages",
            "Currency is United States Dollar"
        ]
    },
    {
        name: "Kiribati",
        clues: [
            "Capital is South Tarawa",
            "Major cities include Betio and Bairiki",
            "Famous landmark is Kiritimati",
            "Located in Oceania",
            "Official languages are English and Gilbertese",
            "Currency is Australian Dollar"
        ]
    },
    {
        name: "Australia",
        clues: [
            "Capital is Canberra",
            "Major cities include Sydney and Melbourne",
            "Famous landmark is Sydney Opera House",
            "Located in Oceania",
            "Official language is English",
            "Currency is Australian Dollar"
        ]
    },
    {
        name: "New Zealand",
        clues: [
            "Capital is Wellington",
            "Major cities include Auckland and Christchurch",
            "Famous landmark is Milford Sound",
            "Located in Oceania",
            "Official languages are English, Māori, NZ Sign Language",
            "Currency is New Zealand Dollar"
        ]
    }
];

let currentCountry = {};
let clueIndex = 0;
let score = 0;
let questionsAsked = 0;
let remainingCountries = [...countries];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    if (remainingCountries.length === 0) {
        remainingCountries = [...countries];
    }

    shuffle(remainingCountries);
    currentCountry = remainingCountries.pop();
    clueIndex = 0;

    // Ensure the first clue is not about location, language, or currency
    const initialClues = currentCountry.clues.slice(0, 3); // Assuming the first three are non-location, non-language, non-currency
    const otherClues = currentCountry.clues.slice(3);
    shuffle(otherClues);
    currentCountry.clues = [...initialClues, ...otherClues];

    document.getElementById("clue").innerText = currentCountry.clues[clueIndex];
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    if (userAnswer === currentCountry.name.toLowerCase()) {
        score++;
        document.getElementById("result").innerText = `Correct! The answer is ${currentCountry.name}. Your score is ${score}.`;
        setTimeout(startQuiz, 2000);
    } else {
        clueIndex++;
        if (clueIndex < currentCountry.clues.length) {
            document.getElementById("clue").innerText = currentCountry.clues[clueIndex];
            document.getElementById("result").innerText = "Incorrect. Try again!";
        } else {
            document.getElementById("result").innerText = `Sorry, the correct answer was ${currentCountry.name}. Your score is ${score}.`;
            setTimeout(startQuiz, 2000);
        }
    }
}

startQuiz();
