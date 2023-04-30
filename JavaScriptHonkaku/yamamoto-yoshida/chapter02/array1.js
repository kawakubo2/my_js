console.log('---< concat 非破壊的メソッド >---');

const array1 = ['A', 'B', 'C', 'D', 'E', 'F'];
const array2 = ['B', 'D', 'F', 'H', 'J'];
console.log(`array1 = ${array1.toString()}`);
console.log(`array2 = ${array2.toString()}`);
const array3 = array1.concat(array2);
console.log(`array1 = ${array1.toString()}`);
console.log(`array2 = ${array2.toString()}`);
console.log(`array3 = ${array3.toString()}`);

console.log('---< join >---');
const array4 = ['JavaScript', 'C#', 'Python', 'C++', 'Go', 'Rust', 'C'];
console.log(array4.join(':'));

console.log('---< slice 非破壊的メソッド >---');
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < array5.length; i += 3) {
    let end = i + 3 >= array5.length ? array5.length : i + 3;
    console.log(array5.slice(i, end));
}

const array6 = ['A', 'B', 'C', 999, 2, 3, 4, 'D', 'E'];
const array7 = array6.slice(array6.indexOf(999), array6.indexOf(999) + 4);
console.log(array7);

console.log('---< splice 破壊的メソッド >---');

console.log('== 削除 ==');
const array8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`削除前: ${array8.toString()}`);
const array9 = array8.splice(2, 3); // 2番目から3個削除
console.log(`削除後: ${array8.toString()}`);
console.log(`戻り値: ${array9.toString()}`);

console.log('== 置換 ==');
const array10 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`置換前: ${array8.toString()}`);
const array11 = array10.splice(2, 3, 'X', 'Y'); // 2番目から3個削除, 'X'と'Y'を追加
console.log(`置換後: ${array10.toString()}`);
console.log(`戻り値: ${array11.toString()}`);

console.log('== 挿入 ==');
const array12 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(`挿入前: ${array12.toString()}`);
const array13 = array12.splice(2, 0, 'X', 'Y'); // 2番目から0個削除, 'X'と'Y'を追加
console.log(`挿入後: ${array12.toString()}`);
console.log(`戻り値: ${array13.toString()}`);

console.log('---< copyWithin 破壊的メソッド >---');
const array14 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
array14.copyWithin(1, 6, 8);
console.log(`array14 = ${array14.toString()}`);

console.log('---< fill 破壊的メソッド >---');
const array15 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
array15.fill(0, 2, 5);
console.log(`array15 = ${array15.toString()}`);

console.log('---< pop/push/shift/unshift 破壊的メソッド >---');
const array16 = [];
array16.push('A', 'B', 'C');
console.log(`array16 = ${array16.toString()}`);
array16.pop();
console.log(`array16 = ${array16.toString()}`);
array16.unshift('X', 'Y', 'Z');
console.log(`array16 = ${array16.toString()}`);
array16.shift();
console.log(`array16 = ${array16.toString()}`);

const array17 = [5, 12, 1, 2, 28, 3, 4];
array17.sort(function(x, y) { return x - y; });
console.log(`array17 = ${array17.toString()}`);



