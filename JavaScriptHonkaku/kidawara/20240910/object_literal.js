// オブジェクトリテラル {key1: value1, key2: value2, ...}
const member = {name: '田中一郎', age: 55, weight: 82, height: 178};
console.log(member['name']); // ブラケット構文
console.log(member.name); // ドット構文
// オブジェクトリテラルにキーと値を追加する方法
member['email'] = 'ichiro@tanaka.com';
console.log(member);
for (const key in member) {
    console.log();
}
for (const [key, value] of Object.entries(member)) {
    console.log(key + ': ' + value);
}


// 連想配列 {key1: value1, key2: value2, ...}
const employees = {1001: 'Suzuki', 1002: 'Sasaki', 1004: 'Endo'};
employees['1005'] = 'Sato';
console.log(employees);

console.log('---< 連想配列専用の繰り返し構文 >---');
for (const number in employees) {
    console.log(number + ': ' + employees[number]);
}
console.log('---< キーと値を同時に取り出す >---');
for (const [number, name] of Object.entries(employees)) {
    console.log(number + ': ' + name);
}