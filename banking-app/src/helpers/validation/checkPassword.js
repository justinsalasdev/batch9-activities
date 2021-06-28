import getValidators from "./getValidators";
import iterateCheck from "./iterateCheck";

export default function checkPassword(formErrors) {
  //password regex for nominating password only
  // const passwordRgx =
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/;
  const validators = getValidators("password", [["isRequired"], ["isInitial"]]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
