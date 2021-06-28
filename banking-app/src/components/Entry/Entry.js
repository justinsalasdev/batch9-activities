import toCurrency from "../../helpers/account/toCurrency";
import genClass from "../../helpers/style/genClass";

export default function Entry({ ps, details }) {
  const { type, runningBalance, amount, timeStamp } = details;
  const accountText = {
    deposit: "TO ACCOUNT",
    withdrawal: "FROM ACCOUNT",
    transfer: `TO : ${details.to}`,
    received: `FROM : ${details.from}`
  };
  const newDate = new Date(timeStamp);
  const date = newDate.toLocaleDateString();
  const time = newDate.toLocaleTimeString();

  const $ = genClass({ block: "entry", ps, mods: { entry: [type] } });
  return (
    <li {...$()}>
      <span {...$("type")}>{type}</span>
      <div {...$("details")}>
        <span {...$("account")}>{accountText[type]}</span>
        <div {...$("amount")}>
          <span>₿ {toCurrency(amount)}</span>
          <span>₿ {toCurrency(runningBalance)}</span>
        </div>
        <time {...$("date")}>{date + " " + time}</time>
      </div>
    </li>
  );
}
