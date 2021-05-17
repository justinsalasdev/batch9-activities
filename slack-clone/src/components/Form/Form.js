import { useState } from "react";
import { auth } from "../../firebase/firebase";
import useAuthDispatcher from "../../hooks/auth/useAuthDispatcher";
import useLoadUpdater from "../../hooks/userLoadUpdater";

const initialState = { _e: false, _w: false, _c: false };

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useLoadUpdater(initialState);
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

    dispatch({ type: "wait" });
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        dispatch({ type: "complete" });
        console.log(userCredential);
        // ...
      })
      .catch(err => {
        dispatch({
          type: "error",
          error: err
        });
      });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        value={email || ""}
        onChange={function (e) {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password || ""}
        onChange={function (e) {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Login</button>

      <button type="button" onClick={signOut}>
        Logout
      </button>
    </form>
  );
}
