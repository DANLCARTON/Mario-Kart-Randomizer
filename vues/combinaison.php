<?php

function afficheSet($n) {
    echo "
    <input id='nom$n' type='text' class='playerName nomCoupe'>
    <div id='reroll$n'> <button href='#' onlick='return false' class='generate' >Générer</button> </div>
    <article id='set$n'>
    <div id='result'>
        <div class='element'>
            <img src='./img/personnages/Mario.webp' id='personnage$n' alt='Personnage' />
            <p class='name'>Mario</p>
        </div>
        <div class='element'>
            <img src='./img/karts/Kart Standard.webp' id='kart$n' alt='Kart' />
            <p class='name'>Kart Standard</p>
        </div>
        <div class='element'>
            <img src='./img/roues/Roues Standard.webp' id='roue$n' alt='Roues' />
            <p class='name'>Roues Standard</p>
        </div>
        <div class='element'>
            <img src='./img/ailes/Aile Standard.webp' id='aile$n' alt='Aile' />
            <p class='name'>Aile Standard</p>
        </div>
    </div>
</article>";
}

?>