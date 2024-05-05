// Función modo claro y oscuro
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var darkModeLink = document.getElementById("dark-mode-link");
    if (body.classList.contains("dark-mode")) {
        darkModeLink.textContent = "Modo claro | ";
    } else {
        darkModeLink.textContent = "Modo oscuro | ";
    }
}
// Asignar la función toggleDarkMode al clic del enlace "Modo oscuro"
document.getElementById("dark-mode-link").addEventListener("click", toggleDarkMode);
