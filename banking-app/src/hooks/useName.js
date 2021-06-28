import getValidators from "../helpers/validation/getValidators";
import iterateCheck from "../helpers/validation/iterateCheck";

export default function useName(formErrors) {
  const nameRgx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  const validators = getValidators("name", [
    ["isRequired"],
    ["isInitial"],
    ["isValid", nameRgx]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
