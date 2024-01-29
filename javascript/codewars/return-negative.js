// Title: Return Negative
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(number) {
  if (Number(number) === 0 || Number(number) < 0) return number;
  return Number(number * -1);
}

console.log(makeNegative(9));
