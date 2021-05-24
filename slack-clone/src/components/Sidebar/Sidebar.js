import genClass from "../../helpers/genClass";
import Menu from "../Menu/Menu";
import Profile from "../Profile/Profile";
import { FiMessageCircle } from "react-icons/fi";

export default function Sidebar() {
  const $ = genClass({ block: "sidebar" });

  return (
    <div {...$()}>
      <Profile />

      <nav {...$("nav")}>
        {/* <div className></div> */}
        <div {...$("link")}>
          <FiMessageCircle />
          <span>DMs</span>
        </div>
        <Menu
          propStyles={$("item").className}
          type={"channels"}
          name="Channels"
          entries={["Channel 1", "Channel 2", "Channel 3", "Channel 4"]}
        />
        {/* <Menu type={"dms"} name="DMs" entries={["DM1", "DM2", "DM3", "DM4"]} /> */}
      </nav>
    </div>
  );
}
