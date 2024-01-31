// Title: Beginner Series #2 Clock
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}

console.log(past(0, 1, 1));
