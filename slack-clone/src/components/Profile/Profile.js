import Avatar from "../Avatar/Avatar";
import useUserState from "../../hooks/user/useUserState";
import signOut from "../../helpers/signOut";
import Name from "../Name/Name";
import { Redirect, useHistory } from "react-router-dom";

export default function Profile() {
  console.log("Profile");
  const { photoURL, displayName, uid } = useUserState();
  const navigator = useHistory();

  if (!uid) {
    return <NoProfile />;
  }

  return (
    <div className="profile">
      <Avatar photoURL={photoURL} />
      <Name initialName={displayName} />
      <button className="profile__logout" onClick={() => signOut(navigator)}>
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
