const robot = document.querySelector(".robot");

//Challenge: Make Eve move when you click its body.
let position = 0;

function moveRobot() {
  robot.style.transform = `translate3d(${++position}rem,0,0)`;
  //add code here
}
robot.addEventListener("click", moveRobot);
