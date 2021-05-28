import genClass from "../../helpers/genClass";
import Messages from "../Messages/Messages";
import ChatBar from "../ChatBar/ChatBar";
import ChatInfo from "../ChatInfo/ChatInfo";
import useChatLogic from "./useChatLogic";

//user from state  -to from userId
export default function Chat(props) {
  console.log("Chat");
  const { location, match } = props; //destructure Route props
  const uidFrom = location.state.userId;
  const uidTo = match.params.id;
  const { messagesState } = useChatLogic(uidFrom, uidTo);

  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <div {...$("info")}>
        <ChatInfo name={location.state.chatName} />
      </div>
      <div {...$("messages")}>
        <Messages />
      </div>
      <div {...$("bar")}>
        <ChatBar from={uidFrom} to={uidTo} />
      </div>
    </div>
  );
}

//props.location.state.name
