import { boardNode } from "./handles.js";

export function updateBoard(boardState) {
  for (let i = 0; i <= boardState.length - 1; i++) {
    if (boardState[i] === "") {
      continue;
    } else {
      boardNode.children[i].classList.toggle(boardState[i], true);
    }
  }
}
