// script.js
const countries = [
    {
        name: "France",
        clues: ["Capital is Paris", "Located in Europe", "Neighboring countries are Spain, Germany, Italy", "Flag is blue, white, red"]
    },
    {
        name: "Brazil",
        clues: ["Capital is Brasília", "Located in South America", "Neighboring countries are Argentina, Peru, Colombia", "Flag is green, yellow, blue"]
    },
    // Add more countries as needed
];

let currentCountry = {};
let clueIndex = 0;
let score = 0;

function startQuiz() {
    // Randomly select a country
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
        setTimeout(startQuiz, 2000); // Start a new round after 2 seconds
    } else {
        clueIndex++;
        if (clueIndex < currentCountry.clues.length) {
            document.getElementById("clue").innerText = currentCountry.clues[clueIndex];
            document.getElementById("result").innerText = "Incorrect. Try again!";
        } else {
            document.getElementById("result").innerText = `Sorry, the correct answer was ${currentCountry.name}. Your score is ${score}.`;
            setTimeout(startQuiz, 2000); // Start a new round after 2 seconds
        }
    }
}

// Start the first round
startQuiz();
