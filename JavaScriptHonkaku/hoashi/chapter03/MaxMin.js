console.log(Math.max(5, 2, 9, 1, 10, 8, 2, 7, 4, 6));
const numbers = [5, 2, 9, 1, 10, 8, 2, 7, 4, 6];
/* 
 const max = Math.max(numbers); ---> NaNが返される
 Math.maxメソッドの引数は可変長引数。配列を渡すことはできない。
 ...(spread operator)を使うと配列を要素にばらしてくれる。
*/
console.log(Math.max(...numbers));