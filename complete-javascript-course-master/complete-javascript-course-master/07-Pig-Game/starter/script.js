'use strict';

// DOM references: these constants let the game read and update the score,
// current-turn display, player styling, dice image, buttons, and winner modal.

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// console.log(score0,score1);
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnPlayAgain = document.querySelector('.winner-modal__new');
const winnerModalEl = document.querySelector('.winner-modal');
const winnerNameEl = document.querySelector('.winner-modal__name');

// Game state:
// - scores stores each player's banked total.
// - currentScore stores points earned during the active player's turn.
// - activePlayer is 0 or 1 and determines whose score/display is updated.
// - playing prevents rolls and holds after a winner has been decided.
let scores, currentScore, activePlayer, playing;

// Initialize or restart the game: reset the JavaScript state and make the
// visible scores, dice, modal, and player styling match that state.
const init = function () {
  // scores[0] = 0;
  // scores[1] = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  winnerModalEl.classList.add('hidden');
};

// Run once as soon as this script loads so the game starts in a clean state.
init();

// Pass the turn to the other player and clear the turn-only points.
// The banked totals are not changed here; only Hold or the roll-of-1 rule
// banks those points before this function is called.
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;

  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player1El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
};

// End the game after a player reaches the target score.
// Lock further gameplay, highlight the winning player, put their HTML name
// into the modal, and reveal the modal.
const finishGame = function () {
  playing = false;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  winnerNameEl.textContent = document.querySelector(
    `#name--${activePlayer}`,
  ).textContent;
  winnerModalEl.classList.remove('hidden');
};

// Bank this turn's points for the active player and clear the turn display.
// Math.min caps the total at 100 so a player who goes over the target displays
// exactly 100. Return true when the game ends, otherwise false so the caller
// knows whether it should pass the turn.
const bankCurrentScore = function () {
  scores[activePlayer] = Math.min(scores[activePlayer] + currentScore, 100);
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  if (scores[activePlayer] >= 100) {
    finishGame();
    return true;
  }

  return false;
};

// Rolling dice: only accept rolls while the game is active.

btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate an integer from 1 through 6. Math.random() returns a value in
    // [0, 1), multiplication scales it to [0, 6), and truncation plus 1 gives
    // the dice range.

    const dice = Math.trunc(Math.random() * 6) + 1;

    // Show the image for the generated value by updating the img src.

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // console.log(dice);

    // A non-1 adds its value to the active player's temporary turn score.
    // Rolling 1 banks those accumulated points for this same player, then
    // passes the turn if the banked total has not won the game.
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      if (!bankCurrentScore()) {
        switchPlayer();
      }
    }
  }
});

// Hold: bank the active player's temporary points, then either end the game
// if the target is reached or give the turn to the other player.
btnHold.addEventListener('click', function () {
  // console.log('hold button')
  if (playing) {
    //1. add current score to active player's score
    // console.log(activePlayer);

    //cores[1] += currentScore;
    // check if the players score is >= 100
    // finish the game
    if (!bankCurrentScore()) {
      // switch to the next player
      switchPlayer();
    }
  }
});

// New Game button: reset scores, player turn, dice, winner styling, and modal.
btnNew.addEventListener('click', function () {
  init();
});

// The modal's Play Again button uses the same reset behavior as New Game.
btnPlayAgain.addEventListener('click', function () {
  init();
});
