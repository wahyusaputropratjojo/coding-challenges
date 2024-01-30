// Title: Square(n) Sum
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
  return numbers.reduce((prev, current) => prev + Math.pow(current, 2), 0);
}

console.log(squareSum([1, 2, 3, 4, 5]));
