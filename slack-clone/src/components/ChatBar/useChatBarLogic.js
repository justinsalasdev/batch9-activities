import { useEffect, useRef, useState } from "react";
export default function useChatBarLogic() {
  const areaRef = useRef();
  const submitRef = useRef();
  const [content, setContent] = useState("");

  function countNL(content) {
    return (content.match(/\n/g) || []).length;
  }

  useEffect(() => {
    areaRef.current.setAttribute("rows", `${countNL(content) + 1}`);
  });

  function handleChange(e) {
    setContent(e.target.value);
  }

  function handleEnter(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitRef.current.click();
      setContent("");
    } else {
      return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return {
    content,
    areaRef,
    submitRef,
    handleSubmit,
    handleEnter,
    handleChange
  };
}
