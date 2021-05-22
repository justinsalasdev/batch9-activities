import { winningCombinations } from "./constants.js";
import { cellNodes } from "./handles.js";

export default function checkWin(currentClass) {
  return winningCombinations.some(combination => {
    const isWin = combination.every(index => {
      return cellNodes[index].classList.contains(currentClass);
    });
    //if winning combination, style winning cells first before returning 'true'
    if (isWin) {
      combination.forEach(index => {
        cellNodes[index].classList.add("won");
      });
      return true;
    } else {
      return false;
    }
  });
}
