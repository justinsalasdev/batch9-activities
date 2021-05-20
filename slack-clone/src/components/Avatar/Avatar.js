import { useState, useEffect } from "react";
import { storage } from "../../firebase/firebase";
import { BiImageAdd } from "react-icons/bi";
import defaultAvatar from "../../assets/images/default.jpg";
import Loader from "../Loader/Loader";

export default function Avatar() {
  const [isLoading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    setImageURL(localStorage.getItem("imageURL") || defaultAvatar);
  }, []);

  function startUpload(imageFile) {
    const ref = storage.ref(`images/${imageFile.name}`);
    const uploadTask = ref.put(imageFile);
    uploadTask.on(
      "state_changed", //name of event

      //state changed observer
      snapShot => {
        setLoading(true);
        console.log(snapShot);
      },

      //error observer
      err => {
        setLoading(false);
        console.log(err);
      },

      //completion observer
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        ref.getDownloadURL().then(url => {
          setImageURL(url);
          localStorage.setItem("imageURL", url);
          setLoading(false);
        });
      }
    );
  }

  function updateAvatar(e) {
    const imageFile = e.target.files[0];
    if (imageFile) {
      startUpload(imageFile);
    } else {
      console.log("nothing selected");
    }
  }

  return (
    <div className="avatar">
      {isLoading ? (
        <Loader />
      ) : (
        <img src={imageURL || defaultAvatar} className="avatar__image" alt="user avatar"></img>
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
