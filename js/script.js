// ====== TOGGLE HAMBURGER MENU ======
document.addEventListener("DOMContentLoaded", function () {
  const openMenuBtn = document.getElementById("open-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  openMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  });

  closeMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
  });
});
