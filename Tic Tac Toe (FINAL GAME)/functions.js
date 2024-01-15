// FUNCTIONS

// Draw Start Screen
function drawStart() {
  drawMainComponents();

  // Start Text
  ctx.font = "60px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("TIC TAC TOE", 240, 350);

  ctx.font = "30px Consolas";
  ctx.fillText("CLICK INSIDE THE GRID BOXES TO PLACE YOUR PLAYER", 5, 450);
}

// Draw Game Elements
function runGame() {
  // LOGIC
  findGridLoc();
  chgPlayerAndContent();
  gameEndStatus();

  // DRAW GAME
  drawGame();
}

function findGridLoc() {
  // Determine what cell the mouse is hovering over
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

function chgPlayerAndContent() {
  // Change the cell content and current player
  if (mouseIsPressed && currentPlayer === "X") {
    if (cell === 1 && cell1Content === "") {
      cell1Content = "X";
      currentPlayer = "O";
    } else if (cell === 2 && cell2Content === "") {
      cell2Content = "X";
      currentPlayer = "O";
    } else if (cell === 3 && cell3Content === "") {
      cell3Content = "X";
      currentPlayer = "O";
    } else if (cell === 4 && cell4Content === "") {
      cell4Content = "X";
      currentPlayer = "O";
    } else if (cell === 5 && cell5Content === "") {
      cell5Content = "X";
      currentPlayer = "O";
    } else if (cell === 6 && cell6Content === "") {
      cell6Content = "X";
      currentPlayer = "O";
    } else if (cell === 7 && cell7Content === "") {
      cell7Content = "X";
      currentPlayer = "O";
    } else if (cell === 8 && cell8Content === "") {
      cell8Content = "X";
      currentPlayer = "O";
    } else if (cell === 9 && cell9Content === "") {
      cell9Content = "X";
      currentPlayer = "O";
    }
  } else if (mouseIsPressed && currentPlayer === "O") {
    if (cell === 1 && cell1Content === "") {
      cell1Content = "O";
      currentPlayer = "X";
    } else if (cell === 2 && cell2Content === "") {
      cell2Content = "O";
      currentPlayer = "X";
    } else if (cell === 3 && cell3Content === "") {
      cell3Content = "O";
      currentPlayer = "X";
    } else if (cell === 4 && cell4Content === "") {
      cell4Content = "O";
      currentPlayer = "X";
    } else if (cell === 5 && cell5Content === "") {
      cell5Content = "O";
      currentPlayer = "X";
    } else if (cell === 6 && cell6Content === "") {
      cell6Content = "O";
      currentPlayer = "X";
    } else if (cell === 7 && cell7Content === "") {
      cell7Content = "O";
      currentPlayer = "X";
    } else if (cell === 8 && cell8Content === "") {
      cell8Content = "O";
      currentPlayer = "X";
    } else if (cell === 9 && cell9Content === "") {
      cell9Content = "O";
      currentPlayer = "X";
    }
  }
}

function gameEndStatus() {
  // Check for a win
  if (
    // Rows
    (cell1Content === cell2Content &&
      cell2Content === cell3Content &&
      cell1Content === "X") ||
    (cell4Content === cell5Content &&
      cell5Content === cell6Content &&
      cell4Content === "X") ||
    (cell7Content === cell8Content &&
      cell8Content === cell9Content &&
      cell7Content === "X") ||
    // Columns
    (cell1Content === cell4Content &&
      cell4Content === cell7Content &&
      cell1Content === "X") ||
    (cell2Content === cell5Content &&
      cell5Content === cell8Content &&
      cell2Content === "X") ||
    (cell3Content === cell6Content &&
      cell6Content === cell9Content &&
      cell3Content === "X") ||
    // Diagonals
    (cell1Content === cell5Content &&
      cell5Content === cell9Content &&
      cell1Content === "X") ||
    (cell3Content === cell5Content &&
      cell5Content === cell7Content &&
      cell3Content === "X")
  ) {
    winnerIsX = true;
    numXWins++;
    gameOver();
  } else if (
    // Rows
    (cell1Content === cell2Content &&
      cell2Content === cell3Content &&
      cell1Content === "O") ||
    (cell4Content === cell5Content &&
      cell5Content === cell6Content &&
      cell4Content === "O") ||
    (cell7Content === cell8Content &&
      cell8Content === cell9Content &&
      cell7Content === "O") ||
    // Columns
    (cell1Content === cell4Content &&
      cell4Content === cell7Content &&
      cell1Content === "O") ||
    (cell2Content === cell5Content &&
      cell5Content === cell8Content &&
      cell2Content === "O") ||
    (cell3Content === cell6Content &&
      cell6Content === cell9Content &&
      cell3Content === "O") ||
    // Diagonals
    (cell1Content === cell5Content &&
      cell5Content === cell9Content &&
      cell1Content === "O") ||
    (cell3Content === cell5Content &&
      cell5Content === cell7Content &&
      cell3Content === "O")
  ) {
    winnerIsO = true;
    numOWins++;
    gameOver();
  } else if (
    // Check for a draw
    cell1Content !== "" &&
    cell2Content !== "" &&
    cell3Content !== "" &&
    cell4Content !== "" &&
    cell5Content !== "" &&
    cell6Content !== "" &&
    cell7Content !== "" &&
    cell8Content !== "" &&
    cell9Content !== ""
  ) {
    gameIsTied = true;
    numTies++;
    gameOver();
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

  // Bar
  ctx.fillStyle = "#7852A9";
  ctx.fillRect(0, 300, cnv.width, 120);

  // Output Text Based On Win
  if (winnerIsX) {
    ctx.font = "80px Monospace";
    ctx.fillStyle = "#311432";
    ctx.fillText("PLAYER X WINS", 140, 380);
  } else if (winnerIsO) {
    ctx.font = "80px Monospace";
    ctx.fillStyle = "#311432";
    ctx.fillText("PLAYER O WINS", 140, 380);
  } else {
    ctx.font = "80px Monospace";
    ctx.fillStyle = "#311432";
    ctx.fillText("DRAW", 320, 380);
  }
}

// HELPER FUNCTIONS
function reset() {
  state = "start";
  currentPlayer = "X";
  cell1Content = "";
  cell2Content = "";
  cell3Content = "";
  cell4Content = "";
  cell5Content = "";
  cell6Content = "";
  cell7Content = "";
  cell8Content = "";
  cell9Content = "";
  winText = "";
  winnerIsX = false;
  winnerIsO = false;
  gameIsTied = false;
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
  ctx.fillStyle = "#7852A9";
  ctx.fillRect(0, 800, cnv.width, 900);

  // Purple Bar Text
  ctx.font = "30px Monospace";
  ctx.fillStyle = "#311432";
  ctx.fillText("TIC TAC TOE: Player " + currentPlayer + " is playing", 25, 840);
  ctx.fillText("X wins : " + numXWins, 25, cnv.height - 15);
  ctx.fillText("O Wins: " + numOWins, 600, cnv.height - 15);
  ctx.fillText("Ties: " + numTies, 340, cnv.height - 15);

  // Draw X's and O's
  if (cell1Content === "X") {
    ctx.drawImage(crossImg, 90, 50, 100, 100);
  } else if (cell1Content === "O") {
    ctx.drawImage(circleImg, 90, 50, 100, 100);
  }

  if (cell2Content === "X") {
    ctx.drawImage(crossImg, 375, 50, 100, 100);
  } else if (cell2Content === "O") {
    ctx.drawImage(circleImg, 375, 50, 100, 100);
  }

  if (cell3Content === "X") {
    ctx.drawImage(crossImg, 650, 50, 100, 100);
  } else if (cell3Content === "O") {
    ctx.drawImage(circleImg, 650, 50, 100, 100);
  }

  if (cell4Content === "X") {
    ctx.drawImage(crossImg, 90, 330, 100, 100);
  } else if (cell4Content === "O") {
    ctx.drawImage(circleImg, 90, 330, 100, 100);
  }

  if (cell5Content === "X") {
    ctx.drawImage(crossImg, 375, 330, 100, 100);
  } else if (cell5Content === "O") {
    ctx.drawImage(circleImg, 375, 330, 100, 100);
  }

  if (cell6Content === "X") {
    ctx.drawImage(crossImg, 640, 330, 100, 100);
  } else if (cell6Content === "O") {
    ctx.drawImage(circleImg, 640, 330, 100, 100);
  }

  if (cell7Content === "X") {
    ctx.drawImage(crossImg, 90, 630, 100, 100);
  } else if (cell7Content === "O") {
    ctx.drawImage(circleImg, 90, 630, 100, 100);
  }

  if (cell8Content === "X") {
    ctx.drawImage(crossImg, 375, 630, 100, 100);
  } else if (cell8Content === "O") {
    ctx.drawImage(circleImg, 375, 630, 100, 100);
  }

  if (cell9Content === "X") {
    ctx.drawImage(crossImg, 640, 630, 100, 100);
  } else if (cell9Content === "O") {
    ctx.drawImage(circleImg, 640, 630, 100, 100);
  }
}
