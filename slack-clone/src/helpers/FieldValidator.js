const regexes = {
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
};

const minLengths = {
  password: 6
};

export default class FieldValidator {
  constructor() {
    this.error = undefined;
  }

  validateField(value, id) {
    if (!value) {
      this.error = "field is required";
      return value;
    }

    if (regexes[id] && !regexes[id].test(value)) {
      this.error = `${id} is invalid`;
      return value;
    }

    if (minLengths[id] && value.length < minLengths[id]) {
      this.error = `${id} must be greater than ${minLengths[id] - 1} characters`;
      return value;
    }

    this.error = "";
    return value;
  }
}
