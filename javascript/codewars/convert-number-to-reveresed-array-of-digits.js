// Title: Convert Number to Reversed Array of Digits
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(number) {
  return number.toString().split("").map(Number).reverse();
}

console.log(digitize(35231));
