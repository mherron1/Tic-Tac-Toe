//module containing gameBoard array, gameboard creation function, gamboard display function and game reset function.
const gameBoard = (() => {
  let currentMarker = "X";
  const markers = Array(9).fill(null);

  const createGameBoard = (item, index) => {
    let gameBoardSquare = document.createElement("div");
    gameBoardSquare.classList.add("gameBoardSquare");
    gameBoardSquare.textContent = item;
    gameBoardContainer.appendChild(gameBoardSquare);
    gameBoardSquare.addEventListener("click", function () {
      //check if square is already occupied, or the game is over, before
      if (markers[index] === null && gameWinner.textContent === "") {
        currentMarker === "O" ? (currentMarker = "X") : (currentMarker = "O");
        markers[index] = currentMarker;
      }
      displayGame();
    });
  };

  const displayGame = () => {
    //first clear existing gameboard
    if (gameBoardContainer) {
      while (gameBoardContainer.firstChild) {
        gameBoardContainer.removeChild(gameBoardContainer.firstChild);
      }
    }
    //display updated gameboard
    markers.forEach(createGameBoard);
    //check for a winner/draw
    CheckGameOver();
  };

  return {
    markers,
    displayGame,
  };
})();

//factory function to create players
const playerFactory = (name) => {
  return { name };
};

function CheckGameOver() {
  //check for each of the 8 ways to win, then check if "X" or "O"
  let m = gameBoard.markers;

  if (m[0] != null && m[0] === m[1] && m[0] === m[2]) {
    m[0] === "X" ? announceWinner(player1.name) : announceWinner(player2.name);
  }
  if (m[3] != null && m[3] === m[4] && m[3] === m[5]) {
    m[3] === "X" ? announceWinner(player1.name) : announceWinner(player2.name);
  }
  if (m[6] != null && m[6] === m[7] && m[6] === m[8]) {
    m[6] === "X" ? announceWinner(player1.name) : announceWinner(player2.name);
  }
  if (m[0] != null && m[0] === m[3] && m[0] === m[6]) {
    m[0] === "X" ? announceWinner(player1.name) : announceWinner(player2.name);
  }
  if (m[1] != null && m[1] === m[4] && m[1] === m[7]) {
    m[1] === "X" ? announceWinner(player1.name) : announceWinner(player2.name);
  }
  if (m[2] != null && m[2] === m[5] && m[2] === m[8]) {
    m[2] === "X" ? announceWinner(player1.name) : announceWinner(player2.name);
  }
  if (m[0] != null && m[0] === m[4] && m[0] === m[8]) {
    m[0] === "X" ? announceWinner(player1.name) : announceWinner(player2.name);
  }
  if (m[2] != null && m[2] === m[4] && m[2] === m[6]) {
    m[2] === "X" ? announceWinner(player1.name) : announceWinner(player2.name);
  }
  // if no null elements remain, and there has been no winner, announce draw.
  if (!m.includes(null) && !document.querySelector("#result").textContent) {
    document.querySelector("#result").textContent = "Draw";
  }
}

function announceWinner(winner) {
  gameWinner.textContent = winner + " wins!";
}

function reset() {
  for (i = 0; i < gameBoard.markers.length; i++) gameBoard.markers[i] = null;
  createPlayers();
  gameBoard.displayGame();
  gameWinner.textContent = "";
  currentMarker = "O";
}

function createPlayers() {
  player1 = playerFactory(document.getElementById("name1").value);
  player2 = playerFactory(document.getElementById("name2").value);
}

let gameWinner = document.querySelector("#result");
let player1 = playerFactory(document.getElementById("name1").value);
let player2 = playerFactory(document.getElementById("name2").value);
