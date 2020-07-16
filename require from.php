<html>
<body>
<style>
.error {color: #FF0000;}
</style>

<h2>PHP Form Validation </h2>
<p><span class="error" >* required field</span></p>
<form method="POST" action="http://localhost/mahesh/require%20action.php">
    Name: <input type="text" name="name">
  <span class="error">* <?php  $nameErr;?></span>
  <br><br>

  Age: <input type="text" name="age">
  <span class="error">* <?php echo $ageErr;?></span>
  <br><br>

  email: <input type="text" name="email">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>

  Address: <input type="text" name="Address">
  <span class="error">* <?php echo $AddressErr;?></span>
  <br><br>

  Contact: <input type="text" name="Contact">
  <span class="error">* <?php echo $ContactErr;?></span>
  <br><br>

  Comment: <textarea name="comment" rows="5" cols="40"></textarea>
  <br><br>

  Gender:<input type="radio" name="gender" value="Male">Male
<input type="radio" name="gender" value="Female">Female
<input type="radio" name="gender" value="Other">Other
<span class="error">* <?php $GenderErr;?></span>
<br><br>
 <input type="submit" name="submit" value="submit">

</body>
</html>