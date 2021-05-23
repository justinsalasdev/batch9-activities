import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import authenticate from "../../helpers/authenticate";
import createAccount from "../../helpers/createAccount";
import Line from "../Line/Line";
import Loader from "../Loader/Loader";

export default function Form() {
  const [isLoading, setLoading] = useState(false);
  const [isLogin, changeForm] = useState(true);
  const [authError, setAuthError] = useState("");
  const formData = useRef({ errors: {} });
  const navigator = useHistory();

  const authResources = [formData.current, setLoading, setAuthError, navigator];

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
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__info">
        <h3 className="form__title">{isLogin ? "LOGIN" : "CREATE ACCOUNT"}</h3>
        <span
          className="form__switch"
          onClick={() => {
            changeForm(state => !state);
            setAuthError("");
          }}
        >
          {isLogin ? "create account" : "login instead"}
        </span>
      </div>
      <p className="form__toolkit">{authError}</p>
      <div className="form__fields">
        <Line {...emailConfig} />
        <Line {...passwordConfig} />
      </div>
      <button className="form__action" type="submit">
        {isLoading ? <Loader type="inline" /> : isLogin ? "Login" : "Signup"}
      </button>
    </form>
  );
}
