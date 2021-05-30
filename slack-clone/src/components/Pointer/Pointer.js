import { Link } from "react-router-dom";
import genClass from "../../helpers/genClass";
import { RiChatNewFill } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { VscDiffAdded } from "react-icons/vsc";
import { BiGroup } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

//props "link", "type", "text", "action"
const icons = {
  message: <FiMessageCircle />,
  plus: <VscDiffAdded />,
  channel: <BiGroup />,
  picture: <CgProfile />
};

export default function Pointer({ text, icon, propStyles, mods, to }) {
  const $ = genClass({ block: "nav-link", propStyles, mods });

  return (
    <div {...$()}>
      <Link {...$("link")} to={to}>
        <span {...$("icon")}>{icons[icon]}</span>
        <span {...$("text")}>{text}</span>
      </Link>
      <button {...$("action")}>
        <RiChatNewFill />
      </button>
    </div>
  );
}
