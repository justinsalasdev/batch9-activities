import GroupChat from "../Chat/GroupChat/GroupChat";
import PrivateChat from "../Chat/PrivateChat/PrivateChat";
import Director from "../Chat/RoomCreator/Director";
import RoomCreator from "../Chat/RoomCreator/RoomCreator";
import Form from "../Form/Form";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Home from "../Home/Home";
import Guard from "../Guard/Guard";

export default function Views({ expand }) {
  console.log("Views");
  const { pathname } = useLocation();
  const prevLocRef = useRef();
  const isMobile = useMediaQuery("(max-width: 700px)");

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
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <Switch>
      <Route path="/channels/new">
        <RoomCreator mods={{ info: ["creator"], members: ["creator"] }} />
      </Route>
      <Guard path="/channels/:id" component={GroupChat} />
      <Guard path="/people/new" component={Director} />
      <Guard path="/people/:id" component={PrivateChat} />
      <Route path="/login" component={Form} />
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}
