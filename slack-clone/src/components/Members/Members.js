import genClass from "../../helpers/genClass";
import { BiGroup } from "react-icons/bi";
import { useState } from "react";
import { PointerImg } from "../Pointer/Pointer";
import { motion, AnimatePresence } from "framer-motion";

export default function Members({ membersData, propStyles }) {
  console.log("Members");
  const [isExpanded, expand] = useState(false);
  const $ = genClass({ block: "members", propStyles });

  return (
    <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -10 }} {...$()}>
      <span {...$("count")}>{membersData.length}</span>
      <button {...$("action")} onClick={() => expand(state => !state)}>
        <BiGroup />
      </button>

      <div {...$("ref")}>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              {...$("list")}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {membersData.map(member => {
                return (
                  <li {...$("item")} key={member.uid}>
                    <PointerImg //inside is <Link/> from 'react-router
                      text={member.name}
                      to={{
                        pathname: `/people/${member.uid}`,
                        state: {
                          chatName: member.name
                        }
                      }}
                      photoURL={member.photoURL}
                      mods={{ link: ["menu"], icon: ["left"] }}
                    />
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
