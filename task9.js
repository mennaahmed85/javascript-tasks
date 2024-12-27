/*
4. **Chained `map` and Conditional Logic**
Given an array of products:
    
    const products = [
      { name: "Laptop", price: 1200, category: "Electronics" },
      { name: "Mouse", price: 25, category: "Accessories" },
      { name: "Keyboard", price: 75, category: "Electronics" }
    ];
    
    Write a function that:
    
    - Uses `map` to create a new array where the price of "Electronics" items is reduced by 10%.
    - Adds a new property `discountApplied: true` to those products where the discount was applied.
    - Returns the updated array.

*/

function chainedMapAndConditionalLogic(arr) {
  const reducedArr = arr.map((el) => {
    if (el.category === "Electronics") {
      el.price = el.price * 0.9;
      el["discountApplied"] = true;
    }
    return el;
  });
  return reducedArr;
}

const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Mouse", price: 25, category: "Accessories" },
  { name: "Keyboard", price: 75, category: "Electronics" },
];

console.log(chainedMapAndConditionalLogic(products));
