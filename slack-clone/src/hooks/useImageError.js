import { useRef } from "react";
import defaultAvatar from "../assets/images/avatar.svg";

export default function useImageError() {
  const imgRef = useRef();

  function handleImgError() {
    imgRef.current.setAttribute("src", defaultAvatar);
  }

  return { imgRef, handleImgError };
}
