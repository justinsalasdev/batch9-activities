import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import useUserState from "../../hooks/user/useUserState";
import genClass from "../../helpers/genClass";

export default function Menu({ name, entries, type }) {
  console.log("Menu");

  const [isAdding, setAdding] = useState(false);
  const [isListExpanded, expandList] = useState(false);
  const { uid } = useUserState();

  const lineFormMods = {
    field: ["channel"],
    label: ["channel"]
  };

  const $ = genClass("menu", {});

  if (!uid) {
    return <NoMenu />;
  }

  return (
    <div {...$()}>
      <div {...$("actions")}>
        <button
          {...$("expander")}
          onClick={() => {
            expandList(state => !state);
            setAdding(false);
          }}
        >
          <IoIosArrowDropdownCircle /> <span {...$("name")}>{name}</span>
        </button>
        <button
          {...$("adder")}
          onClick={() => {
            if (isListExpanded) {
              setAdding(true);
            } else {
              expandList(true);
              setAdding(true);
            }
          }}
        >
          <AiOutlinePlus />
        </button>
      </div>

      {isListExpanded && (
        <ul {...$("items")}>
          {/* {isAdding && (
            <LineForm
              type={type}
              mods={lineFormMods}
              customHook={createChannelSaver("Name", setAdding)}
            />
          )} */}

          {entries.map((entry, index) => {
            return (
              <li {...$("item")} key={index}>
                {entry}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function NoMenu() {
  const $ = genClass("menu", { menu: ["none"] });
  return <div {...$()}></div>;
}
