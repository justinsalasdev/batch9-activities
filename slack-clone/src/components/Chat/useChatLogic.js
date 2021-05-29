import useMessagesState from "../../hooks/messages/useMessagesState";
import useMessagesDispatcher from "../../hooks/messages/useMessagesDispatcher";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import createDMId from "../../helpers/createDMId";

function getDateString(date, type) {
  if (type === "human") {
    return date.toLocaleDateString("en-US") + " " + date.toLocaleTimeString("en-US");
  } else {
    return date.toISOString();
  }
}

async function getMessages(messageDispatch, uidFrom, uidTo) {
  try {
    const messages = [];
    const dmRef = db.collection("DMs").doc(createDMId(uidFrom, uidTo));
    const messageRef = dmRef.collection("Messages").orderBy("timeStamp");

    const querySnapshot = await messageRef.get();

    querySnapshot.forEach(message => {
      const { from, to, content, timeStamp } = message.data();
      messages.push({
        id: message.id,
        content,
        from,
        to,
        //timeStamp.toDate() convert firebase timeStamp to regular JS Date Object
        date: getDateString(timeStamp.toDate(), "human"),
        isoDate: getDateString(timeStamp.toDate(), "iso")
      });
    });
    messageDispatch({ type: "save messages", payload: messages });

    if (messages.length > 0) {
      await dmRef.update({ isLatest: true });
    }
  } catch (err) {
    console.log(err);
  }
}

/*
    const dmRef = db.collection("DMs").doc(createDMId(uidFrom, uidTo));
    const messageRef = dmRef.collection("Messages").orderBy("timeStamp");

    db.runTransaction((transaction) => {
      const querySnapshot = await transaction.get(messageRef);
      await transaction.update(dmRef,{
        isLatest: false
      })
      return querySnapshot
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
    getMessages(messagesDispatch, uidFrom, uidTo);
  }, [uidFrom, uidTo]);

  return { isLoading, messagesState, messagesDispatch };
}
