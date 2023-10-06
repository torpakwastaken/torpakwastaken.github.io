const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");

function toggleDarkMode() {
  const isEnabled = darkModeStylesheet.disabled;
  darkModeStylesheet.disabled = !isEnabled;
  localStorage.setItem("dark-mode", isEnabled ? "enabled" : "disabled");
}

function checkDarkModePreference() {
  const darkModePreference = localStorage.getItem("dark-mode");
  if (darkModePreference === "enabled") {
    darkModeStylesheet.disabled = false;
  }
}

const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);

checkDarkModePreference();
