import { useRef } from "react";
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //used by HTML W3c

export default function useEmailValidator(fieldValue) {
  const errorRef = useRef("initial");

  if (!fieldValue && errorRef.current !== "initial") {
    errorRef.current = "email is required";
  } else if (fieldValue && !emailRegex.test(fieldValue)) {
    errorRef.current = "email is invalid";
  } else {
    errorRef.current = "";
  }
  return errorRef.current;
}
