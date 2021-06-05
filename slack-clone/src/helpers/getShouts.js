import { db } from "../firebase/firebase";
import getDateString from "./getDateString";

export default async function getShouts(shoutsDispatch, channelId) {
  try {
    const shouts = [];
    const channelRef = db.collection("Channels").doc(channelId);
    const shoutsCol = channelRef.collection("Shouts").orderBy("timeStamp", "desc").limit(7);
    const shoutsCursor = await shoutsCol.get();

    shoutsCursor.forEach(shout => {
      const { from, content, timeStamp } = shout.data();
      shouts.unshift({
        id: shout.id,
        content,
        from,
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
