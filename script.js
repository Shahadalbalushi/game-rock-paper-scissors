// Rock, Paper, Scissors Game

// Choices for Rock, Paper, Scissors
let choices = ["Rock", "Paper", "Scissors"];

// Player's choice (set manually or randomly)
let playerChoice = "";
let computerChoice = "";

// DOM Elements
const playerChoiceText = document.getElementById('playerChoice');
const computerChoiceText = document.getElementById('computerChoice');
const gameResultText = document.getElementById('gameResult');

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playGame(0));
document.getElementById('paper').addEventListener('click', () => playGame(1));
document.getElementById('scissors').addEventListener('click', () => playGame(2));

function playGame(playerIndex) {
    playerChoice = choices[playerIndex];

    // Computer's choice (randomly selected)
    let computerIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[computerIndex];

    // Determine the winner
    let result = "";
    if (playerIndex === computerIndex) {
        result = "It's a tie!";
    } else if (
        (playerIndex === 0 && computerIndex === 2) || // Rock beats Scissors
        (playerIndex === 1 && computerIndex === 0) || // Paper beats Rock
        (playerIndex === 2 && computerIndex === 1)    // Scissors beats Paper
    ) {
        result = "The player won!";
    } else {
        result = "The computer won!";
    }

    // Output results to the DOM
    playerChoiceText.textContent = `Your choice: ${playerChoice}`;
    computerChoiceText.textContent = `Computer's choice: ${computerChoice}`;
    gameResultText.textContent = `Result: ${result}`;
}
