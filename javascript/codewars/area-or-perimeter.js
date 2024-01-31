// Title: Area or Perimeter
// Difficulty: 8 kyu
// Link: https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

function areaOrPerimeter(l, w) {
  if (l === w) return l * w;
  if (l !== w) return 2 * (l + w);
}

console.log(areaOrPerimeter(3, 3));
