import validateField from "./src/form-scripts/validate_field.js";
import { formData, errorData } from "./src/form-scripts/form-helpers/form_data.js";
import displayError from "./src/form-scripts/display_error.js";
import { closeModal } from "./src/operate_modal.js";

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
    closeModal();
    // displayData(formData); display modal
  }
});

fieldConfigs.forEach(({ id, type }) => {
  const field = document.querySelector(`#${id}`);
  field.addEventListener(`${type === "radio" || type === "check" ? "click" : "input"}`, event => {
    validateField(field, id, type);
  });
});
