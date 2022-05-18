// A CHANGER A CHAQUE NOUVELLE VAGUE DE DLC :
// - Mettre le nouveau numéro de vague sous le h1 de index.php
// - le nombre de circuits à la ligne 7 de ce fichier.
// - décommenter et nommer les coupes et les circuits dans dataCircuits.php.
// - décommenter les bouts de codes correspondant aux nouvelles coupes dans index.php
// - mettre la bonne valeur : echo "<p class=\"nomCoupe\">".array_keys($circuits)[ - ici - ]."</p>\n";
// - mettre la bonne valeur : echo "<p class=\"circuit TR". strval($i+ - ici - ) ."\">".$circuits[" - Nom de la coupe - "][$i]."</p>\n";
// - respecter cet ordre pour l'affichage :
//      Coupe Champignon   Coupe Fleur   Coupe Étoile   Coupe Spéciale   Coupe Oeuf   Coupe Crossing
//      Coupe Carapace   Coupe Banane   Coupe Feuille   Coupe Éclair   Coupe Triforce   Coupe Clochette
//      Coupe Turbo Dorée   Coupe Navet   Coupe Champi-Pierre   Coupe Pomme   Coupe Plume   Coupe Super Gland
//      Coupe Maneki-Neko   Coupe Champi-Hélice   Coupe Lune   Coupe Fleur Boomerang   Coupe Double Cerise   Coupe Carapace à épines

let circuitsNonTires = [];
let circuitSelectionne = 0;
let circuitDejaTires = [];
let nombreDeCircuits = 56;
for (var i = 0; i <= nombreDeCircuits - 1; i++) {
    circuitsNonTires[i] = "TR" + i;
}

function nombreAleatoire() {
    let nombre = Math.floor(Math.random() * nombreDeCircuits);
    return nombre;
}

document.getElementById("choose").addEventListener("click", () => {

    for (let i = 0; i <= circuitDejaTires.length - 1; i++) {
        document.getElementsByClassName(circuitDejaTires[i])[0].setAttribute("style", "background-color: #353535; color: #ccc;");
    }

    let NONTIRE = false;
    let circuitId;

    if (circuitDejaTires.length > nombreDeCircuits - 1) {
        alert("Tous les circuits ont déjà été selectionnés.")
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

    // console.log(circuitId)

    document.getElementsByClassName("TR" + circuitId)[0].setAttribute("style", "background-color: #8f8; filter: drop-shadow(0 0 10px #ffffff50);");
    circuitSelectionne = document.getElementsByClassName("TR" + circuitId)[0];
    circuitsNonTires.splice(circuitId, 1);
    circuitDejaTires.push("TR" + circuitId);

    // console.log("circuit sélectionné : ", circuitSelectionne);
    // console.log("circuits non tirés : ", circuitsNonTires);
    // console.log("circuits deja tirés : ", circuitDejaTires);


})

document.getElementById("reset").addEventListener("click", () => {
    circuitsNonTires = [];
    circuitSelectionne = 0;
    circuitDejaTires = [];
    for (var i = 0; i <= nombreDeCircuits - 1; i++) {
        circuitsNonTires[i] = "TR" + i;
    }

    for (var i = 0; i <= 95; i++) {
        document.getElementsByClassName("TR" + i)[0].setAttribute("style", "vackground: none;");
    }
})