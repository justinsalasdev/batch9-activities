import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";
import { useEffect } from "react";
import { createDMRef } from "../../firebase/firebase";
import getMessages from "../../helpers/getMessages";

export default function useChatLogic(props) {
  const messagesDispatch = useMessagesDispatcher();

  const uidFrom = props.location.state?.userId;
  const uidTo = props.match.params.id;
  const status = props.match.params.id === "new" ? "creating" : "ready";
  const chatName = props.location.state?.chatName || "";
  const chatType = props.match.params.type;

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
    status,
    uidFrom,
    uidTo,
    chatName,
    chatType
  };
}
