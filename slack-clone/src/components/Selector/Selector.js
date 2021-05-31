import genClass, { toggler as $t } from "../../helpers/genClass";
import useSelectorLogic from "./useSelectorLogic";
import Pointer from "../Pointer/Pointer";
import { AiOutlineFileSearch } from "react-icons/ai";

export default function Selector({ propStyles, mods, multiple }) {
  console.log("Selector");
  const { inputRef, handleChange, peopleDispatch, fieldValue, searchItems, userId } =
    useSelectorLogic(multiple);

  const linkAction = uid => e => {
    if (multiple) {
      e.preventDefault();
      peopleDispatch({ type: "mark person", payload: uid });
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
                  propStyles={$("pointer").className}
                  linkAction={linkAction(item.uid)}
                  mods={{
                    text: ["selector"],
                    icon: ["left"],
                    pointer: [$t(item.checked, "active"), "selector"]
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
