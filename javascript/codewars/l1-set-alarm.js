// Title: L1: Set Alarm
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}

console.log(setAlarm(true, true));
