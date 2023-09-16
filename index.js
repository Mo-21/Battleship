const gameContent = document.getElementById("content");
const availableShips = document.getElementById("ships-board");
const squares1 = document.querySelector(".squares1");
const squares2 = document.querySelector(".squares2");
const width = 8;

generatingSquares();

function generatingSquares() {
  for (let i = 0; i < 64; i++) {
    const squaresForBlock1 = document.createElement("div");
    squaresForBlock1.classList.add("square1");
    squares1.appendChild(squaresForBlock1);
  }

  for (let i = 0; i < 64; i++) {
    const squaresForBlock2 = document.createElement("div");
    squaresForBlock2.classList.add("square2");
    squares2.appendChild(squaresForBlock2);
  }
}

availableShips.addEventListener("dragstart", creatingShip);
availableShips.addEventListener("dragleave", gameBoard.placeShip);

function creatingShip(e) {
  let newShip;
  switch (e.target.classList.value) {
    case "ship4":
      newShip = new Ship(4, 0);
      break;
    case "ship3":
      newShip = new Ship(3, 0);
      break;
    case "ship2":
      newShip = new Ship(2, 0);
      break;
    case "ship1":
      newShip = new Ship(1, 0);
      break;
    default:
      break;
  }
}

class Ship {
  constructor(length, hits) {
    this.length = length;
    this.hits = hits;
    this.isSunk = false;
  }

  set hitIncrease(damage) {
    const newHits = this.hits + damage;
    this.hits = newHits;
  }

  get numberOfHits() {
    return this.hits;
  }

  get shipLength() {
    return this.length;
  }

  set sinkStatus(value) {
    this.isSunk = value;
  }

  sinkUpdate() {
    return this.hits === this.length
      ? (this.sinkStatus = true)
      : (this.sinkStatus = false);
  }
}

function gameBoard() {
  return {
    placeShip(e) {
      console.log(e.target);
    },
    receiveAttack() {},
  };
}

module.exports = Ship;
