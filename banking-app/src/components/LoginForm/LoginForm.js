import Line from "../Line/Line";
import useEmailValidator from "../Line/useEmailValidator";
import usePwValidator from "../Line/usePwValidator";

export default function LoginForm() {
  //submitHandler
  //submit
  return (
    <form>
      <Line
        id="email"
        type="text"
        placeholder="Email"
        validator={useEmailValidator}
      />
      <Line
        id="password"
        type="password"
        placeholder="Password"
        validator={usePwValidator}
      />

      <button>submit</button>
    </form>
  );
}
