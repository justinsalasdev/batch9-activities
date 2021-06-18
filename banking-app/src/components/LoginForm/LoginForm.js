import { useRef } from "react";
import Line from "../Line/Line";
import useEmailValidator from "../Line/useEmailValidator";
import usePwValidator from "../Line/usePwValidator";
import genClass from "../../helpers/genClass";
import Button from "../Button/Button";

export default function LoginForm() {
  const { current: formErrors } = useRef({});

  function submitHandler(e) {
    e.preventDefault();
    console.log(formErrors);
  }

  const $ = genClass({ block: "login-form" });
  return (
    <form {...$()} onSubmit={submitHandler}>
      <p {...$("heading")}>Login</p>
      <Line
        id="email"
        type="text"
        placeholder="Email"
        validator={useEmailValidator(formErrors)}
        ps={$("line").className}
      />
      <Line
        id="password"
        type="password"
        placeholder="Password"
        validator={usePwValidator(formErrors)}
      />

      <Button
        type="submit"
        text="Submit"
        ps={$("submit").className}
        clickHandler={() => {
          console.log(formErrors);
        }}
      />
    </form>
  );
}
