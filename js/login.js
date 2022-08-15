const loginArea = document.querySelector(".login__area");
const canvasOverlayBlurLogin = document.querySelector(".canvas__overlay-blur-login");
const loginIcon = document.querySelector(".fa-user");
const btnCloseLogin = document.querySelector(".fa-xmark");
const loginAreaContent = document.querySelector(".login__area-content");
const fieldEmail = document.getElementById("email");
const fieldPassword = document.getElementById("password");
const errorMessage = document.querySelector(".error__message");

const showLogin = () => {
  loginArea.classList.toggle("active");
  canvasOverlayBlurLogin.classList.toggle("active");
  loginAreaContent.classList.toggle("active");
};

const clearFields = () => {
  fieldEmail.value = "";
  fieldPassword.value = "";
};

loginIcon.addEventListener("click", () => {
  showLogin();
  fieldEmail.focus();
});

btnCloseLogin.addEventListener("click", () => {
  showLogin();
  clearFields();
  errorMessage.classList.remove("active");
  
});

canvasOverlayBlurLogin.addEventListener("click", () => {
  showLogin();
  clearFields();
  errorMessage.classList.remove("active");
});
