import genClass, { toggler as $t } from "../../helpers/genClass";
import useSelectorLogic from "./useSelectorLogic";
import Pointer, { PointerOption } from "../Pointer/Pointer";
import { AiOutlineFileSearch } from "react-icons/ai";
import React from "react";

export default React.memo(function Selector({ propStyles, mods, multiple, liftState }) {
  console.log("Selector");
  const { inputRef, handleChange, compDispatch, compState, fieldValue, searchItems, userId } =
    useSelectorLogic(multiple);

  const optionAction = uid => e => {
    if (multiple) {
      e.preventDefault();
      compDispatch({ type: "toggle person", payload: uid });
    }
  };

  const $ = genClass({ block: "selector", mods, propStyles });
  return (
    <div {...$()}>
      <div {...$("input")}>
        <label htmlFor="selector__field" {...$("label")}>
          <AiOutlineFileSearch />
        </label>
        <input
          spellCheck={false}
          ref={inputRef}
          {...$("field")}
          onChange={handleChange}
          id="selector__field"
          {...$("field")}
          value={fieldValue || ""}
        />
      </div>

      <div {...$("list-ref")}>
        <ul {...$("list")}>
          {searchItems.map(({ item }) => {
            return (
              <li {...$("item")} key={item.uid}>
                <PointerOption //inside is <Link/> from 'react-router
                  text={item.name}
                  icon="picture"
                  propStyles={$("pointer").className}
                  optionAction={optionAction(item.uid)}
                  mods={{
                    link: ["selector"],
                    text: ["selector"],
                    icon: ["left"],
                    pointer: [$t(compState.selected.includes(item.uid), "active"), "selector"]
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
