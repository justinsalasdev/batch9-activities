import genClass from "../../helpers/style/genClass";
import toCurrency from "../../helpers/account/toCurrency";
import Sender from "../Sender/Sender";
import { motion } from "framer-motion";
import { variants } from "./variants";
import useAccount from "./useAccount";

export default function Account({ ps }) {
  const { isStarted, name, account, balance, handleStart, handleCancel } =
    useAccount();

  const $ = genClass({
    block: "account",
    ps,
    mods: { account: ["home"] }
  });
  return (
    <motion.div {...$()} variants={variants} animate="shown" initial="hidden">
      <div {...$("bar")}>
        <p {...$("name")}>{name}</p>
        <p {...$("account")}>{account}</p>
      </div>
      <div {...$("info")}>
        <p {...$("balance")}>₿{toCurrency(balance)}</p>
      </div>

      <button {...$("action")} onClick={handleStart}>
        Transfer
      </button>

      {isStarted && (
        <Sender
          placeholder="Amount to transfer"
          ps={$("form").className}
          cancel={handleCancel}
          account={account}
          balance={balance}
        />
      )}
    </motion.div>
  );
}
