import genClass from "../../helpers/genClass";
import { MdPersonAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Selector, { SelectorPointer } from "../Selector/Selector";
import { useEffect, useState } from "react";

export default function ChatInfo({ name, propStyles, chatType }) {
  console.log("Chat Info");
  const [isSelecting, setSelecting] = useState(false);
  const $ = genClass({ block: "chat-info", propStyles });

  useEffect(() => {
    setSelecting(false);
  }, [name]);

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
        (chatType !== "channels" && <SelectorPointer mods={{ list: ["single"] }} />) || (
          <ChatName />
        )}

      {chatType === "channels" && (
        <div {...$("actions")}>
          <div {...$("number")}>{9}</div>
          <button {...$("add")} onClick={() => setSelecting(state => !state)}>
            {isSelecting ? <MdCancel /> : <MdPersonAdd />}
          </button>
          <button>create</button>
          {isSelecting && (
            <SelectorPointer
              liftState
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
  return <div>ChatName</div>;
}
