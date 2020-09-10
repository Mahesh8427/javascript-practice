 
 require('./data');
const Company = require('./Entities/Company');
const Employee = require('./Entities/Employees');
const Department = require('./Entities/Department');

//import {Entities} from './Entities/Company';
//import * as Company from './Entities/Company';

//  import * as Employees from './Entities/Employees';
let companyObjects = new Entities/Company("ABCDevops");

for (var i = 0; i < employeesObjects.length; i++) {
    let empObjects = new Entities/Employee(employeesObjects[i].name, employeesObjects[i].base_salary, employeesObjects[i].esi, employeesObjects[i].pf)
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
//console.log(companyObjects.searchEmployees("Raman").getDepartment());// search Employee name get attendance
//console.log(companyObjects.getAllEmployees()); // print all employees are add in array of employees
//console.log(companyObjects) //  company AllObjects print
console.log(companyObjects.displayALLEmplyoees());
