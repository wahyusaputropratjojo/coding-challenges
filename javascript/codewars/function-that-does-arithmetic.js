// Title: Make a Function that does Arithmetic!
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
    default:
      return `Operator "${operator}" not available`;
  }
}

console.log(arithmetic(1, 2, "subtract"));
