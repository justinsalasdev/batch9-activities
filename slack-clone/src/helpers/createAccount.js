import { auth } from "../firebase/firebase";
import isClean from "./isClean";

export default function createAccount(formData, setLoading, setAuthError, history) {
  if (isClean(Object.values(formData.errors))) {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(userCredential => {
        // Signed in
        //no need to run onAuthState updates context value upon signup
        // userDispatch({ type: "save user", payload: getUserFields(userCredential.user) });
        setLoading(false);
        history.push("/");

        // ...
      })
      .catch(err => {
        setAuthError(err.message);
        setLoading(false);
      });
  } else {
    console.log(formData);
    return;
  }
}
