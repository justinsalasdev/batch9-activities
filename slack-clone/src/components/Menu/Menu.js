import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import genClass from "../../helpers/genClass";
import NavLink from "../NavLink/NavLink";

export default function Menu({ name, entries, propStyles }) {
  console.log("Menu");

  const [isListExpanded, expandList] = useState(false);

  const $ = genClass({ block: "menu", propStyles });

  //   if (!uid) {
  //     return <NoMenu />;
  //   }

  return (
    <div {...$()}>
      <button
        {...$("expander")}
        onClick={() => {
          expandList(state => !state);
        }}
      >
        <span {...$("icon")}>
          <IoIosArrowDropdown />
        </span>
        <span {...$("text")}>{name}</span>
      </button>

      {isListExpanded && (
        <ul {...$("items")}>
          <li {...$("item")}>
            <NavLink
              to={`/add${name}`}
              text={`Add ${name.toLowerCase()}`}
              icon="plus"
              mods={{ action: ["none"], icon: ["left"] }}
            />
          </li>
          {entries.map((entry, index) => {
            return (
              <li {...$("item")} key={index}>
                <NavLink {...entry} mods={{ action: ["none"], icon: ["left"] }} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// function NoMenu() {
//   const $ = genClass({ block: "menu", menu: ["none"] });
//   return <div {...$()}></div>;
// }
