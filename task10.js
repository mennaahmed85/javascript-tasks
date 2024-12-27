/*
5. **Sort and Map Complex Objects**
Given an array of employees:


    const employees = [
      { name: "Alice", salary: 50000, department: "Engineering" },
      { name: "Bob", salary: 70000, department: "Marketing" },
      { name: "Charlie", salary: 60000, department: "Engineering" }
    ];
    ```
    
    Write a function that:
    
    - Sorts the employees by their salary in ascending order.
    - Maps over the sorted array to return a new array containing strings in the format: `"Name: Alice, Department: Engineering, Salary: $50000"`.
    - Ensures that any employee from the "Engineering" department gets a 5% bonus, which should be reflected in their salary before sorting.



*/

function SortAndMapComplexObjects(arr) {
  const updatedArr = arr.map((el) => {
    if (el.department === "Engineering") {
      el.salary = el.salary * 1.05;
    }
    return el;
  });
  return updatedArr
    .sort((a, b) => a.salary - b.salary)
    .map(
      (el) =>
        `Name: ${el.name}, Department: ${el.department}, Salary: $${el.salary}`
    );
}

const employees = [
  { name: "Alice", salary: 50000, department: "Engineering" },
  { name: "Bob", salary: 70000, department: "Marketing" },
  { name: "Charlie", salary: 60000, department: "Engineering" },
];

console.log(SortAndMapComplexObjects(employees));
