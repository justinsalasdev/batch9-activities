import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import useUserState from "../../hooks/user/useUserState";
import genClass from "../../helpers/genClass";
import LineForm from "../LineForm/LineForm";

export default function Menu({ name, entries, type, propStyles }) {
  console.log("Menu");

  const [isAdding, setAdding] = useState(false);
  const [isListExpanded, expandList] = useState(false);
  const { uid } = useUserState();

  const lineFormMods = {
    field: ["channel"],
    label: ["channel"]
  };

  const $ = genClass({ block: "menu", propStyles });

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
              setAdding(state => !state);
            } else {
              expandList(true);
              setAdding(state => !state);
            }
          }}
        >
          <AiOutlinePlus />
        </button>
      </div>

      {isListExpanded && (
        <ul {...$("items")}>
          <li {...$("item")}>
            {isAdding && (
              <LineForm
                type={type}
                mods={lineFormMods}
                initialName="Enter name"
                setAdding={setAdding}
              />
            )}
          </li>

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
  const $ = genClass({ block: "menu", menu: ["none"] });
  return <div {...$()}></div>;
}
