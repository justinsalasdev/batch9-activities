import Avatar from "../Avatar/Avatar";
import useUserState from "../../hooks/user/useUserState";
import signOut from "../../helpers/signOut";
import LineForm from "../LineForm/LineForm";
import genClass from "../../helpers/genClass";

export default function Profile({ propStyles }) {
  console.log("Profile");
  const $ = genClass({ block: "profile", propStyles });
  const { photoURL, displayName, uid } = useUserState();

  if (!uid) {
    return <NoProfile />;
  }

  return (
    <div {...$()}>
      <Avatar propStyles={$("avatar").className} photoURL={photoURL} />
      <LineForm propStyles={$("name").className} initialName={displayName} />
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
