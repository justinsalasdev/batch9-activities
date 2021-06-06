import genClass from "../../helpers/genClass";
import { PointerLink } from "../Pointer/Pointer";

export default function Channels({ channels }) {
  console.log("MenuItems-Channels");
  const $ = genClass({ block: "menu" });
  return (
    <ul {...$("items")}>
      <li {...$("item")}>
        <PointerLink
          to={`/channels/new`}
          text={`Add channel`}
          icon="plus"
          mods={{ link: ["menu"], action: ["none"], icon: ["left"] }}
        />
      </li>
      {channels.map(channel => (
        <li {...$("item")} key={channel.id}>
          <PointerLink //inside is <Link/> from 'react-router
            text={channel.name}
            icon="channel"
            to={{
              pathname: `/channels/${channel.id}`,
              state: {
                chatName: channel.name,
                members: channel.members
              }
            }}
            mods={{ link: ["menu"], icon: ["left"] }}
          />
        </li>
      ))}
    </ul>
  );
}
