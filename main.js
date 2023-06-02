const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player ${player}`;
    computerText.textContent = `Computer ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}
let playerWins = 0;
let computerWins = 0;
const maxWins = 5;

function checkWinner() {
    if (player === computer) {
        return "Result: It's a tie";
    } else if (player === "Rock" && computer === "Scissors" ||
        player === "Paper" && computer === "Rock" ||
        player === "Scissors" && computer === "Paper") {
        playerWins++;
        if (playerWins === maxWins) {
            playerWins = 0;
            return 'Congratulations! You won the game with 5 wins!'
        }
        return `Result: You win! ${player} beats ${computer}`;
    } else {
        computerWins++;
        if (computerWins === maxWins) {
            computerWins = 0;
            return 'OH NO!! computer won the game with 5 wins!'
        }
        return `Result: Computer wins ${computer} beats ${player}`;
    }
}
