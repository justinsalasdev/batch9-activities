import genClass from "../../helpers/genClass";
import ChatBar from "../ChatBar/ChatBar";
import ChatInfo from "../ChatInfo/ChatInfo";

//user from state  -to from userId
export default function Chat(props) {
  const { location, match } = props; //destructure Route props
  console.log(props);
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <div {...$("info")}>
        <ChatInfo name={location.state.chatName} />
      </div>
      <div {...$("area")}>Messages</div>
      <div {...$("bar")}>
        <ChatBar from={location.state.userId} to={match.params.id} />
      </div>
    </div>
  );
}

//props.location.state.name
