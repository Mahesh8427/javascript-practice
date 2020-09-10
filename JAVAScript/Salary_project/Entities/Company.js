// var Entities  =  function()   
// {}
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
        var values = ""
        for (var i = 0; i < this.employees.length; i++) {
        values += "name:" + this.employees[i].getName() + " ESI: " + this.employees[i].getESI() + " Attendence: " + this.employees[i].getAttendence() + " PF: " +
                this.employees[i].getPF() + " Department: " + this.employees[i].getDepartment() + " BaseSalary: " + this.employees[i].getBaseSalary() + " MonthlySalary: " +
                this.employees[i].getMonthlySal() + " Position: " + this.employees[i].getPosition() + " SalaryPayable: " + this.employees[i].getPayable()+"\n";
         }
        return values;
    }


}
 

module.exports = Company;