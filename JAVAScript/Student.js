class Student {
   constructor(rno, fname, lname) {
      this.r = rno;
      this.f = fname;
      this.l = lname;
      console.log('inside constructor');
   }
   set rollno(number) {
      console.log("inside setter");
      this.rno = number;
   }
}
let s1 = new Student(101, 'Sachin', 'Tendulkar');
console.log(s1);
//setter is called
s1.rollno = 201;
console.log(s1);
