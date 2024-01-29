// Title: Growth of a Population
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  let year = 0;
  let currentPopulation = p0;
  let predictionPopulation = p;

  while (currentPopulation < predictionPopulation) {
    console.log(currentPopulation);

    currentPopulation = Math.floor(
      currentPopulation + currentPopulation * (percent / 100) + aug,
    );

    year += 1;
  }

  return year;
}

console.log(nbYear(1500, 5, 100, 5000));
