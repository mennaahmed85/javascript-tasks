/*
1. Create an object `car` with properties `brand` (string), `model` (string), and `price` (number).
2. Add a method `getPriceWithTax` that calculates and returns the price of the car including a tax rate of 10%.
3. Add another method `describeCar` that prints "The [brand] [model] costs [priceWithTax]" using the `this` keyword and the `getPriceWithTax` method.
*/

const car = {
  brand: "Mercedes-Benz",
  model: "S-Class",
  price: 2000000,
  getPriceWithTax: function () {
    return this.price + this.price * 0.1;
  },
  describeCar: function () {
    return `The ${this.brand} ${this.model} costs ${this.getPriceWithTax()}`;
  },
};
console.log(car.describeCar());
