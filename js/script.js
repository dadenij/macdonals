const burgerIcon = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", (e) => {
  console.log("");
  e.preventDefault();
  navbarMenu.classList.toggle("is-active");
});
