// Title: Sum Without Highest and Lowest Number
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  if (!Array.isArray(array) || array === null || array.length <= 2) return 0;

  const minIndex = array.findIndex((element) => element === Math.min(...array));
  const maxIndex = array.findIndex((element) => element === Math.max(...array));

  console.log(maxIndex);

  return array
    .filter((element, index) => {
      if (index !== minIndex && index !== maxIndex) {
        return element;
      }
    })
    .reduce((accumulator, current) => accumulator + current, 0);
}

console.log(sumArray([0, 1, 6, 10, 10]));
