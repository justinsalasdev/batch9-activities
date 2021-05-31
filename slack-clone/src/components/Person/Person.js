import { useState } from "react";
import genClass from "../../helpers/genClass";

export default function Person({ propStyles, mods }) {
  const [isChecked, setCheck] = useState(false);
  console.log(isChecked);
  const $ = genClass({ block: "person", propStyles, mods });
  return (
    <div {...$("container")}>
      <div {...$()}>
        <input
          {...$("checkbox")}
          id="person__checkbox"
          type="checkbox"
          onClick={() => setCheck(state => !state)}
          checked={isChecked}
        />
        <label {...$("label")} htmlFor="person__checkbox">
          Person
        </label>
      </div>
    </div>
  );
}
