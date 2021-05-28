import useMessagesState from "../../hooks/messages/useMessagesState";
import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import createDMId from "../../helpers/createDMId";

async function getMessages(messageDispatch, uidFrom, uidTo) {
  try {
    const messages = [];
    const dmRef = db.collection("DMs").doc(createDMId(uidFrom, uidTo));
    const messageRef = dmRef.collection("Messages").orderBy("timeStamp");

    const querySnapshot = await messageRef.get();

    querySnapshot.forEach(message => {
      messages.push({ id: message.id, ...message.data() });
    });
    messageDispatch({ type: "save messages", payload: messages });
  } catch (err) {
    console.log(err);
  }
}

/*
    const dmRef = db.collection("DMs").doc(createDMId(uidFrom, uidTo));
    const messageRef = dmRef.collection("Messages").orderBy("timeStamp");

    db.runTransaction((transaction) => {
      const querySnapshot = await transaction.get(messageRef);
    })

db.runTransaction((transaction) => {
    return transaction.get(sfDocRef).then((sfDoc) => {
        if (!sfDoc.exists) {
            throw "Document does not exist!";
        }

        var newPopulation = sfDoc.data().population + 1;
        if (newPopulation <= 1000000) {
            transaction.update(sfDocRef, { population: newPopulation });
            return newPopulation;
        } else {
            return Promise.reject("Sorry! Population is too big.");
        }
    });
}).then((newPopulation) => {
    console.log("Population increased to ", newPopulation);
}).catch((err) => {
    // This will be an "population is too big" error.
    console.error(err);
}); */

export default function useChatLogic(uidFrom, uidTo) {
  const [isLoading, setLoading] = useState(false);
  const messagesState = useMessagesState();
  const messagesDispatch = useMessagesDispatcher();

  useEffect(() => {
    console.log("runs");
    getMessages(messagesDispatch, uidFrom, uidTo);
  }, [uidFrom, uidTo]);

  return { isLoading, messagesState, messagesDispatch };
}
