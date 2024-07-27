const countries = [
    {
        name: "Brazil",
        clues: ["Capital is Brasília", "Located in South America", "Neighboring countries are Argentina, Peru, Colombia", "Flag is green, yellow, blue"],
        images: ["images/brazil/brazil1.jpg", "images/brazil/brazil2.jpg", "images/brazil/brazil3.jpg", "images/brazil/brazil4.jpg"]
    },
    {
        name: "Japan",
        clues: ["Capital is Tokyo", "Located in Asia", "An island nation in the Pacific Ocean", "Flag is white with a red circle in the center"],
        images: ["images/japan/japan1.jpg", "images/japan/japan2.jpg", "images/japan/japan3.jpg", "images/japan/japan4.jpg"]
    },
    {
        name: "Canada",
        clues: ["Capital is Ottawa", "Located in North America", "Neighboring country is the United States", "Flag is red and white with a maple leaf"],
        images: ["images/canada/canada1.jpg", "images/canada/canada2.jpg", "images/canada/canada3.jpg", "images/canada/canada4.jpg"]
    },
    {
        name: "Australia",
        clues: ["Capital is Canberra", "Located in Oceania", "An island continent", "Flag has the Union Jack and stars"],
        images: ["images/australia/australia1.jpg", "images/australia/australia2.jpg", "images/australia/australia3.jpg", "images/australia/australia4.jpg"]
    },
    {
        name: "India",
        clues: ["Capital is New Delhi", "Located in Asia", "Neighboring countries are Pakistan, China, Nepal", "Flag is orange, white, and green with a blue wheel"],
        images: ["images/india/india1.jpg", "images/india/india2.jpg", "images/india/india3.jpg", "images/india/india4.jpg"]
    },
    // Add more countries similarly...
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
    const imagePath = currentCountry.images[clueIndex];
    console.log(`Loading image from: ${imagePath}`);
    document.getElementById("country-image").src = imagePath;
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
            const imagePath = currentCountry.images[clueIndex];
            console.log(`Loading image from: ${imagePath}`);
            document.getElementById("country-image").src = imagePath;
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
