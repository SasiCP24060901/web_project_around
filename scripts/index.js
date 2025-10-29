// Variables
const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector("#popup-edit");
const closeButton = document.querySelector("#popup-close");
const form = document.querySelector("#form-edit");
const nameInput = document.querySelector("#name-input");
const roleInput = document.querySelector("#role-input");
const nameDisplay = document.querySelector(".profile__name");
const roleDisplay = document.querySelector(".profile__role");

// Abrir popup
editButton.addEventListener("click", () => {
  popup.classList.add("popup_opened");

  // Rellenar con valores actuales
  nameInput.value = nameDisplay.textContent;
  roleInput.value = roleDisplay.textContent;
});

// Cerrar popup
closeButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

// Guardar cambios
form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameDisplay.textContent = nameInput.value;
  roleDisplay.textContent = roleInput.value;
  popup.classList.remove("popup_opened");
});
