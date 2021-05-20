import { useLayoutEffect, useReducer, useState } from "react";
import lineErrorReducer from "../reducers/lineErrorReducer";

const regexes = {
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
};

const minLengths = {
  password: 6
};

export default function useLineValidator(id) {
  const [state, setState] = useState("");

  return [state, setState];
}
