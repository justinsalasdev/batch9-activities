import { useEffect, useReducer, useRef } from "react";
import { createDMRef, db, setTimeStamp } from "../../firebase/firebase";
import useMessagesState from "../../hooks/messages/useMessagesState";
import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";
import getMessages from "../../helpers/getMessages";
import generateString from "../../helpers/generateString";
import chatBarReducer from "./chatBarReducer";

//helper
function countNL(content) {
  return (content.match(/\n/g) || []).length;
}

export default function useChatBarLogic(to, from) {
  const areaRef = useRef();
  const submitRef = useRef();
  const [cbState, cbDispatch] = useReducer(chatBarReducer, { content: "", isLoading: false });
  const messagesState = useMessagesState(); //used in conditionals only
  const messagesDispatch = useMessagesDispatcher();

  useEffect(() => {
    areaRef.current.setAttribute("rows", `${countNL(cbState.content) + 1}`);
  });

  function handleEnter(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitRef.current.click();
    } else {
      return;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cbState.content) {
      return;
    } else {
      try {
        const dmRef = createDMRef(from, to);
        const messageCol = dmRef.collection("Messages");
        const messageRef = messageCol.doc();
        const data = {
          from,
          to,
          content: cbState.content
        };

        cbDispatch({ type: "start sending" });

        if (messagesState.messages.length > 0 || messagesState.isCreated) {
          const batch = db.batch();
          await batch
            .set(messageRef, {
              ...data,
              timeStamp: setTimeStamp()
            })
            .update(dmRef, {
              watchedString: generateString(),
              members: [from, to]
            })
            .commit();

          console.log("Document successfully written!");
          cbDispatch({ type: "finish sending" });
        } else {
          const batch = db.batch();
          await batch
            .set(dmRef, {
              watchedString: ""
            })
            .set(messageRef, {
              ...data,
              timeStamp: setTimeStamp()
            })
            .commit();

          console.log("New DM initiated, and first message written");
          getMessages(messagesDispatch, from, to); //fetch message on first creation of DM
          cbDispatch({ type: "finish sending" });
        }
        //if messages = [0]{} await create DM
      } catch (err) {
        console.error("Error adding document: ", err);
        cbDispatch({ type: "finish sending" });
      }
    }
  }

  return {
    content: cbState.content,
    areaRef,
    submitRef,
    isLoading: cbState.isLoading,
    handleSubmit,
    handleEnter,
    handleChange: e => cbDispatch({ type: "set content", payload: e.target.value })
  };
}
