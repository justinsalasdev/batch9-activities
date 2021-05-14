var justiceLeague = [
  { name: "Superman", superpower: "Super strength" },
  { name: "Batman", superpower: "Super rich" },
  { name: "Wonder Woman", superpower: "Super lasso" },
  { name: "The Flash", superpower: "Super speed" },
  { name: "Green Lantern", superpower: "Super ring" }
];

const list = document.getElementById("league");

justiceLeague.forEach(({ name, superpower }) => {
  const item = document.createElement("li");
  item.textContent = `${name} - ${superpower}`;
  list.appendChild(item);
});

//add event listeners
list.addEventListener("click", () => console.log("click"));
window.addEventListener("scroll", () => console.log("scrolled"));
