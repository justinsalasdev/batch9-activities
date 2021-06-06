import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import authenticate from "../../helpers/authenticate";
import createAccount from "../../helpers/createAccount";
import genClass from "../../helpers/genClass";
import Line from "../Line/Line";
import { InlineLoader } from "../Loader/Loader";

export default function Form() {
  const [isLoading, setLoading] = useState(false);
  const [isLogin, changeForm] = useState(true);
  const [authError, setAuthError] = useState("");
  const formData = useRef({ errors: {} });
  const navigator = useHistory();

  const authResources = [formData.current, setLoading, setAuthError, navigator];
  const $ = genClass({ block: "form" });

  function handleSubmit(e) {
    setAuthError("");
    e.preventDefault();
    if (isLogin) {
      authenticate.apply(null, authResources);
    } else {
      createAccount.apply(null, authResources);
    }
  }

  const emailConfig = {
    id: "email",
    type: "text",
    formData: formData.current,
    placeholder: "Email"
  };

  const passwordConfig = {
    id: "password",
    type: "password",
    formData: formData.current,
    placeholder: "Password"
  };

  return (
    <motion.form
      {...$()}
      onSubmit={handleSubmit}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 1, y: 30 }}
    >
      <div {...$("info")}>
        <h3 {...$("title")}>{isLogin ? "LOGIN" : "CREATE ACCOUNT"}</h3>
        <span
          {...$("switch")}
          onClick={() => {
            changeForm(state => !state);
            setAuthError("");
          }}
        >
          {isLogin ? "create account" : "login instead"}
        </span>
      </div>
      <p {...$("toolkit")}>{authError}</p>
      <div {...$("fields")}>
        <Line {...emailConfig} />
        <Line {...passwordConfig} />
      </div>
      <button {...$("action")} type="submit">
        {isLoading ? <InlineLoader /> : isLogin ? "Login" : "Signup"}
      </button>
    </motion.form>
  );
}
