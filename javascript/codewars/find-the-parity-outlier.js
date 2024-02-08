// Title: Find the Parity Outlier
// Difficulty: 6 kyu
// Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(numbers) {
  const oddNumbers = [];
  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }

  if (evenNumbers.length < oddNumbers.length) {
    return numbers.find((value) => value === evenNumbers[0]);
  } else {
    return numbers.find((value) => value === oddNumbers[0]);
  }
}

console.log(findOutlier([2, 6, 8, 10, 3]));
