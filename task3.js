/*
1. Create a `book` object with properties `title` (a string), `author` (a string), and `pages` (a number).
2. Add a method `getSummary` that uses the `this` keyword to return the sentence: "The book '[title]' by [author] has [pages] pages."
*/

const object = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 123,
  getSummary: function () {
    return `The book ${this.title} by ${this.author} has ${this.pages} pages.`;
  },
};
console.log(object.getSummary());
