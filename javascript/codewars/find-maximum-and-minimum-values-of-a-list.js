// Title: Find Maximum and Minimum Values of a List
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

function min(numbers) {
  return Math.min(...numbers);
}

function max(numbers) {
  return Math.max(...numbers);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
