/*
  // simple callback Function

function show(a){
   
  console.log("I am show function"+a)
}
function geeky(callback){
var s = 1;
callback(s);
}
geeky(show);
console.log("end");
  



// simply way call back function
let x = function () {
  console.log("Company is  GinVocining");
}


let y = function (callback) {
  console.log("wht is company name");
  callback();
  
}

y(x);
 
/*
// non-blocking  code of a Asynchrnous

// var fs = require("fs");

// console.log ("program is started")

// fs.readFile('input.txt', function  (err,data,callback) {
//    if(err) {
//     return console.error(err);
//    }else{
//     console.log(data.toString());
//     callback ();
//   }
// });

//console.log("Program Ended");



// call back function use to if else condition
function message(){
}

message(function(check){ if(check){console.log("this age is allow")}else{console.log("this age is not allow")}})


*/
// call back function  
// var fs = require("fs");

// console.log("program is started")

// function asd(callback) {
//   fs.readFile('input.txt', function (err, data) {
//     if(err) {
//       return console.error(err);
//     } else {
//       console.log(data.toString());
//       callback()
//     }
//   });
// }



// asd(function () {
//     console.log("Program Ended");
//   });

//Again callback function with Arrow 


// function sak(callback) {
//   var name = " Ginvocining company ";
//   callback(name);
// }
// sak((a) => {
//   console.log(" please tell me  what is Your company name " + a + " ohk ");
// console.log(" tell me about work in  your comapany ")});


// javascript prototype 



function mahesh(first, last, age, eye) {
  this.f = first;
  this.l = last;
  this.a = age;
  this.e = eye;
}

mahesh.prototype.nationality = "English";



function kashyap(first, last, age, eye){

  mahesh.call(this, first, last, age, eye)

}
//prototype inheritance

kashyap.prototype = Object.create(mahesh.prototype);

//kashyap.prototype.constructor = kashyap;
//kashyap.prototype.nationality = "hindi";

var mykashyap = new kashyap("mahesh", "mak", 325, "white");
console.log(mykashyap.f);
console.log(mykashyap.l);
console.log(mykashyap.a);
console.log(mykashyap.e);
console.log(mykashyap.nationality);


