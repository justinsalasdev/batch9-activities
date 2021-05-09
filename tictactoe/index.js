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

const boardState = ["", "", "", "", "", "", "", ""];
const history = [];

const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const status = document.getElementById("status");
const reset = document.getElementById("reset");

let circleTurn = false;
let isStarted = false;

//main ----------------
initGame();
//-------------------------

function handleClick(e) {
  const target = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  //place mark
  target.classList.add(currentClass);

  //enable reset button at first turn only
  if (!isStarted) {
    reset.addEventListener("click", initGame);
    reset.removeAttribute("disabled");
    isStarted = true;
  }

  //checkWin
  if (isWin(currentClass)) {
    //update status
    status.innerText = `${currentClass} wins`;
    board.classList.add("won");

    //remove event listeners to all cells
    cells.forEach(cell => cell.removeEventListener("click", handleClick));

    //enable reset button
    reset.addEventListener("click", initGame);
    reset.removeAttribute("disabled");
    return;
  }

  //checkDraw
  if (isDraw(currentClass)) {
    status.innerText = `It's a draw`;
    board.classList.add("won");

    //remove event listeners to all cells
    cells.forEach(cell => cell.removeEventListener("click", handleClick));

    //enable reset button
    reset.addEventListener("click", initGame);
    reset.removeAttribute("disabled");
    return;
  }

  //swap turns
  board.classList.toggle(X_CLASS, circleTurn);
  board.classList.toggle(CIRCLE_CLASS, !circleTurn);
  circleTurn = !circleTurn;
  status.innerText = `${circleTurn ? "circle" : "x"} turn`;
}

function isWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    const isWin = combination.every(index => {
      return cells[index].classList.contains(currentClass);
    });
    //if winning combination, style winning cells first before returning 'true'
    if (isWin) {
      combination.forEach(index => {
        cells[index].classList.add("won");
      });
      return true;
    } else {
      return false;
    }
  });
}

function isDraw() {
  return [...cells].every(cell => {
    return cell.classList.length > 1; //marked cells have class other than .cell
  });
}

function enableReset() {
  let completed = false;

  return function () {
    if (completed) {
      return;
    } else {
      const isStarted = [...cells].some(cell => {
        return cell.classList.length > 1;
      });

      if (isStarted) {
        reset.addEventListener("click", initGame);
        completed = true;
      } else {
        return;
      }
    }
  };
}

function initGame() {
  isStarted = false;
  circleTurn = false;

  const dirtyClasses = ["x", "circle", "won", "draw"];
  board.classList.remove(...dirtyClasses); //remove board classes other than .board
  board.classList.add("x"); //init board turn

  //remove board classes other than .cell
  cells.forEach(cell => cell.classList.remove(...dirtyClasses));

  //disable reset
  reset.removeEventListener("click", initGame);
  reset.setAttribute("disabled", "true");

  //re-add click handlers
  cells.forEach(cell => {
    cell.addEventListener("click", handleClick, { once: true });
  });
}

function updateBoard() {
  boardState.forEach(state => {
    cell.classList.add("");
  });
}
