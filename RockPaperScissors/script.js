//variables declared for the event listener
const rock = document.querySelector("#select-rock");
const paper = document.querySelector("#select-paper");
const scissors = document.querySelector("#select-scrissors");
const startGame = document.querySelector("#start");
const restartGame = document.querySelector("#restart");

//disabled the restart button so that the game can restart
restartGame.disabled = true;

const weapons = {
    rock: { name: "Rock", beats: "scissors" },
    paper: { name: "Paper", beats: "rock" },
    scissors: { name: "Scissors", beats: "paper" }
};

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    displayResult(winner, playerChoice, computerChoice);
}

function getComputerChoice() {
    const choices = Object.keys(weapons);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return weapons[choices[randomIndex]];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice.beats === computerChoice.beats) {
        return "tie";
    } else if (computerChoice.beats === playerChoice.name) {
        return "computer";
    } else {
        return "player";
    }
}

function displayResult(winner, playerChoice, computerChoice) {
    if (winner === "tie") {
        result.textContent = `It's a tie! You both chose ${playerChoice.name}.`;
    } else if (winner === "computer") {
        result.textContent = `You lose! ${computerChoice.name} beats ${playerChoice.name}.`;
    } else {
        result.textContent = `You win! ${playerChoice.name} beats ${computerChoice.name}.`;
    }
}

rock.addEventListener("click", function () { getPlayerChoice(rock); });
paper.addEventListener("click", function () { getPlayerChoice(paper); });
scissors.addEventListener("click", function () { getPlayerChoice(scissors); });
startGame.addEventListener('click', start);
restartGame.addEventListener('click', restart);