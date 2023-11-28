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
const resetButton = document.getElementById("reset-button");
const nextDifficultyButton = document.getElementById("next-difficulty-button");
const returnToMenuButton = document.getElementById("return-to-menu-button");

difficultyButtons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        selectedDifficulty = event.target.textContent.toLowerCase();
        startScreen.style.display = "none";
        quizContainer.style.display = "block";
        resetQuiz();
        startTimer(); // Start the timer when the quiz starts
    }
});

resetButton.addEventListener("click", () => {
    resetQuiz();
    startTimer();
    resetTimer();
});

nextDifficultyButton.addEventListener("click", () => {
    // Determine the current difficulty
    const currentDifficultyIndex = ["lehká", "střední", "těžká"].indexOf(selectedDifficulty);

    // Set the next difficulty
    selectedDifficulty = ["lehká", "střední", "těžká"][(currentDifficultyIndex + 1) % 3];

    startScreen.style.display = "none";
    quizContainer.style.display = "block";

    resetQuiz(); // Only reset the quiz, don't restart it
    loadQuestion(); // Load the next question for the new difficulty
    resetTimer();
    startTimer();
});

returnToMenuButton.addEventListener("click", () => {
    selectedDifficulty = ""; // Reset the selected difficulty
    startScreen.style.display = "block";
    quizContainer.style.display = "none";
    stopTimer();
    resetTimer();
});

function resetTimer() {
    elapsedTime = 0;
    updateTimerDisplay();
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    nextButton.style.display = "none"; // Resetování hodnoty tlačítka "Další otázka"
    resetButton.style.display = "none";
    nextDifficultyButton.style.display = "none";
    returnToMenuButton.style.display = "none";

    while (currentQuestion < finalQuestions.length) {
        const questionData = finalQuestions[currentQuestion];
        const currentDifficulty = questionData.difficulty;

        if (currentDifficulty === selectedDifficulty) {
            timerElement.style.display = "block";
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
            options[i].classList.add("incorrect", "shake");
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

    resetButton.style.display = "block";
    nextDifficultyButton.style.display = "block";
    returnToMenuButton.style.display = "block";

    if (selectedDifficulty !== "těžká") {
        nextDifficultyButton.style.display = "block";
    } else {
        nextDifficultyButton.style.display = "none";
    }

    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const percentage = (score / maxQuestionsPerDifficulty) * 100;
    const formattedPercentage = percentage.toFixed(0); // Limit to two decimal places

    questionElement.textContent = `Váš výsledek: ${score} správných odpovědí z ${maxQuestionsPerDifficulty}. Váš kvíz trval: ${formattedTime}. Celkové procento: ${formattedPercentage}%.`;

    options.forEach(option => option.style.display = "none");
    nextButton.style.display = "none";

    const questionImage = document.getElementById("question-image");
    if (questionImage.style.display !== "none") {
        questionImage.style.display = "none";
    }

    if (timerElement.style.display !== "none") {
        timerElement.style.display = "none";
    }
}

loadQuestion();

nextButton.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});