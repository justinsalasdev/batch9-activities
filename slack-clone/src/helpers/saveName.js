import { auth } from "../firebase/firebase";

const saveName = resources => e => {
  e.preventDefault();
  const { state, labelRef, setLoading, userDispatch, initialName } = resources;
  if (!state || state === initialName) {
    labelRef.current.textContent = initialName;
    labelRef.current.previousElementSibling.blur();
  } else {
    setLoading(true);

    const user = auth.currentUser;
    user
      .updateProfile({
        displayName: state
      })
      .then(function () {
        setLoading(false);
        userDispatch({ type: "update name", payload: state }); //rerenders <Name/> with new initialName
        labelRef.current.previousElementSibling.blur();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

export default saveName;
