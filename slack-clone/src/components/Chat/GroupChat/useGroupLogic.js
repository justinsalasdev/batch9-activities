import { useRef, useState } from "react";

export default function useGroupChatLogic() {
  const memberCountRef = useRef();
  const membersRef = useRef([]);
  const [isSelecting, toggleSelection] = useState(false);

  return {
    membersRef,
    memberCountRef,
    isSelecting,
    toggleSelector: () => toggleSelection(state => !state)
  };
}
