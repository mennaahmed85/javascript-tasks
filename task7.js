/*
2. **Array of Objects: Complex Filtering and Sorting**
Given an array of students:
    
    const students = [
      { name: "Alice", age: 23, grade: "A" },
      { name: "Bob", age: 20, grade: "B" },
      { name: "Charlie", age: 22, grade: "C" }
    ];

    Write a function that:
    
    - Filters students with a grade of "B" or higher.
    - Sorts them by age in descending order.
    - Returns a new array of student names with the format: `"Name: Alice, Grade: A"`.
*/

function complexFilteringSorting(arr) {
  const filteredArr = arr.filter((el) =>
    el.grade === "A" || el.grade === "B" ? el : ""
  );
  filteredArr.sort((a, b) => b.age - a.age);
  const student = filteredArr.map(
    (el) => `Name: ${el.name}, Grade: ${el.grade}`
  );
  return student;
}

const students = [
  { name: "Alice", age: 23, grade: "A" },
  { name: "Bob", age: 20, grade: "B" },
  { name: "Charlie", age: 22, grade: "C" },
];

console.log(complexFilteringSorting(students));
