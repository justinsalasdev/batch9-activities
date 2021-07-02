import { Switch, Route } from "react-router-dom";
import Account from "../Account/Account";
import Dues from "../Dues/Dues";
import Changer from "../Changer/Changer";
import Guard from "../Guard/Guard";
import History from "../History/History";
import Login from "../Login/Login";
import Test from "./Test";
import Salary from "../Salary/Salary";

export default function Views() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Guard path="/history" component={History} />
      <Route path="/change-password" component={Changer} />
      <Route path="/test" component={Test} />
      <Guard path="/budget" component={Dues} />
      <Guard path="/salary" component={Salary} />
      <Guard path="/" exact component={Account} />
    </Switch>
  );
}
