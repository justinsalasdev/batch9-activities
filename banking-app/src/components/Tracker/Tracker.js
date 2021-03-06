import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import genClass from "../../helpers/style/genClass";
import Summary from "../Summary/Summary";
import Salary from "../Salary/Salary";
import Dues from "../Dues/Dues";

export default function Tracker() {
  let match = useRouteMatch();

  const $ = genClass({ block: "tracker" });
  return (
    <div {...$()}>
      <nav {...$("nav")}>
        <NavLink {...$("link")} to={`${match.url}`} exact>
          dues
        </NavLink>
        <NavLink {...$("link")} to={`${match.url}/income`}>
          income
        </NavLink>
        <NavLink {...$("link")} to={`${match.url}/summary`}>
          summary
        </NavLink>
      </nav>

      <Switch>
        <Route path={`${match.path}/income`}>
          <Salary />
        </Route>
        <Route path={`${match.path}/summary`}>
          <Summary />
        </Route>
        <Route path={`${match.path}`}>
          <Dues />
        </Route>
      </Switch>
    </div>
  );
}
