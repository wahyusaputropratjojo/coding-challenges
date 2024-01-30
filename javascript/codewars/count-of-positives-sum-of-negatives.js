// Title: Count of Positives / Sum of Negatives
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(numbers) {
  if (numbers === null) return [];
  if (numbers.length === 0) return [];

  const countPositives = numbers.filter((number) => number > 0).length;
  const sumNegatives = numbers
    .filter((number) => number < 0)
    .reduce((prev, current) => prev + current, 0);

  return [countPositives, sumNegatives];
}

console.log(countPositivesSumNegatives([]));
