import genClass from "../../../helpers/genClass";
import Messages from "../../Messages/Messages";
import { RiGroup2Fill } from "react-icons/ri";
import ChatBar from "../../ChatBar/ChatBar";
import useShoutSender from "../../ChatBar/useShoutSender";

export default function GroupChat(props) {
  const { propStyles, mods } = props;
  const { channelId, channelName, uidFrom } = useGroupChat(props);
  const $ = genClass({ block: "chat", propStyles, mods });

  return (
    <div {...$()}>
      <div {...$("info")}>
        <p {...$("name")}>
          <span {...$("icon")}>
            <RiGroup2Fill />
          </span>
          {channelName}
        </p>
      </div>
      <div {...$("scroller")}>
        <Messages propStyles={$("messages").className} />
      </div>
      <ChatBar propStyles={$("bar").className} sender={useShoutSender(uidFrom, channelId)} />
    </div>
  );
}
