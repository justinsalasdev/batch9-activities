import { useEffect, useRef, useState } from "react";

//helper
function countNL(content) {
  return (content.match(/\n/g) || []).length;
}

export default function useChatBar() {
  const areaRef = useRef();
  const submitRef = useRef();
  const [content, setContent] = useState("");

  useEffect(() => {
    areaRef.current.setAttribute("rows", `${countNL(content) + 1}`);
  });

  function handleEnter(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitRef.current.click();
    } else {
      return;
    }
  }

  return {
    content,
    areaRef,
    submitRef,
    handleEnter,
    handleChange: e => setContent(e.target.value),
    clearInput: () => setContent("")
  };
}
