import genClass from "../../helpers/genClass";
import useMessagesState from "../../hooks/messages/useMessagesState";
import Message from "../Message/Message";

export default function Messages() {
  console.log("Messages");
  const { messages } = useMessagesState();

  const $ = genClass({ block: "messages" });
  return (
    <ul {...$()}>
      {messages?.map((message, index) => {
        return (
          <Message
            max={messages.length - 1}
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
