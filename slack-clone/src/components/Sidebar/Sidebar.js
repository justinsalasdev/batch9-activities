import { Link } from "react-router-dom";
import genClass from "../../helpers/genClass";
import Menu from "../Menu/Menu";
import Profile from "../Profile/Profile";
import { FiMessageCircle } from "react-icons/fi";

const $ = genClass("sidebar", {});

export default function Sidebar() {
  console.log("Sidebar");
  return (
    <div {...$()}>
      <Profile />
      <nav>
        {/* <div className></div> */}
        <Menu
          type={"channels"}
          name="Channels"
          entries={["Channel 1", "Channel 2", "Channel 3", "Channel 4"]}
        />
        {/* <Menu type={"dms"} name="DMs" entries={["DM1", "DM2", "DM3", "DM4"]} /> */}
        <div>
          <FiMessageCircle />
          DMs
        </div>
      </nav>
    </div>
  );
}
