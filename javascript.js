// Inicializace proměnných:
let selectedIcon = "";
let playerName = "";
let currentQuestion = 0;
let score = 0;
let selectedDifficulty = "";
let scoreLehka = 0;
let scoreStredni = 0;
let scoreTezka = 0;
let highestScoreLehka = 0;
let highestScoreStredni = 0;
let highestScoreTezka = 0;
let extremeAttempts = 0;
let wrongAnswersCount = 0;
let currentPuzzleIndex = 0;
let timer;
let elapsedTime = 0;

// Ziskání odkazů na HTML elementy:
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".options li");
const questionImage = document.getElementById("question-image");
const nextButton = document.getElementById("next-button");
const resetButton = document.getElementById("reset-button");
const nextDifficultyButton = document.getElementById("next-difficulty-button");
const returnToMenuButton = document.getElementById("return-to-menu-button");
const extremeButton = document.getElementById("extreme-button");
const crossButton = document.getElementById("cross-button");
const extremeContainer = document.getElementById("extreme-container");
const extremeInput = document.getElementById("extreme-input");
const extremeOptions = document.getElementById("extreme-options");
const iconInput = document.getElementById("icon-input");
const iconBox = document.getElementById("icon-box");
const iconButton = document.getElementById("icon-button");
const iconContainer = document.getElementById("icon-container")
const changeButton = document.getElementById("change-buttonn");
const crossIcone = document.getElementById("cross-icone");
const timerElement = document.getElementById("timer");
const cardPop = document.getElementById("popup")
const cardButton = document.getElementById("card-button")

scoreLehka = parseInt(localStorage.getItem('scoreLehka')) || 0;
scoreStredni = parseInt(localStorage.getItem('scoreStredni')) || 0;
scoreTezka = parseInt(localStorage.getItem('scoreTezka')) || 0;

highestScoreLehka = parseInt(localStorage.getItem('highestScoreLehka')) || 0;
highestScoreStredni = parseInt(localStorage.getItem('highestScoreStredni')) || 0;
highestScoreTezka = parseInt(localStorage.getItem('highestScoreTezka')) || 0;

document.addEventListener("DOMContentLoaded", function () {
    // Check if the flag is set in localStorage
    let popupShown = localStorage.getItem("popupShown");

    // If the flag is not set, show the popup
    if (!popupShown) {
        cardPop.style.display = "block";
    }

    // Add a click event listener to the button
    document.getElementById("card-button").addEventListener("click", function () {
        // Set the flag in localStorage to indicate that the popup has been shown
        localStorage.setItem("popupShown", "true");

        // Hide the popup
        cardPop.style.display = "none";
    });
});

let count = 0

count = parseInt(localStorage.getItem('count')) || 0;

function finishCard() {
    // Check if count is greater than 1 before proceeding
    if (count < 1) {
        if (highestScoreLehka === 100 && highestScoreStredni === 100 && highestScoreTezka === 100) {
            // Display the "finish" div
            document.getElementById('finish').style.display = 'block';
        }

        // You can also add an event listener to the "Dobře" button to hide the div again if needed
        document.getElementById('finish-button').addEventListener('click', function () {
            document.getElementById('finish').style.display = 'none';
            count++;
            localStorage.setItem('count', count);
        });
    }
}

crossIcone.addEventListener("click", function () {
    iconBox.style.display = "none";
    changeButton.style.display = "block";
    iconContainer.style.display = "block";
});

crossButton.addEventListener("click", () => {
    selectedDifficulty = "";
    startScreen.style.display = "block";
    quizContainer.style.display = "none";
    extremeButton.style.display = "block";
    extremeContainer.style.display = "none";
    changeButton.style.display = "block"
    crossButton.style.display = "none";
    coinsDisplay.style.display = "block";
    pauseButton.style.display = "none";
    fiftyFiftyButton.style.display = "none"
    skipButton.style.display = "none";
    stopTimer();
    resetTimer();
    randomQuestion();
});

// Function to set the button text and save it in localStorage
function setButtonText(text) {
    let button = document.getElementById("change-buttonn");
    button.innerHTML = text;
    localStorage.setItem("buttonText", text);
}

// Function to get the button text from localStorage on page load
function getButtonText() {
    let savedText = localStorage.getItem("buttonText");
    if (savedText) {
        setButtonText(savedText);
    }
}

