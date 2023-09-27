const a1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log('---< pushメソッド >---');
console.log('a1:' + a1.toString());
console.log("a1.push('X', 'Y', 'Z')");
a1.push('X', 'Y', 'Z');
console.log('a1:' + a1.toString());

const a2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log('---< popメソッド >---');
console.log('a2:' + a1.toString());
console.log('d2 = a2.pop()'); // 削除した要素が返される
const d2 = a2.pop();
console.log(`削除された末尾の要素: ${d2}`);
console.log('a2:' + a2.toString());

const a3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log('---< unshiftメソッド >---');
console.log('a3:' + a3.toString());
console.log("a3.unshift('X', 'Y', 'Z')");
a3.unshift('X', 'Y', 'Z');
console.log('a3:' + a3.toString());

const a4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log('---< shiftメソッド >---');
console.log('a4:' + a1.toString());
console.log('d2 = a4.shift()'); // 削除した要素が返される
const d4 = a4.pop();
console.log(`削除された先頭の要素: ${d4}`);
console.log('a4:' + a4.toString());