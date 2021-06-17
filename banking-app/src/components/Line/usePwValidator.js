import { useRef } from "react";

export default function usePwValidator(fieldValue) {
  const errorRef = useRef("initial");

  if (!fieldValue && errorRef.current !== "initial") {
    errorRef.current = "password is required";
  } else if (fieldValue && fieldValue.length < 6) {
    errorRef.current = "password must be at least 6 characters";
  } else {
    errorRef.current = "";
  }
  return errorRef.current;
}
