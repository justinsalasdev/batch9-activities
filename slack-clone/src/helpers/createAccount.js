import { auth } from "../firebase/firebase";
import isClean from "./isClean";

export default async function createAccount(formData, setLoading, setAuthError, history) {
  try {
    if (isClean(Object.values(formData.errors))) {
      await auth.createUserWithEmailAndPassword(formData.email, formData.password);
      //no need to run onAuthState updates context value upon signup
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
