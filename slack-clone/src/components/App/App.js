import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import useAuthDispatcher from "../../hooks/auth/useAuthDispatcher";
import useAuthState from "../../hooks/auth/useAuthState";
import Form from "../Form/Form";
import Sidebar from "../Sidebar/Sidebar";

function onAuthStateChange(auth, authDispatch) {
  return auth.onAuthStateChanged(user => {
    if (user) {
      authDispatch({ type: "save user", payload: user });
    } else {
      authDispatch({ type: "delete user" });
    }
  });
}

export default function App() {
  const authDispatch = useAuthDispatcher();
  const authState = useAuthState();

  console.log(authState);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, authDispatch); //subscribe to authChanges & receive unsubscribe
    return function () {
      unsubscribe(); //unsubscribe when app unmounts
    };
  }, []);

  return (
    <>
      <Sidebar />
      <Form />
    </>
  );
}
