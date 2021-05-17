const downButton = document.querySelector("#down");
const upButton = document.querySelector("#up");
const buyListDisplay = document.querySelector("#first-list");
const fridgeListDisplay = document.querySelector("#second-list");

const buyList = ["buko pie", "mango", "bacon"];
const fridge = ["cheese", "cake", "oranges", "chocolate", "crab", "chicharon"];

//Challenge: Please fill the fridge array with 5 items of your choice.

//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.

//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp() {
  //your code
  const fromFridge = fridge.pop();
  if (fromFridge) {
    buyList.push(fromFridge);
    updateDisplay();
  } else {
    return;
  }
}

upButton.addEventListener("click", moveUp);

//Challenge 4: Write a function that will remove the last item in the buyList,
//and put it in the fridge.

function moveDown() {
  //your code
  const fromBuyList = buyList.pop();
  if (fromBuyList) {
    fridge.push(fromBuyList);
    updateDisplay();
  } else {
    return;
  }
}

downButton.addEventListener("click", moveDown);

function updateDisplay() {
  buyListDisplay.innerHTML = buyList;
  fridgeListDisplay.innerHTML = fridge;
}

updateDisplay();
