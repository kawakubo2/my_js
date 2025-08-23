console.log('--- 削除 ---');
const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(`元の配列: ${array1.toString()}`);
const result1 = array1.splice(2, 3);
console.log('array1.splice(2, 3)');
console.log(`splice後の配列: ${array1.toString()}`);
console.log(`削除された要素: ${result1.toString()}`);