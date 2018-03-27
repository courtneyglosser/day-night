/* global document */

const canvas = document.getElementById('GameScreen');
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, 400, 400);

const startTime = new Date().getTime();
let loopTime = new Date().getTime();
console.log('startTime: ', startTime);
console.log('loopTime: ', loopTime);
let currTime;
let calcFPS = 0;
let currentFPS = 0;
let startSecond = Math.floor(new Date() / 1000) + 1;

// Text Inputs
const FPSText = document.getElementById('FPS');
const CurrentTime = document.getElementById('time');
const MilliText = document.getElementById('milli');

const gameUpdate = () => {
  currTime = Math.floor(new Date() / 1000);
  console.log('currTime: ', currTime);
  if (currTime >= startSecond) {
    startSecond = Math.floor(new Date() / 1000) + 1;
    currentFPS = calcFPS;
    calcFPS = 0;
  } else {
    calcFPS += 1;
  }
  MilliText.value = currTime - loopTime;
  CurrentTime.value = currTime - startTime;
  FPSText.value = currentFPS;

  loopTime = currTime;
};

const gameLoop = setInterval(gameUpdate, 1000 / 60);


function quit() {
  clearInterval(gameLoop);
}
