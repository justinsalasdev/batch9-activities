import { motion } from "framer-motion";
import genClass, { toggler as $t } from "../../helpers/style/genClass";
import Loader from "../Loader/Loader";
import useSummary from "./useSummary";
import { summaryVars } from "./variants";
import toCurrency from "../../helpers/account/toCurrency";

export default function Summary() {
  const { isLoading, error, cutOff, summary } = useSummary();

  const $ = genClass({
    block: "summary",
    mods: { balance: [$t(summary <= 0, "short")] }
  });
  return (
    <motion.div
      {...$()}
      variants={summaryVars}
      initial="hidden"
      animate="shown"
    >
      {(!isLoading && (
        <>
          {error && <span>{error}</span>}
          <p {...$("title")}>WALLET OUTLOOK</p>
          <p {...$("date")}>{cutOff}</p>

          <p {...$("balance")}>₿ {toCurrency(summary)}</p>
          <p {...$("comment")}>
            {summary <= 0
              ? "You might be overspending :(("
              : "Your wallet has long way to go!"}
          </p>
        </>
      )) || <Loader />}
    </motion.div>
  );
}

// const fifteenth = `${monthNum}/${15}/${yearNum}`;
// const endOfMonth = `${monthNum}/${maxDays}/${yearNum}`;

// console.log(startOfMonth, fifteenth, endOfMonth);
