import { db } from "../firebase/firebase";
import createDMId from "./createDMId";
import getDateString from "./getDateString";

export default async function getMessages(messageDispatch, uidFrom, uidTo) {
  try {
    const messages = [];
    const dmRef = db.collection("DMs").doc(createDMId(uidFrom, uidTo));
    const messageCol = dmRef.collection("Messages").orderBy("timeStamp", "desc").limit(7);
    const messagesCursor = await messageCol.get();

    messagesCursor.forEach(message => {
      const { from, to, content, timeStamp } = message.data();
      messages.unshift({
        id: message.id,
        content,
        from,
        to,
        //timeStamp.toDate() convert firebase timeStamp to regular JS Date Object
        date: getDateString(timeStamp?.toDate() || new Date(), "human"),
        isoDate: getDateString(timeStamp?.toDate() || new Date(), "iso")
      });
    });
    messageDispatch({ type: "save messages", payload: messages });
  } catch (err) {
    console.log(err);
  }
}
