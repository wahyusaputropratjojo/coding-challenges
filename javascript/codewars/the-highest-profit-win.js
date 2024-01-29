// Title: The Highest Profit Wins!
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
