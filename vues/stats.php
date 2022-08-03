<?php 

function afficheStat ($name) {
    $nameId = getStatId($name);
    echo "<div id=\"$nameId\">
        <div class='statName'>$name :</div>";
        for ($i = 1; $i <= 12; $i++) {
            echo "<div class='unit fill'></div>";
        }
        for ($i = 1; $i <= 12; $i++) {
            echo "<div class='unit unfill'></div>";
        }
    echo "</div>";
}

?>