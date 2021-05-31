import genClass from "../../helpers/genClass";
import { MdPersonAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import Selector from "../Selector/Selector";
import { useState } from "react";

export default function ChatInfo({ name, propStyles, chatType }) {
  const [isSelecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState({});
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
      )) ||
        (chatType !== "channels" && <Selector mods={{ list: ["single"] }} />) || <ChatName />}

      {chatType === "channels" && (
        <div {...$("actions")}>
          <div {...$("number")}>9</div>
          <button {...$("add")} onClick={() => setSelecting(state => !state)}>
            <MdPersonAdd />
          </button>
          <button>create</button>
          {isSelecting && (
            <Selector
              multiple
              propStyles={$("selector").className}
              mods={{ selector: ["multiple"], list: ["multiple"], "list-ref": ["multiple"] }}
            />
          )}
        </div>
      )}
    </div>
  );
}

function ChatName() {
  return <div>Channel Name</div>;
}
