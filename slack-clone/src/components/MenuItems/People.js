import genClass from "../../helpers/genClass";
import { PointerImg } from "../Pointer/Pointer";
import { motion } from "framer-motion";

export default function People({ people }) {
  console.log("MenuItems-People");
  const $ = genClass({ block: "menu" });
  return (
    <motion.ul
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.1 }}
      {...$("items")}
    >
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
    </motion.ul>
  );
}
