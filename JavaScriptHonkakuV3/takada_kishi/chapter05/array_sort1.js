const numbers = [5, 23, 2, 10, 1, 6, 16];
numbers.sort(); // 1, 10, 16, 2, 23, 5, 6  ---> 1, 2, 5, 6, 10, 16, 23
console.log(numbers);

// [5, 1, 10, 2, 3, 4, 1, 2];

/*
 function(a, b) {
  if (a < b) return -1;
  if (a === b) return 0;
  if (a > b) return 1;
}
上記の関数をコンパレータ(Comparator)と呼ぶ
*/
numbers.sort(function(n1, n2) {
  return n1 - n2;
});
console.log(numbers);