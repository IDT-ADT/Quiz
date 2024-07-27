const countries = [
    {
        name: "Brazil",
        clues: [
            "Capital is Brasília",
            "Currency is Brazilian Real",
            "Official language is Portuguese",
            "Major cities include São Paulo and Rio de Janeiro",
            "Located in South America"
        ]
    },
    {
        name: "Japan",
        clues: [
            "Capital is Tokyo",
            "Currency is Japanese Yen",
            "Official language is Japanese",
            "Major cities include Osaka and Kyoto",
            "Located in Asia"
        ]
    },
    {
        name: "Canada",
        clues: [
            "Capital is Ottawa",
            "Currency is Canadian Dollar",
            "Official languages are English and French",
            "Major cities include Toronto and Vancouver",
            "Located in North America"
        ]
    },
    {
        name: "Australia",
        clues: [
            "Capital is Canberra",
            "Currency is Australian Dollar",
            "Official language is English",
            "Major cities include Sydney and Melbourne",
            "Located in Oceania"
        ]
    },
    {
        name: "India",
        clues: [
            "Capital is New Delhi",
            "Currency is Indian Rupee",
            "Official languages are Hindi and English",
            "Major cities include Mumbai and Bangalore",
            "Located in Asia"
        ]
    },
    {
        name: "Germany",
        clues: [
            "Capital is Berlin",
            "Currency is Euro",
            "Official language is German",
            "Major cities include Munich and Hamburg",
            "Located in Europe"
        ]
    },
    {
        name: "France",
        clues: [
            "Capital is Paris",
            "Currency is Euro",
            "Official language is French",
            "Major cities include Marseille and Lyon",
            "Located in Europe"
        ]
    },
    {
        name: "United Kingdom",
        clues: [
            "Capital is London",
            "Currency is Pound Sterling",
            "Official language is English",
            "Major cities include Manchester and Birmingham",
            "Located in Europe"
        ]
    },
    {
        name: "United States",
        clues: [
            "Capital is Washington, D.C.",
            "Currency is US Dollar",
            "Official language is English",
            "Major cities include New York City and Los Angeles",
            "Located in North America"
        ]
    },
    {
        name: "China",
        clues: [
            "Capital is Beijing",
            "Currency is Renminbi",
            "Official language is Mandarin",
            "Major cities include Shanghai and Guangzhou",
            "Located in Asia"
        ]
    },
    {
        name: "Russia",
        clues: [
            "Capital is Moscow",
            "Currency is Russian Ruble",
            "Official language is Russian",
            "Major cities include Saint Petersburg and Novosibirsk",
            "Located in Europe/Asia"
        ]
    },
    {
        name: "Italy",
        clues: [
            "Capital is Rome",
            "Currency is Euro",
            "Official language is Italian",
            "Major cities include Milan and Naples",
            "Located in Europe"
        ]
    },
    {
        name: "Spain",
        clues: [
            "Capital is Madrid",
            "Currency is Euro",
            "Official language is Spanish",
            "Major cities include Barcelona and Valencia",
            "Located in Europe"
        ]
    },
    {
        name: "Mexico",
        clues: [
            "Capital is Mexico City",
            "Currency is Mexican Peso",
            "Official language is Spanish",
            "Major cities include Guadalajara and Monterrey",
            "Located in North America"
        ]
    },
    {
        name: "South Africa",
        clues: [
            "Capital is Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)",
            "Currency is South African Rand",
            "Official languages include English, Zulu, Xhosa",
            "Major cities include Johannesburg and Durban",
            "Located in Africa"
        ]
    },
    {
        name: "South Korea",
        clues: [
            "Capital is Seoul",
            "Currency is South Korean Won",
            "Official language is Korean",
            "Major cities include Busan and Incheon",
            "Located in Asia"
        ]
    },
    {
        name: "Argentina",
        clues: [
            "Capital is Buenos Aires",
            "Currency is Argentine Peso",
            "Official language is Spanish",
            "Major cities include Córdoba and Rosario",
            "Located in South America"
        ]
    },
    {
        name: "Saudi Arabia",
        clues: [
            "Capital is Riyadh",
            "Currency is Saudi Riyal",
            "Official language is Arabic",
            "Major cities include Jeddah and Mecca",
            "Located in Asia"
        ]
    },
    {
        name: "Turkey",
        clues: [
            "Capital is Ankara",
            "Currency is Turkish Lira",
            "Official language is Turkish",
            "Major cities include Istanbul and Izmir",
            "Located in Europe/Asia"
        ]
    },
    {
        name: "Egypt",
        clues: [
            "Capital is Cairo",
            "Currency is Egyptian Pound",
            "Official language is Arabic",
            "Major cities include Alexandria and Giza",
            "Located in Africa"
        ]
    },
    {
        name: "Thailand",
        clues: [
            "Capital is Bangkok",
            "Currency is Thai Baht",
            "Official language is Thai",
            "Major cities include Chiang Mai and Phuket",
            "Located in Asia"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Currency is Nigerian Naira",
            "Official language is English",
            "Major cities include Lagos and Kano",
            "Located in Africa"
        ]
    },
    {
        name: "Indonesia",
        clues: [
            "Capital is Jakarta",
            "Currency is Indonesian Rupiah",
            "Official language is Indonesian",
            "Major cities include Surabaya and Bandung",
            "Located in Asia"
        ]
    },
    {
        name: "Netherlands",
        clues: [
            "Capital is Amsterdam",
            "Currency is Euro",
            "Official language is Dutch",
            "Major cities include Rotterdam and The Hague",
            "Located in Europe"
        ]
    },
    {
        name: "Pakistan",
        clues: [
            "Capital is Islamabad",
            "Currency is Pakistani Rupee",
            "Official languages are Urdu and English",
            "Major cities include Karachi and Lahore",
            "Located in Asia"
        ]
    },
    {
        name: "Vietnam",
        clues: [
            "Capital is Hanoi",
            "Currency is Vietnamese Dong",
            "Official language is Vietnamese",
            "Major cities include Ho Chi Minh City and Da Nang",
            "Located in Asia"
        ]
    },
    {
        name: "Philippines",
        clues: [
            "Capital is Manila",
            "Currency is Philippine Peso",
            "Official languages are Filipino and English",
            "Major cities include Quezon City and Cebu City",
            "Located in Asia"
        ]
    },
    {
        name: "Malaysia",
        clues: [
            "Capital is Kuala Lumpur",
            "Currency is Malaysian Ringgit",
            "Official language is Malay",
            "Major cities include George Town and Johor Bahru",
            "Located in Asia"
        ]
    },
    {
        name: "Colombia",
        clues: [
            "Capital is Bogotá",
            "Currency is Colombian Peso",
            "Official language is Spanish",
            "Major cities include Medellín and Cali",
            "Located in South America"
        ]
    },
    {
        name: "Bangladesh",
        clues: [
            "Capital is Dhaka",
            "Currency is Bangladeshi Taka",
            "Official language is Bengali",
            "Major cities include Chittagong and Khulna",
            "Located in Asia"
        ]
    },
    {
        name: "Ukraine",
        clues: [
            "Capital is Kyiv",
            "Currency is Ukrainian Hryvnia",
            "Official language is Ukrainian",
            "Major cities include Lviv and Kharkiv",
            "Located in Europe"
        ]
    },
    {
        name: "Chile",
        clues: [
            "Capital is Santiago",
            "Currency is Chilean Peso",
            "Official language is Spanish",
            "Major cities include Valparaíso and Concepción",
            "Located in South America"
        ]
    },
    {
        name: "Belgium",
        clues: [
            "Capital is Brussels",
            "Currency is Euro",
            "Official languages are Dutch, French, German",
            "Major cities include Antwerp and Ghent",
            "Located in Europe"
        ]
    },
    {
        name: "Sweden",
        clues: [
            "Capital is Stockholm",
            "Currency is Swedish Krona",
            "Official language is Swedish",
            "Major cities include Gothenburg and Malmö",
            "Located in Europe"
        ]
    },
    {
        name: "Switzerland",
        clues: [
            "Capital is Bern",
            "Currency is Swiss Franc",
            "Official languages are German, French, Italian, Romansh",
            "Major cities include Zurich and Geneva",
            "Located in Europe"
        ]
    },
    {
        name: "Poland",
        clues: [
            "Capital is Warsaw",
            "Currency is Polish Złoty",
            "Official language is Polish",
            "Major cities include Kraków and Wrocław",
            "Located in Europe"
        ]
    },
    {
        name: "Austria",
        clues: [
            "Capital is Vienna",
            "Currency is Euro",
            "Official language is German",
            "Major cities include Salzburg and Innsbruck",
            "Located in Europe"
        ]
    },
    {
        name: "Israel",
        clues: [
            "Capital is Jerusalem",
            "Currency is Israeli Shekel",
            "Official languages are Hebrew and Arabic",
            "Major cities include Tel Aviv and Haifa",
            "Located in Asia"
        ]
    },
    {
        name: "Norway",
        clues: [
            "Capital is Oslo",
            "Currency is Norwegian Krone",
            "Official languages are Norwegian Bokmål and Nynorsk",
            "Major cities include Bergen and Stavanger",
            "Located in Europe"
        ]
    },
    {
        name: "Ireland",
        clues: [
            "Capital is Dublin",
            "Currency is Euro",
            "Official languages are Irish and English",
            "Major cities include Cork and Galway",
            "Located in Europe"
        ]
    },
    {
        name: "Portugal",
        clues: [
            "Capital is Lisbon",
            "Currency is Euro",
            "Official language is Portuguese",
            "Major cities include Porto and Faro",
            "Located in Europe"
        ]
    },
    {
        name: "Denmark",
        clues: [
            "Capital is Copenhagen",
            "Currency is Danish Krone",
            "Official language is Danish",
            "Major cities include Aarhus and Odense",
            "Located in Europe"
        ]
    },
    {
        name: "Hungary",
        clues: [
            "Capital is Budapest",
            "Currency is Hungarian Forint",
            "Official language is Hungarian",
            "Major cities include Debrecen and Szeged",
            "Located in Europe"
        ]
    },
    {
        name: "Greece",
        clues: [
            "Capital is Athens",
            "Currency is Euro",
            "Official language is Greek",
            "Major cities include Thessaloniki and Patras",
            "Located in Europe"
        ]
    },
    {
        name: "Finland",
        clues: [
            "Capital is Helsinki",
            "Currency is Euro",
            "Official languages are Finnish and Swedish",
            "Major cities include Espoo and Tampere",
            "Located in Europe"
        ]
    },
    {
        name: "Czech Republic",
        clues: [
            "Capital is Prague",
            "Currency is Czech Koruna",
            "Official language is Czech",
            "Major cities include Brno and Ostrava",
            "Located in Europe"
        ]
    },
    {
        name: "New Zealand",
        clues: [
            "Capital is Wellington",
            "Currency is New Zealand Dollar",
            "Official languages are English, Māori, NZ Sign Language",
            "Major cities include Auckland and Christchurch",
            "Located in Oceania"
        ]
    },
    {
        name: "Romania",
        clues: [
            "Capital is Bucharest",
            "Currency is Romanian Leu",
            "Official language is Romanian",
            "Major cities include Cluj-Napoca and Timișoara",
            "Located in Europe"
        ]
    },
    {
        name: "Singapore",
        clues: [
            "City-state with the same name",
            "Currency is Singapore Dollar",
            "Official languages are English, Malay, Mandarin, Tamil",
            "Located in Asia"
        ]
    },
    {
        name: "Thailand",
        clues: [
            "Capital is Bangkok",
            "Currency is Thai Baht",
            "Official language is Thai",
            "Major cities include Chiang Mai and Phuket",
            "Located in Asia"
        ]
    },
    {
        name: "South Africa",
        clues: [
            "Capitals are Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)",
            "Currency is South African Rand",
            "Official languages include English, Zulu, Xhosa",
            "Major cities include Johannesburg and Durban",
            "Located in Africa"
        ]
    },
    {
        name: "Nigeria",
        clues: [
            "Capital is Abuja",
            "Currency is Nigerian Naira",
            "Official language is English",
            "Major cities include Lagos and Kano",
            "Located in Africa"
        ]
    },
    {
        name: "Saudi Arabia",
        clues: [
            "Capital is Riyadh",
            "Currency is Saudi Riyal",
            "Official language is Arabic",
            "Major cities include Jeddah and Mecca",
            "Located in Asia"
        ]
    },
    {
        name: "Argentina",
        clues: [
            "Capital is Buenos Aires",
            "Currency is Argentine Peso",
            "Official language is Spanish",
            "Major cities include Córdoba and Rosario",
            "Located in South America"
        ]
    },
    {
        name: "South Korea",
        clues: [
            "Capital is Seoul",
            "Currency is South Korean Won",
            "Official language is Korean",
            "Major cities include Busan and Incheon",
            "Located in Asia"
        ]
    },
    {
        name: "Israel",
        clues: [
            "Capital is Jerusalem",
            "Currency is Israeli Shekel",
            "Official languages are Hebrew and Arabic",
            "Major cities include Tel Aviv and Haifa",
            "Located in Asia"
        ]
    },
    {
        name: "Egypt",
        clues: [
            "Capital is Cairo",
            "Currency is Egyptian Pound",
            "Official language is Arabic",
            "Major cities include Alexandria and Giza",
            "Located in Africa"
        ]
    },
    {
        name: "Malaysia",
        clues: [
            "Capital is Kuala Lumpur",
            "Currency is Malaysian Ringgit",
            "Official language is Malay",
            "Major cities include George Town and Johor Bahru",
            "Located in Asia"
        ]
    },
    {
        name: "Philippines",
        clues: [
            "Capital is Manila",
            "Currency is Philippine Peso",
            "Official languages are Filipino and English",
            "Major cities include Quezon City and Cebu City",
            "Located in Asia"
        ]
    },
    {
        name: "Pakistan",
        clues: [
            "Capital is Islamabad",
            "Currency is Pakistani Rupee",
            "Official languages are Urdu and English",
            "Major cities include Karachi and Lahore",
            "Located in Asia"
        ]
    },
    {
        name: "Vietnam",
        clues: [
            "Capital is Hanoi",
            "Currency is Vietnamese Dong",
            "Official language is Vietnamese",
            "Major cities include Ho Chi Minh City and Da Nang",
            "Located in Asia"
        ]
    },
    {
        name: "Indonesia",
        clues: [
            "Capital is Jakarta",
            "Currency is Indonesian Rupiah",
            "Official language is Indonesian",
            "Major cities include Surabaya and Bandung",
            "Located in Asia"
        ]
    },
    {
        name: "Singapore",
        clues: [
            "City-state with the same name",
            "Currency is Singapore Dollar",
            "Official languages are English, Malay, Mandarin, Tamil",
            "Located in Asia"
        ]
    },
    {
        name: "Bangladesh",
        clues: [
            "Capital is Dhaka",
            "Currency is Bangladeshi Taka",
            "Official language is Bengali",
            "Major cities include Chittagong and Khulna",
            "Located in Asia"
        ]
    },
    {
        name: "Netherlands",
        clues: [
            "Capital is Amsterdam",
            "Currency is Euro",
            "Official language is Dutch",
            "Major cities include Rotterdam and The Hague",
            "Located in Europe"
        ]
    },
    {
        name: "Turkey",
        clues: [
            "Capital is Ankara",
            "Currency is Turkish Lira",
            "Official language is Turkish",
            "Major cities include Istanbul and Izmir",
            "Located in Europe/Asia"
        ]
    },
    // Add more countries here similarly until you reach 150
];

let currentCountry = {};
let clueIndex = 0;
let score = 0;
let totalQuestions = 10;
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
    shuffle(currentCountry.clues);
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
        questionsAsked++;
        if (questionsAsked < totalQuestions) {
            setTimeout(startQuiz, 2000);
        } else {
            document.getElementById("result").innerText = `Quiz over! Your final score is ${score} out of ${totalQuestions}.`;
        }
    } else {
        clueIndex++;
        if (clueIndex < currentCountry.clues.length) {
            document.getElementById("clue").innerText = currentCountry.clues[clueIndex];
            document.getElementById("result").innerText = "Incorrect. Try again!";
        } else {
            document.getElementById("result").innerText = `Sorry, the correct answer was ${currentCountry.name}. Your score is ${score}.`;
            questionsAsked++;
            if (questionsAsked < totalQuestions) {
                setTimeout(startQuiz, 2000);
            } else {
                document.getElementById("result").innerText = `Quiz over! Your final score is ${score} out of ${totalQuestions}.`;
            }
        }
    }
}

startQuiz();
