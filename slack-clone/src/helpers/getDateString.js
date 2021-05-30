export default function getDateString(date, type) {
  if (type === "human") {
    return date.toLocaleDateString("en-US") + " " + date.toLocaleTimeString("en-US");
  } else {
    return date.toISOString();
  }
}
