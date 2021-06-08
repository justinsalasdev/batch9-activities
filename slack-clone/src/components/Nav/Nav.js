import { motion } from "framer-motion";
import genClass from "../../helpers/genClass";
import Menu from "../Menu/Menu";
import useGetChannels from "../Menu/useGetChannels";
import useGetPeople from "../Menu/useGetPeople";
import Channels from "../MenuItems/Channels";
import People from "../MenuItems/People";
import { PointerLink } from "../Pointer/Pointer";

const variants = {
  initial: {
    opacity: 0,
    x: -20
  },
  final: {
    opacity: 1,
    x: 0
  }
};

export default function Nav({ propStyles }) {
  console.log("Nav");

  const $ = genClass({ block: "nav", propStyles });

  return (
    <motion.nav {...$()} variants={variants} animate="final" initial="initial">
      {/* <div className></div> */}
      <PointerLink exact to="/" text="Home" icon="home" propStyles={$("link").className} />
      <PointerLink
        to="/people/new"
        text="Chat someone"
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
    </motion.nav>
  );
}

function NoNav({ propStyles }) {
  const $ = genClass({ block: "nav--none", propStyles });
  return (
    <motion.div {...$()} variants={variants} animate="final" initial="initial">
      <div {...$("link")}></div>
      <div {...$("link")}></div>
      <div {...$("link")}></div>
    </motion.div>
  );
}
