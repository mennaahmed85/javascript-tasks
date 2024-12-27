/*
Advanced this keyword with Function Borrowing
Create an object employee with properties name, position, and a method getDetails that uses this to return a sentence like "Alice is a Developer.". 
Then, create another object manager with different properties and borrow the getDetails method using call or apply to see how the this keyword behaves when switching contexts.
Ensure the second object adds extra details such as department, requiring the method to work dynamically with different property sets.
*/

const employee = {
  name: "menna",
  position: "Developer",
  getDetails: function () {
    return `${this.name} is a ${this.position} ${
      this.department ? `in ${this.department} department` : ""
    }`;
  },
};

const manager = {
  name: "ahmed",
  position: "manager",
  department: "Software Engineer",
};

console.log(employee.getDetails.call(manager));
