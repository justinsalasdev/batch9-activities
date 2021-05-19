import { useReducer } from "react";
import validationReducer from "../reducers/validationReducer";

export default function useFieldValidator(id, value) {
  const [state, dispatch] = useReducer(validationReducer, { errorMessage: "" });

  if (value === "") {
    dispatch({ type: "blank" });
  }

  return state;
}
