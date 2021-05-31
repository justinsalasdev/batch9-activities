import { useEffect, useReducer, useRef } from "react";
import usePeopleState from "../../hooks/people/usePeopleState";
import selectorReducer from "./selectorReducer";
import Fuse from "fuse.js";
import useUserState from "../../hooks/user/useUserState";

export default function useSelectorLogic(multiple) {
  const inputRef = useRef();
  const peopleState = usePeopleState();
  const userState = useUserState();
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

  function getSearchItems(isMultiple) {
    if (isMultiple && compState.fieldValue === "") {
      return peopleState.people.map(person => {
        return { item: person };
      });
    } else {
      return fuse.search(compState.fieldValue);
    }
  }

  return {
    userId: userState.uid,
    inputRef,
    fieldValue: compState.fieldValue,
    searchItems: getSearchItems(multiple),
    handleChange: e => compDispatch({ type: "set field", payload: e.target.value })
  };
}
