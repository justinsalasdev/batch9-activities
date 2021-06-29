import genClass from "../../helpers/style/genClass";
import genMod from "../../helpers/style/genMod";
import useForm from "../../hooks/useForm";
import Line from "../Line/Line";
import checkCurrency from "../../helpers/validation/checkCurrency";
import checkDesc from "../../helpers/validation/checkDesc";
import checkDate from "../../helpers/validation/checkDate";
import formatDate from "../../helpers/formatDate";

export default function Spender({ mods, ps }) {
  const [formData, formErrors] = useForm();
  const lineMods = genMod("spender", ["field", "toolkit", "icon", "div"]);
  const $ = genClass({
    block: "form",
    mods: { ...mods, line: ["spender"] },
    ps
  });

  console.log(formatDate(new Date()));

  return (
    <form {...$()}>
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
    </form>
  );
}
