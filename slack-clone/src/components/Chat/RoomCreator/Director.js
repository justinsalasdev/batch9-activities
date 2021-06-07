import { motion } from "framer-motion";
import genClass from "../../../helpers/genClass";
import { SingleSelector } from "../../Selector/SingleSelector/SingleSelector";

export default function Director() {
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <motion.div animate={{ y: 0 }} initial={{ y: -10 }} {...$("info")}>
        <SingleSelector mods={{ scroller: ["single"] }} />
      </motion.div>
    </div>
  );
}
