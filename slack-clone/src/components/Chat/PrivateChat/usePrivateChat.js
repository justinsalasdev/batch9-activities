import { useEffect } from "react";
import { createDMRef } from "../../../firebase/firebase";
import getLetters from "../../../helpers/getLetters";
import useLettersDispatcher from "../../../hooks/letters/useLettersDispatcher";

export default function usePrivateChat(props) {
  const lettersDispatch = useLettersDispatcher();

  const uidFrom = props.location.state?.userId;
  const uidTo = props.match.params.id;
  const chatName = props.location.state?.chatName || "";

  useEffect(() => {
    if (uidFrom && uidTo) {
      //TODO: fix transition delay when changing DMs
      createDMRef(uidFrom, uidTo).onSnapshot(doc => {
        if (doc) {
          getLetters(lettersDispatch, uidFrom, uidTo);
        } else {
          console.log("do nothing");
        }
      });
    } else {
      console.log("no sender or receiver");
    }

    // eslint-disable-next-line
  }, [uidFrom, uidTo]);

  return {
    uidFrom,
    uidTo,
    chatName
  };
}
