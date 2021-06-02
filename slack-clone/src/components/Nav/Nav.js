import genClass from "../../helpers/genClass";
import Menu from "../Menu/Menu";
import Pointer, { PointerAction } from "../Pointer/Pointer";
import useNavLogic from "./useNavLogic";

export default function Nav({ propStyles }) {
  const { userId, userDisplayName, navigator, channels, people } = useNavLogic();

  if (!userId || !userDisplayName) {
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
        withAdder
        userId={userId}
        menuName={"Channels"}
        menuItems={channels}
        propStyles={$("menu").className}
      />
      <Menu
        userId={userId}
        menuName={"People"}
        menuItems={people}
        propStyles={$("menu").className}
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
