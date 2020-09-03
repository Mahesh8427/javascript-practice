
class Departments {
    name;
    constructor(name) {
        this.name = name;

    }

}

class EmployeeDetails {
    name;
    attendence;
    department;
    position;
    basesalary;
    esi;
    pf;
    constructor(name, base_salary, esi, pf) {
        this.name = name;
        this.basesalary = base_salary;
        this.esi = esi;
        this.pf = pf;
    }
    setDepartment(dept) {
        this.department = dept;
    }

    setAttendence(att) {
        this.attendence = att;
    }

    setPosition(post) {
        this.position = post;

    }
    setName(name) {
        this.name = name;
    }

    get Position() {
        return this.position;
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

    get PF(){

    }
}


// instance of eemployees class
var employeesObjects = [{ name: "Raman", departments: new Departments("Accounting"), attendence: 30, position: "Senior", base_salary: 20000, esi: true, pf: true },
{ name: "Deepak", departments: new Departments("Development"), attendence: 28, position: "Junior", base_salary: 15000, esi: true, pf: false },
{ name: "Rahul", departments: new Departments("Accounting"), attendence: 22, position: "Junior", base_salary: 13000, esi: true, pf: false },
{ name: "Kapil", departments: new Departments("Designing"), attendence: 20, position: "Junior", base_salary: 8000, esi: true, pf: false },
{ name: "Rajat ", departments: new Departments("HR"), attendence: 30, position: "Senior", base_salary: 40000, esi: false, pf: true },
{ name: "Nisha", departments: new Departments("Development"), attendence: 24, position: "Senior", base_salary: 30000, esi: true, pf: true },
{ name: "RajKumar", departments: new Departments("DevOps"), attendence: 22, position: "Junior", base_salary: 34000, esi: true, pf: true },
{ name: "Rohit", departments: new Departments("Development"), attendence: 27, position: "Junior", base_salary: 22000, esi: true, pf: true },
{ name: "Narinder", departments: new Departments("Development"), attendence: 21, position: "Junior", base_salary: 24000, esi: true, pf: true },
{ name: "Maki", departments: new Departments("Accounting"), attendence: 20, position: "Senior", base_salary: 26000, esi: true, pf: true }];

let companyObjects = new Company("ABCDevops")

let empObjects = new EmployeeDetails()


for (var i = 0; i < employeesObjects.length; i++) {
    companyObjects.addEmployees(employeesObjects[i])

    empObjects.setDepartment(employeesObjects[i].departments);
    empObjects.setAttendence(employeesObjects[i].attendence);
    empObjects.setPosition(employeesObjects[i].position);
    empObjects.setName(employeesObjects[i].name);

    //console.log(empObjects.attendence)// print all name,attendence,departments etc.
}
//console.log(companyObjects.searchEmployees("Raman"));// search Employee name get attendence
//console.log(companyObjects.displayAllEmployees); // print all employees are add in array of employees
//console.log(companyObjects)