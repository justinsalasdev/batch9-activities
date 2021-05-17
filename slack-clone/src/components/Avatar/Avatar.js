import { useReducer, useState } from "react";
import { storage } from "../../firebase/firebase";
import trackUpload from "../../reducers/trackUpload";
import { BiImageAdd } from "react-icons/bi";
const initialState = { _w: false, _c: false, _e: false };

export default function Avatar() {
  const [imageFile, saveImageFile] = useState("");
  const [state, dispatch] = useReducer(trackUpload, initialState);
  const { _w, _c, _e } = state;

  function startUpload(e) {
    e.preventDefault();
    dispatch({ type: "wait" });
    const ref = storage.ref(`/images/${imageFile.name}`);
    ref
      .put(imageFile)
      .then(snapshot => {
        dispatch({ type: "complete" });
        console.log(snapshot);
      })
      .catch(err => {
        dispatch({
          type: "error",
          payload: {
            error: err
          }
        });
      });
  }

  return (
    <div className="avatar">
      <div className="avatar__image"></div>

      <input
        className="avatar__input"
        id="file"
        name="file"
        accept="image/*"
        type="file"
        onChange={function (e) {
          const imageFile = e.target.files[0];
          console.log(imageFile);
          saveImageFile(_ => imageFile);
        }}
      />
      <label className="avatar__icon" htmlFor="file">
        {<BiImageAdd />}
      </label>

      {_w && <p>uploading..</p>}
      {_c && <p>finished</p>}
      {_e && <p>error occured</p>}
    </div>
  );
}
