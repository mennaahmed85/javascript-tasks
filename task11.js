/*
6. **Advanced Filtering, Mapping, and Reducing with Conditional Logic**
Given the following array of products:
    
    const products = [
      { name: "Shirt", price: 30, category: "Clothing", inStock: true },
      { name: "Laptop", price: 1500, category: "Electronics", inStock: false },
      { name: "Phone", price: 800, category: "Electronics", inStock: true },
      { name: "Shoes", price: 70, category: "Footwear", inStock: true }
    ];
    
    Write a function that:
    
    - Filters products that are both in stock and in the "Electronics" category.
    - Maps over the filtered results to apply a 10% discount if the product's price is greater than $1000.
    - Reduces the final result to calculate the total discounted price of these products.

*/

function AdvancedFilteringMappingAndReducingwithConditionalLogic(arr) {
  const filteredArr = arr.filter(
    (el) => el.category === "Electronics" && el.inStock === true
  );
  filteredArr.map((el) => (el.price > 1000 ? (el.price = el.price * 0.9) : ""));
  return filteredArr.reduce((acc, curr) => acc + curr.price, 0);
}

const products = [
  { name: "Shirt", price: 30, category: "Clothing", inStock: true },
  { name: "Laptop", price: 1500, category: "Electronics", inStock: false },
  { name: "Phone", price: 800, category: "Electronics", inStock: true },
  { name: "Shoes", price: 70, category: "Footwear", inStock: true },
];

console.log(AdvancedFilteringMappingAndReducingwithConditionalLogic(products));
