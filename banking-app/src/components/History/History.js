import genClass from "../../helpers/style/genClass";
import Entry from "../Entry/Entry";
import { motion } from "framer-motion";
import { variants } from "./variants";
import { useUserState } from "../../managers/userManager";

export default function History() {
  const userState = useUserState();
  const transactions = userState.history;
  const $ = genClass({ block: "history", mods: { history: ["main"] } });
  return (
    <motion.div {...$()} variants={variants} animate="shown" initial="hidden">
      <div {...$("bar")}>HISTORY</div>
      <ul {...$("entries")}>
        {transactions.map(({ id, ...details }) => {
          return <Entry key={id} ps={$("entry").className} details={details} />;
        })}
      </ul>
    </motion.div>
  );
}
