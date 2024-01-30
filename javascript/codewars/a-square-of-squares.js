// Title: A Square of Squares
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function isSquare(number) {
  return Number.isInteger(Math.sqrt(number)) ? true : false;
}

console.log(isSquare(25));
