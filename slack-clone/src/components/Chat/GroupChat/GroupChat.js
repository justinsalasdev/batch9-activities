import genClass from "../../../helpers/genClass";
import ChatBar from "../../ChatBar/ChatBar";
import Messages from "../../Messages/Messages";
import { RiGroup2Fill } from "react-icons/ri";

export default function GroupChat(props) {
  const { propStyles, mods } = props;
  const string = useGroupChat(props);
  const $ = genClass({ block: "chat", propStyles, mods });

  return (
    <div {...$()}>
      <div {...$("info")}>
        <p {...$("name")}>
          <span {...$("icon")}>
            <RiGroup2Fill />
          </span>
          {chatName}
        </p>
      </div>
      <div {...$("scroller")}>
        <Messages propStyles={$("messages").className} />
      </div>
      <ChatBar propStyles={$("bar").className} from={uidFrom} to={uidTo} />
    </div>
  );
}
