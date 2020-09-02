class Departments {
    name;
    constructor(name) {
        this.name = name;

    }

}

class EmployeeDetails {
    name;
    attendence
    position;
    basesalary;
    esi;
    pf;
    constructor(name, departments, attendence, position, basesalary, esi, pf) {
        this.name = name;
        this.departments = departments;
        this.position = position;
        this.basesalary = basesalary;
        this.attendence = attendence;
        this.esi = esi;
        this.pf = pf;
    }
}

class Company {
    name
    employees = []
    esi;
    pf;

    constructor(name, esi = 1.6, pf = 5) {
        this.name = name;
        this.esi = esi;
        this.pf = pf;
    }

    addEmployees(add) {
        this.employees.push(add)
    }

    get displayAllEmployees() {
        return this.employees;

    }

    searchEmployees(name) {
        for (var i = 0; i < this.employees.length; i++) {

            if (this.employees[i].name === name) {
                return this.employees[i];
                break;
            }
        }

    }

}
// instance of department class
//new Departments("Accounting")
//new Departments("Development")
//new Departments("Designing")
//new Departments("ABCDevops")
// var hr = new Departments("HR")

// instance of eemployees class
var employeesObjects = [new EmployeeDetails("Raman", new Departments("Accounting"), 30, "Senior", 20000, 320, 1000),
new EmployeeDetails("Deepak", new Departments("Development"), 28, "Junior", 15000, 224, 0),
new EmployeeDetails("Rahul", new Departments("Accounting"), 22, "Junior", 13000, 152.53, 0),
new EmployeeDetails("Kapil", new Departments("Designing"), 20, "Junior", 8000, 85.33, 00),
new EmployeeDetails("Rajat ", new Departments("HR"), 30, "Senior", 40000, 0, 2000),
new EmployeeDetails("Nisha", new Departments("Development"), 24, "Senior", 30000, 384, 1200),
new EmployeeDetails("RajKumar", new Departments("DevOps"), 22, "Junior", 34000, 398.93, 1246.67),
new EmployeeDetails("Rohit", new Departments("Development"), 27, "Junior", 22000, 316.8, 990),
new EmployeeDetails("Narinder", new Departments("Development"), 21, "Junior", 24000, 368.8, 840),
new EmployeeDetails("Narinder", new Departments("Accounting"), 20, "Senior", 26000, 277.33, 866.67)]

let companyObjects = new Company("ABCDevops")

for (var i = 0; i < employeesObjects.length; i++) {
    companyObjects.addEmployees(employeesObjects[i])

}

//console.log(companyObjects.searchEmployees("Raman").basesalary);// search Employee name get attendence
//console.log(companyObjects.displayAllEmployees); // print all employees are add in array of employees
