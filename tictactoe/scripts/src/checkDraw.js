import { cellNodes } from "./handles.js";

export default function checkDraw() {
  return [...cellNodes].every(cellNode => {
    return cellNode.classList.length > 1; //marked cells have class other than .cell
  });
}
