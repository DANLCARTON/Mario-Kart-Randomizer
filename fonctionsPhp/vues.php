<?php

function getStatId ($name) {
    switch ($name) {
        case "Vit. route":
            $nameId = "vitesseRoute";
            break;
        case "Vit. eau":
            $nameId = "vitesseEau";
            break;
        case "Vit. air":
            $nameId = "vitesseAir";
            break;
        case "Vit. anti-gravité":
            $nameId = "vitesseAntiGravite";
            break;
        case "Accél.":
            $nameId = "acceleration";
            break;
        case "Pds.":
            $nameId = "poids";
            break;
        case "Man. route":
            $nameId = "maniabiliteRoute";
            break;
        case "Man. eau":
            $nameId = "maniabiliteEau";
            break;
        case "Man. air":
            $nameId = "maniabiliteAir";
            break;
        case "Man. anti-gravité":
            $nameId = "maniabiliteAntiGravite";
            break;
        case "Adhér.":
            $nameId = "adherence";
            break;
        case "Mini-Turbo":
            $nameId = "miniTurbo";
            break;
        case "Invincibilité":
            $nameId = "invincibility";
            break;
    }
    return $nameId;
}

?>