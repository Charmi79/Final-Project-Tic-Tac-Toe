// Tic Tac Toe Final Game CS 10

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 900;

// Global Variables (0nce)
let crossImg = document.createElement("img");
crossImg.src = "img/cross.png";

let circleImg = document.createElement("img");
circleImg.src = "img/circle.png";

let cross = {
  x: 50,
  y: 50,
  w: 100,
  h: 100,
};

let column = 0;

let row = 0;

let currentPlayer = "X";

// Helicopter
// ctx.drawImage(heliImg, heli.x, heli.y);

let mouseIsPressed = false;

// Global Variables (Reset)
let frameCount;
let state;
let mouseX, mouseY, pmouseX, pmouseY;

reset();
// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemovehandler);

function mousedownHandler() {
  mouseIsPressed = true;
  frameCount++;

  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemovehandler(event) {
  // Save previous mouseX and mouseY
  pmouseX = mouseX;
  pmouseY = mouseY;
  // Update mouseX and mouseY
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
