class Human {
    name;
    age;
    height;
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
            this.height = height;
    }

}
class Students extends Human {
    rollno;
    stream;
    constructor(name, age, height, stream, rollno) {
        super(name, age, height)
        this.stream = stream;
        this.rollno = rollno;
         
    }
    payFees(fees) {
        this.fees = fees;
    }

}
class Teachers extends Human {
    employeeid;
    salary;
    constructor(employeeid, salary, name, age, height) {
        super(name, age, height);
        this.employeeid = employeeid;
        this.salary = salary;
    }
    set Bonus(show) {
        this.salary = this.salary + show;
    }
    get Bonus() {
        return this.salary
    }

}
class College {
    name;
    department;
    constructor(name, department) {
        this.name = name;
        this.department = department;

    }
    // get Teachers() {
    //     return this.sal
    // }

    // set Student(submit) {
    //     this.fee = submit
    // }

}

let objects = new Students("Price", 15, 5.5, "BCA", 105)
console.log(objects.fees);
objects.Payfee = 500;
console.log(objects);
let tobjects = new Teachers(1205, 2000, "gaurav joshi", 45, 5.5)
console.log(tobjects);
tobjects.Bonus = 10000;

console.log(tobjects);
// console.log("Get Teacher Salary", funds.Teachers)
// funds.Student = 1000;
// console.log(funds.fee);
// funds.Salary = 5000;
// console.log(funds.sal);