/*
připravuje uživatelské rozhraní pro výběr nové ikony tím 
že resetuje předchozí stav a nastavuje odpovídající vizuální prvky.
*/
function showIconSetup() {
    selectedIcon = "";
    playerName = "";

    iconInput.value = "";

    setButtonText("Změnit hráče");

    iconBox.style.display = "block";
    iconButton.style.display = "none";
    changeButton.style.display = "block";
    crossIcone.style.display = "block";
    iconContainer.style.display = "none";
    clearIconSelection();
}

// Call getButtonText on page load
window.onload = getButtonText;

// Ruší výběr ikon tím, že resetuje styly všech obrázků v rámci určeného kontejneru
function clearIconSelection() {
    const iconImages = document.querySelectorAll("#icon-options img");
    iconImages.forEach(img => img.style.border = "none");
}

function selectIcon(clickedImage) {
    if (clickedImage.classList.contains('icon-image1')) {
        // Show an alert indicating that the user should choose another icon
        showAlert("Please choose another icon.");
    } else {
        const iconImages = document.querySelectorAll("#icon-options img");
        iconImages.forEach(img => img.style.border = "none");

        selectedIcon = clickedImage.src;
        clickedImage.style.border = "2px solid blue";
    }
}


/*
if (highestScoreLehka >= 50) {
    // Select all elements with the class "icon-image"
    let iconImages = document.querySelectorAll('.icon-image1');

    // Loop through each image and hide it
    iconImages.forEach(function (image) {
        image.style.display = 'none';
    });
}

if (highestScoreLehka < 50) {
    // Select all elements with the class "icon-image2"
    let iconImages = document.querySelectorAll('.icon-image2');

    // Loop through each image and hide it
    iconImages.forEach(function (image) {
        image.style.display = 'none';
    });
}
*/


function confirmIcon() {
    playerName = iconInput.value;
    if (playerName.trim() !== "" && selectedIcon !== "") {
        // Resetování skóre při změně ikony a jména hráče
        scoreLehka = 0;
        scoreStredni = 0;
        scoreTezka = 0;

        // Obnovení nejvyššího skóre, když hráč změní ikonu a jméno
        highestScoreLehka = 0;
        highestScoreStredni = 0;
        highestScoreTezka = 0;

        coins = 0;
        count = 0;

        createPlayerIcon(playerName, selectedIcon);

        localStorage.setItem('coins', coins);
        localStorage.setItem('count', count);

        localStorage.setItem('selectedIcon', selectedIcon);
        localStorage.setItem('playerName', playerName);

        localStorage.setItem('scoreLehka', scoreLehka);
        localStorage.setItem('scoreStredni', scoreStredni);
        localStorage.setItem('scoreTezka', scoreTezka);
        localStorage.setItem('highestScoreLehka', highestScoreLehka);
        localStorage.setItem('highestScoreStredni', highestScoreStredni);
        localStorage.setItem('highestScoreTezka', highestScoreTezka);


        // Přepíše skóre když si hráč zzmění ikonu 
        document.getElementById("easy-score").textContent = `Lehká: ${scoreLehka}% (Nejvyšší skóre: ${highestScoreLehka}%)`;
        document.getElementById("medium-score").textContent = `Střední: ${scoreStredni}% (Nejvyšší skóre: ${highestScoreStredni}%)`;
        document.getElementById("hard-score").textContent = `Těžká: ${scoreTezka}% (Nejvyšší skóre: ${highestScoreTezka}%)`;

        iconBox.style.display = "none";
        selectedIcon = "";

    } else {
        showAlert("Před zahajením kvízu musíte prvně zadat svého hráče a jméno.");
    }
}

