// Title: Invert Values
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
  return array.map((element) => element * -1);
}

console.log(invert([1, 2, 3, 4, 5]));
