import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import genClass from "../../helpers/genClass";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu({ propStyles, menuName, renderItems, getItems }) {
  console.log("Menu");

  const variants = {
    close: { rotate: -90 },
    open: { rotate: 0 }
  };
  const [isListExpanded, expandList] = useState(false);
  const items = getItems();

  const $ = genClass({ block: "menu", propStyles });

  return (
    <div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} {...$()}>
      <button
        {...$("expander")}
        onClick={() => {
          expandList(state => !state);
        }}
      >
        <motion.span variants={variants} animate={isListExpanded ? "open" : "close"} {...$("icon")}>
          <IoIosArrowDropdown />
        </motion.span>
        <span {...$("text")}>{menuName}</span>
      </button>

      <AnimatePresence>{isListExpanded && renderItems(items)}</AnimatePresence>
    </div>
  );
}
