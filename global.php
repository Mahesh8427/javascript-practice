
<?php
$x = 50; # global keyword
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();
echo $y; 

echo "<br>";

// how to declare local keyword

function test() 
{
  $b=100/50;
  
   echo "<p>this variables is inside  success:$b</p>";
}
test();
echo "<p> this variable is outside success: $c</p>";

# how tp declare static keyword

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
?>
