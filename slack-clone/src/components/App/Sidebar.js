import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <div className="profile">
          <div className="profile__image">IMAGE</div>
          <div className="profile__name">NAME</div>
        </div>

        {/* <div className></div> */}
        <NavList name="Channels" entries={["Channel 1", "Channel 2", "Channel 3", "Channel 4"]} />
        <NavList name="DMs" entries={["DM1", "DM2", "DM3", "DM4"]} />
      </nav>
    </div>
  );
}

function NavList({ name, entries }) {
  const [isListExpanded, expandList] = useState(false);
  return (
    <>
      <div className="sidebar__actions">
        <button className="sidebar__menu" onClick={() => expandList(state => !state)}>
          <IoIosArrowDropdownCircle /> <span>{name}</span>
        </button>
        <button className="sidebar__add">
          <AiOutlinePlus />
        </button>
      </div>

      {isListExpanded && (
        <ul className="directs">
          {entries.map((entry, index) => {
            return <li key={index}>{entry}</li>;
          })}
        </ul>
      )}
    </>
  );
}
