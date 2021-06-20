import { useRef } from "react";
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //used by HTML W3c

export default function (formErrors) {
  return function useEmailValidator(fieldValue) {
    const errorRef = useRef("initial");
    const isDirty = errorRef.current !== "initial";

    if (!fieldValue && isDirty) {
      errorRef.current = "email is required";
    } else if (!emailRegex.test(fieldValue) && isDirty) {
      errorRef.current = "email is invalid";
    } else {
      errorRef.current = "";
    }

    if (!isDirty) {
      formErrors["email"] = "initial";
    } else {
      formErrors["email"] = errorRef.current;
    }

    return errorRef.current;
  };
}
