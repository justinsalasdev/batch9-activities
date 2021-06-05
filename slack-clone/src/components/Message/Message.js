import genClass, { toggler as $t } from "../../helpers/genClass";
import usePeopleState from "../../hooks/people/usePeopleState";
import useUserState from "../../hooks/user/useUserState";
import defaultAvatar from "../../assets/images/avatar.svg";
import { useEffect, useRef } from "react";

export default function Message({ num, max, resources, propStyles, mods }) {
  console.log("Message");
  const { from, content, date, isoDate } = resources;
  const imageRef = useRef();
  const userState = useUserState();
  const peopleState = usePeopleState();
  const messageRef = useRef();
  const sender = peopleState.people.find(sender => sender.uid === from);
  const { photoURL, name } = sender;
  const isMine = userState.uid === sender.uid;

  useEffect(() => {
    //check if element is the last message
    if (num === max) {
      messageRef.current.scrollIntoView();
    }
    // eslint-disable-next-line
  }, []);

  const $ = genClass({
    block: "message",
    mods: {
      ...mods,
      message: [$t(isMine, "mine")],
      photo: ["sender"],
      content: [$t(isMine, "mine")]
    },
    propStyles
  });

  return (
    <li ref={messageRef} {...$()}>
      <div {...$("sendee")}>{!isMine && <p>{name}</p>}</div>
      <div {...$("div")}>
        {!isMine && (
          <img
            ref={imageRef}
            onError={() => imageRef.current.setAttribute("src", defaultAvatar)}
            alt="user avatar"
            src={photoURL || defaultAvatar}
            {...$("photo")}
          />
        )}
        <p {...$("content")}>{content}</p>
      </div>
      <time {...$("time-stamp")} dateTime={isoDate}>
        {date}
      </time>
    </li>
  );
}
