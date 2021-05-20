import { auth } from "../../firebase/firebase";
import isClean from "../../helpers/isClean";
import useLoadUpdater from "../../hooks/userLoadUpdater";
import Line from "../Line/Line";

const initialState = { _e: false, _w: false, _c: false };
const formData = { errors: {} };

export default function Form() {
  const [{ _e, _w, _c }, updateLoadState] = useLoadUpdater(initialState);

  function handleSubmit(e) {
    e.preventDefault();

    if (isClean(Object.values(formData.errors))) {
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
    } else {
      console.log(formData);
    }
  }

  const emailConfig = {
    id: "email",
    type: "text",
    formData: formData,
    placeholder: "Email"
  };

  const passwordConfig = {
    id: "password",
    type: "password",
    formData: formData,
    placeholder: "Password"
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form__info">Create Account</p>
      <div className="form__fields">
        <Line {...emailConfig} />
        <Line {...passwordConfig} />
      </div>
      <button className="form__action" type="submit">
        {_w ? "..." : "Submit"}
      </button>
    </form>
  );
}
