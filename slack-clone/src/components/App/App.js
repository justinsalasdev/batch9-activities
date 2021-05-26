import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import getUserFields from "../../helpers/getUserFields";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import { Switch, Route, useHistory } from "react-router-dom";
import ChatBar from "../ChatBar/ChatBar";
import genClass from "../../helpers/genClass";
import View from "../View/View";
import Chat from "../Chat/Chat";
import usePeopleDispatcher from "../../hooks/people/usePeopleDispatcher";

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
  const $ = genClass({ block: "app" });
  return (
    <div {...$()}>
      <Sidebar propStyles={$("sidebar").className} />
      <View propStyles={$("view").className}>
        <Switch>
          <Route path="/login">
            <Form />
          </Route>
          <Route path="/addChannels">
            <div>New channel</div>
          </Route>
          <Route path="/dms">
            <div>Dms pages</div>
          </Route>
          <Route path="/addContacts">
            <div>New contact</div>
          </Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </View>
      {/* <ChatBar propStyles={$("chat-bar").className} /> */}
    </div>
  );
}
