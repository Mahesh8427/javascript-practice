<?php

$cars=array(
    
    array("volvo",20,15),
    array("Audi",22,65),
    array("alto",50,55),
    array("laxa",36,15),
    array("creta",32,65),
);
echo $cars[0][0].": In stock: ".$cars[0][1].", sold: ".$cars[0][2].".<br>";
echo $cars[1][0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2].".<br>";
echo $cars[2][0].": In stock: ".$cars[2][1].", sold: ".$cars[2][2].".<br>";
echo $cars[3][0].": In stock: ".$cars[3][1].", sold: ".$cars[3][2].".<br>";
echo $cars[4][0].": In stock: ".$cars[4][1].", sold: ".$cars[4][2].".<br>";

  echo"<br>";
   

  $cars=array(
    
    array("volvo",20,15),
    array("Audi",22,65),
    array("alto",50,55),
    array("laxa",36,15),
    array("creta",32,65),
);
for($row=0;$row<4;$row++)
{
    echo"<p><b><i> Row Number:$row </p></b></i>";
    echo "<ul>";
    for ($col = 0; $col < 3; $col++) {
        echo "<li>".$cars[$row][$col]."</li>";
    }
echo"</ul>";



echo"<br>";
echo "Today is " . date("l");





}





























?>