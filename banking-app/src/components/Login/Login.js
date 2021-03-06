import Line from "../Line/Line";
import genClass, { toggler as $t } from "../../helpers/style/genClass";
import { motion } from "framer-motion";
import { formVars } from "./variants";
import Loader from "../Loader/Loader";
import useLogin from "./useLogin";
import useForm from "../../hooks/useForm";
import { useUserState } from "../../managers/userManager";
import { Redirect } from "react-router-dom";
import checkEmail from "../../helpers/validation/checkEmail";
import checkPassword from "../../helpers/validation/checkPassword";

export default function Login() {
  const [formData, formErrors] = useForm();
  const userState = useUserState();
  const { error, isLoading, handleSubmit } = useLogin(formData, formErrors);

  const $ = genClass({
    block: "form",
    mods: { form: ["login"], action: [$t(isLoading, "loading")] }
  });

  if (userState.uid) {
    return <Redirect to="/" />;
  }

  if (isLoading) {
    return <Loader text={"authenticating.."} />;
  }

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
        validator={checkEmail(formErrors)}
        ps={$("line").className}
      />
      <Line
        id="password"
        type="password"
        placeholder="Password"
        formData={formData}
        validator={checkPassword(formErrors)}
        ps={$("line").className}
      />
      <button {...$("action")} type="submit">
        Login
      </button>
    </motion.form>
  );
}
