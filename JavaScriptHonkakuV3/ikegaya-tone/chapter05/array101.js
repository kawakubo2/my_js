/*
push, pop, shift, unshiftはarray1を変化させるので破壊的メソッドと呼ぶ
push, unshiftは2個以上追加可能
pop, pushは1個のみ削除
*/
const array1 = ['D', 'E', 'F', 'G', 'H'];
array1.push('I', 'J');
console.log(array1);
array1.unshift('A', 'B', 'C');
console.log(array1);
console.log(array1.pop());
console.log(array1);
console.log(array1.shift());
console.log(array1);

const array2 = ['J', 'K', 'L'];
array1.push(...array2);
console.log(array1);

const array3 = ['C', 'D', 'X'];
const array4 = array1.concat(array3); // concatは非破壊的メソッド, 2つの配列を結合した結果を返す。

console.log(`array1=${array1.toString()}`);
console.log(`array4=${array4.toString()}`);


// console.log(array1.slice(1, 3)); // array1を変化させないので非破壊的メソッドと呼ぶ
// console.log(array1);
