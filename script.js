'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// -- UTILITY FUNCTION TO DISPLAY A MESSAGE -- //
const displayMessgae = function (message) {
    document.querySelector('.message').textContent = message;
};

// -- WHEN CHECK BUTTON CLICKED -- //
document.querySelector('.check').addEventListener('click', function () {
    const guessedNumber = Number(document.querySelector('.guess').value);

    if (!guessedNumber || guessedNumber === NaN) displayMessgae('⛔ Enter a Number');
    else {
        // INCORRECT GUESS
        if (guessedNumber !== secretNumber) {
            if (score > 1) {
                displayMessgae(guessedNumber > secretNumber ? '📈 Too high' : '📉 Too less');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('body').style.backgroundColor = '#E9524A';
                displayMessgae('😿 Sorry, you lost!');
                document.querySelector('.score').textContent = 0;
            }
        }
        // CORRECT GUESS
        else {
            displayMessgae('🎉 Correct, you won!');
            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';

            // Update high score
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
    }
});

// -- WHEN PLAY AGAIN BUTTON CLICKED -- //
document.querySelector('.again').addEventListener('click', function () {
    // 1. Reset the score to 20
    score = 20;
    document.querySelector('.score').textContent = score;

    // 2. Revert victory visual changes (Will only affect if user has won)
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    displayMessgae('Start guessing...');

    // 3. Empty the number input
    document.querySelector('.guess').value = '';

    // 4. Randomize the number again
    secretNumber = Math.trunc(Math.random() * 20 + 1);
});
