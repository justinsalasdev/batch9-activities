import { useState } from "react";
import genClass from "../../helpers/style/genClass";
import Icon from "../Icon/Icon";
import Spender from "../Spender/Spender";
import { motion } from "framer-motion";
import { addVars } from "./variants";

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
        <motion.button
          {...$("add")}
          onClick={handleClick}
          variants={addVars}
          initial="inactive"
          animate={isStarted ? "active" : "inactive"}
        >
          <Icon type="plus" ps={$("icon").className} />
        </motion.button>
        <span {...$("title")}>DUES</span>
        <div {...$("spender")}>
          {isStarted && <Spender mods={{ form: ["dues"] }} />}
        </div>
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
