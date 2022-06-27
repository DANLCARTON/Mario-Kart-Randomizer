<?php

function afficheSet($n) {
    echo "
    <input id='nom$n' type='text' placeholder='Joueur $n | Entrez un nom' class='playerName nomCoupe'>
    <div id='reroll$n'> <button href='#' onlick='return false'>GÉNÉRER</button> </div>
    <article id='set$n'>
    <div id='result'>
        <div class='element'>
            <img src='./img/personnages/Mario.png' id='personnage$n' alt='' />
            <p class='name'>Mario</p>
        </div>
        <div class='element'>
            <img src='./img/karts/Kart Standard.png' id='kart$n' alt='' />
            <p class='name'>Kart Standard</p>
        </div>
        <div class='element'>
            <img src='./img/roues/Roues Standard.png' id='roue$n' alt='' />
            <p class='name'>Roues Standard</p>
        </div>
        <div class='element'>
            <img src='./img/ailes/Aile Standard.png' id='aile$n' alt='' />
            <p class='name'>Aile Standard</p>
        </div>
    </div>
</article>";
}

?>