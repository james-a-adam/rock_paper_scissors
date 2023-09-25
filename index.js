//setting initial score to zero
let playerScore = 0;
let computerScore = 0;

//select elements
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');

//random computer choice
function computerPlay () {
    const choicesArr = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choicesArr.length);
    const computerChoice = choicesArr[randomNumber];
    return computerChoice;
}

//play a round and return result
function playRound (playerSelection, computerSelection) {
    // console.log('1', playerSelection, '2', computerSelection)
    const p = document.createElement('p');

    if (playerSelection === computerSelection) {
        p.innerText = `Its a tie! You both chose ${playerSelection}`
        outcomeDiv.appendChild(p)
    } else if (
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'
        ){
            playerScore++
            p.innerText = `Player Wins! ${playerSelection} beats ${computerSelection}`
            outcomeDiv.appendChild(p)
    } else {
            computerScore++
            p.innerText = `Computer Wins! ${computerSelection} beats ${playerSelection}`
            outcomeDiv.appendChild(p)
    }
}


//keep track of score and declare winner
function checkWinner (playerScore, computerScore) {
    // console.log(playerScore,computerScore)
    const h2 = document.createElement('h2')

    if (playerScore === 5) {
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${computerScore}! You beat the machine!`
        outcomeDiv.append(h2)
    }

    if (computerScore === 5) {
        h2.classList.add('comp-won')
        h2.innerText = `The computer won ${computerScore} to ${playerScore}! You suuuuckaaaa`
        outcomeDiv.append(h2)
    }
}

//display score
function updateScores (playerScore, computerScore) {
    playerScoreDisplay.innerText = `Player Score: ${playerScore}`;
    computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
}

//button event listeners
//each button creates a random computer play and the selected player choice
//those choices are then submitted to playRound function
rockBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkWinner (playerScore, computerScore);
})

paperBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkWinner (playerScore, computerScore);
})

scissorsBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkWinner (playerScore, computerScore);
})



//looping the game 5 times
//also looping random player and computer selection 5 times
// function game () {
//     // for (let i = 0; i < 5; i++) {
//     //     const playerSelection = prompt ('Make your choice', 'Rock, Paper, Scissors').toLowerCase();
//     //     const computerSelection = computerPlay();
//     //     console.log(playRound(playerSelection, computerSelection));
//     }


//     //check who won
//     if (playerScore > computerScore) {
//         return "You win! You are a genius!"
//     } else if (computerScore > playerScore) {
//         return "The Machine wins! Suckaaaa"
//     } else {
//         return "It's a dang tie"
//     }
    
// }

// console.log(game());