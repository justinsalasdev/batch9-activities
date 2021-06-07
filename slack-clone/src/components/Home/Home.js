import genClass from "../../helpers/genClass";
import Check from "../Check/Check";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io";
import { SiFirebase, SiReactrouter, SiFramer } from "react-icons/si";

const reqs = [
  "User is able to create account and login with email and password",
  "User is able to create and add users to a new channel",
  "User is able to send and receive direct message to and from other user",
  "User is able to send and receive message to and from a channel"
];

const h3Vars = {
  hidden: { opacity: 0, x: -10 },
  shown: { opacity: 1, x: 0 }
};

const liVars = {
  shown: i => ({
    opacity: 1,
    transition: {
      delay: i * 1
    }
  }),
  hidden: { opacity: 0 }
};

const techIcons = [FaReact, IoLogoSass, SiFirebase, SiReactrouter, SiFramer];
const colors = ["#0693E3", "#e82456", "#f5b606", "#000", "#000"];

const techVars = {
  loop: i => ({
    y: -10,
    "border-radius": `1rem`,
    color: colors[i],
    background: "rgba(254, 254, 254, 0.9)",
    transition: {
      delay: i * 0.5,
      duration: 1,
      yoyo: Infinity
    }
  })
};

export default function Home({ mods, propStyles }) {
  const $ = genClass({ block: "home", mods, propStyles });
  return (
    <div {...$()}>
      <h2 {...$("heading")}>SLACK CLONE</h2>
      <section {...$("req-summary")}>
        <motion.h3 variants={h3Vars} animate="shown" initial="hidden" {...$("req-heading")}>
          PROJECT REQUIREMENTS
        </motion.h3>
        <motion.ul {...$("reqs")}>
          {reqs.map((reqTxt, index) => {
            return (
              <motion.li
                custom={index}
                initial="hidden"
                animate="shown"
                variants={liVars}
                {...$("item")}
                key={index}
              >
                <span {...$("icon")}>
                  <Check delay={index} />
                </span>
                <span {...$("req")}>{reqTxt}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </section>
      <section {...$("stack")}>
        <h3 {...$("tech-heading")}>BUILT WITH</h3>
        <ul {...$("techs")}>
          {techIcons.map((TechIcon, index) => {
            return (
              <motion.li
                custom={index}
                variants={techVars}
                animate="loop"
                {...$("tech")}
                key={index}
              >
                <TechIcon />
              </motion.li>
            );
          })}
        </ul>
        <span>
          designed by <strong>Justin Salas</strong>
        </span>
      </section>
    </div>
  );
}
