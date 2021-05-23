import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import getUserFields from "../../helpers/getUserFields";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

function onAuthStateChange(auth, userDispatch, navigator) {
  return auth.onAuthStateChanged(user => {
    if (user) {
      userDispatch({
        type: "save user",
        payload: getUserFields(user)
      });
    } else {
      userDispatch({ type: "delete user" });
      navigator.push("/login");
    }
  });
}

export default function App() {
  const navigator = useHistory();
  const userDispatch = useUserDispatcher();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, userDispatch, navigator); //subscribe to authChanges & receive unsubscribe
    return function () {
      unsubscribe(); //unsubscribe when app unmounts
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //TODO: guard login route
  return (
    <>
      <Sidebar />
      <div className="view">
        <Switch>
          <Route path="/login">
            <Form />
          </Route>
          <Route path="/">
            <div>Home view</div>
          </Route>
        </Switch>
      </div>
      <div className="chat"></div>
    </>
  );
}
