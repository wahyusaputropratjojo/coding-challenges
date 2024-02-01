// Title: Ones and Zeros
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

function binaryArrayToNumber(array) {
  return parseInt(array.join(""), 2);
}

console.log(binaryArrayToNumber([0, 0, 1, 1]));
