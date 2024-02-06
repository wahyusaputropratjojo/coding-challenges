// Title: Remove Exclamation Marks
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(string) {
  return string.replaceAll("!", "");
}

console.log(removeExclamationMarks("Hello World!"));
