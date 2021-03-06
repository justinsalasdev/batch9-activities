import genClass from "../../helpers/style/genClass";
import genMod from "../../helpers/style/genMod";
import Line from "../Line/Line";
import Loader from "../Loader/Loader";
import checkCurrency from "../../helpers/validation/checkCurrency";
import checkDesc from "../../helpers/validation/checkDesc";
import checkDate from "../../helpers/validation/checkDate";
import formatDate from "../../helpers/formatDate";
import Radio from "../Radio/Radio";
import { motion } from "framer-motion";
import { formVars } from "./variants";
import useLogger from "../../hooks/useLogger";

export default function Spender({ mods, ps }) {
  const { formData, formErrors, handleSubmit, isLoading } = useLogger("Dues");

  const lineMods = genMod("spender", ["field", "toolkit", "icon", "div"]);
  const $ = genClass({
    block: "form",
    mods: { ...mods, line: ["spender"] },
    ps
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.form
      {...$()}
      variants={formVars}
      initial="hidden"
      animate="shown"
      onSubmit={handleSubmit}
    >
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
        initialValue={formatDate(new Date())}
      />
      <Radio formData={formData} formErrors={formErrors} />
      <button {...$("action")} type="submit">
        SUBMIT
      </button>
    </motion.form>
  );
}
