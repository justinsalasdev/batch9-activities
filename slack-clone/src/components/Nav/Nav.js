import { useEffect } from "react";
import { db } from "../../firebase/firebase";
import genClass from "../../helpers/genClass";
import usePeopleDispatcher from "../../hooks/people/usePeopleDispatcher";
import usePeopleState from "../../hooks/people/usePeopleState";
import useUserState from "../../hooks/user/useUserState";
import Menu from "../Menu/Menu";
import NavLink from "../NavLink/NavLink";

export default function Nav({ propStyles }) {
  const { uid, displayName } = useUserState();
  const peopleDispatch = usePeopleDispatcher();
  const { people } = usePeopleState();

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
  }, []);

  if (!uid || !displayName) {
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
      <NavLink to="/dms" text="DMs" icon="message" propStyles={$("link").className} />
      {/* <Menu withAdder name={"Channels"} entries={channels} propStyles={$("menu").className} /> */}
      <Menu name={"People"} entries={people} propStyles={$("menu").className} />
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
