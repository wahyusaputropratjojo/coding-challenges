// Title: Find the First Non-Consecutive Number
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive(numbers) {
  if (numbers.length === 0 || numbers.length === 1) return null;

  for (let a = 1; a < numbers.length; a++) {
    if (numbers[a] !== numbers[a - 1] + 1) {
      return numbers[a];
    }
  }

  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4]));
