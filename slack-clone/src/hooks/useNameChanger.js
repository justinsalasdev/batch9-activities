import { useRef, useState } from "react";
import { auth } from "../firebase/firebase";
import useUserDispatcher from "./user/useUserDispatcher";

export default function useNameChanger(initialName) {
  const labelRef = useRef();
  const userDispatch = useUserDispatcher();
  const [state, setState] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!state || state === initialName) {
      labelRef.current.previousElementSibling.blur();
    } else {
      setLoading(true);

      const user = auth.currentUser;
      user
        .updateProfile({
          displayName: state
        })
        .then(function () {
          setLoading(false);
          userDispatch({ type: "update name", payload: state }); //rerenders <Name/> with new initialName
          labelRef.current.previousElementSibling.blur();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function handleChange(e) {
    labelRef.current.textContent = e.target.value;
    setState(e.target.value);
  }

  function handleBlur() {
    labelRef.current.textContent = initialName;
  }

  function handleFocus() {
    setState(labelRef.current.textContent);
  }

  function handleEscape(e) {
    if (e.key === "Escape") {
      labelRef.current.previousElementSibling.blur();
    } else return;
  }

  //dynamics : isLoading, state, setState, handleSubmit, labelRef,

  return {
    state,
    setState,
    labelRef,
    isLoading,
    handleSubmit,
    handleChange,
    handleBlur,
    handleFocus,
    handleEscape
  };
}