function createPlayerIcon(name, iconData) {
    let iconContainer = document.getElementById("icon-container");

    // Pokud kontejner ikony neexistuje, vytvří se dynamicky
    if (!iconContainer) {
        iconContainer = document.createElement("div");
        iconContainer.id = "icon-container";
        document.body.appendChild(iconContainer);
    }

    iconContainer.style.display = "block";

    let playerIcon = document.getElementById("player-icon");

    // Pokud ikona playerIcon neexistuje, vytvoří se dynamicky
    if (!playerIcon) {
        playerIcon = document.createElement("img");
        playerIcon.id = "player-icon";
        iconContainer.appendChild(playerIcon);
    }

    playerIcon.src = iconData;
    playerIcon.alt = name;

    const playerNameElement = document.getElementById("player-name");
    if (!playerNameElement) {
        // Pokud prvek playerNameElement neexistuje, vytvoří se dynamicky
        const newPlayerNameElement = document.createElement("span");
        newPlayerNameElement.id = "player-name";
        iconContainer.appendChild(newPlayerNameElement);
    }

    playerNameElement.textContent = name;

    localStorage.setItem('selectedIcon', iconData);
    localStorage.setItem('playerName', name);
}

// Funkce pro promíchání pole otázek
function randomQuestion(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

const mixedQuestions = randomQuestion(questions);

// Omezení počtu otázek na 10 pro každou obtížnost
const maxQuestionsPerDifficulty = 10;
const limitedQuestions = {};

mixedQuestions.forEach(question => {
    const difficulty = question.difficulty;

    if (!limitedQuestions[difficulty]) {
        limitedQuestions[difficulty] = [];
    }

    if (limitedQuestions[difficulty].length < maxQuestionsPerDifficulty) {
        limitedQuestions[difficulty].push(question);
    }
});

// Vytvoří pole finalQuestions obsahující omezený počet otázek pro každou obtížnost
const finalQuestions = Object.values(limitedQuestions).flat();

const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');

function showAlert(message) {
    modalMessage.textContent = message;
    customModal.style.display = 'flex';
}

function closeCustomModal() {
    customModal.style.display = 'none';
}

startScreen.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const clickedDifficulty = event.target.textContent.toLowerCase();

        // Kontrola, zda si hráč vybral ikonu a jméno
        if (localStorage.getItem('selectedIcon') && localStorage.getItem('playerName')) {
            // Zkontrolujte, zda hráč může hrát zvolenou obtížnost
            if (
                (clickedDifficulty === "lehká") ||
                (clickedDifficulty === "střední" && highestScoreLehka >= 50) ||
                (clickedDifficulty === "těžká" && highestScoreStredni >= 50)
            ) {
                selectedDifficulty = clickedDifficulty;
                startScreen.style.display = "none";
                quizContainer.style.display = "block";
                pauseButton.style.display = "block";
                fiftyFiftyButton.style.display = "block"
                skipButton.style.display = "block";
                extremeButton.style.display = "none";
                resetQuiz();
                startTimer();
            } else {
                showAlert("Pro odemknutí další obtížnosti musíš v předchozí obtížnosti dosáhnout alespoň 50% skóre.");
            }
        } else {
            showAlert("Zadej svoji ikonu a jméno než začneš hrát.");
        }
    }
});

resetButton.addEventListener("click", () => {
    resetQuiz();
    startTimer();
    resetTimer();
    pauseButton.style.display = "block";
    fiftyFiftyButton.style.display = "block"
    skipButton.style.display = "block";
});

nextDifficultyButton.addEventListener("click", () => {
    const currentDifficultyIndex = ["lehká", "střední", "těžká"].indexOf(selectedDifficulty);

    selectedDifficulty = ["lehká", "střední", "těžká"][(currentDifficultyIndex + 1) % 3];

    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    pauseButton.style.display = "block";
    fiftyFiftyButton.style.display = "block"
    skipButton.style.display = "block";


    resetQuiz();
    loadQuestion();
    resetTimer();
    startTimer();
});

returnToMenuButton.addEventListener("click", () => {
    selectedDifficulty = "";
    startScreen.style.display = "block";
    quizContainer.style.display = "none";
    extremeButton.style.display = "block"
    pauseButton.style.display = "none";
    fiftyFiftyButton.style.display = "none"
    skipButton.style.display = "none";
    stopTimer();
    resetTimer();
    finishCard();
});


let isTimerRunning = false;

function startTimer() {
    // Check if the timer is already running
    if (!isTimerRunning) {
        timer = setInterval(() => {
            elapsedTime++;
            updateTimerDisplay();
        }, 1000);

        isTimerRunning = true;
    }
}

function stopTimer() {
    console.log("Before clearInterval:", timer);
    clearInterval(timer);
    console.log("After clearInterval:", timer);
    isTimerRunning = false;
}


