import { motion } from "framer-motion";
import { IoIosChatbubbles } from "react-icons/io";
import genClass from "../../../helpers/genClass";
import ChatBar from "../../ChatBar/ChatBar";
import useLetterSender from "../../ChatBar/useLetterSender";
import Messages from "../../Messages/Messages";
import { SingleSelector } from "../../Selector/SingleSelector/SingleSelector";
import usePrivateChat from "./usePrivateChat";

export default function PrivateChat(props) {
  const { chatName, uidTo, uidFrom, messages } = usePrivateChat(props);
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} {...$("info")}>
        {(chatName && (
          <p {...$("name")}>
            <span {...$("icon")}>
              <IoIosChatbubbles />
            </span>
            <span {...$("text")}>{chatName}</span>
          </p>
        )) || <SingleSelector mods={{ scroller: ["single"] }} />}
      </motion.div>
      <div {...$("scroller")}>
        <Messages propStyles={$("messages").className} messages={messages} />
      </div>
      <ChatBar propStyles={$("bar").className} sender={useLetterSender(uidFrom, uidTo)} />
    </div>
  );
}
