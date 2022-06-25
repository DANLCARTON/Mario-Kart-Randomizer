import { BebePeach, BebeDaisy, BebeHarmonie, Lemmy, BebeMario, BebeLuigi, Skelerex, MiiLeger, Koopa, Lakitu, BowserJr, Toadette, Wendy, Marie, Toad, Maskass, Larry, PeachChat, InklingFille, Villageoise, Peach, Daisy, Yoshi, MarioTanuki, InklingGarcon, Villageois, Luigi, Iggy, Mario, Ludwig, MiiMoyen, Harmonie, RoiBoo, Link, DonkeyKong, Waluigi, Roy, Wario, BowserSkelet, MarioDeMetal, PeachDOrRose, Bowser, Morton, MiiLourd, KartStandard, Cybertrombe, SLRoadster, Retro, Mecabecane, ScooterAC, Proto8, Propulsar, MissileTornade, Nautomobile, TubulR3, Malecycle, Chabriolet, Meteore, Yoshimoto, QuadNounours, MachCelere, Intrepide, Magikart, BeatBolide, QuadStandard, KartGLA, Cavalkart, SportGP, Epervier, Paracoccinelly, Scootinette, Caraveloce, Autorinho, Sneakart, KartOr, DestrierDeLegende, MotoStandard, Flamboyante, QuadWiggler, W25FlecheDArgent, BlueFalcon, Kartoon, BuggyTanuki, KoopaMobile, DestrierDeLegende01, RouesStandard, StandardBleu, RouesGLA, Mastodonte, MastoFlamme, Archeonique, Roller, RollerAzur, Classique, ClassiqueRouge, Bois, Lisse, CyberLisse, Metal, RouesOr, Bouton, Feuille, HorsPiste, HorsPisteRetro, Triforce, Eponge, Coussin, AileStandard, Dendinaile, AileHylienne, AileNuages, Parachute, AileFleurie, AileEnPapier, AileWario, Planeur, AileOr, Paravoile, OmbrellePeach, Parapente, ParapenteMKTV, BowserVolant } from "./stats.js";

var Mii = [MiiLeger, MiiMoyen, MiiLourd]

var perso = [BebePeach, BebeDaisy, BebeHarmonie, Lemmy, BebeMario, BebeLuigi, Skelerex, Koopa, Lakitu, BowserJr, Toadette, Wendy, Marie, Toad, Maskass, Larry, PeachChat, InklingFille, Villageoise, Peach, Daisy, Yoshi, MarioTanuki, InklingGarcon, Villageois, Luigi, Iggy, Mario, Ludwig, Harmonie, RoiBoo, Link, DonkeyKong, Waluigi, Roy, Wario, BowserSkelet, MarioDeMetal, PeachDOrRose, Bowser, Morton, Mii];
var karts = [KartStandard, Cybertrombe, SLRoadster, Retro, Mecabecane, ScooterAC, Proto8, Propulsar, MissileTornade, Nautomobile, TubulR3, Malecycle, Chabriolet, Meteore, Yoshimoto, QuadNounours, MachCelere, Intrepide, Magikart, BeatBolide, QuadStandard, KartGLA, Cavalkart, SportGP, Epervier, Paracoccinelly, Scootinette, Caraveloce, Autorinho, Sneakart, KartOr, DestrierDeLegende, MotoStandard, Flamboyante, QuadWiggler, W25FlecheDArgent, BlueFalcon, Kartoon, BuggyTanuki, KoopaMobile, DestrierDeLegende01];
var roues = [RouesStandard, StandardBleu, RouesGLA, Mastodonte, MastoFlamme, Archeonique, Roller, RollerAzur, Classique, ClassiqueRouge, Bois, Lisse, CyberLisse, Metal, RouesOr, Bouton, Feuille, HorsPiste, HorsPisteRetro, Triforce, Eponge, Coussin];
var ailes = [AileStandard, Dendinaile, AileHylienne, AileNuages, Parachute, AileFleurie, AileEnPapier, AileWario, Planeur, AileOr, Paravoile, OmbrellePeach, Parapente, ParapenteMKTV, BowserVolant];

var skinsYoshi = ["vert", "bleu ciel", "noir", "rouge", "jaune", "blanc", "bleu foncé", "rose", "orange"];
var skinsMaskass = ["rouge", "bleu ciel", "noir", "vert", "jaune", "jaune", "blanc", "bleu foncé", "rose", "orange"];
var skinsMetalMario = ["or", "métal"];
var skinsInklingFille = ["orange", "verte", "rose"];
var skinsInklingGarcon = ["bleu", "violet", "cyan"];
var skinsLink = ["tunique verte", "tunique de prodige"];

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

