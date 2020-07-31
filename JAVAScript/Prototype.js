// //           Prototype 
//    "use strict" 
// function mahesh(first, last, age, eye) {
//     this.firstName  = first;
//     this.lastName  = last;
//     this.Age = age;
//     this.EyeColor = eye;
//   }

//   mahesh.prototype.nationality = "indian";

  
//   function kashyap(first, last, age, eye){

//     mahesh.call(this, first, last, age, eye)

//   }
//   //prototype inheritance objects create

//   kashyap.prototype = Object.create(mahesh.prototype);


//   kashyap.prototype.nationality = "HINDU";

//   var mykashyap = new kashyap("mahesh", "mak", 325, "white",);
//   //console.log(mykashyap);
//   console.log(mykashyap.firstName);
//   console.log(mykashyap.lastName);
//   console.log(mykashyap.Age);
//   console.log(mykashyap.EyeColor);
//   console.log(mykashyap.nationality);




//   //adding calculateAge function() method to the Prototype property 
 "use strict"
function Person(name, job, yearOfBirth){   
  this.Name= name; 
  this.Job= job; 
  this.Birth= yearOfBirth; 
} 
// adding calculateAge() method to the Prototype property 
Person.prototype.calculateAge= function(){  
  console.log("this is age",(2020- this.Birth)); 
   
} 
 
// creating Object Person1 
let Person1= new Person('Jenni', 'clerk', 1986);  
let Person2= new Person('Madhu', 'Developer', 1997); 

console.log(Person1);
console.log(Person1.calculateAge());































// // Function.prototype.call() method perfrom
// "use strict";
// function Product(name, price) {
//     this.n = name;
//     this.p = price;
// }

// function Food(name, price) {
//     Product.call(this, name, price);

// }

// function Toy(name, price) {
//     Product.call(this, name, price);

// }

// const cheese = new Food('feta', 5);
// console.log(cheese.n);
// console.log(cheese.p);

// const fun = new Toy('robot', 40);
// console.log(fun.n);
// console.log(fun.p);
