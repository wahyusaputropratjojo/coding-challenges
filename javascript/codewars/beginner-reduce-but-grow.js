// Title: Beginner - Reduce But Grow
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

const grow = (numbers) => numbers.reduce((prev, current) => prev * current);

// function grow(numbers) {
//   let result = 1;

//   for (let a = 0; a < numbers.length; a++) {
//     result *= numbers[a];
//   }

//   return result;
// }

console.log(grow([1, 2, 3, 4]));
