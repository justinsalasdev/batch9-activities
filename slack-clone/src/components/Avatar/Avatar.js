import { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import defaultAvatar from "../../assets/images/avatar.svg";
import Loader from "../Loader/Loader";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import uploadPhoto from "../../helpers/uploadPhoto";
import genClass from "../../helpers/genClass";

export default function Avatar({ photoURL, propStyles }) {
  const imgRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const userDispatch = useUserDispatcher();
  const $ = genClass({ block: "avatar", propStyles });

  function updateAvatar(e) {
    const imageFile = e.target.files[0];
    if (imageFile) {
      uploadPhoto(imageFile, setLoading, userDispatch);
    } else {
      console.log("nothing selected");
    }
  }

  return (
    <div {...$()}>
      {isLoading ? (
        <Loader />
      ) : (
        <img
          ref={imgRef}
          onError={() => {
            imgRef.current.setAttribute("src", defaultAvatar);
          }}
          src={photoURL || defaultAvatar}
          {...$("image")}
          alt="user avatar"
        ></img>
      )}
      <input
        {...$("input")}
        id="file"
        name="file"
        accept="image/*"
        type="file"
        onChange={updateAvatar}
      />
      {!isLoading && (
        <label {...$("icon")} htmlFor="file">
          {<BiImageAdd />}
        </label>
      )}
    </div>
  );
}
