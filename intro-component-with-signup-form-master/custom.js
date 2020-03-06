let inputFields = document.querySelectorAll(".input-field");
let claimBtn = document.querySelector("input[type='button']")

claimBtn.addEventListener('click', () => {
  inputFields.forEach((input) => {
    if (input.validity.valid) return;
    input.classList.add("invalid");
    input.nextElementSibling.classList.remove("hidden");
    input.nextElementSibling.firstElementChild.innerHTML = input.validationMessage;
  })
})

inputFields.forEach((input) => {
  input.addEventListener('click', () => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hidden");
  })
})
