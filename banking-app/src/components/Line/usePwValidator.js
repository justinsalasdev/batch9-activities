import { useRef } from "react";

export default function (formErrors) {
  return function usePwValidator(fieldValue) {
    const errorRef = useRef("initial");

    if (!fieldValue && errorRef.current !== "initial") {
      errorRef.current = "password is required";
      formErrors["password"] = errorRef.current;
    } else if (fieldValue && fieldValue.length < 6) {
      errorRef.current = "password must be at least 6 characters";
      formErrors["password"] = errorRef.current;
    } else {
      if (errorRef.current === "initial") {
        formErrors["password"] = "initial";
      }
      errorRef.current = "";
    }
    return errorRef.current;
  };
}
