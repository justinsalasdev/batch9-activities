export default function getDateString(date, type) {
  if (type === "human") {
    return date.toLocaleTimeString("en-US");
  } else {
    return date.toISOString();
  }
}

//date.toLocaleDateString("en-US") + " " +
