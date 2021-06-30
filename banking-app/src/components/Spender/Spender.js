import genClass from "../../helpers/style/genClass";
import genMod from "../../helpers/style/genMod";
import Line from "../Line/Line";
import checkCurrency from "../../helpers/validation/checkCurrency";
import checkDesc from "../../helpers/validation/checkDesc";
import checkDate from "../../helpers/validation/checkDate";
import formatDate from "../../helpers/formatDate";
import Radio from "../Radio/Radio";
import { motion } from "framer-motion";
import { formVars } from "./variants";
import useSpender from "./useSpender";

export default function Spender({ mods, ps }) {
  const { formData, formErrors, handleSubmit, isLoading } = useSpender();

  const lineMods = genMod("spender", ["field", "toolkit", "icon", "div"]);
  const $ = genClass({
    block: "form",
    mods: { ...mods, line: ["spender"] },
    ps
  });

  return (
    <motion.form
      {...$()}
      variants={formVars}
      initial="hidden"
      animate="shown"
      onSubmit={handleSubmit}
    >
      {" "}
      <Line
        id="description"
        type="text"
        placeholder="Description"
        formData={formData}
        validator={checkDesc(formErrors)}
        ps={$("line").className}
        mods={lineMods}
      />
      <Line
        id="amount"
        type="text"
        placeholder="Amount"
        formData={formData}
        validator={checkCurrency(formErrors)}
        ps={$("line").className}
        mods={lineMods}
      />
      <Line
        id="date"
        type="text"
        placeholder="DD/MM/YYYY"
        formData={formData}
        validator={checkDate(formErrors)}
        ps={$("line").className}
        mods={{ ...lineMods, field: ["spender", "date"] }}
        defaultValue={formatDate(new Date())}
      />
      <Radio formData={formData} formErrors={formErrors} />
      <button {...$("action")} type="submit">
        {isLoading ? " * * *" : "SUBMIT"}
      </button>
    </motion.form>
  );
}
