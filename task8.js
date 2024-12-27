/*
Array Constructor with Dynamic Values
Create an array of 10 elements using the Array constructor,
but fill it dynamically such that the value at each index is double its index value (e.g., at index 2, the value would be 2 * 2 = 4).
Use methods like map and fill to achieve this.
*/

const arr = Array(10)
  .fill(0)
  .map((el, i) => (el = i * 2));
console.log(arr);
