import { auth } from "../firebase/firebase";

export default function signOut(authDispatch) {
  auth
    .signOut()
    .then(() => authDispatch({ type: "delete user" }))
    .catch(err => {
      authDispatch({ type: "error", payload: err });
    });
}