document.getElementById("reroll").addEventListener("click", () => {
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
        if (Perso.nom == "Yoshi") {
            skin = skinsYoshi[getRandom(skinsYoshi.length)];
        } else if (Perso.nom == "Maskass") {
            skin = skinsMaskass[getRandom(skinsMaskass.length)];
        } else if (Perso.nom == "Mario de métal") {
            skin = skinsMetalMario[getRandom(skinsMetalMario.length)];
        } else if (Perso.nom == "Inkling fille") {
            skin = skinsInklingFille[getRandom(skinsInklingFille.length)];
        } else if (Perso.nom == "Inkling garçon") {
            skin = skinsInklingGarcon[getRandom(skinsInklingGarcon.length)];
        } else if (Perso.nom == "Link") {
            skin = skinsLink[getRandom(skinsLink.length)];
        } else {
            skin = "";
        }
    }

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

    document.getElementsByClassName("name")[0].textContent = Perso.nom + " " + skin;
    document.getElementsByClassName("name")[1].textContent = Karts.nom;
    document.getElementsByClassName("name")[2].textContent = Roues.nom;
    document.getElementsByClassName("name")[3].textContent = Ailes.nom;

    if (skin == "") {
        document.getElementById("personnage").src = "img/personnages/" + Perso.nom + ".png";
    } else {
        document.getElementById("personnage").src = "img/personnages/" + Perso.nom + " " + skin + ".png";
    }
    document.getElementById("kart").src = "img/karts/" + Karts.nom + ".png";
    document.getElementById("roue").src = "img/roues/" + Roues.nom + ".png";
    document.getElementById("aile").src = "img/ailes/" + Ailes.nom + ".png";

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
});

document.getElementById("personnage").addEventListener("click", () => {
    var skin;
    currentPerso = perso[getRandom(perso.length)];
    console.log(currentPerso);
    console.log(currentKart);
    console.log(currentRoue);
    console.log(currentAile);
    var Perso = currentPerso;
    var Karts = currentKart;
    var Roues = currentRoue;
    var Ailes = currentAile;
    if (Perso == Mii) {
        Perso = Mii[getRandom(Mii.length)];
        skin = "";
    } else {
        if (Perso.nom == "Yoshi") {
            skin = skinsYoshi[getRandom(skinsYoshi.length)];
        } else if (Perso.nom == "Maskass") {
            skin = skinsMaskass[getRandom(skinsMaskass.length)];
        } else if (Perso.nom == "Mario de métal") {
            skin = skinsMetalMario[getRandom(skinsMetalMario.length)];
        } else if (Perso.nom == "Inkling fille") {
            skin = skinsInklingFille[getRandom(skinsInklingFille.length)];
        } else if (Perso.nom == "Inkling garçon") {
            skin = skinsInklingGarcon[getRandom(skinsInklingGarcon.length)];
        } else if (Perso.nom == "Link") {
            skin = skinsLink[getRandom(skinsLink.length)];
        } else {
            skin = "";
        }
    }

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

    document.getElementsByClassName("name")[0].textContent = Perso.nom + " " + skin;

    if (skin == "") {
        document.getElementById("personnage").src = "img/personnages/" + Perso.nom + ".png";
    } else {
        document.getElementById("personnage").src = "img/personnages/" + Perso.nom + " " + skin + ".png";
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
})

document.getElementById("kart").addEventListener("click", () => {
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

    document.getElementsByClassName("name")[1].textContent = Karts.nom;

    document.getElementById("kart").src = "img/karts/" + Karts.nom + ".png";

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
})

document.getElementById("roue").addEventListener("click", () => {
    currentRoue = roues[getRandom(roues.length)];
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

    document.getElementsByClassName("name")[2].textContent = Roues.nom;

    document.getElementById("roue").src = "img/roues/" + Roues.nom + ".png";

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
})

document.getElementById("aile").addEventListener("click", () => {
    currentAile = ailes[getRandom(ailes.length)];
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

    document.getElementsByClassName("name")[3].textContent = Ailes.nom;

    document.getElementById("aile").src = "img/ailes/" + Ailes.nom + ".png";

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
})