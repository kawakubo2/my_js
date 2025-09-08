console.log('--- 削除 ---');
const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(`元の配列: ${array1.toString()}`);
const result1 = array1.splice(2, 3);
console.log('array1.splice(2, 3)');
console.log(`splice後の配列: ${array1.toString()}`);
console.log(`削除された要素: ${result1.toString()}`);

console.log('--- 置換 ---');
const array2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(`元の配列: ${array2.toString()}`);
const result2 = array2.splice(2, 3, 'W', 'X', 'Y', 'Z');
console.log("array2.splice(2, 3, 'W', 'X', 'Y', 'Z')");
console.log(`splice後の配列: ${array2.toString()}`);
console.log(`削除された要素: ${result2.toString()}`);

console.log('--- 挿入 ---');
const array3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(`元の配列: ${array3.toString()}`);
const result3 = array3.splice(2, 0, 'W', 'X', 'Y', 'Z');
console.log("array3.splice(2, 0, 'W', 'X', 'Y', 'Z')");
console.log(`splice後の配列: ${array3.toString()}`);
console.log(`削除された要素: ${result3.toString()}`);