import { auth } from "../firebase/firebase";
import isClean from "./isClean";

export default function authenticate(formData, setLoading, authDispatch, setAuthError) {
  if (isClean(Object.values(formData.errors))) {
    setLoading(true);
    auth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(userCredential => {
        // Signed in
        authDispatch({ type: "save user", payload: userCredential.user });
        setLoading(false);

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
