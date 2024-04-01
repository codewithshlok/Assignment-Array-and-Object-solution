// Q4.Building a studentmanagement system.
// Descritption : you are tasked with building a student management system using javascript . The system should allow you to perform various operations on a list of students , including =adding, updating , deleting an displaying student information.
// Requirements  : Here is a initial array of students. Each students is represented as an object with the following properties : id, firstname , lastName , age and grade. 
// const students = [
//    { id  : 1 , firstName : "jane", lastName: "doe", age : 21, grade : "A"}, { id  : 2 , firstName : "tony", lastName: "stark", age : 40, grade : "A"},{ id  : 3 , firstName : "thor", lastName: "odinson", age : 500, grade : "A"},
// ]
// Implement the following functions using javascript (without  any external libraries or framework)
// a. Add a student  : Create a function to add a new student to the array
// b. Update student information : Create a function to update a student's information based on their id .
// c. Delete a student Create  a function to delete a student based on their id.
// d. List all students : create a function to display a list of all students.
// e. Find students by the grade  : create a function to find alll students who have specific grade.
// f. calculate average age  : Create a function to calculate the average age of all students using array method.

const students = [
    { id: 1, firstName: "Jane", lastName: "Doe", age: 21, grade: "A" },
    { id: 2, firstName: "Tony", lastName: "Stark", age: 40, grade: "A" },
    { id: 3, firstName: "Steve", lastName: "Rogers", age: 70, grade: "B" }
];

// a. Add a student
function addStudent(newStudent) {
    students.push(newStudent);
}

// b. Update student information
function updateStudentInfo(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    } else {
        console.log("Student not found with provided ID.");
    }
}

// c. Delete a student
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    } else {
        console.log("Student not found with provided ID.");
    }
}

// d. List all students
function listAllStudents() {
    console.log("List of all students:");
    students.forEach(student => console.log(student));
}

// e. Find students by grade
function findStudentsByGrade(grade) {
    const filteredStudents = students.filter(student => student.grade === grade);
    console.log(`Students with grade ${grade}:`);
    filteredStudents.forEach(student => console.log(student));
}

// f. Calculate average age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average age of all students: ${averageAge}`);
}

addStudent({ id: 4, firstName: "Steve", lastName: "Rogers", age: 100, grade: "B" });
updateStudentInfo(2, { age: 45 });
deleteStudent(3);
listAllStudents();
findStudentsByGrade("A");
calculateAverageAge();
