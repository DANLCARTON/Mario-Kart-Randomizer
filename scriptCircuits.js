import { bgCol1, bgCol2 } from "./themes";

let themeMainColor = bgCol1;

let circuitsNonTires = [];
let circuitSelectionne = 0;
let circuitDejaTires = [];
let nombreDeCircuits = 80;
for (var i = 0; i <= nombreDeCircuits - 1; i++) {
    circuitsNonTires[i] = "TR" + i;
}
for (var i = 0; i <= nombreDeCircuits - 1; i++) {
    circuitDejaTires[i] = "";
}

let arenesNonTirees = [];
let areneSelectionee = 0;
let arenesDejaTirees = [];
let nombreDArenes = 8;
for (var i = 0; i < nombreDArenes; i++) {
    arenesNonTirees[i] = "AR" + i;
}
for (var i = 0; i < nombreDArenes; i++) {
    arenesDejaTirees[i] = "";
}

function nombreAleatoire() {
    let nombre = Math.floor(Math.random() * nombreDeCircuits);
    return nombre;
}

function nombreAleatoireArenes() {
    let nombre = Math.floor(Math.random() * nombreDArenes)
    return nombre;
}

function colorCup() {
    // console.log("colorCup")
    let cups = document.getElementsByClassName("coupe");
    for (let i = 0; i < cups.length; i++) {
        let courses = cups[i].getElementsByClassName("circuit");
        if (
            (courses[0].style.backgroundColor == "rgb(53, 53, 53)" || courses[0].style.backgroundColor == themeMainColor) &&
            (courses[1].style.backgroundColor == "rgb(53, 53, 53)" || courses[1].style.backgroundColor == themeMainColor) &&
            (courses[2].style.backgroundColor == "rgb(53, 53, 53)" || courses[2].style.backgroundColor == themeMainColor) &&
            (courses[3].style.backgroundColor == "rgb(53, 53, 53)" || courses[3].style.backgroundColor == themeMainColor)
        ) {
            cups[i].classList.replace("notFinished", "completed");
        } else {
            cups[i].classList.replace("completed", "notFinished");
        }
    }
}

function colorArenas() {
    let arenas = document.getElementsByClassName("arenes");
    for (let i = 0; i < arenas.length; i++) {
        let arene = arenas[i].getElementsByClassName("arene");
        if (
            (arene[0].style.backgroundColor == "rgb(53, 53, 53)" || arene[0].style.backgroundColor == themeMainColor) &&
            (arene[1].style.backgroundColor == "rgb(53, 53, 53)" || arene[1].style.backgroundColor == themeMainColor) &&
            (arene[2].style.backgroundColor == "rgb(53, 53, 53)" || arene[2].style.backgroundColor == themeMainColor) &&
            (arene[3].style.backgroundColor == "rgb(53, 53, 53)" || arene[3].style.backgroundColor == themeMainColor) &&
            (arene[4].style.backgroundColor == "rgb(53, 53, 53)" || arene[4].style.backgroundColor == themeMainColor) &&
            (arene[5].style.backgroundColor == "rgb(53, 53, 53)" || arene[5].style.backgroundColor == themeMainColor) &&
            (arene[6].style.backgroundColor == "rgb(53, 53, 53)" || arene[6].style.backgroundColor == themeMainColor) &&
            (arene[7].style.backgroundColor == "rgb(53, 53, 53)" || arene[7].style.backgroundColor == themeMainColor)
        ) {
            arenas[i].classList.replace("notFinished", "completed");
        } else {
            arenas[i].classList.replace("completed", "notFinished");
        }
    }
}


// SELECTION DE CIRCUIT ALÉATOIRE
document.getElementById("choose").getElementsByTagName("button")[0].addEventListener("click", () => {

    for (let i = 0; i <= circuitDejaTires.length - 1; i++) {
        if (circuitDejaTires[i] != "") {
            document.getElementsByClassName(circuitDejaTires[i])[0].setAttribute("style", "background-color: #353535; color: #ccc;");
        }
    }

    let NONTIRE = false;
    let circuitId;
    let BREAKED = false;

    for (let i = 0; i <= circuitsNonTires.length - 1; i++) {
        if (circuitsNonTires[i] != "") {
            BREAKED = true;
        }
    }

    if (!BREAKED) {
        alert("Tous les circuits ont déjà été sélectionnés ! Déselectionnez des circuits ou remettez à zéro.");
        return;
    }

    while (!NONTIRE) {
        circuitId = nombreAleatoire()
        let dejaTire = 0;

        if (circuitDejaTires.length >= 1) {
            for (let i = 0; i <= circuitDejaTires.length - 1; i++) {
                if ("TR" + circuitId == circuitDejaTires[i]) {
                    dejaTire++;
                }
            }
            if (dejaTire == 0) {
                NONTIRE = true;
            }
        } else {
            NONTIRE = true;
        }
    }

    document.getElementsByClassName("TR" + circuitId)[0].setAttribute("style", "background-color:" + themeMainColor + "; filter: drop-shadow(0 0 10px #ffffff50);");
    circuitSelectionne = document.getElementsByClassName("TR" + circuitId)[0];
    circuitsNonTires.splice(circuitId, 1, "");
    circuitDejaTires.splice(circuitId, 1, "TR" + circuitId);

    colorCup()

    const getDeviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        if (
            /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            return "mobile";
        }
        return "desktop";
    };

    let device = getDeviceType();

    if (device == "mobile" || device == "tablet") {
        document.getElementsByClassName("TR" + circuitId)[0].scrollIntoView({
            block: "center",
            behavior: "smooth"
        })
    }
})

