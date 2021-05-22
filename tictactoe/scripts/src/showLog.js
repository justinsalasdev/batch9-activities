import { boardNode, cellNodes, nextNode, previousNode } from "./handles.js";
import state from "./state.js";

export default function showLog(snapshot) {
  //clear cells
  const dirtClasses = ["x", "circle"];
  cellNodes.forEach(cellNode => {
    cellNode.classList.remove(...dirtClasses);
  });

  for (let i = 0; i <= snapshot.length - 1; i++) {
    if (snapshot[i] === "") {
      continue;
    } else {
      boardNode.children[i].classList.add(snapshot[i]);
    }
  }
  if (state.moves < state.moveLog.length) {
    nextNode.removeAttribute("disabled");
  }
  if (state.moves > 1) {
    previousNode.removeAttribute("disabled");
  }
}
