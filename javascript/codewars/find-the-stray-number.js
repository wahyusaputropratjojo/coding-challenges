// Title: Find the Stray Number
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
