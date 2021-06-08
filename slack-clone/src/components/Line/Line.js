import React, { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import FieldValidator from "../../helpers/FieldValidator";
import genClass, { toggler as $t } from "../../helpers/genClass";

const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />
};

const fieldValidator = new FieldValidator();

export default React.memo(function Line(props) {
  console.log("Line");
  const { id, type, placeholder, formData } = props;
  const [state, setState] = useState("");
  const labelRef = useRef();
  const isError = fieldValidator.error?.length > 0;

  useEffect(() => {
    //update formData every render
    formData[id] = state;
    formData.errors[id] = fieldValidator.error;
  }); //effect run on every render

  useEffect(() => {
    labelRef.current.focus();
  }, []);

  const $ = genClass({ block: "line", mods: { line: [$t(isError, "error")] } });

  return (
    <div {...$()}>
      <div {...$("div")}>
        <input
          autoComplete="off"
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
        <label ref={labelRef} {...$("icon")} htmlFor={id}>
          {icons[id]}
        </label>
      </div>
      <p {...$("toolkit")}>{fieldValidator.error}</p>
    </div>
  );
});
