// Title: Get the Middle Character
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(string) {
  return string.slice(
    (string.length - 1) / 2,
    Math.floor(string.length / 2 + 1),
  );
}

console.log(getMiddle("wahyu"));

// function getMiddle(string) {
//   if (string.length % 2 === 0) {
//     const middle = [string.length / 2 - 1, string.length / 2];

//     return string
//       .split("")
//       .filter((element, index) => {
//         for (number of middle) {
//           if (index === number) {
//             return element;
//           }
//         }
//       })
//       .join("");
//   }

//   if (string.length % 2 !== 0) {
//     const middle = Math.floor(string.length / 2);

//     return string
//       .split("")
//       .filter((element, index) => {
//         if (index === middle) {
//           return element;
//         }
//       })
//       .join("");
//   }
// }
