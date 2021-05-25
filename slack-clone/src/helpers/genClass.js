export default function genClass(config) {
  const { block, mods, propStyles } = config;
  let blockString = "";

  if (block) {
    blockString += block;
  }
  if (mods?.[block]) {
    blockString += " " + mods[block].map(mod => `${block}--${mod}`).join(" ");
  }

  if (propStyles) {
    blockString += " " + propStyles;
  }

  return function (elem) {
    const elemString = `${block}__${elem}`;
    let modifiedString = "";

    if (!elem) {
      return { className: blockString };
    }

    if (mods?.[elem]) {
      modifiedString += elemString + " " + mods[elem].map(mod => `${elemString}--${mod}`).join(" ");
      return { className: modifiedString };
    } else {
      return { className: elemString };
    }
  };
}