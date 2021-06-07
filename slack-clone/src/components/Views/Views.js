import GroupChat from "../Chat/GroupChat/GroupChat";
import PrivateChat from "../Chat/PrivateChat/PrivateChat";
import Director from "../Chat/RoomCreator/Director";
import RoomCreator from "../Chat/RoomCreator/RoomCreator";
import Form from "../Form/Form";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Views({ expand }) {
  console.log("Views");
  const { pathname } = useLocation();
  const prevLocRef = useRef();
  const isMobile = useMediaQuery("(max-width: 484px)");

  useEffect(() => {
    console.log(prevLocRef.current);
    if (prevLocRef.current === pathname) {
      console.log("do nothing");
    } else {
      if (isMobile) {
        expand(false);
      } else {
        console.log("not mobile");
      }
      prevLocRef.current = pathname;
    }
  }, [pathname]);

  return (
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
  );
}
