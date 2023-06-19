/*function languageManager() {
    var userLanguage = navigator.language;
    var urlParams = new URLSearchParams(window.location.search);
    var localLang = localStorage.getItem("lang");

    if (localLang !== 0 && !urlParams.has("lang")) {
        language = localLang;
        var currentURL = window.location.href;
        console.log("found language from local storage")
        window.location.replace(currentURL + "?lang=" + userLanguage);
        return language;
    } else {
        if (urlParams.has("lang")) {
            var language = urlParams.get("lang");
            console.log("found language from URL parameters")
            return language;
        } else {
            if (localLang !== 0) {
                var currentURL = window.location.href;
                window.location.replace(currentURL + "?lang=" + localLang);
                console.log("found language from navigator parameters")
                return localLang;
            } else {
                var currentURL = window.location.href;
                window.location.replace(currentURL + "?lang=" + userLanguage);
                console.log("found language from navigator parameters")
                return userLanguage;
            }
        }
    }
}*/

function languageManager2() {
    var userLanguage = navigator.language;
    var urlParams = new URLSearchParams(window.location.search);
    var localLang = localStorage.getItem("lang");

    if (urlParams.has("lang")) {
        var language = urlParams.get("lang");
        console.log("Found language from URL parameters");
        return language;
    } else if (localLang !== null) {
        console.log("Found language from local storage");
        return localLang;
    } else {
        var currentURL = window.location.href;
        var newURL = currentURL + "?lang=" + userLanguage;
        console.log("Found language from navigator parameters");

        // Redirection uniquement si la langue n'est pas déjà présente dans l'URL
        if (!urlParams.has("lang")) {
            window.location.replace(newURL);
        }

        return userLanguage;
    }
}

// language = languageManager();
export const language = languageManager2();