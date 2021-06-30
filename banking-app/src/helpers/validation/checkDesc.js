import getValidators from "./getValidators";
import iterateCheck from "./iterateCheck";

export default function checkDesc(formErrors) {
  const validators = getValidators("description", [
    ["isRequired"],
    ["isInitial"]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
