const array1 = ['D', 'E', 'F', 'G', 'H'];
console.log(`array1: ${array1.toString()}`);

array1.unshift('A', 'B', 'C');
console.log(`array1.unshift('A', 'B', 'C'): ${array1.toString()}`);

const d1 = array1.shift();
console.log(`削除された要素: ${d1}`);
console.log(`array1.shift(): ${array1.toString()}`);