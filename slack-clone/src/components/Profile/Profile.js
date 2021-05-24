import Avatar from "../Avatar/Avatar";
import useUserState from "../../hooks/user/useUserState";
import signOut from "../../helpers/signOut";
import LineForm from "../LineForm/LineForm";
import createNameChanger from "../../hooks/createNameChanger";
import genClass from "../../helpers/genClass";

const lineFormMods = {
  "line-form": ["profile"]
};

export default function Profile() {
  const { photoURL, displayName, uid } = useUserState();

  if (!uid) {
    return <NoProfile />;
  }

  return (
    <div className="profile">
      <Avatar photoURL={photoURL} />
      <LineForm mods={lineFormMods} customHook={createNameChanger(displayName || "User")} />
      <button className="profile__logout" onClick={() => signOut()}>
        logout
      </button>
    </div>
  );
}

function NoProfile() {
  const $ = genClass("profile--none", {});
  return (
    <div {...$()}>
      <div {...$("avatar")}></div>
      <div {...$("name")}></div>
    </div>
  );
}
