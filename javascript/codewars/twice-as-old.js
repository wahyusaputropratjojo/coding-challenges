// Title: Twice as Old
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

console.log(twiceAsOld(36, 7));
