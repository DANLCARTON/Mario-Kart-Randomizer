import { translatedTextContent, langId } from "./translatedTextContent";

var URLparams = new URLSearchParams(window.location.search);
var language;
if (URLparams.has('lang')) {
    var language = URLparams.get("lang");
}

let lang = langId(language)

window.addEventListener("load", () => {
    console.log(translatedTextContent);

    let subtitles = document.getElementsByClassName("subtitle");
    for (let i = 0; i < subtitles.length; ++i) {
        subtitles[i].textContent = translatedTextContent.subtitle[lang]
    }

    let randomCharacters = document.getElementsByClassName("randomCharacter");
    for (let i = 0; i < randomCharacters.length; ++i) {
        randomCharacters[i].textContent = translatedTextContent.randomCharacter[lang]
    }

    let randomCharacterExplanations = document.getElementsByClassName("randomCharacterExplanations");
    for (let i = 0; i < randomCharacterExplanations.length; ++i) {
        randomCharacterExplanations[i].textContent = translatedTextContent.randomCharacterExplanations[lang]
    }

    let playerNames = document.getElementsByClassName("playerName");
    for (let i = 0; i < playerNames.length; ++i) {
        playerNames[i].placeholder = translatedTextContent.playerNamePlaceholder[lang]
    }

    let generates = document.getElementsByClassName("generate");
    for (let i = 0; i < generates.length; ++i) {
        generates[i].textContent = translatedTextContent.generate[lang]
    }

    let historyButtons = document.getElementsByClassName("historyButton");
    for (let i = 0; i < generates.length; ++i) {
        historyButtons[i].textContent = translatedTextContent.historyButton[lang]
    }

})