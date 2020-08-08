// // module pattern
// function EmployeeDetails() {
//     var name= "Mayank";
//     var age = 30;
//     var designation = "Developer";
//     var salary = 10000;
  
//     var calculateBonus = function(amount) {
//        salary = salary + amount;
//        return salary
//     }
  
//     return {
//       Name: name,
//       Age: age,
//       Designation: designation,
//       Salary: salary,
//       Calculate: calculateBonus
//     }
//   }
  
//   var newEmployee = EmployeeDetails()
//   console.log(newEmployee.Calculate(1000))
//   console.log(newEmployee.Salary)
  
// //   // itself invoke function.. 
// //   (function(){
// //      console.log("hi")
// //   }());
  



var module1 = (function () {
   //private 
   let color = 'red';
   let model;
   function setModel(m) {
       model = m;
   }
   let privatePrice = 800;
   let getModel = function (m) {
       setModel(m);
       return model;
   }
   // public 
   return {
       price: privatePrice,
       model: getModel
   }
}());
console.log(module1.price);
console.log(module1.model('audi'));