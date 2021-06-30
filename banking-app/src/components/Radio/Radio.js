import { useEffect, useState } from "react";
import genClass from "../../helpers/style/genClass";
import { motion } from "framer-motion";
import { radioVars } from "./variants";

export default function Radio({ ps, formData, formErrors }) {
  const options = ["daily", "weekly", "monthly"]; //hard coded initially
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    formData["frequency"] = options[selected];
    formErrors["frequency"] = "";
  });

  const handleClick = i => () => setSelected(i);

  const $ = genClass({ block: "radio", ps });
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
