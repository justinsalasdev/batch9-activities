import { useState } from "react";
import genClass from "../../helpers/style/genClass";
import Icon from "../Icon/Icon";
import Spender from "../Spender/Spender";

const dues = [
  {
    name: "Bills",
    amount: 1000,
    due: "June 28 ,2021"
  },
  {
    name: "Insurance",
    amount: 1000,
    due: "June 28 ,2021"
  },
  {
    name: "Spotify",
    amount: 1000,
    due: "June 28 ,2021"
  }
];

export default function Dues() {
  const [isStarted, setStarted] = useState(false);
  const handleClick = () => setStarted(state => !state);
  const $ = genClass({ block: "dues" });
  return (
    <div {...$()}>
      <div {...$("bar")}>
        <button {...$("add")} onClick={handleClick}>
          <Icon type="plus" ps={$("icon").className} />
        </button>
        <span {...$("title")}>DUES</span>
        {isStarted && (
          <Spender ps={$("spender").className} mods={{ form: ["dues"] }} />
        )}
      </div>
      <div {...$("view")}>
        <table {...$("table")}>
          <thead>
            <tr {...$("row")}>
              <th {...$("name")}>Name</th>
              <th {...$("name")}>Cost</th>
              <th {...$("name")}>Due</th>
            </tr>
          </thead>
          <tbody>
            {dues.map((due, i) => {
              return (
                <tr {...$("row")} key={i}>
                  <td {...$("data")}>{due.name}</td>
                  <td {...$("data")}>{due.amount}</td>
                  <td {...$("data")}>{due.due}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
