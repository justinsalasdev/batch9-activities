import { Redirect, Route } from "react-router-dom";
import { useUserState } from "../../managers/userManager";

export default function Guard({ component: Component, ...rest }) {
  const userState = useUserState();
  return (
    <Route
      {...rest}
      render={props => {
        if (!userState.uid) {
          return <Redirect to="/login" />;
        }

        if (!userState.account.active) {
          return <Redirect to="/change-password" />;
        }

        return <Component {...props} />;
      }}
    />
  );
}
