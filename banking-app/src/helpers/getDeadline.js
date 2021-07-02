import formatDate from "./formatDate";

export default function getDeadline(dateString, rep) {
  const [m, d, y] = dateString.split("/");
  const date = new Date(`${m}/${Number(d) + 1}/${y}`);

  switch (rep) {
    case "daily": {
      date.setDate(date.getDate() + 1);
      return formatDate(date);
    }
    case "weekly": {
      date.setDate(date.getDate() + 7);
      return formatDate(date);
    }
    case "monthly": {
      // const [m, d, y] = dateString.split("/");
      // const date = new Date(`${m}/${Number(d) + 1}/${y}`);
      date.setMonth(date.getMonth() + 1);
      return formatDate(date);
    }

    default:
      return dateString;
  }
}
