import { auth } from "../firebase/firebase";
import getUserFields from "./getUserFields";
import isClean from "./isClean";

export default function createAccount(formData, setLoading, userDispatch, setAuthError) {
  if (isClean(Object.values(formData.errors))) {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(userCredential => {
        // Signed in
        userDispatch({ type: "save user", payload: getUserFields(userCredential.user) });
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
