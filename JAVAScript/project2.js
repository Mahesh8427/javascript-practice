class ABCDevOps {
    name;
    department;
    attendance;
    constructor(name, department, attendance) {
        this.name = name;
        this.department = department;
        this.attendance = attendance;
    }
}

class EmpolyeeDetails extends ABCDevOps {
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
}
let Empolyees = [new EmployeeDetails("Raman", 1205, "Accounting", 30, "Senior", 20000), 
new EmployeeDetails("Deepak", 1206, "Development", 28, "Junior", 15000), 
new EmployeeDetails("Rahul", 1206, "Designing", 28, "Senior", 13000), 
new EmployeeDetails("Kapil", 1206, "Development", 28, "Junior", 8000), 
new EmployeeDetails("Rajat", 1206, "Devel0pment", 28, "Junior", 40000), 
new EmployeeDetails("Nisha", 1206, "Accounting", 28, "Senior", 30000), 
new EmployeeDetails("Jack", 1206, "HR ", 28, "Senior", 34000), 
new EmployeeDetails("Mak", 1206, "Development", 28, "Senior", 22000),
new EmployeeDetails("Rohit", 1206, "Development", 28, "Junior", 24000), 
new EmployeeDetails("Maki", 1206, "Accounting", 28, "Junior", 26000)]