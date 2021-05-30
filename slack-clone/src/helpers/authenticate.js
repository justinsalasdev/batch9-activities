import { auth } from "../firebase/firebase";
import isClean from "./isClean";

export default async function authenticate(formData, setLoading, setAuthError, history) {
  try {
    if (isClean(Object.values(formData.errors))) {
      setLoading(true);
      await auth.signInWithEmailAndPassword(formData.email, formData.password);
      //no need to run because onAuthState on App runs when Auth Changes
      // userDispatch({ type: "save user", payload: getUserFields(userCredential.user) });
      setLoading(false);
      history.push("/");
    } else {
      console.log(formData);
      return;
    }
  } catch (err) {
    setAuthError(err.message);
    setLoading(false);
  }
}
