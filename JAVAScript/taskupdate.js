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
class Student extends Human {
    rollno;
    stream;
    constructor(name,age,height,stream,rollno) {

        super(name, age, height)
        this.stream = stream;
        this.rollno = rollno;
    
        }
    payFees(fees) {
        return "One Month School Fee " + this.name + " Students is:- " + fees;
    }
    // attendanceSheet(){
    //     var a = "Today I am Sir" 
    // }

}
class Teacher extends Human {
    employeeid;
    salary;
    constructor(name, age, employeeid, salary) {
        super(name, age);
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
    students = []
    teachers = []
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    addStudentList(obj) {
        this.students = obj

    }
}
var Students = [new Student("Price",20,5.5,"BCA",105), new Student("Rockey",26,5.5,"MCA",105),new Student("Alina",20,6,"Arts",105)];

var object = new College("S.C.D College", "HR Dept")
object.addStudentList(Students[0]);
object.addStudentList(Students[1]);
object.addStudentList(Students[2]);

//console.log(Students[0].payFees(300));
// let tobj = new Teachers("gaurav joshi", 45, 1205, 20000)
// console.log(tobj);
// tobj.Bonus = 100;
// console.log("Bonus:" + tobj.Bonus);



