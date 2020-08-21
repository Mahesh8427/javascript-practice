class EmployeDeatails {
    constructor(name, age, department, salary) {
        this.Name = name;
        this.Age = age;
        this.Department = department;
        this.EmpSalary = salary;
    }
    test() {
        console.log("Thank you")
    }
    set emp(show) {
        this.Age = show;
    }
    get fullname() {
        return this.Department;
    }
}

var mak = new EmployeDeatails("Jack", 25, "Python-Developer", 10000)
var jak = new EmployeDeatails("mak", 26, "Java-Developer", 5000)
var tak = new EmployeDeatails("jhon", 80, "Php-Developer", 532000)
var mack = new EmployeDeatails("Alina", 80, "HR", 2000)
mak.emp=60;
console.log(mak.Age);
// console.log("Name :- ", mak.Name, " Age is:-", mak.Age, "Dept:-", mak.Department, "Salary:-", mak.EmpSalary)
// console.log("Name :- ", jak.Name, " Age is:-", jak.Age, "Dept:-", jak.Department, "Salary:-", jak.EmpSalary)
// console.log("Name :- ", tak.Name, " Age is:-", tak.Age, "Dept:-", tak.Department, "Salary:-", tak.EmpSalary)
// console.log("Name :- ", mack.Name, "Dept:-", mack.Department, "Salary:-", mack.EmpSalary)
// console.log(mak.fullname);
 //mak.test();




