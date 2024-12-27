/*
10. E-Commerce Cart Total with Multiple Discounts and Complex Rules
Given a shopping cart of products:

const cart = [
  { name: "Laptop", price: 1000, discount: 10, type: "Electronics", brand: "BrandA" },
  { name: "Phone", price: 500, type: "Electronics", brand: "BrandB" },
  { name: "Shoes", price: 150, discount: 20, type: "Footwear", brand: "BrandA" },
  { name: "Hat", price: 50, type: "Accessories", brand: "BrandC" }
];

Write a function that:

- Calculates the total price after applying the discount (if available) for each product.
- If the total price of all products from `Electronics` exceeds $1000, apply an additional 5% discount to all Electronics.
- If the brand is `BrandA` and the product type is `Footwear`, apply a 10% extra discount.
- Return the final total price.
*/

function ECommerceCartTotalWithMultipleDiscountsComplexRules(arr) {
  arr = arr.map((el) => {
    if (el.discount) el.price = el.price - el.price * (el.discount / 100);
    if (el.brand === "BrandA" && el.type === "Footwear")
      el.price = el.price - el.price * 0.1;
    return el;
  });
  const electronicsTotal = arr
    .filter((el) => el.type === "Electronics")
    .reduce((acc, curr) => acc + curr.price, 0);

  if (electronicsTotal > 1000) {
    arr = arr.map((el) => {
      if (el.type === "Electronics") el.price = el.price - el.price * 0.05;
      return el;
    });
  }
  return arr.reduce((acc, curr) => acc + curr.price, 0);
}

const cart = [
  {
    name: "Laptop",
    price: 1000,
    discount: 10,
    type: "Electronics",
    brand: "BrandA",
  },
  { name: "Phone", price: 500, type: "Electronics", brand: "BrandB" },
  {
    name: "Shoes",
    price: 150,
    discount: 20,
    type: "Footwear",
    brand: "BrandA",
  },
  { name: "Hat", price: 50, type: "Accessories", brand: "BrandC" },
];
console.log(ECommerceCartTotalWithMultipleDiscountsComplexRules(cart));
