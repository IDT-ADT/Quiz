const countries = [
    {
        name: "Brazil",
        clues: ["Capital is Brasília", "Located in South America", "Neighboring countries are Argentina, Peru, Colombia", "Flag is green, yellow, blue"]
    },
    {
        name: "Japan",
        clues: ["Capital is Tokyo", "Located in Asia", "An island nation in the Pacific Ocean", "Flag is white with a red circle in the center"]
    },
    {
        name: "Canada",
        clues: ["Capital is Ottawa", "Located in North America", "Neighboring country is the United States", "Flag is red and white with a maple leaf"]
    },
    {
        name: "Australia",
        clues: ["Capital is Canberra", "Located in Oceania", "An island continent", "Flag has the Union Jack and stars"]
    },
    {
        name: "India",
        clues: ["Capital is New Delhi", "Located in Asia", "Neighboring countries are Pakistan, China, Nepal", "Flag is orange, white, and green with a blue wheel"]
    },
    {
        name: "Germany",
        clues: ["Capital is Berlin", "Located in Europe", "Neighboring countries are France, Poland, Austria", "Flag is black, red, and yellow"]
    },
    {
        name: "South Africa",
        clues: ["Capital is Pretoria", "Located in Africa", "Neighboring countries are Namibia, Botswana, Zimbabwe", "Flag has six colors: black, yellow, green, white, red, and blue"]
    },
    {
        name: "Italy",
        clues: ["Capital is Rome", "Located in Europe", "Neighboring countries are France, Switzerland, Austria", "Flag is green, white, and red"]
    },
    {
        name: "Mexico",
        clues: ["Capital is Mexico City", "Located in North America", "Neighboring countries are the United States, Guatemala, Belize", "Flag is green, white, and red with an eagle"]
    },
    {
        name: "China",
        clues: ["Capital is Beijing", "Located in Asia", "Neighboring countries are India, Russia, Mongolia", "Flag is red with yellow stars"]
    },
    {
        name: "United Kingdom",
        clues: ["Capital is London", "Located in Europe", "Made up of four countries: England, Scotland, Wales, and Northern Ireland", "Flag is known as the Union Jack"]
    },
    {
        name: "Russia",
        clues: ["Capital is Moscow", "Located in both Europe and Asia", "The largest country in the world", "Flag is white, blue, and red"]
    },
    {
        name: "Argentina",
        clues: ["Capital is Buenos Aires", "Located in South America", "Neighboring countries are Chile, Brazil, Uruguay", "Flag is blue and white with a sun"]
    },
    {
        name: "Egypt",
        clues: ["Capital is Cairo", "Located in Africa", "Famous for its ancient pyramids", "Flag is red, white, and black with an eagle"]
    },
    {
        name: "Spain",
        clues: ["Capital is Madrid", "Located in Europe", "Neighboring countries are France, Portugal", "Flag is red and yellow with a coat of arms"]
    },
    {
        name: "Turkey",
        clues: ["Capital is Ankara", "Located in both Europe and Asia", "Neighboring countries are Greece, Bulgaria, Syria", "Flag is red with a white star and crescent"]
    },
    {
        name: "Nigeria",
        clues: ["Capital is Abuja", "Located in Africa", "Most populous country in Africa", "Flag is green and white"]
    },
    {
        name: "Indonesia",
        clues: ["Capital is Jakarta", "Located in Asia", "An archipelago with over 17,000 islands", "Flag is red and white"]
    },
    {
        name: "Saudi Arabia",
        clues: ["Capital is Riyadh", "Located in Asia", "Famous for its deserts and oil reserves", "Flag is green with white Arabic script and a sword"]
    },
    {
        name: "South Korea",
        clues: ["Capital is Seoul", "Located in Asia", "Neighboring country is North Korea", "Flag is white with a red and blue circle and black trigrams"]
    },
    {
        name: "Kenya",
        clues: ["Capital is Nairobi", "Located in Africa", "Neighboring countries are Tanzania, Uganda, South Sudan", "Flag is black, red, green with a white-edged black Maasai shield"]
    },
    {
        name: "Greece",
        clues: ["Capital is Athens", "Located in Europe", "Neighboring countries are Albania, North Macedonia, Bulgaria, Turkey", "Flag is blue and white with a cross"]
    },
    {
        name: "Thailand",
        clues: ["Capital is Bangkok", "Located in Asia", "Neighboring countries are Myanmar, Laos, Cambodia, Malaysia", "Flag is red, white, and blue"]
    },
    {
        name: "New Zealand",
        clues: ["Capital is Wellington", "Located in Oceania", "Consists of two main islands", "Flag has the Union Jack and four red stars with white borders"]
    },
    {
        name: "Norway",
        clues: ["Capital is Oslo", "Located in Europe", "Neighboring countries are Sweden, Finland, Russia", "Flag is red with a blue cross outlined in white"]
    },
    {
        name: "Sweden",
        clues: ["Capital is Stockholm", "Located in Europe", "Neighboring countries are Norway, Finland", "Flag is blue with a yellow cross"]
    },
    {
        name: "Switzerland",
        clues: ["Capital is Bern", "Located in Europe", "Neighboring countries are Germany, France, Italy, Austria", "Flag is red with a white cross"]
    },
    {
        name: "Netherlands",
        clues: ["Capital is Amsterdam", "Located in Europe", "Neighboring countries are Germany, Belgium", "Flag is red, white, and blue"]
    },
    {
        name: "Belgium",
        clues: ["Capital is Brussels", "Located in Europe", "Neighboring countries are France, Netherlands, Germany, Luxembourg", "Flag is black, yellow, and red"]
    },
    {
        name: "Chile",
        clues: ["Capital is Santiago", "Located in South America", "Neighboring countries are Peru, Bolivia, Argentina", "Flag is red, white, and blue with a star"]
    },
    {
        name: "Colombia",
        clues: ["Capital is Bogotá", "Located in South America", "Neighboring countries are Venezuela, Brazil, Peru, Ecuador, Panama", "Flag is yellow, blue, and red"]
    },
    {
        name: "Vietnam",
        clues: ["Capital is Hanoi", "Located in Asia", "Neighboring countries are China, Laos, Cambodia", "Flag is red with a yellow star"]
    },
    {
        name: "Malaysia",
        clues: ["Capital is Kuala Lumpur", "Located in Asia", "Neighboring countries are Thailand, Indonesia, Brunei", "Flag is red and white stripes with a blue canton and a yellow crescent and star"]
    },
    {
        name: "Philippines",
        clues: ["Capital is Manila", "Located in Asia", "An archipelago with over 7,000 islands", "Flag is blue, red, and white with a sun and three stars"]
    },
    {
        name: "Pakistan",
        clues: ["Capital is Islamabad", "Located in Asia", "Neighboring countries are India, Afghanistan, Iran, China", "Flag is green and white with a crescent and star"]
    },
    {
        name: "Bangladesh",
        clues: ["Capital is Dhaka", "Located in Asia", "Neighboring countries are India, Myanmar", "Flag is green with a red circle"]
    },
    {
        name: "Poland",
        clues: ["Capital is Warsaw", "Located in Europe", "Neighboring countries are Germany, Czech Republic, Slovakia, Ukraine, Belarus, Lithuania, Russia", "Flag is white and red"]
    },
    {
        name: "Portugal",
        clues: ["Capital is Lisbon", "Located in Europe", "Neighboring country is Spain", "Flag is green and red with a coat of arms"]
    },
    {
        name: "France",
        clues: ["Capital is Paris", "Located in Europe", "Neighboring countries are Spain, Germany, Italy", "Flag is blue, white, red"]
    },
    {
        name: "Ireland",
        clues: ["Capital is Dublin", "Located in Europe", "Neighboring country is the United Kingdom", "Flag is green, white, and orange"]
    },
    {
        name: "Iceland",
        clues: ["Capital is Reykjavik", "Located in Europe", "An island nation in the North Atlantic", "Flag is blue with a red cross outlined in white"]
    },
    {
        name: "Finland",
        clues: ["Capital is Helsinki", "Located in Europe", "Neighboring countries are Sweden, Norway, Russia", "Flag is blue and white"]
    },
    {
        name: "Denmark",
        clues: ["Capital is Copenhagen", "Located in Europe", "Neighboring countries are Germany, Sweden", "Flag is red with a white cross"]
    },
    {
        name: "Austria",
        clues: ["Capital is Vienna", "Located in Europe", "Neighboring countries are Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, Liechtenstein", "Flag is red and white"]
    },
    {
        name: "Hungary",
        clues: ["Capital is Budapest", "Located in Europe", "Neighboring countries are Austria, Slovakia, Ukraine, Romania, Serbia, Croatia, Slovenia", "Flag is red, white, and green"]
    },
    {
        name: "Czech Republic",
        clues: ["Capital is Prague", "Located in Europe", "Neighboring countries are Germany, Poland, Austria, Slovakia", "Flag is white, red, and blue"]
    },
    {
        name: "Slovakia",
        clues: ["Capital is Bratislava", "Located in Europe", "Neighboring countries are Czech Republic, Austria, Hungary, Ukraine, Poland", "Flag is white, blue, and red with a coat of arms"]
    },
    {
        name: "Romania",
        clues: ["Capital is Bucharest", "Located in Europe", "Neighboring countries are Hungary, Ukraine, Moldova, Bulgaria, Serbia", "Flag is blue, yellow, and red"]
    },
    {
        name: "Bulgaria",
        clues: ["Capital is Sofia", "Located in Europe", "Neighboring countries are Romania, Serbia, North Macedonia, Greece, Turkey", "Flag is white, green, and red"]
    },
    {
        name: "Ukraine",
        clues: ["Capital is Kyiv", "Located in Europe", "Neighboring countries are Belarus, Russia, Poland, Slovakia, Hungary, Romania, Moldova", "Flag is blue and yellow"]
    },
    {
        name: "Belarus",
        clues: ["Capital is Minsk", "Located in Europe", "Neighboring countries are Russia, Ukraine, Poland, Lithuania, Latvia", "Flag is red and green with a white and red ornament pattern"]
    },
    {
        name: "Lithuania",
        clues: ["Capital is Vilnius", "Located in Europe", "Neighboring countries are Latvia, Belarus, Poland", "Flag is yellow, green, and red"]
    },
    {
        name: "Latvia",
        clues: ["Capital is Riga", "Located in Europe", "Neighboring countries are Estonia, Lithuania, Belarus, Russia", "Flag is red and white"]
    },
    {
        name: "Estonia",
        clues: ["Capital is Tallinn", "Located in Europe", "Neighboring countries are Latvia, Russia", "Flag is blue, black, and white"]
    },
    {
        name: "Croatia",
        clues: ["Capital is Zagreb", "Located in Europe", "Neighboring countries are Slovenia, Hungary, Serbia, Bosnia and Herzegovina, Montenegro", "Flag is red, white, and blue with a coat of arms"]
    },
    {
        name: "Bosnia and Herzegovina",
        clues: ["Capital is Sarajevo", "Located in Europe", "Neighboring countries are Croatia, Serbia, Montenegro", "Flag is blue and yellow with stars"]
    },
    {
        name: "Serbia",
        clues: ["Capital is Belgrade", "Located in Europe", "Neighboring countries are Hungary, Romania, Bulgaria, North Macedonia, Croatia, Bosnia and Herzegovina, Montenegro", "Flag is red, blue, and white with a coat of arms"]
    },
    {
        name: "North Macedonia",
        clues: ["Capital is Skopje", "Located in Europe", "Neighboring countries are Kosovo, Serbia, Bulgaria, Greece, Albania", "Flag is red with a yellow sun"]
    },
    {
        name: "Albania",
        clues: ["Capital is Tirana", "Located in Europe", "Neighboring countries are Montenegro, Kosovo, North Macedonia, Greece", "Flag is red with a black double-headed eagle"]
    },
    {
        name: "Greece",
        clues: ["Capital is Athens", "Located in Europe", "Neighboring countries are Albania, North Macedonia, Bulgaria, Turkey", "Flag is blue and white with a cross"]
    },
    {
        name: "Kosovo",
        clues: ["Capital is Pristina", "Located in Europe", "Neighboring countries are Serbia, Montenegro, Albania, North Macedonia", "Flag is blue with a yellow map and stars"]
    },
    {
        name: "Montenegro",
        clues: ["Capital is Podgorica", "Located in Europe", "Neighboring countries are Croatia, Bosnia and Herzegovina, Serbia, Kosovo, Albania", "Flag is red with a gold border and a coat of arms"]
    },
    {
        name: "Georgia",
        clues: ["Capital is Tbilisi", "Located in Europe and Asia", "Neighboring countries are Russia, Azerbaijan, Armenia, Turkey", "Flag is white with five red crosses"]
    },
    {
        name: "Armenia",
        clues: ["Capital is Yerevan", "Located in Asia", "Neighboring countries are Turkey, Georgia, Azerbaijan, Iran", "Flag is red, blue, and orange"]
    },
    {
        name: "Azerbaijan",
        clues: ["Capital is Baku", "Located in Asia", "Neighboring countries are Russia, Georgia, Armenia, Iran", "Flag is blue, red, and green with a crescent and star"]
    },
    {
        name: "Kazakhstan",
        clues: ["Capital is Nur-Sultan", "Located in Asia", "Neighboring countries are Russia, China, Kyrgyzstan, Uzbekistan, Turkmenistan", "Flag is blue with a yellow sun and eagle"]
    },
    {
        name: "Uzbekistan",
        clues: ["Capital is Tashkent", "Located in Asia", "Neighboring countries are Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, Turkmenistan", "Flag is blue, white, and green with red lines and stars"]
    },
    {
        name: "Turkmenistan",
        clues: ["Capital is Ashgabat", "Located in Asia", "Neighboring countries are Kazakhstan, Uzbekistan, Afghanistan, Iran", "Flag is green with a red and white ornament pattern and stars"]
    },
    {
        name: "Kyrgyzstan",
        clues: ["Capital is Bishkek", "Located in Asia", "Neighboring countries are Kazakhstan, Uzbekistan, Tajikistan, China", "Flag is red with a yellow sun"]
    },
    {
        name: "Tajikistan",
        clues: ["Capital is Dushanbe", "Located in Asia", "Neighboring countries are Kyrgyzstan, Uzbekistan, Afghanistan, China", "Flag is red, white, and green with a crown and stars"]
    },
    {
        name: "Afghanistan",
        clues: ["Capital is Kabul", "Located in Asia", "Neighboring countries are Iran, Turkmenistan, Uzbekistan, Tajikistan, China, Pakistan", "Flag is black, red, and green with a coat of arms"]
    },
    {
        name: "Iran",
        clues: ["Capital is Tehran", "Located in Asia", "Neighboring countries are Armenia, Azerbaijan, Turkmenistan, Afghanistan, Pakistan, Turkey, Iraq", "Flag is green, white, and red with a coat of arms"]
    },
    {
        name: "Iraq",
        clues: ["Capital is Baghdad", "Located in Asia", "Neighboring countries are Turkey, Iran, Kuwait, Saudi Arabia, Jordan, Syria", "Flag is red, white, and black with Arabic script"]
    },
    {
        name: "Syria",
        clues: ["Capital is Damascus", "Located in Asia", "Neighboring countries are Turkey, Iraq, Jordan, Israel, Lebanon", "Flag is red, white, and black with two green stars"]
    },
    {
        name: "Lebanon",
        clues: ["Capital is Beirut", "Located in Asia", "Neighboring countries are Syria, Israel", "Flag is red, white, and red with a green cedar tree"]
    },
    {
        name: "Israel",
        clues: ["Capital is Jerusalem", "Located in Asia", "Neighboring countries are Lebanon, Syria, Jordan, Egypt", "Flag is blue and white with a Star of David"]
    },
    {
        name: "Jordan",
        clues: ["Capital is Amman", "Located in Asia", "Neighboring countries are Syria, Iraq, Saudi Arabia, Israel, Palestine", "Flag is black, white, green, and red with a star"]
    },
    {
        name: "Palestine",
        clues: ["Capital is East Jerusalem", "Located in Asia", "Neighboring countries are Israel, Jordan, Egypt", "Flag is black, white, green, and red"]
    },
    {
        name: "Saudi Arabia",
        clues: ["Capital is Riyadh", "Located in Asia", "Neighboring countries are Jordan, Iraq, Kuwait, Bahrain, Qatar, United Arab Emirates, Oman, Yemen", "Flag is green with white Arabic script and a sword"]
    },
    {
        name: "United Arab Emirates",
        clues: ["Capital is Abu Dhabi", "Located in Asia", "Neighboring countries are Saudi Arabia, Oman", "Flag is red, green, white, and black"]
    },
    {
        name: "Oman",
        clues: ["Capital is Muscat", "Located in Asia", "Neighboring countries are Saudi Arabia, United Arab Emirates, Yemen", "Flag is white, red, and green with a coat of arms"]
    },
    {
        name: "Yemen",
        clues: ["Capital is Sana'a", "Located in Asia", "Neighboring countries are Saudi Arabia, Oman", "Flag is red, white, and black"]
    },
    {
        name: "Qatar",
        clues: ["Capital is Doha", "Located in Asia", "Neighboring country is Saudi Arabia", "Flag is maroon and white"]
    },
    {
        name: "Bahrain",
        clues: ["Capital is Manama", "Located in Asia", "Neighboring country is Saudi Arabia", "Flag is red and white"]
    },
    {
        name: "Kuwait",
        clues: ["Capital is Kuwait City", "Located in Asia", "Neighboring countries are Iraq, Saudi Arabia", "Flag is green, white, red, and black"]
    },
    {
        name: "Sri Lanka",
        clues: ["Capital is Colombo", "Located in Asia", "An island nation in the Indian Ocean", "Flag is yellow with green and orange stripes and a lion holding a sword"]
    },
    {
        name: "Maldives",
        clues: ["Capital is Malé", "Located in Asia", "An archipelago in the Indian Ocean", "Flag is red with a green rectangle and a white crescent"]
    },
    {
        name: "Nepal",
        clues: ["Capital is Kathmandu", "Located in Asia", "Neighboring countries are China, India", "Flag is red with blue borders and white symbols"]
    },
    {
        name: "Bhutan",
        clues: ["Capital is Thimphu", "Located in Asia", "Neighboring countries are China, India", "Flag is yellow and orange with a dragon"]
    },
    {
        name: "Myanmar",
        clues: ["Capital is Naypyidaw", "Located in Asia", "Neighboring countries are Bangladesh, India, China, Laos, Thailand", "Flag is yellow, green, and red with a white star"]
    },
    {
        name: "Laos",
        clues: ["Capital is Vientiane", "Located in Asia", "Neighboring countries are China, Vietnam, Cambodia, Thailand, Myanmar", "Flag is red, blue, and white with a white circle"]
    },
    {
        name: "Cambodia",
        clues: ["Capital is Phnom Penh", "Located in Asia", "Neighboring countries are Thailand, Laos, Vietnam", "Flag is blue, red, and white with Angkor Wat"]
    }
];

let currentCountry = {};
let clueIndex = 0;
let score = 0;
let totalQuestions = 10;
let questionsAsked = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    // Shuffle countries each time the quiz starts
    shuffle(countries);
    currentCountry = countries[Math.floor(Math.random() * countries.length)];
    clueIndex = 0;
    shuffle(currentCountry.clues); // Shuffle clues to randomize order
    document.getElementById("clue").innerText = currentCountry.clues[clueIndex];
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
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
