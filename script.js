const countries = [
    {
        name: "France",
        clues: ["Capital is Paris", "Located in Europe", "Neighboring countries are Spain, Germany, Italy", "Flag is blue, white, red"]
    },
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
