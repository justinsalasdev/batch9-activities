import React, { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import FieldValidator from "../../helpers/FieldValidator";
import genClass from "../../helpers/genClass";

const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />
};

const fieldValidator = new FieldValidator();
const $ = genClass("line", {});

export default React.memo(function Line(props) {
  console.log("Line");
  const { id, type, placeholder, formData } = props;
  const [state, setState] = useState("");
  const lineRef = useRef();

  useEffect(() => {
    //update formData every render
    formData[id] = state;
    formData.errors[id] = fieldValidator.error;
    lineRef.current.classList.toggle("error", fieldValidator.error?.length > 0);
  }); //effect run on every render

  return (
    <div ref={lineRef} {...$()}>
      <div {...$("div")}>
        <input
          placeholder={placeholder}
          {...$("field")}
          id={id}
          name={id}
          type={type}
          value={state || ""}
          onChange={function (e) {
            setState(fieldValidator.validateField(e.target.value, id));
          }}
        />
        <label {...$("icon")} htmlFor={id}>
          {icons[id]}
        </label>
      </div>
      <p {...$("toolkit")}>{fieldValidator.error}</p>
    </div>
  );
});
