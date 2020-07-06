<?php


function myTest() {
    $x = 43; #local scope
    echo "<p> ramesh marks report: $x</p>";
  }
  myTest();
  
  
  echo "<p>Variable x outside function is: $x</p>";

  echo "<br>";

$coLOR = 'red';
$txt = "This is jeans voicing company";
$x = 5;
$y = 10.5;
$a =76;
$z =89;
echo $txt;
echo "<br>";
echo $x ;
echo "<br>";
echo $y ;
echo "<br>";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
echo "<br>";
echo  $a + $z;
 
echo "<br>";
function thisTest() {
    static $x = 101;
    echo $x;
    $x++;
  }
  
  echo "<br>";
  thisTest();
  echo "<br>";
  thisTest();
  echo "<br>";
  thisTest();
  echo "<br>";
  thisTest();
  echo "<br>";
  thisTest();
  echo "<br>";
  thisTest();
  echo "<br>";
  thisTest();


  $txt1 = "Hi my name is mahesh";
$x = 13;
$y = 12;

echo "<h2>" . $txt1 . "</h2>";
echo " my age is ";
echo $x + $y;

?>
