import { db } from "../firebase/firebase";
import createDMId from "./createDMId";
import getDateString from "./getDateString";

export default async function getLetters(lettersDispatch, uidFrom, uidTo) {
  try {
    const messages = [];
    const dmRef = db.collection("DMs").doc(createDMId(uidFrom, uidTo));
    //TODO: change to collection name to "Letters"
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
    lettersDispatch({ type: "save letters", payload: messages });
  } catch (err) {
    console.log(err);
  }
}
