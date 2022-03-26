const mobileToggle = document.querySelector(".mobile-toggle");
const mobileNav = document.querySelector(".mobile-nav");

mobileToggle.onclick = function () {
    mobileNav.classList.toggle("hidden");
};