// SELECTION ET DESELECTION DE CIRCUIT MANUELLE
for (let i = 0; i < nombreDeCircuits; i++) {
    document.getElementsByClassName("TR" + i)[0].addEventListener("click", () => {
        let selectedTrack = "TR" + i;
        for (let j = 0; j < circuitsNonTires.length; j++) {
            if (selectedTrack == circuitsNonTires[j]) { // si il n'a pas déjà été tiré
                for (let i = 0; i <= circuitDejaTires.length - 1; i++) {
                    if (circuitDejaTires[i] != "") {
                        document.getElementsByClassName(circuitDejaTires[i])[0].setAttribute("style", "background-color: #353535; color: #ccc;");
                    }
                }
                document.getElementsByClassName("TR" + i)[0].setAttribute("style", "background-color: " + themeMainColor + "; filter: drop-shadow(0 0 10px #ffffff50);");
                circuitSelectionne = document.getElementsByClassName("TR" + i)[0];
                circuitsNonTires.splice(j, 1, "");
                circuitDejaTires.splice(j, 1, "TR" + j);
                colorCup()
                return;
            }
        }
        for (let j = 0; j < circuitDejaTires.length; j++) {
            if (selectedTrack == circuitDejaTires[j]) { // si il a déjà été tiré
                for (let i = 0; i <= circuitDejaTires.length - 1; i++) {
                    if (circuitDejaTires[i] != "") {
                        document.getElementsByClassName(circuitDejaTires[i])[0].setAttribute("style", "background-color: #353535; color: #ccc;");
                    }
                }
                document.getElementsByClassName("TR" + i)[0].setAttribute("style", "background-color: none; filter: drop-shadow(0 0 10px #ffffff50);");
                circuitSelectionne = document.getElementsByClassName("TR" + i)[0];
                circuitDejaTires.splice(j, 1, "");
                circuitsNonTires.splice(j, 1, "TR" + j);
                colorCup()
                return
            }
        }
    })
}

// RESET
document.getElementById("reset").getElementsByTagName("button")[0].addEventListener("click", () => {
    circuitsNonTires = [];
    circuitSelectionne = 0;
    circuitDejaTires = [];
    for (var i = 0; i <= nombreDeCircuits - 1; i++) {
        circuitsNonTires[i] = "TR" + i;
    }
    for (var i = 0; i <= nombreDeCircuits - 1; i++) {
        circuitDejaTires[i] = "";
    }

    for (var i = 0; i <= nombreDeCircuits - 1; i++) {
        document.getElementsByClassName("TR" + i)[0].setAttribute("style", "background: none;");
    }
    colorCup()
})

function nbCircuitsDejaTires(a) {
    let nb = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != "") {
            nb++
        }
    }
    return nb;
}

// COMPTE DES CIRCUITS

window.addEventListener("load", () => {
    let t = document.getElementById("tires");
    let tt = document.getElementById("total");
    let r = document.getElementById("reste");
    t.textContent = "0";
    tt.textContent = nombreDeCircuits;
    r.textContent = nombreDeCircuits;
})

window.addEventListener("click", () => {
    let t = document.getElementById("tires");
    let r = document.getElementById("reste");
    t.textContent = nbCircuitsDejaTires(circuitDejaTires);
    r.textContent = nombreDeCircuits - nbCircuitsDejaTires(circuitDejaTires);
})

// FIXATION PLACMENT BOUTON CHOISIR

window.addEventListener("scroll", () => {
    const chooseButton = document.getElementById("choose");
    var rect = chooseButton.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);
    if (rect.top <= 15) {
        chooseButton.classList.add("sticky");
    } else {
        chooseButton.classList.remove("sticky");
    }
})

