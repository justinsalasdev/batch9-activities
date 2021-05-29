import genClass from "../../helpers/genClass";
import Messages from "../Messages/Messages";
import ChatBar from "../ChatBar/ChatBar";
import ChatInfo from "../ChatInfo/ChatInfo";
import useChatLogic from "./useChatLogic";
import { useEffect, useRef } from "react";

//user from state  -to from userId
export default function Chat(props) {
  console.log("Chat");

  const { location, match } = props; //destructure Route props
  const uidFrom = location.state.userId;
  const photoURL = location.state.photoURL;
  const uidTo = match.params.id;
  useChatLogic(uidFrom, uidTo);

  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <ChatInfo propStyles={$("info").className} name={location.state.chatName} />
      <div {...$("scroller")}>
        <Messages photoURL={photoURL} />
      </div>
      <ChatBar propStyles={$("bar").className} from={uidFrom} to={uidTo} />
    </div>
  );
}

//props.location.state.name
