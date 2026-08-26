// オブジェクトリテラル
const member = {
  name: '山田太郎',
  birthdate: new Date(2000, 7, 26),
  height: 168,
  weight: 72,
}

console.log(member['name']);
// console.log(member.name);
console.log(member['birthdate'].toLocaleDateString());
console.log(member['height']);
console.log(member['weight']);

console.log('--- ループでキー(プロパティ)と値を取得 ---');
for (const key in member) {
  console.log(member[key]);
}