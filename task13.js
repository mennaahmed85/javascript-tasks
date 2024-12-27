/*
8. **Use `every`, `some`, and Nested Loops Together**
Given an array of departments, each containing an array of employees:
    
    const departments = [
      {
        name: "Engineering",
        employees: [
          { name: "Alice", age: 30, skills: ["JavaScript", "React", "Node.js"] },
          { name: "Bob", age: 40, skills: ["JavaScript", "Vue.js"] }
        ]
      },
      {
        name: "Marketing",
        employees: [
          { name: "Charlie", age: 35, skills: ["SEO", "Content Creation"] },
          { name: "David", age: 25, skills: ["JavaScript", "React"] }
        ]
      }
    ];

    
    Write two functions:
    
    - One that checks if **every** employee in the "Engineering" department has JavaScript in their `skills` array.
    - Another that checks if at least **one** employee in the "Marketing" department has JavaScript in their `skills` array.



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

function checksJsEngineering(arr) {
  const eng = arr.filter((el) => el.name === "Engineering");
  for (let i = 0; i < eng.length; i++) {
    const res = eng[i].employees.every((el) =>
      el.skills.includes("JavaScript")
    );
    if (!res) return false;
  }
  return true;
}

function MarketingchecksJs(arr) {
  const mar = arr.filter((el) => el.name === "Marketing");
  for (let i = 0; i < mar.length; i++) {
    const res = mar[i].employees.some((el) => el.skills.includes("JavaScript"));
    if (res) return true;
  }
  return false;
}

const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "Alice", age: 30, skills: ["JavaScript", "React", "Node.js"] },
      { name: "Bob", age: 40, skills: ["JavaScript", "Vue.js"] },
    ],
  },
  {
    name: "Marketing",
    employees: [
      { name: "Charlie", age: 35, skills: ["SEO", "Content Creation"] },
      { name: "David", age: 25, skills: ["JavaScript", "React"] },
    ],
  },
];
