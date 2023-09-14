//array of choices
const options = ["rock", "paper", "scissors"];


//random computer choice
function getComputerChoice() {
    const choice = options [Math.floor(Math.random() * options.length)]; //a variable that willl choose one of 3 options at random using length of options array
    //console.log(choice);
    return choice;
}

//prompt for player choice
function getPlayerChoice(){
    let validInput = false; //if no valid input keep asking
    while(validInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }

        const choiceLowercase = choice.toLowerCase(); // convert everything to lowercase

        if(options.includes(choiceLowercase)){ //if input is in options array, stop the loop and return chioice in lowercase
            validInput = true;
            return choiceLowercase;
        }
    }
}



//function to check winner of tie
function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){ //if player and computer make same choice 
        return "tie";
    } 
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") || //checking scenarios where player wins
        (playerSelection == "scissors" && computerSelection == "paper") || // <--- OR
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


//5 round game
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;

    console.log("welcome to the game!")
    for (let i = 0; i < 5; i++) { //loop the process 5 times
        const playerSelection = getPlayerChoice(); //player choice
        const computerSelection =getComputerChoice(); //random computer choice

        console.log(playRound(playerSelection, computerSelection));
        console.log("------------");
        if(checkWinner(playerSelection, computerSelection) == "player"){ //if player wins add 1 score
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "computer") {
            scoreComputer++;
        }   
    }
    console.log("Game Over");

    if (scorePlayer > scoreComputer){ //if player/computer scores more display the message
        console.log("You are the winner!");
    } else if (scorePlayer < scoreComputer){
        console.log("The computer is the winner!");
    }
    else {
        console.log("It's a Tie");
    }
}

game();


//declaring selections which get passed into checkWinner + playRound functions
//const playerSelection = "rock"; 
//const computerSelection = getComputerChoice(); //computer making random choice
//console.log(playRound(playerSelection, computerSelection));
// getComputerChoice();

