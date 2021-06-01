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

export function PointerAction(props) {
  const { text, icon, propStyles, mods, to, buttonAction } = props;
  const $ = genClass({ block: "pointer", propStyles, mods });

  return (
    <div {...$()}>
      <Link {...$("link")} to={to}>
        <span {...$("icon")}>{icons[icon]}</span>
        <span {...$("text")}>{text}</span>
      </Link>
      {buttonAction && (
        <button {...$("action")} onClick={buttonAction}>
          <RiChatNewFill />
        </button>
      )}
    </div>
  );
}

export function PointerOption(props) {
  const { text, icon, propStyles, mods, optionAction } = props;
  const $ = genClass({ block: "pointer", propStyles, mods });

  return (
    <div {...$()}>
      <div {...$("link")} onClick={optionAction}>
        <span {...$("icon")}>{icons[icon]}</span>
        <span {...$("text")}>{text}</span>
      </div>
    </div>
  );
}

export function PointerLink(props) {
  const { text, icon, propStyles, mods, to } = props;
  const $ = genClass({ block: "pointer", propStyles, mods });

  return (
    <div {...$()}>
      <Link {...$("link")} to={to}>
        <span {...$("icon")}>{icons[icon]}</span>
        <span {...$("text")}>{text}</span>
      </Link>
    </div>
  );
}
