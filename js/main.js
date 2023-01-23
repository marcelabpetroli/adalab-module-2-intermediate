'use strict';

const btnBattleElement = document.querySelector('.js-btn-battle');
const playerChoiceElement = document.querySelector('.js-select');
const numberOfBattlesElement = document.querySelector('.js-number-battles');

let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

const message = document.querySelector('.js-start-battle');
const btnRestartGameElement = document.querySelector('.js-btn-restart');

let numberBattles = 0;
let pScore = 0;
let cScore = 0;

const computerOptions = [2, 2, 2, 3, 5];

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleClick(e) {
  e.preventDefault();
  playGame();
}

function playGame() {
  const computerChoice = computerOptions[getRandomNumber(5) - 1];
  const playerChoice = parseInt(playerChoiceElement.value);

  if (playerChoice === computerChoice) {
    itIsTie();
  } else if (playerChoice > computerChoice) {
    playerWins();
  } else {
    computerWins();
  }
  if (parseInt(numberBattles) === 10) {
    btnRestartGameElement.classList.remove('hidden');
    btnBattleElement.classList.add('hidden');
    btnRestartGameElement.addEventListener('click', restartGame);
  }
}

function itIsTie() {
  message.textContent = `It's a tie 💥`;
  numberBattles++;
  numberOfBattlesElement.textContent = numberBattles;
}

function computerWins() {
  message.textContent = `Sauron's Army has won. Try again! 👾 ❌`;
  cScore++;
  numberBattles++;
  computerScore.innerHTML = cScore;
  numberOfBattlesElement.textContent = numberBattles;
}

function playerWins() {
  message.textContent = `The Army of Good has won! Congrats ⚔️ 🛡`;
  pScore++;
  numberBattles++;
  playerScore.innerHTML = pScore;
  numberOfBattlesElement.textContent = numberBattles;
}

function restartGame(event) {
  event.preventDefault();
  pScore = 0;
  cScore = 0;
  numberBattles = 0;
  computerScore.innerHTML = cScore;
  playerScore.innerHTML = pScore;
  numberOfBattlesElement.textContent = numberBattles;
  btnRestartGameElement.classList.add('hidden');
  btnBattleElement.classList.remove('hidden');
}

//Listening to event click on the buttn "BATALLA"
btnBattleElement.addEventListener('click', handleClick);
