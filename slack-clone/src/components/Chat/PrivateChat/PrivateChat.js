import { IoIosChatbubbles } from "react-icons/io";
import genClass from "../../../helpers/genClass";
import ChatBar from "../../ChatBar/ChatBar";
import useLetterSender from "../../ChatBar/useLetterSender";
import Messages from "../../Messages/Messages";
import { SingleSelector } from "../../Selector/SingleSelector/SingleSelector";
import usePrivateChat from "./usePrivateChat";

export default function PrivateChat(props) {
  const { chatName, uidTo, uidFrom } = usePrivateChat(props);
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <div {...$("info")}>
        {(chatName && (
          <p {...$("name")}>
            <span {...$("icon")}>
              <IoIosChatbubbles />
            </span>
            {chatName}
          </p>
        )) || <SingleSelector mods={{ scroller: ["single"] }} />}
      </div>
      <div {...$("scroller")}>
        <Messages propStyles={$("messages").className} />
      </div>
      <ChatBar propStyles={$("bar").className} sender={useLetterSender(uidFrom, uidTo)} />
    </div>
  );
}
