document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("hamburger-menu");
    const menu = document.getElementById("nav-menu");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("open");
            // Change l'icône entre ☰ et ✕
            btn.innerHTML = menu.classList.contains("open") ? "&#10006;" : "&#9776;";
        });
    }
});