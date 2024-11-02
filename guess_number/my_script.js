'use strict';
/*
//code implementation 
1.add eventlistener was added to the check function when clicked 
2.

*/
document.addEventListener('DOMContentLoaded', function () {
  //creating a varibale for guess value stored

  const button = document.querySelector('.check');
  const secretNumber = Math.trunc(Math.random() * 100) + 1;
  let score = 20;
  let highscore = 0;

  const display = (document.querySelector('.number').textContent =
    secretNumber);

  button.addEventListener('click', function () {
    const clickchange = Number(document.querySelector('.guess').value);
    let messageEL = document.querySelector('.message');

    console.log(clickchange);

    if (!clickchange) {
      console.log((messageEL.textContent = 'no number'));
    } else if (clickchange === secretNumber) {
      const display = (document.querySelector('.number').textContent =
        secretNumber);
      score = score;
      console.log((document.querySelector('.score').textContent = score));
      console.log((messageEL.textContent = 'it is equal'));
      //the style changes

      document.querySelector('body').style.color = '#FEFDED';
      document.querySelector('header').style.backgroundColor = '#00FF00';

      document.querySelector('.message').style.backgroundColor = '#00FF00';

      document.querySelector('.message').style.color = '#FEFDED';
      document.querySelector('.number').style.backgroundColor = '#00FF00';
      document.querySelector('.again').style.backgroundColor = '#000000';
      document.querySelector('.again').style.color = '#00FF00';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.Highscore').textContent = highscore;
      }
    } else if (clickchange !== secretNumber) {
      if (score > 1) {
        score--;
        messageEL.textContent =
          clickchange > secretNumber
            ? 'the number is greater'
            : 'the number is lesser!';

        console.log((document.querySelector('.score').textContent = score));
      } else {
        console.log((messageEL.textContent = 'you lost of the game'));
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const myreset = document.querySelector('.again');
  let score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  myreset.addEventListener('click', function () {
    document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.color = '#F2613F';
    document.querySelector('header').style.backgroundColor = '#481E14';

    document.querySelector('.message').style.backgroundColor = '#481E14';

    document.querySelector('.message').style.color = '#9B3922';
    document.querySelector('.number').style.backgroundColor = '#9B3922';
  });
});
