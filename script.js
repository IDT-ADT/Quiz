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
    }
];

let currentCountry = {};
let clueIndex = 0;
let score = 0;

function startQuiz() {
    currentCountry = countries[Math.floor(Math.random() * countries.length)];
    clueIndex = 0;
    document.getElementById("clue").innerText = currentCountry.clues[clueIndex];
    document.getElementById("result").innerText = "";
    document.getElementById("answer").value = "";
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
