// Title: Is It a Palindrome?
// Difficulty: 6 kyu
// Link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(string) {
  const normal = string.toLowerCase();
  const reverse = string.split("").reverse().join("").toLowerCase();

  return normal === reverse;
}

console.log(isPalindrome("Wahyu"));
