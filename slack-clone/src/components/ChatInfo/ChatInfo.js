import genClass from "../../helpers/genClass";
import { MdPersonAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import Selector from "../Selector/Selector";
import { useEffect, useState } from "react";
import usePeopleDispatcher from "../../hooks/people/usePeopleDispatcher";
import usePeopleState from "../../hooks/people/usePeopleState";

export default function ChatInfo({ name, propStyles, chatType }) {
  console.log("Chat Info");
  const [isSelecting, setSelecting] = useState(false);
  const peopleDispatch = usePeopleDispatcher();
  const peopleState = usePeopleState();
  const numSelected = peopleState.people.filter(person => person.checked).length;
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
        (chatType !== "channels" && <Selector mods={{ list: ["single"] }} />) || <ChatName />}

      {chatType === "channels" && (
        <div {...$("actions")}>
          <div {...$("number")}>{numSelected}</div>
          <button {...$("add")} onClick={() => setSelecting(state => !state)}>
            {isSelecting ? <ImCancelCircle /> : <MdPersonAdd />}
          </button>
          <button onClick={() => peopleDispatch({ type: "reset" })}>create</button>
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
