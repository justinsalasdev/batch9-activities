import { motion } from "framer-motion";
import genClass from "../../helpers/genClass";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const variants = {
  open: {
    opacity: 1,
    display: "block"
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  }
};

export default function Backdrop({ isExpanded, onClick }) {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const $ = genClass({ block: "backdrop" });
  return (
    <motion.div
      {...$()}
      animate={isMobile ? (isExpanded ? "open" : "closed") : "closed"}
      variants={variants}
      onClick={onClick}
    ></motion.div>
  );
}
