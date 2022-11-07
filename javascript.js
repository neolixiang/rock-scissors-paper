function getComputerChoice() {
    const x = Math.floor(Math.random() * 3)
    if (x === 0) {
        return 'rock';
    } else if (x === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const playerSelection = 'RoCk'.toLowerCase();
const computerSelection = getComputerChoice();

function gameRound() {
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lost - paper beats rock';
        }
        if (computerSelection === 'scissors') {
            return 'You won - rock beats scissors';
        }

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lost - scissors beat paper';
        }
        if (computerSelection === 'rock') {
            return 'You won - paper beats rock';
        }
    } else {
        if (computerSelection === 'rock') {
            return 'You lost - rock beats scissors';
        }
        if (computerSelection === 'paper') {
            return 'You won - scissors beat paper';
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        if (gameRound().substring(4, 5) == 'w') {
            playerScore += 1;
        } else if (gameRound().substring(4, 5) == 'l'){
            computerScore += 1;
        } else {
            null;
        }
    }
    if (playerScore > computerScore) {
        return 'You won the series!';
    }
    else if (playerScore < computerScore) {
        return 'You lost the series!';
    }
    else {
        return 'Tie!';
    }
}

console.log(game());