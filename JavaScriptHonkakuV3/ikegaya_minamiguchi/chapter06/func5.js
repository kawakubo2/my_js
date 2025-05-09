/*
2つの数値差の差を求め返す関数
例: (3, 5)   ---> 2
    (7, 2)   ---> 5
    (12, 5)  ---> 7
    (21, 30) ---> 9
*/
function diff(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}
console.log(diff(3, 5));
console.log(diff(7, 2));
console.log(diff(12, 5));
console.log(diff(21, 30));