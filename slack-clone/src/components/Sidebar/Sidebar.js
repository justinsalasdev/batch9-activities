import genClass from "../../helpers/genClass";
import Profile from "../Profile/Profile";

import Nav from "../Nav/Nav";

export default function Sidebar({ propStyles }) {
  const $ = genClass({ block: "sidebar", propStyles });

  return (
    <div {...$()}>
      <Profile propStyles={$("profile").className} />
      <Nav propStyles={$("nav").className} />
    </div>
  );
}
