// Title: Disemvowel Trolls
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(string) {
  return string.split(/[aeiou]/gi).join("");
}

console.log(disemvowel("This website is for losers LOL!"));
