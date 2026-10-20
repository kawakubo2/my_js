const array1 = ['A', 'B', 'C', 'D', 'E'];
console.log(`array1: ${array1.toString()}`);

array1.push('F');
console.log(`array1.push('F'): ${array1.toString()}`);
console.log('配列の先頭・末尾に対する要素の追加は複数可能')
array1.push('G', 'H', 'I');
console.log(`array1.push('G', 'H', 'I'): ${array1.toString()}`);

console.log('配列の先頭・末尾の削除は1個のみ');
const d1 = array1.pop();
console.log(`削除された要素: ${d1}`);
console.log(`array1.pop(): ${array1.toString()}`);