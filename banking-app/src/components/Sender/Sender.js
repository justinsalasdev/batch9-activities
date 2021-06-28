import genClass from "../../helpers/style/genClass"; //ok
import useCurrency from "../../hooks/useCurrency"; //ok
import useAccount from "../../hooks/useAccount"; //ok
import useForm from "../../hooks/useForm"; //ok
import Icon from "../Icon/Icon"; //ok
import Line from "../Line/Line"; //ok
import { motion } from "framer-motion";
import { buttonVars, submitVars, variants } from "../Sender/variants";
import useTransfer from "./useTransfer";

export default function Sender({ ps, cancel, placeholder, account, balance }) {
  const [formData, formErrors] = useForm();
  const { isLoading, error, handleSubmit } = useTransfer(
    formData,
    formErrors,
    account,
    balance
  );
  const $ = genClass({
    block: "sender",
    ps
  });
  return (
    <motion.form {...$()} onSubmit={handleSubmit} variants={variants}>
      <Line
        id="account"
        type="text"
        placeholder={"Destination account"}
        formData={formData}
        validator={useAccount(formErrors)}
        ps={$("line").className}
        mods={{ div: ["transactor"] }}
      />
      <Line
        id="balance"
        type="text"
        placeholder={placeholder}
        formData={formData}
        validator={useCurrency(formErrors)}
        ps={$("line").className}
        mods={{ div: ["transactor"] }}
      />
      <motion.div {...$("actions")} variants={buttonVars}>
        <motion.button
          variants={submitVars}
          animate={isLoading ? "submit" : ""}
          type="submit"
          {...$("action")}
        >
          <Icon type="send" />
        </motion.button>
        <button type="button" {...$("action")} onClick={cancel}>
          <Icon type="cancel" />
        </button>
      </motion.div>
      {error && <p {...$("toolkit")}>{error}</p>}
    </motion.form>
  );
}

//manually revalidate page
