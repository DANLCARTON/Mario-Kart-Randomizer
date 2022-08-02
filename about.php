<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="./img/personnages/Mario.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> MK8DX Randomizer </title>
    <meta name="theme-color" content="#8bf" />
</head>

<body>
    <aside id="setnight">
        <img src="img/icons/daylighticon.png">
    </aside>
    <aside id="setday">
        <img src="img/icons/daylighticon.png">
    </aside>
    <main>
        <h1>RANDOMIZER<br />MARIO KART 8 DELUXE<br></h1>
        <div class="subh1"><p>+ PASS CIRCUITS ADDITIONNELS (Vague 2)</p></div>
        <h2><i>Qu'est-ce qui a changé ?</i></h2>
        <section class="blocTexte">
            <h1>Partie personnage et karts</h1>
            <ul>
                <li>Possibilité de tirer au hasard un seul élément de personnalisation indépendament des autres. Il suffit de cliquer dessus.</li>
                <li>Possibilité d'afficher jusqu'à 4 combinaisons pour le cas où plusieurs joueurs utiliseraient le même appareil. Il est possible de donner un nom aux joueurs.</li>
                <li>Les meilleures statistiques ont maintenant une couleur tirant vers le doré</li>
                <li>Les statistiques des ailes n'étaient pas prises en compte, c'est corrigé</li>
            </ul>
            <h1>Partie circuits</h1>
            <ul>
                <li>Ajout des nouvelles coupes avec leurs circuits :
                    <blockquote>
                        <b style="margin-bottom: 100px;">Coupe Navet</b>
                        <ul>
                            <li><i>Tour</i> Espapade new-yorkaise</li>
                            <li><i>SNES</i> Circuit Mario 3</li>
                            <li><i>N64</i> Désert Kalimari</li>
                            <li><i>DS</i> Flipper Waluigi</li>
                        </ul>
                        <b style="margin-bottom: 15px;">Coupe Hélico</b>
                        <ul>
                            <li><i>Tour</i> Sprint à Sydney</li>
                            <li><i>GBA</i> Pays Neigeux</li>
                            <li><i>Wii</i> Gorge Champignon</li>
                            <li>Cité Sorbet</li>
                        </ul>
                    </blockquote>
                </li>
                <li>Inversion de l'emplacement des boutons "choisir" et "remettre à zéro" pour que ce soit plus naturel</li>
                <li>Possibilité de sélectionner et désélectionner des circuits aux choix en cliquant dessus</li>
                <li>Ajout d'un compteur de circuits permettant de savoir facilement combien de circuits ont été déjà sélectionnés et combien il en reste.</li>
                <li>Sur téléphone et sur tablette, lorsqu'un circuit est sélectionné aléatoirement (grâce au bouton "choisir"), le site scrolle automatiquement vers celui-ci</li>
                <li>Le bouton "choisir" a désormais une position "sticky". C'est à dire qu'il se "colle" en haut de l'écran s'il le touche. genre, tu scrolle vers le bas et le bouton atteint le haut de l'écran. Normalement juste il devient plus visible et faut recroller vers le haut pour qu'on puisse le voir mais là, quand il arrive en haut de l'écran bah il reste en haut de l'écran même si tu continue a scroller vers le bas. Et si jamais tu rescrolle vers le haut alors qu'il était collé en haut de l'écran, et qu'il réatteint sa position initiale (c'est à dire entre la petite description et la liste des circuits) et bien il se "décolle" pour reprendre sa position de base. je sais pas si c'est clair. </li>
                <li>Ajout d'icônes correspondant aux coupes pour faciliter la lecture et pour retrouver plus facilement le circuit sur le jeu.</li>
            </ul>
            <h1>Autres</h1>
            <ul>
                <li>Ajout d'un thème sombre. Pour l'activer, cliquer sur l'icône en forme de soleil/lune haut à droite de l'écran.</li>
                <li>Removed Herobrine</li>
            </ul>
        </section>
        <hr>
        <p style="margin-bottom: 50px;"><a href="./">Retour au Randomizer</a></p>
    </main>
    <script type="module" src="scriptPersonnages.js"></script>
    <script type="module" src="scriptCircuits.js"></script>
    <script type="module" src="themes.js"></script>
</body>

</html>