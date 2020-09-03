// class Company {
//     name;
    
//     departments = []
//     employees = []
//     constructor(name) {
//         this.name = name;
//     }

//     addDepartment(add) {
//         this.departments.push(add)
//     }
//     totalEmployees() {
//         var sum = 0;
//         for (var i = 0; i < this.departments.length; i++) {

//             sum += parseInt(this.departments[i].employees.length)

//         }
//         console.log("Total no of empoloyees in companies are:- " + sum);
//     }

//     // deptPosition() {
//     //     for (var i = 0; i < this.departments.length; i++) {

//     //         if (this.departments.employess.Position === "Senoir") {
//     //             console.log("this Employee is " + this.departments.Position)
//     //         }else{
//     //             console.log("this Employee is " + this.departments.Position)
//     //         }


//     //     }
//     // }





// }

// class Departments {
//     name;
//     employees = []
//     constructor(name) {
//         this.name = name;
//     }

//     addEmp(add) {
//         this.employees.push(add)
//     }



// }

// let employeeObjects = [{ name: "Raman", ESI: 320, Attendence: 30, PF: 1000, Departments: "Accounting", BaseSalary: 20000, MonthlySalary: 20000, Position: "Senior", SalaryPay: 18680 },
// { name: "Deepak", ESI: 224, Attendence: 28, PF: 0, Departments: "Development", BaseSalary: 15000, MonthlySalary: 14000, Position: "Junior", SalaryPay: 13776 },
// { name: "Rahul", ESI: 152.53, Attendence: 22, PF: 0, Departments: "Designing", BaseSalary: 13000, MonthlySalary: 9533.33, Position: "Senior", SalaryPay: 9380.8 },
// { name: "Kapil", ESI: 85.33, Attendence: 20, PF: 0, Departments: "Development", BaseSalary: 8000, MonthlySalary: 5333.33, Position: "Junior", SalaryPay: 5248 },
// { name: "Rajat", ESI: 0, Attendence: 30, PF: 2000, Departments: "Development", BaseSalary: 40000, MonthlySalary: 40000, Position: "Junior", SalaryPay: 38000 },
// { name: "Nisha", ESI: 384, Attendence: 24, PF: 1200, Departments: "Accounting", BaseSalary: 30000, MonthlySalary: 24000, Position: "Senior", SalaryPay: 22416 },
// { name: "Jack", ESI: 398.93, Attendence: 22, PF: 1246.67, Departments: "HR", BaseSalary: 34000, MonthlySalary: 24933.33, Position: "Senior", SalaryPay: 23287.73 },
// { name: "Mak", ESI: 316.8, Attendence: 27, PF: 990, Departments: "Development", BaseSalary: 22000, MonthlySalary: 19800, Position: "Senior", SalaryPay: 18493.2 },
// { name: "Rohit", ESI: 268.8, Attendence: 21, PF: 840, Departments: "ABCDevops", BaseSalary: 24000, MonthlySalary: 16800, Position: "Junior", SalaryPay: 15691.2 },
// { name: "Maki", ESI: 277.33, Attendence: 20, PF: 866.67, Departments: "Accounting", BaseSalary: 26000, MonthlySalary: 17333.33, Position: "Junior", SalaryPay: 16189.33 }]

// let companyObjects = new Company("ABCDevOps")

// var accounts = new Departments("Accounting")
// var development = new Departments("Development")
// var design = new Departments("Designing")
// var devops = new Departments("ABCDevops")
// var hr = new Departments("HR")

// for (var i = 0; i < employeeObjects.length; i++) {

//     if (employeeObjects[i].Departments == "Accounting") {
//         accounts.addEmp(employeeObjects[i])
//     }
//     else if (employeeObjects[i].Departments == "Development") {
//         development.addEmp(employeeObjects[i])
//     } else if (employeeObjects[i].Departments == "Designing") {
//       else {
//         console.log("Not a Define")
//     }   design.addEmp(employeeObjects[i])
//     } else if (employeeObjects[i].Departments == "ABCDevops") {
//         devops.addEmp(employeeObjects[i])
//     } else if (employeeObjects[i].Departments == "HR") {
//         hr.addEmp(employeeObjects[i])
//     }
// }


// //console.log(development);
// //console.log(design);
// //console.log(deveops);
// //console.log(hr);
// companyObjects.addDepartment(accounts);
// companyObjects.addDepartment(development);
// companyObjects.addDepartment(design);
// companyObjects.addDepartment(devops);
// companyObjects.addDepartment(hr);

// companyObjects.totalEmployees();
// //companyObjects.deptPosition();

// console.log(companyObjects.departments[1])

// class EmployeeDetails {
//     name;
//     employeesid;
//     department;
//     salary;
//     position;
//     constructor(name, employeesid, departments, attendence, position, salary) {
//         this.name = name;
//         this.employeesid = employeesid;
//         this.departments = departments;
//         this.position = position;
//         this.salary = salary;
//         this.attendence = attendence;
//     }
// }



