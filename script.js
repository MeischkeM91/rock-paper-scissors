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

console.log(`Player Selects: ${playerSelection}`)
console.log(`Computer Selects: ${computerSelection}`)