function updateTimerDisplay() {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function resetTimer() {
    elapsedTime = 0;
    updateTimerDisplay();
    isTimerRunning = false;  // Reset the running state
}

const pauseButton = document.getElementById("pauseButton");

pauseButton.addEventListener("click", () => {
    if (coins >= 5) {
        stopTimer();
        coins -= 5;
        coinsDisplay.textContent = `Mince: ${coins}`;
        localStorage.setItem('coins', coins);
    } else {
        showAlert("Na to aby jste mohli použít funkci stopnutí času tak musíte mít 5 mincí.");
    }
});


function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    options.forEach(option => option.classList.remove('shake'));
    loadQuestion();
}

const skipButton = document.getElementById("skipButton");


skipButton.addEventListener("click", () => {
    if (coins >= 10) {
        const correctOptionIndex = finalQuestions[currentQuestion].answer;

        // Simulate a click on the correct option
        simulateOptionClick(correctOptionIndex);

        // Increase the current question index to move to the next question
        currentQuestion++;

        // Reset the options remaining count
        optionsRemaining = 4; // Assuming there are initially 4 options

        // Check if there are more questions remaining
        if (currentQuestion < finalQuestions.length) {
            loadQuestion();
        } else {
            // No more questions remaining, show the result
            showResult();
        }

        coins -= 10;
        coinsDisplay.textContent = `Mince: ${coins}`;
        localStorage.setItem('coins', coins);
    } else {
        showAlert("Na to aby jste mohli použít funkci přeskočit otázku musíte mít 5 mincí.");
    }
});

// Function to simulate a click on the option at a given index
function simulateOptionClick(index) {
    const selectedOption = options[index];

    // Trigger a click event on the selected option
    const clickEvent = new Event('click');
    selectedOption.dispatchEvent(clickEvent);
}

const buttons = [
    { id: "fiftyFiftyButton", cost: 5 }, // You can adjust the cost for each button as needed
    { id: "pauseButton", cost: 5 },
    { id: "skipButton", cost: 10 }
];

const coinsCostDisplay = document.getElementById("coinsCostDisplay");

function handleButtonHover(button) {
    const buttonElement = document.getElementById(button.id);

    buttonElement.addEventListener("mouseover", () => {
        coinsCostDisplay.textContent = `Stojí ${button.cost} mincí`;
    });

    buttonElement.addEventListener("mouseout", () => {
        coinsCostDisplay.textContent = "";
    });
}

// Iterate through the buttons and set up the hover behavior
buttons.forEach(button => {
    handleButtonHover(button);
});

function loadQuestion() {
    nextButton.style.display = "none";
    resetButton.style.display = "none";
    nextDifficultyButton.style.display = "none";
    returnToMenuButton.style.display = "none";

    const savedIcon = localStorage.getItem('selectedIcon');
    const savedName = localStorage.getItem('playerName');

    if (savedIcon && savedName) {
        createPlayerIcon(savedName, savedIcon);
        clearIconSelection();
    }

    crossButton.style.display = "block";

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
        changeButton.style.display = "block";
        crossButton.style.display = "none";
    } else {
        changeButton.style.display = "none";
    }
}

function updateQuestion(questionData) {

    questionElement.textContent = `${questionData.question}`;

    // Zkontrolujte, zda je aktuální obtížnost "těžká"
    // Pokud je tak se nezobrazí obrázky a pokud není tak zůstanou zobrazené
    if (questionData.difficulty !== "těžká") {
        questionImage.src = `images/${questionData.image}`;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }
    updateOptions(questionData.options);
}

let optionsRemaining = 4; // Assuming there are initially 4 options

let coins = 0;
coins = parseInt(localStorage.getItem('coins')) || 0;

// Add this line to your existing code to create an HTML element for displaying coins
const coinsDisplay = document.getElementById("coins-display");

// Update the updateOptions function to show/hide the coins display
function updateOptions(currentOptions) {
    // Reset the number of remaining options
    optionsRemaining = currentOptions.length;

    // Display or hide options based on the current question
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

    // Update the coins display
    coinsDisplay.textContent = `Mince: ${coins}`;
    localStorage.setItem('coins', coins);
}


