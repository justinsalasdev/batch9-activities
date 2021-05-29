import genClass from "../../helpers/genClass";
import useMessagesState from "../../hooks/messages/useMessagesState";
import Message from "../Message/Message";

export default function Messages({ propStyles }) {
  console.log("Messages");
  const { messages } = useMessagesState();

  console.log(messages);
  const $ = genClass({ block: "messages", propStyles });
  return (
    <ul {...$()}>
      {messages?.map(message => {
        return (
          <li {...$("message")} key={message.id}>
            <Message content={message.content} date={message.date} isoDate={message.isoDate} />
          </li>
        );
      })}
    </ul>
  );
}
