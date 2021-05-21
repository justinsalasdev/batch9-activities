import Avatar from "../Avatar/Avatar";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import useUserState from "../../hooks/user/useUserState";
import signOut from "../../helpers/signOut";

export default function Profile() {
  const userDispatch = useUserDispatcher();
  const userState = useUserState();

  console.log(userState);

  return (
    <div className="profile">
      <Avatar photoURL={userState?.photoURL} />
      <p className="profile__name">{userState?.displayName || "User"}</p>
      <button className="profile__logout" onClick={() => signOut(userDispatch)}>
        logout
      </button>
    </div>
  );
}
