import genClass from "../../../helpers/genClass";
import Messages from "../../Messages/Messages";
import { MdGroup } from "react-icons/md";
import ChatBar from "../../ChatBar/ChatBar";
import useShoutSender from "../../ChatBar/useShoutSender";
import useGroupChat from "./useGroupChat";

export default function GroupChat(props) {
  const { propStyles, mods } = props;
  const { channelId, channelName, uidFrom, messages } = useGroupChat(props);
  const $ = genClass({ block: "chat", propStyles, mods });

  return (
    <div {...$()}>
      <div {...$("info")}>
        <p {...$("name")}>
          <span {...$("icon")}>
            <MdGroup />
          </span>
          {channelName}
        </p>
      </div>
      <div {...$("scroller")}>
        <Messages propStyles={$("messages").className} messages={messages} />
      </div>
      <ChatBar propStyles={$("bar").className} sender={useShoutSender(uidFrom, channelId)} />
    </div>
  );
}
