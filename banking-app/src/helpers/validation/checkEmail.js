import getValidators from "./getValidators";
import iterateCheck from "./iterateCheck";

export default function checkEmail(formErrors) {
  // eslint-disable-next-line
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validators = getValidators("email", [
    ["isRequired"],
    ["isInitial"],
    ["isValid", emailRegex]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
