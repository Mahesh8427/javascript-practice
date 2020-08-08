  class Mahesh {
    constructor(male, female) {
        this.person1 = male;
        this.person2 = female;
    }
    show() {
        if (this.person1 == 'male'){
             console.log(" Mr. ");
        }else{
            console.log(" Mrs. ");
        }
      }
}

module.exports = Mahesh;
   