console.log('hi')

//array of choices
const options = ["rock", "paper", "scissors"];


//random computer choice
function getComputerChoice() {
    const choice = options [Math.floor(Math.random() * options.length)]; //a variable that willl choose one of 3 options at random using length of options array
    console.log(choice);
    return choice;
}

//function to check winner or tie
function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){ //if player and computer make same choice 
        return "tie";
    } 
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") || //checking scenarios where player wins
        (playerSelection == "scissors" && computerSelection == "paper") || // <--- OR symbol
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    } 
    else {
        return "computer"; //if none above are ture then computer wins
    }
}



//a function that will create the round and declare result of checkWinner function
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection); //check return of checkWinner function and store it in variable
    if (result == "tie") {
        return "It's a tie!";
    } 
    else if (result == "player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`; // using backticks to add variables to return output (rock beats scissors eg)
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}


//declaring selections which get passed into checkWinner + playRound functions
const playerSelection = "rock"; //where player makes choice
const computerSelection = getComputerChoice(); //computer making random choice
console.log(playRound(playerSelection, computerSelection));
// getComputerChoice();

