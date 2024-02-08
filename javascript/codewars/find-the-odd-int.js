// Title: Find the Odd Int
// Difficulty: 6 kyu
// Link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(numbers) {
  return numbers.reduce((prev, current) => prev ^ current);
}

console.log(findOdd([0, 1, 0, 1, 0]));
