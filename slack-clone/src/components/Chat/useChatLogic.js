import useMessagesState from "../../hooks/messages/useMessagesState";
import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";
import { useEffect, useState } from "react";
import getMessages from "../../helpers/getMessages";

export default function useChatLogic(uidFrom, uidTo) {
  const [isLoading, setLoading] = useState(false);
  const messagesState = useMessagesState();
  const messagesDispatch = useMessagesDispatcher();

  useEffect(() => {
    console.log("chat get messages");
    getMessages(messagesDispatch, uidFrom, uidTo);
  }, [uidFrom, uidTo]);

  return { isLoading, messagesState, messagesDispatch };
}
