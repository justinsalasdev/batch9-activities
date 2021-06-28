import Line from "../Line/Line";
import genClass, { toggler as $t } from "../../helpers/style/genClass";
import { motion } from "framer-motion";
import { formVars, btnVars } from "./variants";
import useChange from "./useChange";
import useForm from "../../hooks/useForm";
import { useUserState } from "../../managers/userManager";
import { Redirect } from "react-router-dom";
import checkNewPw from "../../helpers/validation/checkNewPw";

export default function Changer() {
  const [formData, formErrors] = useForm();
  const userState = useUserState();
  const { error, isLoading, handleSubmit } = useChange(formData, formErrors);

  const $ = genClass({
    block: "form",
    mods: { form: ["login"], action: [$t(isLoading, "loading")] }
  });

  if (userState.uid && userState.account.active) {
    return <Redirect to="/" />;
  }

  return (
    <motion.form
      variants={formVars}
      initial="hidden"
      animate="shown"
      {...$()}
      onSubmit={handleSubmit}
    >
      <p {...$("error")}>{error || "Please change your password"}</p>
      <Line
        id="password"
        type="password"
        placeholder="New password"
        formData={formData}
        validator={checkNewPw(formErrors)}
        ps={$("line").className}
      />
      <motion.button
        variants={btnVars}
        animate={isLoading ? "submit" : ""}
        {...$("action")}
        type="submit"
      >
        {isLoading ? "" : "Submit"}
      </motion.button>
    </motion.form>
  );
}
