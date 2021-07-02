import { Switch, Route } from "react-router-dom";
import Account from "../Account/Account";
import Changer from "../Changer/Changer";
import Guard from "../Guard/Guard";
import History from "../History/History";
import Login from "../Login/Login";
import Tracker from "../Tracker/Tracker";

export default function Views() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Guard path="/history" component={History} />
      <Route path="/change-password" component={Changer} />
      <Guard path="/budget" component={Tracker} />
      <Guard path="/" exact component={Account} />
    </Switch>
  );
}
