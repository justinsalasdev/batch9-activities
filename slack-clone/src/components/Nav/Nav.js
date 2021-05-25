import genClass from "../../helpers/genClass";
import Menu from "../Menu/Menu";
import NavLink from "../NavLink/NavLink";

export default function Nav({ propStyles }) {
  const $ = genClass({ block: "nav", propStyles });

  const channels = [
    { to: "#", text: "batch9", icon: "channel" },
    { to: "#", text: "batch9", icon: "channel" },
    { to: "#", text: "batch11", icon: "channel" }
  ];

  const contacts = [
    { to: "#", text: "Justin", icon: "picture" },
    { to: "#", text: "Raffy", icon: "picture" },
    { to: "#", text: "Salas", icon: "picture" }
  ];

  return (
    <nav {...$()}>
      {/* <div className></div> */}
      <NavLink to="/dms" text="DMs" icon="message" propStyles={$("link").className} />
      <Menu name={"Channels"} entries={channels} propStyles={$("menu").className} />
      <Menu name={"Contacts"} entries={contacts} propStyles={$("menu").className} />
    </nav>
  );
}
