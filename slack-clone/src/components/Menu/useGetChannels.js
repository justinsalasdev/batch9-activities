import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import useUserState from "../../hooks/user/useUserState";

export default function useGetChannels() {
  const [channels, setChannels] = useState([]);
  const userState = useUserState();

  useEffect(() => {
    const docRef = db.collection("Channels").doc("watchedDoc");
    docRef.onSnapshot(doc => {
      if (doc) {
        getChannels(setChannels, userState.uid);
      } else {
        console.log("dont get channel messages");
      }
    });
    // eslint-disable-next-line
  }, [userState]);

  return channels;
}

async function getChannels(setChannels, userId) {
  const retrievedChannels = [];
  const channelSnapshots = await db
    .collection("Channels")
    .where("members", "array-contains", userId)
    .orderBy("createdAt", "desc")
    .get();

  channelSnapshots.forEach(channelDoc => {
    if (channelDoc.data()) {
      retrievedChannels.push({ id: channelDoc.id, ...channelDoc.data() });
    } else {
      return;
    }
  });
  setChannels(retrievedChannels);
}
