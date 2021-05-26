import { useEffect, useRef, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";

export default function useNameChanger(initialName, error) {
  const labelRef = useRef();
  const userDispatch = useUserDispatcher();
  const [state, setState] = useState(initialName);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      setState(initialName); //set to initial name when update attempt fails
      userDispatch({ type: "clear error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!state || state === initialName) {
      labelRef.current.textContent = initialName;
      labelRef.current.previousElementSibling.blur();
    } else {
      setLoading(true);
      const user = auth.currentUser;
      db.collection("Users")
        .doc(user.uid)
        //TODO:must be .update when user just want to change name
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
          //return promise to extend 'then' chain
          return user.updateProfile({
            displayName: state
          });
        })
        .then(function () {
          userDispatch({ type: "update name", payload: state }); //rerenders <Name/> with new initialName
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
          userDispatch({ type: "error" });
          console.log(error, "modify name error");
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
