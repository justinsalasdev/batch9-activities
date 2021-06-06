import { useEffect, useReducer, useRef } from "react";
import usePeopleState from "../../../hooks/people/usePeopleState";
import Fuse from "fuse.js";
import useUserState from "../../../hooks/user/useUserState";
import multiSelectReducer from "./multiSelectReducer";
import formatToFuse from "../formatToFuse";

export default function useMultiSelector(props) {
  const inputRef = useRef();
  const peopleState = usePeopleState();
  const userState = useUserState();
  const [compState, compDispatch] = useReducer(multiSelectReducer, {
    userId: userState.uid,
    fieldValue: "",
    //remove userId from artifact, always use freshcopy of uid
    selected: [userState.uid, ...props.membersRef.current.filter(uid => uid !== userState.uid)],
    isOptionsOpen: true
  });

  useEffect(() => {
    props.memberCountRef.current.textContent = compState.selected.length;
    props.membersRef.current = compState.selected;
  });

  useEffect(() => {
    inputRef.current.focus();
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
    handleChange: e => compDispatch({ type: "set field", payload: e.target.value }),
    handleReset: () => compDispatch({ type: "reset" }),
    handleSelectAll: () =>
      compDispatch({ type: "select all", payload: peopleState.people.map(person => person.uid) }),
    togglePerson: personId => () => compDispatch({ type: "toggle person", payload: personId })
  };
}
