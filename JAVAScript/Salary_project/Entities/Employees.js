// var Namespace = {
// }
     class Employee{
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
        getDepartment() {
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
            var s = this.base_salary / 30 * this.attendance
            return s.toFixed(2);
        }

        getPF() {
            if (this.pf) {
                if (this.getMonthlySal() >= 15000) {
                    return this.getMonthlySal() * 5.0 / 100;
                }
            }
            else {
                return 0;
            }
        }

        getESI() {
            if (this.esi) {
                var x = 1.6 / 100 * this.getMonthlySal();
                return x.toFixed(2);
            } else {
                return 0;
            }
        }
        getPayable() {
            var a = this.getMonthlySal() - this.getPF() - this.getESI();

            return a.toFixed(2);
        }

    }

module.exports = Employee;