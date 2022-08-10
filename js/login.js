const loginArea = document.querySelector(".login__area");
const canvasOverlayBlur = document.querySelector(".canvas__overlay-blur");
const loginIcon = document.querySelector(".fa-user");
const btnCloseLogin = document.querySelector(".fa-xmark");



const showLogin = () => {
  loginArea.classList.toggle("active");
  canvasOverlayBlur.classList.toggle("active");
};

loginIcon.addEventListener("click", () => {
  showLogin();
});

btnCloseLogin.addEventListener("click", () => {
  showLogin();
});
