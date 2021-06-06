import { auth, db, storage } from "../firebase/firebase";

export default function uploadPhoto(imageFile, setLoading, userDispatch, userId) {
  //params imageFile, setLoading, userDispatch
  const ref = storage.ref(`images/${userId}/${imageFile.name}`);
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
    async () => {
      try {
        const userRef = db.collection("Users").doc(userId);
        const url = await ref.getDownloadURL();
        const user = auth.currentUser;
        await user.updateProfile({ photoURL: url });
        await userRef.update({ photoURL: url });
        userDispatch({ type: "update photo", payload: url });
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  );
}
