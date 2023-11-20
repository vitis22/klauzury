const questions = [
    {
        question: "Které zvíře žije v Antarktidě?",
        options: ["Medvěd polární", "Krokodýl", "Tygr", "Slon"],
        answer: 0,
        difficulty: "lehká",
        image: "images/panda.jpeg"
    },
    {
        question: "Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "Kolik noh má pavouk?",
        options: ["4", "6", "8", "10"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Který had je známý svými smrtelnými jedovatými kusadly?",
        options: ["Hroznýš brazilský", "Kobra indická", "Vodní had", "Diamantový had"],
        answer: 1,
        difficulty: "těžká"
    },
    
    {
        question: "Který druh žraloka je největší?",
        options: ["Žralok bílý", "Žralok veliký", "Žralok obrovský", "Žralok makoa"],
        answer: 2,
        difficulty: "střední"
    },
    {
        question: "Které zvíře je symbolem Austrálie?",
        options: ["Klokan", "Koala", "Emu", "Platypus"],
        answer: 0,
        difficulty: "střední"
    },
    
    {
        question: "Kolik druhů želv je známo?",
        options: ["7", "250", "360", "500+"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
];


let currentQuestion = 0;
let score = 0;
let selectedDifficulty = ""; 

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".options li"); 
const nextButton = document.getElementById("next-button");
const difficultyButtons = document.getElementById("start-screen");

difficultyButtons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        selectedDifficulty = event.target.textContent.toLowerCase();
        startScreen.style.display = "none";
        quizContainer.style.display = "block";
        resetQuiz();
    }
});

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const currentDifficulty = questions[currentQuestion].difficulty;

        if (currentDifficulty === selectedDifficulty) {
            questionElement.textContent = `(${currentDifficulty}) ${questions[currentQuestion].question}`;

            const currentOptions = questions[currentQuestion].options;
            for (let i = 0; i < options.length; i++) {
                if (i < currentOptions.length) {
                    options[i].textContent = currentOptions[i];
                    options[i].classList.remove("correct", "incorrect");
                    options[i].addEventListener("click", checkAnswer);
                    options[i].style.display = "block"; 
                } else {
                    options[i].style.display = "none"; 
                }
            }
        } else {
            currentQuestion++;
            loadQuestion();
            return;
        }
    } else {
        showResult();
    }
}


function checkAnswer(event) {
    const selectedOption = event.target;
    const selectedOptionIndex = Array.from(options).indexOf(selectedOption);
    const correctOptionIndex = questions[currentQuestion].answer;

    for (let i = 0; i < options.length; i++) {
        options[i].removeEventListener("click", checkAnswer);

        if (i === correctOptionIndex) {
            options[i].classList.add("correct");
        } else if (i === selectedOptionIndex) {
            options[i].classList.add("incorrect");
        }
    }

    if (selectedOptionIndex === questions[currentQuestion].answer) {
        score++;
        selectedOption.classList.add("correct");
    } else {
        selectedOption.classList.add("incorrect");
    }

    for (let i = 0; i < options.length; i++) {
        options[i].removeEventListener("click", checkAnswer);
    }

    nextButton.style.display = "block";
}



function showResult() {
    // Počet správných odpovědí pro vybranou obtížnost
    const spravneOdpovedi = questions.reduce((pocet, otazka) => {
        if (otazka.difficulty === selectedDifficulty && otazka.answer === questions.indexOf(otazka.options.find((opt, idx) => idx === otazka.answer))) {
            return pocet + 1;
        }
        return pocet;
    }, 0);

    // Zobrazení počtu správných odpovědí pro vybranou obtížnost
    questionElement.textContent = `Váš výsledek: ${spravneOdpovedi} správných odpovědí z ${questions.filter(otazka => otazka.difficulty === selectedDifficulty).length}.`;

    options.forEach(option => option.style.display = "none");
    nextButton.style.display = "none";
}

loadQuestion();

nextButton.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});
