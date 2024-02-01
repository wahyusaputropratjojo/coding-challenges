// Title: Powers of 2
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {
  const array = [];

  for (let i = 0; i <= n; i++) {
    array.push(Math.pow(2, i));
  }

  return array;
}

console.log(powersOfTwo(12));
