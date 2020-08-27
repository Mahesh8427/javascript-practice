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
    constructor(name, age, height, stream, rollno) {

        super(name, age, height)
        this.stream = stream;
        this.rollno = rollno;

    }
    payFees(fees) {
        return "One Month School Fee " + this.name + " and Stream "+ this.stream + " "+ fees;
    }
}
class Teacher extends Human {
    employeeid; 
    salary;
    constructor(name, age, employeeid, salary) {
        super(name, age);
        this.employeeid = employeeid;
        this.salary = salary;
    }
    set Bonusadd(show) {
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
        this.students.push(obj)
    }

    addTeacherList(obj1) {
        this.teachers.push(obj1)
    }

    get displayStd() {
        return this.students;
    }

    get displayTeach() {
        return this.teachers;
    }

}
var Students = [new Student("Price", 20, 5.5, "BCA", 105), new Student("Rockey", 26, 5.5, "MCA", 105), new Student("Alina", 20, 6, "Arts", 105)];
let Teachers = [new Teacher("gaurav joshi", 45, 1205, 20000), new Teacher("OP Gupta", 55, 1205, 120000)]

var object = new College("S.C.D College", "HR Dept")
object.addStudentList(Students[0]);
object.addStudentList(Students[1]);
object.addStudentList(Students[2]);
console.log(object.displayStd);

console.log(Students[1].payFees(300));

object.addTeacherList(Teachers[0]);
object.addTeacherList(Teachers[1]);


Teachers[0].Bonusadd = 1000;
Teachers[1].Bonusadd = 2000;
console.log(Teachers)
console.log(Students)


