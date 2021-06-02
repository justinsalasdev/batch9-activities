import genClass from "../../../helpers/genClass";
import { MultiSelector } from "../../Selector/MultiSelector/MultiSelector";

export default function GroupChat(props) {
  const $ = genClass({ block: "chat" });
  return (
    <div {...$()}>
      <div {...$("info")}>
        <MultiSelector
          mods={{
            "list-ref": ["multiple"],
            selector: ["multiple"],
            selection: ["multiple"],
            input: ["multiple"]
          }}
        />
      </div>
    </div>
  );
}
