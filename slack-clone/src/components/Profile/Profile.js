import Avatar from "../Avatar/Avatar";
import useUserState from "../../hooks/user/useUserState";
import signOut from "../../helpers/signOut";
import LineForm from "../LineForm/LineForm";
import genClass from "../../helpers/genClass";

const lineFormMods = {
  "line-form": ["profile"]
};

export default function Profile() {
  console.log("Profile");
  const $ = genClass({ block: "profile" });
  const { photoURL, displayName, uid } = useUserState();

  if (!uid) {
    return <NoProfile />;
  }

  return (
    <div className="profile">
      <Avatar propStyles={$("avatar").className} photoURL={photoURL} />
      <LineForm type="profile" mods={lineFormMods} initialName={displayName} />
      <button {...$("logout")} onClick={() => signOut()}>
        logout
      </button>
    </div>
  );
}

function NoProfile() {
  const $ = genClass({ block: "profile", mod: { profile: ["none"] } });
  return (
    <div {...$()}>
      <div {...$("avatar")}></div>
      <div {...$("name")}></div>
    </div>
  );
}
