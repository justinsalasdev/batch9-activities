import { useEffect, useRef, useState } from "react";
import { BiSave } from "react-icons/bi";

function Child({ initialName }) {
  const initialLabel = useRef(initialName);
  const labelRef = useRef();
  const [state, setState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!state || state === initialLabel.current) {
      console.log("same");
    }
    initialLabel.current = state; //when displayName is updated in firebase
  }

  return (
    <form className="i-form" onSubmit={handleSubmit}>
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
              labelRef.current.textContent = initialLabel.current;
            }
          }}
          onFocus={() => setState(labelRef.current.textContent)}
          onChange={e => {
            labelRef.current.textContent = e.target.value;
            setState(e.target.value);
          }}
        />
        <label ref={labelRef} htmlFor="name" className="i-form__label">
          {initialLabel.current}
        </label>
      </div>
      <button className="i-form__submit">
        {state && !(state === initialLabel.current) && <BiSave />}
      </button>
    </form>
  );
}

export default function Name() {
  return <Child initialName="User" />;
}
