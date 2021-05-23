import { auth } from "../firebase/firebase";

export default function signOut(history) {
  auth
    .signOut()
    .then(() => {
      //no need to run because onAuthStateChanged will delete user state
      // userDispatch({ type: "delete user" });
      history.push("/login");
    })
    .catch(err => {
      console.log(err);
    });
}
