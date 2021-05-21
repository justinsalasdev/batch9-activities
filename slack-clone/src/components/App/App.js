import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import getUserFields from "../../helpers/getUserFields";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import Form from "../Form/Form";
import Name from "../Name/Name";
import Sidebar from "../Sidebar/Sidebar";

//TODO: make name content-editable

export default function App() {
  console.log("App");
  const userDispatch = useUserDispatcher();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, userDispatch); //subscribe to authChanges & receive unsubscribe
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
        <Name />
      </div>
      <div className="chat"></div>
    </>
  );
}

function onAuthStateChange(auth, userDispatch) {
  return auth.onAuthStateChanged(user => {
    if (user) {
      userDispatch({
        type: "save user",
        payload: getUserFields(user)
      });
    } else {
      userDispatch({ type: "delete user" });
    }
  });
}
