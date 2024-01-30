// Title: Total Amount of Points
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  return games
    .map((element) => {
      const team = element.charAt(0);
      const opponent = element.charAt(2);
      if (team > opponent) return 3;
      if (team < opponent) return 0;
      if (team == opponent) return 1;
    })
    .reduce((prev, current) => prev + current);
}

console.log(
  points([
    "1:1",
    "2:2",
    "3:3",
    "4:4",
    "2:2",
    "3:3",
    "4:4",
    "3:3",
    "4:4",
    "4:4",
  ]),
);
