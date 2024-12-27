/*
9. Sort an Array of Objects with Deep Nested Properties
Given an array of users, where each user has a `transactions` array representing purchases made:
    
  
    const users = [
      { name: "Alice", transactions: [{ amount: 150 }, { amount: 250 }] },
      { name: "Bob", transactions: [{ amount: 500 }, { amount: 200 }] },
      { name: "Charlie", transactions: [{ amount: 50 }, { amount: 30 }] }
    ];

    
    Write a function that:
    
    - Sorts the users by the **total amount of their transactions** (sum of all transaction amounts for each user) in descending order.
    - Return the sorted array with the user names and their total transaction amounts.




----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

function SortAnArrayOfObjectsWithDeepNestedProperties(arr) {
  return arr.map((el) => {
    const sumTransaction = el.transactions.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );
    return { name: el.name, sumTransaction: el.sumTransaction };
  });
  return arr.sort((a, b) => b.transactions - a.transactions);
}

const users = [
  { name: "Alice", transactions: [{ amount: 150 }, { amount: 250 }] },
  { name: "Bob", transactions: [{ amount: 500 }, { amount: 200 }] },
  { name: "Charlie", transactions: [{ amount: 50 }, { amount: 30 }] },
];
console.log(SortAnArrayOfObjectsWithDeepNestedProperties(users));
