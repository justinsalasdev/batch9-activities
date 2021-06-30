import { useState } from "react";
import genClass from "../../helpers/style/genClass";
import { motion } from "framer-motion";
import { radioVars } from "./variants";
const formData = {};

export default function Test() {
  const options = ["daily", "weekly", "monthly"];
  const [selected, setSelected] = useState("initial");

  formData["frequency"] = options[selected];

  const handleClick = i => () => setSelected(i);

  const $ = genClass({ block: "radio" });
  return (
    <div {...$()}>
      {options.map((option, i) => {
        return (
          <div key={i} {...$("option")}>
            <div {...$("toggler")} onClick={handleClick(i)}>
              <motion.div
                variants={radioVars}
                animate={i === selected ? "shown" : "hidden"}
              ></motion.div>
            </div>
            <span {...$("desc")} onClick={handleClick(i)}>
              {option}
            </span>
          </div>
        );
      })}
    </div>
  );
}
