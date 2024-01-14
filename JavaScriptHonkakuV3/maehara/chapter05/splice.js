let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

console.log('--- 削除としてのspliceメソッド ---');
console.log(`元の配列: ${array.toString()}`);
console.log('配列の2,3,4番目を削除');
let array1 = array.splice(2, 3);
console.log(`削除された要素: ${array1.toString()}`);
console.log(`元の配列: ${array.toString()}`);

console.log('--- 置換えとしてのspliceメソッド ---');
array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`元の配列: ${array.toString()}`);
console.log('配列の2,3,4番目を削除し、その場所に"X","Y"を追加する');
let array2 = array.splice(2, 3, 'X', 'Y');
console.log(`削除された要素: ${array2.toString()}`);
console.log(`元の配列: ${array.toString()}`);

console.log('--- 挿入としてのspliceメソッド ---');
array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`元の配列: ${array.toString()}`);
console.log('配列の2番目と3番目の間に"X","Y","Z"を挿入');
let array3 = array.splice(2, 0, 'X', 'Y', 'Z');
console.log(`削除された要素: ${array3.toString()}`);
console.log(`元の配列: ${array.toString()}`);