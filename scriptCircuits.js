let circuitsNonTires = [];
let circuitSelectionne = 0;
let circuitDejaTires = [];
let nombreDeCircuits = 72;
for (var i = 0; i <= nombreDeCircuits - 1; i++) {
    circuitsNonTires[i] = "TR" + i;
}
for (var i = 0; i <= nombreDeCircuits - 1; i++) {
    circuitDejaTires[i] = "";
}

function nombreAleatoire() {
    let nombre = Math.floor(Math.random() * nombreDeCircuits);
    return nombre;
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

    // // console.log(circuitId)

    document.getElementsByClassName("TR" + circuitId)[0].setAttribute("style", "background-color: #88f; filter: drop-shadow(0 0 10px #ffffff50);");
    circuitSelectionne = document.getElementsByClassName("TR" + circuitId)[0];
    circuitsNonTires.splice(circuitId, 1, "");
    circuitDejaTires.splice(circuitId, 1, "TR" + circuitId);

    // console.log("circuit sélectionné : ", circuitSelectionne);
    // console.log("circuits non tirés : ", circuitsNonTires);
    // console.log("circuits deja tirés : ", circuitDejaTires);


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
                document.getElementsByClassName("TR" + i)[0].setAttribute("style", "background-color: #88f; filter: drop-shadow(0 0 10px #ffffff50);");
                circuitSelectionne = document.getElementsByClassName("TR" + i)[0];
                circuitsNonTires.splice(j, 1, "");
                circuitDejaTires.splice(j, 1, "TR" + j);
                // console.log("circuit sélectionné : ", circuitSelectionne);
                // console.log("circuits non tirés : ", circuitsNonTires);
                // console.log("circuits deja tirés : ", circuitDejaTires);
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
                // console.log("circuit sélectionné : ", circuitSelectionne);
                // console.log("circuits non tirés : ", circuitsNonTires);
                // console.log("circuits deja tirés : ", circuitDejaTires);
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
        document.getElementsByClassName("TR" + i)[0].setAttribute("style", "vackground: none;");
    }
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

/*
const stickyElm = document.getElementById("choose");

const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('sticky', e.intersectionRatio < 1), { threshold: [1] }
);

observer.observe(stickyElm)
*/

window.addEventListener("scroll", () => {
    const chooseButton = document.getElementById("choose");
    var rect = chooseButton.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    if (rect.top <= 15) {
        chooseButton.classList.add("sticky");
    } else {
        chooseButton.classList.remove("sticky");
    }
})