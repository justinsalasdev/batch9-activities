import { db } from "../firebase/firebase";

const saveChannel = type => resources => e => {
  e.preventDefault();
  const { state, labelRef, setLoading, userState, initialName } = resources;
  if (!state || state === initialName) {
    labelRef.current.textContent = initialName;
    labelRef.current.previousElementSibling.blur();
  } else {
    setLoading(true);

    db.collection(type)
      .add({
        name: state,
        creator: userState.uid
      })
      .then(docRef => {
        setLoading(false);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        setLoading(false);
        console.error("Error adding document: ", error);
      });
  }
};

export default saveChannel;
