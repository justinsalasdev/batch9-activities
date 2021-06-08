import { NavLink } from "react-router-dom";
import genClass from "../../helpers/genClass";
import { RiChatNewFill } from "react-icons/ri";
import { VscDiffAdded } from "react-icons/vsc";
import { BiGroup } from "react-icons/bi";
import { RiChatNewLine, RiHome2Line } from "react-icons/ri";
import React from "react";
import useImageError from "../../hooks/useImageError";
import defaultAvatar from "../../assets/images/avatar.svg";
// import defaultAvatar from "../../assets/images/avatar.svg";

//props "link", "type", "text", "action"
const icons = {
  home: <RiHome2Line />,
  message: <RiChatNewLine />,
  plus: <VscDiffAdded />,
  channel: <BiGroup />
};

export function PointerAction(props) {
  console.log("PointerAction");
  const { text, icon, propStyles, mods, to, buttonAction } = props;
  const $ = genClass({ block: "pointer", propStyles, mods });

  return (
    <div {...$()}>
      <NavLink {...$("link")} to={to} activeClassName="pointer__link--current">
        <span {...$("icon")}>{icons[icon]}</span>
        <span {...$("text")}>{text}</span>
      </NavLink>
      {buttonAction && (
        <button {...$("action")} onClick={buttonAction}>
          <RiChatNewFill />
        </button>
      )}
    </div>
  );
}

export function PointerOption(props) {
  console.log("PointerOption");
  const { text, propStyles, mods, optionAction, photoURL } = props;
  const { imgRef, handleImgError } = useImageError();
  const $ = genClass({ block: "pointer", propStyles, mods });

  return (
    <div {...$()}>
      <div {...$("link")} onClick={optionAction}>
        <img
          ref={imgRef}
          src={photoURL || defaultAvatar}
          {...$("icon")}
          alt="person icon"
          onError={handleImgError}
        />
        <span {...$("text")}>{text}</span>
      </div>
    </div>
  );
}

export function PointerLink(props) {
  console.log("PointerLink");
  const { text, icon, propStyles, mods, to, exact } = props;
  const $ = genClass({ block: "pointer", propStyles, mods });

  return (
    <div {...$()}>
      <NavLink exact={exact} {...$("link")} to={to} activeClassName="pointer__link--current">
        <span {...$("icon")}>{icons[icon]}</span>
        <span {...$("text")}>{text}</span>
      </NavLink>
    </div>
  );
}

export function PointerImg(props) {
  console.log("PointerImg");
  const { text, photoURL, propStyles, mods, to } = props;
  const { imgRef, handleImgError } = useImageError();
  const $ = genClass({ block: "pointer", propStyles, mods });

  return (
    <div {...$()}>
      <NavLink {...$("link")} to={to} activeClassName="pointer__link--current">
        <img
          ref={imgRef}
          onError={handleImgError}
          src={photoURL || defaultAvatar}
          {...$("icon")}
          alt="person icon"
        />
        <span {...$("text")}>{text}</span>
      </NavLink>
    </div>
  );
}
