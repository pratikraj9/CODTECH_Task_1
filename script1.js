// i18n.js
const translations = {
    en: {
        title: "Welcome",
        description: "This is a sample text.",
        // Add more translations as needed
    },
    es: {
        title: "Bienvenido",
        description: "Este es un texto de ejemplo.",
    },
    fr: {
        title: "Bienvenue",
        description: "Ceci est un texte d'exemple.",
    },
    hi: {
        title: "स्वागत है",
        description: "यह एक उदाहरण पाठ है।",
    },
    bho: {
        title: "स्वागत बा",
        description: "ई एक उदाहरण पाठ बा।",
    }
};

function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        if (translations[language] && translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });
}

// Add event listener for dropdown change
document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (event) => {
            changeLanguage(event.target.value);
        });
    }
});
