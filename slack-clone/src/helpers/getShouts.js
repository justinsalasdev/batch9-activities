import { db } from "../firebase/firebase";
import getDateString from "./getDateString";

export default async function getShouts(shoutsDispatch, chatId) {
  try {
    const shouts = [];
    const channelRef = db.collection("GMs").doc(chatId);
    const shoutsCol = channelRef.collection("Shouts").orderBy("timeStamp", "desc").limit(7);
    const shoutsCursor = await shoutsCol.get();

    shoutsCursor.forEach(shout => {
      const { from, to, content, timeStamp } = shout.data();
      shouts.unshift({
        id: shout.id,
        content,
        from,
        to,
        //timeStamp.toDate() convert firebase timeStamp to regular JS Date Object
        date: getDateString(timeStamp?.toDate() || new Date(), "human"),
        isoDate: getDateString(timeStamp?.toDate() || new Date(), "iso")
      });
    });
    shoutsDispatch({ type: "save shouts", payload: shouts });
  } catch (err) {
    console.log(err);
  }
}
