/* global document */

const canvas = document.getElementById('GameScreen');
const ctx = canvas.getContext('2d');

ctx.fillRect(0,0, 400, 400);

const startTime = new Date();
let loopTime = new Date();
const FPSText = document.getElementById('FPS');
const CurrentTime = document.getElementById('time');

const gameUpdate = () => {
  let currTime = new Date();
  console.log('gameUpdate', currTime);
  console.log('loopTime', currTime - loopTime);
  FPSText.value = currTime - loopTime;
  CurrentTime.value = currTime - startTime;

  loopTime = currTime;
  console.log('totalTime', currTime - startTime);
}

const gameLoop = setInterval(gameUpdate, 1000/60);


function quit() {
  clearInterval(gameLoop);
}
