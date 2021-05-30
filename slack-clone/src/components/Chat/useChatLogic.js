import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";
import { useEffect } from "react";
import { createDMRef } from "../../firebase/firebase";
import getMessages from "../../helpers/getMessages";

export default function useChatLogic(uidFrom, uidTo) {
  const messagesDispatch = useMessagesDispatcher();

  useEffect(() => {
    createDMRef(uidFrom, uidTo).onSnapshot(doc => {
      if (doc && !doc.data()?.isLatest) {
        getMessages(messagesDispatch, uidFrom, uidTo);
      } else {
        console.log("do nothing");
      }
    });
    // eslint-disable-next-line
  }, [uidFrom, uidTo]);
}
