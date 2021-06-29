export default function formatDate(date) {
  const [year, month, day] = date.toISOString().split("T")[0].split("-");
  return `${month}/${day}/${year}`;
}
