import { useEffect, useRef, useState } from "react";
import usePeopleState from "../../../hooks/people/usePeopleState";
import Fuse from "fuse.js";
import useUserState from "../../../hooks/user/useUserState";

export default function useSingleSelect() {
  const inputRef = useRef();
  const peopleState = usePeopleState();
  const userState = useUserState();
  const [fieldValue, setFieldValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const fuse = new Fuse(peopleState.people, {
    keys: ["name"]
  });

  return {
    userId: userState.uid,
    inputRef,
    fieldValue,
    searchItems: fuse.search(fieldValue),
    handleChange: e => setFieldValue(e.target.value)
  };
}
