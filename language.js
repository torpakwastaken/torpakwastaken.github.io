document.addEventListener("DOMContentLoaded", function () {
  loadLanguage("en");
  const flagIcons = document.querySelectorAll(".language-switcher img");
  flagIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const lang = this.id;
      loadLanguage(lang);
    });
  });
});

function loadLanguage(lang) {
  fetch(`translations.json`)
    .then((response) => response.json())
    .then((translations) => {
      const elements = document.querySelectorAll("[data-translate]");
      elements.forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });
    });
}
