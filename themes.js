var bgCol1 = "#e0ffff";
var bgCol2 = "#ffe0ff";
var accCol = "#78ff78"

var iconList = Array("set", "exit")

function setNightTheme() {
    let root = document.querySelector(':root');
    root.style.setProperty('--bg-color-1', '#252525');
    root.style.setProperty('--bg-color-2', '#101010');
    root.style.setProperty('--text-color-paragraph', '#dcdcdc');
    for (let i = 0; i < iconList.length; i++) {
        document.getElementById(iconList[i] + "night").style.setProperty('display', "none");
        document.getElementById(iconList[i] + "day").style.setProperty('display', "inline-block");
    }
    localStorage.setItem("currentTheme", "night");
}

function setDayTheme() {
    let root = document.querySelector(':root');
    root.style.setProperty('--bg-color-1', bgCol1);
    root.style.setProperty('--bg-color-2', bgCol2);
    root.style.setProperty('--text-color-paragraph', '#353535');
    for (let i = 0; i < iconList.length; i++) {
        document.getElementById(iconList[i] + "night").style.setProperty('display', "inline-block");
        document.getElementById(iconList[i] + "day").style.setProperty('display', "none");
    }
    localStorage.setItem("currentTheme", "day");
}

function applyPreviousTheme(theme) {
    if (theme == "night") {
        setNightTheme();
    } else {
        setDayTheme();
    }
}

window.addEventListener("load", () => {
    let theme = localStorage.getItem("currentTheme");
    applyPreviousTheme(theme);
})

document.getElementById("setnight").addEventListener("click", () => {
    setNightTheme();
})

document.getElementById("setday").addEventListener("click", () => {
    setDayTheme();
})

export { bgCol1, bgCol2, accCol };