import genClass from "../../helpers/genClass";
import useSelectorLogic from "./useSelectorLogic";
import Pointer from "../Pointer/Pointer";
import useUserState from "../../hooks/user/useUserState";

export default function Selector() {
  const { inputRef, handleChange, fieldValue, searchItems } = useSelectorLogic();
  const userState = useUserState();
  const $ = genClass({ block: "selector" });
  return (
    <div {...$()}>
      <div {...$("input")}>
        <label htmlFor="selector__field" {...$("label")}>
          To:{" "}
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
            console.log(item);
            return (
              <li {...$("item")} key={item.uid}>
                <Pointer //inside is <Link/> from 'react-router
                  text={item.name}
                  icon="picture"
                  to={{
                    pathname: `/people/${item.uid}`,
                    state: {
                      chatName: item.name,
                      userId: userState.uid
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
