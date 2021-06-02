import { useEffect, useReducer, useRef } from "react";
import usePeopleState from "../../../hooks/people/usePeopleState";
import Fuse from "fuse.js";
import useUserState from "../../../hooks/user/useUserState";
import multiSelectReducer from "./multiSelectReducer";

export default function useMultSelect() {
  const inputRef = useRef();
  const peopleState = usePeopleState();
  const userState = useUserState();
  const [compState, compDispatch] = useReducer(multiSelectReducer, {
    userId: userState.uid,
    fieldValue: "",
    selected: [userState.uid]
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

  return {
    selected: compState.selected,
    userId: userState.uid,
    inputRef,
    fieldValue: compState.fieldValue,
    searchItems: compState.fieldValue
      ? fuse.search(compState.fieldValue)
      : peopleState.people.map(person => ({ item: { ...person } })),
    handleChange: e => compDispatch({ type: "set field", payload: e.target.value }),
    compDispatch
  };
}
