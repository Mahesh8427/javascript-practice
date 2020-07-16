<?php
print_r($_POST);

$NameErr = $AgeErr = $emailErr = $AddressErr = $ConatctErr = $commentErr = $GenderErr ="";
$Name = $Age = $email = $Address = $Conatct = $comment = $Gender ="";
if ($_SERVER["REQUEST_METHOD"]== "POST"){
    if(empty($_POST["name"])){
  $nameErr="name is required";
    }
     else
    {
        $name = test_input($_POST["Name"]);

     }
    } 

    if(empty($_POST["Age"])){
        $AgeErr="name is required";
          }
           else
          {
              $name = test_input($_POST["Age"]);
      
           }
          
    if(empty($_POST["email"])){
        $emailErr="name is required";
              }
               else
              {
                  $name = test_input($_POST["email"]);
          
               }
              
   
    if(empty($_POST["Address"])){
        $AddressErr="name is required";
                  }
                   else
                  {
                     $name = test_input($_POST["Address"]);
              
                   }
                  
    if(empty($_POST["Contact"])){
                    $ConatctErr="number is required";
                      }
                       else
                      {
                          $name = test_input($_POST["Contact"]);
                  
                       }
                     
    if(empty($_POST["gender"])){
                        $genderErr="name is required";
                          }
                           else
                          {
                              $name = test_input($_POST["gender"]);
                      
                           }
                                            
    if(empty($_POST["comment"])){
                            $commentErr="";
                              }
                               else
                              {
                                  $name = test_input($_POST["comment"]);
                          
                               }


     function test_input($data) {
                                $data = trim($data);
                                $data = stripslashes($data);
                                $data = htmlspecialchars($data);
                                return $data;
                              }
                              

























?>