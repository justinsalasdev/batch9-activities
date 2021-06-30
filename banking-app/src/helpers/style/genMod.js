export default function genMod(modifier, modNames) {
  const modObj = {};
  modNames.forEach(modName => {
    modObj[modName] = [modifier];
  });

  return modObj;
}
