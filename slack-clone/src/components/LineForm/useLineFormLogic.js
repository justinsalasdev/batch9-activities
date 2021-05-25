import { useRef, useState } from "react";
import { auth, db } from "../../firebase/firebase";
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
      //updateDB first
      db.collection("Users")
        .doc(user.uid)
        .set(
          {
            name: state,
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL
          },
          { merge: true }
        )
        .then(() => {
          console.log("Document written with ID");
          user
            .updateProfile({
              displayName: state
            })
            .then(function () {
              //TODO: add userData to database
              //TODO: don't allow user who didn't update their name to use chat
              userDispatch({ type: "update name", payload: state }); //rerenders <Name/> with new initialName
              setLoading(false);
            })
            .catch(function (error) {
              setLoading(false);
              console.log(error, "auth error");
            });
        })
        .catch(error => {
          setLoading(false);
          console.error("db error", error);
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
