import getValidators from "../helpers/validation/getValidators";
import iterateCheck from "../helpers/validation/iterateCheck";

export default function useAccount(formErrors) {
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
