// //var fs = require("fs");


// let x = function () {
//   console.log("Company is  GinVocining");
// }
// let y = function (callback) {
//   console.log("wht is company name");
//   callback();
// }
// y(x);



// //  Again simple callback Function..(2)

// function show(a) {
//   console.log("I am show function" + a)
// }
// function geeky(callback) {
//   var s = 1;
//   callback(s);
// }
// geeky(show);

// // console.log("end");

// //Asynchrnous way perfrom program..
// var fs = require("fs");
// console.log("program is started")


// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log(data.toString());

//   }
// });

// console.log("Program Ended");







// //call back function with anonymous Function..(3)  
// var fs = require("fs");

// console.log("program is started")

// function asd(callback) {
//   fs.readFile('input.txt', function (err, data) {
//     if (err) {
//       return console.error(err);
//     } else {
//       console.log(data.toString());
//       callback()
//     }
//   });
// }
// asd(function () {                  // anonymous function
//   console.log("Program Ended");
// });





// //CallBack Function with Arrow Function..(4)
// function sak(callback) {
//   var name = " Ginvocining company ";
//   callback(name);
// }
// sak((a) => { console.log(" please tell me  what is Your company name " + a + " ohk ") });         // <=arow function      






//callback function are include and Join speratery are using for like (array to objects)..(5)
function greet(rep) {

  console.log([rep.animal, 'typically sleep between', rep.sleepDuration].join('-'));

}

function obj(callback) {
  var reply = { animal: ' cats ', sleepDuration: ' 12 and 16 hours ' };
  callback(reply);
}
obj(greet);
