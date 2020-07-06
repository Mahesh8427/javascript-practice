<?php
$x=1;       // while loop 
while($x<=10){

echo ("The number is:$x <br>");
$x++;
}
 

echo"<br>";

echo " do while loop";
echo "<br>";
// do while loop


$x=15;
do{

    echo ("The number is:$x <br>");
    $x++;
}while($x<=10);

 echo "<br>";


// for loops

for($x=0;$x<=200;$x+=10){
    echo "The is number:-  $x <br>";
}

echo"<br>";

// for each loop

$mall=array("shops","banks","showrooms","resturant");

foreach($mall as $value)
{
    echo("$value <br>");
}

// break and continue statement

for($a=0;$a<=20;$a++){

     if($a==15)
break;
     echo"The number is:$a <br>";
}






?>