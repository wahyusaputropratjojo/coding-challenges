// Title: Highest and Lowest
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  const arrayNumbers = numbers.split(" ").map(Number);
  const maxNumber = Math.max(...arrayNumbers);
  const minNumber = Math.min(...arrayNumbers);

  return `${maxNumber} ${minNumber}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
