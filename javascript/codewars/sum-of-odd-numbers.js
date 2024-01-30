// Title: Sum of Odd Numbers
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

// function rowSumOddNumbers(rows) {
//   const triangle = [];
//   let currentNumber = 1;

//   for (let i = 1; i <= rows; i++) {
//     const row = [];
//     for (let j = 1; j <= i; j++) {
//       row.push(currentNumber);
//       currentNumber += 2;
//     }
//     triangle.push(row);
//   }

//   return triangle
//     .filter((_, index) => index === rows - 1)[0]
//     .reduce((prev, current) => prev + current);
// }

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(3));
