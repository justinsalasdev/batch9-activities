import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";
import { useEffect, useReducer } from "react";
import { createDMRef } from "../../firebase/firebase";
import getMessages from "../../helpers/getMessages";
import chatReducer from "./chatReducer";

export default function useChatLogic(props) {
  const messagesDispatch = useMessagesDispatcher();
  const [compState, compDispatch] = useReducer(chatReducer, {
    members: [],
    chatName: ""
  });

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
