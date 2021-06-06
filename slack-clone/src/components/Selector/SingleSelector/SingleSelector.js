import genClass from "../../../helpers/genClass";
import { PointerImg } from "../../Pointer/Pointer";
import { MdContacts } from "react-icons/md";
import React from "react";
import useSingleSelect from "./useSingleSelect";

export function SingleSelector({ mods, propStyles }) {
  console.log("SingleSelector");
  const { inputRef, handleChange, fieldValue, searchItems, userId } = useSingleSelect();

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
          {...$("field")}
          value={fieldValue || ""}
        />
      </div>

      <div {...$("list-ref")}>
        <div {...$("selection")}>
          <div {...$("scroller")}>
            <ul {...$("list")}>
              {searchItems.map(({ item }) => {
                return (
                  <li {...$("item")} key={item.uid}>
                    <PointerImg //inside is <Link/> from 'react-router
                      to={{
                        pathname: `/people/${item.uid}`,
                        state: {
                          chatName: item.name,
                          userId
                        }
                      }}
                      text={item.name}
                      photoURL={item.photoURL}
                      propStyles={$("pointer").className}
                      mods={{
                        link: ["selector"],
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
    </div>
  );
}
