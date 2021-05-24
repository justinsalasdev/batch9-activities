import { useEffect, useRef, useState } from "react";
import saveName from "../helpers/saveName";
import useUserDispatcher from "./user/useUserDispatcher";

export default function useNameChanger(initialName, face) {
  const labelRef = useRef();
  const userDispatch = useUserDispatcher();
  const [state, setState] = useState(initialName);
  const [isLoading, setLoading] = useState(false);

  function handleChange(e) {
    setState(e.target.value);
  }

  function handleEscape(e) {
    if (e.key === "Escape") {
      setState(initialName);
      labelRef.current.previousElementSibling.blur();
    } else return;
  }

  return {
    state,
    labelRef,
    isLoading,
    handleSubmit: saveName({ labelRef, state, setLoading, userDispatch, initialName }),
    handleChange,
    handleEscape
  };
}
