import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

export default function Menu({ name, entries }) {
  console.log("Menu");
  const [isListExpanded, expandList] = useState(false);
  return (
    <div className="menu">
      <div className="menu__actions">
        <button className="menu__expander" onClick={() => expandList(state => !state)}>
          <IoIosArrowDropdownCircle /> <span className="menu__name">{name}</span>
        </button>
        <button className="menu__adder">
          <AiOutlinePlus />
        </button>
      </div>

      {isListExpanded && (
        <ul className="menu__items">
          {entries.map((entry, index) => {
            return (
              <li className="menu__item" key={index}>
                {entry}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
