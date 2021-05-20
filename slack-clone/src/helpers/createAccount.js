import { auth } from "../firebase/firebase";
import isClean from "./isClean";

export default function createAccount(formData, setLoading, authDispatch) {
  if (isClean(Object.values(formData.errors))) {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(userCredential => {
        // Signed in
        authDispatch({ type: "save user", payload: userCredential.user });
        setLoading(false);

        // ...
      })
      .catch(err => {
        authDispatch({ type: "error", payload: err });
        setLoading(false);
      });
  } else {
    console.log(formData);
    return;
  }
}
