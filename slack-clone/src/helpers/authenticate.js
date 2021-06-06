import { auth, db } from "../firebase/firebase";
import isClean from "./isClean";

export default async function authenticate(formData, setLoading, setAuthError, history) {
  try {
    if (isClean(Object.values(formData.errors))) {
      setLoading(true);
      const {
        user: { uid, photoURL, displayName }
      } = await auth.signInWithEmailAndPassword(formData.email, formData.password);
      //no need to run because onAuthState on App runs when Auth Changes
      // userDispatch({ type: "save user", payload: getUserFields(userCredential.user) });
      await db
        .collection("Users")
        .doc(uid)
        .set({ uid, photoURL, name: displayName }, { merge: true });
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
