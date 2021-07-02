export default function reduceBudget(dateBoundary, budget) {
  const dayLimit = dateBoundary[1].getDate();
  return budget.reduce((total, { amount, frequency, next }) => {
    if (next <= dateBoundary[1] && next >= dateBoundary[0]) {
      switch (frequency) {
        case "daily": {
          const currentDate = next.getDate();
          return total + Number(amount) * (dayLimit - currentDate + 1);
        }
        case "weekly": {
          console.log("weekly", amount);
          const currentDate = next.getDate();
          return (
            total + Number(amount) * Math.ceil((dayLimit - currentDate) / 7.0)
          );
        }
        case "monthly": {
          return total + Number(amount);
        }
        default:
          return total;
      }
    } else {
      return total;
    }
  }, 0);
}
