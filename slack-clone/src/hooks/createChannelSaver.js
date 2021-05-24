import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/firebase";
import useUserState from "./user/useUserState";

export default function createChannelHook(initialName, cancel) {
  return function useChannelSaver() {
    const userState = useUserState();
    const labelRef = useRef();
    const [state, setState] = useState("");
    const [isLoading, setLoading] = useState(false);

    function handleSubmit(e) {
      e.preventDefault();

      if (!state || state === initialName) {
        labelRef.current.previousElementSibling.blur();
      } else {
        setLoading(true);

        db.collection("channels")
          .add({
            name: state,
            creator: userState.uid
          })
          .then(docRef => {
            setLoading(false);
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(error => {
            setLoading(false);
            console.error("Error adding document: ", error);
          });
      }
    }

    function handleChange(e) {
      labelRef.current.textContent = e.target.value;
      setState(e.target.value);
    }

    function handleBlur() {
      labelRef.current.textContent = initialName;
      cancel(false);
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

    /*value={state || ""}
            onKeyDown={handleEscape}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange} */

    return {
      initialName,
      state,
      labelRef,
      isLoading,
      handleSubmit,
      handleChange,
      handleBlur,
      handleFocus,
      handleEscape
    };
  };
}
