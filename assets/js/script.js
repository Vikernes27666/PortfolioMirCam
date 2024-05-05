// Función modo claro y oscuro
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var darkModeLink = document.getElementById("dark-mode-link");
    if (body.classList.contains("dark-mode")) {
        darkModeLink.textContent = "Modo claro";
    } else {
        darkModeLink.textContent = "Modo oscuro";
    }
}

document.getElementById("dark-mode-link").addEventListener("click", toggleDarkMode);



// Función para cargar el archivo HTML en inglés
function loadEnglishHTML() {
    window.location.href = "index_en.html";
}
function loadSpanishHTML() {
    window.location.href = "index.html";
}
function toggleLanguage() {
    var currentURL = window.location.href;
    if (currentURL.includes("_en.html")) {
        loadSpanishHTML();
    } else {
        loadEnglishHTML();
    }
}
document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

