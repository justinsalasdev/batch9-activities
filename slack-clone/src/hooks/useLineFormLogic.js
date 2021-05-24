import { useEffect, useRef, useState } from "react";
import saveChannel from "../helpers/saveChannel";
import saveName from "../helpers/saveName";
import useUserDispatcher from "./user/useUserDispatcher";
import useUserState from "./user/useUserState";

const submitFunctions = {
  profile: saveName,
  channels: saveChannel("channels"),
  dms: saveChannel("dms")
};

export default function useNameChanger(initialName, type, setAdding) {
  const labelRef = useRef();
  const userDispatch = useUserDispatcher();
  const userState = useUserState();
  const [state, setState] = useState(initialName);
  const [isLoading, setLoading] = useState(false);

  const resources = {
    setAdding,
    labelRef,
    state,
    setLoading,
    userDispatch,
    initialName,
    userState
  };

  function handleChange(e) {
    setState(e.target.value);
  }

  function handleBlur(e) {
    if (state === "") {
      setState(initialName);
    } else return;
  }

  function handleEscape(e) {
    if (e.key === "Escape") {
      setState(initialName);
      labelRef.current.previousElementSibling.blur();
      setAdding && setAdding(false); //
    } else return;
  }

  return {
    state,
    labelRef,
    isLoading,
    handleSubmit: submitFunctions[type](resources),
    handleChange,
    handleEscape,
    handleBlur
  };
}
