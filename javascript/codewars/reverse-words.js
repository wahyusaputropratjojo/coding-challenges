// Title: Reverse Words
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
