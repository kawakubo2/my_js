/*
引数a, bのうち、大きい方の値を返す関数
*/
function max2(a, b) {
  // if (a > b) {
  //   return a;
  // } else {
  //   return b;
  // }
  return a > b ? a : b;
}

console.log(max2(15, 9));
console.log(max2(10, 10));
console.log(max2(5, 13));
console.log(max2(-5, -13));