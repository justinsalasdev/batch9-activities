const squares = Array.from(document.querySelectorAll(".grid div"));
//Nodelist of all the div squares on our board. Think of it as an array.

//Your goal is to add a chessboard color pattern to this blank board using loops and Arrays.
//write code here

//usign forEach
// squares.forEach((square, index) => {
//   if (index % 2 === 0) {
//     square.style.background = "green";
//   } else {
//     square.style.background = "yellow";
//   }
// });

//using for loop
for (i = 0; i < squares.length; i++) {
  if (i % 2 === 0) {
    squares[i].style.background = "green";
  } else {
    squares[i].style.background = "yellow";
  }
}
