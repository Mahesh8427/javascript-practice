<?php 
// integer data type
    $a=98781552740;
echo("This is my moblie number :-$a");
  
 echo"<br>";



// Array data type

   $furniture = array("Table","Chair","Sufa");
var_dump($furniture);
  
 echo"<br>";



// create an objects

class Bike {
    function Bike() {
 $this->model = "2018";
    }
  }
  
  $Honda= new Bike();
  
  // show object properties
  echo $Honda->model;
    

echo"<br>";

// Null value

   $x= "This is personal no:-98746464";
   $x= null;
   var_dump($x);
?>