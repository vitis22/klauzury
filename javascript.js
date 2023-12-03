let selectedIcon = ""; // Variable to store the selected icon
let playerName = "";   // Variable to store the player's chosen name

function showIconSetup() {
    selectedIcon = ""; // Reset the selected icon
    playerName = "";   // Reset the player name

    // Clear the input field
    document.getElementById("icon-name-input").value = "";

    document.getElementById("icon-setup-box").style.display = "block";
    document.getElementById("icon-setup-button").style.display = "none";
    document.getElementById("change-player-button").style.display = "none";
    clearIconSelection(); // Add this line to clear the icon selection
}

function clearIconSelection() {
    // Reset styles of all images
    const iconImages = document.querySelectorAll("#icon-options img");
    iconImages.forEach(img => img.style.border = "none");
}
function selectIcon(clickedImage) {
    // Reset styles of all images
    const iconImages = document.querySelectorAll("#icon-options img");
    iconImages.forEach(img => img.style.border = "none");

    // Set the selected icon and visually indicate selection
    selectedIcon = clickedImage.src;
    clickedImage.style.border = "2px solid blue";
}

function confirmIcon() {
    playerName = document.getElementById("icon-name-input").value;
    if (playerName.trim() !== "" && selectedIcon !== "") {
        // Reset the scores when the player changes the icon and name
        scoreLehka = 0;
        scoreStredni = 0;
        scoreTezka = 0;

        // Reset the highest scores when the player changes the icon and name
        highestScoreLehka = 0;
        highestScoreStredni = 0;
        highestScoreTezka = 0;
        // Create the icon in the upper left corner with the chosen name
        createPlayerIcon(playerName, selectedIcon);

        // Save selected icon and player name to localStorage
        localStorage.setItem('selectedIcon', selectedIcon);
        localStorage.setItem('playerName', playerName);
        // Save the reset scores and highest scores to localStorage
        localStorage.setItem('scoreLehka', scoreLehka);
        localStorage.setItem('scoreStredni', scoreStredni);
        localStorage.setItem('scoreTezka', scoreTezka);
        localStorage.setItem('highestScoreLehka', highestScoreLehka);
        localStorage.setItem('highestScoreStredni', highestScoreStredni);
        localStorage.setItem('highestScoreTezka', highestScoreTezka);
        // Display scores on the start screen
        document.getElementById("easy-score").textContent = `Lehká: ${scoreLehka}% (Nejvyšší skóre: ${highestScoreLehka}%)`;
        document.getElementById("medium-score").textContent = `Střední: ${scoreStredni}% (Nejvyšší skóre: ${highestScoreStredni}%)`;
        document.getElementById("hard-score").textContent = `Těžká: ${scoreTezka}% (Nejvyšší skóre: ${highestScoreTezka}%)`;

        // Hide the icon setup box
        document.getElementById("icon-setup-box").style.display = "none";
        // Reset selectedIcon to avoid potential issues
        selectedIcon = "";

        // Enable the "Start" button
        document.getElementById("start-button").disabled = false;
    } else {
        alert("Please select an icon and enter a name for your player.");
    }
}


function createPlayerIcon(name, iconData) {
    // Try to find the icon container
    let iconContainer = document.getElementById("icon-container");

    // If the icon container doesn't exist, create it dynamically
    if (!iconContainer) {
        iconContainer = document.createElement("div");
        iconContainer.id = "icon-container";
        document.body.appendChild(iconContainer);
    }

    // Display the icon container
    iconContainer.style.display = "block";

    // Set the icon source and alt text
    let playerIcon = document.getElementById("player-icon");

    // If playerIcon doesn't exist, create it dynamically
    if (!playerIcon) {
        playerIcon = document.createElement("img");
        playerIcon.id = "player-icon";
        iconContainer.appendChild(playerIcon);
    }

    playerIcon.src = iconData;
    playerIcon.alt = name;

    // Display the player's chosen name next to the icon
    const playerNameElement = document.getElementById("player-name");
    if (!playerNameElement) {
        // If playerNameElement doesn't exist, create it dynamically
        const newPlayerNameElement = document.createElement("span");
        newPlayerNameElement.id = "player-name";
        iconContainer.appendChild(newPlayerNameElement);
    }

    playerNameElement.textContent = name;

    // Save selected icon and player name to localStorage
    localStorage.setItem('selectedIcon', iconData);
    localStorage.setItem('playerName', name);

    // Show the "Icon Setup" button and hide the "Change Player" button
    document.getElementById("icon-setup-button").style.display = "none";
    document.getElementById("change-player-button").style.display = "block";
}

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
let scoreLehka = 0;
let scoreStredni = 0;
let scoreTezka = 0;
let highestScoreLehka = 0;
let highestScoreStredni = 0;
let highestScoreTezka = 0;

