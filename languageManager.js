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

function HALanguage() {
    var language = languageManager2()

    if (language == "es-AR" || language == "es-GT" || language == "es-CR" || language == "es-PA" || language == "es-DO" || language == "es-MX" || language == "es-VE" || language == "es-CO" || language == "es-PE" || language == "es-EC" || language == "es-CL" || language == "es-UY" || language == "es-BO" || language == "es-SV" || language == "es-HN" || language == "es-NI" || language == "es-PR") {
        language = "es-HA";
    }

    return language;
}

export const language = HALanguage();