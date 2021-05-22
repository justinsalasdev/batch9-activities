import checkDraw from "./checkDraw.js";
import checkWin from "./checkWin.js";
import { cirleClass, xClass } from "./constants.js";
import enableHistory from "./enableHistory.js";
import { boardNode, cellNodes, resetNode, statusNode } from "./handles.js";
import initGame from "./initGame.js";
import saveMove from "./saveMove.js";
import state from "./state.js";
import swapTurns from "./swapTurns.js";
import { updateBoard } from "./updateBoard.js";

export default function handleClick(e) {
  const target = e.target;
  const currentClass = state.circleTurn ? cirleClass : xClass;

  //update board state
  state.boardState[target.dataset.cell] = currentClass;

  //reflect board state
  updateBoard(state.boardState);

  //save board state to history
  saveMove(state.boardState);

  //enable reset button at first turn only
  if (!state.isStarted) {
    resetNode.addEventListener("click", initGame);
    resetNode.removeAttribute("disabled");
    state.isStarted = true;
  }

  //checkWin
  if (checkWin(currentClass)) {
    //update status
    statusNode.innerText = `${currentClass} wins`;
    boardNode.classList.add("won");

    //remove event listeners to all cells
    cellNodes.forEach(cellNode => cellNode.removeEventListener("click", handleClick));

    //save number of moves
    state.moves = state.moveLog.length;

    //show history buttons
    enableHistory();

    return;
  }

  //checkDraw
  if (checkDraw()) {
    statusNode.innerText = `It's a draw`;
    boardNode.classList.add("won");

    //remove event listeners to all cells
    cellNodes.forEach(cellNode => cellNode.removeEventListener("click", handleClick));

    //save number of moves
    state.moves = state.moveLog.length;

    //show history buttons
    enableHistory();
    return;
  }

  //swap turns
  swapTurns();
}
