import { useEffect } from "react";
import { db } from "../../../firebase/firebase";
import getShouts from "../../../helpers/getShouts";
import useShoutsDispatcher from "../../../hooks/shouts/useShoutsDispatcher";
import useShoutsState from "../../../hooks/shouts/useShoutsState";
import useUserState from "../../../hooks/user/useUserState";

export default function useGroupChat(props) {
  const shoutsDispatch = useShoutsDispatcher();
  const shoutsState = useShoutsState();
  const { uid: uidFrom } = useUserState();

  const channelId = props.match.params.id;
  const channelName = props.location.state.chatName;

  useEffect(() => {
    const channelRef = db.collection("Channels").doc(channelId);
    channelRef.onSnapshot(doc => {
      if (doc) {
        getShouts(shoutsDispatch, channelId);
      } else {
        console.log("dont get channel messages");
      }
    });
    // eslint-disable-next-line
  }, [channelId]);

  return {
    messages: shoutsState.shouts,
    channelId,
    channelName,
    uidFrom
  };
}
