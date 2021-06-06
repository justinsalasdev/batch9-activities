import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { db, setTimeStamp } from "../../../firebase/firebase";
import generateString from "../../../helpers/generateString";
import useUserState from "../../../hooks/user/useUserState";

export default function useRoomCreator() {
  const userState = useUserState();
  const memberCountRef = useRef();
  const adderRef = useRef();
  const membersRef = useRef([]);
  const fieldRef = useRef();
  const [isSelecting, toggleSelection] = useState(false);
  const [isCreating, setCreating] = useState(false);
  const navigator = useHistory();

  useEffect(() => {
    fieldRef.current.focus();
  }, []);

  async function handleCreateRoom() {
    const channelName = fieldRef.current.value;
    const chatMembers = membersRef.current;

    if (isSelecting) toggleSelection(false);
    if (!channelName) {
      fieldRef.current.focus();
      return;
    }
    if (membersRef.current.length < 2) {
      adderRef.current.click();
      return;
    }

    try {
      setCreating(true);
      const channelsColRef = db.collection("Channels");

      const channelDoc = await channelsColRef.add({
        name: channelName,
        watchedString: "",
        creator: userState.uid,
        members: chatMembers,
        createdAt: setTimeStamp()
      });

      await channelsColRef.doc("watchedDoc").set({
        watchedString: generateString()
      });

      setCreating(false);
      console.log(channelDoc.id);
      navigator.push(`/channels/${channelDoc.id}`, {
        chatName: channelName,
        userId: userState.uid,
        members: chatMembers
      });
    } catch (err) {
      console.error("Error adding group chat room: ", err);
      setCreating(false);
    }
  }

  return {
    adderRef,
    fieldRef,
    membersRef,
    memberCountRef,
    isSelecting,
    isCreating,
    handleCreateRoom,
    toggleSelector: () => toggleSelection(state => !state)
  };
}
