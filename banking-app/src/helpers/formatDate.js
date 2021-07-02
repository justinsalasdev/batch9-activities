export default function formatDate(date) {
  const [year, month, day] = date.toISOString().split("T")[0].split("-");
  const numDay = Number(day) + 1;
  return `${month}/${numDay < 10 ? `0${numDay}` : numDay}/${year}`;
}
