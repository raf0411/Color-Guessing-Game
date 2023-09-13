const rgbColor = document.querySelector('.js-rgb-color');
const newColorButton = document.querySelector('.js-new-color-button');
const easyButton = document.querySelector('.js-easy-button');
const hardButton = document.querySelector('js-hard-button');
const answerInfo = document.querySelector('.js-answer-info');
const background = document.getElementById('bg');

let red;
let green;
let blue;

let guessColor;

let answer;
let guess;
let min = 1;
let max = 6;

let state;

generateRandomGuesses();
displayRGB();

newColorButton.addEventListener('click', () => {
  generateRandomGuesses();
  displayRGB();
  answerInfo.textContent = '';
  newColorButton.textContent = 'NEW COLORS';
  background.style.backgroundColor = '#2c8e99';
});

function setAnswer() {
  let guess;

  answer = `rgb(${red}, ${green}, ${blue})`;

  guess = Math.floor(Math.random() * (max - min + 1) + min);

  console.log(guess);

  const guessesColor = document.getElementById(`color-${guess}`);

  console.log(`rgb(${red}, ${green}, ${blue})`);

  guessesColor.style.backgroundColor = answer;
}

function generateRandomRGB() {
  red = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
}

function generateRandomGuesses() {
  let guessesColor;

  for (let i = 1; i <= max; i++){
    guessesColor = document.getElementById(`color-${i}`);
    generateRandomRGB();
    guessesColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

function displayRGB() {
  generateRandomRGB();
  rgbColor.textContent = `rgb(${red}, ${green}, ${blue})`;
  setAnswer();
}

const color1 = document.getElementById('color-1');
const color2 = document.getElementById('color-2');
const color3 = document.getElementById('color-3');
const color4 = document.getElementById('color-4');
const color5 = document.getElementById('color-5');
const color6 = document.getElementById('color-6');

state = false;

color1.addEventListener('click', () => {
  if (color1.style.backgroundColor === answer) {
    answerInfo.textContent = 'You Win!';
    newColorButton.textContent = 'PLAY AGAIN';
    changeColor();
  }
  else {
    answerInfo.textContent = 'Try Again!';
    color1.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
  }
});

color2.addEventListener('click', () => {
  if (color2.style.backgroundColor === answer) {
    answerInfo.textContent = 'You Win!';
    newColorButton.textContent = 'PLAY AGAIN';
    changeColor();

  }
  else {
    answerInfo.textContent = 'Try Again!';
    color2.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
  }
});

color3.addEventListener('click', () => {
  if (color3.style.backgroundColor === answer) {
    answerInfo.textContent = 'You Win!';
    newColorButton.textContent = 'PLAY AGAIN';
    changeColor();

  }
  else {
    answerInfo.textContent = 'Try Again!';
    color3.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
  }
});

color4.addEventListener('click', () => {
  if (color4.style.backgroundColor === answer) {
    answerInfo.textContent = 'You Win!';
    newColorButton.textContent = 'PLAY AGAIN';
    changeColor();

  }
  else {
    answerInfo.textContent = 'Try Again!';
    color4.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
  }
});

color5.addEventListener('click', () => {
  if (color5.style.backgroundColor === answer) {
    answerInfo.textContent = 'You Win!';
    newColorButton.textContent = 'PLAY AGAIN';
    changeColor();

  }
  else {
    answerInfo.textContent = 'Try Again!';
    color5.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
  }
});

color6.addEventListener('click', () => {
  if (color6.style.backgroundColor === answer) {
    answerInfo.textContent = 'You Win!';
    newColorButton.textContent = 'PLAY AGAIN';
    changeColor();
  }
  else {
    answerInfo.textContent = 'Try Again!';
    color6.style.backgroundColor = `rgba(0, 0, 0, 0)`;  
  }
});

function changeColor() {
  background.style.backgroundColor = answer;
}