// Load scores from localStorage if available
scoreLehka = parseInt(localStorage.getItem('scoreLehka')) || 0;
scoreStredni = parseInt(localStorage.getItem('scoreStredni')) || 0;
scoreTezka = parseInt(localStorage.getItem('scoreTezka')) || 0;

highestScoreLehka = parseInt(localStorage.getItem('highestScoreLehka')) || 0;
highestScoreStredni = parseInt(localStorage.getItem('highestScoreStredni')) || 0;
highestScoreTezka = parseInt(localStorage.getItem('highestScoreTezka')) || 0;

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".options li");
const nextButton = document.getElementById("next-button");
const difficultyButtons = document.getElementById("start-screen");
const resetButton = document.getElementById("reset-button");
const nextDifficultyButton = document.getElementById("next-difficulty-button");
const returnToMenuButton = document.getElementById("return-to-menu-button");

function showAlert() {
    alert("Please choose your icon and enter your name before starting the quiz.");
}

difficultyButtons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const clickedDifficulty = event.target.textContent.toLowerCase();

        // Check if the player has chosen an icon and name
        if (localStorage.getItem('selectedIcon') && localStorage.getItem('playerName')) {
            // Check if the player can play the selected difficulty
            if (
                (clickedDifficulty === "lehká") ||
                (clickedDifficulty === "střední" && highestScoreLehka >= 50) ||
                (clickedDifficulty === "těžká" && highestScoreStredni >= 50)
            ) {
                selectedDifficulty = clickedDifficulty;
                startScreen.style.display = "none";
                quizContainer.style.display = "block";
                resetQuiz();
                startTimer(); // Start the timer when the quiz starts
            } else {
                alert("You need to achieve at least 50% score in the previous difficulty to unlock the next difficulty.");
            }
        } else {
            showAlert();
        }
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
    options.forEach(option => option.classList.remove('shake'));
    loadQuestion();
}

function loadQuestion() {
    nextButton.style.display = "none"; // Resetování hodnoty tlačítka "Další otázka"
    resetButton.style.display = "none";
    nextDifficultyButton.style.display = "none";
    returnToMenuButton.style.display = "none";

    const savedIcon = localStorage.getItem('selectedIcon');
    const savedName = localStorage.getItem('playerName');

    if (savedIcon && savedName) {
        // If there are saved icon and name, display them
        createPlayerIcon(savedName, savedIcon);
        // Clear the icon selection to avoid confusion
        clearIconSelection();
    }

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
        options[i].classList.remove("shake"); // Remove shake class from all options

        if (i === correctOptionIndex) {
            options[i].classList.add("correct");
        } else if (i === selectedOptionIndex) {
            // Use setTimeout to delay the addition of the shake class
            setTimeout(() => {
                options[i].classList.add("incorrect", "shake");
            }, 1);
        }
    }

    if (selectedOptionIndex === finalQuestions[currentQuestion].answer) {
        score++;
        selectedOption.classList.add("correct");
    } else {
        selectedOption.classList.add("incorrect");
    }

    // Remove event listeners after adding classes
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

    // Update scores based on difficulty
    if (selectedDifficulty === "lehká") {
        scoreLehka = percentage;
        highestScoreLehka = Math.max(percentage, highestScoreLehka);
    } else if (selectedDifficulty === "střední") {
        scoreStredni = percentage;
        highestScoreStredni = Math.max(percentage, highestScoreStredni);
    } else if (selectedDifficulty === "těžká") {
        scoreTezka = percentage;
        highestScoreTezka = Math.max(percentage, highestScoreTezka);
    }

    localStorage.setItem('highestScoreLehka', highestScoreLehka);
    localStorage.setItem('highestScoreStredni', highestScoreStredni);
    localStorage.setItem('highestScoreTezka', highestScoreTezka);

    // Display scores on the start screen
    document.getElementById("easy-score").textContent = `Lehká: ${scoreLehka}% (Nejvyšší skóre: ${highestScoreLehka}%)`;
    document.getElementById("medium-score").textContent = `Střední: ${scoreStredni}% (Nejvyšší skóre: ${highestScoreStredni}%)`;
    document.getElementById("hard-score").textContent = `Těžká: ${scoreTezka}% (Nejvyšší skóre: ${highestScoreTezka}%)`;


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