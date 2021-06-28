import Line from "../Line/Line";
import genClass, { toggler as $t } from "../../helpers/style/genClass";
import useLogin from "./useLogin";
import { motion } from "framer-motion";
import { formVars, btnVars } from "./variants";
import useEmail from "../../hooks/useEmail";
import usePassword from "../../hooks/usePassword";
import useForm from "../../hooks/useForm";

export default function Creator() {
  const [formData, formErrors] = useForm();
  const { error, isLoading, handleSubmit } = useLogin(formData, formErrors);

  const $ = genClass({
    block: "form",
    mods: { form: ["login"], action: [$t(isLoading, "loading")] }
  });

  return (
    <motion.form
      variants={formVars}
      initial="hidden"
      animate="shown"
      {...$()}
      onSubmit={handleSubmit}
    >
      <p {...$("error")}>{error}</p>
      <Line
        id="email"
        type="text"
        placeholder="Email"
        formData={formData}
        validator={useEmail(formErrors)}
        ps={$("line").className}
      />
      <Line
        id="password"
        type="password"
        placeholder="Password"
        formData={formData}
        validator={usePassword(formErrors)}
        ps={$("line").className}
      />
      <motion.button
        variants={btnVars}
        animate={isLoading ? "submit" : ""}
        {...$("action")}
        type="submit"
      >
        {isLoading ? "" : "Login"}
      </motion.button>
    </motion.form>
  );
}
