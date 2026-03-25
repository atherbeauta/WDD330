document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            // change hamburger icon to close icon when menu is open
            hamburger.innerHTML = navMenu.classList.contains("open") ? "&#10006;" : "&#9776;";
        });
    }
});