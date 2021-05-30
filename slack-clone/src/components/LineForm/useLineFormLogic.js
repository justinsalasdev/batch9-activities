import { useReducer, useRef } from "react";
import { auth, db } from "../../firebase/firebase";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import lineFormReducer from "./lineFormReducer";

export default function useLineFormLogic(initialName) {
  const labelRef = useRef();
  const userDispatch = useUserDispatcher();
  const [compState, compDispatch] = useReducer(lineFormReducer, {
    value: initialName,
    isLoading: false
  });

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!compState.value || compState.value === initialName) {
        labelRef.current.textContent = initialName;
        labelRef.current.previousElementSibling.blur();
      } else {
        compDispatch({ type: "start submit" });
        const user = auth.currentUser;
        await db.collection("Users").doc(user.uid).set(
          {
            name: compState.value,
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL
          },
          { merge: true }
        );
        await user.updateProfile({
          displayName: compState.value
        });

        userDispatch({ type: "update name", payload: compState.value });
        compDispatch({ type: "end submit" });
      }
    } catch (err) {
      compDispatch({ type: "submit error", payload: initialName });
    }
  }

  return {
    state: compState.value,
    labelRef,
    isLoading: compState.isLoading,
    handleSubmit,
    handleChange: e => compDispatch({ type: "set value", payload: e.target.value }),
    handleEscape: e => {
      if (e.key === "Escape") {
        compDispatch({ type: "set value", payload: initialName });
        labelRef.current.previousElementSibling.blur();
      } else return;
    },
    handleBlur: () => {
      if (compState.value === "") {
        compDispatch({ type: "set value", payload: initialName });
      } else return;
    }
  };
}
