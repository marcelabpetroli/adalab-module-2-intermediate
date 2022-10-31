"use strict";

const btnBattleElement = document.querySelector(".js-btn-battle");
const playerChoiceElement = document.querySelector(".js-select");

let pScore = document.querySelector(".player-score p");
let cScore = document.querySelector(".computer-score p");

const message = document.querySelector(".js-start-battle");

//Computer can choose one of these options
const computerOptions = [2, 2, 2, 3, 5];

//Function that generates random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Function to execute all the other small functions
function handleClick(e) {
  e.preventDefault();
  const computerChoice = computerOptions[getRandomNumber(5) - 1];
  const playerChoice = parseInt(playerChoiceElement.value);
  if (playerChoice === computerChoice) {
    message.textContent = `Empate 💥`;
  } else if (playerChoice > computerChoice) {
    message.textContent = `Ha ganado el jugador! 🏆`;
  } else {
    message.textContent = `Ha ganado la computadora 👾`;
  }
}

//Listening to event click on the buttn "BATALLA"
btnBattleElement.addEventListener("click", handleClick);
