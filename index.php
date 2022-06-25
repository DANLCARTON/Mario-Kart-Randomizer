<?php

include "vues/stats.php";
include "fonctionsPhp/vues.php";

?>

<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="./img/personnages/Mario.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> MK8DX Randomizer </title>
    <meta name="theme-color" content="#033" />
</head>

<body>
    <main>
        <h1>RANDOMIZER<br />MARIO KART 8 DELUXE<br></h1>
        <div class="subh1"><p>+ PASS CIRCUITS ADDITIONNELS (Vague 1)</p></div>
        <section id="personnageAleatoire">

            <h2>PERSONNAGE ALÉATOIRE</h2>

            <article id="set">
                <div id="result">
                    <div class="element">
                        <img src="./img/personnages/Mario.png" id="personnage" alt="" />
                        <p class="name">Mario</p>
                    </div>
                    <div class="element">
                        <img src="./img/karts/Kart Standard.png" id="kart" alt="" />
                        <p class="name">Kart Standard</p>
                    </div>
                    <div class="element">
                        <img src="./img/roues/Roues Standard.png" id="roue" alt="" />
                        <p class="name">Roues Standard</p>
                    </div>
                    <div class="element">
                        <img src="./img/ailes/Aile Standard.png" id="aile" alt="" />
                        <p class="name">Aile Standard</p>
                    </div>
                </div>
            </article>

            <div id="reroll"> <button href="#" onlick="return false">GÉNÉRER</button> </div>

            <article id="stats">

                <?php 
                afficheStat("Vit. route");
                afficheStat("Vit. eau");
                afficheStat("Vit. air");
                afficheStat("Vit. anti-gravité");
                afficheStat("Accél.");
                afficheStat("Pds.");
                afficheStat("Man. route");
                afficheStat("Man. eau");
                afficheStat("Man. air");
                afficheStat("Man. anti-gravité");
                afficheStat("Adhér.");
                afficheStat("Mini-Turbo");
                ?>

            </article>

        </section>

        <hr>

        <section id="circuitAleatoire">
            <h2>CIRCUIT ALÉATOIRE SANS REMISE</h2>
            <article>

            <?php require "dataCircuits.php"; ?>   

            <div id="reset"> <button href="#" onlick="return false">REMETTRE À ZERO</button> </div>

            <div class="grilleCircuits">

            <?php 
            include "vues/coupes.php";
            ?>

            </div>

            <div id="choose"> <button href="#" onlick="return false">CHOISIR</button> </div>

            </article>

        </section>
        
    </main>
    <script type="module" src="scriptPersonnages.js"></script>
    <script type="module" src="scriptCircuits.js"></script>
</body>

</html>