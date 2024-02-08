// Title: Mumbling
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(string) {
  return string
    .split("")
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}

console.log(accum("abcd"));
