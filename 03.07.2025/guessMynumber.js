document.addEventListener('DOMContentLoaded', function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;

  const messageEl = document.querySelector('.message');
  const numberEl = document.querySelector('.number');
  const scoreEl = document.querySelector('.score');
  const highscoreEl = document.querySelector('.highscore');
  const guessInput = document.querySelector('.guess');
  const body = document.querySelector('body');
  const checkBtn = document.querySelector('.check');
  const againBtn = document.querySelector('.again');

  function displayMessage(message) {
    messageEl.textContent = message;
  }

  checkBtn.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    // Log secret number and user guess for debugging
    console.log("Secret number:", secretNumber);
    console.log("User entered:", guess);

    if (!guess) {
      displayMessage(' No number!');
    } else if (guess < 1 || guess > 20) {
      displayMessage('Number out of range!');
    } else if (guess === secretNumber) {
      displayMessage(' Correct Number!');
      numberEl.textContent = secretNumber;
      body.style.backgroundColor = '#60b347';
      numberEl.style.width = '15rem';

      //  Print Win when the user guesses correctly
      console.log("Win");

      if (score > highscore) {
        highscore = score;
        highscoreEl.textContent = highscore;
        console.log("Highscore updated:", highscore);
      }
    } else {
      if (score > 1) {
        displayMessage(guess > secretNumber ? ' Too high!' : ' Too low!');
        score--;
        scoreEl.textContent = score;
      } else {
        displayMessage(' You lost the game!');
        scoreEl.textContent = 0;
      }
    }
  });

  againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing…');
    scoreEl.textContent = score;
    numberEl.textContent = '?';
    guessInput.value = '';

    body.style.backgroundColor = '#222';
    numberEl.style.width = '7rem';

    //  Log new secret number after reset
    console.log("Game reset. New secret number:", secretNumber);
  });
});
