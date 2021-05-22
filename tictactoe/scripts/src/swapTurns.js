import { cirleClass, xClass } from "./constants.js";
import { boardNode, statusNode } from "./handles.js";
import state from "./state.js";

export default function swapTurns() {
  boardNode.classList.toggle(xClass, state.circleTurn);
  boardNode.classList.toggle(cirleClass, !state.circleTurn);
  state.circleTurn = !state.circleTurn;
  statusNode.innerText = `${state.circleTurn ? "circle" : "x"} turn`;
}
