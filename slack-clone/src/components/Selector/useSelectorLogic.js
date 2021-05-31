import { useEffect, useReducer, useRef } from "react";
import usePeopleState from "../../hooks/people/usePeopleState";
import selectorReducer from "./selectorReducer";
import Fuse from "fuse.js";

export default function useSelectorLogic() {
  const inputRef = useRef();
  const peopleState = usePeopleState();
  const [compState, compDispatch] = useReducer(selectorReducer, {
    fieldValue: "",
    isFocused: false
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const fuse = new Fuse(peopleState.people, {
    keys: ["name"]
  });

  return {
    inputRef,
    fieldValue: compState.fieldValue,
    searchItems: fuse.search(compState.fieldValue),
    handleChange: e => compDispatch({ type: "set field", payload: e.target.value })
  };
}
