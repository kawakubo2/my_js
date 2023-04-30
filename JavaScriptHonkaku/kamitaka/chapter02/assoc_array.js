// 連想配列
const empleoyees = { A001: '山田太郎', B003: '横山花子', A002: '田中一郎', C001: '山本久美子', 100: 'ABC' };

// console.log(employees.100); 数字のキーはドット演算子は使用不可
console.log(empleoyees['100']);

// オブジェクトリテラル
const member = { name: '山田太郎', age: 39, weight: 70, height: 172 };

console.log(member.name); // ドット演算子
console.log(member['name']); // ブラケット構文