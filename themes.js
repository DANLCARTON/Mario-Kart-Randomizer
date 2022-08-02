var bgCol1 = "var(--bg8b8)";
var bgCol2 = "var(--bgfb8)";

function setNightTheme() {
    let root = document.querySelector(':root');
    root.style.setProperty('--bg-color-1', '#111');
    root.style.setProperty('--bg-color-2', '#111');
    root.style.setProperty('--text-color-paragraph', '#fff');
    document.getElementById("setnight").style.setProperty('display', "none");
    document.getElementById("setday").style.setProperty('display', "block");
    localStorage.setItem("currentTheme", "night");
}

function setDayTheme() {
    let root = document.querySelector(':root');
    root.style.setProperty('--bg-color-1', bgCol1);
    root.style.setProperty('--bg-color-2', bgCol2);
    root.style.setProperty('--text-color-paragraph', '#353535');
    document.getElementById("setnight").style.setProperty('display', "block");
    document.getElementById("setday").style.setProperty('display', "none");
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