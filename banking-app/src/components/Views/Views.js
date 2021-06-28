import { Switch, Route } from "react-router-dom";
import Form from "../Form/Form";
import Home from "../Home/Home";
import Guard from "../Guard/Guard";

export default function Views() {
  console.log("Views");

  return (
    <Switch>
      <Route path="/channels/new">
        <RoomCreator mods={{ info: ["creator"], members: ["creator"] }} />
      </Route>
      <Route path="/login" component={Form} />
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}
