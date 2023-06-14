import { translatedTextContent, langId } from "./translatedTextContent.js";

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
    for (let i = 0; i < historyButtons.length; ++i) {
        historyButtons[i].textContent = translatedTextContent.historyButton[lang]
    }

    let randomItems = document.getElementsByClassName("randomItems");
    for (let i = 0; i < randomItems.length; ++i) {
        randomItems[i].textContent = translatedTextContent.randomItems[lang]
    }

    let ffew = document.getElementsByClassName("ffew");
    for (let i = 0; i < ffew.length; ++i) {
        ffew[i].textContent = translatedTextContent.ffew[lang]
    }

    let few = document.getElementsByClassName("few");
    for (let i = 0; i < few.length; ++i) {
        few[i].textContent = translatedTextContent.few[lang]
    }

    let mid = document.getElementsByClassName("mid");
    for (let i = 0; i < mid.length; ++i) {
        mid[i].textContent = translatedTextContent.mid[lang]
    }

    let lot = document.getElementsByClassName("lot");
    for (let i = 0; i < lot.length; ++i) {
        lot[i].textContent = translatedTextContent.lot[lang]
    }

    let llot = document.getElementsByClassName("llot");
    for (let i = 0; i < llot.length; ++i) {
        llot[i].textContent = translatedTextContent.llot[lang]
    }

    let rand = document.getElementsByClassName("rand");
    for (let i = 0; i < rand.length; ++i) {
        rand[i].textContent = translatedTextContent.rand[lang]
    }

    let randomItemsExplanations = document.getElementsByClassName("randomItemsExplanations");
    for (let i = 0; i < randomItemsExplanations.length; ++i) {
        randomItemsExplanations[i].textContent = translatedTextContent.randomItemsExplanations[lang]
    }

    let choose = document.getElementsByClassName("choose");
    for (let i = 0; i < choose.length; ++i) {
        choose[i].textContent = translatedTextContent.choose[lang]
    }

    let reset = document.getElementsByClassName("reset");
    for (let i = 0; i < reset.length; ++i) {
        reset[i].textContent = translatedTextContent.reset[lang]
    }

    let randomCircuit = document.getElementsByClassName("randomCircuit");
    for (let i = 0; i < randomCircuit.length; ++i) {
        randomCircuit[i].textContent = translatedTextContent.randomCircuit[lang]
    }

    let randomCircuitExplanations = document.getElementsByClassName("randomCircuitExplanations");
    for (let i = 0; i < randomCircuitExplanations.length; ++i) {
        randomCircuitExplanations[i].textContent = translatedTextContent.randomCircuitExplanations[lang]
    }

    let randomArena = document.getElementsByClassName("randomArena");
    for (let i = 0; i < randomArena.length; ++i) {
        randomArena[i].textContent = translatedTextContent.randomArena[lang]
    }

    let battleArena = document.getElementsByClassName("battleArena");
    for (let i = 0; i < battleArena.length; ++i) {
        battleArena[i].textContent = translatedTextContent.battleArena[lang]
    }

})