import getValidators from "./getValidators";
import iterateCheck from "./iterateCheck";

export default function checkDate(formErrors) {
  const dateRgx =
    /^(0[1-9]|1[012])[/ /.](0[1-9]|[12][0-9]|3[01])[/ /.](19|20)\d\d$/;
  const validators = getValidators("date", [
    ["isRequired"],
    ["isInitial"],
    ["isValidDate", dateRgx]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
