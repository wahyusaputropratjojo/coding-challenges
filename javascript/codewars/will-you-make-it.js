// Title: Will You Make It?
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return distanceToPump <= mpg * fuelLeft ? true : false;
}

console.log(zeroFuel());
