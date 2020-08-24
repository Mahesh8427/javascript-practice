function Mangement(name) {
    this.firstname = name
}
//Mangement.prototype.age=25;
Mangement.prototype.speak=function(){
console.log("Thank you")
}
    

class College extends Mangement {   
    staffs;
    fee;
    sal;
    constructor(firstname ="mak", staff, fees, salary) {
        super(firstname);
        this.staffs = staff;
        this.fee = fees;
        this.sal = salary;
    }
    get Teachers() {
        return this.sal
    }

    set Student(submit) {
        this.fee = submit
    }

    set Salary(show) {
        this.sal = this.sal + show;

    }

    get Bonus() {
        return this.sal
    }

}

let funds = new College("price", "", 500, 20000)
console.log(funds.firstname)
console.log("Get Teacher Salary", funds.Teachers)
funds.Student = 1000;
console.log(funds.fee);
funds.Salary = 5000;
console.log(funds.sal);
funds.speak();
