import genClass from "../../helpers/genClass";
import useMessagesState from "../../hooks/messages/useMessagesState";

export default function Messages() {
  console.log("Messages");
  const { messages } = useMessagesState();

  const $ = genClass({ block: "messages" });
  return (
    <ul {...$()}>
      {messages?.map(message => {
        return <li key={message.id}>{message.content}</li>;
      })}
    </ul>
  );
}
