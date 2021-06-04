import { useEffect } from "react";
import getShouts from "../../../helpers/getShouts";
import useShoutDispatcher from "../../../hooks/shouts/useShoutsDispatcher";

export default function useGroupChat(props) {
  const shoutDispatch = useShoutDispatcher();

  const channelId = props.match.params.id;
  const channelName = props.location.state.channelName;
  const uidFrom = props.location.state.userId;

  useEffect(() => {
    const channelRef = db.collection("Channels").doc(channelId);

    channelRef.onSnapshot(doc => {
      if (doc) {
        getShouts(shoutDispatch, channelId);
      } else {
        console.log("dont get channel messages");
      }
    });
    // eslint-disable-next-line
  }, [channelId]);

  return {
    channelId,
    channelName,
    uidFrom
  };
}
