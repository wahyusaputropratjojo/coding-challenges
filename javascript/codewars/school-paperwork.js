// Title: School Paperwork
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.log(paperwork(5, 5));
