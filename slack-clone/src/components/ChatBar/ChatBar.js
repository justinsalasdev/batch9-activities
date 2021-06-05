import genClass from "../../helpers/genClass";
import { MdSend } from "react-icons/md";

import { InlineLoader } from "../Loader/Loader";
import useChatBar from "./useChatBar";

export default function ChatBar({ propStyles, mods, sender }) {
  console.log("ChatBar");

  const { content, areaRef, submitRef, handleEnter, handleChange, clearInput } = useChatBar();
  const { handleSubmit, isSending } = sender(content, clearInput);

  const $ = genClass({ block: "chat-bar", propStyles, mods });

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
        {isSending ? <InlineLoader propStyles={$("loader").className} /> : <MdSend />}
      </button>
    </form>
  );
}
