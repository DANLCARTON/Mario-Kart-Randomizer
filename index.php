<?php

header("Cache-Control: max-age:2678400");
include 'vues/compteur.php';
include "vues/combinaison.php";
include "vues/stats.php";
include "vues/historique.php";
include "fonctionsPhp/vues.php";

?>

<!DOCTYPE html>

<html lang="">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="./img/personnages/Mario.webp" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Mario Kart 8 Randomizer </title>
    <meta name="theme-color" content="#bf8" />
    <meta name="keywords" content="mario, kart, 8, huit, eight, random, aléatoire, aleatoire, randomizer, eric, thiberge, couscous, stop regarder là >///<, plus de keywords !!, Марио, Карт, マリオカート, 마리오, 카트, 马力欧卡丁车, 瑪利歐賽車, acht, ocho, otto, oito, восемь, 八, hachi, 여덟, yeodeol, 八, 八, ba, zufällig, zufallig, aleatorio, casuale, willekeurig, aleatório, случайный, sluchainyy, ランダム, randamu, 무작위의, mujakwi-ui, 随机, suíjī, suiji, 隨機, générateur, generateur, Zufallsgenerator, generador, randomizzatore, gerador, генератор, случайных, чисел, ランダマイザー, 랜덤, 생성기, raendeom, seongsaeng-gi, 随机生成器, 隨機生成器, shēngchéngqì, shengchengqi" />
    <meta name="description" content="[Now available in multiple languages !!] • Randomizer for Mario Kart 8 Deluxe! - Randomly generate a character, a kart combination, custom mode items and a random track for Mario Kart 8 Deluxe!"/>
    <meta name="http-equiv" content="Cache-Control: max-age:3678400" />
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
        <img src="img/icons/daylighticon.png" alt="daylighticon">
    </aside>
    <aside id="setday">
        <img src="img/icons/daylighticon.png" alt="daylighticon">
    </aside>
    <main>
        <h1>RANDOMIZER<br />MARIO KART 8 DELUXE<br></h1>
        <div class="subh1 subtitle"><p>+ PASS CIRCUITS ADDITIONNELS (Vague 5)</p></div>

        <a href="https://hackmd.io/@DANLCARTON/MK8DXRANDOMIZER#RANDOMIZER-MARIO-KART-8-DELUXE---PASS-CIRCUITS-ADDITIONNELS-VAGUE-4" target="_blank">Voir les changements <img src='./img/icons/exit.png' id="exitnight" alt="exit"><img src='./img/icons/exit.png' id="exitday" alt="exit"></a>
        <section id="personnageAleatoire">

            <h2 class="randomCharacter">Personnage aléatoire</h2>

            <p class="randomCharacterExplanations"> Cliquez sur le bouton "Générer" ci-dessous pour afficher une combinaison aléatoire. Si l'un des élément ne vous plaît pas, cliquez sur son image pour le changer ! Vous êtes plusieurs sur le même appareil ? Affichez une nouvelle combinaison à l'aide du bouton "+". Jusqu'à quatre joueurs peuvent être affichés. </p>

            <div id="setContainer">

            <?php
            for ($i = 1; $i <= 4; $i++)
                afficheSet($i);
            ?>

            </div>

            <div id="playersArrow"><img src="./img/icons/arrow.png" alt="Add Player"></div>

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
                afficheStat("Invincibilité")
                ?>

            </article>

            <?php history() ?>

        </section>

        <hr>

        <section id="objetsPersonnalises">

            <h2 class="randomItems">Objets personnalisés aléatoires</h2>

            <p class="desc randomItemsExplanations">Cliquez sur le bouton "Choisir" en bas de la section pour afficher une sélection aléatoire d'objets pour le nouveau Mode Personnalisé. Choisissez la quantité d'objets que vous souhaitez voir apparaître sur la droite de la grille. </p>

            <div id="divItems">

            <?php 
            include "./vues/objects.php";
            include "./vues/objectsButtons.php";
            ?>

            </div>

            <div id="chooseItem"> <button href="#" onlick="return false" class="choose">Choisir</button> </div>
            <div id="resetItem"> <button href="#" onlick="return false" class="reset">Remettre à zéro</button> </div>

        </section>

        <hr>

        <section id="circuitAleatoire">
            <h2 class="randomCircuit">Circuit aléatoire sans répétition</h2>

            <p class="desc randomCircuitExplanations">Cliquez sur le bouton "Choisir" ci-dessous pour sélectionner aléatoirement l'un des 64 circuits jouables. Il est aussi possible, si vous voulez jouer sur un circuit de votre choix, d'en sélectionner un en cliquant dessus. Si vous souhaitez qu'un circuit puisse être de nouveau sélectionné, cliquez dessus pour le rendre de nouveau disponible. Une fois que tous les circuits ont été sélectionnés, déselectionnez-en quelques uns ou utilisez le bouton "Remettre à zero" situé tout en bas.</p>

            <article>

                <?php require "dataCircuits.php"; ?>   

                <div id="choose"> <button href="#" onlick="return  false" class="choose">Choisir</button> </div>

                <div class="grilleCircuits">

                <?php 
                include "vues/coupes.php";
                ?>

                </div>

                <?php
                compteurCircuits();
                ?>

                <div id="reset"> <button href="#" onlick="return false" class="reset">Remettre à zéro</button> </div>

            </article>

            <hr>

            
            <h2 class="randomArena">Arène bataille aléatoire sans répétition</h2>

            <article>

                <?php require "dataCircuits.php"; ?>   

                <div id="chooseArena"> <button href="#" onlick="return false" class="choose">Choisir</button> </div>

                <div class="grilleArenes">

                    <?php 
                    include "vues/arenes.php";
                    ?>

                </div>

                <?php
                compteurArenes();
                ?>

                <div id="resetArena"> <button href="#" onlick="return false" class="reset">Remettre à zéro</button> </div>

            </article>

        </section>
        
    </main>

    <script type="module" src="languageManager.js"></script>
    <script type="module" src="scriptPersonnages.js"></script>
    <script type="module" src="scriptCircuits.js"></script>
    <script type="module" src="scriptObjets.js"></script>
    <script type="module" src="themes.js"></script>
    <script type="module" src="textContent.js"></script>
    <script type="module" src="translatedTextContent.js"></script>
    <img src="./img/icons/td.jpg" id="ee" alt="Easter Egg">

    
    <footer>
        <div id="footer-grid">
            <div class="footerDesc">
                <p><b>Mario Kart 8 Deluxe Randomizer <span class="subtitle footerSubtitle">+ Pass circuits additionnels (Vague 5)</span></b></p>
                <p>Randomizer for Mario Kart 8 Deluxe! - Randomly generate a character, a kart combination, custom mode items and a random track for Mario Kart 8 Deluxe!</p>
            </div>
            <div class="languages"> 
                <div><img src="img/flags/fr.webp" alt="fr"><a href="index.php?lang=fr" onclick="localStorage.setItem('lang', 'fr')">Français</a><br></div>
                <div><img src="img/flags/fr-CA.webp" alt="fr"><a href="index.php?lang=fr-CA">Français (Québec)</a><br></div>
                <div><img src="img/flags/en.webp" alt="fr"><a href="index.php?lang=en">English</a><br></div>
                <div><img src="img/flags/en-US.webp" alt="fr"><a href="index.php?lang=en-US">English (US)</a><br></div>
                <div><img src="img/flags/es.webp" alt="fr"><a href="index.php?lang=es">Español</a><br></div>
                <div><img src="img/flags/pt.webp" alt="fr"><a href="index.php?lang=pt">Português</a><br></div>
                <div><img src="img/flags/it.webp" alt="fr"><a href="index.php?lang=it">Italiano</a><br></div>
                <div><img src="img/flags/de.webp" alt="fr"><a href="index.php?lang=de">Deutsch</a><br></div>
                <div><img src="img/flags/nl.webp" alt="fr"><a href="index.php?lang=nl" onclick="localStorage.setItem('lang', 'nl')">Nederlands</a><br></div>
                <div><img src="img/flags/ru.webp" alt="fr"><a href="index.php?lang=ru">Русский</a><br></div>
                <div><img src="img/flags/ja.webp" alt="ja"><a href="index.php?lang=ja">日本語</a><br></div>
                <div><img src="img/flags/ko.webp" alt="ko"><a href="index.php?lang=ko">한국어</a><br></div>
                <div><img src="img/flags/zh-Hans.webp" alt="zh-Hans"><a href="index.php?lang=zh-Hans">简化字</a><br></div>
                <div><img src="img/flags/zh-Hant.webp" alt="zh-Hant"><a href="index.php?lang=zh-Hant">正體字</a></div>
            </div>
            <div class="links">
                <p><i>Feel free to report any errors or bugs you see on the website, as I'm working alone on this project and I don't speak all the languages available (but I really wanted to include them all).</i></p>
                <p><i>Don't hesitate to suggest new features too! I'll be happy to consider them. Maybe I'll try to work on your proposition if I like it :)</i></p>
                <div><img src="img/icons/github.webp" alt="issues"><a href="https://github.com/DANLCARTON/Mario-Kart-Randomizer/issues">Create a new issue here</a></div>
            </div>
        </div>      
    </footer>

</body>

</html>