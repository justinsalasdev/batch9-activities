import { useCallback, useEffect, useReducer, useRef } from "react";
import usePeopleState from "../../../hooks/people/usePeopleState";
import Fuse from "fuse.js";
import useUserState from "../../../hooks/user/useUserState";
import multiSelectReducer from "./multiSelectReducer";
import formatToFuse from "../formatToFuse";

export default function useMultSelect() {
  const inputRef = useRef();
  const peopleState = usePeopleState();
  const userState = useUserState();
  const [compState, compDispatch] = useReducer(multiSelectReducer, {
    userId: userState.uid,
    fieldValue: "",
    selected: [userState.uid],
    isOptionsOpen: true
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
    isOptionsOpen: compState.isOptionsOpen,
    inputRef,
    fieldValue: compState.fieldValue,
    searchItems: compState.fieldValue
      ? fuse.search(compState.fieldValue)
      : formatToFuse(peopleState.people),
    openOptions: () => compDispatch({ type: "open options" }),
    handleChange: e => compDispatch({ type: "set field", payload: e.target.value }),
    handleClose: () => compDispatch({ type: "close options" }),
    handleReset: () => compDispatch({ type: "reset" }),
    handleSelectAll: () =>
      compDispatch({ type: "select all", payload: peopleState.people.map(person => person.uid) }),
    togglePerson: personId => () => compDispatch({ type: "toggle person", payload: personId })
  };
}
