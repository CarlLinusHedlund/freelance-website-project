const mobileToggle = document.querySelector(".mobile-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const hamburgerMenu = document.querySelector(".bars");

mobileToggle.onclick = function () {
  mobileNav.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("toggled");
};
