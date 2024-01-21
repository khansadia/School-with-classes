class School {
    constructor(name, address,zipcode, city){
        this.name = name;
        this.address = address;
        this.zipcode = zipcode;
        this.city = city;
        this.students = [];
        this.teachers = [];
        this.grades = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    removeStudent(student){
        this.students = this.students.filter(x => x !== student)
    }
    addGrade(student, subject,grade)
{
    this.grades.push ({
        student,subject,grade
    })
}
};

class Subject {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teacher = [];
        this.grades = [];
    }
    
    addStudent(student) {
        this.students.push(student);
    }
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    removeStudent(student) {
        this.students = this.students.filter((x) => x !== student);
    }
    addGrade(student, grade){
        this.grades.push({
            student,
            grade
        })
    }
};

// Skapa en klass för studenter, instansvariablerna ska vara name, age, gender och subjects som en tom array.
class Student {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.subjects = [];
        this.grades = [];
    }
    addSubject(subject) {
        this.subjects.push(subject);
    }
    addGrade(subject, grade) {
        this.grades.push({
        subject,
        grade,
        });
    }
};
// 2: Skapa en klass lärare med instansvariablerna name och subjects som en tom array.
class Teacher{
    constructor(name){
        this.name = name;
        this.subjects = [];
    }
    addSubject(subject){
        this.subjects.push(subject)
    }
};
// 3 Skapa en instans av skola, tre instanser av ämne, fem instanser av student samt två instanster av lärare. Var lite kreaktiva med namngivningen nu på de olika instansvariablerna.

const oxgSchool = new School('Oxg School', 'Helsingatan 37', 16432, 'Akalla');
const javascript = new Subject('JAVASCRIPT');
const css = new Subject('CSS');
const html = new Subject('HTML');

const ali = new Student('Ali', 34, 'male');
const erik = new Student('Erik', 28, 'male');
const saba = new Student('Saba', 30, 'female');
const mayam = new Student('mayam', 40, 'male');
const sadia = new Student('Sadia', 35, 'female');
const thomas = new Teacher('Thomas');
const niklas = new Teacher('Niklas');

// 4: Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och ämnet du valde i konsolen och inspektera dem. Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du den är komplett? Vad saknas?
// thomas.subjects.push(css); 
// niklas.subjects.push(javascript);
// thomas.subjects.push(html);
 
// css.teacher = thomas;
 // javascript.teacher = niklas;
 // html.students.push(sadia);
 // javascript.students.push(saba);
 // javascript.students.push(erik);
 // javascript.students.push(sadia);
 // css.students.push(sadia);
 // css.students.push(ali);
 // css.students.push(mayam);
 // html.students.push(erik);
 // html.students.push(mayam);
 
 
 // saba.subjects.push(javascript);
 // ali.subjects.push(css)
 // sadia.subjects.push(html, css, javascript);
 // erik.subjects.push(html, javascript);
 // mayam.subjects.push(html, css);
 
 
 
 // const addSubjectToTeacher = (teacher, subject) => {
 //     teacher.subjects.push(subject);
 // }
 
 // addSubjectToTeacher(thomas, html);
 // addSubjectToTeacher(thomas, css);
 // addSubjectToTeacher(niklas, javascript);
 
 oxgSchool.addStudent(ali);
 oxgSchool.addStudent(erik);
 oxgSchool.addStudent(mayam);
 oxgSchool.addStudent(saba);
 oxgSchool.addStudent(sadia);
 
 oxgSchool.addTeacher(thomas);
 oxgSchool.addTeacher(niklas);
 
 thomas.addSubject(css);
 niklas.addSubject(html);
 niklas.addSubject(javascript);

 
 javascript.setTeacher(niklas);
 css.setTeacher(thomas);
 html.setTeacher(niklas);

 
 
 html.addStudent(ali);
 html.addStudent(erik);
 html.addStudent(mayam);
 css.addStudent(mayam);
 css.addStudent(saba);
 css.addStudent(sadia);
 javascript.addStudent(ali);
 javascript.addStudent(erik);
 javascript.addStudent(mayam);
 javascript.addStudent(saba);
 javascript.addStudent(sadia);
 
 sadia.addSubject(javascript);
 sadia.addSubject(css);
 ali.addSubject(html);
 ali.addSubject(javascript);
 saba.addSubject(css);
 saba.addSubject(javascript);
 mayam.addSubject(html);
 mayam.addSubject(css);
 mayam.addSubject(javascript);
 erik.addSubject(html);
 erik.addSubject(javascript);
 
 const addTecher = (teacher, subjects) => {
     oxgSchool.addTeacher(teacher);
     subjects.forEach(subject => {
         subject.setTeacher(teacher);
         teacher.addSubject(subject);
     })
 }

// ------To add new teacher
// const Hassan = new Teacher('Hassan');
//addTecher(Hassan, [html]);

const addStudent = (student, subjects) => {
    oxgSchool.addStudent(student);
    subjects.forEach(subject => {
        subject.addStudent(student);
        student.addSubject(subject);
    })
}
// const sofia = new Student("sofia", 32, "female");
// addStudent(sofia, [JavaScript, css]);

const addSubject = (teacher, student, subject) => {
    teacher.addSubject(subject);
    subject.setTeacher(teacher);
    student.forEach(x => {
        x.addSubject(subject)
    })
    subject.addStudent(student);
}
// const Vue = new Subject('Vue');
// addSubject(thomas, [sadia, erik, saba], Vue);

const removeStudent = (student) => {
    oxgSchool.removeStudent(student);
    let subjects = [html, css, javascript];
    subjects.forEach (subject => {
        subject.students = subject.students.filter(x => x !== student)
    })
}
// removeStudent(sadia);
const displayAllStudents = () => {
    let listOfStudents = [];
    for (let key in oxgSchool.students) {
      listOfStudents.push(oxgSchool.students[key]);
    }
    return listOfStudents
};
console.log(displayAllStudents());


const dislayAllSaubjectsOfStudent = (student) => {
    let studentSubjects = [];
    for (let key in student.subjects){
        studentSubjects.push(student.subjects[key])
    }
    return studentSubjects;
}
 console.log(dislayAllSaubjectsOfStudent( erik));

const displayAllStudentsEnlistedToSubject = (subject) => {
    let subjectStudents = [];
    for (let key in subject.students){
        subjectStudents.push(subject.students[key])
    }
    return subjectStudents
}
console.log(displayAllStudentsEnlistedToSubject(css));

const displayAllTeachers = () => {
    let allTeachers = [];
    for (let key in oxgSchool.teachers){
        allTeachers.push(oxgSchool.teachers[key]);
    }
    return allTeachers;
}
console.log(displayAllTeachers());







































