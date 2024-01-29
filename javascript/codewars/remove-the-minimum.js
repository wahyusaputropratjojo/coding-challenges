// Title: Remove the Minimum
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {
  let indexToDelete = numbers.findIndex(
    (element) => element === Math.min(...numbers),
  );

  return numbers.filter((_, index) => index !== indexToDelete);
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
