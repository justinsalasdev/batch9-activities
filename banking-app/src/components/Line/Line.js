import genClass from "../../helpers/style/genClass";
import Icon from "../Icon/Icon";
import { useEffect, useState } from "react";

//line migration - ok
export default function Line({
  id,
  type,
  placeholder,
  validator,
  formData,
  ps,
  mods
}) {
  console.log("Line");
  const [fieldValue, setFieldValue] = useState("_initial");
  const fieldError = validator(fieldValue, id);
  formData[id] = fieldValue;
  const $ = genClass({ block: "line", ps, mods });

  function handleChange(e) {
    setFieldValue(e.target.value);
  }

  useEffect(() => {
    setFieldValue("_initial");
  }, [placeholder]);

  return (
    <div {...$()}>
      <div {...$("div")}>
        <label htmlFor={"line__field--" + id} {...$("label")}>
          <Icon type={id} ps={$("icon").className} />
        </label>
        <input
          spellCheck="off"
          autoComplete="off"
          value={fieldValue === "_initial" ? "" : fieldValue}
          onChange={handleChange}
          type={type}
          id={"line__field--" + id}
          name={id}
          {...$("field")}
          placeholder={placeholder}
        />
      </div>

      <span {...$("toolkit")}>
        {fieldError === "initial" ? "" : fieldError}
      </span>
    </div>
  );
}
