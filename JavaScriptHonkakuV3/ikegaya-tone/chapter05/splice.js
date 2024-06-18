
console.log('---削除メソッド---');
const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log('処理前');
console.log(`array1=${array1.toString()}`);
console.log('const array2 = array1.splice(2, 3);');
const array2 = array1.splice(2, 3); // 2番目から3個分削除
console.log('処理後');
console.log(`array1=${array1.toString()}`);
console.log(`array2=${array2.toString()}`);

console.log('---置換メソッド---');
const array3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log('処理前');
console.log(`array3=${array3.toString()}`);
console.log('const array4 = array3.splice(2, 3, "X", "Y");'); // 2番目から3個分削除して、X, Yを追加する
const array4 = array3.splice(2, 3, 'X', 'Y');
console.log('処理後');
console.log(`array3=${array3.toString()}`);
console.log(`array4=${array4.toString()}`);

console.log('---追加メソッド---');
const array5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log('処理前');
console.log(`array5=${array5.toString()}`);
console.log('const array6 = array5.splice(2, 0, "X", "Y");'); // 2番目から0個分削除して、X, Yを追加する
const array6 = array5.splice(2, 0, 'X', 'Y');
console.log('処理後');
console.log(`array5=${array5.toString()}`);
console.log(`array6=${array6.toString()}`);