import genClass from "../../helpers/genClass";
import { MdPersonAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";

export default function ChatInfo() {
  const $ = genClass({ block: "chat-info" });
  return (
    <div {...$()}>
      <p {...$("name")}>
        <span {...$("icon")}>
          <IoIosChatbubbles />
        </span>
        chat title
      </p>
      <div {...$("div")}>
        <div {...$("number")}>9</div>
        <button {...$("add")}>
          <MdPersonAdd />
        </button>
      </div>
    </div>
  );
}
