import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { GiHamburgerMenu } from "react-icons/gi";
import getUserFields from "../../helpers/getUserFields";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import { Switch, Route, useHistory } from "react-router-dom";
import genClass, { toggler as $t } from "../../helpers/genClass";
import View from "../View/View";
import PrivateChat from "../Chat/PrivateChat/PrivateChat";
import Director from "../Chat/RoomCreator/Director";
import RoomCreator from "../Chat/RoomCreator/RoomCreator";
import GroupChat from "../Chat/GroupChat/GroupChat";
import Backdrop from "../Backdrop/Backdrop";

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

  const [isExpanded, expand] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, userDispatch, navigator); //subscribe to authChanges & receive unsubscribe
    return function () {
      unsubscribe(); //unsubscribe when app unmounts
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //TODO: guard login route
  const $ = genClass({
    block: "app",
    mods: {
      expander: [$t(isExpanded, "hidden")]
    }
  });

  return (
    <div {...$()}>
      <Sidebar propStyles={$("sidebar").className} isExpanded={isExpanded} />
      <Backdrop
        propStyles={$("backdrop").className}
        isExpanded={isExpanded}
        onClick={() => expand(false)}
      />

      <button {...$("expander")} onClick={() => expand(state => !state)}>
        <GiHamburgerMenu />
      </button>
      <View propStyles={$("view").className}>
        <Switch>
          <Route path="/people/new" component={Director} />
          <Route path="/people/:id" component={PrivateChat} />
          <Route path="/channels/new">
            <RoomCreator mods={{ info: ["creator"], members: ["creator"] }} />
          </Route>
          <Route path="/channels/:id" component={GroupChat} />
          <Route path="/login">
            <Form />
          </Route>

          <Route path="/dms">
            <div>Dms pages</div>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </View>
    </div>
  );
}
