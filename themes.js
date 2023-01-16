var bgCol1 = "var(--bg888)";
var bgCol2 = "var(--bgff8)";

var iconList = Array("set", "exit")

function setNightTheme() {
    let root = document.querySelector(':root');
    root.style.setProperty('--bg-color-1', '#111');
    root.style.setProperty('--bg-color-2', '#111');
    root.style.setProperty('--text-color-paragraph', '#fff');
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