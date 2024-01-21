
class Grade {
    constructor (grade, subject, student){
        this.grade = grade;
        this.subject = subject;
        this.student = student;
    }
}

const createGrade = (grade, subject, student) => {
    let studentGrade = new Grade(grade, subject, student);
    subject.addGrade(student, grade);
    student.addGrade(subject, grade);
    oxgSchool.addGrade(student, subject, grade)
}
createGrade(82, javascript, mayam);
createGrade(79, javascript, saba);
createGrade(84, javascript, ali);
createGrade(77, css, sadia);
createGrade(76, html, sadia);
createGrade(79, html, erik);
createGrade(82, html, mayam);


console.log(oxgSchool);

const displayGrades = () => {
    let studentsGrades = [];
    for(let key in oxgSchool.grades){
        studentsGrades.push(oxgSchool.grades[key])
    }
    return studentsGrades;
}
console.log(displayGrades());

