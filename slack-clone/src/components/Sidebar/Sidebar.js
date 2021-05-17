import Menu from "../Menu/Menu";
import Profile from "../Profile/Profile";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <Profile />
        {/* <div className></div> */}
        <Menu name="Channels" entries={["Channel 1", "Channel 2", "Channel 3", "Channel 4"]} />
        <Menu name="DMs" entries={["DM1", "DM2", "DM3", "DM4"]} />
      </nav>
    </div>
  );
}
