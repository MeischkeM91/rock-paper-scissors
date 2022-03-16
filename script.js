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
};

// Create a function that will play a round of rock,paper,scissors
function playRound(playerSelection, computerSelection){
    let playerChoice=playerSelection.toLowerCase();
    let computerChoice=computerSelection.toLowerCase();
    
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
    return playerWins;
};

// Create a function to play a 5 round game
/* function playGame(){
    for(let i=0;i<5;i++){
        // Vars for both selection placeholders
        let computerSelection = computerPlay();
        let playerSelection = prompt("Choose Rock, Paper, or Scissors!",'');
        console.log(`Player Selects: ${playerSelection}`)
        console.log(`Computer Selects: ${computerSelection}`)
        console.log(playRound(playerSelection,computerSelection))
    }
} 

playGame();*/

// Create var to reference the body
const body = document.querySelector('body');

// Create a div to place content into
const content = document.createElement('div');
content.classList.add('content');
// Append content to the body
body.appendChild(content);
// Create div that will hold the buttons
const btnContainer = document.createElement('div');
btnContainer.classList.add('btnContainer');
// Create a div that will display the outcome
const results = document.createElement('div');
results.classList.add('results');
// Append btnContainer to content
content.appendChild(btnContainer);
// Append results div after buttons
content.appendChild(results);

// Create a button for each choice
// Rock Button that plays round when clicked and displays to results
const rockBtn = document.createElement('button');
rockBtn.classList.add('rockBtn');
rockBtn.textContent = "Rock";
rockBtn.addEventListener('click', () =>{
    results.textContent = playRound(rockBtn.textContent,computerPlay());
});
// Paper Button that plays round when clicked and displays to results
const paperBtn = document.createElement('button');
paperBtn.classList.add('paperBtn');
paperBtn.textContent = "Paper";
paperBtn.addEventListener('click', () =>{
    results.textContent = playRound(paperBtn.textContent,computerPlay());
});
// Scissor Button that plays round when clicked and displays to results
const scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('scissorsBtn');
scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener('click', () =>{
    results.textContent = playRound(scissorsBtn.textContent,computerPlay());
});
// Append each button into the btnContainer
btnContainer.appendChild(rockBtn);
btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorsBtn);
