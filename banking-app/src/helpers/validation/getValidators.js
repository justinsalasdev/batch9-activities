export default function getValidators(name, list) {
  const validators = {
    isInitial: () => value => value === "_initial" ? "initial" : "",
    isRequired: () => value => value ? "" : `${name} is required`,

    //refactor
    isValid: regex => value => regex.test(value) ? "" : `${name} is invalid`,
    isValidDate: regex => value =>
      regex.test(value) ? "" : `${name} format DD/MM/YYYY`,
    isValidPw: regex => value =>
      regex.test(value)
        ? ""
        : `${name} must contain a number & special character`,
    isMin: length => value =>
      value.length < length
        ? `${name} must be at least ${length} characters`
        : "",
    isLength: length => value =>
      value.length !== length ? `${name} must be ${length} characters` : ""
  };
  return list.map(([id, input]) => validators[id](input));
}
