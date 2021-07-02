import { useRef } from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import genClass from "../../helpers/style/genClass";
import Summary from "../Summary/Summary";

//gets latest balance from userState
//gets income via ref
//gets dues via ref

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
          <h3>INCOME</h3>
        </Route>
        <Route path={`${match.path}/summary`}>
          <Summary />
        </Route>
        <Route path={`${match.path}`}>
          <h3>DUES</h3>
        </Route>
      </Switch>
    </div>
  );
}
