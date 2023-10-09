const darkModeButton = document.getElementById("themeToggle");
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");
  darkModeStylesheet.disabled = !body.classList.contains("dark-mode");
}

darkModeButton.addEventListener("click", toggleDarkMode);
