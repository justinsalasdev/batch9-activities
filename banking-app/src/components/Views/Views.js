import { Switch, Route } from "react-router-dom";
import Account from "../Account/Account";
import Changer from "../Changer2/Changer";
import Guard from "../Guard/Guard";
import History from "../History/History";
import Login from "../Login/Login";

export default function Views() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Guard path="/history" component={History} />
      <Route path="/change-password" component={Changer} />
      <Guard path="/" exact component={Account} />
    </Switch>
  );
}
