export default function iterateCheck(value, validators) {
  let error = "";
  for (let i = 0; i < validators.length; i++) {
    error = validators[i](value);
    if (error && error !== "initial") {
      break;
    } else if (error === "initial") {
      break;
    } else {
      continue;
    }
  }
  return error;
}
