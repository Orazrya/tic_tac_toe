var board = [];
function play(clickedId) {
  var playerSpan = document.getElementById("player");
  var clickedElement = document.getElementById(clickedId);
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  console.log(board);
  var topLeft = board[0];
  var topCenter = board[1];
  var topRight = board[2];
  var middleLeft = board[3];
  var middleCenter = board[4];
  var middleRight = board[5];
  var bottomLeft = board[6];
  var bottomCenter = board[7];
  var bottomRight = board[8];

  if (
    (topRight !== undefined &&
      topRight === topCenter &&
      topRight === topLeft) ||
    (topRight !== undefined &&
      topRight === middleCenter &&
      topRight === bottomLeft) ||
    (topRight !== undefined &&
      topRight === middleRight &&
      topRight === bottomRight) ||
    (topLeft !== undefined &&
      topLeft === middleCenter &&
      topLeft === bottomRight) ||
    (topLeft !== undefined &&
      topLeft === middleLeft &&
      topLeft === bottomLeft) ||
    (middleLeft !== undefined &&
      middleRight === middleCenter &&
      middleLeft === middleRight) ||
    (bottomLeft !== undefined &&
      bottomLeft === bottomCenter &&
      bottomCenter === bottomRight)
  ) {
    alert("winner " + board[clickedId]);
  }

  for (var i = 0; i < 1; i++) {
    var boardFull = true;
    if (
      topRight == undefined ||
      topCenter == undefined ||
      topLeft == undefined ||
      middleLeft == undefined ||
      middleCenter == undefined ||
      middleRight == undefined ||
      bottomLeft == undefined ||
      bottomCenter == undefined ||
      bottomRight == undefined
    ) {
      boardFull = false;
    } else {
      alert("cats game");

      boardFull = true;
    }
  }
  console.log(boardFull);
}
