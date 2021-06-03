import { useEffect, useRef, useState } from "react";
import { db } from "../../../firebase/firebase";
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

  useEffect(() => {
    fieldRef.current.focus();
  }, []);

  async function handleCreateRoom() {
    if (isSelecting) toggleSelection(false);
    if (!fieldRef.current.value) {
      fieldRef.current.focus();
      return;
    }
    if (membersRef.current.length < 2) {
      adderRef.current.click();
      return;
    }

    try {
      setCreating(true);
      const GMsRef = db.collection("GMs");

      await GMsRef.doc("watchedDoc").set({
        watchedString: generateString()
      });

      const gmId = await GMsRef.add({
        chatName: fieldRef.current.value,
        watchedString: "",
        creator: userState.uid,
        members: [...membersRef.current]
      });

      console.log(gmId.id);
      setCreating(false);
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
