import { Redirect, Route } from "react-router-dom";
import { useUserState } from "../../managers/userManager";

export default function Guard({ component: Component, ...rest }) {
  const { path } = rest;
  const userState = useUserState();
  return (
    <Route
      {...rest}
      render={props => {
        if (userState.uid && path === "/login") {
          return <Redirect to="/" />;
        }

        if (!userState.uid) {
          return <Redirect to="/login" />;
        }

        return <Component {...props} />;
      }}
    />
  );
}
