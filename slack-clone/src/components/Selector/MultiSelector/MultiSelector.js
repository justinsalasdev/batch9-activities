import genClass, { toggler as $t } from "../../../helpers/genClass";
import { PointerOption } from "../../Pointer/Pointer";
import { FiSearch } from "react-icons/fi";
import React from "react";
import useMultiLogic from "./useMultiLogic";
import { IoMdExit } from "react-icons/io";
import { BiSelectMultiple, BiReset } from "react-icons/bi";

export function MultiSelector({ mods, propStyles }) {
  console.log("SelectorPointer");
  const {
    inputRef,
    fieldValue,
    searchItems,
    selected,
    isOptionsOpen,
    openOptions,
    handleChange,
    handleClose,
    handleReset,
    handleSelectAll,
    togglePerson
  } = useMultiLogic();

  //derived from state
  const numResults = searchItems.length;

  const $ = genClass({ block: "selector", mods, propStyles });
  return (
    <div {...$()}>
      <div {...$("actions")}>
        <button onClick={handleReset}>
          <BiReset />
        </button>
        <button onClick={handleSelectAll}>
          <BiSelectMultiple />
        </button>
        <button onClick={handleClose}>
          <IoMdExit />
        </button>
      </div>

      <div {...$("input")}>
        <label htmlFor="selector__field" {...$("label")}>
          <FiSearch />
        </label>
        <input
          onFocus={openOptions}
          spellCheck={false}
          ref={inputRef}
          {...$("field")}
          onChange={handleChange}
          id="selector__field"
          value={fieldValue || ""}
        />
      </div>

      {isOptionsOpen && (
        <div {...$("list-ref")}>
          <div {...$("selection")}>
            <div {...$("scroller")}>
              <ul {...$("list")}>
                {searchItems.map(({ item }) => {
                  return (
                    <li {...$("item")} key={item.uid}>
                      <PointerOption //Link converted to div
                        optionAction={togglePerson(item.uid)}
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
        </div>
      )}
    </div>
  );
}
