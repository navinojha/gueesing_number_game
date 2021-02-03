'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

const randNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (randNumber > guess) {
    document.querySelector('.message').textContent = 'Too low!!';
  } else if (randNumber < guess) {
    document.querySelector('.message').textContent = 'Too High!!';
  } else {
    document.querySelector('.message').textContent = 'Hurray!! Correct Number!';
  }
});
