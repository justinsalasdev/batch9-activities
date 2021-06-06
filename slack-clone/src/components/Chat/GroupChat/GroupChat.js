import genClass from "../../../helpers/genClass";
import Messages from "../../Messages/Messages";
import { MdGroup } from "react-icons/md";
import ChatBar from "../../ChatBar/ChatBar";
import useShoutSender from "../../ChatBar/useShoutSender";
import useGroupChat from "./useGroupChat";
import Members from "../../Members/Members";
import { motion } from "framer-motion";

export default function GroupChat(props) {
  const { propStyles, mods } = props;
  const { channelId, channelName, uidFrom, messages, membersData } = useGroupChat(props);
  const $ = genClass({ block: "chat", propStyles, mods: { ...mods, info: ["group"] } });

  return (
    <div {...$()}>
      <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} {...$("info")}>
        <p {...$("name")}>
          <span {...$("icon")}>
            <MdGroup />
          </span>
          <span {...$("text")}>{channelName}</span>
        </p>
        <Members membersData={membersData} propStyles={$("members").className} />
      </motion.div>

      <div {...$("scroller")}>
        <Messages propStyles={$("messages").className} messages={messages} />
      </div>
      <ChatBar propStyles={$("bar").className} sender={useShoutSender(uidFrom, channelId)} />
    </div>
  );
}
