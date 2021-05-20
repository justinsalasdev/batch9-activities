export default function isClean(errors) {
  if (errors.length <= 0) return false;
  return errors.reduce((status, current) => {
    if (current === undefined || current.length > 0) {
      return status && false;
    }
    if (current === "") {
      return status && true;
    }
    return status && current;
  }, true);
}
