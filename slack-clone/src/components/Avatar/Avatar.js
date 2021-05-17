import { useState, useEffect } from "react";
import { storage } from "../../firebase/firebase";
import { BiImageAdd } from "react-icons/bi";
import defaultAvatar from "../../assets/images/default.jpg";
import Loader from "../Loader/Loader";
import useLoadUpdater from "../../hooks/userLoadUpdater";
const initialState = { _w: false, _c: false, _e: false };

export default function Avatar() {
  const [imageURL, setImageURL] = useState("");
  const [state, dispatch] = useLoadUpdater(initialState);
  const { _w, _e } = state;
  console.log(state);

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
        dispatch({ type: "wait" });
        console.log(snapShot);
      },

      //error observer
      err => {
        dispatch({
          type: "error",
          error: err
        });
      },

      //completion observer
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        ref.getDownloadURL().then(url => {
          setImageURL(url);
          localStorage.setItem("imageURL", url);
          dispatch({ type: "complete" });
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
      {_w ? (
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
      {!_w && (
        <label className="avatar__icon" htmlFor="file">
          {<BiImageAdd />}
        </label>
      )}

      {_e && <p>error occured</p>}
    </div>
  );
}
