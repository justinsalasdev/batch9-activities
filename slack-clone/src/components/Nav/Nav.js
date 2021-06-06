import { useHistory } from "react-router-dom";
import genClass from "../../helpers/genClass";
import useUserState from "../../hooks/user/useUserState";
import Menu from "../Menu/Menu";
import useGetChannels from "../Menu/useGetChannels";
import useGetPeople from "../Menu/useGetPeople";
import Channels from "../MenuItems/Channels";
import People from "../MenuItems/People";
import { PointerAction } from "../Pointer/Pointer";

export default function Nav({ propStyles }) {
  const navigator = useHistory();
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
        menuName={"Channels"}
        propStyles={$("menu").className}
        renderItems={items => <Channels channels={items} />}
        getItems={useGetChannels}
      />

      <Menu
        menuName={"People"}
        propStyles={$("menu").className}
        renderItems={items => <People people={items} />}
        getItems={useGetPeople}
      />
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
