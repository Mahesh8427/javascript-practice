class Company {
    name;
    department;
    attendance;
    constructor(name, department, (String) attendance) {
        this.name = name;
        this.department = department;
        this.attendance = attendance;
    }
}

class EmployeeDetails extends Company {
    empolyeeid;
    salary;
    position;
    constructor(name, empolyeeid, department, attendance, position, salary) {
        super(name, department, attendance);
        this.empolyeeid = empolyeeid;
        this.salary = salary;
        this.position = position
    }
}
class Office {
    name;
    empolyees = [];
    constructor(name) {
        this.name = name;
    }
    addEmployee(add) {
        this.empolyees.push(add)
    }
}
let Empolyees = [new EmployeeDetails("Raman", 1205, "Accounting", 30, "Senior", 20000),
new EmployeeDetails("Deepak", 1506, "Development", 28, "Junior", 15000),
new EmployeeDetails("Rahul", 1306, "Designing", 22, "Senior", 13000),
new EmployeeDetails("Kapil", 1606, "Development", 20, "Junior", 8000),
new EmployeeDetails("Rajat", 1406, "Devel0pment", 30, "Junior", 40000),
new EmployeeDetails("Nisha", 1806, "Accounting", 24, "Senior", 30000),
new EmployeeDetails("Jack", 1306, "HR ", 22, "Senior", 34000),
new EmployeeDetails("Mak", 1706, "Development", 27, "Senior", 22000),
new EmployeeDetails("Rohit", 1106, "Development", 21, "Junior", 24000),
new EmployeeDetails("Maki", 1906, "Accounting", 20, "Junior", 26000)]
 
let person = new Office("ABCDevOps");
person.empolyees = Empolyees;

for (var i = 0; i < Empolyees.length; i++) {
    person.addEmployee(new EmployeeDetails(Empolyees[i].name, 1906, "Accounting", 20, "Junior", 26000))
    //console.log(Empolyees[i]);\
}
//person.addEmployee(Empolyees[i])

console.log(person.empolyees)