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
                <div id="vitesseRoute">
                    <div class="statName">Vitesse route :</div>
                    <?php
                    for($i = 1; $i <= 15; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 9; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="vitesseEau">
                    <div class="statName">Vitesse eau :</div>
                    <?php
                    for($i = 1; $i <= 16; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 8; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="vitesseAir">
                    <div class="statName">Vitesse air :</div>
                    <?php
                    for($i = 1; $i <= 17; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 7; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="vitesseAntiGravite">
                    <div class="statName">Vitesse anti-gravité :</div>
                    <?php
                    for($i = 1; $i <= 14; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 10; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="acceleration">
                    <div class="statName">Accéleration :</div>
                    <?php
                    for($i = 1; $i <= 14; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 10; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="poids">
                    <div class="statName">Poids :</div>
                    <?php
                    for($i = 1; $i <= 14; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 10; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="maniabiliteRoute">
                    <div class="statName">Maniabilité route :</div>
                    <?php
                    for($i = 1; $i <= 14; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 10; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="maniabiliteEau">
                    <div class="statName">Maniabilité eau :</div>
                    <?php
                    for($i = 1; $i <= 12; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 12; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="maniabiliteAir">
                    <div class="statName">Maniabilité air :</div>
                    <?php
                    for($i = 1; $i <= 14; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 10; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="maniabiliteAntiGravite">
                    <div class="statName">Maniabilité anti-gravité :</div>
                    <?php
                    for($i = 1; $i <= 14; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 10; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="adherence">
                    <div class="statName">Adhérence :</div>
                    <?php
                    for($i = 1; $i <= 14; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 10; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
                <div id="miniTurbo">
                    <div class="statName">Mini-Turbo :</div>
                    <?php
                    for($i = 1; $i <= 13; $i++){
                        echo "<div class='unit fill'></div>";
                    }
                    for($i = 1; $i <= 11; $i++){
                        echo "<div class='unit unfill'></div>";
                    }
                    ?>
                </div>
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
                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[0]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR$i\">".$circuits["Coupe Champignon"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[1]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+4) ."\">".$circuits["Coupe Fleur"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[2]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+8) ."\">".$circuits["Coupe Étoile"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[3]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+12) ."\">".$circuits["Coupe Spéciale"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[4]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+16) ."\">".$circuits["Coupe Œuf"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[5]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+20) ."\">".$circuits["Coupe Crossing"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[6]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+24) ."\">".$circuits["Coupe Carapace"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[7]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+28) ."\">".$circuits["Coupe Banane"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[8]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+32) ."\">".$circuits["Coupe Feuille"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[9]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+36) ."\">".$circuits["Coupe Éclair"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[10]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+40) ."\">".$circuits["Coupe Triforce"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[11]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+44) ."\">".$circuits["Coupe Clochette"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[12]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+48) ."\">".$circuits["Coupe Turbo dorée"][$i]."</p>\n";
                    }
                    echo "</div>\n";
                    
                    /*

                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[13]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+52) ."\">".$circuits["Coupe DLC 2.1"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[14]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+56) ."\">".$circuits["Coupe DLC 3.1"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[15]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+60) ."\">".$circuits["Coupe DLC 4.1"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[16]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+64) ."\">".$circuits["Coupe DLC 5.1"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[17]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+68) ."\">".$circuits["Coupe DLC 6.1"][$i]."</p>\n";
                    }
                    echo "</div>\n";

                    */

                    echo "<div class=\"coupe\">\n"; //                  18
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[13]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+52) ."\">".$circuits["Coupe Maneki-neko"][$i]."</p>\n";
                    } //                                        72
                    echo "</div>\n";

                    /*

                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[19]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+76) ."\">".$circuits["Coupe DLC 2.2"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[20]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+80) ."\">".$circuits["Coupe DLC 3.2"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[21]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+84) ."\">".$circuits["Coupe DLC 4.2"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[22]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+88) ."\">".$circuits["Coupe DLC 5.2"][$i]."</p>\n";
                    }
                    echo "</div>\n";



                    echo "<div class=\"coupe\">\n";
                    echo "<p class=\"nomCoupe\">".array_keys($circuits)[23]."</p>\n";
                    for ($i = 0; $i <= 3; $i++) {
                        echo "<p class=\"circuit TR". strval($i+92) ."\">".$circuits["Coupe DLC 6.2"][$i]."</p>\n";
                    }
                    echo "</div>\n";

                    */
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