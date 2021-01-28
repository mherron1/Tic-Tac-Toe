//module containing containing gameBoard markers and gameBoard creator
let currentMarker = "X";
const gameBoard = (() => {
  const markers = Array(9).fill(null);

  const createGameBoard = (item, index) => {
    let gameBoardSquare = document.createElement("div");
    gameBoardSquare.classList.add("gameBoardSquare");
    gameBoardSquare.textContent = item;
    gameBoardContainer.appendChild(gameBoardSquare);
    gameBoardSquare.addEventListener("click", function () {
      if (gameBoard.markers[index] === null) {
        currentMarker === "O" ? (currentMarker = "X") : (currentMarker = "O");
        gameBoard.markers[index] = currentMarker;
      }
      gameBoard.displayGame();
    });
  };

  const displayGame = () => {
    //first clear existing gameboard
    if (gameBoardContainer) {
      while (gameBoardContainer.firstChild) {
        gameBoardContainer.removeChild(gameBoardContainer.firstChild);
      }
    }
    markers.forEach(createGameBoard);
    CheckGameOver(markers);
  };

  return {
    markers,
    displayGame,
  };
})();

gameBoard.displayGame();

const player1 = prompt("Player One (X)");

const player2 = prompt("Player Two (O)");

function CheckGameOver(markers) {
  let m = markers;
  if (m[0] != null && m[0] === m[1] && m[0] === m[2]) {
    m[0] === "X" ? announceWinner(player1) : announceWinner(player2);
  }
  if (m[3] != null && m[3] === m[4] && m[3] === m[5]) {
    m[3] === "X" ? announceWinner(player1) : announceWinner(player2);
  }
  if (m[6] != null && m[6] === m[7] && m[6] === m[8]) {
    m[6] === "X" ? announceWinner(player1) : announceWinner(player2);
  }
  if (m[0] != null && m[0] === m[3] && m[0] === m[6]) {
    m[0] === "X" ? announceWinner(player1) : announceWinner(player2);
  }
  if (m[1] != null && m[1] === m[4] && m[1] === m[7]) {
    m[1] === "X" ? announceWinner(player1) : announceWinner(player2);
  }
  if (m[2] != null && m[2] === m[5] && m[2] === m[8]) {
    m[2] === "X" ? announceWinner(player1) : announceWinner(player2);
  }
  if (m[0] != null && m[0] === m[4] && m[0] === m[8]) {
    m[0] === "X" ? announceWinner(player1) : announceWinner(player2);
  }
  if (m[2] != null && m[2] === m[4] && m[2] === m[6]) {
    m[2] === "X" ? announceWinner(player1) : announceWinner(player2);
  }

  if (!m.includes(null) && !document.querySelector("#result").textContent) {
    document.querySelector("#result").textContent = "Draw";
  }
}

function announceWinner(winner) {
  let gameWinner = document.querySelector("#result");
  gameWinner.textContent = winner + " wins!";
}

function reset() {
  for (i = 0; i < gameBoard.markers.length; i++) gameBoard.markers[i] = null;
  gameBoard.displayGame();
  let gameWinner = document.querySelector("#result");
  gameWinner.textContent = "";
}
