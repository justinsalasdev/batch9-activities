import { Redirect, Route } from "react-router-dom";
import useUserState from "../../hooks/user/useUserState";

export default function Guard({ children, path: routePath, component: Component, ...rest }) {
  const userState = useUserState();
  return (
    <Route
      {...rest}
      render={props => {
        if (!userState.uid) {
          return <Redirect to="/login" />;
        }

        return <Component {...props} />;
      }}
    />
  );
}
