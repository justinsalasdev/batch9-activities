import { useEffect } from "react";
import { createDMRef } from "../../../firebase/firebase";
import getMessages from "../../../helpers/getMessages";
import useMessagesDispatcher from "../../../hooks/messages/useMessagesDispatcher";

export default function usePMLogic(props) {
  const messagesDispatch = useMessagesDispatcher();

  const uidFrom = props.location.state?.userId;
  const uidTo = props.match.params.id;
  const chatName = props.location.state?.chatName || "";

  useEffect(() => {
    if (uidFrom && uidTo) {
      createDMRef(uidFrom, uidTo).onSnapshot(doc => {
        if (doc) {
          getMessages(messagesDispatch, uidFrom, uidTo);
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
