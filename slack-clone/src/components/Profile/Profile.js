import Avatar from "../Avatar/Avatar";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../../firebase/firebase";
import useAuthDispatcher from "../../hooks/auth/useAuthDispatcher";

export default function Profile() {
  const authDispatch = useAuthDispatcher();
  function signOut() {
    auth
      .signOut()
      .then(() => console.log("logged out"))
      .catch(err => {
        authDispatch({ type: "error", payload: err });
      });
  }

  return (
    <div className="profile">
      <Avatar />
      <div className="profile__name">Justin Rafael </div>
      <button className="profile__logout" onClick={signOut}>
        <FiLogOut />
      </button>
    </div>
  );
}
