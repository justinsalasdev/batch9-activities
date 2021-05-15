import { dateEl, timeEl, greetEl } from "./helpers/handles.js";
import { monthNames, dayNames } from "./helpers/constants.js";

function withZero(num) {
  return num.toString().length <= 1 ? "0" + num : num;
}

function getGreeting(num) {
  if (num === 0) return "Silent midnight";
  if (num > 0 && num < 6) return "Early morning";
  if (num > 6 && num < 11) return "Good morning";
  if (num === 12) return "Scorchy afternoon";
  if (num > 12 && num < 17) return "Good afternoon";
  if (num >= 17) return "Good evening";
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
  greetEl.textContent = getGreeting(hours);

  requestAnimationFrame(reflectTimeAndDate);
}

requestAnimationFrame(reflectTimeAndDate);
