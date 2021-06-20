import { useRef } from "react";
import Line from "../Line/Line";
import useEmailValidator from "../Line/useEmailValidator";
import usePwValidator from "../Line/usePwValidator";
import genClass from "../../helpers/genClass";
import Button from "../Button/Button";
import useSubmit from "./useSubmit";

export default function LoginForm() {
  const {
    current: { formData, formErrors }
  } = useRef({ formData: {}, formErrors: {} });

  const { error, isLoading, handleSubmit } = useSubmit(formData, formErrors);

  const $ = genClass({ block: "login-form" });
  return (
    <form {...$()} onSubmit={handleSubmit}>
      <p {...$("heading")}>Login</p>
      <p {...$("toolkit")}>some errors</p>
      <Line
        id="email"
        type="text"
        placeholder="Email"
        formData={formData}
        validator={useEmailValidator(formErrors)}
        ps={$("line").className}
      />
      <Line
        id="password"
        type="password"
        placeholder="Password"
        formData={formData}
        validator={usePwValidator(formErrors)}
      />

      <Button
        type="submit"
        text={isLoading ? "..." : "Submit"}
        ps={$("submit").className}
        clickHandler={() => {
          console.log("clicked");
        }}
      />
    </form>
  );
}
