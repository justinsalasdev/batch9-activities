import genClass from "../../helpers/genClass";
import { BiGroup } from "react-icons/bi";
import { useState } from "react";
import { PointerImg } from "../Pointer/Pointer";

export default function Members({ membersData, propStyles }) {
  console.log("Members");
  const [isExpanded, expand] = useState(false);
  const $ = genClass({ block: "members", propStyles });

  return (
    <div {...$()}>
      <span {...$("count")}>{membersData.length}</span>
      <button {...$("action")} onClick={() => expand(state => !state)}>
        <BiGroup />
      </button>

      <div {...$("ref")}>
        {isExpanded && (
          <ul {...$("list")}>
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
          </ul>
        )}
      </div>
    </div>
  );
}
