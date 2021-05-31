import genClass from "../../helpers/genClass";
import Messages from "../Messages/Messages";
import ChatBar from "../ChatBar/ChatBar";
import ChatInfo from "../ChatInfo/ChatInfo";
import useChatLogic from "./useChatLogic";

//user from state  -to from userId
export default function Chat(props) {
  const { status, chatName, chatType, uidFrom, uidTo } = useChatLogic(props);
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <ChatInfo
        propStyles={$("info").className}
        name={chatName} /*if no chatName => means new*/
        chatType={chatType}
      />
      {status === "ready" && (
        <div {...$("scroller")}>
          <Messages />
        </div>
      )}
      {status === "ready" && <ChatBar propStyles={$("bar").className} from={uidFrom} to={uidTo} />}
    </div>
  );
}

/*
TODO: if name is supplied use that name
if no name is supplied, find out the recepient
 */
//props.location.state.name
