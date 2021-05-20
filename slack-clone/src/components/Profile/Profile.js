import Avatar from "../Avatar/Avatar";
import { FiLogOut } from "react-icons/fi";
import useAuthDispatcher from "../../hooks/auth/useAuthDispatcher";
import useAuthState from "../../hooks/auth/useAuthState";
import signOut from "../../helpers/signOut";

export default function Profile() {
  const authDispatch = useAuthDispatcher();
  const { user } = useAuthState();

  return (
    <div className="profile">
      <Avatar photoURL={user?.photoURL} />
      <p className="profile__name">{user?.displayName || "User"}</p>
      <button className="profile__logout" onClick={() => signOut(authDispatch)}>
        <FiLogOut />
      </button>
    </div>
  );
}
