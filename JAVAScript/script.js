/*
function myfunction(){
document.getElementById("demo").innerHTML="Gin Voicing <b>Company</b>";
   }
        
function imagesfunction(){
  document.getElementById('myImage').src='images/animated-light-bulb-gif-27.gif';
   }
function sumFunction(){
  document.getElementById("demo2").innerHTML=10 + 40;
  }
function printFunction(){
  document.write("hii Alexa");
  alert('this is wrong output',);
  }
function myFunction(){
        var a, b, c;
        var person="mahesh";
        var total="yes i Am";
          a = 5;
          b = 6;
          c = a + b;
      txt1="These is GIN";
      txt1 +="Voicing Company";

// display The  boolean types return value 
        var x = 5;
        var y = 6;
        var z = 5;
document.getElementById("boolean").innerHTML =(x == y) + "<br>" + (x == z) 
      "<br>"+"<br>";  
// create an Objects.......
       var person={firstname :  "Ajay",Lastname : "Devgn",Age: 50, City : "Mumbai..",
       fullname: function(){
          return " The name is "+ this.firstname + this.Lastname + " and age is " + this.Age + " yrs old " +
          " and City is " + this.City + "<br>" + " The type is:- " + typeof person;
       }
       }
document.getElementById('objects').innerHTML= person.fullname();
 document.getElementById("object").src='images/Devgn-1593007641.jpg';
 document.getElementById("objt").src='images/tenor.gif';



// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("constructor").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + ".";  



// Using prototype Objects..

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";
Person.prototype.nationalitys = "hindi";

var myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("prototype").innerHTML =
"The nationality of my father is " + myFather.nationality + " , and " + myFather.nationalitys  + " . ";

//  Function return statement 
var x=  multipliefunction(4,3);
document.getElementById("multi").innerHTML=x;
function multipliefunction(a, b){
          return a * b;
}

// Function Fahrenheit to Celsius:

document.getElementById("Temp").innerHTML =
"The temperature is: " + toCelsius(77) + " Celsius";

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 
}
 //simple Display from string 
function selffunction(){
      var txt1 ="hii my name is mahesh";
      var txt2 =" and i am \"__ \" yrs old";
      var txt3 =" and i had complete my postgarduate Since 2019..";
      var txt4 = txt1+txt2+txt3;
document.getElementById("hlo").innerHTML =txt4 +"<br>"+ typeof txt4 ;
  }
      "<br>"+"<br>";
  

   // Simple Array  change  with another array and sorting in the array 
   function arrayfunction(){

      var cars = ["AUDI Q7","Volvo","BMW","ALTO"];
      var x = cars.sort();  
       cars[2]= "laxa";
document.getElementById("array").innerHTML =cars+"<br>"+cars.length;
}

"<br>"+"<br>";

// Display date and time Function 
function displayDate() {
  document.getElementById("dates").innerHTML = Date();
}
`<br><br>`;


// replace to string  
function replaceFunction() {
  var str = document.getElementById("rpl").innerHTML; 
  var txt = str.replace("Microsoft","W3Schools");
  document.getElementById("rpl").innerHTML = txt;
}
"<br>"+"<br>";

 // convert string ta Array 
function convertFunction() {
  var str = "a,b,c,d,e,f";
  var arr = str.split(",");
  document.getElementById("split").innerHTML = arr[3];
"<br>"+"<br>";

//last array display
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon"); // add element in a array
var last = new Array ();
last[0]=fruits[fruits.length-1];
last[1]=fruits[fruits.length-2];
last[2]=fruits[fruits.length-4];
last[3]=fruits[fruits.length-5]

document.getElementById("add element").innerHTML = fruits;
document.getElementById("length").innerHTML = last;

// Array an objects 

var person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("Array").innerHTML = person["firstName"] +" "+ person["lastName"] + 
" " +person["age"]+ " yrs old.. ";


// Forloops way Array  print

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("loops").innerHTML = text;

///Adding elements with high indexes can create undefined "holes" in an array

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";

fLen = fruits.length;
text = "";
for (i = 0; i < fLen; i++) {
  text += fruits[i] + "<br>";
}
document.getElementById("undefined").innerHTML = text;
}

/// Adding elements with function high indexes can create undefined "holes" in an array
var  fruits = ["Banana", "Orange", "Apple", "Mango"];
function AddFunction() {
  fruits[6] = "Lemon";
 document.getElementById("undefined1").innerHTML = fruits;
}

"<br>"+"<br>";
// from validation
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
/// check valdation method

 function Validations(){ 
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("check").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("check").innerHTML = "Input OK";
    } 
   
 }
// This example uses the Objects defineProperty() method to add a getter and a setter.
// set method

 function setfunction(){
  var person = {firstName:"John", lastName:"Doe"};

  // Define a setter
  Object.defineProperty(person, "fullName", {
    set : function  lan(value) {return this.lang=value;}
  });
  person.lang="set method";
  
  // Display full name
  document.getElementById("set").innerHTML = person.lang;

//              GETTER an Objects
// Create an object:
var person = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(person, "fullName", {
  get : function () {return this.firstName + " " + this.lastName;}
});

// Display full name
document.getElementById("get").innerHTML = person.fullName;


 }

//JavaScript Closures counting the counter 
///This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.


var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();

function counterfunction(){
  document.getElementById("counter").innerHTML = add();

}
console.log(counterfunction());

// Counting with a local variable. if you are define variable in global than add a variable counting 

var counter = 0;
 function addd(){

 counter +=1;
 return counter
}
*/



































































