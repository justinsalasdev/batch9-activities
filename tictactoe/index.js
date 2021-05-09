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

let boardState = ["", "", "", "", "", "", "", ""];
let moveLog = [[...boardState]];
let moves;

const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const status = document.getElementById("status");
const reset = document.getElementById("reset");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let circleTurn = false;
let isStarted = false;

//main ----------------
initGame();
//-------------------------

function handleClick(e) {
  const target = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

  //update board state
  boardState[target.dataset.cell] = currentClass;

  //reflect board state
  updateBoard(boardState);

  //save board state to history
  saveMove();

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

    //save number of moves
    moves = moveLog.length;

    //show history buttons
    enableHistory();

    return;
  }

  //checkDraw
  if (isDraw()) {
    status.innerText = `It's a draw`;
    board.classList.add("won");

    //remove event listeners to all cells
    cells.forEach(cell => cell.removeEventListener("click", handleClick));

    //save number of moves
    moves = moveLog.length;

    //show history buttons
    enableHistory();
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

function initGame() {
  isStarted = false;
  circleTurn = false;

  //disableHistory
  disableHistory();

  //reset state
  boardState = boardState.map(_ => "");

  //reset history
  moveLog = [[...boardState]];

  const dirtyClasses = ["x", "circle", "won", "draw"];
  board.classList.remove(...dirtyClasses); //remove board classes other than .board
  board.classList.add("x"); //init board turn

  //remove board classes other than .cell
  cells.forEach(cell => cell.classList.remove(...dirtyClasses));

  //disable reset
  reset.removeEventListener("click", initGame);
  reset.setAttribute("disabled", "true");

  //hide previous & next button
  previous.classList.add("hidden");
  next.classList.add("hidden");

  //re-add click handlers
  cells.forEach(cell => {
    cell.addEventListener("click", handleClick, { once: true });
  });
}

function updateBoard(boardState) {
  for (let i = 0; i <= boardState.length - 1; i++) {
    if (boardState[i] === "") {
      continue;
    } else {
      board.children[i].classList.toggle(boardState[i], true);
    }
  }
}

function showLog(snapshot) {
  //clear cells
  const dirtClasses = ["x", "circle"];
  cells.forEach(cell => {
    cell.classList.remove(...dirtClasses);
  });

  for (let i = 0; i <= snapshot.length - 1; i++) {
    if (snapshot[i] === "") {
      continue;
    } else {
      board.children[i].classList.add(snapshot[i]);
    }
  }
  if (moves < moveLog.length) {
    next.removeAttribute("disabled");
  }
  if (moves > 1) {
    previous.removeAttribute("disabled");
  }
}

function saveMove() {
  moveLog.push([...boardState]);
}

function displayPrevious() {
  showLog(moveLog[--moves - 1]);
  if (moves <= 1) {
    previous.setAttribute("disabled", true);
  }
}
function displayNext() {
  showLog(moveLog[moves++]);
  if (moves >= moveLog.length) {
    next.setAttribute("disabled", true);
  }
}

function enableHistory() {
  previous.classList.remove("hidden");
  next.classList.remove("hidden");
  previous.addEventListener("click", displayPrevious);
  next.addEventListener("click", displayNext);
  next.setAttribute("disabled", "true");
  previous.removeAttribute("disabled");
}

function disableHistory() {
  previous.classList.add("hidden");
  next.classList.add("hidden");
  previous.removeEventListener("click", displayPrevious);
  next.removeEventListener("click", displayNext);
}
