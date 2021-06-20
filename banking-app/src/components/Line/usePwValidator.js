import { useRef } from "react";

export default function (formErrors) {
  return function usePwValidator(fieldValue) {
    const errorRef = useRef("initial");
    const isDirty = errorRef.current !== "initial";

    if (!fieldValue && isDirty) {
      errorRef.current = "password is required";
    } else if (fieldValue && fieldValue.length < 6) {
      errorRef.current = "must be at least 6 characters";
    } else {
      errorRef.current = "";
    }

    if (!isDirty) {
      formErrors["password"] = "initial";
    } else {
      formErrors["password"] = errorRef.current;
    }

    return errorRef.current;
  };
}
