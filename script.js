const INPUT_OPTIONS = ["rock", "paper", "scissors"]
const POSSIBLE_WINS = [["rock", "scissors"], ["scissors", "paper"], ["paper", "rock"]];
const NUM_OF_ROUNDS = 5;

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

function playRound(playerSelection, computerSelection){
    const playerSel = playerSelection.toLowerCase();
    const computerSel = computerSelection;
    const round = [playerSel, computerSel];

    if(playerSel==computerSel){
        alert("TIE");
        userScore += 0.5;
        computerScore += 0.5;
        return;
    }

    for(let i=0;i<3;i++){
        if(POSSIBLE_WINS[i].every((val, index) => val === round[index])) {
            alert("WIN");
            userScore++;
            return;
        } 
    }

    alert("LOSS");
    computerScore++;
    return;
}

function game(){
    for(let i=0; i < NUM_OF_ROUNDS; i++){
        let validInput = false;
        let userInput;
        while(!validInput){
            userInput = prompt("Rock, paper, or scissors?");
            validInput = INPUT_OPTIONS.includes(userInput.toLowerCase());
        }
        playRound(userInput, getComputerChoice());
    }

    if(userScore == computerScore) { 
      alert( "TIE\n" + "SCORE: " + userScore + " - " + computerScore); 
    }
    
    if(userScore > computerScore) { 
      alert( "WIN\n" + "SCORE: " + userScore + " - " + computerScore); 
    }

    if(userScore < computerScore) { 
      alert( "YOU SUCK\n" + "SCORE: " + userScore + " - " + computerScore); 
    }
}

game()
