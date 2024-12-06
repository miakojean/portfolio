document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector(".ham-menu");
    const navLinks = document.querySelector("[data-nav]");
  
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      navLinks.classList.toggle("open");
    });
});
  