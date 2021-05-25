import genClass from "../../helpers/genClass";
import { MdSend } from "react-icons/md";

export default function ChatBar({ propStyles }) {
  const $ = genClass({ block: "chat-bar", propStyles });

  return (
    <form {...$()}>
      <textarea rows={1} placeholder="Some message" {...$("input")} />
      <button type="submit" {...$("send")}>
        <MdSend />
      </button>
    </form>
  );
}
