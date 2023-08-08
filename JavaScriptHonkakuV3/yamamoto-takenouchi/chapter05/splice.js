const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

console.log('---< 削除関数 >---');
console.log('-- 操作前 --');
console.log(array1.toString());
console.log('const array2 = array1.splice(2, 3)');
const array2 = array1.splice(2, 3); // 2番目から3個分削除 ---> 削除したものは配列として返される。
console.log(`削除分: ${array2}`);
console.log(`削除後の元の配列: ${array1}`);

const array3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

console.log('---< 置換関数 >---');
console.log('-- 操作前 --');
console.log(array3.toString());
console.log("const array4 = array3.splice(2, 3, 'X', 'Y')");
const array4 = array3.splice(2, 3, 'X', 'Y'); // 2番目から3個分削除 ---> 削除したものは配列として返される。
console.log(`削除分: ${array4}`);
console.log(`削除後の元の配列: ${array3}`);

const array5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

console.log('---< 挿入関数 >---');
console.log('-- 操作前 --');
console.log(array5.toString());
console.log("const array6 = array5.splice(2, 0, 'X', 'Y')");
const array6 = array5.splice(2, 0, 'X', 'Y'); // 2番目から0個分削除 ---> 削除せずに2番目に要素を挿入する 
console.log(`削除分: ${array6}`);
console.log(`削除後の元の配列: ${array5}`);

