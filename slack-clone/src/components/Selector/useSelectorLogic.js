import { useEffect, useReducer, useRef } from "react";
import usePeopleState from "../../hooks/people/usePeopleState";
import usePeopleDispatcher from "../../hooks/people/usePeopleDispatcher";
import selectorReducer from "./selectorReducer";
import Fuse from "fuse.js";
import useUserState from "../../hooks/user/useUserState";

export default function useSelectorLogic(multiple) {
  const inputRef = useRef();
  const peopleState = usePeopleState();
  const userState = useUserState();
  const [compState, compDispatch] = useReducer(selectorReducer, {
    fieldValue: "",
    selected: []
  });

  useEffect(() => {
    inputRef.current.focus();

    return () => {
      compDispatch({ type: "reset" });
    };
  }, []);

  const fuse = new Fuse(peopleState.people, {
    keys: ["name"]
  });

  function getSearchItems(isMultiple) {
    if (isMultiple && compState.fieldValue === "") {
      return peopleState.people.map(person => {
        return { item: { ...person } };
      });
    } else {
      return fuse.search(compState.fieldValue);
    }
  }

  return {
    compState,
    userId: userState.uid,
    inputRef,
    fieldValue: compState.fieldValue,
    searchItems: getSearchItems(multiple),
    compDispatch,
    handleChange: e => compDispatch({ type: "set field", payload: e.target.value })
  };
}
