<?php

echo "<div class=\"arenes notFinished\">\n";
echo "<p class=\"nomCoupe\"> Arènes Bataille </p>\n";
for ($i = 0; $i < 8; $i++) {
    echo "<p class=\"arene AR$i\">".$arenes[$i]."</p>\n";
}
echo "</div>\n";

?>