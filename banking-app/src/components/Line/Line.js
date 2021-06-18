import { useState } from "react";
import genClass from "../../helpers/genClass";
import Icon from "../Icon/Icon";

//id =
//type =
//placeholder =
//validator = customHook that returns fieldError <String>
export default function Line({ id, type, placeholder, validator, ps }) {
  console.log("Line");
  const [fieldValue, setFieldValue] = useState("");
  const fieldError = validator(fieldValue);
  const $ = genClass({ block: "line", ps });

  function handleChange(e) {
    setFieldValue(e.target.value);
  }

  return (
    <div {...$()}>
      <div {...$("div")}>
        <label htmlFor={"line__field--" + id} {...$("label")}>
          <Icon type={id} ps={$("icon").className} />
        </label>
        <input
          spellCheck="off"
          autoComplete="off"
          value={fieldValue}
          onChange={handleChange}
          type={type}
          id={"line__field--" + id}
          name={id}
          {...$("field")}
          placeholder={placeholder}
        />
      </div>

      <span {...$("toolkit")}>{fieldError}</span>
    </div>
  );
}
