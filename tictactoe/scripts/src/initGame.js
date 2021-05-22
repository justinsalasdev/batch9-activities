import disableHistory from "./disableHistory.js";
import state from "./state.js";
import { boardNode, statusNode, cellNodes, resetNode, previousNode, nextNode } from "./handles.js";
import handleClick from "./handleClick.js";

export default function initGame() {
  state.isStarted = false;
  state.circleTurn = false;

  //disableHistory
  disableHistory();

  //reset state
  state.boardState = state.boardState.map(_ => "");

  //reset history
  state.moveLog = [[...state.boardState]];

  const dirtyClasses = ["x", "circle", "won", "draw"];
  boardNode.classList.remove(...dirtyClasses); //remove board classes other than .board
  boardNode.classList.add("x"); //init board turn
  statusNode.innerText = `${state.circleTurn ? "circle turn" : "x turn"}`;

  //remove board classes other than .cell
  cellNodes.forEach(cellNode => cellNode.classList.remove(...dirtyClasses));

  //disable reset
  resetNode.removeEventListener("click", initGame);
  resetNode.setAttribute("disabled", "true");

  //hide previous & next button
  previousNode.classList.add("hidden");
  nextNode.classList.add("hidden");

  //re-add click handlers
  cellNodes.forEach(cellNode => {
    cellNode.addEventListener("click", handleClick, { once: true });
  });
}
