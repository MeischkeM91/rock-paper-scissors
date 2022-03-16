// Declare var to hold score for player/ computer
let playerScore = 0;
let cpuScore = 0; 
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
        if (computerChoice == "paper"){
            cpuScore++;
            cpuScoreCnt.textContent=cpuScore;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            playerScoreCnt.textContent=playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerChoice == "paper"){
        if (computerChoice == "scissors"){ 
            cpuScore++; 
            cpuScoreCnt.textContent=cpuScore;
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }
        else {
            playerScore++;
            playerScoreCnt.textContent=playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else if (playerChoice == "scissors"){
        if (computerChoice == "rock"){ 
            cpuScore++; 
            cpuScoreCnt.textContent=cpuScore;
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }
        else {
            playerScore++;
            playerScoreCnt.textContent=playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
    }
};

function declareWin() {
    if (playerScore == 5) {
        alert("Wow! You beat the Computer!");
    }
    else if (cpuScore == 5) {
        alert("Too bad! You lost to the Computer.");
    }
}

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
// Create div to display the score
const scoreboard = document.createElement('div');
scoreboard.classList.add('scoreboard');
// Create divs to display player and computer score
// Player
const playerScoreDiv = document.createElement('div')
playerScoreDiv.classList.add('playerScoreDiv');
const playerScoreCnt = document.createElement('p');
playerScoreCnt.classList.add('playerScoreCnt');
const playerScoreHeader = document.createElement('h2');
playerScoreHeader.classList.add('playerScoreHeader');
playerScoreHeader.textContent = 'PLAYER';
//Computer
const cpuScoreDiv = document.createElement('div')
cpuScoreDiv.classList.add('cpuScoreDiv');
const cpuScoreCnt = document.createElement('p');
cpuScoreCnt.classList.add('cpuScoreCnt');
const cpuScoreHeader = document.createElement('h2');
cpuScoreHeader.classList.add('cpuScoreHeader');
cpuScoreHeader.textContent = 'COMPUTER';

// Append to content
content.appendChild(btnContainer);
content.appendChild(results);
content.appendChild(scoreboard);
scoreboard.appendChild(playerScoreDiv);
scoreboard.appendChild(cpuScoreDiv);
playerScoreDiv.appendChild(playerScoreCnt);
playerScoreDiv.appendChild(playerScoreHeader);
cpuScoreDiv.appendChild(cpuScoreCnt);
cpuScoreDiv.appendChild(cpuScoreHeader);


// Create a button for each choice
// Rock Button that plays round when clicked and displays to results
const rockBtn = document.createElement('button');
rockBtn.classList.add('rockBtn');
rockBtn.textContent = "Rock";
rockBtn.addEventListener('click', () =>{
    results.textContent = playRound(rockBtn.textContent,computerPlay());
    declareWin();
});
// Paper Button that plays round when clicked and displays to results
const paperBtn = document.createElement('button');
paperBtn.classList.add('paperBtn');
paperBtn.textContent = "Paper";
paperBtn.addEventListener('click', () =>{
    results.textContent = playRound(paperBtn.textContent,computerPlay());
    declareWin();
});
// Scissor Button that plays round when clicked and displays to results
const scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('scissorsBtn');
scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener('click', () =>{
    results.textContent = playRound(scissorsBtn.textContent,computerPlay());
    declareWin(); 
});

// Append each button into the btnContainer
btnContainer.appendChild(rockBtn);
btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorsBtn);