function useFiftyFifty() {
    // Check if the player has at least 5 coins
    if (coins >= 5) {
        // Check if the 50/50 can be used (there are more than 2 options remaining)
        if (optionsRemaining > 2) {
            const correctOptionIndex = finalQuestions[currentQuestion].answer;
            const incorrectOptions = Array.from({ length: optionsRemaining }, (_, i) => i)
                .filter(index => index !== correctOptionIndex);

            // Randomly select two incorrect options to remove
            const optionsToRemove = getRandomElements(incorrectOptions, 2);

            // Hide the selected incorrect options
            optionsToRemove.forEach(index => {
                options[index].style.display = "none";
                optionsRemaining--;
            });

            // Deduct 5 coins from the player
            coins -= 5;
            coinsDisplay.textContent = `Mince: ${coins}`;
            localStorage.setItem('coins', coins);
        }
    } else {
        showAlert("Na to aby jste mohli použít funkci 50/50 tak musíte mít 5 mincí.");
    }
}


// Helper function to get random elements from an array
function getRandomElements(arr, num) {
    const shuffled = arr.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
}

// Assuming you have a button in your HTML with id "fiftyFiftyButton"
const fiftyFiftyButton = document.getElementById("fiftyFiftyButton");

// Add a click event listener to the 50/50 button
fiftyFiftyButton.addEventListener("click", useFiftyFifty);


function checkAnswer(event) {
    const selectedOption = event.target;
    const selectedOptionIndex = Array.from(options).indexOf(selectedOption);
    const correctOptionIndex = finalQuestions[currentQuestion].answer;

    for (let i = 0; i < options.length; i++) {
        options[i].removeEventListener("click", checkAnswer);
        options[i].classList.remove("shake");

        if (i === correctOptionIndex) {
            options[i].classList.add("correct");
        } else if (i === selectedOptionIndex) {
            setTimeout(() => {
                options[i].classList.add("incorrect", "shake");
            }, 1);
        }
    }

    if (selectedOptionIndex === finalQuestions[currentQuestion].answer) {
        score++;
        coins++;
        coinsDisplay.textContent = `Mince: ${coins}`;
        localStorage.setItem('coins', coins);
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
    stopTimer();

    resetButton.style.display = "block";
    nextDifficultyButton.style.display = "block";
    returnToMenuButton.style.display = "block";

    // Výpočet uplynulého času v minutách a sekundách
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    // Zformátujte uplynulý čas do řetězce (MM:SS)
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const percentage = (score / maxQuestionsPerDifficulty) * 100;
    const formattedPercentage = percentage.toFixed(0);

    if (selectedDifficulty !== "těžká" && percentage > 50) {
        nextDifficultyButton.style.display = "block";
    } else {
        nextDifficultyButton.style.display = "none";
    }

    // Aktualizace skóre na základě obtížnosti
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

    localStorage.setItem(`scoreLehka`, scoreLehka);
    localStorage.setItem(`scoreStredni`, scoreStredni);
    localStorage.setItem(`scoreTezka`, scoreTezka);

    document.getElementById("easy-score").textContent = `Lehká: ${scoreLehka}% (Nejvyšší skóre: ${highestScoreLehka}%)`;
    document.getElementById("medium-score").textContent = `Střední: ${scoreStredni}% (Nejvyšší skóre: ${highestScoreStredni}%)`;
    document.getElementById("hard-score").textContent = `Těžká: ${scoreTezka}% (Nejvyšší skóre: ${highestScoreTezka}%)`;


    questionElement.textContent = `Váš výsledek: ${score} správných odpovědí z ${maxQuestionsPerDifficulty}. Váš kvíz trval: ${formattedTime}. Celkové procento: ${formattedPercentage}%.`;

    options.forEach(option => option.style.display = "none");
    nextButton.style.display = "none";

    if (questionImage.style.display !== "none") {
        questionImage.style.display = "none";
    }

    if (timerElement.style.display !== "none") {
        timerElement.style.display = "none";
    }

    pauseButton.style.display = "none";
    fiftyFiftyButton.style.display = "none"
    skipButton.style.display = "none";
}

loadQuestion();

nextButton.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
    startTimer();
});

