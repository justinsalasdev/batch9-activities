import genClass from "../../helpers/genClass";
import Messages from "../Messages/Messages";
import ChatBar from "../ChatBar/ChatBar";
import usePMLogic from "./usePMLogic";
import { IoIosChatbubbles } from "react-icons/io";
import { SingleSelector } from "../Selector/SingleSelector/SingleSelector";
import { MultiSelector } from "../Selector/MultiSelector/MultiSelector";

export function PrivateRoom(props) {
  const { chatName, uidTo, uidFrom } = usePMLogic(props);
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <div {...$("info")}>
        {(chatName && (
          <p {...$("name")}>
            <span {...$("icon")}>
              <IoIosChatbubbles />
            </span>
            {chatName}
          </p>
        )) || <SingleSelector mods={{ list: ["single"] }} />}
      </div>
      <div {...$("scroller")}>
        <Messages propStyles={$("messages").className} />
      </div>
      <ChatBar propStyles={$("bar").className} from={uidFrom} to={uidTo} />
    </div>
  );
}

export function RoomCreator(props) {
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <div {...$("info")}>
        <MultiSelector mods={{ list: ["single"] }} />
      </div>
    </div>
  );
}
