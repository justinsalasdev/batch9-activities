import { motion } from "framer-motion";
import genClass from "../../helpers/genClass";

const pathVars = {
  closed: { fill: "purple", rotate: 0, scale: 1.2 },
  expanded: { fill: "violet", rotate: 90, scale: 1 }
};

export default function Burger({ constraintsRef, isExpanded, expand, mods, propStyles }) {
  const $ = genClass({ block: "burger", mods, propStyles });
  return (
    <motion.button
      initial="hidden"
      animate="shown"
      drag
      dragConstraints={constraintsRef}
      dragElastic={0}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
      {...$()}
      onClick={() => expand(state => !state)}
    >
      <motion.svg viewBox="0 0 20 20" {...$("icon")}>
        <motion.path
          variants={pathVars}
          animate={isExpanded ? "expanded" : "closed"}
          fill="none"
          d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
                            c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
                            s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
                            c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
        ></motion.path>
      </motion.svg>
    </motion.button>
  );
}
