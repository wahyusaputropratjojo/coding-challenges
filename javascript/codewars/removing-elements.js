// Title: Removing Elements
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(array) {
  const newArray = [];

  for (let a = 0; a < array.length; a += 2) {
    newArray.push(array[a]);
  }

  return newArray;
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
