function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100);
    let computerChoice = "rock";

    if (randomNumber <= 33) {
        computerChoice = "rock"}
    else if (randomNumber >= 66) {
        computerChoice = "paper"}
    else { 
        computerChoice = "scissors"}

    console.log(computerChoice)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === "rock" && computerSelection === "paper") {
         let response = "You Lose! Paper beats Rock"
    }
    
    else {
        response = "viu?"
    }
    
    return response;
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

        