// ARENES BATAILLES ALEATOIRES
document.getElementById("chooseArena").getElementsByTagName("button")[0].addEventListener("click", () => {

    for (let i = 0; i <= arenesDejaTirees.length - 1; i++) {
        if (arenesDejaTirees[i] != "") {
            document.getElementsByClassName(arenesDejaTirees[i])[0].setAttribute("style", "background-color: #353535; color: #ccc;");
        }
    }

    let NONTIRE = false;
    let arenaId;
    let BREAKED = false;

    for (let i = 0; i <= arenesNonTirees.length - 1; i++) {
        if (arenesNonTirees[i] != "") {
            BREAKED = true;
        }
    }

    if (!BREAKED) {
        alert("Toutes les arènes ont déjà été sélectionnées ! Déselectionnez des arènes ou remettez à zéro.");
        return;
    }

    while (!NONTIRE) {
        arenaId = nombreAleatoireArenes()
        let dejaTire = 0;

        if (arenesDejaTirees.length >= 1) {
            for (let i = 0; i <= arenesDejaTirees.length - 1; i++) {
                if ("AR" + arenaId == arenesDejaTirees[i]) {
                    dejaTire++;
                }
            }
            if (dejaTire == 0) {
                NONTIRE = true;
            }
        } else {
            NONTIRE = true;
        }
    }

    document.getElementsByClassName("AR" + arenaId)[0].setAttribute("style", "background-color: " + themeMainColor + "; filter: drop-shadow(0 0 10px #ffffff50);");
    areneSelectionee = document.getElementsByClassName("AR" + arenaId)[0];
    arenesNonTirees.splice(arenaId, 1, "");
    arenesDejaTirees.splice(arenaId, 1, "AR" + arenaId);

    colorArenas()
})

// SELECTION ET DESELECTION D'ARENES MANUELLE
for (let i = 0; i < nombreDArenes; i++) {
    document.getElementsByClassName("AR" + i)[0].addEventListener("click", () => {
        let selectedArena = "AR" + i;
        for (let j = 0; j < arenesNonTirees.length; j++) {
            if (selectedArena == arenesNonTirees[j]) { // si il n'a pas déjà été tiré
                for (let i = 0; i <= arenesNonTirees.length - 1; i++) {
                    if (arenesDejaTirees[i] != "") {
                        document.getElementsByClassName(arenesDejaTirees[i])[0].setAttribute("style", "background-color: #353535; color: #ccc;");
                    }
                }
                document.getElementsByClassName("AR" + i)[0].setAttribute("style", "background-color: " + themeMainColor + "; filter: drop-shadow(0 0 10px #ffffff50);");
                areneSelectionee = document.getElementsByClassName("AR" + i)[0];
                arenesNonTirees.splice(j, 1, "");
                arenesDejaTirees.splice(j, 1, "AR" + j);
                colorArenas()
                return;
            }
        }
        for (let j = 0; j < arenesDejaTirees.length; j++) {
            if (selectedArena == arenesDejaTirees[j]) { // si il a déjà été tiré
                for (let i = 0; i <= arenesDejaTirees.length - 1; i++) {
                    if (arenesDejaTirees[i] != "") {
                        document.getElementsByClassName(arenesDejaTirees[i])[0].setAttribute("style", "background-color: #353535; color: #ccc;");
                    }
                }
                document.getElementsByClassName("AR" + i)[0].setAttribute("style", "background-color: none; filter: drop-shadow(0 0 10px #ffffff50);");
                areneSelectionee = document.getElementsByClassName("AR" + i)[0];
                arenesDejaTirees.splice(j, 1, "");
                arenesNonTirees.splice(j, 1, "AR" + j);
                colorArenas()
                return
            }
        }
    })
}

// RESET
document.getElementById("resetArena").getElementsByTagName("button")[0].addEventListener("click", () => {
    arenesNonTirees = [];
    areneSelectionee = 0;
    arenesDejaTirees = [];
    for (var i = 0; i <= nombreDArenes - 1; i++) {
        arenesNonTirees[i] = "AR" + i;
    }
    for (var i = 0; i <= nombreDArenes - 1; i++) {
        arenesDejaTirees[i] = "";
    }

    for (var i = 0; i <= nombreDArenes - 1; i++) {
        document.getElementsByClassName("AR" + i)[0].setAttribute("style", "background: none;");
    }
    colorArenas()
})

// COMPTE DES CIRCUITS
window.addEventListener("load", () => {
    let t = document.getElementById("tiresArena");
    let tt = document.getElementById("totalArena");
    let r = document.getElementById("resteArena");
    t.textContent = "0";
    tt.textContent = nombreDArenes;
    r.textContent = nombreDArenes;
})

window.addEventListener("click", () => {
    let t = document.getElementById("tiresArena");
    let r = document.getElementById("resteArena");
    t.textContent = nbCircuitsDejaTires(arenesDejaTirees);
    r.textContent = nombreDArenes - nbCircuitsDejaTires(arenesDejaTirees);
})