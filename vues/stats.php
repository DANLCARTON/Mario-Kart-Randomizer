<?php 

function getLang () {
    if (isset($_GET["lang"])) {
        $lang = $_GET["lang"];
    } else {
        $lang = "fr";
    }
    return $lang;
}

function translate($name, $lang) {
    switch ($name) {
        case "Vit. route":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Spd. ground";
            }
            break;
        case "Vit. eau":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Spd. water";
            }
            break;
        case "Vit. air":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Spd. air";
            }
            break;
        case "Vit. anti-gravité":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Spd. anti-gravity";
            }
            break;
        case "Accél.":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Accel.";
            }
            break;
        case "Pds.":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Wgt.";
            }
            break;
        case "Man. route":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Hand. ground";
            }
            break;
        case "Man. eau":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Hand. water";
            }
            break;
        case "Man. air":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Hand. air";
            }
            break;
        case "Man. anti-gravité":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Hand. anti-gravity";
            }
            break;
        case "Adhér.":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Grip";
            }
            break;
        case "Mini-Turbo":
            return $name;
            break;
        case "Invincibilité":
            if ($lang == "fr" || $lang == "fr-CA") {
                return $name;
            } else {
                return "Invincibility";
            }
            break;
    }
}


function afficheStat ($name) {
    $translatedName = translate($name, getLang());
    $nameId = getStatId($name);
    echo "<div id=\"$nameId\">
        <div class='statName'>$translatedName :</div>";
        for ($i = 1; $i <= 12; $i++) {
            echo "<div class='unit fill'></div>";
        }
        for ($i = 1; $i <= 12; $i++) {
            echo "<div class='unit unfill'></div>";
        }
    echo "</div>";
}

?>