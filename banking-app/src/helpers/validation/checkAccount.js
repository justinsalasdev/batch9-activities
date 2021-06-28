import getValidators from "./getValidators";
import iterateCheck from "./iterateCheck";

export default function checkAccount(formErrors) {
  const numRgx = /^[0-9]+$/;
  const validators = getValidators("account", [
    ["isRequired"],
    ["isInitial"],
    ["isValid", numRgx],
    ["isLength", 6]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
