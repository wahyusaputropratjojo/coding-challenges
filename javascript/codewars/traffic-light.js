// Title: Thinkful - Logic Drills: Traffic light
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {
  if (current == "green") return "yellow";
  if (current == "yellow") return "red";
  if (current == "red") return "green";
}

console.log(updateLight("red"));
