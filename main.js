"use strict";

const btnBattleElement = document.querySelector(".js-btn-battle");
const playerChoiceElement = document.querySelector(".js-select");

//Computer can choose one of these options
const computerOptions = [
  "Raza 1: Sureños malos con fuerza (2)",
  "Raza 2: Orcos con fuerza (2)",
  "Raza 3: Goblins con fuerza (2)",
  "Raza 4: Huargos con fuerza (2)",
  "Raza 5: Trolls con fuerza (2)",
];

//Function that generates random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Function to execute all the other small functions
function handleClick(e) {
  e.preventDefault();
  const computerChoice = computerOptions[getRandomNumber(5) - 1];
  const pChoice = playerChoiceElement.value;
}

//Listening to event click on the buttn "BATALLA"
btnBattleElement.addEventListener("click", handleClick);
