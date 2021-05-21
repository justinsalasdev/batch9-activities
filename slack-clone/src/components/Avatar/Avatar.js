import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import defaultAvatar from "../../assets/images/default.jpg";
import Loader from "../Loader/Loader";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import uploadPhoto from "../../helpers/uploadPhoto";

export default function Avatar({ photoURL }) {
  console.log("Avatar");
  const [isLoading, setLoading] = useState(false);
  const userDispatch = useUserDispatcher();

  function updateAvatar(e) {
    const imageFile = e.target.files[0];
    if (imageFile) {
      uploadPhoto(imageFile, setLoading, userDispatch);
    } else {
      console.log("nothing selected");
    }
  }
  return (
    <div className="avatar">
      {isLoading ? (
        <Loader />
      ) : (
        <img src={photoURL || defaultAvatar} className="avatar__image" alt="user avatar"></img>
      )}
      <input
        className="avatar__input"
        id="file"
        name="file"
        accept="image/*"
        type="file"
        onChange={updateAvatar}
      />
      {!isLoading && (
        <label className="avatar__icon" htmlFor="file">
          {<BiImageAdd />}
        </label>
      )}
    </div>
  );
}
