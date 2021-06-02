import genClass, { toggler as $t } from "../../../helpers/genClass";
import { PointerOption } from "../../Pointer/Pointer";
import { MdContacts } from "react-icons/md";
import React from "react";
import useMultiLogic from "./useMultiLogic";

export function MultiSelector({ mods, propStyles }) {
  console.log("SelectorPointer");
  const { inputRef, fieldValue, searchItems, selected, handleChange, compDispatch } =
    useMultiLogic();

  console.log(selected);
  const $ = genClass({ block: "selector", mods, propStyles });
  return (
    <div {...$()}>
      <div {...$("input")}>
        <label htmlFor="selector__field" {...$("label")}>
          <MdContacts />
        </label>
        <input
          spellCheck={false}
          ref={inputRef}
          {...$("field")}
          onChange={handleChange}
          id="selector__field"
          value={fieldValue || ""}
        />
      </div>

      <div {...$("list-ref")}>
        <ul {...$("list")}>
          {searchItems.map(({ item }) => {
            return (
              <li {...$("item")} key={item.uid}>
                <PointerOption //inside is <Link/> from 'react-router
                  //const { text, icon, propStyles, mods, optionAction } = props;
                  optionAction={() => compDispatch({ type: "toggle person", payload: item.uid })}
                  text={item.name}
                  icon="picture"
                  propStyles={$("pointer").className}
                  mods={{
                    link: [$t(selected.includes(item.uid), "active"), "selector"],
                    text: ["selector"],
                    icon: ["left"]
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
