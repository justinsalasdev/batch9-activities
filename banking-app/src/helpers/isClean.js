export default function isClean(formErrors) {
  const errValues = Object.values(formErrors);
  return errValues.reduce((isClean, errValue) => {
    if (errValue || errValue === "initial") {
      return false && isClean;
    } else {
      return true && isClean;
    }
  }, true);
}
