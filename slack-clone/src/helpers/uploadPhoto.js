import { auth, storage } from "../firebase/firebase";

export default function uploadPhoto(imageFile, setLoading, authDispatch) {
  //params imageFile, setLoading, authDispatch
  const ref = storage.ref(`images/${imageFile.name}`);
  const uploadTask = ref.put(imageFile);
  uploadTask.on(
    "state_changed", //name of event

    //state changed observer
    snapShot => {
      setLoading(true);
      console.log("snapshot");
    },

    //error observer
    err => {
      setLoading(false);
      console.log(err);
    },

    //success
    () => {
      ref.getDownloadURL().then(url => {
        //TODO: make sure that user can only change photo when logged in
        const user = auth.currentUser;

        user
          .updateProfile({
            photoURL: url
          })
          .then(_ => {
            authDispatch({ type: "update photo", payload: url });
            setLoading(false);
          })
          .catch(err => err);
      });
    }
  );
}
