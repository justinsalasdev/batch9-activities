import { Switch } from "react-router-dom";
import Account from "../Account/Account";
import Guard from "../Guard/Guard";
import Login from "../Login/Login";

export default function Views() {
  console.log("Views");

  return (
    <Switch>
      <Guard path="/login" component={Login} />
      <Guard path="/" exact component={Account} />
    </Switch>
  );
}
