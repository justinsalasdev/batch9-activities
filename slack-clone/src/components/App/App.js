import { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase/firebase";
import getUserFields from "../../helpers/getUserFields";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import Sidebar from "../Sidebar/Sidebar";
import { useHistory } from "react-router-dom";
import genClass, { toggler as $t } from "../../helpers/genClass";
import Backdrop from "../Backdrop/Backdrop";
import Views from "../Views/Views";
import Burger from "../Burger/Burger";

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
  const constraintsRef = useRef();

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
    <div {...$()} ref={constraintsRef}>
      <Sidebar propStyles={$("sidebar").className} isExpanded={isExpanded} />
      <Backdrop
        propStyles={$("backdrop").className}
        isExpanded={isExpanded}
        onClick={() => expand(false)}
      />

      <Burger
        propStyles={$("expander").className}
        isExpanded={isExpanded}
        expand={expand}
        constraintsRef={constraintsRef}
      />

      <div {...$("views")}>
        <Views expand={expand} />
      </div>
    </div>
  );
}

/*
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
        </Switch> */
