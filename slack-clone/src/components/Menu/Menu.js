import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import genClass from "../../helpers/genClass";
import { PointerLink } from "../Pointer/Pointer";

export default function Menu({ propStyles, getItems, menuName, adderLink }) {
  console.log("Menu");
  const [isListExpanded, expandList] = useState(false);
  const { menuItems } = getItems();

  const $ = genClass({ block: "menu", propStyles });

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
        <span {...$("text")}>{menuName}</span>
      </button>

      {isListExpanded && (
        <ul {...$("items")}>
          {adderLink && <li {...$("item")}>{adderLink}</li>}
          {menuItems.map(menuItem => {
            return (
              <li {...$("item")} key={menuItem.uid}>
                <PointerLink //inside is <Link/> from 'react-router
                  text={menuItem.name}
                  icon="picture"
                  to={{
                    pathname: `/${menuName.toLowerCase()}/${menuItem.uid}`,
                    state: {
                      chatName: menuItem.name
                    }
                  }}
                  mods={{ link: ["menu"], icon: ["left"] }}
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
