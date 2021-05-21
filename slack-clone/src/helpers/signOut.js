import { auth } from "../firebase/firebase";

export default function signOut(userDispatch) {
  auth
    .signOut()
    .then(() => userDispatch({ type: "delete user" }))
    .catch(err => {
      console.log(err);
    });
}
