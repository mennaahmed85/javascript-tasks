/*
1. Create an object `student` with the following properties:
    - `firstName` (string)
    - `lastName` (string)
    - `age` (number)
    - `grades` (an array of numbers representing test scores)
2. Add methods to the `student` object:
    - `fullName`: This method should return the student's full name by combining `firstName` and `lastName`.
    - `calculateAverage`: This method should return the average grade from the `grades` array.
    - `getStudentInfo`: This method should return a string like "Student: [fullName], Age: [age], Average Grade: [averageGrade]."
*/

const student = {
  firstName: "menna",
  lastName: "ahmed",
  age: 23,
  grades: [40, 45, 50, 55, 60],
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  calculateAverage: function () {
    return this.grades.reduce((acc, el) => acc + el, 0) / this.grades.length;
  },
  getStudentInfo: function () {
    return `Student: ${this.fullName()}, Age: ${
      this.age
    }, Average Grade: ${this.calculateAverage()}`;
  },
};
console.log(student.getStudentInfo());
