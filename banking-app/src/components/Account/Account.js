import React, { useState } from "react"; //ok
import genClass from "../../helpers/style/genClass"; //ok
import toCurrency from "../../helpers/account/toCurrency"; //ok
import Sender from "../Sender/Sender"; //ok
import { motion } from "framer-motion";
import { variants } from "./variants";
import { useUserState } from "../../managers/userManager";

export default function Account({ ps }) {
  const userState = useUserState();
  const { name, account, balance } = userState.account;
  const [isStarted, setStarted] = useState(false);

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

      <button {...$("action")} onClick={() => setStarted(true)}>
        Transfer
      </button>

      {isStarted && (
        <Sender
          placeholder="Amount to transfer"
          ps={$("form").className}
          cancel={() => setStarted(false)}
          account={account}
          balance={balance}
        />
      )}
    </motion.div>
  );
}
