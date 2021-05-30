import { useReducer } from "react";
import usePeopleState from "../../hooks/people/usePeopleState";
import selectorReducer from "./selectorReducer";
import Fuse from "fuse.js";

export default function useSelectorLogic() {
  const peopleState = usePeopleState();
  const [compState, compDispatch] = useReducer(selectorReducer, {
    fieldValue: "",
    isFocused: false
  });

  const fuse = new Fuse(peopleState.people, {
    keys: ["name"]
  });

  return {
    fieldValue: compState.fieldValue,
    searchItems: fuse.search(compState.fieldValue),
    handleChange: e => compDispatch({ type: "set field", payload: e.target.value })
  };
}
