import { useEffect } from "react";
import { db } from "../../firebase/firebase";
import genClass from "../../helpers/genClass";
import usePeopleDispatcher from "../../hooks/people/usePeopleDispatcher";
import usePeopleState from "../../hooks/people/usePeopleState";
import useUserState from "../../hooks/user/useUserState";
import Menu from "../Menu/Menu";
import Pointer from "../Pointer/Pointer";

export default function Nav({ propStyles }) {
  const userState = useUserState();
  const peopleDispatch = usePeopleDispatcher();
  const peopleState = usePeopleState();

  useEffect(() => {
    db.collection("Users")
      .get()
      .then(querySnapshot => {
        const people = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          people.push(doc.data());
        });
        peopleDispatch({ type: "save people", payload: people });
      });
  }, [userState]);

  if (!userState.uid || !userState.displayName) {
    return <NoNav propStyles={propStyles} />;
  }

  const $ = genClass({ block: "nav", propStyles });

  const channels = [
    { to: "#", text: "batch9", icon: "channel" },
    { to: "#", text: "batch9", icon: "channel" },
    { to: "#", text: "batch11", icon: "channel" }
  ];

  // const people = [
  //   { to: "#", text: "Justin", icon: "picture" },
  //   { to: "#", text: "Raffy", icon: "picture" },
  //   { to: "#", text: "Salas", icon: "picture" }
  // ];

  return (
    <nav {...$()}>
      {/* <div className></div> */}
      <Pointer to="/dms" text="DMs" icon="message" propStyles={$("link").className} />
      {/* <Menu withAdder name={"Channels"} entries={channels} propStyles={$("menu").className} /> */}
      <Menu
        userId={userState.uid}
        menuName={"People"}
        menuItems={peopleState.people}
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
