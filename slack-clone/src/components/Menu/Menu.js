import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import genClass from "../../helpers/genClass";

export default function Menu({ propStyles, menuName, renderItems, getItems }) {
  console.log("Menu");
  const [isListExpanded, expandList] = useState(false);
  const items = getItems();

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

      {isListExpanded && renderItems(items)}
    </div>
  );
}