// Funkce pro zobrazení extrémní obtížnost
function showExtremeMode() {
    currentPuzzleIndex = 0;
    wrongAnswersCount = 0;

    // Kkontrola zda hráč dosáhl alespoň 50% skóre v obtížnosti "Lehká" i "Těžká".
    if (highestScoreLehka >= 50 && highestScoreTezka >= 50) {
        extremeButton.style.display = "none";
        startScreen.style.display = "none";
        pauseButton.style.display = "none";
        fiftyFiftyButton.style.display = "none"
        quizContainer.style.display = "none";
        extremeContainer.style.display = "block";
        timerElement.style.display = "block";
        changeButton.style.display = "none"
        coinsDisplay.style.display = "none";

        loadExtremeQuestion();
    } else {
        showAlert("Pro odemknutí Extra těžké obtížnosti je třeba dosáhnout alespoň 50% skóre v každé obtížnosti.");
    }
}

function loadExtremeQuestion() {
    extremeInput.value = "";

    const currentExtremeQuestion = getCurrentExtremeQuestion();

    console.log('currentExtremeQuestion:', currentExtremeQuestion);

    crossButton.style.display = "block";

    document.getElementById("extreme-question").textContent = currentExtremeQuestion.question;

    displayExtremeOptions(currentExtremeQuestion.options);
}

function getExtremeModeQuestion() {
    const currentExtremeQuestion = getCurrentExtremeQuestion();
    return currentExtremeQuestion;
}

function displayExtremeOptions(options) {
    const extremeOptionsContainer = extremeOptions;
    extremeOptionsContainer.innerHTML = "";

    options.forEach((option, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = `images/${option}`;
        imgElement.alt = `Option ${index + 1}`;

        if (index === 0) {
            imgElement.style.width = "200px";
            imgElement.style.height = "200px";
            imgElement.style.padding = "5px";
            imgElement.style.objectFit;
        }

        extremeOptionsContainer.appendChild(imgElement);
    });
}

// Funkce pro kontrolu odpovědi v extremní obtížnosti
function checkExtremeAnswer() {
    const userInput = extremeInput.value.toLowerCase();
    const correctAnswer = getExtremeModeCorrectAnswer();
    // Kontrola zda uživatelův vstup odpovídá správné odpovědi.
    if (userInput === correctAnswer) {
        idk = null;
        startScreen.style.display = "block";
        extremeButton.style.display = "block";
        changeButton.style.display = "block"
        extremeContainer.style.display = "none";
        coinsDisplay.style.display = "block";
    } else {
        wrongAnswersCount++;
        // Kontrola zda hráč zadal tři špatné odpovědi pokud ano zobrazí se další obrázek jako nápověda
        if (wrongAnswersCount % 3 === 0) {
            displayNextExtremePicture();
        }
    }

    document.getElementById('extreme-input').value = ''
}

// Funkce pro získání náhodné otázky
function getRandomExtremeQuestion() {
    const randomIndex = Math.floor(Math.random() * extremePuzzles.length);
    return extremePuzzles[randomIndex];
}

let idk = null;

// Funkce pro získání aktuální otázky
function getCurrentExtremeQuestion() {
    if (idk == null) {
        idk = getRandomExtremeQuestion();
        return idk;
    } else return idk;
}

// Funkce pro zobrazení dalšího obrázku jako nápovědy 
function displayNextExtremePicture() {
    const currentExtremeQuestion = getCurrentExtremeQuestion();

    if (wrongAnswersCount % 3 === 0 && wrongAnswersCount / 3 < currentExtremeQuestion.clues.length) {
        const currentClueIndex = Math.floor(wrongAnswersCount / 3);
        const currentExtremePicture = currentExtremeQuestion.clues[currentClueIndex];

        const pictureContainer = extremeOptions;

        const imgElement = document.createElement("img");
        imgElement.src = `images/${currentExtremePicture}`;
        imgElement.alt = `Hint ${currentClueIndex + 1}`;

        imgElement.style.width = "200px";
        imgElement.style.height = "200px";
        imgElement.style.padding = "5px";

        pictureContainer.appendChild(imgElement);
    }
}

function getExtremeModeCorrectAnswer() {
    const currentExtremeQuestion = getExtremeModeQuestion();

    return currentExtremeQuestion.correctAnswer;
}


extremeButton.addEventListener("click", showExtremeMode);
