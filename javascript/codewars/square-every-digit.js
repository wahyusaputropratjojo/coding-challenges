// Title: Square Every Digit
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// function squareDigits(num) {
//   const numbers = [];
//   const numbersSquare = [];

//   for (let a = 0; a < num.toString().length; a++) {
//     numbers.push(num.toString()[a]);
//   }

//   for (let b = 0; b < numbers.length; b++) {
//     numbersSquare.push(numbers[b] * numbers[b]);
//   }

//   return Number(numbersSquare.join(""));
// }

const squareDigits = (num) =>
  Number(
    num
      .toString()
      .split("")
      .map((element) => Math.pow(Number(element), 2))
      .join(""),
  );

console.log(squareDigits(3212));
