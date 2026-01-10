document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
