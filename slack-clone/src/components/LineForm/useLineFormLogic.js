import { useRef, useState } from "react";
import { auth } from "../../firebase/firebase";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";

export default function useNameChanger(initialName) {
  const labelRef = useRef();
  const userDispatch = useUserDispatcher();
  const [state, setState] = useState(initialName);
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!state || state === initialName) {
      labelRef.current.textContent = initialName;
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
    } else return;
  }

  return {
    state,
    labelRef,
    isLoading,
    handleSubmit,
    handleChange,
    handleEscape,
    handleBlur
  };
}
