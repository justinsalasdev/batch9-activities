import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase/firebase";
export default function useChatBarLogic(to, from) {
  const areaRef = useRef();
  const submitRef = useRef();
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);

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
    } else {
      return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      return;
    } else {
      setLoading(true);
      db.collection("Messages")
        .add({
          content,
          from,
          to
        })
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
          setLoading(false);
        });
    }
    setContent("");
  }

  return {
    content,
    areaRef,
    submitRef,
    isLoading,
    handleSubmit,
    handleEnter,
    handleChange
  };
}
