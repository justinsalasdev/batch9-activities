import genClass from "../../helpers/genClass";
import usePeopleState from "../../hooks/people/usePeopleState";
import useUserState from "../../hooks/user/useUserState";
import defaultAvatar from "../../assets/images/avatar.svg";
import { useEffect, useRef } from "react";

export default function Message({ num, max, resources, propStyles }) {
  const { from, content, date, isoDate } = resources;
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
      message: [`${isMine ? "mine" : ""}`],
      photo: ["sender"],
      content: [`${isMine ? "mine" : ""}`]
    },
    propStyles
  });

  return (
    <li ref={messageRef} {...$()}>
      <div {...$("sendee")}>{!isMine && <p>{name}</p>}</div>
      <div {...$("div")}>
        {!isMine && <img alt="user avatar" src={photoURL || defaultAvatar} {...$("photo")} />}
        <p {...$("content")}>{content}</p>
      </div>
      <time {...$("time-stamp")} dateTime={isoDate}>
        {date}
      </time>
    </li>
  );
}