import getValidators from "./getValidators";
import iterateCheck from "./iterateCheck";

export default function checkNewPw(formErrors) {
  const passwordRgx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/;
  const validators = getValidators("password", [
    ["isRequired"],
    ["isInitial"],
    ["isValidPw", passwordRgx],
    ["isMin", 6]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
