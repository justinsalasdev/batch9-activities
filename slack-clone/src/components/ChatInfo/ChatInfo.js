import genClass from "../../helpers/genClass";
import { MdPersonAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";

export default function ChatInfo({ name, withGroup }) {
  const $ = genClass({ block: "chat-info" });
  return (
    <div {...$()}>
      <p {...$("name")}>
        <span {...$("icon")}>
          <IoIosChatbubbles />
        </span>
        {name}
      </p>
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
