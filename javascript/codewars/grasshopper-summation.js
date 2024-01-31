// Title: Grasshopper - Summation
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

const summation = (number) =>
  [...Array(number)]
    .map((_, index) => index + 1)
    .reduce((prev, current) => prev + current);

console.log(summation(8));
