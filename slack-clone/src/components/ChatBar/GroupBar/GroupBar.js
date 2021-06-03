import genClass from "../../helpers/genClass";
import { MdSend } from "react-icons/md";

import useChatBarLogic from "./useChatBarLogic";
import { InlineLoader } from "../Loader/Loader";

export default function GroupBar(props) {
  console.log("ChatBar");
  const { content, areaRef, submitRef, isLoading, handleSubmit, handleEnter, handleChange } =
    useChatBarLogic(props);

  const { propStyles, mods } = props;
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
        {isLoading ? <InlineLoader propStyles={$("loader").className} /> : <MdSend />}
      </button>
    </form>
  );
}
