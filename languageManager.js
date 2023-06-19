function languageManager2() {
    var userLanguage = navigator.language;
    var urlParams = new URLSearchParams(window.location.search);
    var localLang = localStorage.getItem("lang");

    if (urlParams.has("lang")) {
        var language = urlParams.get("lang");
        console.log("Found language from URL parameters");
        return language;
    } else if (localLang !== null) {
        var currentURL = window.location.href;
        var newURL = currentURL + "?lang=" + localLang;
        window.location.replace(newURL);
        console.log("Found language from local storage");
        return localLang;
    } else {
        var currentURL = window.location.href;
        var newURL = currentURL + "?lang=" + userLanguage;
        console.log("Found language from navigator parameters");

        // Redirection uniquement si la langue n'est pas déjà présente dans l'URL
        window.location.replace(newURL);

        return userLanguage;
    }
}

// language = languageManager();
export const language = languageManager2();