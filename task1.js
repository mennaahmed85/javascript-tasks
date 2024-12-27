/*
1. Create an object named `person` with properties: `name`, `age`, and `greet`.
2. The `greet` property should be a method that uses the `this` keyword to log a message like: "Hello, my name is [name] and I am [age] years old."
3. Declare the `name` as a string and `age` as a number.
*/

const person = {
  name: "menna",
  age: 23,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  },
};

console.log(person.greet());
