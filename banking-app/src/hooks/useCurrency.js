import getValidators from "../helpers/validation/getValidators";
import iterateCheck from "../helpers/validation/iterateCheck";

export default function useCurrency(formErrors) {
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
