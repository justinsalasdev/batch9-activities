import { dateEl, timeEl } from "./helpers/handles.js";
import { monthNames, dayNames } from "./helpers/constants.js";

function withZero(num) {
  return num.toString().length <= 1 ? "0" + num : num;
}
function reflectTimeAndDate() {
  const date = new Date();
  const month = monthNames[date.getMonth()];
  const dayNum = date.getDate();
  const day = dayNames[date.getDay()];
  const year = date.getFullYear();
  const seconds = date.getSeconds();

  const minutes = date.getMinutes();
  const hours = date.getHours();

  timeEl.textContent = `${withZero(hours)} : ${withZero(minutes)} : ${withZero(seconds)}`;
  dateEl.textContent = `${day}, ${month} ${dayNum}, ${year}`;

  requestAnimationFrame(reflectTimeAndDate);
}

requestAnimationFrame(reflectTimeAndDate);
