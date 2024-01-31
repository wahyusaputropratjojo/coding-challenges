// Title: Testing 1-2-3
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

function number(array) {
  const list = [];
  for (let a = 0; a < array.length; a++) {
    list.push(`${a + 1}: ${array[a]}`);
  }
  return list;
}

console.log(number(["a", "b", "c"]));
