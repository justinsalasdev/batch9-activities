export default function genClass(config) {
  const { block, mods, ps } = config;
  let blockString = "";

  if (block) {
    blockString += block;
  }
  if (mods?.[block]) {
    blockString +=
      " " + mods[block].map(mod => mod && `${block}--${mod}`).join(" ") || "";
  }

  if (ps) {
    blockString += " " + ps;
  }

  return function $(elem) {
    const elemString = `${block}__${elem}`;
    let modifiedString = "";

    if (!elem) {
      return { className: blockString };
    }

    if (mods?.[elem]) {
      modifiedString +=
        elemString +
          " " +
          mods[elem].map(mod => mod && `${elemString}--${mod}`).join(" ") || "";
      return { className: modifiedString };
    } else {
      return { className: elemString };
    }
  };
}

export function toggler(condition, modifier) {
  if (condition) {
    return modifier;
  } else {
    return "";
  }
}
