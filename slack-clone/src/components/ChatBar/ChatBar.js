import genClass from "../../helpers/genClass";
import { MdSend } from "react-icons/md";

import useChatBarLogic from "./useChatBarLogic";

export default function ChatBar({ propStyles }) {
  console.log("ChatBar");
  const { content, areaRef, submitRef, handleSubmit, handleEnter, handleChange } =
    useChatBarLogic();

  const $ = genClass({ block: "chat-bar", propStyles });

  return (
    <form onKeyDown={handleEnter} {...$()} onSubmit={handleSubmit}>
      <textarea
        ref={areaRef}
        spellCheck="false"
        onChange={handleChange}
        value={content || ""}
        rows="1"
        placeholder="Some message"
        {...$("input")}
      />
      <button ref={submitRef} type="submit" {...$("send")}>
        <MdSend />
      </button>
    </form>
  );
}
