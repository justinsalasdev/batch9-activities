import Avatar from "../Avatar/Avatar";
import useUserState from "../../hooks/user/useUserState";
import signOut from "../../helpers/signOut";
import LineForm from "../LineForm/LineForm";
import genClass from "../../helpers/genClass";
import { useHistory } from "react-router-dom";

export default function Profile({ propStyles }) {
  console.log("Profile");
  const navigator = useHistory();
  const $ = genClass({ block: "profile", propStyles });
  const { photoURL, displayName, uid, error } = useUserState();

  if (!uid) {
    return <NoProfile propStyles={propStyles} />;
  }

  return (
    <div {...$()}>
      <Avatar propStyles={$("avatar").className} photoURL={photoURL} />
      <LineForm
        error={error}
        propStyles={$("name").className}
        initialName={displayName || "User"}
      />
      <button
        {...$("logout")}
        onClick={() => {
          signOut();
          navigator.push("/login");
        }}
      >
        logout
      </button>
    </div>
  );
}

function NoProfile({ propStyles }) {
  const $ = genClass({ block: "profile--none", propStyles });
  return (
    <div {...$()}>
      <div {...$("avatar")}></div>
      <div {...$("name")}></div>
    </div>
  );
}
