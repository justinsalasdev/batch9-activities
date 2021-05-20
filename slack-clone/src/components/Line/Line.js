import React, { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import FieldValidator from "../../helpers/FieldValidator";

const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />
};

const fieldValidator = new FieldValidator();

export default React.memo(function Line(props) {
  const { id, type, placeholder, formData } = props;
  const [state, setState] = useState("");
  const lineRef = useRef();

  console.log("renders");

  //update formData every render
  const err = fieldValidator.error;
  formData[id] = state;
  formData.errors[id] = err;

  useEffect(() => {
    lineRef.current.classList.toggle("error", err?.length > 0);
  }, [err]);

  return (
    <div ref={lineRef} className="line">
      <div className="line__div">
        <input
          placeholder={placeholder}
          className={`line__field`}
          id={id}
          name={id}
          type={type}
          value={state || ""}
          onChange={function (e) {
            setState(fieldValidator.validateField(e.target.value, id));
          }}
        />
        <label className="line__icon" htmlFor={id}>
          {icons[id]}
        </label>
      </div>
      <p className="line__toolkit">{err}</p>
    </div>
  );
});
