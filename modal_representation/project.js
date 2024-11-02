'use strict';

// we need to excute these useing these reuirements
// modal
// open button
// close button
// overlay of the model

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-btn');
const btnOpenModel = document.querySelectorAll('.modal-open');
console.log(btnOpenModel); // make sure modal is defined

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', function () {
    console.log('buttonclicked');
    modal.classList.remove('hide');
    overlay.classList.remove('hide');

    //we have to change the display from the none to block element
  });
}

btnCloseModel.addEventListener('click', function () {
  modal.classList.add('hide');
  overlay.classList.add('hide');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hide');
  overlay.classList.add('hide');
});
