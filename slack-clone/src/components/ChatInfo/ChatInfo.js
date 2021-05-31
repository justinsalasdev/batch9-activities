import genClass from "../../helpers/genClass";
import { MdPersonAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import Selector from "../Selector/Selector";

export default function ChatInfo({ name, withGroup, propStyles }) {
  const $ = genClass({ block: "chat-info", propStyles });
  return (
    <div {...$()}>
      {(name && (
        <p {...$("name")}>
          <span {...$("icon")}>
            <IoIosChatbubbles />
          </span>
          {name}
        </p>
      )) || <Selector />}
      {withGroup && (
        <div {...$("div")}>
          <div {...$("number")}>9</div>
          <button {...$("add")}>
            <MdPersonAdd />
          </button>
        </div>
      )}
    </div>
  );
}
