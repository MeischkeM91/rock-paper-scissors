// Vars for both selection placeholders
let computerSelection = computerPlay();
let playerSelection = prompt("Choose Rock, Paper, or Scissors!",'');

// Create a function to display Rock/ Paper/ Scissors at random
function computerPlay(){
    //create a random number between 1-99
    let number = Math.floor(Math.random()*100);
    if (number <= 33){
        return "Rock";
    }
    else if (number <= 66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// Create a function that will play a round of rock,paper,scissors
function playRound(playerSelection, computerSelection){
    playerChoice=playerSelection.toLowerCase();
    computerChoice=computerSelection.toLowerCase();
    if (playerChoice == computerChoice){
        return "It's a tie, how exciting.";
    }
    else if (playerChoice == "rock"){
        if (computerChoice == "paper"){ return `You lose! ${computerSelection} beats ${playerSelection}`}
        else {return `You win! ${playerSelection} beats ${computerSelection}`}
    }
    else if (playerChoice == "paper"){
        if (computerChoice == "scissors"){ return `You lose! ${computerSelection} beats ${playerSelection}`}
        else {return `You win! ${playerSelection} beats ${computerSelection}`}
    }
    else if (playerChoice == "scissors"){
        if (computerChoice == "rock"){ return `You lose! ${computerSelection} beats ${playerSelection}`}
        else {return `You win! ${playerSelection} beats ${computerSelection}`}
    }
}

console.log(`Player Selects: ${playerSelection}`)
console.log(`Computer Selects: ${computerSelection}`)
console.log(playRound(playerSelection,computerSelection))