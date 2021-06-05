import genClass from "../../helpers/genClass";
import useUserState from "../../hooks/user/useUserState";
import Menu from "../Menu/Menu";
import useGetChannels from "../Menu/useGetChannels";
import useGetPeople from "../Menu/useGetPeople";
import { PointerAction, PointerLink } from "../Pointer/Pointer";

export default function Nav({ propStyles }) {
  const userState = useUserState();

  if (!userState.uid || !userState.displayName) {
    return <NoNav propStyles={propStyles} />;
  }

  const $ = genClass({ block: "nav", propStyles });

  return (
    <nav {...$()}>
      {/* <div className></div> */}
      <PointerAction
        buttonAction={() => {
          navigator.push("/people/new");
        }}
        to="/dms"
        text="DMs"
        icon="message"
        propStyles={$("link").className}
      />
      <Menu
        adderLink={
          <PointerLink
            to={`/channels/new`}
            text={`Add channel`}
            icon="plus"
            mods={{ link: ["menu"], action: ["none"], icon: ["left"] }}
          />
        }
        menuName={"Channels"}
        propStyles={$("menu").className}
        getItems={useGetChannels}
      />
      <Menu menuName={"People"} propStyles={$("menu").className} getItems={useGetPeople} />
    </nav>
  );
}

function NoNav({ propStyles }) {
  const $ = genClass({ block: "nav--none", propStyles });
  return (
    <div {...$()}>
      <div {...$("link")}></div>
      <div {...$("link")}></div>
      <div {...$("link")}></div>
    </div>
  );
}
