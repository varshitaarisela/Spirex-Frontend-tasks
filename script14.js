
let userScore = 0;
let computerScore = 0;

// Get HTML elements
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");

const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");

const resultDisplay = document.getElementById("result");
const messageDisplay = document.getElementById("message");

const choiceButtons = document.querySelectorAll(".choice-btn");
const restartButton = document.getElementById("restartBtn");

// Store choices and emojis
const choices = ["rock", "paper", "scissors"];

const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

// Generate computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Play one round
function playGame(userChoice) {

    const computerChoice = getComputerChoice();

    // Display both choices
    userChoiceDisplay.textContent =
        "Your choice: " + emojis[userChoice] + " " + userChoice;

    computerChoiceDisplay.textContent =
        "Computer's choice: " + emojis[computerChoice] + " " + computerChoice;

    // Check winner
    if (userChoice === computerChoice) {

        resultDisplay.textContent = "It's a Draw! 🤝";
        messageDisplay.textContent = "Both made the same choice!";

    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {

        userScore++;

        resultDisplay.textContent = "You Win! 🎉";
        messageDisplay.textContent = "Great job! You won this round.";

    } else {

        computerScore++;

        resultDisplay.textContent = "You Lose! 😢";
        messageDisplay.textContent = "The computer won this round. Try again!";

    }

    // Update scores
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

// Add click events to choice buttons
choiceButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const userChoice = button.dataset.choice;

        playGame(userChoice);

    });

});

// Restart the game
restartButton.addEventListener("click", function() {

    userScore = 0;
    computerScore = 0;

    userScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;

    userChoiceDisplay.textContent = "Your choice: -";
    computerChoiceDisplay.textContent = "Computer's choice: -";

    resultDisplay.textContent = "Make your first move!";
    messageDisplay.textContent = "Good luck! 🎮";

});
