const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
// const modalButton = modal.querySelector(".modal__action");
const answer1 = modal.querySelector(".answer1");
const answer2 = modal.querySelector(".answer2");

// modalButton.addEventListener("click", () => {
//   backDrop.classList.remove("backdrop_shown");
//   modal.classList.remove("modal_shown");
//   techList.innerHTML = "";
// });

export default function (formData) {
  const { number, email } = formData;
  answer1.innerText = email;
  answer2.innerText = number;

  modal.classList.add("modal_show");
  backDrop.classList.add("backdrop_show");
}
