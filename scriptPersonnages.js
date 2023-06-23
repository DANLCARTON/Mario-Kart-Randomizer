import { BebePeach, BebeDaisy, BebeHarmonie, Lemmy, BebeMario, BebeLuigi, Skelerex, MiiLeger, Koopa, Lakitu, BowserJr, Toadette, Wendy, Marie, Toad, Maskass, Larry, PeachChat, InklingFille, Villageoise, Peach, Daisy, Yoshi, MarioTanuki, InklingGarcon, Villageois, Luigi, Iggy, Mario, Ludwig, MiiMoyen, Harmonie, RoiBoo, Link, DonkeyKong, Waluigi, Roy, Wario, BowserSkelet, MarioDeMetal, PeachDOrRose, Bowser, Morton, MiiLourd, KartStandard, Cybertrombe, SLRoadster, Retro, Mecabecane, ScooterAC, Proto8, Propulsar, MissileTornade, Nautomobile, TubulR3, Malecycle, Chabriolet, Meteore, Yoshimoto, QuadNounours, MachCelere, Intrepide, Magikart, BeatBolide, QuadStandard, KartGLA, Cavalkart, SportGP, Epervier, Paracoccinelly, Scootinette, Caraveloce, Autorinho, Sneakart, KartOr, DestrierDeLegende, MotoStandard, Flamboyante, QuadWiggler, W25FlecheDArgent, BlueFalcon, Kartoon, BuggyTanuki, KoopaMobile, DestrierDeLegende01, RouesStandard, StandardBleu, RouesGLA, Mastodonte, MastoFlamme, Archeonique, Roller, RollerAzur, Classique, ClassiqueRouge, Bois, Lisse, CyberLisse, Metal, RouesOr, Bouton, Feuille, HorsPiste, HorsPisteRetro, Triforce, Eponge, Coussin, AileStandard, Dendinaile, AileHylienne, AileNuages, Parachute, AileFleurie, AileEnPapier, AileWario, Planeur, AileOr, Paravoile, OmbrellePeach, Parapente, ParapenteMKTV, BowserVolant, Birdo, FloraPiranha, Wiggler, Kamek } from "./stats.js";
import { langId } from "./translatedTextContent.js";
import { language } from "./languageManager.js";

document.getElementsByTagName("html")[0].lang = language;

var lang = langId(language);

var Mii = [MiiLeger, MiiMoyen, MiiLourd]

var perso = [BebePeach, BebeDaisy, BebeHarmonie, Lemmy, BebeMario, BebeLuigi, Skelerex, Koopa, Lakitu, BowserJr, Toadette, Wendy, Marie, Toad, Maskass, Larry, PeachChat, InklingFille, Villageoise, Peach, Daisy, Yoshi, MarioTanuki, InklingGarcon, Villageois, Luigi, Iggy, Mario, Ludwig, Harmonie, RoiBoo, Link, DonkeyKong, Waluigi, Roy, Wario, BowserSkelet, MarioDeMetal, PeachDOrRose, Bowser, Morton, Mii, Birdo, FloraPiranha, Wiggler, Kamek];
var karts = [KartStandard, Cybertrombe, SLRoadster, Retro, Mecabecane, ScooterAC, Proto8, Propulsar, MissileTornade, Nautomobile, TubulR3, Malecycle, Chabriolet, Meteore, Yoshimoto, QuadNounours, MachCelere, Intrepide, Magikart, BeatBolide, QuadStandard, KartGLA, Cavalkart, SportGP, Epervier, Paracoccinelly, Scootinette, Caraveloce, Autorinho, Sneakart, KartOr, DestrierDeLegende, MotoStandard, Flamboyante, QuadWiggler, W25FlecheDArgent, BlueFalcon, Kartoon, BuggyTanuki, KoopaMobile, DestrierDeLegende01];
var roues = [RouesStandard, StandardBleu, RouesGLA, Mastodonte, MastoFlamme, Archeonique, Roller, RollerAzur, Classique, ClassiqueRouge, Bois, Lisse, CyberLisse, Metal, RouesOr, Bouton, Feuille, HorsPiste, HorsPisteRetro, Triforce, Eponge, Coussin];
var ailes = [AileStandard, Dendinaile, AileHylienne, AileNuages, Parachute, AileFleurie, AileEnPapier, AileWario, Planeur, AileOr, Paravoile, OmbrellePeach, Parapente, ParapenteMKTV, BowserVolant];

var skinsYoshi = ["vert", "bleu ciel", "noir", "rouge", "jaune", "blanc", "bleu foncé", "rose", "orange"];
var skinsMaskass = ["rouge", "bleu ciel", "noir", "vert", "jaune", "jaune", "blanc", "bleu foncé", "rose", "orange"];
var skinsMetalMario = ["or", "métal"];
var skinsInklingFille = ["orange", "verte", "rose"];
var skinsInklingGarcon = ["bleu", "violet", "cyan"];
var skinsLink = ["tunique verte", "tunique de prodige"];
var skinsBirdo = ["rose", "rouge", "vert·e", "bleu·e", "bleu ciel", "jaune", "noir·e", "blanc·he", "orange"];

var players = 1;

var FIRSTLOOP = false;

