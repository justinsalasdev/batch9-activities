import genClass from "../../helpers/genClass";
import Message from "../Message/Message";

export default function Messages({ messages, mods, propStyles }) {
  console.log("Messages");
  const $ = genClass({ block: "messages", mods, propStyles });
  return (
    <ul {...$()}>
      {messages.map((message, index) => {
        return (
          <Message
            max={message.length - 2}
            num={index}
            key={message.id}
            propStyles={$("message").className}
            resources={message}
          />
        );
      })}
    </ul>
  );
}
