// Title: Calculate Average
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  return array.length > 0
    ? array.reduce((prev, current) => prev + current, 0) / array.length
    : 0;
}

console.log(findAverage([1, 2, 3, 4, 5]));
