import { useRef, useState } from "react";
import { BiSave } from "react-icons/bi";
import { auth } from "../../firebase/firebase";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";

export default function Name({ initialName }) {
  console.log("Name");
  const userDispatch = useUserDispatcher();
  const labelRef = useRef();
  const [state, setState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!state || state === initialName) {
      labelRef.current.previousElementSibling.blur();
    } else {
      const user = auth.currentUser;
      user
        .updateProfile({
          displayName: state
        })
        .then(function () {
          userDispatch({ type: "update name", payload: state }); //rerenders <Name/> with new initialName
          labelRef.current.previousElementSibling.blur();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <form className="i-form profile__name" onSubmit={handleSubmit}>
      <div className="i-form__div">
        <input
          spellCheck="false"
          className="i-form__field"
          type="text"
          id="name"
          value={state || ""}
          onBlur={() => {
            if (state) {
              labelRef.current.textContent = state;
            } else {
              //use initialLabel when input doesn't have any content
              labelRef.current.textContent = initialName;
            }
          }}
          onFocus={() => setState(labelRef.current.textContent)}
          onChange={e => {
            labelRef.current.textContent = e.target.value;
            setState(e.target.value);
          }}
        />
        <label ref={labelRef} htmlFor="name" className="i-form__label">
          {initialName || "User"}
        </label>
      </div>

      {state && !(state === initialName) && (
        <button className="i-form__submit">
          <BiSave />
        </button>
      )}
    </form>
  );
}
