import getValidators from "./getValidators";
import iterateCheck from "./iterateCheck";

export default function checkCurrency(formErrors) {
  const currencyRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  const validators = getValidators("amount", [
    ["isRequired"],
    ["isInitial"],
    ["isValid", currencyRegex]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
