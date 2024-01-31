// Title: List Filtering
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(array) {
  return array.filter((element) => typeof element === "number");
}

console.log(filter_list([1, 2, "a", "b"]));
