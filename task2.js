/*
1. Create an object named `calculator` that has two properties: `num1` and `num2`, both numbers.
2. Add a method `sum` to the object, which returns the sum of `num1` and `num2`.
3. Add another method `describeSum` that prints "The sum of [num1] and [num2] is [sum]" using `this` and the `sum` method.
*/

const calculator = {
  num1: 2,
  num2: 3,
  sum: function () {
    return this.num1 + this.num2;
  },
  describeSum: function () {
    console.log(`"The sum of ${this.num1} and ${this.num2} is ${this.sum()}"`);
  },
};

calculator.describeSum();
