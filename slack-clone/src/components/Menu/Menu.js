import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import genClass from "../../helpers/genClass";
import Pointer from "../Pointer/Pointer";

export default function Menu({ withAdder, userId, menuName, menuItems, propStyles }) {
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
          if (menuItems?.length) {
            expandList(state => !state);
          } else return;
        }}
      >
        <span {...$("icon")}>
          <IoIosArrowDropdown />
        </span>
        <span {...$("text")}>{menuName}</span>
      </button>

      {isListExpanded && (
        <ul {...$("items")}>
          {withAdder && (
            <li {...$("item")}>
              <Pointer
                to={`/add${menuName}`}
                text={`Add ${menuName.toLowerCase()}`}
                icon="plus"
                mods={{ action: ["none"], icon: ["left"] }}
              />
            </li>
          )}
          {menuItems.map(menuItem => {
            return (
              <li {...$("item")} key={menuItem.uid}>
                <Pointer //inside is <Link/> from 'react-router
                  text={isSelf(menuItem, userId)}
                  icon="picture"
                  to={{
                    pathname: `/${menuName.toLowerCase()}/${menuItem.uid}`,
                    state: {
                      chatName: `${isSelf(menuItem, userId)}`,
                      userId: userId
                    }
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

function isSelf(menuItem, userId) {
  return menuItem.uid === userId ? "Yourself" : menuItem.name;
}
//text, icon, propStyles, mods, to

// function NoMenu() {
//   const $ = genClass({ block: "menu", menu: ["none"] });
//   return <div {...$()}></div>;
// }