if (!FIRSTLOOP) {
    var currentPerso = Mario;
    var currentKart = KartStandard;
    var currentRoue = RouesStandard;
    var currentAile = AileStandard;
    FIRSTLOOP = true;
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function stats(stat, docStat) {
    for (let i = 0; i <= docStat.getElementsByClassName("unit").length - 1; i++) {
        docStat.getElementsByClassName("unit")[i].classList.remove("fill")
        docStat.getElementsByClassName("unit")[i].classList.add("unfill")
    }
    for (let i = 0; i <= stat - 1; i++) {
        docStat.getElementsByClassName("unit")[i].classList.remove("unfill")
        docStat.getElementsByClassName("unit")[i].classList.add("fill")
    }
}

function roll(id, statsB) {
    var skin;
    currentPerso = perso[getRandom(perso.length)];
    currentKart = karts[getRandom(karts.length)];
    currentRoue = roues[getRandom(roues.length)];
    currentAile = ailes[getRandom(ailes.length)];
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;

    if (Perso == Mii) {
        Perso = Mii[getRandom(Mii.length)];
        skin = "";
    } else {
        if (Perso.nom[0] == "Yoshi") {
            skin = skinsYoshi[getRandom(skinsYoshi.length)];
        } else if (Perso.nom[0] == "Maskass") {
            skin = skinsMaskass[getRandom(skinsMaskass.length)];
        } else if (Perso.nom[0] == "Mario de métal") {
            skin = skinsMetalMario[getRandom(skinsMetalMario.length)];
        } else if (Perso.nom[0] == "Inkling fille") {
            skin = skinsInklingFille[getRandom(skinsInklingFille.length)];
        } else if (Perso.nom[0] == "Inkling garçon") {
            skin = skinsInklingGarcon[getRandom(skinsInklingGarcon.length)];
        } else if (Perso.nom[0] == "Link") {
            skin = skinsLink[getRandom(skinsLink.length)];
        } else if (Perso.nom[0] == "Birdo") {
            skin = skinsBirdo[getRandom(skinsBirdo.length)];
        } else {
            skin = "";
        }
    }

    if (statsB) {
        var Vitesse = Perso.vitesse + Karts.vitesse + Roues.vitesse + Ailes.vitesse + 4;
        var VitesseEau = Perso.vitesseEau + Karts.vitesseEau + Roues.vitesseEau + Ailes.vitesseEau + 4;
        var VitesseAir = Perso.vitesseAir + Karts.vitesseAir + Roues.vitesseAir + Ailes.vitesseAir + 4;
        var VitesseAntiGravite = Perso.vitesseAntiGravite + Karts.vitesseAntiGravite + Roues.vitesseAntiGravite + Ailes.vitesseAntiGravite + 4;
        var Acceleration = Perso.acceleration + Karts.acceleration + Roues.acceleration + Ailes.acceleration + 4;
        var Poids = Perso.poids + Karts.poids + Roues.poids + Ailes.poids + 4;
        var Maniabilite = Perso.maniabilite + Karts.maniabilite + Roues.maniabilite + Ailes.maniabilite + 4;
        var ManiabiliteEau = Perso.maniabiliteEau + Karts.maniabiliteEau + Roues.maniabiliteEau + Ailes.maniabiliteEau + 4;
        var ManiabiliteAir = Perso.maniabiliteAir + Karts.maniabiliteAir + Roues.maniabiliteAir + Ailes.maniabiliteAir + 4;
        var ManiabiliteAntiGravite = Perso.maniabiliteAntiGravite + Karts.maniabiliteAntiGravite + Roues.maniabiliteAntiGravite + Ailes.maniabiliteAntiGravite + 4;
        var Adherence = Perso.adherence + Karts.adherence + Roues.adherence + Ailes.adherence + 4;
        var MiniTurbo = Perso.miniTurbo + Karts.miniTurbo + Roues.miniTurbo + Ailes.miniTurbo + 4;
        var Invincibility = Perso.invincibility + Karts.invincibility + Roues.invincibility + Ailes.invincibility + 4;

        var DocVitesse = document.getElementById("vitesseRoute");
        var DocVitesseEau = document.getElementById("vitesseEau");
        var DocVitesseAir = document.getElementById("vitesseAir");
        var DocVitesseAntiGravite = document.getElementById("vitesseAntiGravite");
        var DocAcceleration = document.getElementById("acceleration");
        var DocPoids = document.getElementById("poids");
        var DocManiabilite = document.getElementById("maniabiliteRoute");
        var DocManiabiliteEau = document.getElementById("maniabiliteEau");
        var DocManiabiliteAir = document.getElementById("maniabiliteAir");
        var DocManiabiliteAntiGravite = document.getElementById("maniabiliteAntiGravite");
        var DocAdherence = document.getElementById("adherence");
        var DocMiniTurbo = document.getElementById("miniTurbo");
        var DocInvincibility = document.getElementById("invincibility");

        stats(Vitesse, DocVitesse)
        stats(VitesseEau, DocVitesseEau)
        stats(VitesseAir, DocVitesseAir)
        stats(VitesseAntiGravite, DocVitesseAntiGravite)
        stats(Acceleration, DocAcceleration)
        stats(Poids, DocPoids)
        stats(Maniabilite, DocManiabilite)
        stats(ManiabiliteEau, DocManiabiliteEau)
        stats(ManiabiliteAir, DocManiabiliteAir)
        stats(ManiabiliteAntiGravite, DocManiabiliteAntiGravite)
        stats(Adherence, DocAdherence)
        stats(MiniTurbo, DocMiniTurbo)
        stats(Invincibility, DocInvincibility);
    }

    if (lang == 0 || lang == 1) {
        document.getElementsByClassName("name")[4 * (id - 1) + 0].textContent = Perso.nom[lang] + " " + skin;
    } else {
        document.getElementsByClassName("name")[4 * (id - 1) + 0].textContent = Perso.nom[lang];
    }
    document.getElementsByClassName("name")[4 * (id - 1) + 1].textContent = Karts.nom[lang];
    document.getElementsByClassName("name")[4 * (id - 1) + 2].textContent = Roues.nom[lang];
    document.getElementsByClassName("name")[4 * (id - 1) + 3].textContent = Ailes.nom[lang];

    if (skin == "") {
        document.getElementById("personnage" + id).src = "img/personnages/" + Perso.nom[0] + ".webp";
    } else {
        document.getElementById("personnage" + id).src = "img/personnages/" + Perso.nom[0] + " " + skin + ".webp";
    }
    document.getElementById("kart" + id).src = "img/karts/" + Karts.nom[0] + ".webp";
    document.getElementById("roue" + id).src = "img/roues/" + Roues.nom[0] + ".webp";
    document.getElementById("aile" + id).src = "img/ailes/" + Ailes.nom[0] + ".webp";

    //addToHistory(Perso, skin, Karts, Roues, Ailes, id);

    let elements = Array(Perso, skin, Karts, Roues, Ailes, id);

    return elements;
}

function addToHistory(Perso, Skin, Karts, Roues, Ailes, Playr) {

    // console.log(Playr);
    let div = document.createElement("div");
    div.classList.add("historySet");

    let name = document.createElement("p");
    const playerName = document.getElementsByClassName("playerName")[Playr - 1].value;

    if (playerName != "") {
        name.textContent = playerName;
    } else {
        name.textContent = "Joueur " + Playr;
    }

    let perso = document.createElement("img");

    if (Skin == "") {
        perso.src = "img/personnages/" + Perso.nom[0] + ".webp";
    } else {
        perso.src = "img/personnages/" + Perso.nom[0] + " " + Skin + ".webp ";
    }

    let kart = document.createElement("img");
    kart.src = "img/karts/" + Karts.nom[0] + ".webp";

    let roues = document.createElement("img");
    roues.src = "img/roues/" + Roues.nom[0] + ".webp";

    let aile = document.createElement("img");
    aile.src = "img/ailes/" + Ailes.nom[0] + ".webp";

    div.appendChild(name);
    div.appendChild(perso);
    div.appendChild(kart);
    div.appendChild(roues);
    div.appendChild(aile);
    document.getElementById("history").appendChild(div)
}

window.addEventListener("load", () => {
    roll(1, true);
    roll(2, false);
    roll(3, false);
    roll(4, false);
    for (let i = 1; i <= 4; i++) {
        document.getElementById("nom" + i).value = localStorage.getItem("nom" + i)
    }
})

for (let i = 1; i <= 4; i++) {
    document.getElementById("nom" + i).addEventListener("keyup", () => {
        localStorage.setItem("nom" + i, document.getElementById("nom" + i).value);
    })
}

document.getElementById("playersArrow").addEventListener("click", () => {
    let sc = document.getElementById("setContainer");
    players++;
    if (players <= 4) {
        document.getElementById("stats").style.setProperty("display", "none");
        document.getElementById("nom" + players).style.display = "block";
        document.getElementById("reroll" + players).style.display = "block";
        document.getElementById("set" + players).style.display = "block";
    }
    setTimeout(() => {
        document.getElementById("nom" + players).style.opacity = "1";
        document.getElementById("reroll" + players).style.opacity = "1";
        document.getElementById("set" + players).style.opacity = "1";
    }, 2)
    if (players == 4)
        document.getElementById("playersArrow").style.setProperty("display", "none");
})

document.getElementById("reroll1").getElementsByTagName("button")[0].addEventListener("click", () => {
    let e = roll(1, true);
    addToHistory(e[0], e[1], e[2], e[3], e[4], e[5])
});

document.getElementById("reroll2").getElementsByTagName("button")[0].addEventListener("click", () => {
    let e = roll(2, true);
    addToHistory(e[0], e[1], e[2], e[3], e[4], e[5])
});

document.getElementById("reroll3").getElementsByTagName("button")[0].addEventListener("click", () => {
    let e = roll(3, true);
    addToHistory(e[0], e[1], e[2], e[3], e[4], e[5])
});

document.getElementById("reroll4").getElementsByTagName("button")[0].addEventListener("click", () => {
    let e = roll(4, true);
    addToHistory(e[0], e[1], e[2], e[3], e[4], e[5])
});

document.getElementById("personnage1").addEventListener("click", () => {
    var skin;
    currentPerso = perso[getRandom(perso.length)];
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;
    if (Perso == Mii) {
        Perso = Mii[getRandom(Mii.length)];
        skin = "";
    } else {
        if (Perso.nom[0] == "Yoshi") {
            skin = skinsYoshi[getRandom(skinsYoshi.length)];
        } else if (Perso.nom[0] == "Maskass") {
            skin = skinsMaskass[getRandom(skinsMaskass.length)];
        } else if (Perso.nom[0] == "Mario de métal") {
            skin = skinsMetalMario[getRandom(skinsMetalMario.length)];
        } else if (Perso.nom[0] == "Inkling fille") {
            skin = skinsInklingFille[getRandom(skinsInklingFille.length)];
        } else if (Perso.nom[0] == "Inkling garçon") {
            skin = skinsInklingGarcon[getRandom(skinsInklingGarcon.length)];
        } else if (Perso.nom[0] == "Link") {
            skin = skinsLink[getRandom(skinsLink.length)];
        } else if (Perso.nom[0] == "Birdo") {
            skin = skinsBirdo[getRandom(skinsBirdo.length)];
        } else {
            skin = "";
        }
    }

    var Vitesse = Perso.vitesse + Karts.vitesse + Roues.vitesse + Ailes.vitesse + 4;
    var VitesseEau = Perso.vitesseEau + Karts.vitesseEau + Roues.vitesseEau + Ailes.vitesseEau + 4;
    var VitesseAir = Perso.vitesseAir + Karts.vitesseAir + Roues.vitesseAir + Ailes.vitesseAir + 4;
    var VitesseAntiGravite = Perso.vitesseAntiGravite + Karts.vitesseAntiGravite + Roues.vitesseAntiGravite + Ailes.vitesseAntiGravite + 4;
    var Acceleration = Perso.acceleration + Karts.acceleration + Roues.acceleration + Ailes.acceleration + 4;
    var Poids = Perso.poids + Karts.poids + Roues.poids + Ailes.poids + 4;
    var Maniabilite = Perso.maniabilite + Karts.maniabilite + Roues.maniabilite + Ailes.maniabilite + 4;
    var ManiabiliteEau = Perso.maniabiliteEau + Karts.maniabiliteEau + Roues.maniabiliteEau + Ailes.maniabiliteEau + 4;
    var ManiabiliteAir = Perso.maniabiliteAir + Karts.maniabiliteAir + Roues.maniabiliteAir + Ailes.maniabiliteAir + 4;
    var ManiabiliteAntiGravite = Perso.maniabiliteAntiGravite + Karts.maniabiliteAntiGravite + Roues.maniabiliteAntiGravite + Ailes.maniabiliteAntiGravite + 4;
    var Adherence = Perso.adherence + Karts.adherence + Roues.adherence + Ailes.adherence + 4;
    var MiniTurbo = Perso.miniTurbo + Karts.miniTurbo + Roues.miniTurbo + Ailes.miniTurbo + 4;
    var Invincibility = Perso.invincibility + Karts.invincibility + Roues.invincibility + Ailes.invincibility + 4;;

    if (lang == 0 || lang == 1) {
        document.getElementsByClassName("name")[0].textContent = Perso.nom[lang] + " " + skin;
    } else {
        document.getElementsByClassName("name")[0].textContent = Perso.nom[lang];
    }

    if (skin == "") {
        document.getElementById("personnage1").src = "img/personnages/" + Perso.nom[0] + ".webp";
    } else {
        document.getElementById("personnage1").src = "img/personnages/" + Perso.nom[0] + " " + skin + ".webp";
    }

    var DocVitesse = document.getElementById("vitesseRoute");
    var DocVitesseEau = document.getElementById("vitesseEau");
    var DocVitesseAir = document.getElementById("vitesseAir");
    var DocVitesseAntiGravite = document.getElementById("vitesseAntiGravite");
    var DocAcceleration = document.getElementById("acceleration");
    var DocPoids = document.getElementById("poids");
    var DocManiabilite = document.getElementById("maniabiliteRoute");
    var DocManiabiliteEau = document.getElementById("maniabiliteEau");
    var DocManiabiliteAir = document.getElementById("maniabiliteAir");
    var DocManiabiliteAntiGravite = document.getElementById("maniabiliteAntiGravite");
    var DocAdherence = document.getElementById("adherence");
    var DocMiniTurbo = document.getElementById("miniTurbo");
    var DocInvincibility = document.getElementById("invincibility");

    stats(Vitesse, DocVitesse)
    stats(VitesseEau, DocVitesseEau)
    stats(VitesseAir, DocVitesseAir)
    stats(VitesseAntiGravite, DocVitesseAntiGravite)
    stats(Acceleration, DocAcceleration)
    stats(Poids, DocPoids)
    stats(Maniabilite, DocManiabilite)
    stats(ManiabiliteEau, DocManiabiliteEau)
    stats(ManiabiliteAir, DocManiabiliteAir)
    stats(ManiabiliteAntiGravite, DocManiabiliteAntiGravite)
    stats(Adherence, DocAdherence)
    stats(MiniTurbo, DocMiniTurbo)
    stats(Invincibility, DocInvincibility);

    //addToHistory(Perso, skin, Karts, Roues, Ailes, 1);
})

document.getElementById("personnage2").addEventListener("click", () => {
    var skin;
    currentPerso = perso[getRandom(perso.length)];
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;
    if (Perso == Mii) {
        Perso = Mii[getRandom(Mii.length)];
        skin = "";
    } else {
        if (Perso.nom[0] == "Yoshi") {
            skin = skinsYoshi[getRandom(skinsYoshi.length)];
        } else if (Perso.nom[0] == "Maskass") {
            skin = skinsMaskass[getRandom(skinsMaskass.length)];
        } else if (Perso.nom[0] == "Mario de métal") {
            skin = skinsMetalMario[getRandom(skinsMetalMario.length)];
        } else if (Perso.nom[0] == "Inkling fille") {
            skin = skinsInklingFille[getRandom(skinsInklingFille.length)];
        } else if (Perso.nom[0] == "Inkling garçon") {
            skin = skinsInklingGarcon[getRandom(skinsInklingGarcon.length)];
        } else if (Perso.nom[0] == "Link") {
            skin = skinsLink[getRandom(skinsLink.length)];
        } else if (Perso.nom[0] == "Birdo") {
            skin = skinsBirdo[getRandom(skinsBirdo.length)];
        } else {
            skin = "";
        }
    }

    if (lang == 0 || lang == 1) {
        document.getElementsByClassName("name")[4].textContent = Perso.nom[lang] + " " + skin;
    } else {
        document.getElementsByClassName("name")[4].textContent = Perso.nom[lang];
    }

    if (skin == "") {
        document.getElementById("personnage2").src = "img/personnages/" + Perso.nom[0] + ".webp";
    } else {
        document.getElementById("personnage2").src = "img/personnages/" + Perso.nom[0] + " " + skin + ".webp";
    }

    //addToHistory(Perso, skin, Karts, Roues, Ailes, 2);
})

document.getElementById("personnage3").addEventListener("click", () => {
    var skin;
    currentPerso = perso[getRandom(perso.length)];
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;
    if (Perso == Mii) {
        Perso = Mii[getRandom(Mii.length)];
        skin = "";
    } else {
        if (Perso.nom[0] == "Yoshi") {
            skin = skinsYoshi[getRandom(skinsYoshi.length)];
        } else if (Perso.nom[0] == "Maskass") {
            skin = skinsMaskass[getRandom(skinsMaskass.length)];
        } else if (Perso.nom[0] == "Mario de métal") {
            skin = skinsMetalMario[getRandom(skinsMetalMario.length)];
        } else if (Perso.nom[0] == "Inkling fille") {
            skin = skinsInklingFille[getRandom(skinsInklingFille.length)];
        } else if (Perso.nom[0] == "Inkling garçon") {
            skin = skinsInklingGarcon[getRandom(skinsInklingGarcon.length)];
        } else if (Perso.nom[0] == "Link") {
            skin = skinsLink[getRandom(skinsLink.length)];
        } else if (Perso.nom[0] == "Birdo") {
            skin = skinsBirdo[getRandom(skinsBirdo.length)];
        } else {
            skin = "";
        }
    }

    if (lang == 0 || lang == 1) {
        document.getElementsByClassName("name")[8].textContent = Perso.nom[lang] + " " + skin;
    } else {
        document.getElementsByClassName("name")[8].textContent = Perso.nom[lang];
    }

    if (skin == "") {
        document.getElementById("personnage3").src = "img/personnages/" + Perso.nom[0] + ".webp";
    } else {
        document.getElementById("personnage3").src = "img/personnages/" + Perso.nom[0] + " " + skin + ".webp";
    }

    //addToHistory(Perso, skin, Karts, Roues, Ailes, 3);
})

document.getElementById("personnage4").addEventListener("click", () => {
    var skin;
    currentPerso = perso[getRandom(perso.length)];
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;
    if (Perso == Mii) {
        Perso = Mii[getRandom(Mii.length)];
        skin = "";
    } else {
        if (Perso.nom[0] == "Yoshi") {
            skin = skinsYoshi[getRandom(skinsYoshi.length)];
        } else if (Perso.nom[0] == "Maskass") {
            skin = skinsMaskass[getRandom(skinsMaskass.length)];
        } else if (Perso.nom[0] == "Mario de métal") {
            skin = skinsMetalMario[getRandom(skinsMetalMario.length)];
        } else if (Perso.nom[0] == "Inkling fille") {
            skin = skinsInklingFille[getRandom(skinsInklingFille.length)];
        } else if (Perso.nom[0] == "Inkling garçon") {
            skin = skinsInklingGarcon[getRandom(skinsInklingGarcon.length)];
        } else if (Perso.nom[0] == "Link") {
            skin = skinsLink[getRandom(skinsLink.length)];
        } else if (Perso.nom[0] == "Birdo") {
            skin = skinsBirdo[getRandom(skinsBirdo.length)];
        } else {
            skin = "";
        }
    }

    if (lang == 0 || lang == 1) {
        document.getElementsByClassName("name")[12].textContent = Perso.nom[lang] + " " + skin;
    } else {
        document.getElementsByClassName("name")[12].textContent = Perso.nom[lang];
    }

    if (skin == "") {
        document.getElementById("personnage4").src = "img/personnages/" + Perso.nom[0] + ".webp";
    } else {
        document.getElementById("personnage4").src = "img/personnages/" + Perso.nom[0] + " " + skin + ".webp";
    }

    //addToHistory(Perso, skin, Karts, Roues, Ailes, 4);
})

document.getElementById("kart1").addEventListener("click", () => {
    currentKart = karts[getRandom(karts.length)];
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;

    var Vitesse = Perso.vitesse + Karts.vitesse + Roues.vitesse + AileEnPapier.vitesse + 4
    var VitesseEau = Perso.vitesseEau + Karts.vitesseEau + Roues.vitesseEau + AileEnPapier.vitesseEau + 4
    var VitesseAir = Perso.vitesseAir + Karts.vitesseAir + Roues.vitesseAir + AileEnPapier.vitesseAir + 4
    var VitesseAntiGravite = Perso.vitesseAntiGravite + Karts.vitesseAntiGravite + Roues.vitesseAntiGravite + AileEnPapier.vitesseAntiGravite + 4
    var Acceleration = Perso.acceleration + Karts.acceleration + Roues.acceleration + AileEnPapier.acceleration + 4
    var Poids = Perso.poids + Karts.poids + Roues.poids + AileEnPapier.poids + 4
    var Maniabilite = Perso.maniabilite + Karts.maniabilite + Roues.maniabilite + AileEnPapier.maniabilite + 4
    var ManiabiliteEau = Perso.maniabiliteEau + Karts.maniabiliteEau + Roues.maniabiliteEau + AileEnPapier.maniabiliteEau + 4
    var ManiabiliteAir = Perso.maniabiliteAir + Karts.maniabiliteAir + Roues.maniabiliteAir + AileEnPapier.maniabiliteAir + 4
    var ManiabiliteAntiGravite = Perso.maniabiliteAntiGravite + Karts.maniabiliteAntiGravite + Roues.maniabiliteAntiGravite + AileEnPapier.maniabiliteAntiGravite + 4
    var Adherence = Perso.adherence + Karts.adherence + Roues.adherence + AileEnPapier.adherence + 4
    var MiniTurbo = Perso.miniTurbo + Karts.miniTurbo + Roues.miniTurbo + AileEnPapier.miniTurbo + 4
    var Invincibility = Perso.invincibility + Karts.invincibility + Roues.invincibility + Ailes.invincibility + 4;

    document.getElementsByClassName("name")[1].textContent = Karts.nom[lang];

    document.getElementById("kart1").src = "img/karts/" + Karts.nom[0] + ".webp";

    var DocVitesse = document.getElementById("vitesseRoute");
    var DocVitesseEau = document.getElementById("vitesseEau");
    var DocVitesseAir = document.getElementById("vitesseAir");
    var DocVitesseAntiGravite = document.getElementById("vitesseAntiGravite");
    var DocAcceleration = document.getElementById("acceleration");
    var DocPoids = document.getElementById("poids");
    var DocManiabilite = document.getElementById("maniabiliteRoute");
    var DocManiabiliteEau = document.getElementById("maniabiliteEau");
    var DocManiabiliteAir = document.getElementById("maniabiliteAir");
    var DocManiabiliteAntiGravite = document.getElementById("maniabiliteAntiGravite");
    var DocAdherence = document.getElementById("adherence");
    var DocMiniTurbo = document.getElementById("miniTurbo");
    var DocInvincibility = document.getElementById("invincibility");

    stats(Vitesse, DocVitesse)
    stats(VitesseEau, DocVitesseEau)
    stats(VitesseAir, DocVitesseAir)
    stats(VitesseAntiGravite, DocVitesseAntiGravite)
    stats(Acceleration, DocAcceleration)
    stats(Poids, DocPoids)
    stats(Maniabilite, DocManiabilite)
    stats(ManiabiliteEau, DocManiabiliteEau)
    stats(ManiabiliteAir, DocManiabiliteAir)
    stats(ManiabiliteAntiGravite, DocManiabiliteAntiGravite)
    stats(Adherence, DocAdherence)
    stats(MiniTurbo, DocMiniTurbo)
    stats(Invincibility, DocInvincibility);

    //addToHistory(Perso, "", Karts, Roues, Ailes, 1);
})

document.getElementById("kart2").addEventListener("click", () => {
    currentKart = karts[getRandom(karts.length)];
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;
    var Perso = currentPerso;

    document.getElementsByClassName("name")[5].textContent = Karts.nom[lang];

    document.getElementById("kart2").src = "img/karts/" + Karts.nom[0] + ".webp";

    addToHistory(Perso, "", Karts, Roues, Ailes, 2);
})

document.getElementById("kart3").addEventListener("click", () => {
    currentKart = karts[getRandom(karts.length)];
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;
    var Perso = currentPerso;

    document.getElementsByClassName("name")[9].textContent = Karts.nom[lang];

    document.getElementById("kart3").src = "img/karts/" + Karts.nom[0] + ".webp";

    //addToHistory(Perso, "", Karts, Roues, Ailes, 3);
})

document.getElementById("kart4").addEventListener("click", () => {
    currentKart = karts[getRandom(karts.length)];
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;
    var Perso = currentPerso;

    document.getElementsByClassName("name")[13].textContent = Karts.nom[lang];

    document.getElementById("kart4").src = "img/karts/" + Karts.nom[0] + ".webp";

    //addToHistory(Perso, "", Karts, Roues, Ailes, 4);
})

document.getElementById("roue1").addEventListener("click", () => {
    currentRoue = roues[getRandom(roues.length)];
    var Roues = currentRoue;
    var Ailes = currentAile;
    var Perso = currentPerso;
    var Karts = currentKart;

    var Vitesse = Perso.vitesse + Karts.vitesse + Roues.vitesse + Ailes.vitesse + 4
    var VitesseEau = Perso.vitesseEau + Karts.vitesseEau + Roues.vitesseEau + Ailes.vitesseEau + 4
    var VitesseAir = Perso.vitesseAir + Karts.vitesseAir + Roues.vitesseAir + Ailes.vitesseAir + 4
    var VitesseAntiGravite = Perso.vitesseAntiGravite + Karts.vitesseAntiGravite + Roues.vitesseAntiGravite + Ailes.vitesseAntiGravite + 4
    var Acceleration = Perso.acceleration + Karts.acceleration + Roues.acceleration + Ailes.acceleration + 4
    var Poids = Perso.poids + Karts.poids + Roues.poids + Ailes.poids + 4
    var Maniabilite = Perso.maniabilite + Karts.maniabilite + Roues.maniabilite + Ailes.maniabilite + 4
    var ManiabiliteEau = Perso.maniabiliteEau + Karts.maniabiliteEau + Roues.maniabiliteEau + Ailes.maniabiliteEau + 4
    var ManiabiliteAir = Perso.maniabiliteAir + Karts.maniabiliteAir + Roues.maniabiliteAir + Ailes.maniabiliteAir + 4
    var ManiabiliteAntiGravite = Perso.maniabiliteAntiGravite + Karts.maniabiliteAntiGravite + Roues.maniabiliteAntiGravite + Ailes.maniabiliteAntiGravite + 4
    var Adherence = Perso.adherence + Karts.adherence + Roues.adherence + Ailes.adherence + 4
    var MiniTurbo = Perso.miniTurbo + Karts.miniTurbo + Roues.miniTurbo + Ailes.miniTurbo + 4
    var Invincibility = Perso.invincibility + Karts.invincibility + Roues.invincibility + Ailes.invincibility + 4;

    document.getElementsByClassName("name")[2].textContent = Roues.nom[lang];

    document.getElementById("roue1").src = "img/roues/" + Roues.nom[0] + ".webp";

    var DocVitesse = document.getElementById("vitesseRoute");
    var DocVitesseEau = document.getElementById("vitesseEau");
    var DocVitesseAir = document.getElementById("vitesseAir");
    var DocVitesseAntiGravite = document.getElementById("vitesseAntiGravite");
    var DocAcceleration = document.getElementById("acceleration");
    var DocPoids = document.getElementById("poids");
    var DocManiabilite = document.getElementById("maniabiliteRoute");
    var DocManiabiliteEau = document.getElementById("maniabiliteEau");
    var DocManiabiliteAir = document.getElementById("maniabiliteAir");
    var DocManiabiliteAntiGravite = document.getElementById("maniabiliteAntiGravite");
    var DocAdherence = document.getElementById("adherence");
    var DocMiniTurbo = document.getElementById("miniTurbo");
    var DocInvincibility = document.getElementById("invincibility");

    stats(Vitesse, DocVitesse)
    stats(VitesseEau, DocVitesseEau)
    stats(VitesseAir, DocVitesseAir)
    stats(VitesseAntiGravite, DocVitesseAntiGravite)
    stats(Acceleration, DocAcceleration)
    stats(Poids, DocPoids)
    stats(Maniabilite, DocManiabilite)
    stats(ManiabiliteEau, DocManiabiliteEau)
    stats(ManiabiliteAir, DocManiabiliteAir)
    stats(ManiabiliteAntiGravite, DocManiabiliteAntiGravite)
    stats(Adherence, DocAdherence)
    stats(MiniTurbo, DocMiniTurbo)
    stats(Invincibility, DocInvincibility);

    //addToHistory(Perso, "", Karts, Roues, Ailes, 1);
})

document.getElementById("roue2").addEventListener("click", () => {
    currentRoue = roues[getRandom(roues.length)];
    var Roues = currentRoue;
    var Ailes = currentAile;
    var Perso = currentPerso;
    var Karts = currentKart;

    document.getElementsByClassName("name")[6].textContent = Roues.nom[lang];

    document.getElementById("roue2").src = "img/roues/" + Roues.nom[0] + ".webp";

    //addToHistory(Perso, "", Karts, Roues, Ailes, 2);
})

document.getElementById("roue3").addEventListener("click", () => {
    currentRoue = roues[getRandom(roues.length)];
    var Roues = currentRoue;
    var Ailes = currentAile;
    var Perso = currentPerso;
    var Karts = currentKart;

    document.getElementsByClassName("name")[10].textContent = Roues.nom[lang];

    document.getElementById("roue3").src = "img/roues/" + Roues.nom[0] + ".webp";

    //addToHistory(Perso, "", Karts, Roues, Ailes, 3);
})

document.getElementById("roue4").addEventListener("click", () => {
    currentRoue = roues[getRandom(roues.length)];
    var Roues = currentRoue;
    var Ailes = currentAile;
    var Perso = currentPerso;
    var Karts = currentKart;

    document.getElementsByClassName("name")[14].textContent = Roues.nom[lang];

    document.getElementById("roue4").src = "img/roues/" + Roues.nom[0] + ".webp";

    //addToHistory(Perso, "", Karts, Roues, Ailes, 4);
})

document.getElementById("aile1").addEventListener("click", () => {
    currentAile = ailes[getRandom(ailes.length)];
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;

    var Vitesse = Perso.vitesse + Karts.vitesse + Roues.vitesse + Ailes.vitesse + 4
    var VitesseEau = Perso.vitesseEau + Karts.vitesseEau + Roues.vitesseEau + Ailes.vitesseEau + 4
    var VitesseAir = Perso.vitesseAir + Karts.vitesseAir + Roues.vitesseAir + Ailes.vitesseAir + 4
    var VitesseAntiGravite = Perso.vitesseAntiGravite + Karts.vitesseAntiGravite + Roues.vitesseAntiGravite + Ailes.vitesseAntiGravite + 4
    var Acceleration = Perso.acceleration + Karts.acceleration + Roues.acceleration + Ailes.acceleration + 4
    var Poids = Perso.poids + Karts.poids + Roues.poids + Ailes.poids + 4
    var Maniabilite = Perso.maniabilite + Karts.maniabilite + Roues.maniabilite + Ailes.maniabilite + 4
    var ManiabiliteEau = Perso.maniabiliteEau + Karts.maniabiliteEau + Roues.maniabiliteEau + Ailes.maniabiliteEau + 4
    var ManiabiliteAir = Perso.maniabiliteAir + Karts.maniabiliteAir + Roues.maniabiliteAir + Ailes.maniabiliteAir + 4
    var ManiabiliteAntiGravite = Perso.maniabiliteAntiGravite + Karts.maniabiliteAntiGravite + Roues.maniabiliteAntiGravite + Ailes.maniabiliteAntiGravite + 4
    var Adherence = Perso.adherence + Karts.adherence + Roues.adherence + Ailes.adherence + 4
    var MiniTurbo = Perso.miniTurbo + Karts.miniTurbo + Roues.miniTurbo + Ailes.miniTurbo + 4
    var Invincibility = Perso.invincibility + Karts.invincibility + Roues.invincibility + Ailes.invincibility + 4;

    document.getElementsByClassName("name")[3].textContent = Ailes.nom[lang];

    document.getElementById("aile1").src = "img/ailes/" + Ailes.nom[0] + ".webp";

    var DocVitesse = document.getElementById("vitesseRoute");
    var DocVitesseEau = document.getElementById("vitesseEau");
    var DocVitesseAir = document.getElementById("vitesseAir");
    var DocVitesseAntiGravite = document.getElementById("vitesseAntiGravite");
    var DocAcceleration = document.getElementById("acceleration");
    var DocPoids = document.getElementById("poids");
    var DocManiabilite = document.getElementById("maniabiliteRoute");
    var DocManiabiliteEau = document.getElementById("maniabiliteEau");
    var DocManiabiliteAir = document.getElementById("maniabiliteAir");
    var DocManiabiliteAntiGravite = document.getElementById("maniabiliteAntiGravite");
    var DocAdherence = document.getElementById("adherence");
    var DocMiniTurbo = document.getElementById("miniTurbo");
    var DocInvincibility = document.getElementById("invincibility");

    stats(Vitesse, DocVitesse)
    stats(VitesseEau, DocVitesseEau)
    stats(VitesseAir, DocVitesseAir)
    stats(VitesseAntiGravite, DocVitesseAntiGravite)
    stats(Acceleration, DocAcceleration)
    stats(Poids, DocPoids)
    stats(Maniabilite, DocManiabilite)
    stats(ManiabiliteEau, DocManiabiliteEau)
    stats(ManiabiliteAir, DocManiabiliteAir)
    stats(ManiabiliteAntiGravite, DocManiabiliteAntiGravite)
    stats(Adherence, DocAdherence)
    stats(MiniTurbo, DocMiniTurbo)
    stats(Invincibility, DocInvincibility);
    //addToHistory(Perso, "", Karts, Roues, Ailes, 1);
})

document.getElementById("aile2").addEventListener("click", () => {
    currentAile = ailes[getRandom(ailes.length)];
    var Ailes = currentAile;
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;

    document.getElementsByClassName("name")[7].textContent = Ailes.nom[lang];

    document.getElementById("aile2").src = "img/ailes/" + Ailes.nom[0] + ".webp";

    //addToHistory(Perso, "", Karts, Roues, Ailes, 2);
})

document.getElementById("aile3").addEventListener("click", () => {
    currentAile = ailes[getRandom(ailes.length)];
    var Ailes = currentAile;
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;

    document.getElementsByClassName("name")[11].textContent = Ailes.nom[lang];

    document.getElementById("aile3").src = "img/ailes/" + Ailes.nom[0] + ".webp";

    //addToHistory(Perso, "", Karts, Roues, Ailes, 3);
})

document.getElementById("aile4").addEventListener("click", () => {
    currentAile = ailes[getRandom(ailes.length)];
    var Ailes = currentAile;
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;

    document.getElementsByClassName("name")[15].textContent = Ailes.nom[lang];

    document.getElementById("aile4").src = "img/ailes/" + Ailes.nom[0] + ".webp";

    //addToHistory(Perso, "", Karts, Roues, Ailes, 4);
})

document.getElementById("displayHistory").addEventListener("click", () => {
    if (document.getElementById("history").style.display == "block") {
        document.getElementById("history").style.display = "none";
        document.getElementById("displayHistory").innerText = "Afficher l'historique";
    } else {
        document.getElementById("history").style.display = "block";
        document.getElementById("displayHistory").innerText = "Masquer l'historique";
    }
})