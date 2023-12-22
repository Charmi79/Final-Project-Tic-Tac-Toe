// FUNCTIONS

// Draw Start Screen
function drawStart() {
  drawMainComponents();

  // Start Text
  ctx.font = "60px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("TIC TAC TOE", 240, 350);

  ctx.font = "30px Consolas";
  ctx.fillText("CLICK INSIDE THE GRID BOXES TO PLACE YOUR X", 40, 450);
}

// Draw Game Elements
function runGame() {
  // LOGIC
  findGridLoc();
  outputImg();

  // DRAW GAME
  drawGame();
}

function findGridLoc() {
  if (mouseX < 266 && mouseY < 200) {
    cell = 1;
  } else if (mouseX < 533 && mouseX > 316 && mouseY < 200) {
    cell = 2;
  } else if (mouseX > 583 && mouseX < cnv.width && mouseY < 200) {
    cell = 3;
  } else if (mouseX < 266 && mouseY < 500) {
    cell = 4;
  } else if (mouseX < 533 && mouseX > 316 && mouseY < 500) {
    cell = 5;
  } else if (mouseX > 583 && mouseX < cnv.width && mouseY < 500) {
    cell = 6;
  } else if (mouseX < 266 && mouseY < cnv.height) {
    cell = 7;
  } else if (mouseX < 533 && mouseX > 316 && mouseY < cnv.height) {
    cell = 8;
  } else if (mouseX > 583 && mouseX < cnv.width && mouseY < cnv.height) {
    cell = 9;
  }
}

function outputImg() {
  if (mouseIsPressed && currentPlayer === "X") {
    if (cell === 1) {
      cell1Content = "X";
    } else if (cell === 2) {
      cell2Content = "X";
    } else if (cell === 3) {
      cell3Content = "X";
    } else if (cell === 4) {
      cell4Content = "X";
    } else if (cell === 5) {
      cell5Content = "X";
    } else if (cell === 6) {
      cell6Content = "X";
    } else if (cell === 7) {
      cell7Content = "X";
    } else if (cell === 8) {
      cell8Content = "X";
      v;
    } else if (cell === 9) {
      cell9Content = "X";
    }
  } else if (mouseIsPressed && currentPlayer === "O") {
    if (cell === 1) {
      cell1Content = "O";
    } else if (cell === 2) {
      cell2Content = "O";
    } else if (cell === 3) {
      cell3Content = "O";
    } else if (cell === 4) {
      cell4Content = "O";
    } else if (cell === 5) {
      cell5Content = "O";
    } else if (cell === 6) {
      cell6Content = "O";
    } else if (cell === 7) {
      cell7Content = "O";
    } else if (cell === 8) {
      cell8Content = "O";
    } else if (cell === 9) {
      cell9Content = "O";
    }
  }
}

function gameOver() {
  state = "gameover";

  drawGameOver();

  setTimeout(reset, 2000);
}

function drawGame() {
  drawMainComponents();
}

// Draw Game Over Screen
function drawGameOver() {
  drawMainComponents();

  // Game Over Text
  ctx.font = "60px Consolas";
  ctx.fillStyle = "red";
  ctx.fillText("GAME OVER", 280, 350);
}

// HELPER FUNCTIONS
function reset() {
  frameCount = 0;
  state = "start";
}

function drawMainComponents() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Grid
  ctx.fillStyle = "white";
  ctx.fillRect(266, 0, 50, 800);
  ctx.fillRect(533, 0, 50, 800);
  ctx.fillRect(0, 200, cnv.width, 50);
  ctx.fillRect(0, 500, cnv.width, 50);

  // Draw Text Bar
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 800, cnv.width, 900);

  // Blue Bar Text
  ctx.font = "30px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText("TIC TAC TOE: " + currentPlayer + " is playing", 25, 840);
  ctx.fillText("Your Wins: 0 ", 25, cnv.height - 15);
  ctx.fillText("Computer Wins: 0", cnv.width - 300, cnv.height - 15);

  // Draw X's and O's
  if (cell1Content === "X") {
    ctx.drawImage(crossImg, 90, 50, 100, 100);
  } else if (cell1Content === "O") {
    ctx.drawImage(circleImg, 90, 50, 100, 100);
  }

  if (cell2Content === "X") {
    ctx.drawImage(crossImg, 375, 50, 100, 100);
  } else if (cell2Content === "O") {
    ctx.drawImage(circleImg, 90, 50, 100, 100);
  }
}

// x and y positions of images down below (use cross.x and cross.y)

// if (column === 1 && row === 1) {
//   cross.x = 90;
//   cross.y = 50;
// } else if (column === 2 && row === 1) {
//   cross.x = 375;
//   cross.y = 50;
// } else if (column === 3 && row === 1) {
//   cross.x = 640;
//   cross.y = 50;
// } else if (column === 1 && row === 2) {
//   cross.x = 90;
//   cross.y = 330;
// } else if (column === 2 && row === 2) {
//   cross.x = 375;
//   cross.y = 330;
// } else if (column === 3 && row === 2) {
//   cross.x = 640;
//   cross.y = 330;
// } else if (column === 1 && row === 3) {
//   cross.x = 90;
//   cross.y = 630;
// } else if (column === 2 && row === 3) {
//   cross.x = 375;
//   cross.y = 630;
// } else if (column === 3 && row === 3) {
//   cross.x = 640;
//   cross.y = 630;
// }
