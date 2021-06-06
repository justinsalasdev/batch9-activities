import genClass from "../../helpers/genClass";
import { PointerLink } from "../Pointer/Pointer";

export default function People({ people }) {
  const $ = genClass({ block: "menu" });
  return (
    <ul {...$("items")}>
      {people.map(person => (
        <li {...$("item")} key={person.uid}>
          <PointerLink //inside is <Link/> from 'react-router
            text={person.name}
            icon="picture"
            to={{
              pathname: `/people/${person.uid}`,
              state: {
                chatName: person.name
              }
            }}
            mods={{ link: ["menu"], icon: ["left"] }}
          />
        </li>
      ))}
    </ul>
  );
}
