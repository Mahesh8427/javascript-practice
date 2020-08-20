// //Simple Class crate and  Accessing Function 


// 'use strict'
// class Polygon {
//    constructor(height, width) {
//       this.h = height;
//       this.w = width;
//    }
//    test() {
//       console.log("The height of the tandoor: ", this.h)
//       console.log("The width of the tandoor: ", this.w)
//    }
// }

// //creating an instance or Objects words are same   
// var Obj = new Polygon(10, 20);
// Obj.test();




//clss is create anf perfrom setter and getter.
           
class Student {
   constructor(rno, fname, lname) {
      this.r = rno
      this.f = fname
      this.l = lname

   }
   set rollno(number) {
      this.rno = number
   }
   get fullname() {
      return this.f;

   }
}
let s1 = new Student(101, 'Sachin', 'Tendulkar')
let s2 = new Student(301, 'AjaY', 'Devgn')
s1.r = 201
s2.r = 420
console.log(s1)
console.log(s1.fullname)
console.log(s2)
console.log(s2.l)






