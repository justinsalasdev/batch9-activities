import genClass from "../../../helpers/genClass";
import { MultiSelector } from "../../Selector/MultiSelector/MultiSelector";
import { IoMdPersonAdd } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import useGroupChatLogic from "./useGroupLogic";

export default function GroupChat() {
  console.log("Group Chat");
  const { membersRef, memberCountRef, isSelecting, toggleSelector } = useGroupChatLogic();
  console.log(membersRef.current);
  const $ = genClass({ block: "chat" });

  return (
    <div {...$()}>
      <div {...$("info")}>
        <div {...$("input")}>
          <label htmlFor="chat__input">Name</label>
          <input id="chat__input" />
        </div>
        <div {...$("members")}>
          <span {...$("counter")} ref={memberCountRef}>
            1
          </span>
          <button {...$("adder")} onClick={toggleSelector}>
            {isSelecting ? <FaWindowClose /> : <IoMdPersonAdd />}
          </button>
        </div>

        {isSelecting && (
          <MultiSelector
            membersRef={membersRef}
            memberCountRef={memberCountRef}
            mods={{
              "list-ref": ["multiple"],
              selector: ["multiple"],
              selection: ["multiple"],
              input: ["multiple"]
            }}
          />
        )}
      </div>
    </div>
  );
}
