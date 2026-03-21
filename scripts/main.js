document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            // change the hamburger icon to a close icon when the menu is open
            hamburger.innerHTML = navMenu.classList.contains("open") ? "&#10006;" : "&#9776;";
        });
    }

    // Update automaticly the year in the footer
    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()} Sleep Outside - Kazadi A. Muamba`;
    }
});