import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase/firebase";
import firebase from "../../firebase/firebase";
import createDMId from "../../helpers/createDMId";
import useMessagesState from "../../hooks/messages/useMessagesState";
import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";

//helper

export default function useChatBarLogic(to, from) {
  const areaRef = useRef();
  const submitRef = useRef();
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const messagesState = useMessagesState();
  const messagesDispatch = useMessagesDispatcher();

  //firebase resources
  const dmRef = db.collection("DMs").doc(createDMId(from, to));
  const messageCols = dmRef.collection("Messages");
  const messageRef = messageCols.doc(); //points to a new doc
  const data = {
    from,
    to,
    content
  };
  const getTimeStamp = firebase.firestore.FieldValue.serverTimestamp;
  const batch = db.batch();

  useEffect(() => {
    areaRef.current.setAttribute("rows", `${countNL(content) + 1}`);
  });

  useEffect(() => {
    dmRef.onSnapshot(doc => {
      if (doc && !doc.data().isLatest) {
        messageCols.get().then(docs => {
          docs.forEach(doc => {
            console.log(doc.id, doc.data()); //TODO: make async function retrieve and update status same as useChatLogic
          });
        });
      } else {
        console.log("do nothing");
      }
    });
  }, []);

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

    if (!content) {
      return;
    } else {
      try {
        setLoading(true);

        if (messagesState.messages.length === 0) {
          const batch = db.batch();
          batch.set(dmRef, {
            isLatest: true
          });
          batch.set(messageRef, { ...data, timeStamp: getTimeStamp() });
          await batch.commit();

          console.log("New DM initiated, and first message written");
          messagesDispatch({ type: "create" });
          setLoading(false);
          setContent("");
        } else {
          batch.update(dmRef, {
            isLatest: false
          });
          batch.set(messageRef, { ...data, timeStamp: getTimeStamp() });
          await batch.commit();

          console.log("Document successfully written!");
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
