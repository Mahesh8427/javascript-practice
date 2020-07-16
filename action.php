<?php

print_r($_POST);


$name = $Age = $email = $Address = $Contact= $comment= $Gender ="";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $Age = test_input($_POST["age"]);
  $email = test_input($_POST["email"]);
  $Address = test_input($_POST["Address"]);
  $Contact = test_input($_POST["Contact"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
