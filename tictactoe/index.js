const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");

let circleTurn = false;

cells.forEach(cell => {
  cell.addEventListener("click", handleClick, { once: true });
});

//main ----------------
//init turn
board.classList.add("x");

function handleClick(e) {
  const target = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  //place mark
  target.classList.add(currentClass);

  //checkWin
  isWin(currentClass);

  //swap turns
  board.classList.toggle(X_CLASS, circleTurn);
  board.classList.toggle(CIRCLE_CLASS, !circleTurn);
  circleTurn = !circleTurn;
}

function isWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass);
    });
  });
}
