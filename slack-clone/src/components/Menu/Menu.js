import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import useUserState from "../../hooks/user/useUserState";

export default function Menu({ name, entries }) {
  console.log("Menu");
  const [isListExpanded, expandList] = useState(false);
  const { uid } = useUserState();

  if (!uid) {
    return <NoMenu />;
  }

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

function NoMenu() {
  return <div className="menu--none"></div>;
}
