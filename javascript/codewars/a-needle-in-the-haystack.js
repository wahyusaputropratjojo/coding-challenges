// Title: A Needle in the Haystack
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
  const index = haystack.indexOf("needle");

  return `found the needle at position ${index}`;
}

console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ]),
);
