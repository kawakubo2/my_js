let data = ['Python', 'PHP', 'JavaScript'];
console.log(delete data[0]);
console.log(data);
console.log(data.length); // lengthプロパティは配列の要素数を保持

let data2 = ['Python', 'PHP', 'JavaScript'];
let item = data2.shift(); // shiftメソッドは配列要素を削除
console.log(`削除されたもの: ${item}`);
console.log(`data: ${data2.toString()}`);
