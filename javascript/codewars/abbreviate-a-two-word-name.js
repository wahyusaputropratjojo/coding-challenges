// Title: Abbreviate a Two Word Name
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
  return name
    .toUpperCase()
    .split(" ")
    .map((element) => element.charAt(0))
    .join(".");
}

console.log(abbrevName("Wahyu Pratjojo"));
