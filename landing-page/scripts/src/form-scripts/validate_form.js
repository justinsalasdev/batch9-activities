import validateField from "./validate_field.js";
import { formData, errorData } from "./form_data.js";
import displayData from "./display_data.js";
import displayError from "./display_error.js";

export default function () {
  const form = document.querySelector(".form");

  const fieldConfigs = [
    { id: "name", type: "text" },
    { id: "email", type: "text" }
  ];

  form.addEventListener("submit", e => {
    e.preventDefault();
    //validate each field when submit is fired
    fieldConfigs.forEach(({ id, type }) => {
      const field = document.querySelector(`#${id}`);
      validateField(field, id, type);
    });

    const isError = Object.values(errorData).reduce((status, current) => {
      return status || current;
    });

    if (isError) {
      displayError(true);
      return;
    } else {
      displayError(false);
      displayData(formData);
    }
  });

  fieldConfigs.forEach(({ id, type }) => {
    const field = document.querySelector(`#${id}`);
    console.log(field);
    field.addEventListener(`${type === "radio" || type === "check" ? "click" : "input"}`, event => {
      validateField(field, id, type);
    });
  });
}
