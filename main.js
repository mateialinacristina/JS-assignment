const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const scoreDisplay = document.getElementById('score')
const possibleChoices = document.querySelectorAll('button')
let result;
let computerSelection;
let playerSelection;
let pScore = 0;
let cScore = 0;

function computerPlay() {
    const arr = ['rock', 'paper', 'scissors'];
    const randNumber = Math.floor(Math.random() * arr.length);
    computerSelection = arr[randNumber];
    computerChoiceDisplay.innerHTML = computerSelection;
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id
    userChoiceDisplay.innerHTML = playerSelection
    computerPlay()
    playRound()
    game()
  }))


function playRound(){
    if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'paper' 
            || playerSelection == 'rock' && computerSelection == 'scissors'){
        result = 'You win';
    }
    else if (playerSelection == computerSelection){
        result = 'Tie';
    }else{
        result = 'You lose';
    }
    resultDisplay.innerHTML = result; 
}

function game(){

        if (result == 'You win'){
            pScore++;
        }else if(result == 'You lose'){
            cScore++;
        }
    
        if(pScore === 6 || cScore === 6){
            pScore = 0;
            cScore = 0;
        }

   scoreDisplay.innerHTML = pScore;
}
