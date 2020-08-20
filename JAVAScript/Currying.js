// Simply way Currying are perfrom
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
    }
var s=_.curry(add);
add(10,20,30)
console.log(s);

// //As a Arrow function
// function calculate(a) {
//     return function (b) {
//         return function (c) {
//             if (c === "sum") {
//                 return a + b;
//             }else if(c === "multiply"){
//                 return a * b;
//             }else{
//                  return "sorry result not found";
//             }
              
//         }
//     }
// }

// var s = calculate(10)(20)("sum");
// console.log(s);

// function calculate(a){
//      return function(b){
//          while(a < b){
                 
//              mak = mak + a;
//              a++;
//           }
          
//      } 
// }
// var mak="";
// var s = calculate(0)(20)
// console.log(mak)








