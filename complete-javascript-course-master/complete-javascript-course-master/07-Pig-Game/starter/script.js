'use strict';

//Selecting Elements

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// console.log(score0,score1);
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling Dice functionality

btnRoll.addEventListener('click', function() {

   //Generating a random Number

    const dice = Math.trunc(Math.random() * 6) + 1;
   
    //Displaying Dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // console.log(dice);
    

    //check for rolled 1 : if true, switch to new player
    if(dice === 1) {

    }
})



