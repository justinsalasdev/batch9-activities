import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import genClass from "../../helpers/genClass";
import NavLink from "../NavLink/NavLink";

export default function Menu({ withAdder, name, entries, propStyles }) {
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
          {withAdder && (
            <li {...$("item")}>
              <NavLink
                to={`/add${name}`}
                text={`Add ${name.toLowerCase()}`}
                icon="plus"
                mods={{ action: ["none"], icon: ["left"] }}
              />
            </li>
          )}
          {entries.map((entry, index) => {
            return (
              <li {...$("item")} key={entry.uid}>
                <NavLink
                  text={entry.name}
                  icon="picture"
                  to={{
                    pathname: `/${name.toLowerCase()}/${entry.uid}`,
                    state: { name: entry.name }
                  }}
                  mods={{ action: ["none"], icon: ["left"] }}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

//text, icon, propStyles, mods, to

// function NoMenu() {
//   const $ = genClass({ block: "menu", menu: ["none"] });
//   return <div {...$()}></div>;
// }
