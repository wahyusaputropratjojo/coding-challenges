// Title: Vowel Count
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(string) {
  let vowel = [];
  for (let a = 0; a < string.length; a++) {
    if (
      string[a] === "a" ||
      string[a] === "i" ||
      string[a] === "u" ||
      string[a] === "e" ||
      string[a] === "o"
    )
      vowel.push(string[a]);
  }

  return vowel.length;
}

console.log(getCount("abracadabra"));
