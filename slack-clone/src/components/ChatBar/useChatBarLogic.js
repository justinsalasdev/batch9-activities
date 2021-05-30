import { useEffect, useRef, useState } from "react";
import { db, setTimeStamp } from "../../firebase/firebase";
import createDMId from "../../helpers/createDMId";
import useMessagesState from "../../hooks/messages/useMessagesState";
import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";
import getMessages from "../../helpers/getMessages";
import generateString from "../../helpers/generateString";

//helper

export default function useChatBarLogic(to, from) {
  const areaRef = useRef();
  const submitRef = useRef();
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const messagesState = useMessagesState(); //used in conditionals only
  const messagesDispatch = useMessagesDispatcher();

  //firebase resources

  const dmRef = db.collection("DMs").doc(createDMId(from, to));
  const messageCol = dmRef.collection("Messages");
  const messageRef = messageCol.doc();

  useEffect(() => {
    areaRef.current.setAttribute("rows", `${countNL(content) + 1}`);
  });

  function countNL(content) {
    return (content.match(/\n/g) || []).length;
  }

  function handleChange(e) {
    setContent(e.target.value);
  }

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

    //firebase resources

    const data = {
      from,
      to,
      content
    };

    if (!content) {
      return;
    } else {
      try {
        setLoading(true);

        if (messagesState.messages.length > 0 || messagesState.isCreated) {
          const batch = db.batch();
          await batch
            .set(messageRef, {
              ...data,
              timeStamp: setTimeStamp()
            })
            .update(dmRef, {
              watchedString: generateString()
            })
            .commit();

          console.log("Document successfully written!");
          setLoading(false);
          setContent("");
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
          setLoading(false);
          setContent("");
        }
        //if messages = [0]{} await create DM
      } catch (err) {
        console.error("Error adding document: ", err);
        setLoading(false);
      }
    }
  }

  return {
    content,
    areaRef,
    submitRef,
    isLoading,
    handleSubmit,
    handleEnter,
    handleChange
  };
}
