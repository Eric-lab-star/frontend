const spinner = document.querySelector("div");
const body = document.querySelector("body");
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;
  rotateCount %= 360;
  spinner.style.transform = `rotate(${rotateCount}deg)`;
  rAF = requestAnimationFrame(draw);
}

function handleSpinner() {
  if (!startTime) {
    draw();
  } else {
    cancelAnimationFrame(rAF);
    startTime = null;
  }
}

body.addEventListener("click", handleSpinner);
