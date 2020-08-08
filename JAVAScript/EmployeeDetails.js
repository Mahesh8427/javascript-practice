// module pattern 
function EmployeeDetails() {
   var name = "Mayank";
   var age = 30;
   var designation = "Developer";
   var salary = 10000;

   //  var calculateBonus = function(amount) {
   //     salary = salary + amount;
   //     return salary
   //  }
   return {
      Name: name,
      Age: age,
      Designation: designation,
      Salary: salary,
      Calculate: calculateBonus
   };
}
var newEmployee = EmployeeDetails();
console.log(newEmployee.Calculate(1000));
