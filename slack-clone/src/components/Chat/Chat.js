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
      <ChatInfo propStyles={$("info").className} name={location.state.chatName} />
      <Messages propStyles={$("messages").className} />
      <ChatBar propStyles={$("bar").className} from={uidFrom} to={uidTo} />
    </div>
  );
}

//props.location.state.name
