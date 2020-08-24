class Human
{
    protected $name;
    protected $age;
    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }
}
class Student extends Human
{
    private $rollno;
    private $class;
    private $isPresent = false;
    private Teacher $teacher;
    public function __construct(int $rollno, string $class, string $name, int $age ) {
        $this->rollno = $rollno;
        $this->class = $class;
        $this->age = $age;
        $this->name = $name;
    }
    public function iAmPresent() {
        $this->isPresent = true;
    }
    public function assignTeacher(Teacher $teacher) {
        return $this->teacher = $teacher;
    }
}
class Teacher extends Human
{
    private $employeeId;
    private Student $student;
    public function __construct(int $id, string $name, int $age ) {
        $this->employeeId = $id;
        $this->age = $age;
        $this->name = $name;
    }
    public function canTeach(Student $std) {
        $this->student = $std;
    }
    public function getMyStudent() {
        return $this->student;
    }
}
class School
{
    private  $teachers = [];
    private $students = [];
    private string $name;
    public function __construct(string $name) {
        $this->name = $name;
    }
    public function addTeacher(Teacher $t) {
        $this->teachers[] = $t;
    }
    public function addStudent(Student $s) {
        $this->students[] = $s;
    }
    public function getAllStudents() {
        return $this->students;
    }
    public function getAllTeachers() {
        return $this->teachers;
    }
}
$st1 = new Student(5334,'10th','chhaya',15);
$te1 = new Teacher(4443, 'parminder singh', 67);
$st2 = new Student(22,'10th','raman',15);
$st3 = new Student(44,'10th','kapil',14);
$st4 = new Student(55,'10th','deepak',15);
$st5 = new Student(66,'10th','rahul',14);
$st6 = new Student(7,'10th','neetu',17);
$te2 = new Teacher(443, 'charan singh', 45);
$st1->assignTeacher($te1);
$st1->iAmPresent();
$te1->canTeach($st1);
$te2->canTeach($st2);
$school = new School('khalsa school');
$school->addTeacher($te1);
$school->addTeacher($te2);
$school->addStudent($st1);
$school->addStudent($st2);
$school->addStudent($st3);
$school->addStudent($st4);
$school->addStudent($st5);
$school->addStudent($st6);
print_r($school->getAllStudents());
print_r($school->getAllTeachers());