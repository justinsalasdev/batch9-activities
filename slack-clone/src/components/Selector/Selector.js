import genClass from "../../helpers/genClass";
import useSelectorLogic from "./useSelectorLogic";
import Pointer from "../Pointer/Pointer";
import { AiOutlineFileSearch } from "react-icons/ai";

export default function Selector({ propStyles, mods, multiple }) {
  console.log("Selector");
  const { inputRef, handleChange, fieldValue, searchItems, userId } = useSelectorLogic(multiple);

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
                <Pointer //inside is <Link/> from 'react-router
                  text={item.name}
                  icon="picture"
                  to={{
                    pathname: `/people/${item.uid}`,
                    state: {
                      chatName: item.name,
                      userId
                    }
                  }}
                  mods={{ action: ["none"], icon: ["left"] }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// text, icon, propStyles, mods, to
