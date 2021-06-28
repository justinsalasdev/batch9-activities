import genClass from "../../helpers/style/genClass";
import { NavLink } from "react-router-dom";
import signOut from "../../helpers/auth/signOut";
import { useUserState } from "../../managers/userManager";

export default function Nav() {
  const userState = useUserState();
  const isAuth = userState.uid !== null;
  const $ = genClass({
    block: "nav"
  });

  return (
    <nav {...$()}>
      {isAuth && (
        <NavLink {...$("home")} to="/" exact>
          ACCOUNT
        </NavLink>
      )}
      <ul {...$("list")}>
        {isAuth && (
          <li {...$("item")}>
            <NavLink {...$("link")} to="/budget">
              BUDGET
            </NavLink>
          </li>
        )}
        {isAuth && (
          <li {...$("item")}>
            <NavLink {...$("link")} to="/history">
              HISTORY
            </NavLink>
          </li>
        )}
        {!isAuth && (
          <li {...$("item")}>
            <NavLink {...$("link")} to="/login">
              LOGIN
            </NavLink>
          </li>
        )}
        {isAuth && (
          <li {...$("item")}>
            <button {...$("link")} type="button" onClick={signOut}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
