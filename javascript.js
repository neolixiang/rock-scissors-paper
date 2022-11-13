
// listen to "click" to grab what user choose 
buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        const playerSelection = event.target.id.toLowerCase();
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
        const computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
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
        console.log(gameRound(playerSelection));
        if (gameRound().substring(4, 5) == 'w') {
            document.getElementById('playerScore').innerHTML++;
        } else if (gameRound().substring(4, 5) == 'l') {
            document.getElementById('computerScore').innerHTML++;
        } else {
            return;
        }
        const ps = (document.getElementById('playerScore').innerHTML);
        const cs = (document.getElementById('computerScore').innerHTML);
        if (ps >= 5) {
            setTimeout(() => {
                alert('You are the winner');
                document.getElementById('playerScore').innerHTML *= 0;
                document.getElementById('computerScore').innerHTML *= 0;
            }, 2)
        } else if (cs >= 5) {
            setTimeout(() => {
                alert('Computer is the winner');
                document.getElementById('playerScore').innerHTML *= 0;
                document.getElementById('computerScore').innerHTML *= 0;
            }, 2)
        } else {
            return;
        }
    })
})
