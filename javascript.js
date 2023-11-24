// Funkce pro promíchání pole otázek
function fisherYatesShuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}


// Promíchejte otázky v poli
const shuffledQuestions = fisherYatesShuffle(questions);

// Omezte počet otázek na 10 pro každou obtížnost
const maxQuestionsPerDifficulty = 10;
const limitedQuestions = {};

shuffledQuestions.forEach(question => {
    const difficulty = question.difficulty;

    if (!limitedQuestions[difficulty]) {
        limitedQuestions[difficulty] = [];
    }

    if (limitedQuestions[difficulty].length < maxQuestionsPerDifficulty) {
        limitedQuestions[difficulty].push(question);
    }
});

// Vytvořte pole finalQuestions obsahující omezený počet otázek pro každou obtížnost
const finalQuestions = Object.values(limitedQuestions).flat();

let timer;
let elapsedTime = 0;
const timerElement = document.getElementById("timer");

function startTimer() {
    timer = setInterval(() => {
        elapsedTime++;
        updateTimerDisplay();
    }, 1000); // Update every second
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimerDisplay() {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

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
        startTimer(); // Start the timer when the quiz starts
    }
});


function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    nextButton.style.display = "none"; // Resetování hodnoty tlačítka "Další otázka"
    while (currentQuestion < finalQuestions.length) {
        const questionData = finalQuestions[currentQuestion];
        const currentDifficulty = questionData.difficulty;

        if (currentDifficulty === selectedDifficulty) {
            updateQuestion(questionData);
            break;
        } else {
            currentQuestion++;
        }
    }

    if (currentQuestion === finalQuestions.length) {
        showResult();
    }
}


function updateQuestion(questionData) {
    while (true) {
        questionElement.textContent = `(${questionData.difficulty}) ${questionData.question}`;

        const questionImage = document.getElementById("question-image");
        questionImage.src = `images/${questionData.image}`; // Oprava: Přidáme cestu k adresáři images
        questionImage.style.display = "block";

        updateOptions(questionData.options);
        break; // Přidáme příkaz break pro ukončení cyklu while
    }
}

function updateOptions(currentOptions) {
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
}

function checkAnswer(event) {
    const selectedOption = event.target;
    const selectedOptionIndex = Array.from(options).indexOf(selectedOption);
    const correctOptionIndex = finalQuestions[currentQuestion].answer;

    for (let i = 0; i < options.length; i++) {
        options[i].removeEventListener("click", checkAnswer);

        if (i === correctOptionIndex) {
            options[i].classList.add("correct");
        } else if (i === selectedOptionIndex) {
            options[i].classList.add("incorrect");
        }
    }

    if (selectedOptionIndex === finalQuestions[currentQuestion].answer) {
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
    stopTimer(); // Stop the timer when the quiz ends

    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    questionElement.textContent = `Váš výsledek: ${score} správných odpovědí z ${maxQuestionsPerDifficulty}. Váš kvíz trval: ${formattedTime}.`;
    options.forEach(option => option.style.display = "none");
    nextButton.style.display = "none";
}

loadQuestion();

nextButton.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});
