const regexes = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
};
const minLenghts = {
  password: 5
};

export default function validateField(value, id) {
  if (!value) {
    return { value, errorMessage: `${id} is required` };
  }

  if (regexes?.[id]) {
    console.log("with regex");
    const isValid = regexes[id].test(value);
    return { value, errorMessage: `${isValid ? "invalid" : "valid"}` };
  }

  // if (value.length < minLenghts?.[id].length || 0) {
  //   return { value, errorMessage: `${id} must be greater than ${minLenghts[id] - 1}` };
  // }

  return { value, errorMessage: "" };
}
