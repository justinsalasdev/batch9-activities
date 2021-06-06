import genClass from "../../helpers/genClass";
import { PointerImg } from "../Pointer/Pointer";

export default function People({ people }) {
  console.log("MenuItems-People");
  const $ = genClass({ block: "menu" });
  return (
    <ul {...$("items")}>
      {people.map(person => (
        <li {...$("item")} key={person.uid}>
          <PointerImg //inside is <Link/> from 'react-router
            text={person.name}
            to={{
              pathname: `/people/${person.uid}`,
              state: {
                chatName: person.name
              }
            }}
            photoURL={person.photoURL}
            mods={{ link: ["menu"], icon: ["left"] }}
          />
        </li>
      ))}
    </ul>
  );
}
