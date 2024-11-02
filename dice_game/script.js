'use strict';

//selecting elements

const game_0 = document.getElementById('score--0');
const game_1 = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');
const currentEle = document.getElementById('present--0');
const buttonNew = document.querySelector('.button--new');
const buttonRoll = document.querySelector('.button--roll');
const buttonhold = document.querySelector('.button--hold');

game_0.textContent = 0;
game_1.textContent = 0;
diceEle.classList.add('.hidden');
let currentScore = 0;
// dice.classList.add('hidden');

//clicking the button and add an event of dice visiblilty

//rolling dice

buttonRoll.addEventListener('click', function () {
  //1.generate a random diceroll
  //2. display dice

  //4. true , switch to next player

  const diceNum = Math.trunc(Math.random() * 6) + 1;
  diceEle.classList.remove('.hidden');
  diceEle.src = `dice-${diceNum}.png`;
  //   console.log(diceNum);  make the dice number to display on console

  // check for roll one
  if (diceNum !== 1) {
    console.log(`dice is not 1:add the dice to current scorw`);
    currentScore += diceNum;
    currentEle.textContent = currentScore;
  } else {
    console.log(`new player`);
  }
});
