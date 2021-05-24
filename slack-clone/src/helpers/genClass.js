export default function genClass(block, mods) {
  const blockMods = mods?.[block];

  return function (elem) {
    const elemMods = mods[elem];
    if (!elem) {
      if (blockMods === undefined || blockMods.length <= 0) {
        return { className: block };
      } else {
        return {
          className: block + " " + blockMods.map(modifier => `${block}--${modifier}`).join(" ")
        };
      }
    } else {
      if (elemMods === undefined || elemMods.length <= 0) {
        return { className: `${block}__${elem}` };
      } else {
        return {
          className:
            `${block}__${elem}` +
            " " +
            elemMods.map(modifier => `${block}__${elem}--${modifier}`).join(" ")
        };
      }
    }
  };
}
