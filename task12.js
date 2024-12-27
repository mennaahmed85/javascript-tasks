/*
7. **Find Product with Complex Criteria Using Nested Properties**
Given the following array of orders:
    
    const orders = [
      { id: 1, products: [{ name: "Phone", price: 500 }, { name: "Headphones", price: 50 }], customer: { name: "Alice", premium: true } },
      { id: 2, products: [{ name: "Laptop", price: 1500 }], customer: { name: "Bob", premium: false } },
      { id: 3, products: [{ name: "Shoes", price: 100 }], customer: { name: "Charlie", premium: true } }
    ];
    
    Write a function that:
    
    - Finds the first order where the customer is premium and the total value of their order (sum of product prices) exceeds $1000.
    - Returns the order ID and the names of all products in that order.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

function FindProductwithComplexCriteriaUsingNestedProperties(arr) {
  const order = arr.find((el) => {
    if (el.customer.premium) {
      const totalValue = el.products.reduce((acc, curr) => acc + curr.price, 0);
      return totalValue > 1000;
    }
  });
  if (order) {
    return {
      orderId: order.id,
      productNames: order.productNames.map((prod) => prod.name),
    };
  } else {
    return "No order found matching criteria";
  }
}

const orders = [
  {
    id: 1,
    products: [
      { name: "Phone", price: 500 },
      { name: "Headphones", price: 50 },
    ],
    customer: { name: "Alice", premium: true },
  },
  {
    id: 2,
    products: [{ name: "Laptop", price: 1500 }],
    customer: { name: "Bob", premium: false },
  },
  {
    id: 3,
    products: [{ name: "Shoes", price: 100 }],
    customer: { name: "Charlie", premium: true },
  },
];

console.log(FindProductwithComplexCriteriaUsingNestedProperties(orders));
