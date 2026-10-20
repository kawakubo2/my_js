console.log('--- 削除メソッドとして ---');
const array1 = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(`array1: ${array1.toString()}`);
const array2 = array1.splice(2, 3);
console.log(`削除された要素: ${array2.toString()}`);
console.log(`array1.splice(2, 3): ${array1.toString()}`);

console.log('--- 置換メソッドとして ---');
const array3 = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(`array3: ${array3.toString()}`);
const array4 = array3.splice(2, 3, 'X', 'Y');
console.log(`削除された要素: ${array4.toString()}`);
console.log(`array3.splice(2, 3): ${array3.toString()}`);

console.log('--- 挿入メソッドとして ---');
const array5 = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(`array5: ${array5.toString()}`);
const array6 = array5.splice(2, 0, 'U', 'V', 'W');
console.log(`削除された要素: ${array6.toString()}`);
console.log(`array5.splice(2, 3): ${array5.toString()}`);
