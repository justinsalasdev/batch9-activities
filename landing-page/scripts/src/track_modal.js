import animateMount from "./animate_mount.js";
const backDrop = document.querySelector(".modal__backdrop");
const modal = document.querySelector(".modal");
const modalAction = modal.querySelector(".modal__action");
const modalTrigger = document.querySelector(".promotion__action");
let isOpen = false;

function closeModal() {
  animateMount(modal, "modal", "hide", true);
  animateMount(backDrop, "modal__backdrop", "hide", true);
  isOpen = false;
}

export function showModal() {
  animateMount(modal, "modal", "show", false);
  animateMount(backDrop, "modal__backdrop", "show", false);
  isOpen = true;
}

export default function () {
  modalAction.addEventListener("click", closeModal);
  modalTrigger.addEventListener("click", showModal);
  backDrop.addEventListener("click", closeModal);
}
