import genClass from "../../helpers/genClass";
import { MdSend } from "react-icons/md";

import useChatBarLogic from "./useChatBarLogic";
import Loader, { InlineLoader } from "../Loader/Loader";

export default function ChatBar({ propStyles, to, from }) {
  console.log("ChatBar");
  const { content, areaRef, submitRef, isLoading, handleSubmit, handleEnter, handleChange } =
    useChatBarLogic(to, from);

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
        {isLoading ? <InlineLoader propStyles={$("loader").className} /> : <MdSend />}
      </button>
    </form>
  );
}
