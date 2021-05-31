import { useState } from "react";
import genClass from "../../helpers/genClass";

export default function Person({ propStyles, mods, name, personId }) {
  const [isChecked, setCheck] = useState(false);
  console.log(isChecked);

  const $ = genClass({ block: "person", propStyles, mods });
  return (
    <div {...$("container")}>
      <div {...$()}>
        <input
          {...$("checkbox")}
          id={`person__checkbox--${personId}`}
          type="checkbox"
          onChange={() => setCheck(state => !state)}
          checked={isChecked}
        />
        <label {...$("label")} htmlFor={`person__checkbox--${personId}`}>
          {name}
        </label>
      </div>
    </div>
  );
}
