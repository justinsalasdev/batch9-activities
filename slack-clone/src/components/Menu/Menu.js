import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import useUserState from "../../hooks/user/useUserState";
import LineForm from "../LineForm/LineForm";
import createChannelSaver from "../../hooks/createChannelSaver";

export default function Menu({ name, entries }) {
  console.log("Menu");
  const [isAdding, setAdding] = useState(false);
  const [isListExpanded, expandList] = useState(false);
  const { uid } = useUserState();
  console.log(isAdding);

  if (!uid) {
    return <NoMenu />;
  }

  return (
    <div className="menu">
      <div className="menu__actions">
        <button
          className="menu__expander"
          onClick={() => {
            expandList(state => !state);
            setAdding(false);
          }}
        >
          <IoIosArrowDropdownCircle /> <span className="menu__name">{name}</span>
        </button>
        <button
          className="menu__adder"
          onClick={() => {
            if (!isListExpanded) {
              expandList(true);
              setAdding(true);
            } else {
              setAdding(true);
            }
          }}
        >
          <AiOutlinePlus />
        </button>
      </div>

      {isListExpanded && (
        <ul className="menu__items">
          {isAdding && <LineForm customHook={createChannelSaver("Name", setAdding)} />}
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
