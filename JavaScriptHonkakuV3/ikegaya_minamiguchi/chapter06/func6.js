function max2(a, b) {
  return a > b ? a - b: b - a;
}

/*
3つの数値の最大値を返す関数
例
(1, 9, 5)   ---> 9
(7, 8, 7)   ---> 8
(3, 5, 11)  ---> 11
(9, 16, 15) ---> 16
(11, 7, 3)  ---> 1
(5, 5, 5)   ---> 5
(8, 5, 8)   ---> 8
(9, 9, 7)   ---> 9
*/
function max3(a, b, c) {
  return max2(max2(a, b), c);
}

console.log(max3(1, 9, 5));
console.log(max3(7, 8, 7));
console.log(max3(3, 5, 11));
console.log(max3(9, 16, 15));
console.log(max3(11, 7, 3));
console.log(max3(5, 5, 5));
console.log(max3(8, 5, 8));
console.log(max3(9, 9, 7));
console.log(max3(6, 9, 9));

function max4(a, b, c, d) {
  return max2(max2(a, b), max2(c, d));
}