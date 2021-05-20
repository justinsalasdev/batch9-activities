import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import useAuthDispatcher from "../../hooks/auth/useAuthDispatcher";
import Form from "../Form/Form";
import Sidebar from "../Sidebar/Sidebar";

export default function App() {
  console.log("App");
  const authDispatch = useAuthDispatcher();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, authDispatch); //subscribe to authChanges & receive unsubscribe
    return function () {
      unsubscribe(); //unsubscribe when app unmounts
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Sidebar />
      <div className="view">
        <Form />
      </div>
      <div className="chat"></div>
    </>
  );
}

function onAuthStateChange(auth, authDispatch) {
  return auth.onAuthStateChanged(user => {
    if (user) {
      authDispatch({ type: "save user", payload: user });
    } else {
      authDispatch({ type: "delete user" });
    }
  });
}
