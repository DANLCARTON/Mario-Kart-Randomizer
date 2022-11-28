<?php

include 'vues/compteur.php';
include "vues/combinaison.php";
include "vues/stats.php";
include "vues/historique.php";
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
    <meta name="theme-color" content="#8b8" />
</head>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GMP933X0K9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GMP933X0K9');
</script>

<body>
    <aside id="setnight">
        <img src="img/icons/daylighticon.png">
    </aside>
    <aside id="setday">
        <img src="img/icons/daylighticon.png">
    </aside>
    <main>
        <h1>RANDOMIZER<br />MARIO KART 8 DELUXE<br></h1>
        <div class="subh1"><p>+ PASS CIRCUITS ADDITIONNELS (Vague 3)</p></div>
        <section id="personnageAleatoire">

            <h2>PERSONNAGE ALÉATOIRE</h2>

            <p> Cliquez sur le bouton "Générer" ci-dessous pour afficher une combinaison aléatoire. Si l'un des élément ne vous plaît pas, cliquez sur son image pour le changer ! Vous êtes plusieurs sur le même appareil ? Affichez une nouvelle combinaison à l'aide du bouton "+". Jusqu'à quatre joueurs peuvent être affichés. </p>

            <div id="setContainer">

            <?php
            for ($i = 1; $i <= 4; $i++)
                afficheSet($i);
            ?>

            </div>

            <div id="playersArrow"><img src="./img/icons/arrow.png"></div>

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

            <?php history() ?>

        </section>

        <hr>

        <section id="circuitAleatoire">
            <h2>CIRCUIT ALÉATOIRE SANS REMISE</h2>

            <p class="desc">Cliquez sur le bouton "Choisir" ci-dessous pour sélectionner aléatoirement l'un des 64 circuits jouables. Il est aussi possible, si vous voulez jouer sur un circuit de votre choix, d'en sélectionner un en cliquant dessus. Si vous souhaitez qu'un circuit puisse être de nouveau sélectionné, cliquez dessus pour le rendre de nouveau disponible. Une fois que tous les circuits ont été sélectionnés, déselectionnez-en quelques uns ou utilisez le bouton "Remettre à zero" situé tout en bas.</p>

            <article>

                <?php require "dataCircuits.php"; ?>   

                <div id="choose"> <button href="#" onlick="return  false">CHOISIR</button> </div>

                <div class="grilleCircuits">

                <?php 
                include "vues/coupes.php";
                ?>

                </div>

                <?php
                afficheCompteur();
                ?>

                <div id="reset"> <button href="#" onlick="return false">REMETTRE À ZERO</button> </div>

            </article>

            <hr>

            <article>

                <?php require "dataCircuits.php"; ?>   

                <div id="chooseArena"> <button href="#" onlick="return  false">CHOISIR</button> </div>

                <div class="grilleArenes">

                    <?php 
                    include "vues/arenes.php";
                    ?>

                </div>

                <div id="resetArena"> <button href="#" onlick="return false">REMETTRE À ZERO</button> </div>

            </article>

        </section>
        
    </main>
    <script type="module" src="scriptPersonnages.js"></script>
    <script type="module" src="scriptCircuits.js"></script>
    <script type="module" src="themes.js"></script>
    <img src="./img/icons/td.jpg" id="ee">
</body>

</html>