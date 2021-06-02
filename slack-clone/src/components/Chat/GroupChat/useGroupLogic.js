import { useEffect, useRef, useState } from "react";

export default function useGroupChatLogic() {
  const memberCountRef = useRef();
  const adderRef = useRef();
  const membersRef = useRef([]);
  const fieldRef = useRef();
  const [isSelecting, toggleSelection] = useState(false);
  const [isCreating, setCreating] = useState(false);

  useEffect(() => {
    fieldRef.current.focus();
  }, []);

  function handleCreateRoom() {
    if (isSelecting) toggleSelection(false);
    if (!fieldRef.current.value) {
      fieldRef.current.focus();
      return;
    }
    if (membersRef.current.length < 2) {
      adderRef.current.click();
      return;
    }

    setCreating(true);
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
