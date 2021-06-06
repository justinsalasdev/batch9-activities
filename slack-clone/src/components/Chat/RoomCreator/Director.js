import { motion } from "framer-motion";
import genClass from "../../../helpers/genClass";
import { SingleSelector } from "../../Selector/SingleSelector/SingleSelector";

export default function Director() {
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} {...$("info")}>
        <SingleSelector mods={{ scroller: ["single"] }} />
      </motion.div>
    </div>
  );
}
