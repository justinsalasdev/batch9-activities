import genClass, { toggler as $t } from "../../helpers/genClass";
import usePeopleState from "../../hooks/people/usePeopleState";
import useUserState from "../../hooks/user/useUserState";
import defaultAvatar from "../../assets/images/avatar.svg";
import { useEffect, useRef } from "react";
import useImageError from "../../hooks/useImageError";
import { motion } from "framer-motion";

export default function Message({ num, max, resources, propStyles, mods }) {
  console.log("Message");
  const { from, content, date, isoDate } = resources;
  const { imgRef, handleImgError } = useImageError();
  const userState = useUserState();
  const peopleState = usePeopleState();
  const messageRef = useRef();
  const sender = peopleState.people.find(sender => sender.uid === from);
  const { photoURL, name } = sender;
  const isMine = userState.uid === sender.uid;

  useEffect(() => {
    //check if element is the last message
    if (num >= max) {
      messageRef.current.scrollIntoView();
    }
    // }
    // eslint-disable-next-line
  }, [max, num]);

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
    <motion.li
      ref={messageRef}
      {...$()}
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: isMine ? 10 : -10 }}
    >
      {!isMine && (
        <img
          ref={imgRef}
          onError={handleImgError}
          alt="user avatar"
          src={photoURL || defaultAvatar}
          {...$("photo")}
        />
      )}
      <div {...$("div")}>
        <div {...$("name")}>{!isMine && <p>{name}</p>}</div>
        <pre {...$("content")}>{content}</pre>

        <time {...$("time-stamp")} dateTime={isoDate}>
          {date}
        </time>
      </div>
    </motion.li>
  );
}
