import { auth } from "../../firebase/firebase";
import useAuthDispatcher from "../../hooks/auth/useAuthDispatcher";
import useLoadUpdater from "../../hooks/userLoadUpdater";
import Line from "../Line/Line";

const initialState = { _e: false, _w: false, _c: false };
const formData = { email: "", password: "", error: "" };

function setFormData(key, value, errorVal) {
  formData[key] = value;
  formData.error = errorVal;
}

export default function Form() {
  const [, updateLoadState] = useLoadUpdater(initialState);
  const authDispatch = useAuthDispatcher();

  function signOut() {
    auth
      .signOut()
      .then(() => console.log("logged out"))
      .catch(err => {
        authDispatch({ type: "error", payload: err });
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.error) {
      console.log(formData);
      return;
    }

    updateLoadState({ type: "wait" });
    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(userCredential => {
        // Signed in
        updateLoadState({ type: "complete" });
        console.log(userCredential);
        // ...
      })
      .catch(err => {
        updateLoadState({
          type: "error",
          error: err
        });
      });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Line id="email" type="text" setFormData={setFormData} />
      <Line id="password" type="password" setFormData={setFormData} />

      <button type="submit">Login</button>
    </form>
  );
}
