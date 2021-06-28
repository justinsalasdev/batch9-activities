import genClass from "../../helpers/style/genClass";
import useForm from "../../hooks/useForm";
import Icon from "../Icon/Icon";
import Line from "../Line/Line";
import { motion } from "framer-motion";
import { buttonVars, submitVars, variants } from "../Sender/variants";
import useTransfer from "./useTransfer";
import checkAccount from "../../helpers/validation/checkAccount";
import checkCurrency from "../../helpers/validation/checkCurrency";

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
        validator={checkAccount(formErrors)}
        ps={$("line").className}
        mods={{ div: ["transactor"] }}
      />
      <Line
        id="balance"
        type="text"
        placeholder={placeholder}
        formData={formData}
        validator={checkCurrency(formErrors)}
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
