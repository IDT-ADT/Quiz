let countries = [
    {
        name: "Argentina",
        clues: [
            "Capital is Buenos Aires",
            "Major cities include Córdoba and Rosario",
            "Famous landmark is Iguazu Falls",
            "Official language is Spanish",
            "Currency is Argentine Peso",
            "Located in South America",
            "Flag description: Blue and white stripes with a yellow sun"
        ]
    },
    {
        name: "Bolivia",
        clues: [
            "Capital is Sucre (constitutional) and La Paz (administrative)",
            "Major cities include Santa Cruz and Cochabamba",
            "Famous landmark is Salar de Uyuni",
            "Official languages are Spanish and indigenous languages",
            "Currency is Bolivian Boliviano",
            "Located in South America",
            "Flag description: Red, yellow, and green horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Paraguay",
        clues: [
            "Capital is Asunción",
            "Major cities include Ciudad del Este and Encarnación",
            "Famous landmark is Iguazu Falls",
            "Official languages are Spanish and Guarani",
            "Currency is Paraguayan Guarani",
            "Located in South America",
            "Flag description: Red, white, and blue horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Uruguay",
        clues: [
            "Capital is Montevideo",
            "Major cities include Salto and Ciudad de la Costa",
            "Famous landmark is Punta del Este",
            "Official language is Spanish",
            "Currency is Uruguayan Peso",
            "Located in South America",
            "Flag description: White and blue stripes with a yellow sun"
        ]
    },
    {
        name: "Guyana",
        clues: [
            "Capital is Georgetown",
            "Major cities include Linden and New Amsterdam",
            "Famous landmark is Kaieteur Falls",
            "Official language is English",
            "Currency is Guyanese Dollar",
            "Located in South America",
            "Flag description: Green, white, and red with a yellow triangle"
        ]
    },
    {
        name: "Suriname",
        clues: [
            "Capital is Paramaribo",
            "Major cities include Lelydorp and Nieuw Nickerie",
            "Famous landmark is Central Suriname Nature Reserve",
            "Official language is Dutch",
            "Currency is Surinamese Dollar",
            "Located in South America",
            "Flag description: Green, white, and red horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Brazil",
        clues: [
            "Capital is Brasília",
            "Major cities include São Paulo and Rio de Janeiro",
            "Famous landmark is Christ the Redeemer",
            "Official language is Portuguese",
            "Currency is Brazilian Real",
            "Located in South America",
            "Flag description: Green with a yellow diamond and blue globe"
        ]
    },
    {
        name: "Honduras",
        clues: [
            "Capital is Tegucigalpa",
            "Major cities include San Pedro Sula and La Ceiba",
            "Famous landmark is Copán Ruins",
            "Official language is Spanish",
            "Currency is Honduran Lempira",
            "Located in Central America",
            "Flag description: Blue and white horizontal stripes with five blue stars"
        ]
    },
    {
        name: "El Salvador",
        clues: [
            "Capital is San Salvador",
            "Major cities include Santa Ana and San Miguel",
            "Famous landmark is Joya de Cerén",
            "Official language is Spanish",
            "Currency is United States Dollar",
            "Located in Central America",
            "Flag description: Blue and white horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Nicaragua",
        clues: [
            "Capital is Managua",
            "Major cities include León and Granada",
            "Famous landmark is Masaya Volcano",
            "Official language is Spanish",
            "Currency is Nicaraguan Córdoba",
            "Located in Central America",
            "Flag description: Blue and white horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Costa Rica",
        clues: [
            "Capital is San José",
            "Major cities include Limón and Alajuela",
            "Famous landmark is Arenal Volcano",
            "Official language is Spanish",
            "Currency is Costa Rican Colón",
            "Located in Central America",
            "Flag description: Blue, white, and red horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Panama",
        clues: [
            "Capital is Panama City",
            "Major cities include Colón and David",
            "Famous landmark is Panama Canal",
            "Official language is Spanish",
            "Currency is Panamanian Balboa",
            "Located in Central America",
            "Flag description: White, red, and blue squares with stars"
        ]
    },
    {
        name: "Guatemala",
        clues: [
            "Capital is Guatemala City",
            "Major cities include Quetzaltenango and Escuintla",
            "Famous landmark is Tikal",
            "Official language is Spanish",
            "Currency is Guatemalan Quetzal",
            "Located in Central America",
            "Flag description: Blue and white vertical stripes with a coat of arms"
        ]
    },
    {
        name: "Belize",
        clues: [
            "Capital is Belmopan",
            "Major cities include Belize City and San Ignacio",
            "Famous landmark is Great Blue Hole",
            "Official language is English",
            "Currency is Belize Dollar",
            "Located in Central America",
            "Flag description: Blue with red stripes and a coat of arms"
        ]
    },
    {
        name: "Mexico",
        clues: [
            "Capital is Mexico City",
            "Major cities include Guadalajara and Monterrey",
            "Famous landmark is Chichen Itza",
            "Official language is Spanish",
            "Currency is Mexican Peso",
            "Located in North America",
            "Flag description: Green, white, and red vertical stripes with a coat of arms"
        ]
    },
    {
        name: "United States",
        clues: [
            "Capital is Washington, D.C.",
            "Major cities include New York City and Los Angeles",
            "Famous landmark is Statue of Liberty",
            "Official language is English",
            "Currency is US Dollar",
            "Located in North America",
            "Flag description: Red and white stripes with a blue field containing 50 stars"
        ]
    },
    {
        name: "Canada",
        clues: [
            "Capital is Ottawa",
            "Major cities include Toronto and Vancouver",
            "Famous landmark is CN Tower",
            "Official languages are English and French",
            "Currency is Canadian Dollar",
            "Located in North America",
            "Flag description: Red with a white square and a red maple leaf"
        ]
    },
    {
        name: "Cuba",
        clues: [
            "Capital is Havana",
            "Major cities include Santiago de Cuba and Camagüey",
            "Famous landmark is Varadero Beach",
            "Official language is Spanish",
            "Currency is Cuban Peso",
            "Located in North America",
            "Flag description: Blue and white stripes with a red triangle and white star"
        ]
    },
    {
        name: "Jamaica",
        clues: [
            "Capital is Kingston",
            "Major cities include Montego Bay and Spanish Town",
            "Famous landmark is Dunn's River Falls",
            "Official language is English",
            "Currency is Jamaican Dollar",
            "Located in North America",
            "Flag description: Green and black with a yellow cross"
        ]
    },
    {
        name: "Haiti",
        clues: [
            "Capital is Port-au-Prince",
            "Major cities include Cap-Haïtien and Gonaïves",
            "Famous landmark is Citadelle Laferrière",
            "Official languages are French and Haitian Creole",
            "Currency is Haitian Gourde",
            "Located in North America",
            "Flag description: Blue and red horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Dominican Republic",
        clues: [
            "Capital is Santo Domingo",
            "Major cities include Santiago de los Caballeros and La Romana",
            "Famous landmark is Punta Cana",
            "Official language is Spanish",
            "Currency is Dominican Peso",
            "Located in North America",
            "Flag description: Blue, red, and white with a coat of arms"
        ]
    },
    {
        name: "Puerto Rico",
        clues: [
            "Capital is San Juan",
            "Major cities include Ponce and Mayagüez",
            "Famous landmark is El Yunque National Forest",
            "Official languages are Spanish and English",
            "Currency is United States Dollar",
            "Located in North America",
            "Flag description: Red and white stripes with a blue triangle and white star"
        ]
    },
    {
        name: "Bahamas",
        clues: [
            "Capital is Nassau",
            "Major cities include Freeport and West End",
            "Famous landmark is Paradise Island",
            "Official language is English",
            "Currency is Bahamian Dollar",
            "Located in North America",
            "Flag description: Black, blue, and yellow horizontal stripes"
        ]
    },
    {
        name: "Barbados",
        clues: [
            "Capital is Bridgetown",
            "Major cities include Speightstown and Oistins",
            "Famous landmark is Bathsheba Beach",
            "Official language is English",
            "Currency is Barbadian Dollar",
            "Located in North America",
            "Flag description: Blue and yellow vertical stripes with a trident"
        ]
    },
    {
        name: "Trinidad and Tobago",
        clues: [
            "Capital is Port of Spain",
            "Major cities include San Fernando and Chaguanas",
            "Famous landmark is Maracas Beach",
            "Official language is English",
            "Currency is Trinidad and Tobago Dollar",
            "Located in North America",
            "Flag description: Red with a black and white diagonal stripe"
        ]
    },
    {
        name: "Saint Kitts and Nevis",
        clues: [
            "Capital is Basseterre",
            "Major cities include Charlestown and Sandy Point Town",
            "Famous landmark is Brimstone Hill Fortress",
            "Official language is English",
            "Currency is East Caribbean Dollar",
            "Located in North America",
            "Flag description: Green, yellow, and red stripes with black triangles and stars"
        ]
    },
    {
        name: "Saint Lucia",
        clues: [
            "Capital is Castries",
            "Major cities include Gros Islet and Soufrière",
            "Famous landmark is Pitons",
            "Official language is English",
            "Currency is East Caribbean Dollar",
            "Located in North America",
            "Flag description: Blue with a black, yellow, and white triangle"
        ]
    },
    {
        name: "Saint Vincent and the Grenadines",
        clues: [
            "Capital is Kingstown",
            "Major cities include Georgetown and Barrouallie",
            "Famous landmark is La Soufrière",
            "Official language is English",
            "Currency is East Caribbean Dollar",
            "Located in North America",
            "Flag description: Blue, yellow, and green with a diamond shape"
        ]
    },
    {
        name: "Antigua and Barbuda",
        clues: [
            "Capital is St. John's",
            "Major cities include All Saints and Liberta",
            "Famous landmark is Nelson's Dockyard",
            "Official language is English",
            "Currency is East Caribbean Dollar",
            "Located in North America",
            "Flag description: Red, blue, black, and yellow with a sun"
        ]
    },
    {
        name: "Grenada",
        clues: [
            "Capital is St. George's",
            "Major cities include Gouyave and Grenville",
            "Famous landmark is Grand Anse Beach",
            "Official language is English",
            "Currency is East Caribbean Dollar",
            "Located in North America",
            "Flag description: Red, green, and yellow with a nutmeg"
        ]
    },
    {
        name: "Dominica",
        clues: [
            "Capital is Roseau",
            "Major cities include Portsmouth and Marigot",
            "Famous landmark is Boiling Lake",
            "Official language is English",
            "Currency is East Caribbean Dollar",
            "Located in North America",
            "Flag description: Green with a parrot and stars"
        ]
    },
    {
        name: "Iceland",
        clues: [
            "Capital is Reykjavik",
            "Major cities include Akureyri and Hafnarfjörður",
            "Famous landmark is Blue Lagoon",
            "Official language is Icelandic",
            "Currency is Icelandic Króna",
            "Located in Europe",
            "Flag description: Blue with a red and white Nordic cross"
        ]
    },
    {
        name: "Norway",
        clues: [
            "Capital is Oslo",
            "Major cities include Bergen and Stavanger",
            "Famous landmark is Geiranger Fjord",
            "Official languages are Norwegian Bokmål and Nynorsk",
            "Currency is Norwegian Krone",
            "Located in Europe",
            "Flag description: Red with a blue Nordic cross outlined in white"
        ]
    },
    {
        name: "Sweden",
        clues: [
            "Capital is Stockholm",
            "Major cities include Gothenburg and Malmö",
            "Famous landmark is Vasa Museum",
            "Official language is Swedish",
            "Currency is Swedish Krona",
            "Located in Europe",
            "Flag description: Blue with a yellow Nordic cross"
        ]
    },
    {
        name: "Finland",
        clues: [
            "Capital is Helsinki",
            "Major cities include Espoo and Tampere",
            "Famous landmark is Suomenlinna Fortress",
            "Official languages are Finnish and Swedish",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: White with a blue Nordic cross"
        ]
    },
    {
        name: "Denmark",
        clues: [
            "Capital is Copenhagen",
            "Major cities include Aarhus and Odense",
            "Famous landmark is Little Mermaid Statue",
            "Official language is Danish",
            "Currency is Danish Krone",
            "Located in Europe",
            "Flag description: Red with a white Nordic cross"
        ]
    },
    {
        name: "Estonia",
        clues: [
            "Capital is Tallinn",
            "Major cities include Tartu and Narva",
            "Famous landmark is Alexander Nevsky Cathedral",
            "Official language is Estonian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Blue, black, and white horizontal stripes"
        ]
    },
    {
        name: "Latvia",
        clues: [
            "Capital is Riga",
            "Major cities include Daugavpils and Liepāja",
            "Famous landmark is Riga Cathedral",
            "Official language is Latvian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red with a white horizontal stripe"
        ]
    },
    {
        name: "Lithuania",
        clues: [
            "Capital is Vilnius",
            "Major cities include Kaunas and Klaipėda",
            "Famous landmark is Gediminas' Tower",
            "Official language is Lithuanian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Yellow, green, and red horizontal stripes"
        ]
    },
    {
        name: "Poland",
        clues: [
            "Capital is Warsaw",
            "Major cities include Kraków and Wrocław",
            "Famous landmark is Wawel Castle",
            "Official language is Polish",
            "Currency is Polish Złoty",
            "Located in Europe",
            "Flag description: White and red horizontal stripes"
        ]
    },
    {
        name: "Germany",
        clues: [
            "Capital is Berlin",
            "Major cities include Munich and Hamburg",
            "Famous landmark is Brandenburg Gate",
            "Official language is German",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Black, red, and gold horizontal stripes"
        ]
    },
    {
        name: "Czech Republic",
        clues: [
            "Capital is Prague",
            "Major cities include Brno and Ostrava",
            "Famous landmark is Charles Bridge",
            "Official language is Czech",
            "Currency is Czech Koruna",
            "Located in Europe",
            "Flag description: White, red, and blue horizontal stripes"
        ]
    },
    {
        name: "Slovakia",
        clues: [
            "Capital is Bratislava",
            "Major cities include Košice and Prešov",
            "Famous landmark is Bratislava Castle",
            "Official language is Slovak",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: White, blue, and red horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Hungary",
        clues: [
            "Capital is Budapest",
            "Major cities include Debrecen and Szeged",
            "Famous landmark is Buda Castle",
            "Official language is Hungarian",
            "Currency is Hungarian Forint",
            "Located in Europe",
            "Flag description: Red, white, and green horizontal stripes"
        ]
    },
    {
        name: "Austria",
        clues: [
            "Capital is Vienna",
            "Major cities include Salzburg and Innsbruck",
            "Famous landmark is Schönbrunn Palace",
            "Official language is German",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red, white, and red horizontal stripes"
        ]
    },
    {
        name: "Switzerland",
        clues: [
            "Capital is Bern",
            "Major cities include Zurich and Geneva",
            "Famous landmark is Matterhorn",
            "Official languages are German, French, Italian, Romansh",
            "Currency is Swiss Franc",
            "Located in Europe",
            "Flag description: Red with a white cross"
        ]
    },
    {
        name: "Belgium",
        clues: [
            "Capital is Brussels",
            "Major cities include Antwerp and Ghent",
            "Famous landmark is Atomium",
            "Official languages are Dutch, French, German",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Black, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Netherlands",
        clues: [
            "Capital is Amsterdam",
            "Major cities include Rotterdam and The Hague",
            "Famous landmark is Anne Frank House",
            "Official language is Dutch",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red, white, and blue horizontal stripes"
        ]
    },
    {
        name: "Luxembourg",
        clues: [
            "Capital is Luxembourg City",
            "Major cities include Esch-sur-Alzette and Differdange",
            "Famous landmark is Vianden Castle",
            "Official languages are Luxembourgish, French, German",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red, white, and blue horizontal stripes"
        ]
    },
    {
        name: "France",
        clues: [
            "Capital is Paris",
            "Major cities include Marseille and Lyon",
            "Famous landmark is Eiffel Tower",
            "Official language is French",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Blue, white, and red vertical stripes"
        ]
    },
    {
        name: "Monaco",
        clues: [
            "City-state with the same name",
            "Famous landmark is Monte Carlo Casino",
            "Official language is French",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red and white horizontal stripes"
        ]
    },
    {
        name: "Italy",
        clues: [
            "Capital is Rome",
            "Major cities include Milan and Naples",
            "Famous landmark is Colosseum",
            "Official language is Italian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Green, white, and red vertical stripes"
        ]
    },
    {
        name: "San Marino",
        clues: [
            "City-state with the same name",
            "Famous landmark is Guaita Tower",
            "Official language is Italian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: White and blue horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Vatican City",
        clues: [
            "City-state with the same name",
            "Famous landmark is St. Peter's Basilica",
            "Official languages are Latin and Italian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Yellow and white vertical stripes with keys and a tiara"
        ]
    },
    {
        name: "Malta",
        clues: [
            "Capital is Valletta",
            "Major cities include Birkirkara and Mosta",
            "Famous landmark is Hypogeum of Ħal-Saflieni",
            "Official languages are Maltese and English",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: White and red with a George Cross"
        ]
    },
    {
        name: "Spain",
        clues: [
            "Capital is Madrid",
            "Major cities include Barcelona and Valencia",
            "Famous landmark is Sagrada Família",
            "Official language is Spanish",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red and yellow horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Portugal",
        clues: [
            "Capital is Lisbon",
            "Major cities include Porto and Faro",
            "Famous landmark is Belém Tower",
            "Official language is Portuguese",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Green and red with a coat of arms"
        ]
    },
    {
        name: "Andorra",
        clues: [
            "Capital is Andorra la Vella",
            "Major cities include Escaldes-Engordany and Encamp",
            "Famous landmark is Casa de la Vall",
            "Official language is Catalan",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Blue, yellow, and red vertical stripes with a coat of arms"
        ]
    },
    {
        name: "United Kingdom",
        clues: [
            "Capital is London",
            "Major cities include Manchester and Birmingham",
            "Famous landmark is Big Ben",
            "Official language is English",
            "Currency is Pound Sterling",
            "Located in Europe",
            "Flag description: Blue with red cross edged in white that extends to the edges of the flag"
        ]
    },
    {
        name: "Ireland",
        clues: [
            "Capital is Dublin",
            "Major cities include Cork and Galway",
            "Famous landmark is Cliffs of Moher",
            "Official languages are Irish and English",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Green, white, and orange vertical stripes"
        ]
    },
    {
        name: "Iceland",
        clues: [
            "Capital is Reykjavik",
            "Major cities include Akureyri and Hafnarfjörður",
            "Famous landmark is Blue Lagoon",
            "Official language is Icelandic",
            "Currency is Icelandic Króna",
            "Located in Europe",
            "Flag description: Blue with a red and white Nordic cross"
        ]
    },
    {
        name: "Norway",
        clues: [
            "Capital is Oslo",
            "Major cities include Bergen and Stavanger",
            "Famous landmark is Geiranger Fjord",
            "Official languages are Norwegian Bokmål and Nynorsk",
            "Currency is Norwegian Krone",
            "Located in Europe",
            "Flag description: Red with a blue Nordic cross outlined in white"
        ]
    },
    {
        name: "Sweden",
        clues: [
            "Capital is Stockholm",
            "Major cities include Gothenburg and Malmö",
            "Famous landmark is Vasa Museum",
            "Official language is Swedish",
            "Currency is Swedish Krona",
            "Located in Europe",
            "Flag description: Blue with a yellow Nordic cross"
        ]
    },
    {
        name: "Finland",
        clues: [
            "Capital is Helsinki",
            "Major cities include Espoo and Tampere",
            "Famous landmark is Suomenlinna Fortress",
            "Official languages are Finnish and Swedish",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: White with a blue Nordic cross"
        ]
    },
    {
        name: "Denmark",
        clues: [
            "Capital is Copenhagen",
            "Major cities include Aarhus and Odense",
            "Famous landmark is Little Mermaid Statue",
            "Official language is Danish",
            "Currency is Danish Krone",
            "Located in Europe",
            "Flag description: Red with a white Nordic cross"
        ]
    },
    {
        name: "Estonia",
        clues: [
            "Capital is Tallinn",
            "Major cities include Tartu and Narva",
            "Famous landmark is Alexander Nevsky Cathedral",
            "Official language is Estonian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Blue, black, and white horizontal stripes"
        ]
    },
    {
        name: "Latvia",
        clues: [
            "Capital is Riga",
            "Major cities include Daugavpils and Liepāja",
            "Famous landmark is Riga Cathedral",
            "Official language is Latvian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red with a white horizontal stripe"
        ]
    },
    {
        name: "Lithuania",
        clues: [
            "Capital is Vilnius",
            "Major cities include Kaunas and Klaipėda",
            "Famous landmark is Gediminas' Tower",
            "Official language is Lithuanian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Yellow, green, and red horizontal stripes"
        ]
    },
    {
        name: "Belarus",
        clues: [
            "Capital is Minsk",
            "Major cities include Gomel and Mogilev",
            "Famous landmark is Mir Castle",
            "Official languages are Belarusian and Russian",
            "Currency is Belarusian Ruble",
            "Located in Europe",
            "Flag description: Red and green horizontal stripes with a white and red pattern"
        ]
    },
    {
        name: "Ukraine",
        clues: [
            "Capital is Kyiv",
            "Major cities include Lviv and Kharkiv",
            "Famous landmark is Saint Sophia's Cathedral",
            "Official language is Ukrainian",
            "Currency is Ukrainian Hryvnia",
            "Located in Europe",
            "Flag description: Blue and yellow horizontal stripes"
        ]
    },
    {
        name: "Moldova",
        clues: [
            "Capital is Chișinău",
            "Major cities include Tiraspol and Bălți",
            "Famous landmark is Orheiul Vechi",
            "Official language is Romanian",
            "Currency is Moldovan Leu",
            "Located in Europe",
            "Flag description: Blue, yellow, and red vertical stripes with a coat of arms"
        ]
    },
    {
        name: "Romania",
        clues: [
            "Capital is Bucharest",
            "Major cities include Cluj-Napoca and Timișoara",
            "Famous landmark is Bran Castle",
            "Official language is Romanian",
            "Currency is Romanian Leu",
            "Located in Europe",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Bulgaria",
        clues: [
            "Capital is Sofia",
            "Major cities include Plovdiv and Varna",
            "Famous landmark is Rila Monastery",
            "Official language is Bulgarian",
            "Currency is Bulgarian Lev",
            "Located in Europe",
            "Flag description: White, green, and red horizontal stripes"
        ]
    },
    {
        name: "Serbia",
        clues: [
            "Capital is Belgrade",
            "Major cities include Novi Sad and Niš",
            "Famous landmark is Belgrade Fortress",
            "Official language is Serbian",
            "Currency is Serbian Dinar",
            "Located in Europe",
            "Flag description: Red, blue, and white horizontal stripes with a coat of arms"
        ]
    },
    {
        name: "Montenegro",
        clues: [
            "Capital is Podgorica",
            "Major cities include Nikšić and Herceg Novi",
            "Famous landmark is Kotor",
            "Official language is Montenegrin",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red with a gold border and a coat of arms"
        ]
    },
    {
        name: "North Macedonia",
        clues: [
            "Capital is Skopje",
            "Major cities include Bitola and Ohrid",
            "Famous landmark is Lake Ohrid",
            "Official language is Macedonian",
            "Currency is Macedonian Denar",
            "Located in Europe",
            "Flag description: Red with a yellow sun and rays"
        ]
    },
    {
        name: "Albania",
        clues: [
            "Capital is Tirana",
            "Major cities include Durrës and Vlorë",
            "Famous landmark is Rozafa Castle",
            "Official language is Albanian",
            "Currency is Albanian Lek",
            "Located in Europe",
            "Flag description: Red with a black double-headed eagle"
        ]
    },
    {
        name: "Bosnia and Herzegovina",
        clues: [
            "Capital is Sarajevo",
            "Major cities include Banja Luka and Mostar",
            "Famous landmark is Stari Most",
            "Official languages are Bosnian, Croatian, Serbian",
            "Currency is Bosnia and Herzegovina Convertible Mark",
            "Located in Europe",
            "Flag description: Blue with yellow triangle and white stars"
        ]
    },
    {
        name: "Croatia",
        clues: [
            "Capital is Zagreb",
            "Major cities include Split and Dubrovnik",
            "Famous landmark is Plitvice Lakes",
            "Official language is Croatian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Red, white, and blue stripes with a coat of arms"
        ]
    },
    {
        name: "Slovenia",
        clues: [
            "Capital is Ljubljana",
            "Major cities include Maribor and Celje",
            "Famous landmark is Lake Bled",
            "Official language is Slovene",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: White, blue, and red stripes with a coat of arms"
        ]
    },
    {
        name: "Kosovo",
        clues: [
            "Capital is Pristina",
            "Major cities include Mitrovica and Peja",
            "Famous landmark is Visoki Dečani Monastery",
            "Official languages are Albanian and Serbian",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Blue with a yellow map and white stars"
        ]
    },
    {
        name: "Greece",
        clues: [
            "Capital is Athens",
            "Major cities include Thessaloniki and Patras",
            "Famous landmark is Parthenon",
            "Official language is Greek",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: Blue and white stripes with a blue square and white cross"
        ]
    },
    {
        name: "Turkey",
        clues: [
            "Capital is Ankara",
            "Major cities include Istanbul and Izmir",
            "Famous landmark is Hagia Sophia",
            "Official language is Turkish",
            "Currency is Turkish Lira",
            "Located in Europe/Asia",
            "Flag description: Red with a white star and crescent"
        ]
    },
    {
        name: "Cyprus",
        clues: [
            "Capital is Nicosia",
            "Major cities include Limassol and Larnaca",
            "Famous landmark is Paphos",
            "Official languages are Greek and Turkish",
            "Currency is Euro",
            "Located in Europe/Asia",
            "Flag description: White with a copper-colored map and green olive branches"
        ]
    },
    {
        name: "Malta",
        clues: [
            "Capital is Valletta",
            "Major cities include Birkirkara and Mosta",
            "Famous landmark is Hypogeum of Ħal-Saflieni",
            "Official languages are Maltese and English",
            "Currency is Euro",
            "Located in Europe",
            "Flag description: White and red with a George Cross"
        ]
    },
    {
        name: "Egypt",
        clues: [
            "Capital is Cairo",
            "Major cities include Alexandria and Giza",
            "Famous landmark is Pyramids of Giza",
            "Official language is Arabic",
            "Currency is Egyptian Pound",
            "Located in Africa",
            "Flag description: Red, white, and black horizontal stripes with a gold eagle"
        ]
    },
    {
        name: "Libya",
        clues: [
            "Capital is Tripoli",
            "Major cities include Benghazi and Misrata",
            "Famous landmark is Leptis Magna",
            "Official language is Arabic",
            "Currency is Libyan Dinar",
            "Located in Africa",
            "Flag description: Red, black, and green with a white crescent and star"
        ]
    },
    {
        name: "Tunisia",
        clues: [
            "Capital is Tunis",
            "Major cities include Sfax and Sousse",
            "Famous landmark is Amphitheatre of El Jem",
            "Official language is Arabic",
            "Currency is Tunisian Dinar",
            "Located in Africa",
            "Flag description: Red with a white circle and red crescent and star"
        ]
    },
    {
        name: "Algeria",
        clues: [
            "Capital is Algiers",
            "Major cities include Oran and Constantine",
            "Famous landmark is Casbah of Algiers",
            "Official languages are Arabic and Berber",
            "Currency is Algerian Dinar",
            "Located in Africa",
            "Flag description: Green and white with a red crescent and star"
        ]
    },
    {
        name: "Morocco",
        clues: [
            "Capital is Rabat",
            "Major cities include Casablanca and Marrakesh",
            "Famous landmark is Hassan II Mosque",
            "Official languages are Arabic and Berber",
            "Currency is Moroccan Dirham",
            "Located in Africa",
            "Flag description: Red with a green star"
        ]
    },
    {
        name: "Mauritania",
        clues: [
            "Capital is Nouakchott",
            "Major cities include Nouadhibou and Kiffa",
            "Famous landmark is Banc d'Arguin National Park",
            "Official language is Arabic",
            "Currency is Mauritanian Ouguiya",
            "Located in Africa",
            "Flag description: Green with a yellow crescent and star"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Sudan",
        clues: [
            "Capital is Khartoum",
            "Major cities include Omdurman and Port Sudan",
            "Famous landmark is Meroë Pyramids",
            "Official languages are Arabic and English",
            "Currency is Sudanese Pound",
            "Located in Africa",
            "Flag description: Red, white, and black horizontal stripes with a green triangle"
        ]
    },
    {
        name: "South Sudan",
        clues: [
            "Capital is Juba",
            "Major cities include Malakal and Wau",
            "Famous landmark is Boma National Park",
            "Official languages are English and Arabic",
            "Currency is South Sudanese Pound",
            "Located in Africa",
            "Flag description: Black, red, and green horizontal stripes with blue triangle and yellow star"
        ]
    },
    {
        name: "Eritrea",
        clues: [
            "Capital is Asmara",
            "Major cities include Keren and Massawa",
            "Famous landmark is Dahlak Archipelago",
            "Official languages are Tigrinya, Arabic, English",
            "Currency is Eritrean Nakfa",
            "Located in Africa",
            "Flag description: Red, blue, and green triangles with a yellow olive branch"
        ]
    },
    {
        name: "Djibouti",
        clues: [
            "Capital is Djibouti",
            "Major cities include Ali Sabieh and Tadjourah",
            "Famous landmark is Lake Assal",
            "Official languages are French and Arabic",
            "Currency is Djiboutian Franc",
            "Located in Africa",
            "Flag description: Blue, green, and white with a red star"
        ]
    },
    {
        name: "Somalia",
        clues: [
            "Capital is Mogadishu",
            "Major cities include Hargeisa and Bosaso",
            "Famous landmark is Laas Geel",
            "Official languages are Somali and Arabic",
            "Currency is Somali Shilling",
            "Located in Africa",
            "Flag description: Blue with a white star"
        ]
    },
    {
        name: "Ethiopia",
        clues: [
            "Capital is Addis Ababa",
            "Major cities include Dire Dawa and Mekelle",
            "Famous landmark is Lalibela",
            "Official language is Amharic",
            "Currency is Ethiopian Birr",
            "Located in Africa",
            "Flag description: Green, yellow, and red horizontal stripes with a blue star"
        ]
    },
    {
        name: "Kenya",
        clues: [
            "Capital is Nairobi",
            "Major cities include Mombasa and Kisumu",
            "Famous landmark is Maasai Mara",
            "Official languages are English and Swahili",
            "Currency is Kenyan Shilling",
            "Located in Africa",
            "Flag description: Black, red, and green with a white outline and a shield"
        ]
    },
    {
        name: "Uganda",
        clues: [
            "Capital is Kampala",
            "Major cities include Entebbe and Mbarara",
            "Famous landmark is Bwindi Impenetrable Forest",
            "Official languages are English and Swahili",
            "Currency is Ugandan Shilling",
            "Located in Africa",
            "Flag description: Black, yellow, and red horizontal stripes with a crane"
        ]
    },
    {
        name: "Rwanda",
        clues: [
            "Capital is Kigali",
            "Major cities include Butare and Gisenyi",
            "Famous landmark is Volcanoes National Park",
            "Official languages are Kinyarwanda, French, English",
            "Currency is Rwandan Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and green horizontal stripes with a sun"
        ]
    },
    {
        name: "Burundi",
        clues: [
            "Capital is Gitega",
            "Major cities include Bujumbura and Ngozi",
            "Famous landmark is Kibira National Park",
            "Official languages are Kirundi, French, English",
            "Currency is Burundian Franc",
            "Located in Africa",
            "Flag description: White with green and red triangles and stars"
        ]
    },
    {
        name: "Tanzania",
        clues: [
            "Capital is Dodoma",
            "Major cities include Dar es Salaam and Arusha",
            "Famous landmark is Mount Kilimanjaro",
            "Official languages are Swahili and English",
            "Currency is Tanzanian Shilling",
            "Located in Africa",
            "Flag description: Green, yellow, black, and blue diagonal stripes"
        ]
    },
    {
        name: "Seychelles",
        clues: [
            "Capital is Victoria",
            "Major cities include Anse Boileau and Beau Vallon",
            "Famous landmark is Anse Source d'Argent",
            "Official languages are Seychellois Creole, French, English",
            "Currency is Seychellois Rupee",
            "Located in Africa",
            "Flag description: Blue, yellow, red, white, and green diagonal stripes"
        ]
    },
    {
        name: "Mauritius",
        clues: [
            "Capital is Port Louis",
            "Major cities include Curepipe and Vacoas-Phoenix",
            "Famous landmark is Le Morne Brabant",
            "Official languages are English, French",
            "Currency is Mauritian Rupee",
            "Located in Africa",
            "Flag description: Red, blue, yellow, and green horizontal stripes"
        ]
    },
    {
        name: "Madagascar",
        clues: [
            "Capital is Antananarivo",
            "Major cities include Toamasina and Antsirabe",
            "Famous landmark is Avenue of the Baobabs",
            "Official languages are Malagasy, French",
            "Currency is Malagasy Ariary",
            "Located in Africa",
            "Flag description: Red, white, and green horizontal stripes"
        ]
    },
    {
        name: "Mozambique",
        clues: [
            "Capital is Maputo",
            "Major cities include Beira and Nampula",
            "Famous landmark is Bazaruto Archipelago",
            "Official language is Portuguese",
            "Currency is Mozambican Metical",
            "Located in Africa",
            "Flag description: Green, black, yellow, and white stripes with a red triangle and a star"
        ]
    },
    {
        name: "Zambia",
        clues: [
            "Capital is Lusaka",
            "Major cities include Ndola and Kitwe",
            "Famous landmark is Victoria Falls",
            "Official language is English",
            "Currency is Zambian Kwacha",
            "Located in Africa",
            "Flag description: Green with an eagle and orange, black, and red stripes"
        ]
    },
    {
        name: "Zimbabwe",
        clues: [
            "Capital is Harare",
            "Major cities include Bulawayo and Chitungwiza",
            "Famous landmark is Victoria Falls",
            "Official languages are English, Shona, Ndebele",
            "Currency is Zimbabwean Dollar",
            "Located in Africa",
            "Flag description: Green, yellow, red, and black stripes with a white triangle and a star"
        ]
    },
    {
        name: "Botswana",
        clues: [
            "Capital is Gaborone",
            "Major cities include Francistown and Maun",
            "Famous landmark is Okavango Delta",
            "Official language is English",
            "Currency is Botswana Pula",
            "Located in Africa",
            "Flag description: Blue with a black and white stripe"
        ]
    },
    {
        name: "Namibia",
        clues: [
            "Capital is Windhoek",
            "Major cities include Swakopmund and Walvis Bay",
            "Famous landmark is Sossusvlei",
            "Official language is English",
            "Currency is Namibian Dollar",
            "Located in Africa",
            "Flag description: Blue, red, green, white, and yellow stripes"
        ]
    },
    {
        name: "Angola",
        clues: [
            "Capital is Luanda",
            "Major cities include Huambo and Lobito",
            "Famous landmark is Kalandula Falls",
            "Official language is Portuguese",
            "Currency is Angolan Kwanza",
            "Located in Africa",
            "Flag description: Red and black with a yellow star and a machete"
        ]
    },
    {
        name: "South Africa",
        clues: [
            "Capitals are Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)",
            "Major cities include Johannesburg and Durban",
            "Famous landmark is Table Mountain",
            "Official languages include English, Zulu, Xhosa",
            "Currency is South African Rand",
            "Located in Africa",
            "Flag description: Green, gold, black, white, red, and blue Y-shaped design"
        ]
    },
    {
        name: "Lesotho",
        clues: [
            "Capital is Maseru",
            "Major cities include Teyateyaneng and Mafeteng",
            "Famous landmark is Maletsunyane Falls",
            "Official languages are English and Sesotho",
            "Currency is Lesotho Loti",
            "Located in Africa",
            "Flag description: Blue, white, and green with a black hat"
        ]
    },
    {
        name: "Swaziland",
        clues: [
            "Capital is Mbabane",
            "Major cities include Manzini and Big Bend",
            "Famous landmark is Mlilwane Wildlife Sanctuary",
            "Official languages are Swati and English",
            "Currency is Swazi Lilangeni",
            "Located in Africa",
            "Flag description: Blue, yellow, red with a shield"
        ]
    },
    {
        name: "Malawi",
        clues: [
            "Capital is Lilongwe",
            "Major cities include Blantyre and Mzuzu",
            "Famous landmark is Lake Malawi",
            "Official languages are English and Chichewa",
            "Currency is Malawian Kwacha",
            "Located in Africa",
            "Flag description: Black, red, and green with a rising sun"
        ]
    },
    {
        name: "Democratic Republic of the Congo",
        clues: [
            "Capital is Kinshasa",
            "Major cities include Lubumbashi and Mbuji-Mayi",
            "Famous landmark is Virunga National Park",
            "Official language is French",
            "Currency is Congolese Franc",
            "Located in Africa",
            "Flag description: Blue with a yellow star and a red stripe"
        ]
    },
    {
        name: "Republic of the Congo",
        clues: [
            "Capital is Brazzaville",
            "Major cities include Pointe-Noire and Dolisie",
            "Famous landmark is Odzala-Kokoua National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red diagonal stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Guinea",
        clues: [
            "Capital is Conakry",
            "Major cities include Kankan and Labé",
            "Famous landmark is Mount Nimba",
            "Official language is French",
            "Currency is Guinean Franc",
            "Located in Africa",
            "Flag description: Red, yellow, and green vertical stripes"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Republic of the Congo",
        clues: [
            "Capital is Brazzaville",
            "Major cities include Pointe-Noire and Dolisie",
            "Famous landmark is Odzala-Kokoua National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red diagonal stripes"
        ]
    },
    {
        name: "Democratic Republic of the Congo",
        clues: [
            "Capital is Kinshasa",
            "Major cities include Lubumbashi and Mbuji-Mayi",
            "Famous landmark is Virunga National Park",
            "Official language is French",
            "Currency is Congolese Franc",
            "Located in Africa",
            "Flag description: Blue with a yellow star and a red stripe"
        ]
    },
    {
        name: "Angola",
        clues: [
            "Capital is Luanda",
            "Major cities include Huambo and Lobito",
            "Famous landmark is Kalandula Falls",
            "Official language is Portuguese",
            "Currency is Angolan Kwanza",
            "Located in Africa",
            "Flag description: Red and black with a yellow star and a machete"
        ]
    },
    {
        name: "Zambia",
        clues: [
            "Capital is Lusaka",
            "Major cities include Ndola and Kitwe",
            "Famous landmark is Victoria Falls",
            "Official language is English",
            "Currency is Zambian Kwacha",
            "Located in Africa",
            "Flag description: Green with an eagle and orange, black, and red stripes"
        ]
    },
    {
        name: "Malawi",
        clues: [
            "Capital is Lilongwe",
            "Major cities include Blantyre and Mzuzu",
            "Famous landmark is Lake Malawi",
            "Official languages are English and Chichewa",
            "Currency is Malawian Kwacha",
            "Located in Africa",
            "Flag description: Black, red, and green with a rising sun"
        ]
    },
    {
        name: "Mozambique",
        clues: [
            "Capital is Maputo",
            "Major cities include Beira and Nampula",
            "Famous landmark is Bazaruto Archipelago",
            "Official language is Portuguese",
            "Currency is Mozambican Metical",
            "Located in Africa",
            "Flag description: Green, black, yellow, and white stripes with a red triangle and a star"
        ]
    },
    {
        name: "Madagascar",
        clues: [
            "Capital is Antananarivo",
            "Major cities include Toamasina and Antsirabe",
            "Famous landmark is Avenue of the Baobabs",
            "Official languages are Malagasy, French",
            "Currency is Malagasy Ariary",
            "Located in Africa",
            "Flag description: Red, white, and green horizontal stripes"
        ]
    },
    {
        name: "Mauritius",
        clues: [
            "Capital is Port Louis",
            "Major cities include Curepipe and Vacoas-Phoenix",
            "Famous landmark is Le Morne Brabant",
            "Official languages are English, French",
            "Currency is Mauritian Rupee",
            "Located in Africa",
            "Flag description: Red, blue, yellow, and green horizontal stripes"
        ]
    },
    {
        name: "Comoros",
        clues: [
            "Capital is Moroni",
            "Major cities include Mutsamudu and Fomboni",
            "Famous landmark is Mount Karthala",
            "Official languages are Comorian, Arabic, French",
            "Currency is Comorian Franc",
            "Located in Africa",
            "Flag description: Yellow, white, red, and blue stripes with a green triangle and stars"
        ]
    },
    {
        name: "Seychelles",
        clues: [
            "Capital is Victoria",
            "Major cities include Anse Boileau and Beau Vallon",
            "Famous landmark is Anse Source d'Argent",
            "Official languages are Seychellois Creole, French, English",
            "Currency is Seychellois Rupee",
            "Located in Africa",
            "Flag description: Blue, yellow, red, white, and green diagonal stripes"
        ]
    },
    {
        name: "Tanzania",
        clues: [
            "Capital is Dodoma",
            "Major cities include Dar es Salaam and Arusha",
            "Famous landmark is Mount Kilimanjaro",
            "Official languages are Swahili and English",
            "Currency is Tanzanian Shilling",
            "Located in Africa",
            "Flag description: Green, yellow, black, and blue diagonal stripes"
        ]
    },
    {
        name: "Kenya",
        clues: [
            "Capital is Nairobi",
            "Major cities include Mombasa and Kisumu",
            "Famous landmark is Maasai Mara",
            "Official languages are English and Swahili",
            "Currency is Kenyan Shilling",
            "Located in Africa",
            "Flag description: Black, red, and green with a white outline and a shield"
        ]
    },
    {
        name: "Uganda",
        clues: [
            "Capital is Kampala",
            "Major cities include Entebbe and Mbarara",
            "Famous landmark is Bwindi Impenetrable Forest",
            "Official languages are English and Swahili",
            "Currency is Ugandan Shilling",
            "Located in Africa",
            "Flag description: Black, yellow, and red horizontal stripes with a crane"
        ]
    },
    {
        name: "Rwanda",
        clues: [
            "Capital is Kigali",
            "Major cities include Butare and Gisenyi",
            "Famous landmark is Volcanoes National Park",
            "Official languages are Kinyarwanda, French, English",
            "Currency is Rwandan Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and green horizontal stripes with a sun"
        ]
    },
    {
        name: "Burundi",
        clues: [
            "Capital is Gitega",
            "Major cities include Bujumbura and Ngozi",
            "Famous landmark is Kibira National Park",
            "Official languages are Kirundi, French, English",
            "Currency is Burundian Franc",
            "Located in Africa",
            "Flag description: White with green and red triangles and stars"
        ]
    },
    {
        name: "Democratic Republic of the Congo",
        clues: [
            "Capital is Kinshasa",
            "Major cities include Lubumbashi and Mbuji-Mayi",
            "Famous landmark is Virunga National Park",
            "Official language is French",
            "Currency is Congolese Franc",
            "Located in Africa",
            "Flag description: Blue with a yellow star and a red stripe"
        ]
    },
    {
        name: "Republic of the Congo",
        clues: [
            "Capital is Brazzaville",
            "Major cities include Pointe-Noire and Dolisie",
            "Famous landmark is Odzala-Kokoua National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red diagonal stripes"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gambia",
        clues: [
            "Capital is Banjul",
            "Major cities include Serekunda and Brikama",
            "Famous landmark is Kunta Kinteh Island",
            "Official language is English",
            "Currency is Gambian Dalasi",
            "Located in Africa",
            "Flag description: Red, blue, green horizontal stripes with white lines"
        ]
    },
    {
        name: "Senegal",
        clues: [
            "Capital is Dakar",
            "Major cities include Touba and Thiès",
            "Famous landmark is Gorée Island",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes with a green star"
        ]
    },
    {
        name: "Guinea-Bissau",
        clues: [
            "Capital is Bissau",
            "Major cities include Bafatá and Gabú",
            "Famous landmark is Orango Islands National Park",
            "Official language is Portuguese",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red, yellow, and green with a black star"
        ]
    },
    {
        name: "Cape Verde",
        clues: [
            "Capital is Praia",
            "Major cities include Mindelo and Santa Maria",
            "Famous landmark is Fogo Volcano",
            "Official language is Portuguese",
            "Currency is Cape Verdean Escudo",
            "Located in Africa",
            "Flag description: Blue with white stripes and stars"
        ]
    },
    {
        name: "Sierra Leone",
        clues: [
            "Capital is Freetown",
            "Major cities include Bo and Kenema",
            "Famous landmark is Bunce Island",
            "Official language is English",
            "Currency is Sierra Leonean Leone",
            "Located in Africa",
            "Flag description: Green, white, and blue horizontal stripes"
        ]
    },
    {
        name: "Liberia",
        clues: [
            "Capital is Monrovia",
            "Major cities include Gbarnga and Buchanan",
            "Famous landmark is Providence Island",
            "Official language is English",
            "Currency is Liberian Dollar",
            "Located in Africa",
            "Flag description: Red and white stripes with a white star on a blue square"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Guinea",
        clues: [
            "Capital is Conakry",
            "Major cities include Kankan and Labé",
            "Famous landmark is Mount Nimba",
            "Official language is French",
            "Currency is Guinean Franc",
            "Located in Africa",
            "Flag description: Red, yellow, and green vertical stripes"
        ]
    },
    {
        name: "Sierra Leone",
        clues: [
            "Capital is Freetown",
            "Major cities include Bo and Kenema",
            "Famous landmark is Bunce Island",
            "Official language is English",
            "Currency is Sierra Leonean Leone",
            "Located in Africa",
            "Flag description: Green, white, and blue horizontal stripes"
        ]
    },
    {
        name: "Liberia",
        clues: [
            "Capital is Monrovia",
            "Major cities include Gbarnga and Buchanan",
            "Famous landmark is Providence Island",
            "Official language is English",
            "Currency is Liberian Dollar",
            "Located in Africa",
            "Flag description: Red and white stripes with a white star on a blue square"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Guinea",
        clues: [
            "Capital is Conakry",
            "Major cities include Kankan and Labé",
            "Famous landmark is Mount Nimba",
            "Official language is French",
            "Currency is Guinean Franc",
            "Located in Africa",
            "Flag description: Red, yellow, and green vertical stripes"
        ]
    },
    {
        name: "Sierra Leone",
        clues: [
            "Capital is Freetown",
            "Major cities include Bo and Kenema",
            "Famous landmark is Bunce Island",
            "Official language is English",
            "Currency is Sierra Leonean Leone",
            "Located in Africa",
            "Flag description: Green, white, and blue horizontal stripes"
        ]
    },
    {
        name: "Liberia",
        clues: [
            "Capital is Monrovia",
            "Major cities include Gbarnga and Buchanan",
            "Famous landmark is Providence Island",
            "Official language is English",
            "Currency is Liberian Dollar",
            "Located in Africa",
            "Flag description: Red and white stripes with a white star on a blue square"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
        ]
    },
    {
        name: "Gabon",
        clues: [
            "Capital is Libreville",
            "Major cities include Port-Gentil and Franceville",
            "Famous landmark is Loango National Park",
            "Official language is French",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and blue horizontal stripes"
        ]
    },
    {
        name: "Equatorial Guinea",
        clues: [
            "Capital is Malabo",
            "Major cities include Bata and Ebebiyin",
            "Famous landmark is Pico Basilé",
            "Official languages are Spanish, French, Portuguese",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, white, and red horizontal stripes with a blue triangle and a coat of arms"
        ]
    },
    {
        name: "Cameroon",
        clues: [
            "Capital is Yaoundé",
            "Major cities include Douala and Garoua",
            "Famous landmark is Mount Cameroon",
            "Official languages are French and English",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow vertical stripes with a star"
        ]
    },
    {
        name: "Central African Republic",
        clues: [
            "Capital is Bangui",
            "Major cities include Bimbo and Berbérati",
            "Famous landmark is Manovo-Gounda St Floris National Park",
            "Official languages are French and Sango",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, white, green, and yellow stripes with a red vertical stripe and a star"
        ]
    },
    {
        name: "Chad",
        clues: [
            "Capital is N'Djamena",
            "Major cities include Moundou and Sarh",
            "Famous landmark is Zakouma National Park",
            "Official languages are French and Arabic",
            "Currency is Central African CFA Franc",
            "Located in Africa",
            "Flag description: Blue, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Niger",
        clues: [
            "Capital is Niamey",
            "Major cities include Zinder and Maradi",
            "Famous landmark is Agadez Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green horizontal stripes with an orange circle"
        ]
    },
    {
        name: "Mali",
        clues: [
            "Capital is Bamako",
            "Major cities include Timbuktu and Sikasso",
            "Famous landmark is Djenné Mosque",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, yellow, and red vertical stripes"
        ]
    },
    {
        name: "Burkina Faso",
        clues: [
            "Capital is Ouagadougou",
            "Major cities include Bobo-Dioulasso and Koudougou",
            "Famous landmark is Ruins of Loropéni",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Red and green horizontal stripes with a yellow star"
        ]
    },
    {
        name: "Ivory Coast",
        clues: [
            "Capital is Yamoussoukro",
            "Major cities include Abidjan and Bouaké",
            "Famous landmark is Basilica of Our Lady of Peace",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Orange, white, and green vertical stripes"
        ]
    },
    {
        name: "Ghana",
        clues: [
            "Capital is Accra",
            "Major cities include Kumasi and Tamale",
            "Famous landmark is Cape Coast Castle",
            "Official language is English",
            "Currency is Ghanaian Cedi",
            "Located in Africa",
            "Flag description: Red, yellow, and green horizontal stripes with a black star"
        ]
    },
    {
        name: "Togo",
        clues: [
            "Capital is Lomé",
            "Major cities include Sokodé and Kara",
            "Famous landmark is Koutammakou",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green and yellow horizontal stripes with a red square and white star"
        ]
    },
    {
        name: "Benin",
        clues: [
            "Capital is Porto-Novo",
            "Major cities include Cotonou and Abomey",
            "Famous landmark is Pendjari National Park",
            "Official language is French",
            "Currency is West African CFA Franc",
            "Located in Africa",
            "Flag description: Green, red, and yellow horizontal stripes"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Major cities include Lagos and Kano",
            "Famous landmark is Zuma Rock",
            "Official language is English",
            "Currency is Nigerian Naira",
            "Located in Africa",
            "Flag description: Green and white vertical stripes"
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

function displayRandomCountry() {
    if (remainingCountries.length === 0) {
        document.getElementById('result').innerText = `Quiz complete! Your score is ${score} out of ${questionsAsked}.`;
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingCountries.length);
    currentCountry = remainingCountries.splice(randomIndex, 1)[0];
    clueIndex = 0;
    questionsAsked++;

    document.getElementById('countryName').innerText = "";
    document.getElementById('clue').innerText = currentCountry.clues[clueIndex];
}

function nextClue() {
    if (clueIndex < currentCountry.clues.length - 1) {
        clueIndex++;
        document.getElementById('clue').innerText = currentCountry.clues[clueIndex];
    } else {
        document.getElementById('result').innerText = `The correct answer was ${currentCountry.name}.`;
        displayRandomCountry();
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    if (userAnswer === currentCountry.name.toLowerCase()) {
        score++;
        document.getElementById('result').innerText = `Correct! Your score is ${score}.`;
        displayRandomCountry();
    } else {
        nextClue();
    }
    document.getElementById('answer').value = '';
}

// Start the game
shuffle(countries);
displayRandomCountry();
