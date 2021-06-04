import genClass from "../../helpers/genClass";
import useLettersState from "../../hooks/letters/useLettersState";
import Message from "../Message/Message";

export default function Messages() {
  console.log("Messages");
  const { letters } = useLettersState();

  const $ = genClass({ block: "messages" });
  return (
    <ul {...$()}>
      {letters?.map((letters, index) => {
        return (
          <Message
            max={letters.length - 1}
            num={index}
            key={letters.id}
            propStyles={$("messages").className}
            resources={letters}
          />
        );
      })}
    </ul>
  );
}
