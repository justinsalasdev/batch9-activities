import Avatar from "../Avatar/Avatar";
import useUserDispatcher from "../../hooks/user/useUserDispatcher";
import useUserState from "../../hooks/user/useUserState";
import signOut from "../../helpers/signOut";
import Name from "../Name/Name";

export default function Profile() {
  const userDispatch = useUserDispatcher();
  const userState = useUserState();

  console.log(userState);

  return (
    <div className="profile">
      <Avatar photoURL={userState?.photoURL} />
      <Name initialName={userState?.displayName} />
      <button className="profile__logout" onClick={() => signOut(userDispatch)}>
        logout
      </button>
    </div>
  );
}
