import Avatar from "../Avatar/Avatar";
import useUserState from "../../hooks/user/useUserState";
import signOut from "../../helpers/signOut";
import LineForm from "../LineForm/LineForm";
import createNameChanger from "../../hooks/createNameChanger";

export default function Profile() {
  const { photoURL, displayName, uid } = useUserState();

  if (!uid) {
    return <NoProfile />;
  }

  return (
    <div className="profile">
      <Avatar photoURL={photoURL} />
      <LineForm customHook={createNameChanger(displayName || "User")} />
      <button className="profile__logout" onClick={() => signOut()}>
        logout
      </button>
    </div>
  );
}

function NoProfile() {
  return (
    <div className="profile profile--none">
      <div className="profile--none__avatar"></div>
      <div className="profile--none__name"></div>
    </div>
  );
}
