import genClass from "../../helpers/style/genClass";
import { motion } from "framer-motion";

const variants = {
  loop: {
    // scale: [1, , 1],
    "border-radius": ["0%", "50%", "0%"],
    rotate: [0, 180, 360],
    transition: { ease: "easeInOut", duration: 1.2, repeat: Infinity }
  }
};

export default function Loader({ mods, text }) {
  const $ = genClass({ block: "loader", mods });
  return (
    <div {...$()}>
      <motion.div variants={variants} animate="loop" {...$("box")}></motion.div>
      <span {...$("text")}>{text}</span>
    </div>
  );
}
