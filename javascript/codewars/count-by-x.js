// Title: Count by X
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
}

console.log(countBy(1, 10));
