import genClass from "../../helpers/genClass";
import Profile from "../Profile/Profile";
import { motion } from "framer-motion";
import Nav from "../Nav/Nav";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const variants = {
  open: {
    x: 0,
    display: "block"
  },
  closed: {
    x: -100,
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  }
};

export default function Sidebar({ propStyles, isExpanded }) {
  console.log("Sidebar");
  const isMobile = useMediaQuery("(max-width:700px");
  const $ = genClass({ block: "sidebar", propStyles });

  return (
    <motion.div
      {...$()}
      animate={isMobile ? (isExpanded ? "open" : "closed") : "open"}
      variants={variants}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <Profile propStyles={$("profile").className} />
      <Nav propStyles={$("nav").className} />
    </motion.div>
  );
}
