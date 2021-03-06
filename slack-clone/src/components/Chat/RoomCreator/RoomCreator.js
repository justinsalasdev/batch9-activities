import genClass from "../../../helpers/genClass";
import { MultiSelector } from "../../Selector/MultiSelector/MultiSelector";
import { IoMdPersonAdd } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import useGroupChatLogic from "./useRoomCreator";
import { InlineLoader } from "../../Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomCreator({ propStyles, mods }) {
  console.log("Room Creator");
  const {
    adderRef,
    fieldRef,
    membersRef,
    memberCountRef,
    isSelecting,
    isCreating,
    toggleSelector,
    handleCreateRoom
  } = useGroupChatLogic();
  const $ = genClass({ block: "chat", propStyles, mods });

  return (
    <div {...$()}>
      <motion.div animate={{ y: 0 }} initial={{ y: -10 }} {...$("info")}>
        <input
          autoComplete="off"
          type="text"
          ref={fieldRef}
          {...$("field")}
          placeholder="Channel name"
        />
        <div {...$("members")}>
          <span {...$("counter")} ref={memberCountRef}>
            1
          </span>
          <button ref={adderRef} {...$("adder")} onClick={toggleSelector}>
            {isSelecting ? <FaWindowClose /> : <IoMdPersonAdd />}
          </button>
          <button {...$("creator")} onClick={handleCreateRoom}>
            {isCreating ? <InlineLoader /> : "create"}
          </button>
        </div>

        <AnimatePresence>
          {isSelecting && (
            <MultiSelector
              propStyles={$("multi-selector").className}
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
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
