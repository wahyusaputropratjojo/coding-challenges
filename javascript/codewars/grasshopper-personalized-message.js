// Title: Grasshopper - Personalized Message
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Wahyu", "Wahyu"));
console.log(greet("Wahyu", "Pratjojo"));
