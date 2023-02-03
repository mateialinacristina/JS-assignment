function computerPlay() {
    const arr = ['rock', 'paper', 'scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'paper' 
    || playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'win';
    }else if (computerSelection == 'rock' && playerSelection == 'paper' || computerSelection == 'scissors' && playerSelection == 'paper' 
    || computerSelection == 'rock' && playerSelection == 'scissors'){
        return 'lose';
    }else if(playerSelection == computerSelection){
        return 'tie';
    } 
}

function game(){
    let pScore = 0;
    let cScore = 0;

    for (let i = 0; i < 5; i++){
        const playerSelection = window.prompt('Choose: rock, paper or scissors.');
        const computerSelection = computerPlay();
        const message = playRound(playerSelection, computerSelection);

        if (message == 'win'){
            pScore++;
            console.log('You win this turn!');
        }else if(message == 'lose'){
            cScore++;
            console.log("Oh man! Maybe youll win next round..");
        }else if(message == 'tie'){
            console.log("It's a tie. Play again.");
        }
    }

    if (pScore > cScore) {
        window.alert("You won the game!");
    } else if (cScore > pScore) {
        window.alert("It looks like the computer won..");
    } else {
        window.alert("It's a tie.");
    }
}

