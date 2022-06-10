let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses =document.querySelector('.guesses');
const lastResult = document.querySelector('lastResult');
const lowOrHi = document.querySelector(lowOrHi);
const guessSumbit = document.querySelector(guessSumbit);
const guessField = document.querySelector(guessField);

let guessCount = 1;
let resetButton;
//a string: is anything in quote""
