import { Switch, Route } from "react-router-dom";
import Account from "../Account/Account";
import Guard from "../Guard/Guard";
import History from "../History/History";
import Login from "../Login/Login";

export default function Views() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Guard path="/history" component={History} />
      <Guard path="/" exact component={Account} />
    </Switch>
  );
}
