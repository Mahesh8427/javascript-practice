class Department {
    name;
    constructor(name) {
        this.name = name;

    }
}

class Company {
    name
    employees = []
    esi = 1.6;
    pf = 5;

    constructor(name) {
        this.name = name;
    }

    addEmployees(add) {
        this.employees.push(add)
    }

    getAllEmployees() {
        return this.employees;

    }

    searchEmployees(name) {
        for (var i = 0; i < this.employees.length; i++) {

            if (this.employees[i].name === name) {
                return this.employees[i];

            }
        } return "Wrong Input"

    }
    displayALLEmplyoees() {
        for (var i = 0; i<this.employees.length; i++) {
            console.log("name:"+this.employees[i].getName()+" ESI: "+ this.employees[i].getESI() +" Attendence: "+ this.employees[i].getAttendence() +" PF: "+
            this.employees[i].getPF() +" Department: "+this.employees[i].getDepartment()+" BaseSalary: "+this.employees[i].getBaseSalary() +" MonthlySalary: "+ 
            this.employees[i].getMonthlySal() +" Position: "+ this.employees[i].getPosition() +" SalaryPayable: "+ this.employees[i].getPayable());
        }

    }

}

class Employee {
    name;
    attendance;
    department;
    position;
    base_salary;
    esi;
    pf;
    constructor(name, base_salary, esi, pf) {
        this.name = name;
        this.base_salary = base_salary;
        this.esi = esi;
        this.pf = pf;
    }
    setDepartment(dept) {
        this.department = dept;
    }
    getDepartment(){
        return this.department.name;
    }

    setAttendence(att) {
        this.attendance = att;
    }
    getAttendence() {
        return this.attendance;
    }

    setPosition(post) {
        this.position = post;
    }

    getPosition() {
        if (this.position == "Senior") {
            return this.position;
        } else {
            return this.position;
        }
    }

    getPayfine() {
        if (this.attendance <= 28) {
            return "pay fine Rs.200"

        } else {
            return "do not pay fine."
        }
    }

    getName() {
        return this.name;
    }
    getBaseSalary() {
        return this.base_salary;
    }

    getMonthlySal() {
        return this.base_salary / 30 * this.attendance

    }

    getPF() {
        if (this.pf) {
            if (this.getMonthlySal() >= 15000) {
                return this.getMonthlySal() * 5.0 / 100;
            }
        }
        else {
            return 'PF has not been applied.'
        }
    }

    getESI() {
        if (this.esi) {
            return 1.6 / 100 * this.getMonthlySal();
        } else {
            return "ESi has not been applied."
        }
    }
    getPayable() {
        return this.getMonthlySal() - this.pf - this.esi;
    }

}

// instance of eemployees class
var employeesObjects = [
    { name: "Raman", departments: new Department("Accounting"), attendance: 30, position: "Senior", base_salary: 20000, esi: true, pf: true },
    { name: "Deepak", departments: new Department("Development"), attendance: 28, position: "Junior", base_salary: 15000, esi: true, pf: false },
    { name: "Rahul", departments: new Department("Accounting"), attendance: 22, position: "Junior", base_salary: 13000, esi: true, pf: false },
    { name: "Kapil", departments: new Department("Designing"), attendance: 20, position: "Junior", base_salary: 8000, esi: true, pf: false },
    { name: "Rajat ", departments: new Department("HR"), attendance: 30, position: "Senior", base_salary: 40000, esi: false, pf: true },
    { name: "Nisha", departments: new Department("Development"), attendance: 24, position: "Senior", base_salary: 30000, esi: true, pf: true },
    { name: "RajKumar", departments: new Department("DevOps"), attendance: 22, position: "Junior", base_salary: 34000, esi: true, pf: true },
    { name: "Rohit", departments: new Department("Development"), attendance: 27, position: "Junior", base_salary: 22000, esi: true, pf: true },
    { name: "Narinder", departments: new Department("Development"), attendance: 21, position: "Junior", base_salary: 24000, esi: true, pf: true },
    { name: "Maki", departments: new Department("Accounting"), attendance: 20, position: "Senior", base_salary: 26000, esi: true, pf: true }];

let companyObjects = new Company("ABCDevops")

for (var i = 0; i < employeesObjects.length; i++) {
    let empObjects = new Employee(employeesObjects[i].name, employeesObjects[i].base_salary, employeesObjects[i].esi, employeesObjects[i].pf)
    companyObjects.addEmployees(empObjects);

    empObjects.setDepartment(employeesObjects[i].departments);
    empObjects.setAttendence(employeesObjects[i].attendance);
    empObjects.setPosition(employeesObjects[i].position);
    //console.log(empObjects.getPayfine());  // pay fine 
    //console.log(empObjects.getName());         //print Allemployees 
    //console.log(empObjects.getMonthlySal()); // monthly salary Allprint
    //console.log(empObjects.getPF()); // print all PF
    //console.log(empObjects.getESI());   //print all ESi
    //console.log(empObjects.getPayable()); // print all Payable.
    //console.log(empObjects.getPosition()); // print All Position
    //console.log(empObjects.getDepartment()); // print all department
    //console.log(empObjects.getAttendence()); // print all attendence
    //console.log(empObjects.getBaseSalary()); // print all base salary
    //console.log(empObjects.name)// print all name,base_salary,esi,pf,attendance etc.
}
//console.log(companyObjects.searchEmployees("Ramans"));// search Employee name get attendance
//console.log(companyObjects.getAllEmployees()); // print all employees are add in array of employees
//console.log(companyObjects) //  company AllObjects print
console.log(companyObjects.displayALLEmplyoees());
