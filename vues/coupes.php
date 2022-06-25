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