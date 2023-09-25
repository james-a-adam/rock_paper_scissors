//setting initial score to zero
let playerScore = 0;
let computerScore = 0;

//random computer choice
function computerPlay () {
    const choicesArr = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choicesArr.length);
    const computerChoice = choicesArr[randomNumber];
    return computerChoice;
}

//play a round and return result
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Its a tie! You both chose ${playerSelection}`
    } else if (
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'
        ){
            playerScore++
            return `Player Wins! ${playerSelection} beats ${computerSelection}`
    } else {
            computerScore++
            return `Computer Wins! ${computerSelection} beats ${playerSelection}`
    }
}

//looping the game 5 times
//also looping random player and computer selection 5 times
function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt ('Make your choice', 'Rock, Paper, Scissors').toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }


    //check who won
    if (playerScore > computerScore) {
        return "You win! You are a genius!"
    } else if (computerScore > playerScore) {
        return "The Machine wins! Suckaaaa"
    } else {
        return "It's a dang tie"
    }
    
}

console.log(game());