
// Get HTML Elements
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const scoreDisplay = document.getElementById("score");

const gameContainer = document.querySelector(".game-container");

// Game Variables
let secretNumber;
let attempts;
let score = 0;
let gameOver = false;

// Start New Game
function startGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1;

    attempts = 5;
    gameOver = false;

    guessInput.value = "";
    guessInput.disabled = false;

    checkBtn.disabled = false;
    checkBtn.style.opacity = "1";

    message.innerText = "Let's start the game!";
    message.style.color = "#555";

    attemptsDisplay.innerText = attempts;
    scoreDisplay.innerText = score;

    playAgainBtn.style.display = "none";

    gameContainer.classList.remove("win");

    guessInput.focus();
}

// Check Guess Function
function checkGuess() {

    if (gameOver) {
        return;
    }

    const guess = Number(guessInput.value);

    // Validate Input
    if (
        guessInput.value.trim() === "" ||
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 20
    ) {
        message.innerText = "Please enter a number between 1 and 20!";
        message.style.color = "#e53935";
        return;
    }

    // Reduce Attempts
    attempts--;

    attemptsDisplay.innerText = attempts;

    // Check Answer
    if (guess === secretNumber) {

        message.innerText = "🎉 Correct! You Won!";
        message.style.color = "green";

        score += attempts + 1;
        scoreDisplay.innerText = score;

        gameContainer.classList.add("win");

        endGame();

    } else if (guess > secretNumber) {

        message.innerText = "Too High! Try a smaller number.";
        message.style.color = "#e53935";

    } else {

        message.innerText = "Too Low! Try a bigger number.";
        message.style.color = "#e53935";
    }

    // Check Remaining Attempts
    if (attempts === 0 && guess !== secretNumber) {

        message.innerText =
            "Game Over! The correct number was " + secretNumber;

        message.style.color = "#e53935";

        endGame();
    }

    guessInput.value = "";
    guessInput.focus();
}

// End Game Function
function endGame() {
    gameOver = true;

    guessInput.disabled = true;
    checkBtn.disabled = true;

    checkBtn.style.opacity = "0.5";

    playAgainBtn.style.display = "inline-block";
}

// Check Guess Button Event
checkBtn.addEventListener("click", checkGuess);

// Enter Key Event
guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

// Play Again Button Event
playAgainBtn.addEventListener("click", function() {
    startGame();
});

// Start Game Initially
startGame();
