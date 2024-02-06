// Title: Sum of Array Singles
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

function repeats(numbers) {
  return numbers
    .filter(function (number, _, array) {
      return array.indexOf(number) === array.lastIndexOf(number);
    })
    .reduce(function (previous, current) {
      return previous + current;
    });
}

console.log(repeat([4, 5, 7, 5, 4, 8]));
