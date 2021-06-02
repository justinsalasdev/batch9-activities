import genClass from "../../helpers/genClass";
import { MdPersonAdd } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Selector, { SelectorPointer } from "../Selector/Selector";
import { useEffect, useState } from "react";

export default function ChatInfo({ name, propStyles }) {
  console.log("Chat Info");
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
      )) || <SelectorPointer mods={{ list: ["single"] }} />}
    </div>
  );
}

function ChatName() {
  return <div>ChatName</div>;
}
