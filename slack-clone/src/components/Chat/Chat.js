import genClass from "../../helpers/genClass";
import ChatBar from "../ChatBar/ChatBar";
import ChatInfo from "../ChatInfo/ChatInfo";

export default function Chat() {
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <div {...$("info")}>
        <ChatInfo />
      </div>
      <div {...$("area")}>Messages</div>
      <div {...$("bar")}>
        <ChatBar />
      </div>
    </div>
  );
}
