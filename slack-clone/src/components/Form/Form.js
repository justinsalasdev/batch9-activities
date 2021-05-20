import { useState } from "react";
import authenticate from "../../helpers/authenticate";
import createAccount from "../../helpers/createAccount";
import useAuthDispatcher from "../../hooks/auth/useAuthDispatcher";
import useAuthState from "../../hooks/auth/useAuthState";
import Line from "../Line/Line";
import Loader from "../Loader/Loader";

const formData = { errors: {} };

export default function Form() {
  const [isLoading, setLoading] = useState(false);
  const [isLogin, changeForm] = useState(true);
  const authDispatch = useAuthDispatcher();
  const authState = useAuthState();

  console.log(authState);

  function signUp(e) {
    e.preventDefault();
    if (isLogin) {
      authenticate(formData, setLoading, authDispatch);
    } else {
      createAccount(formData, setLoading, authDispatch);
    }
  }

  const emailConfig = {
    id: "email",
    type: "text",
    formData: formData,
    placeholder: "Email"
  };

  const passwordConfig = {
    id: "password",
    type: "password",
    formData: formData,
    placeholder: "Password"
  };

  return (
    <form className="form" onSubmit={signUp}>
      <div className="form__info">
        <h3 className="form__title">{isLogin ? "LOGIN" : "CREATE ACCOUNT"}</h3>
        <span className="form__switch" onClick={() => changeForm(state => !state)}>
          {isLogin ? "create account" : "login instead"}
        </span>
      </div>
      <p className="form__toolkit">{authState.error?.message}</p>
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
