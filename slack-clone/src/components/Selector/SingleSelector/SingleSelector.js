import genClass from "../../../helpers/genClass";
import { PointerImg } from "../../Pointer/Pointer";
import { MdContacts } from "react-icons/md";
import React from "react";
import useSingleSelect from "./useSingleSelect";
import { motion } from "framer-motion";

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
          autoComplete="off"
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
        <motion.div
          {...$("selection")}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          exit={{ opacity: 0, x: -20 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}
