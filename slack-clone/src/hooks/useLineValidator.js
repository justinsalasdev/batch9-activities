import { useLayoutEffect, useReducer } from "react";
import lineErrorReducer from "../reducers/lineErrorReducer";

const regexes = {
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
};

const minLengths = {
  password: 6
};

export default function useLineValidator(id) {
  const [state, dispatch] = useReducer(lineErrorReducer, {
    value: "",
    errorMessage: "",
    isDirty: false
  });

  useLayoutEffect(() => {
    if (state.isDirty) {
      if (!state.value) {
        dispatch({ type: "error", payload: "field is required" });
        return;
      }

      if (regexes[id] && !regexes[id].test(state.value)) {
        dispatch({ type: "error", payload: `${id} is invalid` });
        return;
      }

      if (minLengths[id] && state.value.length < minLengths[id]) {
        dispatch({
          type: "error",
          payload: `${id} must be greater than ${minLengths[id] - 1} characters`
        });
        return;
      }
    } else {
      return;
    }
  }, [state.value]);

  return [state, dispatch];
}
