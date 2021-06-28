import genClass from "../../helpers/style/genClass";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const $ = genClass({
    block: "nav"
  });

  return (
    <nav {...$()}>
      <NavLink {...$("home")} to="/" exact>
        HOME
      </NavLink>
      <ul {...$("list")}>
        <li {...$("item")}>
          <NavLink {...$("link")} to="/login">
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
