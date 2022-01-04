function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100);
    let computerChoice = "rock";

    if (randomNumber <= 33) {
        computerChoice = "rock"}
    else if (randomNumber >= 66) {
        computerChoice = "paper"}
    else { 
        computerChoice = "scissors"}
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let response = " "

    if 
    (playerSelection === "rock" && computerSelection === "paper") {
        return response = "You Lose! Paper beats Rock";    //this is meant to trigger "You lose response"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        response = "You Win! Rock beats Scissors"
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        response = "You Win! Paper beats Rock"
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        response = "You Lose! Scissors beats Paper"
    }
    
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        response = "You Win! Scissors beats Paper"
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        response = "You Lose! Rock beats Scissors"
    }

    else {
        response = "Draw -_-"
    }
    return response

}
    //playSelection = prompt("Rock Paper or Scissors?");



const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

/*function game() {
    let text = "Round";
    let i = 1;

    do {text += i;
        i = i++}

    while (i < 6);
    console.log()
}
*/       