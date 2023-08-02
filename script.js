const INPUT_OPTIONS = ["rock", "paper", "scissors"]
const POSSIBLE_WINS = [["rock", "scissors"], ["scissors", "paper"], ["paper", "rock"]];
const SCORE_TO_WIN = 5;

let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function checkWin(curUserScore, curComputerScore){
    if(curUserScore == SCORE_TO_WIN){
        displayResults();
        winLossScreen();

        userScore = 0;
        computerScore = 0;
    }
    if(curComputerScore == SCORE_TO_WIN){
        displayResults();
        winLossScreen();

        userScore = 0;
        computerScore = 0;
    }
}

function winLossScreen(userWon){
    const resultsDisplay = document.querySelector("div");
    if(userWon){
        resultsDisplay.textContent = "YOU WON WITH A SCORE OF " + userScore + " - " + computerScore;
    } else {
        resultsDisplay.textContent = "YOU LOST WITH A SCORE OF " + userScore + " - " + computerScore;
    }
}

function displayResults(){
    const resultsDisplay = document.querySelector("div");
    resultsDisplay.textContent = "RESULTS: " + userScore + " - " + computerScore;
    return;
}

function playRound(playerSelection, computerSelection){
    const playerSel = playerSelection.toLowerCase();
    const computerSel = computerSelection;
    const round = [playerSel, computerSel];

    if(playerSel==computerSel){
        return;
    }

    for(let i=0;i<3;i++){
        if(POSSIBLE_WINS[i].every((val, index) => val === round[index])) {
            userScore++;
            displayResults();
            return;
        } 
    }

    computerScore++;
    displayResults();

    return;
}

function game(){
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");

    rockButton.addEventListener('click', () => { playRound("rock", getComputerChoice()); checkWin(userScore, computerScore); });
    paperButton.addEventListener('click', () => { playRound("paper", getComputerChoice()); checkWin(userScore, computerScore); });
    scissorsButton.addEventListener('click', () => { playRound("scissors", getComputerChoice()); checkWin(userScore, computerScore); });
}


game()
